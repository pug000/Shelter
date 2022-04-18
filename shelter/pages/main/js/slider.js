import { slider, prevBtnSlider, nextBtnSlider, popupOverlay, popupBtn } from './variables.js';
import { openPopup, closePopup, resizePopup } from './popup.js';

let position = 0;
const movePosition = 100;
let columnLength = 3;

fetch('./js/pets.json')
  .then(res => res.json())
  .then(parse => {
    return parse.map((elem) => {
      return elem;
    })
  })
  .then(data => {
    getRandom(data);
    renderColumns(data);

    prevBtnSlider.onclick = () => {
      let arr = createColumns(data).slice(0, columnLength);
      arr.forEach((elem) => {
        slider.prepend(elem);
      })
      createPrevColumns();
    }

    nextBtnSlider.onclick = () => {
      let arr = createColumns(data).slice(0, columnLength);
      arr.forEach((elem) => {
        slider.append(elem);
      })
      createNextColumns();
    };

    window.addEventListener('resize', resizePopup);
    resizePopup();
    resizeSlider();

    [...slider.childNodes].forEach((elem) => elem.addEventListener('click', openPopup));
    popupOverlay.addEventListener('click', closePopup);
    popupBtn.addEventListener('click', closePopup);
    window.addEventListener('resize', () => resizePopup());
  });

// // window.addEventListener('resize', load);
// // load();
// getRandom(pets);
// renderColumns(pets);

// prevBtnSlider.onclick = () => {
//   renderColumns(pets);
//   createPrevColumns();
// }

// nextBtnSlider.onclick = () => {
//   renderColumns(pets);
//   createNextColumns();
// };

function resizeSlider() {
  if (window.innerWidth >= 1280) {
    columnLength = 3;
  }
  if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    columnLength = 2;
  }
  if (window.innerWidth <= 750) {
    columnLength = 1;
  }
}

function getRandom(data) {
  return data.sort(() => Math.random() > 0.5 ? 1 : -1);
};

export function createColumns(data) {
  let pets = getRandom(data);
  let columns = pets.map((elem, i) => {
    const column = document.createElement('div');
    const columnItem = document.createElement('div');
    const columnImage = document.createElement('div');
    const columnPetName = document.createElement('div');
    const columnBtn = document.createElement('button');
    column.className = 'our-friends__column';
    columnItem.className = 'our-friends__column-item';
    columnImage.className = 'our-friends__column-image';
    columnPetName.className = 'our-friends__column-pets-name';
    columnBtn.className = 'our-friends__column-button';
    column.prepend(columnItem);
    columnItem.appendChild(columnImage);
    columnItem.appendChild(columnPetName);
    columnItem.appendChild(columnBtn);
    let array = [column, columnItem, columnImage, columnPetName, columnBtn];
    array.forEach((elem) => elem.classList.add(`${data[i].name}`));
    columnImage.style.backgroundImage = `url(${data[i].img})`;
    columnPetName.textContent = `${data[i].name}`;
    columnBtn.textContent = 'Learn more';
    return column;
  });
  return columns;
};

function renderColumns(data) {
  let arr = createColumns(data);
  arr.forEach((elem) => {
    slider.append(elem);
    // slider.style.gridTemplateColumns = `repeat(${columns.length}, ${columnWidth}%)`;
  })

}

function createNextColumns() {
  position -= movePosition;
  slider.style.transform = `translateX(${position}%)`;
};

function createPrevColumns() {
  position += movePosition;
  slider.style.transform = `translateX(${position}%)`;
};