var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var r=a("iRoAB"),i=a("cH1ne"),n=a("jKGAa");const o=document.querySelector(".js-scrol-header-search"),l=document.querySelector(".js-header-search"),c=document.querySelector(".js-header-form"),d=document.querySelector(".js-remove");let h=null;h=(0,i.getItemsPerPage)();const m=e=>e.map(e=>`
      <li class="header-search-item">
        <img class="header-search-img"
       data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),u=()=>{l.innerHTML=""},p=e=>{l.insertAdjacentHTML("beforeend",m(e))},g=()=>{o.classList.add("js-header-search-top"),o.scrollIntoView({behavior:"smooth"})},w=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(c.reset(),""!==s)try{(0,n.showLoader)();let e=await (0,r.api).getCharacters({nameStartsWith:s,limit:h,offset:0});if(0===e.results.length){(0,n.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),l.innerHTML='<div class="nothing-seach"></div>',g();return}(0,n.hideLoader)(),u(),p(e.results),g()}catch(e){location.replace("./error.html"),(0,n.hideLoader)()}};c.addEventListener("submit",w);const b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")}),d.addEventListener("click",()=>{nothisngSeach.classList.remove("nothing-seach")});let j=null;// Функція для ініціалізації Swiper
function f(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,s=window.innerWidth>=1440,a="vertical";e?a="vertical":t?a="horizontal":s&&(a="vertical"),// Ініціалізація Swiper
j&&j.destroy(),j=new Swiper(".section-hero-swiper",{direction:a,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}f(),window.addEventListener("resize",f);const L=document.querySelector(".swiper-pagination"),v=document.querySelector(".js-btn-color");L.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",v.style.background=a):"Go to slide 2"===s?(a="#34387f",v.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",v.style.background=a)});var r=a("iRoAB"),n=a("jKGAa");const y=document.querySelector(".js-random-img"),$=document.querySelector(".js-random-descr"),S=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>` 
      
      <li class= "js-slide js-random-characters-img" data-id="${e}">
    
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${s}'
      /></picture>
    </li>`).join("");return t},q=e=>{y.insertAdjacentHTML("beforeend",S(e))},x=e=>{let t=e.map(({name:e,description:t,id:s})=>`
    <li class='js-random-characters-description' data-id="${s}">
      <h3 class='js-random-characters-title' data-id="${s}">${e}</h3>
      <p class='js-random-characters-text' data-id="${s}">${t}</p>
    </li>`).join("");return t},A=e=>{$.insertAdjacentHTML("beforeend",x(e))},E=async()=>{try{(0,n.showLoader)(),y.classList.add("randomImg-before-loading"),$.classList.add("randomImg-before-loading");let e=await (0,r.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{y.classList.remove("randomImg-before-loading")},2500),$.classList.remove("randomImg-before-loading"),q(s),A(s),(0,n.hideLoader)(),k=document.querySelectorAll(".js-slide"),T=document.querySelectorAll(".js-random-characters-description"),setInterval(H,3500)}catch(e){(0,n.hideLoader)(),location.replace("../error.html")}};E();let k=[],T=null,M=0,W=0;const H=()=>{for(let e=0;e<k.length;e+=1)k[e].classList.remove("js-show"),k[e].classList.add("js-slide");for(let e=0;e<T.length;e+=1)T[e].classList.remove("js-active"),T[e].classList.add("js-random-characters-description");W=(W+1)%k.length,M=(M+1)%T.length,k[W].classList.add("js-show"),k[W].classList.remove("js-slide"),T[M].classList.add("js-active"),T[M].classList.remove("js-random-characters-description")};var r=a("iRoAB");const I=document.querySelector(".js-last-comics-list"),P=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
     <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/> 
      <img class="last-comics-img slide-comics-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${s}'
      />
     </picture>
      <h3 class="last-comics-title" data-id="${e}">${s}</h3>
      <p class= "last-comics-creator" data-id="${e}">${a.items[0].name}</p>
    </li>`).join("");return t},V=e=>{I.insertAdjacentHTML("beforeend",P(e))},B=async()=>{try{let e=await (0,r.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),V(e.results)}catch(e){location.replace("./error.html")}};B(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});const G=document.querySelector(".js-open-modal"),R=document.querySelector(".js-section-modal-characters"),C=document.querySelector(".js-modal-btn");G.addEventListener("click",()=>{R.classList.remove("display-content")}),C.addEventListener("click",()=>{R.classList.add("display-content")});//# sourceMappingURL=index.3b9b5d3d.js.map

//# sourceMappingURL=index.3b9b5d3d.js.map