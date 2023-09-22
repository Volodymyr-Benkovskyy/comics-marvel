import { api } from './apiMarvel';
import { getItemsPerPage } from './helpers/getItemsPerPage';

const formSearch = document.querySelector('.js-header-form');
let itemsPerPage = null;
itemsPerPage = getItemsPerPage();

const onSearchInputSubmit = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  let query = formEl.elements.searchQuery.value;
  formSearch.reset();

  if (query !== '') {
    try {
      const respons = await api.getCharacters({
        nameStartsWith: query,
        limit: itemsPerPage,
        offset: 0,
      });
    } catch (error) {
      console.log('Error!', error);
    }
  }
};

formSearch.addEventListener('submit', onSearchInputSubmit);
