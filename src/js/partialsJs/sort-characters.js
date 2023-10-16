import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import debounce from 'lodash.debounce';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import flatpickr from 'flatpickr';

const sortContainer = document.querySelector('.js-characters-sort-container');
const formSearchFilter = document.querySelector('.js-characters-sort-form');
const inputComicsEl = document.querySelector('.js-chararcters-comics-input');
const selectOrderEl = document.querySelector('.js-characters-select-order');
const inputNameEl = document.querySelector('.js-chararcters-name-input');

let idComics = [];
let itemsPerPage = null;
let queryName = null;
let queryOrder = null;
let dateQuery = null;
let arrayIdComics = null;

flatpickr('#calendar', {
  dateFormat: 'd.m.Y',
  defaultDate: 'today',
  disableMobile: true,
  onChange(selectedDates) {
    const selectedDate = selectedDates[0];
    dateQuery = selectedDate;
    onSearchNameAndSelectDate(selectedDate);
  },
});

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

export const clearSortContainer = () => {
  sortContainer.innerHTML = '';
};

export const renderSortContainerList = data => {
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

    hideLoader();
    renderSortContainerList(response.results);
    boxPagination.classList.remove('is-hidden');

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
          orderBy: queryOrder,
          limit: itemsPerPage,
          comics: arrayIdComics,
          nameStartsWith: queryName,
          modifiedSince: dateQuery,
        });
        hideLoader();
        clearSortContainer();
        renderSortContainerList(newResponse.results);
      } catch (error) {
        hideLoader();
        location.replace('./error.html');
      }
    });
  } catch (error) {
    hideLoader();
    location.replace('./error.html');
  }
};

fetchAndRenderCharacterList();

const onSubmitSearchComics = async event => {
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

    if (response.total === 0) {
      hideLoader();
      sortContainer.innerHTML = '<div class="nothing-seach"></div>';
      inputComicsEl.value = '';
      boxPagination.classList.add('is-hidden');
      return;
    }

    const limitedResults = response.results;
    limitedResults.map(el => {
      if (el.characters.available) {
        idComics.push(el.id);
      } else {
        return;
      }
    });

    arrayIdComics = idComics.join(', ');

    try {
      const response = await api.getCharacters({
        offset: 0,
        orderBy: queryOrder,
        limit: itemsPerPage,
        comics: arrayIdComics,
        nameStartsWith: queryName,
        modifiedSince: dateQuery,
      });

      if (response.length === 0) {
        sortContainer.innerHTML = '<div class="nothing-seach"></div>';
        boxPagination.classList.add('is-hidden');
        return;
      }
      hideLoader();
      clearSortContainer();
      pagination.reset(response.total);
      renderSortContainerList(response.results);
      boxPagination.classList.remove('is-hidden');
      inputComicsEl.value = '';
    } catch (error) {
      hideLoader();
      location.replace('./error.html');
    }
  } catch (error) {
    hideLoader();
    location.replace('./error.html');
  }
};

formSearchFilter.addEventListener('submit', onSubmitSearchComics);

/* //////////////////////// NAME ////////////////////////// */

export const onSearchNameAndSelectDate = async (event, selectedDate) => {
  if (event.target === inputNameEl) {
    queryName = event.target.value;
  } else if (event.target === selectOrderEl) {
    queryOrder = event.target.value.toLowerCase();
  } else if (selectedDate) {
    dateQuery = selectedDate;
  }
  try {
    showLoader();
    const response = await api.getCharacters({
      offset: 0,
      orderBy: queryOrder,
      limit: itemsPerPage,
      comics: arrayIdComics,
      nameStartsWith: queryName,
      modifiedSince: dateQuery,
    });

    if (response.total === 0) {
      hideLoader();
      sortContainer.innerHTML = '<div class="nothing-seach"></div>';
      boxPagination.classList.add('is-hidden');
      dateQuery = null;
      return;
    }
    hideLoader();
    pagination.reset(response.total);
    clearSortContainer();
    renderSortContainerList(response.results);
    boxPagination.classList.remove('is-hidden');

    inputNameEl.value = '';
    selectedDate.value = '';
  } catch (error) {
    hideLoader();
    location.replace('./error.html');
  }
};

inputNameEl.addEventListener(
  'input',
  debounce(onSearchNameAndSelectDate, 2000)
);
selectOrderEl.addEventListener('change', onSearchNameAndSelectDate);

const jsSortBtnReset = document.querySelector('.js-sort-btn-reset');

const onReset = () => {
  hideLoader();
  location.reload();
};

jsSortBtnReset.addEventListener('click', onReset);
