import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

let queryTitle = '';
let queryFormat = '';
let queryComicsOrder = '';
let yearQuery = '';

/* let queryTitle = '';
let queryFormat = ''; */

let itemsPerPage = null;
itemsPerPage = getItemsPerPage();

const formSearchComics = document.querySelector('.js-comics-sort-form');
const sortList = document.querySelector('.js-comics-sort-container');
const scrollStart = document.getElementById('comics-list');

const createComicsList = data => {
  return data
    .map(({ id, thumbnail, title }) => {
      return `<li class="comics-sort-item">
      <a class="comics-sort-link">
        <img class="comics-sort-img"
        data-set="${id}"
        src="${thumbnail.path}.${thumbnail.extension}"
        alt="${title}"
      />
          <div class="comics-sort-context">
          <h3  class="comics-sort-title" data-set="${id}">${title}</h3>
          </div>
          </a>
      </li>
    `;
    })
    .join('');
};

const clearSortComicsList = () => {
  sortList.innerHTML = '';
};

const renderSortComicsList = data => {
  sortList.insertAdjacentHTML('beforeend', createComicsList(data));
};

const scrollComPerPage = () => {
  scrollStart.scrollIntoView({ behavior: 'smooth' });
};

const wrapperPagination = document.querySelector('.tui-pagination');
const optionsPagination = {
  totalItems: 0,
  itemsPerPage: itemsPerPage,
  visiblePages: 3,
};
const pagination = new Pagination(wrapperPagination, optionsPagination);

const fechRandomComicsList = async () => {
  showLoader();
  try {
    const response = await api.getComics({
      limit: itemsPerPage,
      offset: 0,
    });
    hideLoader();
    clearSortComicsList();
    renderSortComicsList(response.results);
    wrapperPagination.classList.remove('is-hidden');

    pagination.reset(response.total);
    pagination.on('beforeMove', async event => {
      const currentPage = event.page;
      let offset = itemsPerPage * (currentPage + 1);

      try {
        showLoader();
        const newResponse = await api.getComics({
          offset: offset,
          limit: itemsPerPage,
          titleStartsWith: queryTitle,
          format: queryFormat,
          orderBy: queryComicsOrder,
        });
        hideLoader();
        clearSortComicsList();
        renderSortComicsList(newResponse.results);
        scrollComPerPage();
      } catch (error) {}
    });
  } catch (error) {}
};
fechRandomComicsList();

const inputTitleEl = document.querySelector('.js-comics-input-title');
const selectFormatEl = document.querySelector('.js-comics-select-format');
const selectComicsOrderEl = document.querySelector('.js-comics-select-order');
const selectDateEl = document.querySelector('.js-comics-select-year');

const fechTitleFormatOrderDate = async (event, selectComicsOrder) => {
  event.preventDefault();
  /*   if (event.target === inputTitleEl) {
    queryTitle = inputTitleEl.value;
  } else if (event.target === selectFormatEl) {
    queryFormat = selectFormatEl.value;
  } else if (event.target === selectComicsOrderEl) {
    queryComicsOrder = selectComicsOrder.value;
  } */

  if (event.target === inputTitleEl) {
    queryTitle = inputTitleEl.value;
  } else if (event.target === selectFormatEl) {
    queryFormat = selectFormatEl.value;
  } else if (event.target === selectComicsOrderEl) {
    const selectedValue = selectComicsOrderEl.value;

    if (selectedValue === 'Title') {
      queryComicsOrder = 'title';
    } else if (selectedValue === 'On Sale Date') {
      queryComicsOrder = 'onsaleDate';
    }
  }

  try {
    showLoader();
    const response = await api.getComics({
      limit: itemsPerPage,
      titleStartsWith: queryTitle,
      format: queryFormat,
      orderBy: queryComicsOrder,
    });
    console.log(response);

    if (response.results.length === 0) {
      //sortList.innerHTML = '<div class="nothing-seach"></div>';
      wrapperPagination.classList.add('is-hidden');
      hideLoader();
      return;
    }
    hideLoader();
    clearSortComicsList();
    renderSortComicsList(response.results);
    scrollComPerPage();
    inputTitleEl.value = '';
  } catch (error) {
    hideLoader();
    console.log(error);
  }
};

selectFormatEl.addEventListener('change', event =>
  handleSelectChange(event, 'selectFormatEl')
);
selectComicsOrderEl.addEventListener('change', event =>
  handleSelectChange(event, 'selectComicsOrderEl')
);

selectComicsOrderEl.addEventListener('change', fechTitleFormatOrderDate);
selectFormatEl.addEventListener('change', fechTitleFormatOrderDate);
formSearchComics.addEventListener('submit', fechTitleFormatOrderDate);
//inputTitleEl.addEventListener('input', fechTitleFormatOrderDate);
