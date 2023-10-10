import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

itemsPerPage = getItemsPerPage();

const formSearchComics = document.querySelector('.js-comics-sort-form');
const sortList = document.querySelector('.js-comics-sort-container');

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

const clearSortComList = () => {
  sortList.innerHTML = '';
};

const renderSortComList = data => {
  sortList.insertAdjacentHTML('beforeend', createComicsList(data));
};

const wrapperTuiPagination = document.querySelector('.tui-pagination');
const optionsPagination = {
  totalItems: 0,
  itemsPerPage: itemsPerPage,
  visiblePages: 3,
};
const pagination = new Pagination(wrapperTuiPagination, optionsPagination);

const fechRandomComicsList = async () => {
  showLoader();
  try {
    const response = await api.getComics({
      limit: itemsPerPage,
      offset: 0,
    });
    hideLoader();
    clearSortComList();
    renderSortComList(response.results);
  } catch (error) {}
};

fechRandomComicsList();
