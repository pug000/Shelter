import menuSwitchActive from "./js/menuActive.js";
import { burgerMenuOpen, burgerMenuClose } from "./js/burgerMenu.js";
import { linkBtns } from "./js/variables.js";
// import { slider } from './js/slider.js';
import pets from './js/pets.json' assert {type: 'json'};

window.onload = () => {
  menuSwitchActive;
  burgerMenuOpen;
  burgerMenuClose;
}

linkBtns.forEach(elem => elem.addEventListener('click', function () {
  location.href = "../../pages/pets/index.html";
}))

