import { menuMainLinks, menuPetsLinks, header, help, footer } from "./variables.js";

const headerHeight = header.clientHeight;
const helpHeight = help.clientHeight;
const footerHeight = footer.clientHeight;

window.addEventListener('scroll', menuSwitchActive)

function menuSwitchActive() {
  let current = '';

  if (pageYOffset >= (header.offsetTop - headerHeight / 2)) {
    current = header.getAttribute('id').replace('#', '');
  }

  if (pageYOffset >= (help.offsetTop - helpHeight / 2)) {
    current = help.getAttribute('id').replace('#', '');
  }

  if (pageYOffset >= (footer.offsetTop - footerHeight * 2)) {
    current = footer.getAttribute('id').replace('#', '');
  }

  menuMainLinks.forEach(elem => {
    elem.classList.remove('menu__list-item--active');
    if (elem.getAttribute('href').replace(/#*(?=\.)/, '').slice(1) === current) {
      elem.classList.add('menu__list-item--active');
    }
  })

  menuPetsLinks.forEach(elem => {
    elem.classList.remove('menu__list-item--active');
    if (elem.getAttribute('href').replace(/#*(?=\.)/, '').slice(1) === current) {
      elem.classList.add('menu__list-item--active');
    }
  })
}

export default menuSwitchActive;