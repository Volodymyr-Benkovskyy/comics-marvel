!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequirece98;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,s.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequirece98=s);var r=s("7lKJl"),i=s("2xl03"),l=s("81V9Z");let n=document.querySelector(".js-scrol-header-search"),o=document.querySelector(".js-header-search"),c=document.querySelector(".js-header-form"),d=document.querySelector(".js-remove"),h=null;h=(0,i.getItemsPerPage)();let m=e=>e.map(e=>`
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
    `).join(""),u=()=>{o.innerHTML=""},p=e=>{o.insertAdjacentHTML("beforeend",m(e))},g=()=>{n.classList.add("js-header-search-top"),n.scrollIntoView({behavior:"smooth"})},w=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(c.reset(),""!==a)try{(0,l.showLoader)();let e=await (0,r.api).getCharacters({nameStartsWith:a,limit:h,offset:0});if(0===e.results.length){(0,l.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),o.innerHTML='<div class="nothing-seach"></div>',g();return}(0,l.hideLoader)(),u(),p(e.results),g()}catch(e){location.replace("./error.html"),(0,l.hideLoader)()}};c.addEventListener("submit",w);let b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")}),d.addEventListener("click",()=>{nothisngSeach.classList.remove("nothing-seach")});let f=null;// Функція для ініціалізації Swiper
function L(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,a=window.innerWidth>=1440,s="vertical";e?s="vertical":t?s="horizontal":a&&(s="vertical"),// Ініціалізація Swiper
f&&f.destroy(),f=new Swiper(".section-hero-swiper",{direction:s,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}L(),window.addEventListener("resize",L);let j=document.querySelector(".swiper-pagination"),v=document.querySelector(".js-btn-color");j.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),s="";"Go to slide 1"===a?(s="#600404",v.style.background=s):"Go to slide 2"===a?(s="#34387f",v.style.background=s):"Go to slide 3"===a&&(s="#5b7f3c",v.style.background=s)});var r=s("7lKJl"),l=s("81V9Z");let y=document.querySelector(".js-random-img"),$=document.querySelector(".js-random-descr"),S=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>` 
      
      <li class= "js-slide js-random-characters-img" data-id="${e}">
    
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${a}'
      /></picture>
    </li>`).join("");return t},x=e=>{y.insertAdjacentHTML("beforeend",S(e))},q=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},E=e=>{$.insertAdjacentHTML("beforeend",q(e))},k=async()=>{try{(0,l.showLoader)(),y.classList.add("randomImg-before-loading"),$.classList.add("randomImg-before-loading");let e=await (0,r.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],s=[...t];for(let e=0;e<5&&s.length>0;e++){let e=Math.floor(Math.random()*s.length),t=s[e];a.push(t),s.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{y.classList.remove("randomImg-before-loading")},2500),$.classList.remove("randomImg-before-loading"),x(a),E(a),(0,l.hideLoader)(),T=document.querySelectorAll(".js-slide"),M=document.querySelectorAll(".js-random-characters-description"),setInterval(A,3500)}catch(e){(0,l.hideLoader)(),location.replace("../error.html")}};k();let T=[],M=null,V=0,W=0,A=()=>{for(let e=0;e<T.length;e+=1)T[e].classList.remove("js-show"),T[e].classList.add("js-slide");for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-active"),M[e].classList.add("js-random-characters-description");W=(W+1)%T.length,V=(V+1)%M.length,T[W].classList.add("js-show"),T[W].classList.remove("js-slide"),M[V].classList.add("js-active"),M[V].classList.remove("js-random-characters-description")};var r=s("7lKJl");let I=document.querySelector(".js-last-comics-list"),P=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:s})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},H=e=>{I.insertAdjacentHTML("beforeend",P(e))},C=async()=>{try{let e=await (0,r.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),H(e.results)}catch(e){location.replace("./error.html")}};C(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});let D=document.querySelector(".js-open-modal"),G=document.querySelector(".js-section-modal-characters"),J=document.querySelector(".js-modal-btn");D.addEventListener("click",()=>{G.classList.remove("display-content")}),J.addEventListener("click",()=>{G.classList.add("display-content")})}();//# sourceMappingURL=index.c2eb9f14.js.map

//# sourceMappingURL=index.c2eb9f14.js.map
