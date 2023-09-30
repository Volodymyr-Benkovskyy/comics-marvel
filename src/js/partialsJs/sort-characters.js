import { api } from './apiMarvel';
import { showLoader, hideLoader } from '../helpers/loader';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';

const sortContainer = document.querySelector('.js-characters-sort-container');
const formSearchFilter = document.querySelector('.js-characters-sort-form');
const inputComicsEl = document.querySelector('.js-chararcters-comics-input');
const inputNameEl = document.querySelector('.js-chararcters-name-input');

let idComics = [];
let queryComics = null;
let queryIdComics = null;
let itemsPerPage = null;

// Масив для зберігання ідентифікаторів коміксів.
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

const fetchAndRenderCharacterList = async () => {
  try {
    showLoader;
    const response = await api.getCharacters({
      limit: itemsPerPage,
      offset: 0,
    });
    hideLoader();
    renderSortContainerList(response.results);
  } catch (error) {
    console.log(error);
  }
};
fetchAndRenderCharacterList();

/* //////////////////////////////////////////////////// */

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

    // Перевіряємо, чи були знайдені комікси за заданим запитом.
    if (response.total === 0) {
      hideLoader();
      inputComicsEl.value = '';
      return;
    }

    // Отримуємо перші 10 коміксів з результатів пошуку.
    const limitedResults = response.results.slice(0, 10);

    // Додаємо ідентифікатори коміксів до масиву idComics, якщо вони містять персонажів.
    limitedResults.map(el => {
      if (el.characters.available) {
        idComics.push(el.id);
      }
      return;
    });

    // Об'єднуємо ідентифікатори коміксів в рядок через кому.
    queryIdComics = idComics.join(', ');

    // Виконуємо запит до API для отримання персонажів, які з'являються в обраних коміксах.
    try {
      const response = await api.getCharacters({
        offset: offset,
        nameStartsWith: queryName,
        comics: queryIdComics,
        orderBy: queryOrder,
        modifiedSince: dateQuery,
      });
      console.log('queryName =>', queryName);
    } catch (error) {}

    hideLoader();
  } catch (error) {
    hideLoader();
    console.log(error);
  }
};

formSearchFilter.addEventListener('submit', onSearchCharacters);
