!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequirece98;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirece98=s);var i=s("7lKJl"),r=s("2xl03"),c=s("81V9Z"),i=s("7lKJl"),c=s("81V9Z"),i=s("7lKJl"),c=s("81V9Z");let l=document.querySelector(".js-modal-section-characters"),o=document.querySelector(".modal-container-characters");document.querySelector(".js-click-delegate-comics");let d=document.querySelector(".js-markup-modal-comics"),n=document.querySelector(".js-markup-modal-characters"),m=document.querySelector(".js-click-rerender-Characters");m.addEventListener("click",e=>{let t=e.target,a=t.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
t.matches(".character-img, .character-name")&&(x({target:t},a),console.log("rerenderCharacters"))});let h=async e=>{let t=e.target.dataset.id;(0,c.showLoader)();try{let e=await (0,i.api).getComicById({comicId:t}),a=e[0].creators.items.map(e=>e.resourceURI.split("/").pop()),s=e[0].characters.items.map(e=>e.resourceURI.split("/").pop());e[0].authors=e[0].creators.items.map(({name:e,role:t})=>({name:e,role:t}));let r=a[0],m=await (0,i.api).getCreatorsById({creatorId:r});e[0].authors[0].pic=`${m[0].thumbnail.path}.${m[0].thumbnail.extension}`,console.log("creatorId =>",a[0]);for(let t=0;t<s.length;t+=1){let a=s[t],r=await (0,i.api).getCharactersById({characterId:a});e[0].characters.items[t].pic=`${r[0].thumbnail.path}.${r[0].thumbnail.extension}`,e[0].characters.items[t].id=a}l.classList.remove("display-is-hidden"),console.log("comicsDataById =>",e),n.innerHTML="";let h=$(e[0]);d.innerHTML=h,o.style.visibility="visible",(0,c.hideLoader)()}catch(e){(0,c.hideLoader)(),setTimeout(()=>{alert(e.message)},1e3)}},u=e=>e.map(e=>`<li>
            <img class="photo-small-image" src="${e.path}.${e.extension}" alt="" />
          </li>`).join(""),p=e=>e.slice(0,1).map(e=>`
      <img class="author-img" src="${e.pic}" alt="${e.name}">
          <div class="author-description">
            <p class="author-role">${e.role}</p>
            <h3 class="author-name">${e.name}</h3>
             </div>
          `).join(""),g=e=>e.map(e=>`<li class="characters-item" data-id="${e.id}">
            <img class="character-img" src="${e.pic}" alt="" data-id="${e.id}"/>
            <h3 class="character-name" data-id="${e.id}">${e.name}</h3>
          </li>`).join(""),$=({description:e,thumbnail:t,prices:a,title:s,format:i,modified:r,authors:c,characters:l,images:o,dates:d,pageCount:n})=>{let m=c.filter(e=>"writer"===e.role),h=m.length>0?m[0].name:"",$=+Date.parse(r),b=new Date($),v="Invalid Date"!==b.toString()?b.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"",w=new Date(d[0].date).getFullYear();return`

  <div class=" box-hero-images-modal">

     <img src="${t.path}.${t.extension}" class="hero-photo-comic" alt="" />

        <ul class="list-hero-photo-small">
          ${u(o)}
        </ul>
   </div>
  <div class="container-description-comics-modal">

 <div class="box-description-comics">
        <div class="info-container">
          <h1 class="title-name-hero-comics">${s}</h1>

            <p class="writer-separation"> <span class="writerName-author">
            ${h}</span>|<span class="writerName-date">
            ${v}</span>
            </p>

          </div>
        </div>
        <p class="text-description-info-comics">${e||""}</p>
        <ul class="list-info-comics">
          <li class="item-info-comics">
            <P class="text-product-details">FORMAT</P>
            <P class="text-format-render">${i}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">YEAR RELEASED</P>
            <P class="text-format-render">${w}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">PAGES</P>
            <P class="text-format-render">${n}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">PRICE</P>
            <P class="text-format-render">$${a[0].price}</P>
          </li>
        </ul>
        <h2 class="title-creators">Creator</h2>
        <div class="creators-box">
          ${p(c)}
        </div>
        <h2 class="title-characters">Characters</h2>
        <ul class="characters-list ">
          ${g(l.items)}
        </ul>
      </div>
  </div>
      
  `},b=document.querySelector(".js-modal-section-characters"),v=document.querySelector(".js-modal-close-btn"),w=document.querySelector(".js-markup-modal-characters"),y=document.querySelector(".js-markup-modal-comics"),f=document.querySelector(".modal-container-characters"),L=document.querySelector(".js-click-delegate-characters"),j=document.querySelector(".js-click-delegate-comics");v.addEventListener("click",()=>{w.innerHTML="",f.style.visibility="hidden",b.classList.add("display-is-hidden")}),j.addEventListener("click",e=>{let t=e.target,a=t.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
t.matches(".modal-comics-img, .comics-title")&&(h({target:t},a),console.log("rerenderCharacters"))});let x=async e=>{let t=e.target.dataset.id;(0,c.showLoader)();try{let e=await (0,i.api).getCharactersById({characterId:t}),a=e[0].series.items.map(e=>e.resourceURI.split("/").pop()),s=e[0].comics.items.map(e=>e.resourceURI.split("/").pop());for(let t=0;t<3;t+=1){let r=s[t],c=a[t];e[0][`comic${t}`]=await (0,i.api).getComicById({comicId:r}),e[0][`series${t}`]=await (0,i.api).getSeriesById({seriesId:c})}y.innerHTML="";let r=`
  ${S(e[0])}
  ${q(e[0])}
`;f.style.visibility="visible",w.innerHTML=r,b.classList.remove("display-is-hidden"),(0,c.hideLoader)()}catch(e){(0,c.hideLoader)(),alert(" onModalOpenCharactersClick ==>",e.message),console.log(" onModalOpenCharactersClick ==>",e.message)}};L.addEventListener("click",x);let S=e=>{let{thumbnail:t,series0:a,series1:s,series2:i,name:r}=e,c=`
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
              alt="${r}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${s[0].thumbnail.path}.${s[0].thumbnail.extension}" 
              alt="${r}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${i[0].thumbnail.path}.${i[0].thumbnail.extension}" 
              alt="${r}"
              width="80"
              height="80"
            />
          </li>
            </ul>
          </div>
        </div> 
        `;return c},q=e=>{let{id:t,thumbnail:a,name:s,description:i,modified:r,comics:c,comic0:l,comic1:o,comic2:d}=e;0===l[0].creators.available&&l[0].creators.items.push({name:""}),0===o[0].creators.available&&o[0].creators.items.push({name:""}),0===d[0].creators.available&&d[0].creators.items.push({name:""});let n=new Date(r).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),m=`
  <div class="wraper-comics">
     <div class="comics-title-date">
        <h1 class="comics-name-title">${s}</h1>
        <p class="comics-date">${n}</p>
      </div>
      <p class="comics-description">${i}</p>
      <h2 class="comics-list-title">List of comics</h2>
      <ul class="comics-list ">
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${l[0].thumbnail.path}.${l[0].thumbnail.extension}"
            alt="${l[0].name}"
            data-id="${l[0].id}"
          />
          <h3 class="comics-title"  data-id="${l[0].id}">${l[0].title}</h3>
          <p class="comics-creator-name"  data-id="${l[0].id}">${l[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${o[0].thumbnail.path}.${o[0].thumbnail.extension}"
            alt="${o[0].name}"
            data-id="${o[0].id}"
          />
          <h3 class="comics-title" data-id="${o[0].id}">${o[0].title}</h3>
          <p class="comics-creator-name" data-id="${o[0].id}">${o[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${d[0].thumbnail.path}.${d[0].thumbnail.extension}"
            alt="${d[0].name}"
            data-id="${d[0].id}"
          />
          <h3 class="comics-title"  data-id="${d[0].id}">${d[0].title}</h3>
          <p class="comics-creator-name"  data-id="${d[0].id}">${d[0].creators.items[0].name}"</p>
        </li>
      </ul>
  </div>
     `;return m},I=document.querySelector(".js-scrol-header-search"),P=document.querySelector(".js-header-search"),k=document.querySelector(".js-header-form"),C=document.querySelector(".js-modal-search-characters");C.addEventListener("click",e=>{let t=e.target;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
if(t.matches(".header-search-img, .header-search-title")){let e=t.dataset.id;x({target:t},e)}});let E=null;E=(0,r.getItemsPerPage)();let M=e=>e.map(e=>`
      <li class="header-search-item">
        <img class="header-search-img"
       data-id="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-id="${e.id}">${e.name}</h3>
          </div>
      </li>
    `).join(""),T=()=>{P.innerHTML=""},D=e=>{P.insertAdjacentHTML("beforeend",M(e))},A=()=>{I.classList.add("js-header-search-top"),I.scrollIntoView({behavior:"smooth"})},H=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(k.reset(),""!==a)try{(0,c.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:a,limit:E,offset:0});if(0===e.results.length){(0,c.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),P.innerHTML='<div class="nothing-seach"></div>',A();return}(0,c.hideLoader)(),T(),D(e.results),A()}catch(e){(0,c.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};k.addEventListener("submit",H);let R=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?R.classList.add("js-header-bg"):R.classList.remove("js-header-bg")});let V=null;// Функція для ініціалізації Swiper
function B(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,a=window.innerWidth>=1440,s="vertical";e?s="vertical":t?s="horizontal":a&&(s="vertical"),// Ініціалізація Swiper
V&&V.destroy(),V=new Swiper(".section-hero-swiper",{direction:s,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}B(),window.addEventListener("resize",B);let U=document.querySelector(".swiper-pagination"),W=document.querySelector(".js-btn-color");U.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),s="";"Go to slide 1"===a?(s="#600404",W.style.background=s):"Go to slide 2"===a?(s="#34387f",W.style.background=s):"Go to slide 3"===a&&(s="#5b7f3c",W.style.background=s)});var i=s("7lKJl"),c=s("81V9Z");let O=document.querySelector(".js-random-img"),J=document.querySelector(".js-random-descr"),K=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>` 
      
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
    </li>`).join("");return t},G=e=>{O.insertAdjacentHTML("beforeend",K(e))},N=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},Z=e=>{J.insertAdjacentHTML("beforeend",N(e))},F=async()=>{try{(0,c.showLoader)(),O.classList.add("randomImg-before-loading"),J.classList.add("randomImg-before-loading");let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],s=[...t];for(let e=0;e<5&&s.length>0;e++){let e=Math.floor(Math.random()*s.length),t=s[e];a.push(t),s.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{O.classList.remove("randomImg-before-loading")},2500),J.classList.remove("randomImg-before-loading"),G(a),Z(a),(0,c.hideLoader)(),Y=document.querySelectorAll(".js-slide"),_=document.querySelectorAll(".js-random-characters-description"),setInterval(X,3500)}catch(e){(0,c.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};F();let Y=[],_=null,z=0,Q=0,X=()=>{for(let e=0;e<Y.length;e+=1)Y[e].classList.remove("js-show"),Y[e].classList.add("js-slide");for(let e=0;e<_.length;e+=1)_[e].classList.remove("js-active"),_[e].classList.add("js-random-characters-description");Q=(Q+1)%Y.length,z=(z+1)%_.length,Y[Q].classList.add("js-show"),Y[Q].classList.remove("js-slide"),_[z].classList.add("js-active"),_[z].classList.remove("js-random-characters-description")};var i=s("7lKJl");let ee=document.querySelector(".js-last-comics-list"),et=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:s})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
    </li>`).join("");return t},ea=document.querySelector(".js-click-delegate-last-comics");ea.addEventListener("click",e=>{let t=e.target;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
if(t.matches(".last-comics-img")){let e=t.dataset.id;h({target:t},e)}});let es=e=>{ee.insertAdjacentHTML("beforeend",et(e))},ei=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),es(e.results)}catch(e){//location.replace('./error.html');
console.log(e.message)}};ei(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}})}();//# sourceMappingURL=index.ff430c5c.js.map

//# sourceMappingURL=index.ff430c5c.js.map
