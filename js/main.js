/* Nav active state */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
})();

/* Mobile nav menu */
(function () {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const menu   = document.querySelector('.nav-mobile-menu');
  const close  = document.querySelector('.nav-mobile-close');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () { menu.classList.add('open'); });
  if (close) close.addEventListener('click', function () { menu.classList.remove('open'); });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { menu.classList.remove('open'); });
  });
})();

/* Contact form submit */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent ✓';
    btn.disabled = true;
    btn.style.opacity = '0.6';
  });
}

/* Work page filter */
document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(function (card) {
      card.style.display = (filter === 'all' || card.dataset.category.includes(filter)) ? '' : 'none';
    });
  });
});
