!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequirece98;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirece98=a);var s=a("7lKJl"),o=a("81V9Z"),l=a("2xl03");let i=document.querySelector(".js-characters-sort-container"),c=document.querySelector(".js-characters-sort-form"),n=document.querySelector(".js-chararcters-comics-input");document.querySelector(".js-chararcters-name-input");let d=[],u=null,h=null,m=null;// Масив для зберігання ідентифікаторів коміксів.
m=(0,l.getItemsPerPage)();let f=e=>e.map(e=>`<li class="characters-sort-item">
      <a class="characters-sort-link">
        <img class="characters-sort-img"
        data-set="${e.id}"
        src="${e.thumbnail.path}.${e.thumbnail.extension}"
        alt="${e.name}"
      />
          <div class="characters-sort-context">
          <h3  class="characters-sort-title" data-set="${e.id}">${e.name}</h3>
          </div>
          </a>
      </li>
    `).join(""),p=e=>{i.insertAdjacentHTML("beforeend",f(e))},y=async()=>{try{o.showLoader;let e=await (0,s.api).getCharacters({limit:m,offset:0});(0,o.hideLoader)(),p(e.results)}catch(e){console.log(e)}};y();/* //////////////////////////////////////////////////// */let g=async e=>{(0,o.showLoader)(),e.preventDefault();let{target:t}=e;u=t.elements.searchComics.value;try{let e=await (0,s.api).getComics({title:u,offset:0,limit:100});// Перевіряємо, чи були знайдені комікси за заданим запитом.
if(0===e.total){(0,o.hideLoader)(),n.value="";return}// Отримуємо перші 10 коміксів з результатів пошуку.
let t=e.results.slice(0,10);// Додаємо ідентифікатори коміксів до масиву idComics, якщо вони містять персонажів.
t.map(e=>{e.characters.available&&d.push(e.id)}),// Об'єднуємо ідентифікатори коміксів в рядок через кому.
h=d.join(", ");// Виконуємо запит до API для отримання персонажів, які з'являються в обраних коміксах.
try{await (0,s.api).getCharacters({offset:offset,nameStartsWith:queryName,comics:h,orderBy:queryOrder,modifiedSince:dateQuery}),console.log("queryName =>",queryName)}catch(e){}(0,o.hideLoader)()}catch(e){(0,o.hideLoader)(),console.log(e)}};c.addEventListener("submit",g)}();//# sourceMappingURL=characters.294e8507.js.map

//# sourceMappingURL=characters.294e8507.js.map
