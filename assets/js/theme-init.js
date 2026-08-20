/* Runs before first paint to avoid a flash of the wrong theme.
   Dark if the visitor pinned it, else if their OS is dark, else if it is
   night by their device clock (7pm-7am). A manual pin wins and persists. */
(function () {
  var KEY = 'lumax-theme';

  function isNight() {
    var h = new Date().getHours();
    return h >= 19 || h < 7;
  }

  function auto() {
    var osDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return osDark || isNight() ? 'dark' : 'light';
  }

  function resolve() {
    var pinned = null;
    try { pinned = localStorage.getItem(KEY); } catch (err) { /* private mode */ }
    return pinned === 'dark' || pinned === 'light' ? pinned : auto();
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  apply(resolve());

  window.lumaxTheme = {
    toggle: function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (err) { /* private mode */ }
      apply(next);
      return next;
    },
    current: function () {
      return document.documentElement.getAttribute('data-theme');
    }
  };

  // Re-check for tabs left open across dusk/dawn, unless the visitor pinned one.
  setInterval(function () {
    var pinned = null;
    try { pinned = localStorage.getItem(KEY); } catch (err) { /* private mode */ }
    if (pinned !== 'dark' && pinned !== 'light') apply(auto());
  }, 5 * 60 * 1000);
})();
