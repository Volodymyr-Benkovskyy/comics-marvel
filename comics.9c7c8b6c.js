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
const i=document.querySelector(".header-comics");window.addEventListener("scroll",()=>{0!==scrollY?i.classList.add("js-header-bg-comics"):i.classList.remove("js-header-bg-comics")});var r=o("iRoAB"),a=o("jKGAa"),c=o("cH1ne"),l=o("fb9GJ");let n="",d="",m="",u=null;u=(0,c.getItemsPerPage)();const h=document.querySelector(".js-comics-sort-form"),f=document.querySelector(".js-comics-sort-container"),g=document.getElementById("comics-list"),v=e=>e.map(({id:e,thumbnail:t,title:s})=>`<li class="comics-sort-item">
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
    `).join(""),y=()=>{f.innerHTML=""},L=e=>{f.insertAdjacentHTML("beforeend",v(e))},p=()=>{g.scrollIntoView({behavior:"smooth"})},w=document.querySelector(".tui-pagination"),b={totalItems:0,itemsPerPage:u,visiblePages:3},S=new(l&&l.__esModule?l.default:l)(w,b),j=async()=>{(0,a.showLoader)();try{let e=await (0,r.api).getComics({limit:u,offset:0});(0,a.hideLoader)(),y(),L(e.results),w.classList.remove("is-hidden"),S.reset(e.total),S.on("beforeMove",async e=>{let t=e.page,s=u*(t+1);try{(0,a.showLoader)();let e=await (0,r.api).getComics({offset:s,limit:u,titleStartsWith:n,format:d,orderBy:m});(0,a.hideLoader)(),y(),L(e.results),p()}catch(e){}})}catch(e){}};j();const E=document.querySelector(".js-comics-input-title"),q=document.querySelector(".js-comics-select-format"),x=document.querySelector(".js-comics-select-order");document.querySelector(".js-comics-select-year");const C=async(e,t)=>{/*   if (event.target === inputTitleEl) {
    queryTitle = inputTitleEl.value;
  } else if (event.target === selectFormatEl) {
    queryFormat = selectFormatEl.value;
  } else if (event.target === selectComicsOrderEl) {
    queryComicsOrder = selectComicsOrder.value;
  } */if(e.preventDefault(),e.target===E)n=E.value;else if(e.target===q)d=q.value;else if(e.target===x){let e=x.value;"Title"===e?m="title":"On Sale Date"===e&&(m="onsaleDate")}try{(0,a.showLoader)();let e=await (0,r.api).getComics({limit:u,titleStartsWith:n,format:d,orderBy:m});if(console.log(e),0===e.results.length){//sortList.innerHTML = '<div class="nothing-seach"></div>';
w.classList.add("is-hidden"),(0,a.hideLoader)();return}(0,a.hideLoader)(),y(),L(e.results),p(),E.value=""}catch(e){(0,a.hideLoader)(),console.log(e)}};q.addEventListener("change",e=>handleSelectChange(e,"selectFormatEl")),x.addEventListener("change",e=>handleSelectChange(e,"selectComicsOrderEl")),x.addEventListener("change",C),q.addEventListener("change",C),h.addEventListener("submit",C);//inputTitleEl.addEventListener('input', fechTitleFormatOrderDate);
//# sourceMappingURL=comics.9c7c8b6c.js.map

//# sourceMappingURL=comics.9c7c8b6c.js.map
