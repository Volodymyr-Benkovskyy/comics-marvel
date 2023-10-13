const openModal = document.querySelector('.js-open-modal');

const sectionModalCharacters = document.querySelector(
  '.js-section-modal-characters'
);

const jsModalBtn = document.querySelector('.js-modal-btn');

const openModalCharacters = () => {
  sectionModalCharacters.classList.remove('display-content');
};
openModal.addEventListener('click', openModalCharacters);

const closeModalCharacters = () => {
  sectionModalCharacters.classList.add('display-content');
};
jsModalBtn.addEventListener('click', closeModalCharacters);
