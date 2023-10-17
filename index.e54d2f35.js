var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in s){var a=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequirece98=a);var i=a("iRoAB"),r=a("cH1ne"),c=a("jKGAa");const l=document.querySelector(".js-scrol-header-search"),o=document.querySelector(".js-header-search"),n=document.querySelector(".js-header-form"),d=document.querySelector(".js-remove");let m=null;m=(0,r.getItemsPerPage)();const h=e=>e.map(e=>`
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
    `).join(""),p=()=>{o.innerHTML=""},u=e=>{o.insertAdjacentHTML("beforeend",h(e))},g=()=>{l.classList.add("js-header-search-top"),l.scrollIntoView({behavior:"smooth"})},$=async e=>{e.preventDefault();let{target:t}=e,s=t.elements.searchQuery.value;if(n.reset(),""!==s)try{(0,c.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:s,limit:m,offset:0});if(0===e.results.length){(0,c.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),o.innerHTML='<div class="nothing-seach"></div>',g();return}(0,c.hideLoader)(),p(),u(e.results),g()}catch(e){location.replace("./error.html"),(0,c.hideLoader)()}};n.addEventListener("submit",$);const b=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?b.classList.add("js-header-bg"):b.classList.remove("js-header-bg")}),d.addEventListener("click",()=>{nothisngSeach.classList.remove("nothing-seach")});let w=null;// Функція для ініціалізації Swiper
function v(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,s=window.innerWidth>=1440,a="vertical";e?a="vertical":t?a="horizontal":s&&(a="vertical"),// Ініціалізація Swiper
w&&w.destroy(),w=new Swiper(".section-hero-swiper",{direction:a,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}v(),window.addEventListener("resize",v);const L=document.querySelector(".swiper-pagination"),y=document.querySelector(".js-btn-color");L.addEventListener("click",e=>{let{target:t}=e,s=t.getAttribute("aria-label"),a="";"Go to slide 1"===s?(a="#600404",y.style.background=a):"Go to slide 2"===s?(a="#34387f",y.style.background=a):"Go to slide 3"===s&&(a="#5b7f3c",y.style.background=a)});var i=a("iRoAB"),c=a("jKGAa");const j=document.querySelector(".js-random-img"),f=document.querySelector(".js-random-descr"),S=e=>{let t=e.map(({id:e,thumbnail:t,name:s})=>` 
      
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
    </li>`).join("");return t},x=e=>{j.insertAdjacentHTML("beforeend",S(e))},q=e=>{let t=e.map(({name:e,description:t,id:s})=>`
    <li class='js-random-characters-description' data-id="${s}">
      <h3 class='js-random-characters-title' data-id="${s}">${e}</h3>
      <p class='js-random-characters-text' data-id="${s}">${t}</p>
    </li>`).join("");return t},I=e=>{f.insertAdjacentHTML("beforeend",q(e))},T=async()=>{try{(0,c.showLoader)(),j.classList.add("randomImg-before-loading"),f.classList.add("randomImg-before-loading");let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let s=[],a=[...t];for(let e=0;e<5&&a.length>0;e++){let e=Math.floor(Math.random()*a.length),t=a[e];s.push(t),a.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
s.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{j.classList.remove("randomImg-before-loading")},2500),f.classList.remove("randomImg-before-loading"),x(s),I(s),(0,c.hideLoader)(),A=document.querySelectorAll(".js-slide"),M=document.querySelectorAll(".js-random-characters-description"),setInterval(E,3500)}catch(e){(0,c.hideLoader)(),location.replace("../error.html")}};T();let A=[],M=null,H=0,k=0;const E=()=>{for(let e=0;e<A.length;e+=1)A[e].classList.remove("js-show"),A[e].classList.add("js-slide");for(let e=0;e<M.length;e+=1)M[e].classList.remove("js-active"),M[e].classList.add("js-random-characters-description");k=(k+1)%A.length,H=(H+1)%M.length,A[k].classList.add("js-show"),A[k].classList.remove("js-slide"),M[H].classList.add("js-active"),M[H].classList.remove("js-random-characters-description")};var i=a("iRoAB");const B=document.querySelector(".js-last-comics-list"),R=e=>{let t=e.map(({id:e,thumbnail:t,title:s,creators:a})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},W=e=>{B.insertAdjacentHTML("beforeend",R(e))},P=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),W(e.results)}catch(e){location.replace("./error.html")}};P(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});var i=a("iRoAB"),c=a("jKGAa");const C=document.querySelector(".js-modal-section-characters"),D=document.querySelector(".js-modal-close-btn"),G=document.querySelector(".js-render-modal-characters"),V=document.querySelector(".js-render-modal-comics"),U=document.querySelector(".js-click-delegate");D.addEventListener("click",()=>{G.innerHTML="",V.innerHTML="",C.classList.add("display-none")});/* /////////////////////////////////////////////////////////// */const K=async e=>{let t=e.target.dataset.id;(0,c.showLoader)();try{let e=await (0,i.api).getCharactersById({characterId:t});0===response.total&&(C.classList.remove("display-none"),G.innerHTML='<div class="nothing-seach"></div>');let s=e[0].series.items.map(e=>e.resourceURI.split("/").pop()),a=e[0].comics.items.map(e=>e.resourceURI.split("/").pop());console.log("seriesIds =>",s),console.log("comicsIds =>",a);for(let t=0;t<3;t+=1){let r=a[t],c=s[t];e[0][`comic${t}`]=await (0,i.api).getComicById({comicId:r}),e[0][`series${t}`]=await (0,i.api).getSeriesById({seriesId:c})}console.log("dataById =>",e);let r=[O(e[0]),_(e[0])];G.innerHTML=r[0],V.innerHTML=r[1],C.classList.remove("display-none"),(0,c.hideLoader)()}catch(e){// renderModalCharacters.innerHTML = '<div class="nothing-seach"></div>';
(0,c.hideLoader)(),location.replace("./error.html")}};U.addEventListener("click",K);const O=e=>{let{thumbnail:t,series0:s,series1:a,series2:i,name:r}=e,c=`
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
         
        `;return c},_=e=>{let{id:t,thumbnail:s,name:a,description:i,modified:r,comics:c,comic0:l,comic1:o,comic2:n}=e;0===l[0].creators.available&&l[0].creators.items.push({name:""}),0===o[0].creators.available&&o[0].creators.items.push({name:""}),0===n[0].creators.available&&n[0].creators.items.push({name:""});let d=new Date(r).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),m=`
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
            src="${l[0].thumbnail.path}.${l[0].thumbnail.extension}"
            alt="${l[0].name}"
            data-id="${l[0].id}"
          />
          <h3 class="comics-title">${l[0].title}</h3>
          <p class="comics-creator-name">${l[0].creators.items[0].name}</p>
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
     `;return m};//# sourceMappingURL=index.e54d2f35.js.map

//# sourceMappingURL=index.e54d2f35.js.map
