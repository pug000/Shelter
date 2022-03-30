const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__list-item');
const anchors = document.querySelectorAll('.anchor');

window.addEventListener('scroll', function () {
  let current = '';

  anchors.forEach(elem => {
    const anchorTop = elem.offsetTop;
    const anchorHeight = elem.clientHeight;
    if (pageYOffset >= (anchorTop - anchorHeight / 2)) {
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