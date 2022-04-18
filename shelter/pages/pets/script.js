import menuSwitchActive from "./js/menuActivePets.js";
import { burgerMenuOpen, burgerMenuClose } from "../main/js/burgerMenu.js";
import { createColumns } from './js/pagination.js';

window.onload = () => {
  menuSwitchActive;
  burgerMenuOpen;
  burgerMenuClose;
  createColumns;
}