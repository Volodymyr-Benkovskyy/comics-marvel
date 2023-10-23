import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import { showLoader, hideLoader } from '../helpers/loader.js';
import { renderSortComicsList, clearSortComicsList } from './sort-comics';

const galleryHeroComics = document.querySelector('.js-header-search-comics');
const formSearchComics = document.querySelector('.js-header-form-comics');

let itemsPerPage = null;

itemsPerPage = getItemsPerPage();

const ScrollComics = () => {
  galleryHeroComics.scrollIntoView({ behavior: 'smooth' });
};

const onSearchInputSubmitComics = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  let queryComics = formEl.elements.searchName.value;
  formSearchComics.reset();

  if (queryComics !== '') {
    try {
      showLoader();
      const response = await api.getComics({
        titleStartsWith: queryComics,
        limit: itemsPerPage,
        offset: 0,
      });

      if (response.total === 0) {
        hideLoader();
        ScrollComics();
        return;
      }
      hideLoader();
      ScrollComics();
      clearSortComicsList();
      renderSortComicsList(response.results);
    } catch (error) {
      hideLoader();
      //location.replace('./error.html');
      console.log(error.message);
    }
  }
};

formSearchComics.addEventListener('submit', onSearchInputSubmitComics);

const headerScrollComics = document.querySelector('.header-comics');

export const onHeaderScrollComics = () => {
  if (scrollY !== 0) {
    headerScrollComics.classList.add('js-header-bg-comics');
  } else {
    headerScrollComics.classList.remove('js-header-bg-comics');
  }
};

window.addEventListener('scroll', onHeaderScrollComics);
