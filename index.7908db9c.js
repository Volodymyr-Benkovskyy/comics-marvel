var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var r=a("iRoAB"),i=a("cH1ne"),l=a("jKGAa");const n=document.querySelector(".js-scrol-header-search"),o=document.querySelector(".js-header-search"),c=document.querySelector(".js-header-form");let d=null;d=(0,i.getItemsPerPage)();const h=e=>e.map(e=>`<li class="header-search-item">
        <img class="header-search-img"
       data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),m=()=>{o.innerHTML=""},p=e=>{o.insertAdjacentHTML("beforeend",h(e))},u=()=>{n.classList.add("js-header-search-top"),n.scrollIntoView({behavior:"smooth"})},w=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(c.reset(),""!==s)try{(0,l.showLoader)();let e=await (0,r.api).getCharacters({nameStartsWith:s,limit:d,offset:0});if(0===e.results.length){(0,l.hideLoader)(),o.innerHTML='<div class="nothing-seach"></div>',u();return}(0,l.hideLoader)(),m(),p(e.results),u()}catch(e){location.replace("../error.html"),console.log("Error!",e),(0,l.hideLoader)()}};c.addEventListener("submit",w);const g=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?g.classList.add("js-header-bg"):g.classList.remove("js-header-bg")});/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

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
b&&b.destroy(),b=new Swiper(".section-hero-swiper",{direction:a,loop:!1,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0,allowTouchMove:!1})}f(),window.addEventListener("resize",f);const j=document.querySelector(".swiper-pagination"),$=document.querySelector(".js-btn-color");j.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",$.style.background=a):"Go to slide 2"===s?(a="#34387f",$.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",$.style.background=a)});var r=a("iRoAB");const v=document.querySelector(".js-random-img"),y=document.querySelector(".js-random-descr"),L=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>`  <li class= "js-slide js-random-characters-img" data-id="${e}">
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
    </li>`).join("");return t},q=e=>{y.insertAdjacentHTML("beforeend",S(e))},A=async()=>{try{let e=await (0,r.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL тут
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),console.log(s),x(s),q(s),M=document.querySelectorAll(".js-slide"),T=document.querySelectorAll(".js-random-characters-description"),setInterval(k,3500)}catch(e){return console.log(e),location.replace("../error.html"),{error:e.message}}};A();let M=[],T=null,E=0,W=0;const k=()=>{for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-show"),M[e].classList.add("js-slide");for(let e=0;e<T.length;e+=1)T[e].classList.remove("js-active"),T[e].classList.add("js-random-characters-description");W=(W+1)%M.length,E=(E+1)%T.length,M[W].classList.add("js-show"),M[W].classList.remove("js-slide"),T[E].classList.add("js-active"),T[E].classList.remove("js-random-characters-description")};var r=a("iRoAB");const H=document.querySelector(".js-last-comics-list"),P=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},V=e=>{H.insertAdjacentHTML("beforeend",P(e))},B=async()=>{try{let e=await (0,r.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),V(e.results)}catch(e){console.log(e)}};B(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});//# sourceMappingURL=index.7908db9c.js.map

//# sourceMappingURL=index.7908db9c.js.map
