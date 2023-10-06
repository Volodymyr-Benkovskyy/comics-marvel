import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage';
import { showLoader, hideLoader } from '../helpers/loader';
import { renderSortContainerList, clearSortContainer } from './sort-characters';

const galleryHeroCharacters = document.querySelector(
  '.js-header-search-characters'
);
const formSearchCharacters = document.querySelector(
  '.js-header-form-characters'
);

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
};

formSearchCharacters.addEventListener('submit', onSearchInputSubmitCharacters);

const headerScroll = document.querySelector('.header-characters');

export const onHeaderScrollCharacters = () => {
  if (scrollY !== 0) {
    headerScroll.classList.add('js-header-bg-characters');
  } else {
    headerScroll.classList.remove('js-header-bg-characters');
  }
};

window.addEventListener('scroll', onHeaderScrollCharacters);
