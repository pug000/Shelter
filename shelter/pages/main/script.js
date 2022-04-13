import menuSwitchActive from "./js/menuActive.js";
import { burgerMenuOpen, burgerMenuClose } from "./js/burgerMenu.js";
import { btnNotOnly, btnOurFriends } from "./js/variables.js";


window.onload = () => {
  menuSwitchActive;
  burgerMenuOpen;
  burgerMenuClose;
};

btnNotOnly.onclick = () => {
  location.href = "./index.html#our-friends";
};

btnOurFriends.onclick = () => {
  location.href = "../../pages/pets/index.html";
};
