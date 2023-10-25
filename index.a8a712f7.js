!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},r=t.parcelRequirece98;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequirece98=r);var s=r("7lKJl"),n=r("2xl03"),l=r("81V9Z"),o=r("hC9mB"),c={},d=0/0,h=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,f=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,b=g||v||Function("return this")(),j=Object.prototype.toString,w=Math.max,y=Math.min,L=function(){return b.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function x(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==j.call(t))return d;if($(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=$(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var i=m.test(e);return i||p.test(e)?f(e.slice(2),i?2:8):u.test(e)?d:+e}c=/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,a){var i,r,s,n,l,o,c=0,d=!1,h=!1,u=!0;if("function"!=typeof e)throw TypeError("Expected a function");function m(t){var a=i,s=r;return i=r=void 0,c=t,n=e.apply(s,a)}function p(e){var a=e-o,i=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===o||a>=t||a<0||h&&i>=s}function f(){var e,a,i,r=L();if(p(r))return g(r);// Restart the timer.
l=setTimeout(f,(e=r-o,a=r-c,i=t-e,h?y(i,s-a):i))}function g(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(l=void 0,u&&i)?m(e):(i=r=void 0,n))}function v(){var e,a=L(),s=p(a);if(i=arguments,r=this,o=a,s){if(void 0===l)return(// Reset any `maxWait` timer.
c=e=o,// Start the timer for the trailing edge.
l=setTimeout(f,t),d?m(e):n);if(h)return(// Handle invocations in a tight loop.
l=setTimeout(f,t),m(o))}return void 0===l&&(l=setTimeout(f,t)),n}return t=x(t)||0,$(a)&&(d=!!a.leading,s=(h="maxWait"in a)?w(x(a.maxWait)||0,t):s,u="trailing"in a?!!a.trailing:u),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=o=r=l=void 0},v.flush=function(){return void 0===l?n:g(L())},v};var S=r("h6c0i");let T=document.querySelector(".js-scrol-header-search"),M=document.querySelector(".js-header-search"),q=document.querySelector(".js-header-form"),k=document.querySelector(".js-modal-search-characters");k.addEventListener("click",e=>{let t=e.target;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
if(t.matches(".header-search-img, .header-search-title")){let e=t.dataset.id;(0,o.onModalOpenCharactersClick)({target:t},e)}});let C=null;C=(0,n.getItemsPerPage)();let E=e=>e.map(e=>`
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
    `).join(""),O=()=>{M.innerHTML=""},H=e=>{M.insertAdjacentHTML("beforeend",E(e))},W=()=>{T.classList.add("js-header-search-top"),T.scrollIntoView({behavior:"smooth"})},V=async e=>{e.preventDefault();let{target:t}=e,a=t.elements.searchQuery.value;if(q.reset(),""!==a)try{(0,l.showLoader)();let e=await (0,s.api).getCharacters({nameStartsWith:a,limit:C,offset:0});if(0===e.results.length){(0,l.hideLoader)(),nothisngSeach=document.querySelector(".nothing-seach"),M.innerHTML='<div class="nothing-seach"></div>',W();return}(0,l.hideLoader)(),O(),H(e.results),W()}catch(e){(0,l.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};q.addEventListener("submit",V);let I=document.querySelector(".header");window.addEventListener("scroll",()=>{0==!scrollY?I.classList.add("js-header-bg"):I.classList.remove("js-header-bg")});/* removeElement.addEventListener('click', () => {
  nothisngSeach.classList.remove('nothing-seach');
});
 */let A=document.querySelector(".js-header-input-autoComplete"),P=document.querySelector(".js-header-autocomplete-list"),B=e=>e.map(e=>`
        <li class="header-autocomplete-item">${e.name}</li>
      `).join(""),D=e=>{P.innerHTML=B(e)},K=async e=>{let t=e.target.value.trim();if(""===t){P.innerHTML="";return}try{let e=await (0,s.api).getCharacters({nameStartsWith:t,limit:20,offset:0});P.innerHTML="",D(e.results)}catch(e){(0,S.Notify).failure("No information available")}};A.addEventListener("input",((e=c)&&e.__esModule?e.default:e)(K,1e3)),P.addEventListener("click",e=>{let t=e.target;t.classList.contains("header-autocomplete-item")&&(A.value=t.textContent,A.style.width="max-content",P.innerHTML="",A.innerHTML="")});let _=null;// Функція для ініціалізації Swiper
function N(){let e=window.innerWidth<768,t=window.innerWidth>=768&&window.innerWidth<=1024,a=window.innerWidth>=1440,i="vertical";e?i="vertical":t?i="horizontal":a&&(i="vertical"),// Ініціалізація Swiper
_&&_.destroy(),_=new Swiper(".section-hero-swiper",{direction:i,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0})}N(),window.addEventListener("resize",N);let R=document.querySelector(".swiper-pagination"),G=document.querySelector(".js-btn-color");R.addEventListener("click",e=>{let{target:t}=e,a=t.getAttribute("aria-label"),i="";"Go to slide 1"===a?(i="#600404",G.style.background=i):"Go to slide 2"===a?(i="#34387f",G.style.background=i):"Go to slide 3"===a&&(i="#5b7f3c",G.style.background=i)});var s=r("7lKJl"),l=r("81V9Z"),o=r("hC9mB");let J=document.querySelector(".js-random-img"),z=document.querySelector(".js-random-descr"),F=document.querySelector(".js-click-random-characters"),U=e=>{let t=e.map(({id:e,thumbnail:t,name:a})=>` 
      
      <li class= "js-slide" data-id="${e}">
    
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${t.path}.${t.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${t.path}.${t.extension}"/>
      <img class="js-random-characters-img" data-id="${e}"
        src='${t.path}.${t.extension}'
        alt='${a}'
      /></picture>
    </li>`).join("");return t};F.addEventListener("click",e=>{let t=e.target,a=t.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
t.matches(".js-random-characters-img, .js-random-characters-title")&&(0,o.onModalOpenCharactersClick)({target:t},a)});let Z=e=>{J.insertAdjacentHTML("beforeend",U(e))},Q=e=>{let t=e.map(({name:e,description:t,id:a})=>`
    <li class='js-random-characters-description' data-id="${a}">
      <h3 class='js-random-characters-title' data-id="${a}">${e}</h3>
      <p class='js-random-characters-text' data-id="${a}">${t}</p>
    </li>`).join("");return t},Y=e=>{z.insertAdjacentHTML("beforeend",Q(e))},X=async()=>{try{(0,l.showLoader)(),J.classList.add("randomImg-before-loading"),z.classList.add("randomImg-before-loading");let e=await (0,s.api).getCharacters("/characters"),{results:t}=e;t=t.filter(({name:e,thumbnail:{path:t}})=>e&&!t.includes("not_available"));let a=[],i=[...t];for(let e=0;e<5&&i.length>0;e++){let e=Math.floor(Math.random()*i.length),t=i[e];a.push(t),i.splice(e,1)}//  логіка для перевірки HTTPS і зміни URL
a.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),setTimeout(()=>{J.classList.remove("randomImg-before-loading")},2500),z.classList.remove("randomImg-before-loading"),Z(a),Y(a),(0,l.hideLoader)(),ee=document.querySelectorAll(".js-slide"),et=document.querySelectorAll(".js-random-characters-description"),setInterval(er,3500)}catch(e){(0,l.hideLoader)(),//location.replace('./error.html');
console.log(e.message)}};X();let ee=[],et=null,ea=0,ei=0,er=()=>{for(let e=0;e<ee.length;e+=1)ee[e].classList.remove("js-show"),ee[e].classList.add("js-slide");for(let e=0;e<et.length;e+=1)et[e].classList.remove("js-active"),et[e].classList.add("js-random-characters-description");ei=(ei+1)%ee.length,ea=(ea+1)%et.length,ee[ei].classList.add("js-show"),ee[ei].classList.remove("js-slide"),et[ea].classList.add("js-active"),et[ea].classList.remove("js-random-characters-description")};var s=r("7lKJl"),es=r("bfVKR");let en=document.querySelector(".js-last-comics-list"),el=e=>{let t=e.map(({id:e,thumbnail:t,title:a,creators:i})=>`  <li class= "last-comics-item swiper-slide" data-id="${e}" width="auto">
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
      <p class= "last-comics-creator" data-id="${e}">${i.items[0].name}</p>
    </li>`).join("");return t},eo=document.querySelector(".js-click-delegate-last-comics");eo.addEventListener("click",e=>{let t=e.target;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
if(t.matches(".last-comics-img")){let e=t.dataset.id;(0,es.onModalComicsClick)({target:t},e)}});let ec=e=>{en.insertAdjacentHTML("beforeend",el(e))},ed=async()=>{try{let e=await (0,s.api).getComics({limit:3,dateDescriptor:"lastWeek"});// Перевірка HTTPS для зображень у відповіді
e.results.forEach(e=>{e.thumbnail.path.startsWith("https://")||(e.thumbnail.path=e.thumbnail.path.replace("http://","https://"))}),ec(e.results)}catch(e){//location.replace('./error.html');
console.log(e.message)}};ed(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}}),r("hC9mB"),r("bfVKR")}();//# sourceMappingURL=index.a8a712f7.js.map

//# sourceMappingURL=index.a8a712f7.js.map
