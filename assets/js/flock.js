/* ==========================================================================
   Flock — ants that swarm into a project name, hold it, then disperse.

   Ported from the design export's DCLogic component. The algorithm (pheromone
   trail sensing, elliptical enclosure, letterform sampling) is unchanged; only
   the framework bindings are replaced with plain DOM. Word list and links come
   from the canvas's data-words / data-urls attributes so Hugo drives content.
   ========================================================================== */
(function () {
  var canvas = document.querySelector('[data-flock]');
  if (!canvas) return;

  var captionEl = document.querySelector('[data-flock-caption]');
  var words = JSON.parse(canvas.getAttribute('data-words') || '[]');
  var urls = JSON.parse(canvas.getAttribute('data-links') || '[]');
  if (!words.length) return;

  var DENSITY = 2600;
  var HOLD_S = 4;

  var state = {
    raf: 0, started: false, lastW: 0, phase: 'free', idx: 0,
    t0: 0, prevT: 0, hover: false, targets: [], token: 0,
    decayTick: 0, fontReady: false, startPoll: 0, resizeT: 0
  };

  /* Ink follows the theme: read the resolved token rather than hardcoding. */
  function inkRGB() {
    var v = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim();
    var m = v.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (m) return parseInt(m[1], 16) + ',' + parseInt(m[2], 16) + ',' + parseInt(m[3], 16);
    m = v.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (m) return m[1] + ',' + m[2] + ',' + m[3];
    return '17,17,16';
  }

  function labelFor(ph) {
    return (ph === 'form' || ph === 'hold') ? words[state.idx] + ' (click to open)' : '';
  }

  function setCaption(text) {
    if (captionEl) captionEl.textContent = text;
  }

  function run() {
    var token = ++state.token;
    var INK = inkRGB();

    var measured = Math.round(
      canvas.getBoundingClientRect().width || canvas.clientWidth ||
      (canvas.parentElement && canvas.parentElement.clientWidth) || 0
    );
    var W = Math.max(240, measured || 960);
    var H = 340;
    state.lastW = W;

    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.height = H + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var SC = W / 1000;
    var P = {
      density: Math.max(800, Math.round(DENSITY * (W * H) / 383520)),
      dot: W < 520 ? 1.1 : 1,
      fade: 0.16,
      speed: Math.max(0.24, SC * 0.45),
      sense: Math.max(5, 13 * SC),
      turn: 0.3,
      wander: 0.55,
      hop: Math.max(8, 24 * SC),
      holdTurn: 0.32,
      wanderHold: 0.08,
      hold: HOLD_S,
      margin: Math.max(10, 40 * SC),
      inset: Math.max(8, 26 * SC),
      gravity: 0.22,
      falloff: 3.4,
      seed: 0.22
    };

    var fam = "'ABC Oracle Trial', ui-sans-serif, system-ui, sans-serif";
    function faceReady() {
      try { return document.fonts.check("500 40px 'ABC Oracle Trial'"); } catch (err) { return true; }
    }

    /* Letterforms have to sit inside the ellipse, not just inside the canvas. */
    var FITW = (W / 2 - P.margin) * 1.34;
    var FITH = (H / 2 - P.inset) * 1.26;

    function sample() {
      var off = document.createElement('canvas');
      off.width = W; off.height = H;
      var o = off.getContext('2d');
      state.targets = words.map(function (w) {
        o.clearRect(0, 0, W, H);
        var size = Math.round(H * 0.52);
        function setFont(px) { o.font = '500 ' + px + 'px ' + fam; }
        setFont(size);
        while ((o.measureText(w).width > FITW || size * 1.05 > FITH) && size > 12) {
          size -= 2; setFont(size);
        }
        o.textAlign = 'center';
        o.textBaseline = 'middle';
        o.fillStyle = '#000';
        o.fillText(w, W / 2, H / 2);
        var d = o.getImageData(0, 0, W, H).data;
        var pts = [];
        var guard = 0;
        var want = Math.round(P.density * 0.6);
        while (pts.length < want && guard < 900000) {
          guard++;
          var x = Math.random() * W, y = Math.random() * H;
          if (d[(((y | 0) * W) + (x | 0)) * 4 + 3] > 128) pts.push([x, y]);
        }
        return pts;
      });
    }

    state.fontReady = faceReady();
    sample();
    if (!state.fontReady) {
      var tries = 0;
      var poll = setInterval(function () {
        tries++;
        if (faceReady() || tries > 40) { clearInterval(poll); sample(); state.fontReady = true; }
      }, 150);
    }

    var N = P.density;
    var pts = [];
    for (var i = 0; i < N; i++) {
      /* Gaussian scatter so the starting cloud fades out instead of ending on
         a visible edge. */
      var g1 = Math.sqrt(-2 * Math.log(Math.random() || 1e-9)) * Math.cos(6.283 * Math.random());
      var g2 = Math.sqrt(-2 * Math.log(Math.random() || 1e-9)) * Math.sin(6.283 * Math.random());
      pts.push({
        x: W / 2 + g1 * P.seed * (W / 2), y: H / 2 + g2 * P.seed * (H / 2),
        a: Math.random() * 6.28, sp: (0.8 + Math.random() * 0.5) * P.speed,
        d: Math.random(), ti: (Math.random() * 100000) | 0,
        ox: (Math.random() - 0.5) * 2.4, oy: (Math.random() - 0.5) * 2.4,
        cool: 0
      });
    }

    var CS = W < 520 ? 7 : 14, GW = Math.ceil(W / CS), GH = Math.ceil(H / CS);
    var phero = new Float32Array(GW * GH);
    function senseAt(x, y) {
      var gx = (x / CS) | 0, gy = (y / CS) | 0;
      if (gx < 0 || gy < 0 || gx >= GW || gy >= GH) return -1;
      return phero[gy * GW + gx];
    }

    state.phase = 'free';
    state.idx = 0;
    state.t0 = performance.now();

    function setPhase(ph) {
      state.phase = ph;
      state.t0 = performance.now();
      if (ph === 'free') phero.fill(0);
      canvas.style.cursor = (ph === 'form' || ph === 'hold') ? 'pointer' : 'default';
      setCaption(labelFor(ph));
    }

    var cx = W / 2, cy = H / 2, rx = W / 2 - P.margin, ry = H / 2 - P.inset;
    var freeMs = 4200, formMs = 7000, dissolveMs = 3200;
    var vcheck = 0, onScreen = true;

    function step(t) {
      /* Frame-rate independent: one tick is 1/60s, so a slow frame still moves
         the ants the same distance per second. */
      var fdt = Math.min(2.5, Math.max(0.4, (t - (state.prevT || t - 16.667)) / 16.667));
      state.prevT = t;
      if (state.token !== token) return;

      if (--vcheck <= 0) {
        vcheck = 20;
        var r = canvas.getBoundingClientRect();
        onScreen = r.bottom > -200 && r.top < (window.innerHeight || 800) + 200;
      }
      if (!onScreen) { state.raf = requestAnimationFrame(step); return; }

      var dt = t - state.t0;
      var prev = state.phase;
      if (prev === 'free' && dt > freeMs) setPhase('form');
      else if (prev === 'form' && dt > formMs) setPhase('hold');
      else if (prev === 'hold' && dt > P.hold * 1000 && !state.hover) setPhase('dissolve');
      else if (prev === 'dissolve' && dt > dissolveMs) {
        state.idx = (state.idx + 1) % words.length;
        setPhase('free');
      }

      var ph = state.phase;
      var releasing = ph === 'dissolve';
      var rel = releasing ? Math.min(1, (t - state.t0) / dissolveMs) : 0;
      var bound = ph === 'form' || ph === 'hold' || releasing;
      var tg = state.targets[state.idx] || [];

      if (!bound) {
        state.decayTick = (state.decayTick + 1) % 3;
        if (state.decayTick === 0) {
          for (var ci = 0; ci < phero.length; ci++) phero[ci] *= 0.871;
        }
      }

      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,' + P.fade + ')';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(' + INK + ',0.5)';
      var ds = P.dot;

      for (var j = 0; j < N; j++) {
        var p = pts[j];

        if (bound && tg.length) {
          var q = tg[p.ti % tg.length];
          var dx = q[0] + p.ox - p.x, dy = q[1] + p.oy - p.y;
          var dd = Math.sqrt(dx * dx + dy * dy) || 1;

          /* Arrived: take another point close by on the same stroke and keep
             walking, so held words stay alive instead of freezing. */
          if (dd < 6 && (p.cool = p.cool - 1) <= 0) {
            p.cool = 5;
            var best = -1, bestD = 1e9;
            for (var k = 0; k < 4; k++) {
              var cand = (Math.random() * tg.length) | 0;
              var cq = tg[cand];
              var cdx = cq[0] - p.x, cdy = cq[1] - p.y;
              var cD = cdx * cdx + cdy * cdy;
              if (cD < bestD && cD < P.hop * P.hop) { bestD = cD; best = cand; }
            }
            if (best >= 0) p.ti = best;
            q = tg[p.ti % tg.length];
            dx = q[0] + p.ox - p.x; dy = q[1] + p.oy - p.y;
            dd = Math.sqrt(dx * dx + dy * dy) || 1;
          }

          var ease = rel * rel * (3 - 2 * rel);
          var ramp = ph === 'hold' ? 1
            : (releasing ? (1 - ease)
              : Math.max(0, Math.min(1, (dt / formMs - p.d * 0.62) / 0.38)));
          var da = Math.atan2(dy, dx) - p.a;
          while (da > Math.PI) da -= 6.283;
          while (da < -Math.PI) da += 6.283;
          p.a += da * (0.018 + (P.holdTurn - 0.018) * ramp) * fdt;
          p.a += (Math.random() - 0.5) * (P.wander - (P.wander - P.wanderHold) * ramp) * fdt;
          if (!releasing && Math.random() < 0.004 * (1 - ramp)) p.a += (Math.random() - 0.5) * 2;

          if (releasing) {
            /* The enclosure still pulls during release, so nobody drifts onto
               the boundary and traces it as a visible curve. */
            var rnx = (p.x - cx) / rx, rny = (p.y - cy) / ry;
            var rrel = Math.sqrt(rnx * rnx + rny * rny);
            if (rrel > 0.02) {
              var rca = Math.atan2(cy - p.y, cx - p.x);
              var rda = rca - p.a;
              while (rda > Math.PI) rda -= 6.283;
              while (rda < -Math.PI) rda += 6.283;
              p.a += rda * Math.min(0.4, P.gravity * Math.pow(rrel, P.falloff)) * fdt;
            }
          }
        } else {
          var SD = P.sense;
          var cA = senseAt(p.x + Math.cos(p.a) * SD, p.y + Math.sin(p.a) * SD);
          var cL = senseAt(p.x + Math.cos(p.a - 0.52) * SD, p.y + Math.sin(p.a - 0.52) * SD);
          var cR = senseAt(p.x + Math.cos(p.a + 0.52) * SD, p.y + Math.sin(p.a + 0.52) * SD);
          if (cA >= cL && cA >= cR) { /* hold course */ }
          else if (cL > cR) p.a -= P.turn * fdt;
          else if (cR > cL) p.a += P.turn * fdt;
          p.a += (Math.random() - 0.5) * P.wander * fdt;
          if (Math.random() < 0.006) p.a += (Math.random() - 0.5) * 2.2;

          /* Gravity toward the middle: negligible at the centre, sharper further out. */
          var gnx = (p.x - cx) / rx, gny = (p.y - cy) / ry;
          var rr = Math.sqrt(gnx * gnx + gny * gny);
          if (rr > 0.02) {
            var ca = Math.atan2(cy - p.y, cx - p.x);
            var d2 = ca - p.a;
            while (d2 > Math.PI) d2 -= 6.283;
            while (d2 < -Math.PI) d2 += 6.283;
            p.a += d2 * Math.min(0.4, P.gravity * Math.pow(rr, P.falloff)) * fdt;
          }

          var dgx = (p.x / CS) | 0, dgy = (p.y / CS) | 0;
          if (dgx >= 0 && dgy >= 0 && dgx < GW && dgy < GH) {
            var di = dgy * GW + dgx;
            if (phero[di] < 6) phero[di] += 1.1;
          }
        }

        var vx = Math.cos(p.a) * p.sp, vy = Math.sin(p.a) * p.sp;
        p.x += vx * fdt; p.y += vy * fdt;

        var nx = (p.x - cx) / rx, ny = (p.y - cy) / ry;
        var rr2 = nx * nx + ny * ny;
        if (rr2 > 1) {
          var kk = Math.sqrt(rr2);
          p.x = cx + (nx / kk) * rx;
          p.y = cy + (ny / kk) * ry;
          var gx = nx / (rx * kk), gy = ny / (ry * kk);
          var gl = Math.sqrt(gx * gx + gy * gy) || 1;
          var ux = gx / gl, uy = gy / gl;
          var dot = vx * ux + vy * uy;
          p.a = Math.atan2(vy - 2 * dot * uy, vx - 2 * dot * ux);
        }

        ctx.fillRect(p.x - ds / 2, p.y - ds / 2, ds, ds);
      }

      state.raf = requestAnimationFrame(step);
    }

    state.raf = requestAnimationFrame(step);
  }

  function start() {
    if (state.started) return;
    state.started = true;
    run();
  }

  function restart() {
    cancelAnimationFrame(state.raf);
    state.started = false;
    start();
  }

  /* A ResizeObserver catches the moment layout settles, which is what Firefox
     needs — a window resize event never fires for that. */
  function bindResize() {
    var onResize = function () {
      clearTimeout(state.resizeT);
      state.resizeT = setTimeout(function () {
        var w = Math.round(canvas.getBoundingClientRect().width || canvas.clientWidth || 0);
        if (w >= 200 && Math.abs(w - state.lastW) > 8) restart();
      }, 220);
    };
    window.addEventListener('resize', onResize);
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(onResize).observe(canvas);
    }
  }

  canvas.addEventListener('mouseenter', function () { state.hover = true; });
  canvas.addEventListener('mouseleave', function () { state.hover = false; });
  canvas.addEventListener('click', function (e) {
    e.preventDefault();
    if (state.phase === 'form' || state.phase === 'hold') {
      var url = urls[state.idx];
      if (url) window.location.href = url;
    }
  });

  /* Repaint the ants in the new ink when the theme flips. */
  new MutationObserver(restart).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });

  start();
  bindResize();
})();
