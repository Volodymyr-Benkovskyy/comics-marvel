!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var r=a("7lKJl"),i=a("2xl03"),l=a("81V9Z");let n=document.querySelector(".js-scrol-header-search"),c=document.querySelector(".js-header-search"),o=document.querySelector(".js-header-form"),d=document.querySelector(".js-remove"),h=null;h=(0,i.getItemsPerPage)();let m=e=>e.map(e=>`<li class="header-search-item">
        <img class="header-search-img"
       data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),u=()=>{c.innerHTML=""},p=e=>{c.insertAdjacentHTML("beforeend",m(e))},g=()=>{n.classList.add("js-header-search-top"),n.scrollIntoView({behavior:"smooth"})},w=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(o.reset(),""!==s)try{(0,l.showLoader)();let e=await (0,r.api).getCharacters({nameStartsWith:s,limit:h,offset:0});if(0===e.results.length){(0,l.hideLoader)(),c.innerHTML='<div class="nothing-seach"></div>',nothisngSeach=document.querySelector(".nothing-seach"),g();return}(0,l.hideLoader)(),u(),p(e.results),g()}catch(e){//location.replace('../error.html');
console.log("Error!",e),(0,l.hideLoader)()}};o.addEventListener("submit",w);let b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")}),d.addEventListener("click",()=>{nothisngSeach.classList.remove("nothing-seach")});let f=null;// Функція для ініціалізації Swiper
function j(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,s=window.innerWidth>=1440,a="vertical";e?a="vertical":t?a="horizontal":s&&(a="vertical"),// Ініціалізація Swiper
f&&f.destroy(),f=new Swiper(".section-hero-swiper",{direction:a,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}j(),window.addEventListener("resize",j);let v=document.querySelector(".swiper-pagination"),$=document.querySelector(".js-btn-color");v.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",$.style.background=a):"Go to slide 2"===s?(a="#34387f",$.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",$.style.background=a)});var r=a("7lKJl");let y=document.querySelector(".js-random-img"),L=document.querySelector(".js-random-descr"),x=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>`  <li class= "js-slide js-random-characters-img" data-id="${e}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${s}'
      /></picture>
    </li>`).join("");return t},S=e=>{y.insertAdjacentHTML("beforeend",x(e))},q=e=>{let t=e.map(({name:e,description:t,id:s})=>`
    <li class='js-random-characters-description' data-id="${s}">
      <h3 class='js-random-characters-title' data-id="${s}">${e}</h3>
      <p class='js-random-characters-text' data-id="${s}">${t}</p>
    </li>`).join("");return t},E=e=>{L.insertAdjacentHTML("beforeend",q(e))},M=async()=>{try{let e=await (0,r.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL тут
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),console.log(s),S(s),E(s),T=document.querySelectorAll(".js-slide"),k=document.querySelectorAll(".js-random-characters-description"),setInterval(P,3500)}catch(e){return console.log(e),location.replace("../error.html"),{error:e.message}}};M();let T=[],k=null,W=0,A=0,P=()=>{for(let e=0;e<T.length;e+=1)T[e].classList.remove("js-show"),T[e].classList.add("js-slide");for(let e=0;e<k.length;e+=1)k[e].classList.remove("js-active"),k[e].classList.add("js-random-characters-description");A=(A+1)%T.length,W=(W+1)%k.length,T[A].classList.add("js-show"),T[A].classList.remove("js-slide"),k[W].classList.add("js-active"),k[W].classList.remove("js-random-characters-description")};var r=a("7lKJl");let V=document.querySelector(".js-last-comics-list"),H=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},C=e=>{V.insertAdjacentHTML("beforeend",H(e))},D=async()=>{try{let e=await (0,r.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),C(e.results)}catch(e){console.log(e)}};D(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}})}();//# sourceMappingURL=index.6b15bab0.js.map

//# sourceMappingURL=index.6b15bab0.js.map
