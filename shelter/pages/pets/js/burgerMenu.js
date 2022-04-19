import { menuList, menuMainLinks, menuPetsLinks, burgerMenuBtn, menuOverlay, logo, logoCopy } from "../../main/js/variables.js";



export function burgerMenuOpen() {
  if (burgerMenuBtn) {
    burgerMenuBtn.classList.toggle('menu__burger-button--active')
    menuList.classList.toggle('menu__list--active');
    logo.classList.toggle('logo--hidden');
    logoCopy.classList.toggle('logo-copy--hidden');
    menuOverlay.classList.toggle('menu__overlay--active');
  };
};

burgerMenuBtn.addEventListener('click', burgerMenuOpen);
menuMainLinks.forEach((elem) => elem.addEventListener('click', burgerMenuClose));
menuPetsLinks.forEach((elem) => elem.addEventListener('click', burgerMenuClose));
menuOverlay.addEventListener('click', burgerMenuClose);

export function burgerMenuClose() {
  burgerMenuBtn.classList.remove('menu__burger-button--active');
  menuList.classList.remove('menu__list--active');
  logo.classList.remove('logo--hidden');
  logoCopy.classList.add('logo-copy--hidden');
  menuOverlay.classList.remove('menu__overlay--active');
};