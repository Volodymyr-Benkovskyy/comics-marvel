var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequirece98;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirece98=s);var i=s("iRoAB"),r=s("cH1ne"),c=s("jKGAa"),l=s("cIK95");const o=document.querySelector(".js-scrol-header-search"),n=document.querySelector(".js-header-search"),d=document.querySelector(".js-header-form"),h=document.querySelector(".js-modal-search-characters");h.addEventListener("click",e=>{let t=e.target;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
if(t.matches(".header-search-img, .header-search-title")){let e=t.dataset.id;(0,l.onModalOpenCharactersClick)({target:t},e)}});let m=null;m=(0,r.getItemsPerPage)();const u=e=>e.map(e=>`
      <li class="header-search-item">
        <img class="header-search-img"
       data-id="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-id="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),p=()=>{n.innerHTML=""},g=e=>{n.insertAdjacentHTML("beforeend",u(e))},w=()=>{o.classList.add("js-header-search-top"),o.scrollIntoView({behavior:"smooth"})},f=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(d.reset(),""!==a)try{(0,c.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:a,limit:m,offset:0});if(0===e.results.length){(0,c.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),n.innerHTML='<div class="nothing-seach"></div>',w();return}(0,c.hideLoader)(),p(),g(e.results),w()}catch(e){(0,c.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};d.addEventListener("submit",f);const b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")});let j=null;// Функція для ініціалізації Swiper
function L(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,a=window.innerWidth>=1440,s="vertical";e?s="vertical":t?s="horizontal":a&&(s="vertical"),// Ініціалізація Swiper
j&&j.destroy(),j=new Swiper(".section-hero-swiper",{direction:s,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}L(),window.addEventListener("resize",L);const v=document.querySelector(".swiper-pagination"),$=document.querySelector(".js-btn-color");v.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),s="";"Go to slide 1"===a?(s="#600404",$.style.background=s):"Go to slide 2"===a?(s="#34387f",$.style.background=s):"Go to slide 3"===a&&(s="#5b7f3c",$.style.background=s)});var i=s("iRoAB"),c=s("jKGAa"),l=s("cIK95");const y=document.querySelector(".js-random-img"),S=document.querySelector(".js-random-descr"),x=document.querySelector(".js-click-random-characters"),q=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>` 
      
      <li class= "js-slide" data-id="${e}">
    
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${a}'
      /></picture>
    </li>`).join("");return t};x.addEventListener("click",e=>{let t=e.target,a=t.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
t.matches(".js-random-characters-img, .js-random-characters-title")&&(0,l.onModalOpenCharactersClick)({target:t},a)});const k=e=>{y.insertAdjacentHTML("beforeend",q(e))},A=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},M=e=>{S.insertAdjacentHTML("beforeend",A(e))},E=async()=>{try{(0,c.showLoader)(),y.classList.add("randomImg-before-loading"),S.classList.add("randomImg-before-loading");let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],s=[...t];for(let e=0;e<5&&s.length>0;e++){let e=Math.floor(Math.random()*s.length),t=s[e];a.push(t),s.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{y.classList.remove("randomImg-before-loading")},2500),S.classList.remove("randomImg-before-loading"),k(a),M(a),(0,c.hideLoader)(),C=document.querySelectorAll(".js-slide"),I=document.querySelectorAll(".js-random-characters-description"),setInterval(H,3500)}catch(e){(0,c.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};E();let C=[],I=null,T=0,W=0;const H=()=>{for(let e=0;e<C.length;e+=1)C[e].classList.remove("js-show"),C[e].classList.add("js-slide");for(let e=0;e<I.length;e+=1)I[e].classList.remove("js-active"),I[e].classList.add("js-random-characters-description");W=(W+1)%C.length,T=(T+1)%I.length,C[W].classList.add("js-show"),C[W].classList.remove("js-slide"),I[T].classList.add("js-active"),I[T].classList.remove("js-random-characters-description")};var i=s("iRoAB"),P=s("6XzeY");const V=document.querySelector(".js-last-comics-list"),B=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:s})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
     <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/> 
      <img class="last-comics-img slide-comics-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${a}'
      />
     </picture>
      <h3 class="last-comics-title" data-id="${e}">${a}</h3>
      <p class= "last-comics-creator" data-id="${e}">${s.items[0].name}</p>
    </li>`).join("");return t},G=document.querySelector(".js-click-delegate-last-comics");G.addEventListener("click",e=>{let t=e.target;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
if(t.matches(".last-comics-img")){let e=t.dataset.id;(0,P.onModalComicsClick)({target:t},e)}});const K=e=>{V.insertAdjacentHTML("beforeend",B(e))},O=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),K(e.results)}catch(e){//location.replace('./error.html');
console.log(e.message)}};O(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}}),s("cIK95"),s("6XzeY");//# sourceMappingURL=index.36ce3704.js.map

//# sourceMappingURL=index.36ce3704.js.map
