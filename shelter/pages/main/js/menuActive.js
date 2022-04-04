import { menuLinks, anchors, headerHeight, helpHeight, footerHeight } from "./variables.js";

window.addEventListener('scroll', menuSwitchActive)

function menuSwitchActive() {
  let current = '';

  anchors.forEach((elem) => {
    const anchorTop = elem.offsetTop;

    if (pageYOffset >= (anchorTop - headerHeight / 2)
      || pageYOffset >= (anchorTop - helpHeight / 2)
      || pageYOffset >= (anchorTop - footerHeight * 2)) {
      current = elem.getAttribute('id').replace('#', '');
    }
  })

  menuLinks.forEach(elem => {
    elem.classList.remove('menu__list-item--active');
    if (elem.getAttribute('href').replace(/#*(?=\.)/, '').slice(1) === current) {
      elem.classList.add('menu__list-item--active');
    }
  })
}

export default menuSwitchActive;