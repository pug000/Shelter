import pets from './pets.json' assert {type: 'json'};
import { slider, prevBtnSlider, nextBtnSlider } from './variables.js';

let position = 0;
let petsColumn = '';
const movePosition = 100;


function getRandom() {
  return pets.sort(() => Math.random() > 0.5 ? 1 : -1);
};

export function createColumns() {
  let columnsActive = getRandom();

  columnsActive.forEach((pet) => {
    petsColumn +=
      `<div class="our-friends__column">
              <div class="our-friends__column-item">
                <div class="our-friends__column-image" style="background-image: url(${pet.img});"></div>
                <div class="our-friends__column-pets-name">${pet.name}</div>
                <button class="our-friends__column-button">Learn more</button>
              </div>
          </div>`
  });
  slider.insertAdjacentHTML('afterbegin', petsColumn);
};

createColumns();

function setPosition() {
  slider.style.transform = `translateX(${position}%)`;
}

prevBtnSlider.onclick = () => {
  position += movePosition;

  setPosition();
}

nextBtnSlider.onclick = () => {
  position -= movePosition;

  setPosition();
}
