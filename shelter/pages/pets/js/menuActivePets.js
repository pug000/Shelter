import { menuPetsLinks, header, footer, headerHeight, footerHeight } from "../../main/js/variables.js";

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
    elem.classList.remove('menu__list-item--active');
    if (elem.getAttribute('href').replace(/#*(?=\.)/, '').slice(1) === current) {
      elem.classList.add('menu__list-item--active');
    }
  })
}

export default menuSwitchActive;