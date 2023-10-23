import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import { showLoader, hideLoader } from '../helpers/loader.js';
import { onModalOpenCharactersClick } from './modal-characters';

const jsScrolHeaderSearch = document.querySelector('.js-scrol-header-search');
const galleryHero = document.querySelector('.js-header-search');
const formSearch = document.querySelector('.js-header-form');
//const removeElement = document.querySelector('.js-remove');
const jsModalSearchCharacters = document.querySelector(
  '.js-modal-search-characters'
);

jsModalSearchCharacters.addEventListener('click', event => {
  const target = event.target; // Елемент, на який було клікнуто

  // Перевіряємо, чи клікнуто на певному дитячому елементі
  if (target.matches('.header-search-img, .header-search-title')) {
    const id = target.dataset.id;
    const clickEvent = { target }; // Передаємо об'єкт події та id
    onModalOpenCharactersClick(clickEvent, id);
  }
});

let itemsPerPage = null;

itemsPerPage = getItemsPerPage();

const createGalleryHero = data => {
  return data
    .map(el => {
      return `
      <li class="header-search-item">
        <img class="header-search-img"
       data-id="${el.id}"
        src="${el.thumbnail.path}.${el.thumbnail.extension}"
        alt="${el.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-id="${el.id}">${el.name}</h3>
          </div>
      </li>
    `;
    })
    .join('');
};

const clearGalleryHero = () => {
  galleryHero.innerHTML = '';
};

const renderGalleryHero = data => {
  galleryHero.insertAdjacentHTML('beforeend', createGalleryHero(data));
};

const scrollHeaderSearch = () => {
  jsScrolHeaderSearch.classList.add('js-header-search-top');
  jsScrolHeaderSearch.scrollIntoView({ behavior: 'smooth' });
};

const onSearchInputSubmit = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  let query = formEl.elements.searchQuery.value;
  formSearch.reset();

  if (query !== '') {
    try {
      showLoader();
      const response = await api.getCharacters({
        nameStartsWith: query,
        limit: itemsPerPage,
        offset: 0,
      });

      if (response.results.length === 0) {
        hideLoader();
        nothisngSeach = document.querySelector('.nothing-seach');
        galleryHero.innerHTML = '<div class="nothing-seach"></div>';
        scrollHeaderSearch();
        return;
      }
      hideLoader();
      clearGalleryHero();
      renderGalleryHero(response.results);
      scrollHeaderSearch();
    } catch (error) {
      hideLoader();
      //location.replace('./error.html');
      console.log(error.message);
    }
  }
};

formSearch.addEventListener('submit', onSearchInputSubmit);

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (!scrollY == 0) {
    header.classList.add('js-header-bg');
  } else {
    header.classList.remove('js-header-bg');
  }
});

/* removeElement.addEventListener('click', () => {
  nothisngSeach.classList.remove('nothing-seach');
});
 */
