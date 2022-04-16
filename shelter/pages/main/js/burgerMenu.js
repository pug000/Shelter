import { menuList, menuMainLinks, menuPetsLinks, burgerMenuBtn, menuOverlay } from "./variables.js";

burgerMenuBtn.addEventListener('click', burgerMenuOpen);

export function burgerMenuOpen() {
  if (burgerMenuBtn) {
    burgerMenuBtn.classList.toggle('menu__burger-button--active')
    menuList.classList.toggle('menu__list--active');
    menuOverlay.classList.toggle('menu__overlay--active');
    document.body.classList.toggle('lock');
  }
}

menuMainLinks.forEach((elem) => elem.addEventListener('click', burgerMenuClose));
menuPetsLinks.forEach((elem) => elem.addEventListener('click', burgerMenuClose));
menuOverlay.addEventListener('click', burgerMenuClose);

function burgerMenuClose() {
  burgerMenuBtn.classList.remove('menu__burger-button--active');
  menuList.classList.remove('menu__list--active');
  menuOverlay.classList.remove('menu__overlay--active');
  document.body.classList.remove('lock');
}
