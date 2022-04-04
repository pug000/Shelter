const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__list-item');
const anchors = document.querySelectorAll('.anchor');
const burgerMenuBtn = document.querySelector('.menu__burger-button');
const menuOverlay = document.querySelector('.menu__overlay');

window.addEventListener('scroll', function () {
  let current = '';

  anchors.forEach((elem) => {
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

burgerMenuBtn.addEventListener('click', burgerMenuOpen);

function burgerMenuOpen(event) {
  if (event.target.classList.contains('menu__burger-button')) {
    burgerMenuBtn.classList.toggle('menu__burger-button--active')
    menuList.classList.toggle('menu__list--active');
    menuOverlay.classList.toggle('menu__overlay--active');
    document.body.classList.toggle('lock');
  }
}

menuLinks.forEach((elem) => elem.addEventListener('click', burgerMenuClose));
menuOverlay.addEventListener('click', burgerMenuClose);

function burgerMenuClose() {
  burgerMenuBtn.classList.remove('menu__burger-button--active');
  menuList.classList.remove('menu__list--active');
  menuOverlay.classList.remove('menu__overlay--active');
  document.body.classList.remove('lock');

}