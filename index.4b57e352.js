!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var i=a("7lKJl"),r=a("2xl03"),l=a("81V9Z");let c=document.querySelector(".js-scrol-header-search"),o=document.querySelector(".js-header-search"),n=document.querySelector(".js-header-form"),d=document.querySelector(".js-remove"),m=null;m=(0,r.getItemsPerPage)();let h=e=>e.map(e=>`
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
    `).join(""),p=()=>{o.innerHTML=""},u=e=>{o.insertAdjacentHTML("beforeend",h(e))},g=()=>{c.classList.add("js-header-search-top"),c.scrollIntoView({behavior:"smooth"})},$=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(n.reset(),""!==s)try{(0,l.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:s,limit:m,offset:0});if(0===e.results.length){(0,l.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),o.innerHTML='<div class="nothing-seach"></div>',g();return}(0,l.hideLoader)(),p(),u(e.results),g()}catch(e){location.replace("./error.html"),(0,l.hideLoader)()}};n.addEventListener("submit",$);let b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")}),d.addEventListener("click",()=>{nothisngSeach.classList.remove("nothing-seach")});let w=null;// Функція для ініціалізації Swiper
function v(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,s=window.innerWidth>=1440,a="vertical";e?a="vertical":t?a="horizontal":s&&(a="vertical"),// Ініціалізація Swiper
w&&w.destroy(),w=new Swiper(".section-hero-swiper",{direction:a,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}v(),window.addEventListener("resize",v);let L=document.querySelector(".swiper-pagination"),y=document.querySelector(".js-btn-color");L.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",y.style.background=a):"Go to slide 2"===s?(a="#34387f",y.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",y.style.background=a)});var i=a("7lKJl"),l=a("81V9Z");let f=document.querySelector(".js-random-img"),j=document.querySelector(".js-random-descr"),S=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>` 
      
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
    </li>`).join("");return t},x=e=>{f.insertAdjacentHTML("beforeend",S(e))},q=e=>{let t=e.map(({name:e,description:t,id:s})=>`
    <li class='js-random-characters-description' data-id="${s}">
      <h3 class='js-random-characters-title' data-id="${s}">${e}</h3>
      <p class='js-random-characters-text' data-id="${s}">${t}</p>
    </li>`).join("");return t},I=e=>{j.insertAdjacentHTML("beforeend",q(e))},T=async()=>{try{(0,l.showLoader)(),f.classList.add("randomImg-before-loading"),j.classList.add("randomImg-before-loading");let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{f.classList.remove("randomImg-before-loading")},2500),j.classList.remove("randomImg-before-loading"),x(s),I(s),(0,l.hideLoader)(),M=document.querySelectorAll(".js-slide"),k=document.querySelectorAll(".js-random-characters-description"),setInterval(V,3500)}catch(e){(0,l.hideLoader)(),location.replace("../error.html")}};T();let M=[],k=null,E=0,H=0,V=()=>{for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-show"),M[e].classList.add("js-slide");for(let e=0;e<k.length;e+=1)k[e].classList.remove("js-active"),k[e].classList.add("js-random-characters-description");H=(H+1)%M.length,E=(E+1)%k.length,M[H].classList.add("js-show"),M[H].classList.remove("js-slide"),k[E].classList.add("js-active"),k[E].classList.remove("js-random-characters-description")};var i=a("7lKJl");let W=document.querySelector(".js-last-comics-list"),A=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},P=e=>{W.insertAdjacentHTML("beforeend",A(e))},B=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),P(e.results)}catch(e){location.replace("./error.html")}};B(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});var i=a("7lKJl"),l=a("81V9Z");let C=document.querySelector(".js-modal-section-characters"),D=document.querySelector(".js-modal-close-btn"),U=document.querySelector(".js-render-modal-characters"),J=document.querySelector(".js-render-modal-comics"),K=document.querySelector(".js-click-delegate");D.addEventListener("click",()=>{U.innerHTML="",J.innerHTML="",C.classList.add("display-none")});/* /////////////////////////////////////////////////////////// */let R=async e=>{let t=e.target.dataset.id;(0,l.showLoader)();try{let e=await (0,i.api).getCharactersById({characterId:t});0===response.total&&(C.classList.remove("display-none"),U.innerHTML='<div class="nothing-seach"></div>');let s=e[0].series.items.map(e=>e.resourceURI.split("/").pop()),a=e[0].comics.items.map(e=>e.resourceURI.split("/").pop());console.log("seriesIds =>",s),console.log("comicsIds =>",a);for(let t=0;t<3;t+=1){let r=a[t],l=s[t];e[0][`comic${t}`]=await (0,i.api).getComicById({comicId:r}),e[0][`series${t}`]=await (0,i.api).getSeriesById({seriesId:l})}console.log("dataById =>",e);let r=[G(e[0]),O(e[0])];U.innerHTML=r[0],J.innerHTML=r[1],C.classList.remove("display-none"),(0,l.hideLoader)()}catch(e){// renderModalCharacters.innerHTML = '<div class="nothing-seach"></div>';
(0,l.hideLoader)(),location.replace("./error.html")}};K.addEventListener("click",R);let G=e=>{let{thumbnail:t,series0:s,series1:a,series2:i,name:r}=e,l=`
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
         
        `;return l},O=e=>{let{id:t,thumbnail:s,name:a,description:i,modified:r,comics:l,comic0:c,comic1:o,comic2:n}=e;0===c[0].creators.available&&c[0].creators.items.push({name:""}),0===o[0].creators.available&&o[0].creators.items.push({name:""}),0===n[0].creators.available&&n[0].creators.items.push({name:""});let d=new Date(r).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),m=`
  <div class="wraper-comics">
     <div class="comics-title-date">
        <h1 class="comics-name-title">${a}</h1>
        <p class="comics-date">${d}</p>
      </div>
      <p class="comics-description">${i}</p>
      <h2 class="comics-list-title">List of comics</h2>
      <ul class="comics-list">
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${c[0].thumbnail.path}.${c[0].thumbnail.extension}"
            alt="${c[0].name}"
            data-id="${c[0].id}"
          />
          <h3 class="comics-title">${c[0].title}</h3>
          <p class="comics-creator-name">${c[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${o[0].thumbnail.path}.${o[0].thumbnail.extension}"
            alt="${o[0].name}"
            data-id="${o[0].id}"
          />
          <h3 class="comics-title">${o[0].title}</h3>
          <p class="comics-creator-name">${o[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${n[0].thumbnail.path}.${n[0].thumbnail.extension}"
            alt="${n[0].name}"
            data-id="${n[0].id}"
          />
          <h3 class="comics-title">${n[0].title}</h3>
          <p class="comics-creator-name">${n[0].creators.items[0].name}</p>
        </li>
      </ul>
  </div>
     `;return m}}();//# sourceMappingURL=index.4b57e352.js.map

//# sourceMappingURL=index.4b57e352.js.map
