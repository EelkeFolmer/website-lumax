/* Mobile nav toggle, mobile hero carousel, and the footer theme control. */
(function () {
  /* ---- Nav ---- */
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- Theme control ---- */
  var themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn && window.lumaxTheme) {
    var label = function () {
      themeBtn.textContent = window.lumaxTheme.current() === 'dark' ? 'day theme' : 'night theme';
    };
    label();
    themeBtn.addEventListener('click', function () {
      window.lumaxTheme.toggle();
      label();
    });
  }

  /* ---- Mobile hero carousel ----
     The track holds the 4 cells plus the first 2 repeated, so advancing past
     the last one lands on a duplicate and can snap back invisibly. */
  var track = document.querySelector('[data-hero-track]');
  var dots = document.querySelector('[data-hero-dots]');
  if (!track) return;

  var CELLS = 4;
  var STEP_PCT = 100 / 6; /* six cells in a 300%-tall track */
  var i = 0;
  var timer = 0;

  var mq = window.matchMedia('(max-width: 760px)');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function paintDots() {
    if (!dots) return;
    var spans = dots.children;
    for (var d = 0; d < spans.length; d++) {
      spans[d].classList.toggle('is-active', d === i % CELLS);
    }
  }

  function go(n) {
    i = n;
    track.style.transform = 'translateY(-' + (i * STEP_PCT) + '%)';
    paintDots();
    if (i >= CELLS) {
      /* Land on the duplicate, then snap back without animating. */
      setTimeout(function () {
        track.style.transition = 'none';
        i = i - CELLS;
        track.style.transform = 'translateY(-' + (i * STEP_PCT) + '%)';
        void track.offsetHeight;
        track.style.transition = '';
      }, 900);
    }
  }

  function play() {
    stop();
    if (!mq.matches || reduced.matches) return;
    timer = setInterval(function () { go(i + 1); }, 5000);
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = 0; }
  }

  function sync() {
    if (mq.matches) { play(); }
    else { stop(); track.style.transform = ''; i = 0; paintDots(); }
  }

  mq.addEventListener('change', sync);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else sync();
  });

  paintDots();
  sync();
})();
