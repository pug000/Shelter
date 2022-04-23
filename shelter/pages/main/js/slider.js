import pets from './pets.json' assert {type: 'json'};
import { openPopup, closePopup, resizePopup } from './popup.js';
import { carouselTrack, slides, slidesLeft, slidesActive, slidesRight, prevBtnSlides, nextBtnSlides, popupOverlay, popupBtn } from './variables.js';

let columnLength = 3;


resizeSlider();
window.addEventListener('resize', () => resizeSlider());
setColumns();
resizePopup();
popupTrigger();

function popupTrigger() {
  slides.forEach((elem) => [...elem.children].forEach((child) => {
    child.addEventListener('click', openPopup);
  }));

  popupOverlay.addEventListener('click', closePopup);
  popupBtn.addEventListener('click', closePopup);
  window.addEventListener('resize', () => resizePopup());
}


function resizeSlider() {
  if (window.offsetWidth >= 1280) {
    columnLength = 3;
    console.log(columnLength);
  }
  if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    columnLength = 2;
  }
  if (window.innerWidth <= 767) {
    columnLength = 1;
  }
}


function getRandom() {
  return [...pets].sort(() => Math.random() > 0.5 ? 1 : -1);
};

function createColumns() {
  const pet = getRandom().slice(0, columnLength);
  for (let i = 0; i < columnLength; i++) {
    const column = document.createElement('div');
    column.classList.add('our-friends__column');
    column.setAttribute('id', `${pet[i].name}`);
    column.innerHTML =
      `<div class="our-friends__column-item" id="${pet[i].name}">
          <div class="our-friends__column-image" id="${pet[i].name}" style="background-image: url(${pet[i].img});"></div>
          <div class="our-friends__column-pets-name">${pet[i].name}</div>
          <button class="our-friends__column-button" id="${pet[i].name}">Learn more</button>
        </div>`
    return column;
  };
};

export function setColumns() {
  for (let i = 0; i < columnLength; i++) {
    const column = createColumns();
    slidesActive.appendChild(column);
  }
  for (let i = 0; i < columnLength; i++) {
    const column = createColumns();
    slidesLeft.appendChild(column);
  }
  for (let i = 0; i < columnLength; i++) {
    const column = createColumns();
    slidesRight.appendChild(column);
  }
};

function moveLeft() {
  carouselTrack.classList.add('transition-left');
  prevBtnSlides.removeEventListener('click', moveLeft);
  nextBtnSlides.removeEventListener('click', moveRight);
};

function moveRight() {
  carouselTrack.classList.add('transition-right');
  prevBtnSlides.removeEventListener('click', moveLeft);
  nextBtnSlides.removeEventListener('click', moveRight);
};

prevBtnSlides.addEventListener('click', moveLeft);
nextBtnSlides.addEventListener('click', moveRight);


carouselTrack.addEventListener('animationend', changeSlides);

function changeSlides(animationEvent) {
  let changedItem;

  if (animationEvent.animationName === 'move-left') {
    carouselTrack.classList.remove('transition-left');
    changedItem = slidesLeft;
    slidesActive.innerHTML = slidesLeft.innerHTML;
  } else {
    carouselTrack.classList.remove('transition-right');
    changedItem = slidesRight;
    slidesActive.innerHTML = slidesRight.innerHTML;
  }

  generateColumns(changedItem);

  prevBtnSlides.addEventListener('click', moveLeft);
  nextBtnSlides.addEventListener('click', moveRight);

  popupTrigger();
};

function createTemplateColumns() {
  const column = document.createElement('div');
  column.classList.add('our-friends__column');
  return column;
};

function generateColumns(changedItem) {
  changedItem.innerHTML = '';
  for (let i = 0; i < columnLength; i++) {
    const column = createTemplateColumns();
    const pets = getRandom().slice(0, columnLength);
    column.setAttribute('id', `${pets[i].name}`);
    column.innerHTML =
      `<div class="our-friends__column-item" id="${pets[i].name}">
      <div class="our-friends__column-image" id="${pets[i].name}" style="background-image: url(${pets[i].img});"></div>
      <div class="our-friends__column-pets-name">${pets[i].name}</div>
      <button class="our-friends__column-button id="${pets[i].name}"">Learn more</button>
    </div>`
    changedItem.appendChild(column);
  };
};