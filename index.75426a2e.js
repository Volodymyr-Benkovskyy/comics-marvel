!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequirece98;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirece98=i);var s=i("7lKJl"),r=i("81V9Z");let l=document.querySelector(".js-header-search"),n=document.querySelector(".js-header-form"),o=null;o=(()=>{let e={mobile:320,tablet:768};return window.innerWidth<=e.mobile?5:window.innerWidth<=e.tablet?8:16})();let c=e=>e.map(e=>`<li class="header-search-item">
        <img class="header-search-img"
       data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),d=e=>{l.insertAdjacentHTML("beforeend",c(e))},h=()=>{l.scrollIntoView({behavior:"smooth"})},m=()=>{l.innerHTML=""},u=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(n.reset(),""!==a)try{(0,r.showLoader)();let e=await (0,s.api).getCharacters({nameStartsWith:a,limit:o,offset:0});if(0===e.results.length){(0,r.hideLoader)(),h(),l.innerHTML='<div class="nothing-seach"></div>';return}(0,r.hideLoader)(),m(),d(e.results),h()}catch(e){location.replace("../error.html"),(0,r.hideLoader)()}};n.addEventListener("submit",u);let p=document.querySelector(".header");window.addEventListener("scroll",()=>{0!==scrollY?p.classList.add("js-header-bg"):p.classList.remove("js-header-bg")});/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

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

window.addEventListener('resize', initSwiper); */let w=null;// Змінна для зберігання екземпляру Swiper
// Функція для ініціалізації Swiper
function g(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<1024,a=window.innerWidth>=1440,i="vertical";e?i="vertical":t?i="horizontal":a&&(i="vertical"),// Ініціалізація Swiper
w&&w.destroy(),w=new Swiper(".section-hero-swiper",{direction:i,loop:!1,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0,allowTouchMove:!1})}g(),window.addEventListener("resize",g);let b=document.querySelector(".swiper-pagination"),f=document.querySelector(".js-btn-color");b.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),i="";"Go to slide 1"===a?(i="#600404",f.style.background=i):"Go to slide 2"===a?(i="#34387f",f.style.background=i):"Go to slide 3"===a&&(i="#5b7f3c",f.style.background=i)});var s=i("7lKJl");let $=document.querySelector(".js-random-img"),j=document.querySelector(".js-random-descr"),v=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>`  <li class= "js-slide js-random-characters-img" data-id="${e}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${a}'
      /></picture>
    </li>`).join("");return t},y=e=>{$.insertAdjacentHTML("beforeend",v(e))},L=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},x=e=>{j.insertAdjacentHTML("beforeend",L(e))},S=async()=>{try{let e=await (0,s.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],i=[...t];for(let e=0;e<5&&i.length>0;e++){let e=Math.floor(Math.random()*i.length),t=i[e];a.push(t),i.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL тут
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),console.log(a),y(a),x(a),q=document.querySelectorAll(".js-slide"),M=document.querySelectorAll(".js-random-characters-description"),setInterval(E,3500)}catch(e){return console.log(e),location.replace("../error.html"),{error:e.message}}};S();let q=[],M=null,T=0,W=0,E=()=>{for(let e=0;e<q.length;e+=1)q[e].classList.remove("js-show"),q[e].classList.add("js-slide");for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-active"),M[e].classList.add("js-random-characters-description");W=(W+1)%q.length,T=(T+1)%M.length,q[W].classList.add("js-show"),q[W].classList.remove("js-slide"),M[T].classList.add("js-active"),M[T].classList.remove("js-random-characters-description")};var s=i("7lKJl");let k=document.querySelector(".js-last-comics-list"),A=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:i})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
      <p class= "last-comics-creator" data-id="${e}">${i.items[0].name}</p>
    </li>`).join("");return t},V=e=>{k.insertAdjacentHTML("beforeend",A(e))},H=async()=>{try{let e=await (0,s.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),V(e.results)}catch(e){console.log(e)}};H(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}})}();//# sourceMappingURL=index.75426a2e.js.map

//# sourceMappingURL=index.75426a2e.js.map
