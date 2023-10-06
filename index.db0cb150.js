!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var r=a("7lKJl"),i=a("2xl03"),l=a("81V9Z");let n=document.querySelector(".js-scrol-header-search"),o=document.querySelector(".js-header-search"),c=document.querySelector(".js-header-form"),d=null;d=(0,i.getItemsPerPage)();let h=e=>e.map(e=>`<li class="header-search-item">
        <img class="header-search-img"
       data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),m=()=>{o.innerHTML=""},u=e=>{o.insertAdjacentHTML("beforeend",h(e))},p=()=>{n.classList.add("js-header-search-top"),n.scrollIntoView({behavior:"smooth"})},w=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(c.reset(),""!==s)try{(0,l.showLoader)();let e=await (0,r.api).getCharacters({nameStartsWith:s,limit:d,offset:0});if(0===e.results.length){(0,l.hideLoader)(),o.innerHTML='<div class="nothing-seach"></div>',p();return}(0,l.hideLoader)(),m(),u(e.results),p()}catch(e){location.replace("../error.html"),console.log("Error!",e),(0,l.hideLoader)()}};c.addEventListener("submit",w);let g=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?g.classList.add("js-header-bg"):g.classList.remove("js-header-bg")});/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

// Функція для ініціалізації Swiper
function initSwiper() {
  const direction =
    window.innerWidth < 768 || window.innerWidth >= 1440
      ? 'vertical'
      : 'horizontal';

  swiperSlideHero ? swiperSlideHero.destroy() : null;

  swiperSlideHero = new Swiper('.section-hero-swiper', {
    direction: direction,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 50,
    slidesPerView: 1,
    initialSlide: 0,
  });
}

initSwiper();
 && window.innerWidth < 1024
window.addEventListener('resize', initSwiper); */let b=null;// Змінна для зберігання екземпляру Swiper
// Функція для ініціалізації Swiper
function f(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,s=window.innerWidth>=1440,a="vertical";e?a="vertical":t?a="horizontal":s&&(a="vertical"),// Ініціалізація Swiper
b&&b.destroy(),b=new Swiper(".section-hero-swiper",{direction:a,loop:!1,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0,allowTouchMove:!1})}f(),window.addEventListener("resize",f);let j=document.querySelector(".swiper-pagination"),$=document.querySelector(".js-btn-color");j.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",$.style.background=a):"Go to slide 2"===s?(a="#34387f",$.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",$.style.background=a)});var r=a("7lKJl");let v=document.querySelector(".js-random-img"),y=document.querySelector(".js-random-descr"),L=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>`  <li class= "js-slide js-random-characters-img" data-id="${e}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${s}'
      /></picture>
    </li>`).join("");return t},x=e=>{v.insertAdjacentHTML("beforeend",L(e))},S=e=>{let t=e.map(({name:e,description:t,id:s})=>`
    <li class='js-random-characters-description' data-id="${s}">
      <h3 class='js-random-characters-title' data-id="${s}">${e}</h3>
      <p class='js-random-characters-text' data-id="${s}">${t}</p>
    </li>`).join("");return t},q=e=>{y.insertAdjacentHTML("beforeend",S(e))},M=async()=>{try{let e=await (0,r.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL тут
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),console.log(s),x(s),q(s),T=document.querySelectorAll(".js-slide"),E=document.querySelectorAll(".js-random-characters-description"),setInterval(A,3500)}catch(e){return console.log(e),location.replace("../error.html"),{error:e.message}}};M();let T=[],E=null,W=0,k=0,A=()=>{for(let e=0;e<T.length;e+=1)T[e].classList.remove("js-show"),T[e].classList.add("js-slide");for(let e=0;e<E.length;e+=1)E[e].classList.remove("js-active"),E[e].classList.add("js-random-characters-description");k=(k+1)%T.length,W=(W+1)%E.length,T[k].classList.add("js-show"),T[k].classList.remove("js-slide"),E[W].classList.add("js-active"),E[W].classList.remove("js-random-characters-description")};var r=a("7lKJl");let P=document.querySelector(".js-last-comics-list"),V=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},H=e=>{P.insertAdjacentHTML("beforeend",V(e))},C=async()=>{try{let e=await (0,r.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),H(e.results)}catch(e){console.log(e)}};C(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}})}();//# sourceMappingURL=index.db0cb150.js.map

//# sourceMappingURL=index.db0cb150.js.map
