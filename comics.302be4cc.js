var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},o=e.parcelRequirece98;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=o);var i=o("iRoAB"),r=o("cH1ne"),a=o("jKGAa"),i=o("iRoAB"),a=o("jKGAa"),r=o("cH1ne"),c=o("fb9GJ"),l=o("6XzeY");let n="",d="",m="",u="",h="";h=(0,r.getItemsPerPage)();const g=document.querySelector(".js-comics-sort-form"),f=document.querySelector(".js-comics-sort-container"),v=document.getElementById("comics-list"),L=document.querySelector(".js-comics-input-title"),y=document.querySelector(".js-comics-select-format"),p=document.querySelector(".js-comics-select-order"),w=document.querySelector(".js-comics-select-year");f.addEventListener("click",e=>{let t=e.target,s=t.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
t.matches(".comics-sort-img, .comics-sort-title")&&(0,l.onModalComicsClick)({target:t},s)}),w.insertAdjacentHTML("afterbegin",(()=>{let e=[];for(let t=2023;t>1949;t-=1)e.push(`<option>${t}</option>`);return e.join("")})());const b=e=>e.map(({id:e,thumbnail:t,title:s})=>`<li class="comics-sort-item">
      <a class="comics-sort-link">
        <img class="comics-sort-img"
        data-id="${e}"
        src="${t.path}.${t.extension}"
        alt="${s}"
      />
          <div class="comics-sort-context">
          <h3  class="comics-sort-title" data-id="${e}">${s}</h3>
          </div>
          </a>
      </li>
    `).join(""),j=()=>{f.innerHTML=""},S=e=>{f.insertAdjacentHTML("beforeend",b(e))},q=()=>{v.scrollIntoView({behavior:"smooth"})},E=document.querySelector(".tui-pagination"),M={totalItems:0,itemsPerPage:h,visiblePages:3},T=new(c&&c.__esModule?c.default:c)(E,M),x=async()=>{(0,a.showLoader)();try{let e=await (0,i.api).getComics({limit:h,offset:0});(0,a.hideLoader)(),j(),S(e.results),E.classList.remove("is-hidden"),T.reset(e.total),T.on("beforeMove",async e=>{let t=e.page,s=h*(t-1);try{(0,a.showLoader)();let e=await (0,i.api).getComics({offset:s,limit:h,titleStartsWith:n,format:d,orderBy:m});(0,a.hideLoader)(),j(),S(e.results),q()}catch(e){(0,a.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}})}catch(e){(0,a.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};x();const C=async e=>{if(e.preventDefault(),e.target===L)n=L.value;else if(e.target===y)d=y.value;else if(e.target===p){let e=p.value;"Title"===e?m="title":"On Sale Date"===e&&(m="onsaleDate")}else e.target===w&&(u=w.value);try{(0,a.showLoader)();let e=await (0,i.api).getComics({limit:h,titleStartsWith:n,format:d,orderBy:m,startYear:u});if(console.log(e),0===e.results.length){f.innerHTML='<div class="nothing-seach"></div>',E.classList.add("is-hidden"),(0,a.hideLoader)();return}(0,a.hideLoader)(),T.reset(e.total),j(),S(e.results),q(),E.classList.remove("is-hidden"),L.value=""}catch(e){(0,a.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};w.addEventListener("change",C),p.addEventListener("change",C),y.addEventListener("change",C),g.addEventListener("submit",C);const I=document.querySelector(".js-header-search-comics"),P=document.querySelector(".js-header-form-comics");let $=null;$=(0,r.getItemsPerPage)();const A=()=>{I.scrollIntoView({behavior:"smooth"})},D=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchName.value;if(P.reset(),""!==s)try{(0,a.showLoader)();let e=await (0,i.api).getComics({titleStartsWith:s,limit:$,offset:0});if(0===e.total){(0,a.hideLoader)(),A();return}(0,a.hideLoader)(),A(),j(),S(e.results)}catch(e){(0,a.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};P.addEventListener("submit",D);const H=document.querySelector(".header-comics");window.addEventListener("scroll",()=>{0!==scrollY?H.classList.add("js-header-bg-comics"):H.classList.remove("js-header-bg-comics")}),o("cIK95"),o("6XzeY");//# sourceMappingURL=comics.302be4cc.js.map

//# sourceMappingURL=comics.302be4cc.js.map