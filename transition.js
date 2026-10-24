// Page slide transition
// Adds a white overlay that slides out on load and slides in on nav-link clicks.

document.addEventListener('DOMContentLoaded', function () {
  // Create overlay element
  var overlay = document.createElement('div');
  overlay.id = 'page-overlay';
  document.body.appendChild(overlay);

  // Slide OUT (reveal) on page load
  requestAnimationFrame(function () {
    overlay.classList.add('slide-out');
  });

  // Intercept all internal nav links and .btn links
  document.querySelectorAll('nav a, a.btn').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      // Only intercept same-page relative links
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;

      e.preventDefault();
      overlay.classList.remove('slide-out');
      overlay.classList.add('slide-in');

      // Navigate after the animation completes (400ms)
      setTimeout(function () {
        window.location.href = href;
      }, 400);
    });
  });
});
