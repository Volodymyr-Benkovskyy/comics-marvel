!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequirece98;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=i);/* import { api } from './apiMarvel';
import { getItemsPerPage } from '../helpers/getItemsPerPage.js';
import { showLoader, hideLoader } from '../helpers/loader.js';
import {
  renderSortContainerList,
  clearSortContainer,
} from './sort-characters.js'; *//* const galleryHeroCharacters = document.querySelector(
  '.js-header-search-comics'
);
const formSearchCharacters = document.querySelector('.js-header-form-comics');

let itemsPerPage = null;

itemsPerPage = getItemsPerPage();

const ScrollCharacters = () => {
  galleryHeroCharacters.scrollIntoView({ behavior: 'smooth' });
};

const onSearchInputSubmitCharacters = async event => {
  event.preventDefault();
  const { target: formEl } = event;
  let query = formEl.elements.searchQuery.value;
  formSearchCharacters.reset();

  if (query !== '') {
    try {
      showLoader();
      const response = await api.getCharacters({
        nameStartsWith: query,
        limit: itemsPerPage,
        offset: 0,
      });

      if (response.total === 0) {
        hideLoader();
        ScrollCharacters();
        return;
      }
      hideLoader();
      ScrollCharacters();
      clearSortContainer();
      renderSortContainerList(response.results);
    } catch (error) {
      location.replace('../error.html');

      hideLoader();
    }
  }
}; *///formSearchCharacters.addEventListener('submit', onSearchInputSubmitCharacters);
let o=document.querySelector(".header-comics");window.addEventListener("scroll",()=>{0!==scrollY?o.classList.add("js-header-bg-comics"):o.classList.remove("js-header-bg-comics")});var r=i("7lKJl"),a=i("81V9Z"),c=i("2xl03"),l=i("1VFfL");itemsPerPage=(0,c.getItemsPerPage)(),document.querySelector(".js-comics-sort-form");let n=document.querySelector(".js-comics-sort-container"),d=e=>e.map(({id:e,thumbnail:t,title:s})=>`<li class="comics-sort-item">
      <a class="comics-sort-link">
        <img class="comics-sort-img"
        data-set="${e}"
        src="${t.path}.${t.extension}"
        alt="${s}"
      />
          <div class="comics-sort-context">
          <h3  class="comics-sort-title" data-set="${e}">${s}</h3>
          </div>
          </a>
      </li>
    `).join(""),m=()=>{n.innerHTML=""},u=e=>{n.insertAdjacentHTML("beforeend",d(e))},f=document.querySelector(".tui-pagination"),g={totalItems:0,itemsPerPage:itemsPerPage,visiblePages:3};new(l&&l.__esModule?l.default:l)(f,g);let p=async()=>{(0,a.showLoader)();try{let e=await (0,r.api).getComics({limit:itemsPerPage,offset:0});(0,a.hideLoader)(),m(),u(e.results)}catch(e){}};p()}();//# sourceMappingURL=comics.78e7c8ba.js.map

//# sourceMappingURL=comics.78e7c8ba.js.map
