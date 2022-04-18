// import { paginationContainer, maxPrevBtnPagination, maxNextBtnPagination, prevBtnPagination, nextBtnPagination, numberPagination } from '../../main/js/variables.js';


// fetch('./js/pets.json')
//   .then(res => res.json())
//   .then(parse => {
//     return parse.map((elem) => {
//       return elem;
//     })
//   })
//   .then(data => {
//     getRandom(data);
//     createColumns(data);
//     numberPagination.addEventListener('click', () => {
//       console.log('click');
//     })
//   })

// function getRandom(data) {
//   return data.sort(() => Math.random() > 0.5 ? 1 : -1);
// };

// export function createColumns(data) {
//   let pets = getRandom(data);
//   let columns = pets.map((elem, i) => {
//     const column = document.createElement('div');
//     const columnItem = document.createElement('div');
//     const columnImage = document.createElement('div');
//     const columnPetName = document.createElement('div');
//     const columnBtn = document.createElement('button');
//     column.className = 'our-friends__column';
//     columnItem.className = 'our-friends__column-item';
//     columnImage.className = 'our-friends__column-image';
//     columnPetName.className = 'our-friends__column-pets-name';
//     columnBtn.className = 'our-friends__column-button';
//     paginationContainer.append(column);
//     column.prepend(columnItem);
//     columnItem.appendChild(columnImage);
//     columnItem.appendChild(columnPetName);
//     columnItem.appendChild(columnBtn);
//     let array = [column, columnItem, columnImage, columnPetName, columnBtn];
//     array.forEach((elem) => elem.classList.add(`${pets[i].name}`));
//     columnImage.style.backgroundImage = `url(${pets[i].img})`;
//     columnPetName.textContent = `${pets[i].name}`;
//     columnBtn.textContent = 'Learn more';
//     return column;
//   });
//   return columns;
// }

