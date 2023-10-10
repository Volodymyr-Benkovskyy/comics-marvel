var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},o=e.parcelRequirece98;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=o);/* import { api } from './apiMarvel';
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
const i=document.querySelector(".header-comics");window.addEventListener("scroll",()=>{0!==scrollY?i.classList.add("js-header-bg-comics"):i.classList.remove("js-header-bg-comics")});var r=o("iRoAB"),c=o("jKGAa"),a=o("cH1ne"),n=o("fb9GJ");itemsPerPage=(0,a.getItemsPerPage)(),document.querySelector(".js-comics-sort-form");const l=document.querySelector(".js-comics-sort-container"),d=e=>e.map(({id:e,thumbnail:t,title:s})=>`<li class="comics-sort-item">
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
    `).join(""),m=()=>{l.innerHTML=""},u=e=>{l.insertAdjacentHTML("beforeend",d(e))},f=document.querySelector(".tui-pagination"),g={totalItems:0,itemsPerPage:itemsPerPage,visiblePages:3};new(n&&n.__esModule?n.default:n)(f,g);const p=async()=>{(0,c.showLoader)();try{let e=await (0,r.api).getComics({limit:itemsPerPage,offset:0});(0,c.hideLoader)(),m(),u(e.results)}catch(e){}};p();//# sourceMappingURL=comics.d73ff51f.js.map

//# sourceMappingURL=comics.d73ff51f.js.map
