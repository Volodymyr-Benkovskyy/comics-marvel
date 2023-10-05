var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var i=a("iRoAB"),r=a("cH1ne"),l=a("jKGAa");const n=document.querySelector(".js-header-search"),o=document.querySelector(".js-header-form");let c=null;c=(0,r.getItemsPerPage)();const d=e=>e.map(e=>`<li class="header-search-item">
        <img class="header-search-img"
       data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),h=e=>{n.insertAdjacentHTML("beforeend",d(e))},m=()=>{n.scrollIntoView({behavior:"smooth"})},p=()=>{n.innerHTML=""},u=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(o.reset(),""!==s)try{(0,l.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:s,limit:c,offset:0});if(0===e.results.length){(0,l.hideLoader)(),m(),n.innerHTML='<div class="nothing-seach"></div>';return}(0,l.hideLoader)(),p(),h(e.results),m()}catch(e){location.replace("../error.html"),(0,l.hideLoader)()}};o.addEventListener("submit",u);const w=document.querySelector(".header");window.addEventListener("scroll",()=>{0===scrollY?w.classList.add("js-header-bg"):w.classList.remove("js-header-bg")});/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

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

window.addEventListener('resize', initSwiper); */let g=null;// Змінна для зберігання екземпляру Swiper
// Функція для ініціалізації Swiper
function b(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<1024,s=window.innerWidth>=1440,a="vertical";e?a="vertical":t?a="horizontal":s&&(a="vertical"),// Ініціалізація Swiper
g&&g.destroy(),g=new Swiper(".section-hero-swiper",{direction:a,loop:!1,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0,allowTouchMove:!1})}b(),window.addEventListener("resize",b);const f=document.querySelector(".swiper-pagination"),j=document.querySelector(".js-btn-color");f.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",j.style.background=a):"Go to slide 2"===s?(a="#34387f",j.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",j.style.background=a)});var i=a("iRoAB");const $=document.querySelector(".js-random-img"),v=document.querySelector(".js-random-descr"),y=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>`  <li class= "js-slide js-random-characters-img" data-id="${e}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${s}'
      /></picture>
    </li>`).join("");return t},L=e=>{$.insertAdjacentHTML("beforeend",y(e))},x=e=>{let t=e.map(({name:e,description:t,id:s})=>`
    <li class='js-random-characters-description' data-id="${s}">
      <h3 class='js-random-characters-title' data-id="${s}">${e}</h3>
      <p class='js-random-characters-text' data-id="${s}">${t}</p>
    </li>`).join("");return t},S=e=>{v.insertAdjacentHTML("beforeend",x(e))},q=async()=>{try{let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL тут
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),console.log(s),L(s),S(s),A=document.querySelectorAll(".js-slide"),M=document.querySelectorAll(".js-random-characters-description"),setInterval(W,3500)}catch(e){return console.log(e),location.replace("../error.html"),{error:e.message}}};q();let A=[],M=null,T=0,E=0;const W=()=>{for(let e=0;e<A.length;e+=1)A[e].classList.remove("js-show"),A[e].classList.add("js-slide");for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-active"),M[e].classList.add("js-random-characters-description");E=(E+1)%A.length,T=(T+1)%M.length,A[E].classList.add("js-show"),A[E].classList.remove("js-slide"),M[T].classList.add("js-active"),M[T].classList.remove("js-random-characters-description")};var i=a("iRoAB");const k=document.querySelector(".js-last-comics-list"),H=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},P=e=>{k.insertAdjacentHTML("beforeend",H(e))},V=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),P(e.results)}catch(e){console.log(e)}};V(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});//# sourceMappingURL=index.f5d7ee0b.js.map

//# sourceMappingURL=index.f5d7ee0b.js.map
