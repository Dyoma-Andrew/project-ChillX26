// =========================
// HELPERS
// =========================
const qs = (s, scope = document) => scope.querySelector(s);
const qsa = (s, scope = document) => scope.querySelectorAll(s);

// =========================
// MOBILE MENU
// =========================
function initMobileMenu() {
  const menu = qs('.mobile-menu');
  const openBtn = qs('.js-menu-open');
  const closeBtn = qs('.js-menu-close');
  const links = qsa('.js-menu-link');

  if (!menu || !openBtn || !closeBtn) return; // guard

  const open = () => {
    menu.classList.add('is-open');
    document.body.classList.add('no-scroll');
    openBtn.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    openBtn.setAttribute('aria-expanded', 'false');
  };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // закриття по кліку на лінк
  links.forEach(link => link.addEventListener('click', close));

  // ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // клік по фону (опційно, якщо є overlay)
  menu.addEventListener('click', (e) => {
    if (e.target === menu) close();
  });
}

// =========================
// INIT
// =========================
function initApp() {
  initMobileMenu();
  // initForm();
  // initScroll();
}

document.addEventListener('DOMContentLoaded', initApp);
