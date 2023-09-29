import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';

const formSearchFilter = document.querySelector('.js-characters-sort-form');
const inputComicsEl = document.querySelector('.js-chararcters-comics-input');

const onSearchCharacters = async event => {
  showLoader();
  event.preventDefault();
  const { target: formEl } = event;
  queryComics = formEl.elements.searchComics.value;
  try {
    const response = await api.getComics({
      title: queryComics,
      offset: 0,
      limit: 100,
    });
    hideLoader();
  } catch (error) {
    console.log(error);
  }
};

formSearchFilter.addEventListener('submit', onSearchCharacters);
