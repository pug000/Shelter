import pets from './pets.json' assert {type: 'json'};
import { popup, popupOverlay, popupBtn, popupContent, popupContentInner, slider, popupImage, popupItems, popupPetDescription, popupPetBreed, popupPetName, popupContainer } from "./variables.js";


let columns = Array.from(slider.children).map(elem => elem);


export function openPopup(event) {
  pets.forEach((elem) => {
    if (event.target.classList.contains(`${elem.name}`)) {
      document.body.classList.add('lock');
      popup.classList.add('popup--active');
      popupContent.classList.add('popup__content--active');
      popupOverlay.classList.add('popup__overlay--active');
      popupContentInner.classList.add('popup__content-inner--active');
      createPopup(elem);
    };
  });
};

function load() {
  if (window.innerWidth >= 751) {
    popupImage.style.display = 'block';
  }
  if (window.innerWidth <= 750) {
    popupImage.style.display = 'none';
  };
};

load();

window.addEventListener('resize', () => {
  load();
});


function createPopup(pet) {
  popupImage.src = `${pet.img}`;
  popupPetName.innerText = `${pet.name}`;
  popupPetBreed.innerText = `${pet.type} - ${pet.breed}`;
  popupPetDescription.innerText = `${pet.description}`;
  popupItems.innerHTML =
    `<div class="popup__container-pet-item popup__container-pet-age">Age: <span>${pet.age}</span></div>
  <div class="popup__container-pet-item popup__container-pet-inoculation">Inoculations: <span>${pet.inoculations}</span></div>
  <div class="popup__container-pet-item popup__container-pet-diseases">Diseases: <span>${pet.diseases}</span></div>
  <div class="popup__container-pet-item popup__container-pet-parasites">Parasites: <span>${pet.parasites}</span></div>`
};


function closePopup() {
  popupOverlay.classList.remove('popup__overlay--active');
  popup.classList.remove('popup--active');
  popupContent.classList.remove('popup__content--active');
  popupContentInner.classList.remove('popup__content-inner--active');
  document.body.classList.remove('lock');
};

columns.forEach((elem) => elem.addEventListener('click', openPopup));
popupOverlay.addEventListener('click', closePopup);
popupBtn.addEventListener('click', closePopup);