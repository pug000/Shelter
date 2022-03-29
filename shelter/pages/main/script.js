const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
const menuBtns = document.querySelectorAll('.menu__list-item');

function switchMenuActive(event) {
  menuBtns.forEach(elem => {
    elem.classList.remove('menu__list-item--active');
    event.target.classList.add('menu__list-item--active');
  })
}

menuBtns.forEach(elem => elem.addEventListener('click', switchMenuActive));