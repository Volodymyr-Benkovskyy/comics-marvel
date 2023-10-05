import debounce from 'lodash.debounce';

const inputHeaderEl = document.querySelector('.js-header-chararcters-input');
const listScroll = document.getElementById('characters-list');

const scrollCharPerPage = () => {
  listScroll.scrollIntoView({ behavior: 'smooth' });
};

const scrolHeaderCharacters = () => {
  inputHeaderEl.value = '';
  scrollCharPerPage();
};

inputHeaderEl.addEventListener('input', debounce(scrolHeaderCharacters, 200));

const headerScroll = document.querySelector('.header');

const onHeaderCharactersScroll = () => {
  if (scrollY !== 0) {
    headerScroll.classList.add('js-header-bg');
  } else {
    headerScroll.classList.remove('js-header-bg');
  }
};

window.addEventListener('scroll', onHeaderCharactersScroll);
