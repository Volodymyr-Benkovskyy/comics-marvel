!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequirece98;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirece98=s);var i=s("7lKJl"),r=s("2xl03"),l=s("81V9Z");let n=document.querySelector(".js-header-search"),o=document.querySelector(".js-header-form"),c=null;c=(0,r.getItemsPerPage)();let d=e=>e.map(e=>`<li class="header-search-item">
        <img class="header-search-img"
       data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),h=()=>{n.innerHTML=""},m=e=>{n.insertAdjacentHTML("beforeend",d(e))},p=()=>{n.scrollIntoView({behavior:"smooth"})},u=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(o.reset(),""!==a)try{(0,l.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:a,limit:c,offset:0});if(0===e.results.length){(0,l.hideLoader)(),n.innerHTML='<div class="nothing-seach"></div>',p();return}(0,l.hideLoader)(),h(),m(e.results),p()}catch(e){location.replace("../error.html"),console.log("Error!",e),(0,l.hideLoader)()}};o.addEventListener("submit",u);let w=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?w.classList.add("js-header-bg"):w.classList.remove("js-header-bg")});/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

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
function b(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<1024,a=window.innerWidth>=1440,s="vertical";e?s="vertical":t?s="horizontal":a&&(s="vertical"),// Ініціалізація Swiper
g&&g.destroy(),g=new Swiper(".section-hero-swiper",{direction:s,loop:!1,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0,allowTouchMove:!1})}b(),window.addEventListener("resize",b);let f=document.querySelector(".swiper-pagination"),$=document.querySelector(".js-btn-color");f.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),s="";"Go to slide 1"===a?(s="#600404",$.style.background=s):"Go to slide 2"===a?(s="#34387f",$.style.background=s):"Go to slide 3"===a&&(s="#5b7f3c",$.style.background=s)});var i=s("7lKJl");let j=document.querySelector(".js-random-img"),v=document.querySelector(".js-random-descr"),y=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>`  <li class= "js-slide js-random-characters-img" data-id="${e}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${a}'
      /></picture>
    </li>`).join("");return t},L=e=>{j.insertAdjacentHTML("beforeend",y(e))},x=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},S=e=>{v.insertAdjacentHTML("beforeend",x(e))},q=async()=>{try{let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],s=[...t];for(let e=0;e<5&&s.length>0;e++){let e=Math.floor(Math.random()*s.length),t=s[e];a.push(t),s.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL тут
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),console.log(a),L(a),S(a),M=document.querySelectorAll(".js-slide"),T=document.querySelectorAll(".js-random-characters-description"),setInterval(k,3500)}catch(e){return console.log(e),location.replace("../error.html"),{error:e.message}}};q();let M=[],T=null,E=0,W=0,k=()=>{for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-show"),M[e].classList.add("js-slide");for(let e=0;e<T.length;e+=1)T[e].classList.remove("js-active"),T[e].classList.add("js-random-characters-description");W=(W+1)%M.length,E=(E+1)%T.length,M[W].classList.add("js-show"),M[W].classList.remove("js-slide"),T[E].classList.add("js-active"),T[E].classList.remove("js-random-characters-description")};var i=s("7lKJl");let A=document.querySelector(".js-last-comics-list"),P=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:s})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},V=e=>{A.insertAdjacentHTML("beforeend",P(e))},H=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),V(e.results)}catch(e){console.log(e)}};H(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}})}();//# sourceMappingURL=index.dcf9dd1d.js.map

//# sourceMappingURL=index.dcf9dd1d.js.map
