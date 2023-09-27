import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage';
import { showLoader, hideLoader } from '../helpers/loader';

const galleryHero = document.querySelector('.js-header-search');
const formSearch = document.querySelector('.js-header-form');
let itemsPerPage = null;

itemsPerPage = getItemsPerPage();

const createGalleryHero = data => {
  return data
    .map(el => {
      return `<li class="header-search-item">
        <img class="header-search-img"
       data-set="${el.id}"
        src="${el.thumbnail.path}.${el.thumbnail.extension}"
        alt="${el.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${el.id}">${el.name}</h3>
          </div>
      </li>
    `;
    })
    .join('');
};

const renderGalleryHero = data => {
  galleryHero.insertAdjacentHTML('beforeend', createGalleryHero(data));
};

const scrollHeaderSearch = () => {
  galleryHero.scrollIntoView({ behavior: 'smooth' });
};

const clearGalleryHero = () => {
  galleryHero.innerHTML = '';
};

const onSearchInputSubmit = async event => {
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

      if (response.results.length === 0) {
        hideLoader();
        scrollHeaderSearch();
        galleryHero.innerHTML = '<div class="nothing-seach"></div>';
        return;
      }
      hideLoader();
      clearGalleryHero();
      renderGalleryHero(response.results);
      scrollHeaderSearch();
    } catch (error) {
      location.replace('../error.html');

      hideLoader();
    }
  }
};

formSearch.addEventListener('submit', onSearchInputSubmit);

const headerScroll = document.querySelector('.header');

const onHeaderScroll = () => {
  if (scrollY !== 0) {
    headerScroll.classList.add('js-header-bg');
  } else {
    headerScroll.classList.remove('js-header-bg');
  }
};

window.addEventListener('scroll', onHeaderScroll);
