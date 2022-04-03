const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__list-item');
const anchors = document.querySelectorAll('.anchor');

window.addEventListener('scroll', function () {
  let current = '';

  anchors.forEach((elem, index) => {
    const anchorTop = elem.offsetTop;
    const headerHeight = anchors[0].clientHeight;
    const helpHeight = anchors[1].clientHeight;
    const footerHeight = anchors[2].clientHeight;
    if (pageYOffset >= (anchorTop - headerHeight / 2)
      || pageYOffset >= (anchorTop - helpHeight / 2)
      || pageYOffset >= (anchorTop - footerHeight * 2)) {
      current = elem.getAttribute('id').replace('#', '');
    }
  })

  menuLinks.forEach(elem => {
    elem.classList.remove('menu__list-item--active');
    if (elem.getAttribute('href').replace(/#*(?=\.)/, '').slice(1) === current) {
      elem.classList.add('menu__list-item--active')
    }
  })
})