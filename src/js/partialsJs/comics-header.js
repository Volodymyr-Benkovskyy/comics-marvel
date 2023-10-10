/* import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import { showLoader, hideLoader } from '../helpers/loader.js';
import {
  renderSortContainerList,
  clearSortContainer,
} from './sort-characters.js'; */

/* const galleryHeroCharacters = document.querySelector(
  '.js-header-search-comics'
);
const formSearchCharacters = document.querySelector('.js-header-form-comics');

let itemsPerPage = null;

itemsPerPage = getItemsPerPage();

const ScrollCharacters = () => {
  galleryHeroCharacters.scrollIntoView({ behavior: 'smooth' });
};

const onSearchInputSubmitCharacters = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  let query = formEl.elements.searchQuery.value;
  formSearchCharacters.reset();

  if (query !== '') {
    try {
      showLoader();
      const response = await api.getCharacters({
        nameStartsWith: query,
        limit: itemsPerPage,
        offset: 0,
      });

      if (response.total === 0) {
        hideLoader();
        ScrollCharacters();
        return;
      }
      hideLoader();
      ScrollCharacters();
      clearSortContainer();
      renderSortContainerList(response.results);
    } catch (error) {
      location.replace('../error.html');

      hideLoader();
    }
  }
}; */

//formSearchCharacters.addEventListener('submit', onSearchInputSubmitCharacters);

const headerScrollComics = document.querySelector('.header-comics');

export const onHeaderScrollComics = () => {
  if (scrollY !== 0) {
    headerScrollComics.classList.add('js-header-bg-comics');
  } else {
    headerScrollComics.classList.remove('js-header-bg-comics');
  }
};

window.addEventListener('scroll', onHeaderScrollComics);
