import menuSwitchActive from "./js/menuActive.js";
import { burgerMenuOpen } from "./js/burgerMenu.js";
import { btnNotOnly, btnOurFriends } from "./js/variables.js";
import { setColumns } from './js/slider.js';
import { openPopup } from './js/popup.js';

window.onload = () => {
  menuSwitchActive;
  burgerMenuOpen;
  openPopup;
  setColumns;
};

btnNotOnly.onclick = () => {
  location.href = "./index.html#our-friends";
};

btnOurFriends.onclick = () => {
  location.href = "../../pages/pets/index.html";
};