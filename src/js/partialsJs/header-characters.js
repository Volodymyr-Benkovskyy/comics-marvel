import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage';
import { showLoader, hideLoader } from '../helpers/loader';
import { renderSortContainerList, clearSortContainer } from './sort-characters';
const galleryHero = document.querySelector('.js-header-search-characters');
const formSearch = document.querySelector('.js-header-form-characters');

let itemsPerPage = null;

itemsPerPage = getItemsPerPage();

/*   const scrollHeaderSearch = () => {
  galleryHero.scrollIntoView({ behavior: 'smooth' });
};  */

const clearScrollCharPerPage = () => {
  galleryHero.innerHTML = '';
};

const scrollCharPerPage = () => {
  galleryHero.scrollIntoView({ behavior: 'smooth' });
};

export const onSearchInputSubmitCharacters = async event => {
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

      if (response.total === 0) {
        hideLoader();

        return;
      }
      hideLoader();
      scrollCharPerPage();
      clearSortContainer();
      renderSortContainerList(response.results);
      //clearScrollCharPerPage();
      //formSearch.innerHTML = '';
    } catch (error) {
      location.replace('../error.html');

      hideLoader();
    }
  }
};

formSearch.addEventListener('submit', onSearchInputSubmitCharacters);

const headerScroll = document.querySelector('.header-characters');

export const onHeaderScrollCharacters = () => {
  if (scrollY !== 0) {
    headerScroll.classList.add('js-header-bg-characters');
  } else {
    headerScroll.classList.remove('js-header-bg-characters');
  }
};

window.addEventListener('scroll', onHeaderScrollCharacters);
