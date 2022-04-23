import { menuPetsLinks, header, footer } from "../../main/js/variables.js";

const headerHeight = header.clientHeight;
const footerHeight = footer.clientHeight;

window.addEventListener('scroll', menuSwitchActive)

function menuSwitchActive() {
  let current = '';

  if (pageYOffset >= (header.offsetTop - headerHeight / 2)) {
    current = header.getAttribute('id').replace('#', '');
  }

  if (pageYOffset >= (footer.offsetTop - footerHeight * 2)) {
    current = footer.getAttribute('id').replace('#', '');
  }

  menuPetsLinks.forEach(elem => {
    elem.classList.remove('burger-menu__list-item-pets-page--active');
    if (elem.getAttribute('href').replace(/#*(?=\.)/, '').slice(1) === current) {
      elem.classList.add('burger-menu__list-item-pets-page--active');
    }
  })
}

export default menuSwitchActive;