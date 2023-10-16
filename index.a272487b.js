!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequirece98;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirece98=s);var i=s("7lKJl"),r=s("2xl03"),l=s("81V9Z");let c=document.querySelector(".js-scrol-header-search"),o=document.querySelector(".js-header-search"),n=document.querySelector(".js-header-form"),d=document.querySelector(".js-remove"),h=null;h=(0,r.getItemsPerPage)();let m=e=>e.map(e=>`
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
    `).join(""),u=()=>{o.innerHTML=""},p=e=>{o.insertAdjacentHTML("beforeend",m(e))},g=()=>{c.classList.add("js-header-search-top"),c.scrollIntoView({behavior:"smooth"})},w=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(n.reset(),""!==a)try{(0,l.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:a,limit:h,offset:0});if(0===e.results.length){(0,l.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),o.innerHTML='<div class="nothing-seach"></div>',g();return}(0,l.hideLoader)(),u(),p(e.results),g()}catch(e){location.replace("./error.html"),(0,l.hideLoader)()}};n.addEventListener("submit",w);let b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")}),d.addEventListener("click",()=>{nothisngSeach.classList.remove("nothing-seach")});let $=null;// Функція для ініціалізації Swiper
function v(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,a=window.innerWidth>=1440,s="vertical";e?s="vertical":t?s="horizontal":a&&(s="vertical"),// Ініціалізація Swiper
$&&$.destroy(),$=new Swiper(".section-hero-swiper",{direction:s,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}v(),window.addEventListener("resize",v);let y=document.querySelector(".swiper-pagination"),L=document.querySelector(".js-btn-color");y.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),s="";"Go to slide 1"===a?(s="#600404",L.style.background=s):"Go to slide 2"===a?(s="#34387f",L.style.background=s):"Go to slide 3"===a&&(s="#5b7f3c",L.style.background=s)});var i=s("7lKJl"),l=s("81V9Z");let f=document.querySelector(".js-random-img"),j=document.querySelector(".js-random-descr"),S=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>` 
      
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
    </li>`).join("");return t},x=e=>{f.insertAdjacentHTML("beforeend",S(e))},q=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},I=e=>{j.insertAdjacentHTML("beforeend",q(e))},T=async()=>{try{(0,l.showLoader)(),f.classList.add("randomImg-before-loading"),j.classList.add("randomImg-before-loading");let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],s=[...t];for(let e=0;e<5&&s.length>0;e++){let e=Math.floor(Math.random()*s.length),t=s[e];a.push(t),s.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{f.classList.remove("randomImg-before-loading")},2500),j.classList.remove("randomImg-before-loading"),x(a),I(a),(0,l.hideLoader)(),M=document.querySelectorAll(".js-slide"),k=document.querySelectorAll(".js-random-characters-description"),setInterval(H,3500)}catch(e){(0,l.hideLoader)(),location.replace("../error.html")}};T();let M=[],k=null,E=0,P=0,H=()=>{for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-show"),M[e].classList.add("js-slide");for(let e=0;e<k.length;e+=1)k[e].classList.remove("js-active"),k[e].classList.add("js-random-characters-description");P=(P+1)%M.length,E=(E+1)%k.length,M[P].classList.add("js-show"),M[P].classList.remove("js-slide"),k[E].classList.add("js-active"),k[E].classList.remove("js-random-characters-description")};var i=s("7lKJl");let V=document.querySelector(".js-last-comics-list"),W=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:s})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},A=e=>{V.insertAdjacentHTML("beforeend",W(e))},B=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),A(e.results)}catch(e){location.replace("./error.html")}};B(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});var i=s("7lKJl");let C=document.querySelector(".js-modal-section-characters"),D=document.querySelector(".js-modal-close-btn"),J=document.querySelector(".js-render-modal-characters"),K=document.querySelector(".js-render-modal-comics"),O=document.querySelector(".js-click-delegate");D.addEventListener("click",()=>{J.innerHTML="",K.innerHTML="",C.classList.add("display-none")});let R=e=>{let{thumbnail:t,series0:a,series1:s,series2:i,name:r}=e,l=`
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
              src="${a[0].thumbnail.path}.${a[0].thumbnail.extension}" 
              alt=""
              width="80"
              height="80"
            />
          </li>
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
              src="${i[0].thumbnail.path}.${i[0].thumbnail.extension}" 
              alt=""
              width="80"
              height="80"
            />
          </li>
            </ul>
          </div>
        </div>
         
        `;return l},U=async e=>{let t=e.target.dataset.id;try{let e=await (0,i.api).getCharactersById({characterId:t}),a=e[0].series.items.map(e=>e.resourceURI.split("/").pop()),s=e[0].comics.items.map(e=>e.resourceURI.split("/").pop());console.log("seriesIds =>",a),console.log("seriesIds =>",s);let r=s.map(e=>(0,i.api).getComicById({comicId:e})),l=a.map(e=>(0,i.api).getSeriesById({seriesId:e})),[c,o]=await Promise.all([Promise.all(r),Promise.all(l)]);for(let t=0;t<3;t+=1)e[0][`comic${t}`]=c[t],e[0][`series${t}`]=o[t];console.log("dataById =>",e);let n=[R(e[0])];J.innerHTML=n,C.classList.remove("display-none")}catch(e){console.error("Помилка при отриманні characterObject:",e),alert("Дані відсутні")}};O.addEventListener("click",U)}();//# sourceMappingURL=index.a272487b.js.map

//# sourceMappingURL=index.a272487b.js.map
