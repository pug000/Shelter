import pets from './pets.json' assert {type: 'json'};
import { paginationContainer, maxPrevBtnPagination, maxNextBtnPagination, prevBtnPagination, nextBtnPagination, numberPagination, popupOverlay, popupBtn } from '../../main/js/variables.js';
import { openPopup, closePopup, resizePopup } from './popup.js';

let section = 8;
let maxColumn = 48;
let number = 1;
resizePagination();
const pagination = maxColumn / section;
export const columns = paginationContainer.children;


window.addEventListener('resize', () => resizePagination());
createColumns();
showColumns();

window.addEventListener('resize', () => showColumns());
prevBtnPagination.addEventListener('click', function () {
  number--;
  showColumns();
  check();
});

nextBtnPagination.addEventListener('click', function () {
  number++;
  showColumns();
  check();
});

maxPrevBtnPagination.addEventListener('click', function () {
  number = 1;
  check();
  showColumns();
})

maxNextBtnPagination.addEventListener('click', function () {
  number = pagination;
  check();
  showColumns();
});

[...columns].forEach((elem) => elem.addEventListener('click', openPopup));
popupOverlay.addEventListener('click', closePopup);
popupBtn.addEventListener('click', closePopup);
window.addEventListener('resize', () => resizePopup());


function resizePagination() {
  if (window.innerWidth >= 1280) {
    section = 8;
  }
  if (window.innerWidth <= 1279 && window.innerWidth >= 768) {
    section = 6;
  }
  if (window.innerWidth <= 767) {
    section = 3;
  }
}

function repeatArrayWithPets() {
  const repeatedData = [].concat.apply([], Array(6).fill(pets));
  return repeatedData;
};

export function splitArray() {
  const repeatedData = repeatArrayWithPets();
  const chunkSize = 8;
  const splitedData = [];

  for (let i = 0; i < repeatedData.length; i += chunkSize) {
    const chunk = repeatedData.slice(i, i + chunkSize);
    splitedData.push(chunk);
  }
  return splitedData;
}

function getRandom() {
  const splitedData = splitArray();
  const randomPets = splitedData.map((elem) => {
    return elem.sort(() => Math.random() > 0.5 ? 1 : -1)
  });
  return randomPets;
};

export function createColumns() {
  const pets = getRandom();
  pets.forEach((elem) => {
    elem.forEach((pet) => {
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
      paginationContainer.append(column);
      column.prepend(columnItem);
      columnItem.appendChild(columnImage);
      columnItem.appendChild(columnPetName);
      columnItem.appendChild(columnBtn);
      const array = [column, columnItem, columnImage, columnPetName, columnBtn];
      array.forEach((elem) => elem.setAttribute('id', `${pet.name}`));
      columnImage.style.backgroundImage = `url(${pet.img})`;
      columnPetName.textContent = `${pet.name}`;
      columnBtn.textContent = 'Learn more';
    });
    showColumns(pets);
  });
};

export function showColumns() {
  for (let i = 0; i < columns.length; i++) {
    columns[i].classList.remove('our-friends__column--show');
    columns[i].classList.add('our-friends__column--hidden');

    if (i >= (number * section) - section && i < number * section) {
      columns[i].classList.remove('our-friends__column--hidden');
      columns[i].classList.add('our-friends__column--show');
    }
    numberPagination.innerHTML = number;
  };
};

function check() {
  if (number === pagination) {
    nextBtnPagination.setAttribute("disabled", "disabled");
    maxNextBtnPagination.setAttribute("disabled", "disabled");
  } else {
    nextBtnPagination.removeAttribute("disabled", "disabled");
    maxNextBtnPagination.removeAttribute("disabled", "disabled");
  }
  if (number <= 1) {
    prevBtnPagination.setAttribute("disabled", "disabled");
    maxPrevBtnPagination.setAttribute("disabled", "disabled");
  } else {
    prevBtnPagination.removeAttribute("disabled", "disabled");
    maxPrevBtnPagination.removeAttribute("disabled", "disabled");
  }
};