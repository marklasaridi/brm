const menuButton = document.querySelector('.ui-menu-button');
const navbar = document.querySelector('.ui-navbar');

window.addEventListener('scroll', () => {
  if (!navbar.classList.contains('is-menu-open')) {
    return;
  }

  navbar.classList.remove('is-menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
  menuIcon.textContent = '☰';
});

menuButton.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('is-menu-open');

  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Закрыть меню' : 'Открыть меню'
  );

  menuIcon.textContent = isOpen ? '×' : '☰';
});

document.querySelector('.ui-nav').addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) return;

  document
    .querySelectorAll('.ui-nav a')
    .forEach(item => item.classList.remove('is-active'));


  link.classList.add('is-active');
});
