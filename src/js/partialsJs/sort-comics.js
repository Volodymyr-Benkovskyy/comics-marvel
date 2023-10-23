import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

let queryTitle = '';
let queryFormat = '';
let queryComicsOrder = '';
let yearQuery = '';

let itemsPerPage = '';
itemsPerPage = getItemsPerPage();

const formSearchComics = document.querySelector('.js-comics-sort-form');
const sortList = document.querySelector('.js-comics-sort-container');
const scrollStart = document.getElementById('comics-list');
const inputTitleEl = document.querySelector('.js-comics-input-title');
const selectFormatEl = document.querySelector('.js-comics-select-format');
const selectComicsOrderEl = document.querySelector('.js-comics-select-order');
const selectDateEl = document.querySelector('.js-comics-select-year');

const createSelectYears = () => {
  let yearsArr = [];
  for (let i = 2023; i > 1949; i -= 1) {
    yearsArr.push(`<option>${i}</option>`);
  }
  return yearsArr.join('');
};
selectDateEl.insertAdjacentHTML('afterbegin', createSelectYears());

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

export const clearSortComicsList = () => {
  sortList.innerHTML = '';
};

export const renderSortComicsList = data => {
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
      let offset = itemsPerPage * (currentPage - 1);

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
      } catch (error) {
        hideLoader();
        //location.replace('./error.html');
        console.log(error.message);
      }
    });
  } catch (error) {
    hideLoader();
    //location.replace('./error.html');
    console.log(error.message);
  }
};
fechRandomComicsList();

const fechTitleFormatOrderDate = async event => {
  event.preventDefault();

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
  } else if (event.target === selectDateEl) {
    yearQuery = selectDateEl.value;
  }
  try {
    showLoader();
    const response = await api.getComics({
      limit: itemsPerPage,
      titleStartsWith: queryTitle,
      format: queryFormat,
      orderBy: queryComicsOrder,
      startYear: yearQuery,
    });
    console.log(response);

    if (response.results.length === 0) {
      sortList.innerHTML = '<div class="nothing-seach"></div>';
      wrapperPagination.classList.add('is-hidden');
      hideLoader();
      return;
    }
    hideLoader();
    pagination.reset(response.total);
    clearSortComicsList();
    renderSortComicsList(response.results);
    scrollComPerPage();
    wrapperPagination.classList.remove('is-hidden');
    inputTitleEl.value = '';
  } catch (error) {
    hideLoader();
    //location.replace('./error.html');
    console.log(error.message);
  }
};

selectDateEl.addEventListener('change', fechTitleFormatOrderDate);
selectComicsOrderEl.addEventListener('change', fechTitleFormatOrderDate);
selectFormatEl.addEventListener('change', fechTitleFormatOrderDate);
formSearchComics.addEventListener('submit', fechTitleFormatOrderDate);
