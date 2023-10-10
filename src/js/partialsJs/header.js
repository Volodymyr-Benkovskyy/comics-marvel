import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import { showLoader, hideLoader } from '../helpers/loader.js';

const jsScrolHeaderSearch = document.querySelector('.js-scrol-header-search');
const galleryHero = document.querySelector('.js-header-search');
const formSearch = document.querySelector('.js-header-form');
const removeElement = document.querySelector('.js-remove');

let itemsPerPage = null;

itemsPerPage = getItemsPerPage();

const createGalleryHero = data => {
  return data
    .map(el => {
      return `<li class="header-search-item">
        <img class="header-search-img"
       data-set="${el.id}"
        src="${el.thumbnail.path}.${el.thumbnail.extension}"
        alt="${el.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${el.id}">${el.name}</h3>
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
        galleryHero.innerHTML = '<div class="nothing-seach"></div>';
        nothisngSeach = document.querySelector('.nothing-seach');
        scrollHeaderSearch();
        return;
      }
      hideLoader();
      clearGalleryHero();
      renderGalleryHero(response.results);
      scrollHeaderSearch();
    } catch (error) {
      //location.replace('../error.html');
      console.log('Error!', error);
      hideLoader();
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

removeElement.addEventListener('click', () => {
  nothisngSeach.classList.remove('nothing-seach');
});
