!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},o=e.parcelRequirece98;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=o);/* import { api } from './apiMarvel';
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
let i=document.querySelector(".header-comics");window.addEventListener("scroll",()=>{0!==scrollY?i.classList.add("js-header-bg-comics"):i.classList.remove("js-header-bg-comics")});var r=o("7lKJl"),a=o("81V9Z"),l=o("2xl03"),c=o("1VFfL");let n="",d="",m="",u="",h=null;h=(0,l.getItemsPerPage)();let f=document.querySelector(".js-comics-sort-form"),g=document.querySelector(".js-comics-sort-container"),v=document.getElementById("comics-list"),L=e=>e.map(({id:e,thumbnail:t,title:s})=>`<li class="comics-sort-item">
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
    `).join(""),p=()=>{g.innerHTML=""},y=e=>{g.insertAdjacentHTML("beforeend",L(e))},w=()=>{v.scrollIntoView({behavior:"smooth"})},b=document.querySelector(".tui-pagination"),j={totalItems:0,itemsPerPage:h,visiblePages:3},S=new(c&&c.__esModule?c.default:c)(b,j),q=async()=>{(0,a.showLoader)();try{let e=await (0,r.api).getComics({limit:h,offset:0});(0,a.hideLoader)(),p(),y(e.results),b.classList.remove("is-hidden"),S.reset(e.total),S.on("beforeMove",async t=>{let s=t.page,o=h*(s+1);try{(0,a.showLoader)();let t=await (0,r.api).getComics({offset:o,limit:h,titleStartsWith:n,format:d,orderBy:m});(0,a.hideLoader)(),S.reset(e.total),p(),y(t.results),w(),b.classList.remove("is-hidden")}catch(e){}})}catch(e){}};q();let x=document.querySelector(".js-comics-input-title"),E=document.querySelector(".js-comics-select-format"),T=document.querySelector(".js-comics-select-order"),M=document.querySelector(".js-comics-select-year");M.insertAdjacentHTML("afterbegin",(()=>{let e=[];for(let t=2023;t>1949;t-=1)e.push(`<option>${t}</option>`);return e.join("")})());let $=async e=>{if(e.preventDefault(),e.target===x)n=x.value;else if(e.target===E)d=E.value;else if(e.target===T){let e=T.value;"Title"===e?m="title":"On Sale Date"===e&&(m="onsaleDate")}else e.target===M&&(u=M.value);try{(0,a.showLoader)();let e=await (0,r.api).getComics({limit:h,titleStartsWith:n,format:d,orderBy:m,startYear:u});if(console.log(e),0===e.results.length){g.innerHTML='<div class="nothing-seach"></div>',b.classList.add("is-hidden"),(0,a.hideLoader)();return}(0,a.hideLoader)(),S.reset(e.total),p(),y(e.results),w(),b.classList.remove("is-hidden"),x.value=""}catch(e){(0,a.hideLoader)(),console.log(e)}};M.addEventListener("change",$),T.addEventListener("change",$),E.addEventListener("change",$),f.addEventListener("submit",$)}();//# sourceMappingURL=comics.c9920cf4.js.map

//# sourceMappingURL=comics.c9920cf4.js.map
