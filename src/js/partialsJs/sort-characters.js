import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import debounce from 'lodash.debounce';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const sortContainer = document.querySelector('.js-characters-sort-container');
const formSearchFilter = document.querySelector('.js-characters-sort-form');
const listScroll = document.getElementById('characters-list');
const inputComicsEl = document.querySelector('.js-chararcters-comics-input');
const selectOrderEl = document.querySelector('.js-characters-select-order');
const inputNameEl = document.querySelector('.js-chararcters-name-input');
const formHeaderEl = document.querySelector('.js-header-chararcters-name');
const inputHeaderEl = document.querySelector('.js-header-chararcters-input');

let idComics = [];
let itemsPerPage = null;
let queryName = null;
itemsPerPage = getItemsPerPage();

const createSortContainer = data => {
  return data
    .map(el => {
      return `<li class="characters-sort-item">
      <a class="characters-sort-link">
        <img class="characters-sort-img"
        data-set="${el.id}"
        src="${el.thumbnail.path}.${el.thumbnail.extension}"
        alt="${el.name}"
      />
          <div class="characters-sort-context">
          <h3  class="characters-sort-title" data-set="${el.id}">${el.name}</h3>
          </div>
          </a>
      </li>
    `;
    })
    .join('');
};

const clearSortContainer = () => {
  sortContainer.innerHTML = '';
};

const renderSortContainerList = data => {
  sortContainer.insertAdjacentHTML('beforeend', createSortContainer(data));
};

/* /////////////////////////////////////////////////// */

const boxPagination = document.querySelector('.tui-pagination');
const optionsPagination = {
  totalItems: 0,
  itemsPerPage: itemsPerPage,
  visiblePages: 3,
};
const pagination = new Pagination(boxPagination, optionsPagination);

/* ////////////////////     RANDOM   ////////////////////////////// */

const fetchAndRenderCharacterList = async () => {
  try {
    showLoader;
    const response = await api.getCharacters({
      offset: 0,
      limit: itemsPerPage,
    });
    console.log('fetchAndRenderCharacterList =>', response);
    hideLoader();
    renderSortContainerList(response.results);
    boxPagination.classList.remove('is-hidden'); //  Показуємо пагінацію

    if (itemsPerPage > response.total) {
      return;
    }
    pagination.reset(response.total);
    pagination.on('beforeMove', async event => {
      const currentPage = event.page;
      let offset = itemsPerPage * (currentPage - 1);

      try {
        showLoader();
        const newResponse = await api.getCharacters({
          offset: offset,
          limit: itemsPerPage,
          nameStartsWith: queryName,
        });

        hideLoader();
        clearSortContainer();
        renderSortContainerList(newResponse.results);
      } catch (error) {
        console.log('Error');
        hideLoader();
      }
    });
  } catch (error) {
    console.log(error);
  }
};
fetchAndRenderCharacterList();

/* ////////////////////    / RANDOM  /  ////////////////////////////// */

/* ////////////////     SEARCH-INPUT-COMICS   //////////////////////////////////// */
const onSearchComics = async event => {
  showLoader();
  event.preventDefault();
  const { target: formEl } = event;
  queryComics = formEl.elements.searchComics.value;

  idComics = [];
  queryName = null;
  queryOrder = null;
  dateQuery = null;

  try {
    const response = await api.getComics({
      title: queryComics,
      offset: 0,
      limit: 100,
    });

    if (response.total === 0) {
      hideLoader();

      inputComicsEl.value = '';
      boxPagination.classList.add('is-hidden');
      return;
    }

    const limitedResults = response.results.slice(0, 10);
    limitedResults.map(el => {
      if (el.characters.available) {
        idComics.push(el.id);
      } else {
        return;
      }
    });
    console.log('onSearchComics => getComics=>', response);
    arrayIdComics = idComics.join(', ');

    try {
      const response = await api.getCharacters({
        nameStartsWith: queryName,
        comics: arrayIdComics,
        limit: itemsPerPage,
      });

      if (response.length === 0) {
        boxPagination.classList.add('is-hidden');

        return;
      }
      hideLoader();
      clearSortContainer();
      pagination.reset(response.total);
      renderSortContainerList(response.results);
      boxPagination.classList.remove('is-hidden');

      inputComicsEl.value = '';
      console.log('onSearchComics => getCharacters', response);
    } catch (error) {
      console.log('Error!', error);
    }
  } catch (error) {
    hideLoader();
    console.log('Error!', error);
  }
};

formSearchFilter.addEventListener('submit', onSearchComics);

/* ////////////////    / SEARCH-INPUT-COMICS  /   //////////////////////////////////// */

/* ///////////////////   SEARCH-NAME  ///////////////////////////////////// */

const onSearchName = async event => {
  boxPagination.classList.add('is-hidden');
  queryName = event.target.value;

  try {
    showLoader();
    const response = await api.getCharacters({
      offset: 0,
      limit: itemsPerPage,
      nameStartsWith: queryName,
    });

    if (response.total === 0) {
      hideLoader();
      boxPagination.classList.add('is-hidden');
      return;
    }

    console.log('onSearchName =>response', response);
    hideLoader();

    pagination.reset(response.total);
    clearSortContainer();
    renderSortContainerList(response.results);
    boxPagination.classList.remove('is-hidden');
    inputNameEl.value = '';
  } catch (error) {
    console.log('Error!', error);
  }
};

inputNameEl.addEventListener('input', debounce(onSearchName, 2000));

/* ////////////////    /SEARCH-NAME  /   //////////////////////////////////// */
