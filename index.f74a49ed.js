var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var i=a("iRoAB"),r=a("cH1ne"),l=a("jKGAa");const c=document.querySelector(".js-scrol-header-search"),o=document.querySelector(".js-header-search"),n=document.querySelector(".js-header-form"),d=document.querySelector(".js-remove");let h=null;h=(0,r.getItemsPerPage)();const m=e=>e.map(e=>`
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
    `).join(""),u=()=>{o.innerHTML=""},p=e=>{o.insertAdjacentHTML("beforeend",m(e))},g=()=>{c.classList.add("js-header-search-top"),c.scrollIntoView({behavior:"smooth"})},w=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(n.reset(),""!==s)try{(0,l.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:s,limit:h,offset:0});if(0===e.results.length){(0,l.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),o.innerHTML='<div class="nothing-seach"></div>',g();return}(0,l.hideLoader)(),u(),p(e.results),g()}catch(e){location.replace("./error.html"),(0,l.hideLoader)()}};n.addEventListener("submit",w);const b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")}),d.addEventListener("click",()=>{nothisngSeach.classList.remove("nothing-seach")});let $=null;// Функція для ініціалізації Swiper
function j(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,s=window.innerWidth>=1440,a="vertical";e?a="vertical":t?a="horizontal":s&&(a="vertical"),// Ініціалізація Swiper
$&&$.destroy(),$=new Swiper(".section-hero-swiper",{direction:a,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}j(),window.addEventListener("resize",j);const v=document.querySelector(".swiper-pagination"),y=document.querySelector(".js-btn-color");v.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",y.style.background=a):"Go to slide 2"===s?(a="#34387f",y.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",y.style.background=a)});var i=a("iRoAB"),l=a("jKGAa");const L=document.querySelector(".js-random-img"),f=document.querySelector(".js-random-descr"),S=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>` 
      
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
    </li>`).join("");return t},x=e=>{L.insertAdjacentHTML("beforeend",S(e))},q=e=>{let t=e.map(({name:e,description:t,id:s})=>`
    <li class='js-random-characters-description' data-id="${s}">
      <h3 class='js-random-characters-title' data-id="${s}">${e}</h3>
      <p class='js-random-characters-text' data-id="${s}">${t}</p>
    </li>`).join("");return t},I=e=>{f.insertAdjacentHTML("beforeend",q(e))},A=async()=>{try{(0,l.showLoader)(),L.classList.add("randomImg-before-loading"),f.classList.add("randomImg-before-loading");let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{L.classList.remove("randomImg-before-loading")},2500),f.classList.remove("randomImg-before-loading"),x(s),I(s),(0,l.hideLoader)(),T=document.querySelectorAll(".js-slide"),M=document.querySelectorAll(".js-random-characters-description"),setInterval(B,3500)}catch(e){(0,l.hideLoader)(),location.replace("../error.html")}};A();let T=[],M=null,k=0,E=0;const B=()=>{for(let e=0;e<T.length;e+=1)T[e].classList.remove("js-show"),T[e].classList.add("js-slide");for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-active"),M[e].classList.add("js-random-characters-description");E=(E+1)%T.length,k=(k+1)%M.length,T[E].classList.add("js-show"),T[E].classList.remove("js-slide"),M[k].classList.add("js-active"),M[k].classList.remove("js-random-characters-description")};var i=a("iRoAB");const H=document.querySelector(".js-last-comics-list"),P=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},R=e=>{H.insertAdjacentHTML("beforeend",P(e))},W=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),R(e.results)}catch(e){location.replace("./error.html")}};W(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});var i=a("iRoAB");const C=document.querySelector(".js-modal-section-characters"),V=document.querySelector(".js-modal-close-btn"),G=document.querySelector(".js-render-modal-characters"),D=document.querySelector(".js-render-modal-comics"),O=document.querySelector(".js-click-delegate");V.addEventListener("click",()=>{G.innerHTML="",D.innerHTML="",C.classList.add("display-none")});const U=e=>{let{thumbnail:t,series0:s,series1:a,series2:i,name:r}=e,l=`
    <div class="wraper-characters">
          <img
            class="modal-characters-primary-img"
            src="${t.path}.${t.extension}"
            alt="${r}"
          />
          <div class="modal-slide">
            <ul class="modal-characters-list">
               <li>
            <img
              class="modal-characters-small-img"
              src="${s[0].thumbnail.path}.${s[0].thumbnail.extension}" 
              alt=""
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${a[0].thumbnail.path}.${a[0].thumbnail.extension}" 
              alt=""
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${i[0].thumbnail.path}.${i[0].thumbnail.extension}" 
              alt=""
              width="80"
              height="80"
            />
          </li>
            </ul>
          </div>
        </div>
         
        `;return l},_=async e=>{let t=e.target.dataset.id;try{let e=await (0,i.api).getCharactersById({characterId:t}),s=e[0].series.items.map(e=>e.resourceURI.split("/").pop()),a=e[0].comics.items.map(e=>e.resourceURI.split("/").pop());console.log("seriesIds =>",s),console.log("seriesIds =>",a);let r=a.map(e=>(0,i.api).getComicById({comicId:e})),l=s.map(e=>(0,i.api).getSeriesById({seriesId:e})),[c,o]=await Promise.all([Promise.all(r),Promise.all(l)]);for(let t=0;t<3;t+=1)e[0][`comic${t}`]=c[t],e[0][`series${t}`]=o[t];console.log("dataById =>",e);let n=[U(e[0])];G.innerHTML=n,C.classList.remove("display-none")}catch(e){console.error("Помилка при отриманні characterObject:",e),alert("Дані відсутні")}};O.addEventListener("click",_);//# sourceMappingURL=index.f74a49ed.js.map

//# sourceMappingURL=index.f74a49ed.js.map
