var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequirece98;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},e.parcelRequirece98=s);var i=s("iRoAB"),c=s("cH1ne"),r=s("jKGAa"),i=s("iRoAB"),r=s("jKGAa"),i=s("iRoAB"),r=s("jKGAa");const l=document.querySelector(".js-modal-section-characters"),o=document.querySelector(".modal-container-characters");document.querySelector(".js-click-delegate-comics");const n=document.querySelector(".js-markup-modal-comics"),d=document.querySelector(".js-markup-modal-characters"),m=document.querySelector(".js-click-rerender-Characters");m.addEventListener("click",e=>{let t=e.target,a=t.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
t.matches(".character-img, .character-name")&&(x({target:t},a),console.log("rerenderCharacters"))});const h=async e=>{let t=e.target.dataset.id;(0,r.showLoader)();try{let e=await (0,i.api).getComicById({comicId:t}),a=e[0].creators.items.map(e=>e.resourceURI.split("/").pop()),s=e[0].characters.items.map(e=>e.resourceURI.split("/").pop());e[0].authors=e[0].creators.items.map(({name:e,role:t})=>({name:e,role:t}));let c=a[0],m=await (0,i.api).getCreatorsById({creatorId:c});e[0].authors[0].pic=`${m[0].thumbnail.path}.${m[0].thumbnail.extension}`,console.log("creatorId =>",a[0]);for(let t=0;t<s.length;t+=1){let a=s[t],c=await (0,i.api).getCharactersById({characterId:a});e[0].characters.items[t].pic=`${c[0].thumbnail.path}.${c[0].thumbnail.extension}`,e[0].characters.items[t].id=a}l.classList.remove("display-is-hidden"),console.log("comicsDataById =>",e),d.innerHTML="";let h=$(e[0]);n.innerHTML=h,o.style.visibility="visible",(0,r.hideLoader)()}catch(e){(0,r.hideLoader)(),setTimeout(()=>{alert(e.message)},1e3)}},p=e=>e.map(e=>`<li>
            <img class="photo-small-image" src="${e.path}.${e.extension}" alt="" />
          </li>`).join(""),u=e=>e.slice(0,1).map(e=>`
      <img class="author-img" src="${e.pic}" alt="${e.name}">
          <div class="author-description">
            <p class="author-role">${e.role}</p>
            <h3 class="author-name">${e.name}</h3>
             </div>
          `).join(""),g=e=>e.map(e=>`<li class="characters-item" data-id="${e.id}">
            <img class="character-img" src="${e.pic}" alt="" data-id="${e.id}"/>
            <h3 class="character-name" data-id="${e.id}">${e.name}</h3>
          </li>`).join(""),$=({description:e,thumbnail:t,prices:a,title:s,format:i,modified:c,authors:r,characters:l,images:o,dates:n,pageCount:d})=>{let m=r.filter(e=>"writer"===e.role),h=m.length>0?m[0].name:"",$=+Date.parse(c),b=new Date($),v="Invalid Date"!==b.toString()?b.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"",w=new Date(n[0].date).getFullYear();return`

  <div class=" box-hero-images-modal">

     <img src="${t.path}.${t.extension}" class="hero-photo-comic" alt="" />

        <ul class="list-hero-photo-small">
          ${p(o)}
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
            <P class="text-format-render">${d}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">PRICE</P>
            <P class="text-format-render">$${a[0].price}</P>
          </li>
        </ul>
        <h2 class="title-creators">Creator</h2>
        <div class="creators-box">
          ${u(r)}
        </div>
        <h2 class="title-characters">Characters</h2>
        <ul class="characters-list ">
          ${g(l.items)}
        </ul>
      </div>
  </div>
      
  `},b=document.querySelector(".js-modal-section-characters"),v=document.querySelector(".js-modal-close-btn"),w=document.querySelector(".js-markup-modal-characters"),y=document.querySelector(".js-markup-modal-comics"),f=document.querySelector(".modal-container-characters"),L=document.querySelector(".js-click-delegate-characters"),j=document.querySelector(".js-click-delegate-comics");v.addEventListener("click",()=>{w.innerHTML="",f.style.visibility="hidden",b.classList.add("display-is-hidden")}),j.addEventListener("click",e=>{let t=e.target,a=t.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
t.matches(".modal-comics-img, .comics-title")&&(h({target:t},a),console.log("rerenderCharacters"))});const x=async e=>{let t=e.target.dataset.id;(0,r.showLoader)();try{let e=await (0,i.api).getCharactersById({characterId:t}),a=e[0].series.items.map(e=>e.resourceURI.split("/").pop()),s=e[0].comics.items.map(e=>e.resourceURI.split("/").pop());for(let t=0;t<3;t+=1){let c=s[t],r=a[t];e[0][`comic${t}`]=await (0,i.api).getComicById({comicId:c}),e[0][`series${t}`]=await (0,i.api).getSeriesById({seriesId:r})}y.innerHTML="";let c=`
  ${S(e[0])}
  ${q(e[0])}
`;f.style.visibility="visible",w.innerHTML=c,b.classList.remove("display-is-hidden"),(0,r.hideLoader)()}catch(e){(0,r.hideLoader)(),alert(" onModalOpenCharactersClick ==>",e.message),console.log(" onModalOpenCharactersClick ==>",e.message)}};L.addEventListener("click",x);const S=e=>{let{thumbnail:t,series0:a,series1:s,series2:i,name:c}=e,r=`
    <div class="wraper-characters">
          <img
            class="modal-characters-primary-img"
            src="${t.path}.${t.extension}"
            alt="${c}"
          />
          <div class="modal-slide">
            <ul class="modal-characters-list">
               <li>
            <img
              class="modal-characters-small-img"
              src="${a[0].thumbnail.path}.${a[0].thumbnail.extension}" 
              alt="${c}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${s[0].thumbnail.path}.${s[0].thumbnail.extension}" 
              alt="${c}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${i[0].thumbnail.path}.${i[0].thumbnail.extension}" 
              alt="${c}"
              width="80"
              height="80"
            />
          </li>
            </ul>
          </div>
        </div> 
        `;return r},q=e=>{let{id:t,thumbnail:a,name:s,description:i,modified:c,comics:r,comic0:l,comic1:o,comic2:n}=e;0===l[0].creators.available&&l[0].creators.items.push({name:""}),0===o[0].creators.available&&o[0].creators.items.push({name:""}),0===n[0].creators.available&&n[0].creators.items.push({name:""});let d=new Date(c).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),m=`
  <div class="wraper-comics">
     <div class="comics-title-date">
        <h1 class="comics-name-title">${s}</h1>
        <p class="comics-date">${d}</p>
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
            src="${n[0].thumbnail.path}.${n[0].thumbnail.extension}"
            alt="${n[0].name}"
            data-id="${n[0].id}"
          />
          <h3 class="comics-title"  data-id="${n[0].id}">${n[0].title}</h3>
          <p class="comics-creator-name"  data-id="${n[0].id}">${n[0].creators.items[0].name}"</p>
        </li>
      </ul>
  </div>
     `;return m},I=document.querySelector(".js-scrol-header-search"),P=document.querySelector(".js-header-search"),k=document.querySelector(".js-header-form"),A=document.querySelector(".js-modal-search-characters");A.addEventListener("click",e=>{let t=e.target;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
if(t.matches(".header-search-img, .header-search-title")){let e=t.dataset.id;x({target:t},e)}});let C=null;C=(0,c.getItemsPerPage)();const E=e=>e.map(e=>`
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
    `).join(""),M=()=>{P.innerHTML=""},T=e=>{P.insertAdjacentHTML("beforeend",E(e))},R=()=>{I.classList.add("js-header-search-top"),I.scrollIntoView({behavior:"smooth"})},B=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(k.reset(),""!==a)try{(0,r.showLoader)();let e=await (0,i.api).getCharacters({nameStartsWith:a,limit:C,offset:0});if(0===e.results.length){(0,r.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),P.innerHTML='<div class="nothing-seach"></div>',R();return}(0,r.hideLoader)(),M(),T(e.results),R()}catch(e){(0,r.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};k.addEventListener("submit",B);const D=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?D.classList.add("js-header-bg"):D.classList.remove("js-header-bg")});let H=null;// Функція для ініціалізації Swiper
function G(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,a=window.innerWidth>=1440,s="vertical";e?s="vertical":t?s="horizontal":a&&(s="vertical"),// Ініціалізація Swiper
H&&H.destroy(),H=new Swiper(".section-hero-swiper",{direction:s,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}G(),window.addEventListener("resize",G);const U=document.querySelector(".swiper-pagination"),W=document.querySelector(".js-btn-color");U.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),s="";"Go to slide 1"===a?(s="#600404",W.style.background=s):"Go to slide 2"===a?(s="#34387f",W.style.background=s):"Go to slide 3"===a&&(s="#5b7f3c",W.style.background=s)});var i=s("iRoAB"),r=s("jKGAa");const O=document.querySelector(".js-random-img"),V=document.querySelector(".js-random-descr"),K=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>` 
      
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
    </li>`).join("");return t},N=e=>{O.insertAdjacentHTML("beforeend",K(e))},F=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},Y=e=>{V.insertAdjacentHTML("beforeend",F(e))},_=async()=>{try{(0,r.showLoader)(),O.classList.add("randomImg-before-loading"),V.classList.add("randomImg-before-loading");let e=await (0,i.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],s=[...t];for(let e=0;e<5&&s.length>0;e++){let e=Math.floor(Math.random()*s.length),t=s[e];a.push(t),s.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{O.classList.remove("randomImg-before-loading")},2500),V.classList.remove("randomImg-before-loading"),N(a),Y(a),(0,r.hideLoader)(),z=document.querySelectorAll(".js-slide"),Q=document.querySelectorAll(".js-random-characters-description"),setInterval(Z,3500)}catch(e){(0,r.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};_();let z=[],Q=null,J=0,X=0;const Z=()=>{for(let e=0;e<z.length;e+=1)z[e].classList.remove("js-show"),z[e].classList.add("js-slide");for(let e=0;e<Q.length;e+=1)Q[e].classList.remove("js-active"),Q[e].classList.add("js-random-characters-description");X=(X+1)%z.length,J=(J+1)%Q.length,z[X].classList.add("js-show"),z[X].classList.remove("js-slide"),Q[J].classList.add("js-active"),Q[J].classList.remove("js-random-characters-description")};var i=s("iRoAB");const ee=document.querySelector(".js-last-comics-list"),et=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:s})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
if(t.matches(".last-comics-img")){let e=t.dataset.id;h({target:t},e)}});const es=e=>{ee.insertAdjacentHTML("beforeend",et(e))},ei=async()=>{try{let e=await (0,i.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),es(e.results)}catch(e){//location.replace('./error.html');
console.log(e.message)}};ei(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});//# sourceMappingURL=index.d3b41301.js.map

//# sourceMappingURL=index.d3b41301.js.map
