import { burgerMenu, menuMainLinks, menuPetsLinks, burgerMenuBtn, menuOverlay, logo, logoCopy } from "./variables.js";

window.addEventListener('resize', () => resizeBurgerMenu());

function resizeBurgerMenu() {
  if (window.innerWidth > 767) {
    burgerMenuClose();
  }
}

export function burgerMenuOpen() {
  if (burgerMenuBtn) {
    burgerMenuBtn.classList.toggle('menu__burger-button--active')
    burgerMenu.classList.toggle('burger-menu--active');
    logo.classList.toggle('logo--hidden');
    logoCopy.classList.toggle('logo-copy--hidden');
    menuOverlay.classList.toggle('menu__overlay--active');
    document.body.classList.toggle('lock');
  };
};

burgerMenuBtn.addEventListener('click', burgerMenuOpen);
menuMainLinks.forEach((elem) => elem.addEventListener('click', burgerMenuClose));
menuPetsLinks.forEach((elem) => elem.addEventListener('click', burgerMenuClose));
menuOverlay.addEventListener('click', burgerMenuClose);

export function burgerMenuClose() {
  burgerMenuBtn.classList.remove('menu__burger-button--active');
  burgerMenu.classList.remove('burger-menu--active');
  logo.classList.remove('logo--hidden');
  logoCopy.classList.add('logo-copy--hidden');
  menuOverlay.classList.remove('menu__overlay--active');
  document.body.classList.remove('lock');
};
