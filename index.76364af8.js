var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=e.parcelRequirece98;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var s=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequirece98=s);/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

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

window.addEventListener('resize', initSwiper); */let a=null;// Змінна для зберігання екземпляру Swiper
// Функція для ініціалізації Swiper
function r(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<1024,i=window.innerWidth>=1440,s="vertical";e?s="vertical":t?s="horizontal":i&&(s="vertical"),// Ініціалізація Swiper
a&&a.destroy(),a=new Swiper(".section-hero-swiper",{direction:s,loop:!1,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0,allowTouchMove:!1})}r(),window.addEventListener("resize",r);const l=document.querySelector(".swiper-pagination"),n=document.querySelector(".js-btn-color");l.addEventListener("click",e=>{let{target:t}=e,i=t.getAttribute("aria-label"),s="";"Go to slide 1"===i?(s="#600404",n.style.background=s):"Go to slide 2"===i?(s="#34387f",n.style.background=s):"Go to slide 3"===i&&(s="#5b7f3c",n.style.background=s)});var o=s("iRoAB");const c=document.querySelector(".js-random-img"),d=document.querySelector(".js-random-descr"),h=e=>{let t=e.map(({id:e,thumbnail:t,name:i})=>`  <li class= "js-slide js-random-characters-img" data-id="${e}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${i}'
      /></picture>
    </li>`).join("");return t},p=e=>{c.insertAdjacentHTML("beforeend",h(e))},m=e=>{let t=e.map(({name:e,description:t,id:i})=>`
    <li class='js-random-characters-description' data-id="${i}">
      <h3 class='js-random-characters-title' data-id="${i}">${e}</h3>
      <p class='js-random-characters-text' data-id="${i}">${t}</p>
    </li>`).join("");return t},u=e=>{d.insertAdjacentHTML("beforeend",m(e))},w=async()=>{try{let e=await (0,o.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let i=[],s=[...t];for(let e=0;e<5&&s.length>0;e++){let e=Math.floor(Math.random()*s.length),t=s[e];i.push(t),s.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL тут
i.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),console.log(i),p(i),u(i),g=document.querySelectorAll(".js-slide"),b=document.querySelectorAll(".js-random-characters-description"),setInterval(j,3500)}catch(e){return console.log(e),location.replace("../error.html"),{error:e.message}}};w();let g=[],b=null,f=0,$=0;const j=()=>{for(let e=0;e<g.length;e+=1)g[e].classList.remove("js-show"),g[e].classList.add("js-slide");for(let e=0;e<b.length;e+=1)b[e].classList.remove("js-active"),b[e].classList.add("js-random-characters-description");$=($+1)%g.length,f=(f+1)%b.length,g[$].classList.add("js-show"),g[$].classList.remove("js-slide"),b[f].classList.add("js-active"),b[f].classList.remove("js-random-characters-description")};var o=s("iRoAB");const v=document.querySelector(".js-last-comics-list"),y=e=>{let t=e.map(({id:e,thumbnail:t,title:i,creators:s})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
     <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/> 
      <img class="last-comics-img slide-comics-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${i}'
      />
     </picture>
      <h3 class="last-comics-title" data-id="${e}">${i}</h3>
      <p class= "last-comics-creator" data-id="${e}">${s.items[0].name}</p>
    </li>`).join("");return t},x=e=>{v.insertAdjacentHTML("beforeend",y(e))},L=async()=>{try{let e=await (0,o.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),x(e.results)}catch(e){console.log(e)}};L(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});//# sourceMappingURL=index.76364af8.js.map

//# sourceMappingURL=index.76364af8.js.map
