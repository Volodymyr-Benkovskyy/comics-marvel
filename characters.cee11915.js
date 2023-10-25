function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=e.parcelRequirece98;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},e.parcelRequirece98=i),i.register("iRoAB",function(e,r){t(e.exports,"api",function(){return l}),i("2shzp");var n=i("bRlFp"),o=i("goQGx");let a="efe513042744199e2ee71f94d9988717",s=(0,n.default).create({baseURL:"https://gateway.marvel.com/v1/public",params:{apikey:a,hash:(0,o.default)({timeStamp:1,PRIVATE_KEY:"5488535f3958164a14b37ef40df2b28b6e569641",PUBLIC_KEY:a}),ts:1}}),l={getCharacters:async({limit:t=60,offset:e=0,nameStartsWith:r="",comics:n="",orderBy:i="",modifiedSince:o=""})=>{try{let a=await s.get("/characters",{params:{...t&&{limit:t},...e&&{offset:e},...r&&{nameStartsWith:r},...n&&{comics:n},...i&&{orderBy:i},...o&&{modifiedSince:o}}}),l=a.data.data;return l}catch(t){return{error:t.message}}},getComics:async({limit:t=20,offset:e=0,startYear:r=0,format:n="",title:i="",titleStartsWith:o="",orderBy:a="",dateDescriptor:l=""})=>{try{let f=await s.get("/comics",{params:{...t&&{limit:t},...e&&{offset:e},...r&&{startYear:r},...o&&{titleStartsWith:o},...n&&{format:n},...i&&{title:i},...a&&{orderBy:a},...l&&{dateDescriptor:l}}}),u=f.data.data;return u}catch(t){return{error:t.message}}},getCharactersById:async({characterId:t})=>{try{let e=await s.get(`/characters/${t}`),r=e.data.data.results;return r}catch(t){return console.log(t),{error:t.message}}},getComicById:async({comicId:t})=>{try{let e=await s.get(`/comics/${t}`),r=e.data.data.results;return r}catch(t){return{error:t.message}}},getSeriesById:async({seriesId:t})=>{try{let e=await s.get(`/series/${t}`),r=e.data.data.results;return r}catch(t){return{error:t.message}}},getCreatorsById:async({creatorId:t})=>{try{let e=await s.get(`/creators/${t}`),r=e.data.data.results;return r}catch(t){return{error:t.message}}}}}),i.register("2shzp",function(e,r){t(e.exports,"default",function(){return i("bRlFp").default});var n=i("bRlFp");// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:o,AxiosError:a,CanceledError:s,isCancel:l,CancelToken:f,VERSION:u,all:c,Cancel:d,isAxiosError:p,spread:h,toFormData:m,AxiosHeaders:y,HttpStatusCode:g,formToJSON:b,getAdapter:x,mergeConfig:w}=n.default}),i.register("bRlFp",function(e,r){t(e.exports,"default",function(){return E});var n=i("2bBga"),o=i("djt5d"),a=i("6zSb1"),s=i("d0EKm"),l=i("hqlPG"),f=i("4bmvb"),u=i("83xK9"),c=i("2sjhC"),d=i("ksuZT"),p=i("50GW0"),h=i("aewVa"),m=i("121rJ"),y=i("av9gA"),g=i("gNhGc"),b=i("gbTL1"),x=i("enpjQ"),w=i("jd7iQ");// Create the default instance to be exported
let v=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new a.default(e),i=(0,o.default)(a.default.prototype.request,r);return(// Copy axios.prototype to instance
(0,n.default).extend(i,a.default.prototype,r,{allOwnKeys:!0}),// Copy context to instance
(0,n.default).extend(i,r,null,{allOwnKeys:!0}),// Factory for creating new instances
i.create=function(r){return t((0,s.default)(e,r))},i)}(l.default);// Expose Axios class to allow class inheritance
v.Axios=a.default,// Expose Cancel & CancelToken
v.CanceledError=u.default,v.CancelToken=c.default,v.isCancel=d.default,v.VERSION=p.VERSION,v.toFormData=h.default,// Expose AxiosError class
v.AxiosError=m.default,// alias for CanceledError for backward compatibility
v.Cancel=v.CanceledError,// Expose all/spread
v.all=function(t){return Promise.all(t)},v.spread=y.default,// Expose isAxiosError
v.isAxiosError=g.default,// Expose mergeConfig
v.mergeConfig=s.default,v.AxiosHeaders=b.default,v.formToJSON=t=>(0,f.default)((0,n.default).isHTMLForm(t)?new FormData(t):t),v.getAdapter=x.default.getAdapter,v.HttpStatusCode=w.default,v.default=v;var E=v}),i.register("2bBga",function(r,n){t(r.exports,"default",function(){return D});var o,a,s=i("djt5d");// utils is a library of generic helper functions non-specific to axios
let{toString:l}=Object.prototype,{getPrototypeOf:f}=Object,u=(o=Object.create(null),t=>{let e=l.call(t);return o[e]||(o[e]=e.slice(8,-1).toLowerCase())}),c=t=>(t=t.toLowerCase(),e=>u(e)===t),d=t=>e=>typeof e===t,{isArray:p}=Array,h=d("undefined"),m=c("ArrayBuffer"),y=d("string"),g=d("function"),b=d("number"),x=t=>null!==t&&"object"==typeof t,w=t=>{if("object"!==u(t))return!1;let e=f(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},v=c("Date"),E=c("File"),A=c("Blob"),B=c("FileList"),N=c("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function S(t,e,{allOwnKeys:r=!1}={}){let n,i;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),p(t))for(n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else{let i;// Iterate over object keys
let o=r?Object.getOwnPropertyNames(t):Object.keys(t),a=o.length;for(n=0;n<a;n++)i=o[n],e.call(null,t[i],i,t)}}}function O(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),i=n.length;for(;i-- >0;)if(e===(r=n[i]).toLowerCase())return r;return null}let T=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,I=t=>!h(t)&&t!==T,k=(a="undefined"!=typeof Uint8Array&&f(Uint8Array),t=>a&&t instanceof a),R=c("HTMLFormElement"),C=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),L=c("RegExp"),U=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};S(r,(r,i)=>{let o;!1!==(o=e(r,i,t))&&(n[i]=o||r)}),Object.defineProperties(t,n)},j="abcdefghijklmnopqrstuvwxyz",P="0123456789",_={DIGIT:P,ALPHA:j,ALPHA_DIGIT:j+j.toUpperCase()+P},$=c("AsyncFunction");var D={isArray:p,isArrayBuffer:m,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||g(t.append)&&("formdata"===(e=u(t))||// detect form-data instance
"object"===e&&g(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&m(t.buffer)},isString:y,isNumber:b,isBoolean:t=>!0===t||!1===t,isObject:x,isPlainObject:w,isUndefined:h,isDate:v,isFile:E,isBlob:A,isRegExp:L,isFunction:g,isStream:t=>x(t)&&g(t.pipe),isURLSearchParams:N,isTypedArray:k,isFileList:B,forEach:S,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:e}=I(this)&&this||{},r={},n=(n,i)=>{let o=e&&O(r,i)||i;w(r[o])&&w(n)?r[o]=t(r[o],n):w(n)?r[o]=t({},n):p(n)?r[o]=n.slice():r[o]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&S(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(S(e,(e,n)=>{r&&g(e)?t[n]=(0,s.default)(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let i,o,a;let s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(o=(i=Object.getOwnPropertyNames(t)).length;o-- >0;)a=i[o],(!n||n(a,t,e))&&!s[a]&&(e[a]=t[a],s[a]=!0);t=!1!==r&&f(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:u,kindOfTest:c,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(p(t))return t;let e=t.length;if(!b(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],i=n.call(t);for(;(r=i.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:R,hasOwnProperty:C,hasOwnProp:C,reduceDescriptors:U,freezeMethods:t=>{U(t,(e,r)=>{// skip restricted props in strict mode
if(g(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(g(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(p(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:O,global:T,isContextDefined:I,ALPHABET:_,generateString:(t=16,e=_.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&g(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(x(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let i=p(t)?[]:{};return S(t,(t,e)=>{let o=r(t,n+1);h(o)||(i[e]=o)}),e[n]=void 0,i}}return t};return r(t,0)},isAsyncFn:$,isThenable:t=>t&&(x(t)||g(t))&&g(t.then)&&g(t.catch)}}),i.register("djt5d",function(e,r){t(e.exports,"default",function(){return n});function n(t,e){return function(){return t.apply(e,arguments)}}}),i.register("6zSb1",function(e,r){t(e.exports,"default",function(){return h});var n=i("2bBga"),o=i("2RNjJ"),a=i("5Dm7L"),s=i("eQ5d8"),l=i("d0EKm"),f=i("1ZTQa"),u=i("6zj0X"),c=i("gbTL1");let d=u.default.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class p{constructor(t){this.defaults=t,this.interceptors={request:new a.default,response:new a.default}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,i;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=(0,l.default)(this.defaults,e);let{transitional:o,paramsSerializer:a,headers:f}=e;void 0!==o&&(0,u.default).assertOptions(o,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=a&&((0,n.default).isFunction(a)?e.paramsSerializer={serialize:a}:(0,u.default).assertOptions(a,{encode:d.function,serialize:d.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let p=f&&(0,n.default).merge(f.common,f[e.method]);f&&(0,n.default).forEach(["delete","get","head","post","put","patch","common"],t=>{delete f[t]}),e.headers=(0,c.default).concat(p,f);// filter out skipped interceptors
let h=[],m=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(m=m&&t.synchronous,h.unshift(t.fulfilled,t.rejected))});let y=[];this.interceptors.response.forEach(function(t){y.push(t.fulfilled,t.rejected)});let g=0;if(!m){let t=[(0,s.default).bind(this),void 0];for(t.unshift.apply(t,h),t.push.apply(t,y),i=t.length,r=Promise.resolve(e);g<i;)r=r.then(t[g++],t[g++]);return r}i=h.length;let b=e;for(g=0;g<i;){let t=h[g++],e=h[g++];try{b=t(b)}catch(t){e.call(this,t);break}}try{r=(0,s.default).call(this,b)}catch(t){return Promise.reject(t)}for(g=0,i=y.length;g<i;)r=r.then(y[g++],y[g++]);return r}getUri(t){t=(0,l.default)(this.defaults,t);let e=(0,f.default)(t.baseURL,t.url);return(0,o.default)(e,t.params,t.paramsSerializer)}}// Provide aliases for supported request methods
(0,n.default).forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/p.prototype[t]=function(e,r){return this.request((0,l.default)(r||{},{method:t,url:e,data:(r||{}).data}))}}),(0,n.default).forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,i){return this.request((0,l.default)(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}p.prototype[t]=e(),p.prototype[t+"Form"]=e(!0)});var h=p}),i.register("2RNjJ",function(e,r){t(e.exports,"default",function(){return s});var n=i("2bBga"),o=i("hz3Ym");/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function a(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(t,e,r){let i;/*eslint no-param-reassign:0*/if(!e)return t;let s=r&&r.encode||a,l=r&&r.serialize;if(i=l?l(e,r):(0,n.default).isURLSearchParams(e)?e.toString():new(0,o.default)(e,r).toString(s)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}}),i.register("hz3Ym",function(e,r){t(e.exports,"default",function(){return l});var n=i("aewVa");/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function o(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function a(t,e){this._pairs=[],t&&(0,n.default)(t,this,e)}let s=a.prototype;s.append=function(t,e){this._pairs.push([t,e])},s.toString=function(t){let e=t?function(e){return t.call(this,e,o)}:o;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var l=a}),i.register("aewVa",function(e,r){t(e.exports,"default",function(){return d});var n=i("2bBga"),o=i("121rJ"),a=i("1gvAv"),s=i("ihoyg").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function l(t){return(0,n.default).isPlainObject(t)||(0,n.default).isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function f(t){return(0,n.default).endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function u(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=f(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}let c=(0,n.default).toFlatObject(n.default,{},null,function(t){return/^is[A-Z]/.test(t)});var d=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,r){if(!(0,n.default).isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new(a.default||FormData),// eslint-disable-next-line no-param-reassign
r=(0,n.default).toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!(0,n.default).isUndefined(e[t])});let i=r.metaTokens,d=r.visitor||b,p=r.dots,h=r.indexes,m=r.Blob||"undefined"!=typeof Blob&&Blob,y=m&&(0,n.default).isSpecCompliantForm(e);if(!(0,n.default).isFunction(d))throw TypeError("visitor must be a function");function g(t){if(null===t)return"";if((0,n.default).isDate(t))return t.toISOString();if(!y&&(0,n.default).isBlob(t))throw new o.default("Blob is not supported. Use a Buffer instead.");return(0,n.default).isArrayBuffer(t)||(0,n.default).isTypedArray(t)?y&&"function"==typeof Blob?new Blob([t]):s.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function b(t,r,o){let a=t;if(t&&!o&&"object"==typeof t){if((0,n.default).endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=i?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var s;if((0,n.default).isArray(t)&&(s=t,(0,n.default).isArray(s)&&!s.some(l))||((0,n.default).isFileList(t)||(0,n.default).endsWith(r,"[]"))&&(a=(0,n.default).toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=f(r),a.forEach(function(t,i){(0,n.default).isUndefined(t)||null===t||e.append(!0===h?u([r],i,p):null===h?r:r+"[]",g(t))}),!1)}}return!!l(t)||(e.append(u(o,r,p),g(t)),!1)}let x=[],w=Object.assign(c,{defaultVisitor:b,convertValue:g,isVisitable:l});if(!(0,n.default).isObject(t))throw TypeError("data must be an object");return function t(r,i){if(!(0,n.default).isUndefined(r)){if(-1!==x.indexOf(r))throw Error("Circular reference detected in "+i.join("."));x.push(r),(0,n.default).forEach(r,function(r,o){let a=!((0,n.default).isUndefined(r)||null===r)&&d.call(e,r,(0,n.default).isString(o)?o.trim():o,i,w);!0===a&&t(r,i?i.concat(o):[o])}),x.pop()}}(t),e}}),i.register("121rJ",function(e,r){t(e.exports,"default",function(){return l});var n=i("2bBga");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function o(t,e,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}(0,n.default).inherits(o,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:(0,n.default).toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let a=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{s[t]={value:t}}),Object.defineProperties(o,s),Object.defineProperty(a,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
o.from=(t,e,r,i,s,l)=>{let f=Object.create(a);return(0,n.default).toFlatObject(t,f,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),o.call(f,t.message,e,r,i,s),f.cause=t,f.name=t.name,l&&Object.assign(f,l),f};var l=o}),i.register("1gvAv",function(e,r){t(e.exports,"default",function(){return n});// eslint-disable-next-line strict
var n=null}),i.register("ihoyg",function(e,r){t(e.exports,"Buffer",function(){return n},function(t){return n=t}),t(e.exports,"INSPECT_MAX_BYTES",function(){return o},function(t){return o=t});var n,o,a=i("hqZtu"),s=i("5WQj6");let l="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function f(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function u(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return p(t)}return c(t,e,r)}function c(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!u.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|g(t,e),n=f(r),i=n.write(t,e);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(F(t,Uint8Array)){let e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return h(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(F(t,ArrayBuffer)||t&&F(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(F(t,SharedArrayBuffer)||t&&F(t.buffer,SharedArrayBuffer)))return m(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,e,r);let i=function(t){var e;if(u.isBuffer(t)){let e=0|y(t.length),r=f(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?f(0):h(t):"Buffer"===t.type&&Array.isArray(t.data)?h(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return d(t),f(t<0?0:0|y(t))}function h(t){let e=t.length<0?0:0|y(t.length),r=f(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function m(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),u.prototype),n)}function y(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function g(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||F(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return _(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return $(t).length;default:if(i)return n?-1:_(t).length// assume utf8
;e=(""+e).toLowerCase(),i=!0}}function b(t,e,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=z[t[n]];return i}(this,e,r);case"utf8":case"utf-8":return E(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}(this,e,r);case"base64":var i,o;return i=e,o=r,0===i&&o===this.length?a.fromByteArray(this):a.fromByteArray(this.slice(i,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}(this,e,r);default:if(n)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function x(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function w(t,e,r,n,i){var o;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:v(t,e,r,n,i));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function v(t,e,r,n,i){let o,a=1,s=t.length,l=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;a=2,s/=2,l/=2,r/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){let n=-1;for(o=r;o<s;o++)if(f(t,o)===f(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===l)return n*a}else -1!==n&&(o-=o-n),n=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let n=0;n<l;n++)if(f(t,o+n)!==f(e,n)){r=!1;break}if(r)return o}return -1}function E(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let e=t[i],o=null,a=e>239?4:e>223?3:e>191?2:1;if(i+a<=r){let r,n,s,l;switch(a){case 1:e<128&&(o=e);break;case 2:(192&(r=t[i+1]))==128&&(l=(31&e)<<6|63&r)>127&&(o=l);break;case 3:r=t[i+1],n=t[i+2],(192&r)==128&&(192&n)==128&&(l=(15&e)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=t[i+1],n=t[i+2],s=t[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(l=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,a=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function A(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function B(t,e,r,n,i,o){if(!u.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function N(t,e,r,n,i){L(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,r}function S(t,e,r,n,i){L(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=a,a>>=8,t[r+2]=a,a>>=8,t[r+1]=a,a>>=8,t[r]=a,r+8}function O(t,e,r,n,i,o){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function T(t,e,r,n,i){return e=+e,r>>>=0,i||O(t,e,r,4,34028234663852886e22,-34028234663852886e22),s.write(t,e,r,n,23,4),r+4}function I(t,e,r,n,i){return e=+e,r>>>=0,i||O(t,e,r,8,17976931348623157e292,-17976931348623157e292),s.write(t,e,r,n,52,8),r+8}n=u,o=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */u.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/u.from=function(t,e,r){return c(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/u.alloc=function(t,e,r){return(d(t),t<=0)?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */u.allocUnsafe=function(t){return p(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */u.allocUnsafeSlow=function(t){return p(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},u.compare=function(t,e){if(F(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),F(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=u.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){let e=t[r];if(F(e,Uint8Array))i+e.length>n.length?(u.isBuffer(e)||(e=u.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else if(u.isBuffer(e))e.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return n},u.byteLength=g,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
u.prototype._isBuffer=!0,u.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)x(this,e,e+1);return this},u.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)x(this,e,e+3),x(this,e+1,e+2);return this},u.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)x(this,e,e+7),x(this,e+1,e+6),x(this,e+2,e+5),x(this,e+3,e+4);return this},u.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?E(this,0,t):b.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){let t="",e=o;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(u.prototype[l]=u.prototype.inspect),u.prototype.compare=function(t,e,r,n,i){if(F(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;let o=i-n,a=r-e,s=Math.min(o,a),l=this.slice(n,i),f=t.slice(e,r);for(let t=0;t<s;++t)if(l[t]!==f[t]){o=l[t],a=f[t];break}return o<a?-1:a<o?1:0},u.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){var i,o,a,s,l,f,u,c;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-e;if((void 0===r||r>d)&&(r=d),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let i;r=Number(r)||0;let o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;let a=e.length;for(n>a/2&&(n=a/2),i=0;i<n;++i){let n=parseInt(e.substr(2*i,2),16);if(n!=n)break;t[r+i]=n}return i}(this,t,e,r);case"utf8":case"utf-8":return i=e,o=r,D(_(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return a=e,s=r,D(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,f=r,D($(t),this,l,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=e,c=r,D(function(t,e){let r,n;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(t,this.length-u),this,u,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,u.prototype),n)},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||A(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||A(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||A(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||A(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||A(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||A(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||A(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readBigUInt64LE=M(function(t){U(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&j(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),u.prototype.readBigUInt64BE=M(function(t){U(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&j(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),u.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||A(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||A(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return(t>>>=0,e||A(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||A(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){t>>>=0,e||A(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||A(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||A(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readBigInt64LE=M(function(t){U(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&j(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),u.prototype.readBigInt64BE=M(function(t){U(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&j(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),u.prototype.readFloatLE=function(t,e){return t>>>=0,e||A(t,4,this.length),s.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||A(t,4,this.length),s.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||A(t,8,this.length),s.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||A(t,8,this.length),s.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;B(this,t,e,r,n,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;B(this,t,e,r,n,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigUInt64LE=M(function(t,e=0){return N(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=M(function(t,e=0){return S(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);B(this,t,e,r,n-1,-n)}let i=0,o=1,a=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/o>>0)-a&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);B(this,t,e,r,n-1,-n)}let i=r-1,o=1,a=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/o>>0)-a&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||B(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigInt64LE=M(function(t,e=0){return N(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=M(function(t,e=0){return S(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeFloatLE=function(t,e,r){return T(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return T(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return I(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return I(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
u.prototype.copy=function(t,e,r,n){if(!u.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
u.prototype.fill=function(t,e,r,n){let i;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{let o=u.isBuffer(t)?t:u.from(t,n),a=o.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%a]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let k={};function R(t,e,r){k[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function C(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function L(t,e,r,n,i,o){if(t>r||t<e){let n;let i="bigint"==typeof e?"n":"";throw n=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${r}${i}`,new k.ERR_OUT_OF_RANGE("value",n,t)}U(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&j(i,n.length-(o+1))}function U(t,e){if("number"!=typeof t)throw new k.ERR_INVALID_ARG_TYPE(e,"number",t)}function j(t,e,r){if(Math.floor(t)!==t)throw U(t,r),new k.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new k.ERR_BUFFER_OUT_OF_BOUNDS;throw new k.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}R("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),R("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),R("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=C(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=C(i)),i+="n"),n+=` It must be ${e}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
let P=/[^+/0-9A-Za-z-_]/g;function _(t,e){let r;e=e||1/0;let n=t.length,i=null,o=[];for(let a=0;a<n;++a){// is surrogate component
if((r=t.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(e-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function $(t){return a.toByteArray(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(P,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function D(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length)&&!(i>=t.length);++i)e[i+r]=t[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function F(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let z=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();// Return not function with Error if BigInt not supported
function M(t){return"undefined"==typeof BigInt?W:t}function W(){throw Error("BigInt not supported")}}),i.register("hqZtu",function(e,r){t(e.exports,"toByteArray",function(){return n},function(t){return n=t}),t(e.exports,"fromByteArray",function(){return i},function(t){return i=t}),n=function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),i=n[0],o=n[1],l=new s((i+o)*3/4-o),f=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)e=a[t.charCodeAt(r)]<<18|a[t.charCodeAt(r+1)]<<12|a[t.charCodeAt(r+2)]<<6|a[t.charCodeAt(r+3)],l[f++]=e>>16&255,l[f++]=e>>8&255,l[f++]=255&e;return 2===o&&(e=a[t.charCodeAt(r)]<<2|a[t.charCodeAt(r+1)]>>4,l[f++]=255&e),1===o&&(e=a[t.charCodeAt(r)]<<10|a[t.charCodeAt(r+1)]<<4|a[t.charCodeAt(r+2)]>>2,l[f++]=e>>8&255,l[f++]=255&e),l},i=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],a=0,s=r-n;a<s;a+=16383// must be multiple of 3
)i.push(function(t,e,r){for(var n,i=[],a=e;a<r;a+=3)i.push(o[(n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]))>>18&63]+o[n>>12&63]+o[n>>6&63]+o[63&n]);return i.join("")}(t,a,a+16383>s?s:a+16383));return 1===n?i.push(o[(e=t[r-1])>>2]+o[e<<4&63]+"=="):2===n&&i.push(o[(e=(t[r-2]<<8)+t[r-1])>>10]+o[e>>4&63]+o[e<<2&63]+"="),i.join("")};for(var n,i,o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,u=l.length;f<u;++f)o[f]=l[f],a[l.charCodeAt(f)]=f;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63}),i.register("5WQj6",function(e,r){var n,i;t(e.exports,"read",function(){return n},function(t){return n=t}),t(e.exports,"write",function(){return i},function(t){return i=t}),n=function(t,e,r,n,i){var o,a,s=8*i-n-1,l=(1<<s)-1,f=l>>1,u=-7,c=r?i-1:0,d=r?-1:1,p=t[e+c];for(c+=d,o=p&(1<<-u)-1,p>>=-u,u+=s;u>0;o=256*o+t[e+c],c+=d,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;u>0;a=256*a+t[e+c],c+=d,u-=8);if(0===o)o=1-f;else{if(o===l)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),o-=f}return(p?-1:1)*a*Math.pow(2,o-n)},i=function(t,e,r,n,i,o){var a,s,l,f=8*o-i-1,u=(1<<f)-1,c=u>>1,d=23===i?5960464477539062e-23:0,p=n?0:o-1,h=n?1:-1,m=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=u):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?e+=d/l:e+=d*Math.pow(2,1-c),e*l>=2&&(a++,l/=2),a+c>=u?(s=0,a=u):a+c>=1?(s=(e*l-1)*Math.pow(2,i),a+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[r+p]=255&s,p+=h,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;t[r+p]=255&a,p+=h,a/=256,f-=8);t[r+p-h]|=128*m}}),i.register("5Dm7L",function(e,r){t(e.exports,"default",function(){return o});var n=i("2bBga"),o=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){(0,n.default).forEach(this.handlers,function(e){null!==e&&t(e)})}}}),i.register("eQ5d8",function(e,r){t(e.exports,"default",function(){return c});var n=i("bhEpd"),o=i("ksuZT"),a=i("hqlPG"),s=i("83xK9"),l=i("gbTL1"),f=i("enpjQ");/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new s.default(null,t)}function c(t){u(t),t.headers=(0,l.default).from(t.headers),// Transform request data
t.data=(0,n.default).call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=(0,f.default).getAdapter(t.adapter||a.default.adapter);return e(t).then(function(e){return u(t),// Transform response data
e.data=(0,n.default).call(t,t.transformResponse,e),e.headers=(0,l.default).from(e.headers),e},function(e){return!(0,o.default)(e)&&(u(t),e&&e.response&&(e.response.data=(0,n.default).call(t,t.transformResponse,e.response),e.response.headers=(0,l.default).from(e.response.headers))),Promise.reject(e)})}}),i.register("bhEpd",function(e,r){t(e.exports,"default",function(){return s});var n=i("2bBga"),o=i("hqlPG"),a=i("gbTL1");function s(t,e){let r=this||o.default,i=e||r,s=(0,a.default).from(i.headers),l=i.data;return(0,n.default).forEach(t,function(t){l=t.call(r,l,s.normalize(),e?e.status:void 0)}),s.normalize(),l}}),i.register("hqlPG",function(e,r){t(e.exports,"default",function(){return d});var n=i("2bBga"),o=i("121rJ"),a=i("2wfLM"),s=i("aewVa"),l=i("5tcKT"),f=i("hdo0R"),u=i("4bmvb");let c={transitional:a.default,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let i=e.getContentType()||"",o=i.indexOf("application/json")>-1,a=(0,n.default).isObject(t);a&&(0,n.default).isHTMLForm(t)&&(t=new FormData(t));let f=(0,n.default).isFormData(t);if(f)return o&&o?JSON.stringify((0,u.default)(t)):t;if((0,n.default).isArrayBuffer(t)||(0,n.default).isBuffer(t)||(0,n.default).isStream(t)||(0,n.default).isFile(t)||(0,n.default).isBlob(t))return t;if((0,n.default).isArrayBufferView(t))return t.buffer;if((0,n.default).isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(a){if(i.indexOf("application/x-www-form-urlencoded")>-1)return(0,l.default)(t,this.formSerializer).toString();if((r=(0,n.default).isFileList(t))||i.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return(0,s.default)(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return a||o?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if((0,n.default).isString(t))try{return(0,JSON.parse)(t),(0,n.default).trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||c.transitional,r=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&(0,n.default).isString(t)&&(r&&!this.responseType||i)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&i){if("SyntaxError"===t.name)throw(0,o.default).from(t,o.default.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:f.default.classes.FormData,Blob:f.default.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};(0,n.default).forEach(["delete","get","head","post","put","patch"],t=>{c.headers[t]={}});var d=c}),i.register("2wfLM",function(e,r){t(e.exports,"default",function(){return n});var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),i.register("5tcKT",function(e,r){t(e.exports,"default",function(){return s});var n=i("2bBga"),o=i("aewVa"),a=i("hdo0R");function s(t,e){return(0,o.default)(t,new a.default.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,i){return a.default.isNode&&(0,n.default).isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}}),i.register("hdo0R",function(e,r){let n;t(e.exports,"default",function(){return u});var o=i("9matH"),a=i("eN04z"),s=i("2J1oD");/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */let l=("undefined"==typeof navigator||"ReactNative"!==(n=navigator.product)&&"NativeScript"!==n&&"NS"!==n)&&"undefined"!=typeof window&&"undefined"!=typeof document,f="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var u={isBrowser:!0,classes:{URLSearchParams:o.default,FormData:a.default,Blob:s.default},isStandardBrowserEnv:l,isStandardBrowserWebWorkerEnv:f,protocols:["http","https","file","blob","url","data"]}}),i.register("9matH",function(e,r){t(e.exports,"default",function(){return o});var n=i("hz3Ym"),o="undefined"!=typeof URLSearchParams?URLSearchParams:n.default}),i.register("eN04z",function(e,r){t(e.exports,"default",function(){return n});var n="undefined"!=typeof FormData?FormData:null}),i.register("2J1oD",function(e,r){t(e.exports,"default",function(){return n});var n="undefined"!=typeof Blob?Blob:null}),i.register("4bmvb",function(e,r){t(e.exports,"default",function(){return o});var n=i("2bBga"),o=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if((0,n.default).isFormData(t)&&(0,n.default).isFunction(t.entries)){let e={};return(0,n.default).forEachEntry(t,(t,r)=>{!function t(e,r,i,o){let a=e[o++],s=Number.isFinite(+a),l=o>=e.length;if(a=!a&&(0,n.default).isArray(i)?i.length:a,l)return(0,n.default).hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s;i[a]&&(0,n.default).isObject(i[a])||(i[a]=[]);let f=t(e,r,i[a],o);return f&&(0,n.default).isArray(i[a])&&(i[a]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},i=Object.keys(t),o=i.length;for(e=0;e<o;e++)n[r=i[e]]=t[r];return n}(i[a])),!s}((0,n.default).matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null}}),i.register("gbTL1",function(e,r){t(e.exports,"default",function(){return d});var n=i("2bBga"),o=i("9cPEm");let a=Symbol("internals");function s(t){return t&&String(t).trim().toLowerCase()}function l(t){return!1===t||null==t?t:(0,n.default).isArray(t)?t.map(l):String(t)}let f=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function u(t,e,r,i,o){if((0,n.default).isFunction(i))return i.call(this,e,r);if(o&&(e=r),(0,n.default).isString(e)){if((0,n.default).isString(i))return -1!==e.indexOf(i);if((0,n.default).isRegExp(i))return i.test(e)}}class c{constructor(t){t&&this.set(t)}set(t,e,r){let i=this;function a(t,e,r){let o=s(e);if(!o)throw Error("header name must be a non-empty string");let a=(0,n.default).findKey(i,o);a&&void 0!==i[a]&&!0!==r&&(void 0!==r||!1===i[a])||(i[a||e]=l(t))}let u=(t,e)=>(0,n.default).forEach(t,(t,r)=>a(t,r,e));return(0,n.default).isPlainObject(t)||t instanceof this.constructor?u(t,e):(0,n.default).isString(t)&&(t=t.trim())&&!f(t)?u((0,o.default)(t),e):null!=t&&a(e,t,r),this}get(t,e){if(t=s(t)){let r=(0,n.default).findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if((0,n.default).isFunction(e))return e.call(this,t,r);if((0,n.default).isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=s(t)){let r=(0,n.default).findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||u(this,this[r],r,e)))}return!1}delete(t,e){let r=this,i=!1;function o(t){if(t=s(t)){let o=(0,n.default).findKey(r,t);o&&(!e||u(r,r[o],o,e))&&(delete r[o],i=!0)}}return(0,n.default).isArray(t)?t.forEach(o):o(t),i}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let i=e[r];(!t||u(this,this[i],i,t,!0))&&(delete this[i],n=!0)}return n}normalize(t){let e=this,r={};return(0,n.default).forEach(this,(i,o)=>{let a=(0,n.default).findKey(r,o);if(a){e[a]=l(i),delete e[o];return}let s=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(o).trim();s!==o&&delete e[o],e[s]=l(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return(0,n.default).forEach(this,(r,i)=>{null!=r&&!1!==r&&(e[i]=t&&(0,n.default).isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[a]=this[a]={accessors:{}},r=e.accessors,i=this.prototype;function o(t){let e=s(t);r[e]||(function(t,e){let r=(0,n.default).toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,i){return this[n].call(this,e,t,r,i)},configurable:!0})})}(i,t),r[e]=!0)}return(0,n.default).isArray(t)?t.forEach(o):o(t),this}}c.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),// reserved names hotfix
(0,n.default).reduceDescriptors(c.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),(0,n.default).freezeMethods(c);var d=c}),i.register("9cPEm",function(e,r){t(e.exports,"default",function(){return a});var n=i("2bBga");// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let o=(0,n.default).toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */a=t=>{let e,r,n;let i={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||i[e]&&o[e]||("set-cookie"===e?i[e]?i[e].push(r):i[e]=[r]:i[e]=i[e]?i[e]+", "+r:r)}),i}}),i.register("ksuZT",function(e,r){t(e.exports,"default",function(){return n});function n(t){return!!(t&&t.__CANCEL__)}}),i.register("83xK9",function(e,r){t(e.exports,"default",function(){return a});var n=i("121rJ");/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function o(t,e,r){// eslint-disable-next-line no-eq-null,eqeqeq
(0,n.default).call(this,null==t?"canceled":t,n.default.ERR_CANCELED,e,r),this.name="CanceledError"}(0,i("2bBga").default).inherits(o,n.default,{__CANCEL__:!0});var a=o}),i.register("enpjQ",function(e,r){t(e.exports,"default",function(){return c});var n=i("2bBga"),o=i("1gvAv"),a=i("9VVcb"),s=i("121rJ");let l={http:o.default,xhr:a.default};(0,n.default).forEach(l,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});let f=t=>`- ${t}`,u=t=>(0,n.default).isFunction(t)||null===t||!1===t;var c={getAdapter:t=>{let e,r;t=(0,n.default).isArray(t)?t:[t];let{length:i}=t,o={};for(let n=0;n<i;n++){let i;if(r=e=t[n],!u(e)&&void 0===(r=l[(i=String(e)).toLowerCase()]))throw new s.default(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+n]=r}if(!r){let t=Object.entries(o).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")),e=i?t.length>1?"since :\n"+t.map(f).join("\n"):" "+f(t[0]):"as no adapter specified";throw new s.default("There is no suitable adapter to dispatch the request "+e,"ERR_NOT_SUPPORT")}return r},adapters:l}}),i.register("9VVcb",function(e,r){t(e.exports,"default",function(){return x});var n=i("2bBga"),o=i("1TQad"),a=i("kTwUV"),s=i("2RNjJ"),l=i("1ZTQa"),f=i("g3yOT"),u=i("2wfLM"),c=i("121rJ"),d=i("83xK9"),p=i("8wMQb"),h=i("hdo0R"),m=i("gbTL1"),y=i("5OiBb");function g(t,e){let r=0,n=(0,y.default)(50,250);return i=>{let o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-r,l=n(s),f=o<=a;r=o;let u={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&f?(a-o)/l:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}let b="undefined"!=typeof XMLHttpRequest;var x=b&&function(t){return new Promise(function(e,r){let i,y,b=t.data,x=(0,m.default).from(t.headers).normalize(),w=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(i),t.signal&&t.signal.removeEventListener("abort",i)}(0,n.default).isFormData(b)&&(h.default.isStandardBrowserEnv||h.default.isStandardBrowserWebWorkerEnv?x.setContentType(!1):x.getContentType(/^\s*multipart\/form-data/)?(0,n.default).isString(y=x.getContentType())&&x.setContentType(y.replace(/^\s*(multipart\/form-data);+/,"$1")):x.setContentType("multipart/form-data"));let E=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";x.set("Authorization","Basic "+btoa(e+":"+r))}let A=(0,l.default)(t.baseURL,t.url);function B(){if(!E)return;// Prepare the response
let n=(0,m.default).from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),i=w&&"text"!==w&&"json"!==w?E.response:E.responseText,a={data:i,status:E.status,statusText:E.statusText,headers:n,config:t,request:E};(0,o.default)(function(t){e(t),v()},function(t){r(t),v()},a),// Clean up request
E=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(E.open(t.method.toUpperCase(),(0,s.default)(A,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
E.timeout=t.timeout,"onloadend"in E?E.onloadend=B:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(B)},// Handle browser request cancellation (as opposed to a manual cancellation)
E.onabort=function(){E&&(r(new c.default("Request aborted",c.default.ECONNABORTED,t,E)),// Clean up request
E=null)},// Handle low level network errors
E.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new c.default("Network Error",c.default.ERR_NETWORK,t,E)),// Clean up request
E=null},// Handle timeout
E.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||u.default;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new c.default(e,n.clarifyTimeoutError?c.default.ETIMEDOUT:c.default.ECONNABORTED,t,E)),// Clean up request
E=null},h.default.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||(0,f.default)(A))&&t.xsrfCookieName&&(0,a.default).read(t.xsrfCookieName);e&&x.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===b&&x.setContentType(null),"setRequestHeader"in E&&(0,n.default).forEach(x.toJSON(),function(t,e){E.setRequestHeader(e,t)}),(0,n.default).isUndefined(t.withCredentials)||(E.withCredentials=!!t.withCredentials),w&&"json"!==w&&(E.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&E.addEventListener("progress",g(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",g(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
i=e=>{E&&(r(!e||e.type?new d.default(null,t,E):e),E.abort(),E=null)},t.cancelToken&&t.cancelToken.subscribe(i),t.signal&&(t.signal.aborted?i():t.signal.addEventListener("abort",i)));let N=(0,p.default)(A);if(N&&-1===(0,h.default).protocols.indexOf(N)){r(new c.default("Unsupported protocol "+N+":",c.default.ERR_BAD_REQUEST,t));return}// Send the request
E.send(b||null)})}}),i.register("1TQad",function(e,r){t(e.exports,"default",function(){return o});var n=i("121rJ");function o(t,e,r){let i=r.config.validateStatus;!r.status||!i||i(r.status)?t(r):e(new n.default("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}}),i.register("kTwUV",function(e,r){t(e.exports,"default",function(){return o});var n=i("2bBga"),o=i("hdo0R").default.isStandardBrowserEnv?{write:function(t,e,r,i,o,a){let s=[];s.push(t+"="+encodeURIComponent(e)),(0,n.default).isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),(0,n.default).isString(i)&&s.push("path="+i),(0,n.default).isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),i.register("1ZTQa",function(e,r){t(e.exports,"default",function(){return a});var n=i("iUwU6"),o=i("91vFE");function a(t,e){return t&&!(0,n.default)(e)?(0,o.default)(t,e):e}}),i.register("iUwU6",function(e,r){t(e.exports,"default",function(){return n});function n(t){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}}),i.register("91vFE",function(e,r){t(e.exports,"default",function(){return n});function n(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}}),i.register("g3yOT",function(e,r){t(e.exports,"default",function(){return o});var n=i("2bBga"),o=i("hdo0R").default.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function i(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=i(window.location.href),function(e){let r=(0,n.default).isString(e)?i(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}}),i.register("8wMQb",function(e,r){t(e.exports,"default",function(){return n});function n(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}}),i.register("5OiBb",function(e,r){t(e.exports,"default",function(){return n});var n=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),i=Array(t),o=0,a=0;return e=void 0!==e?e:1e3,function(s){let l=Date.now(),f=i[a];r||(r=l),n[o]=s,i[o]=l;let u=a,c=0;for(;u!==o;)c+=n[u++],u%=t;if((o=(o+1)%t)===a&&(a=(a+1)%t),l-r<e)return;let d=f&&l-f;return d?Math.round(1e3*c/d):void 0}}}),i.register("d0EKm",function(e,r){t(e.exports,"default",function(){return s});var n=i("2bBga"),o=i("gbTL1");let a=t=>t instanceof o.default?t.toJSON():t;function s(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function i(t,e,r){return(0,n.default).isPlainObject(t)&&(0,n.default).isPlainObject(e)?(0,n.default).merge.call({caseless:r},t,e):(0,n.default).isPlainObject(e)?(0,n.default).merge({},e):(0,n.default).isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,r){return(0,n.default).isUndefined(e)?(0,n.default).isUndefined(t)?void 0:i(void 0,t,r):i(t,e,r)}// eslint-disable-next-line consistent-return
function s(t,e){if(!(0,n.default).isUndefined(e))return i(void 0,e)}// eslint-disable-next-line consistent-return
function l(t,e){return(0,n.default).isUndefined(e)?(0,n.default).isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}// eslint-disable-next-line consistent-return
function f(r,n,o){return o in e?i(r,n):o in t?i(void 0,r):void 0}let u={url:s,method:s,data:s,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:f,headers:(t,e)=>o(a(t),a(e),!0)};return(0,n.default).forEach(Object.keys(Object.assign({},t,e)),function(i){let a=u[i]||o,s=a(t[i],e[i],i);(0,n.default).isUndefined(s)&&a!==f||(r[i]=s)}),r}}),i.register("6zj0X",function(e,r){t(e.exports,"default",function(){return l});var n=i("50GW0"),o=i("121rJ");let a={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{a[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});let s={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */a.transitional=function(t,e,r){function i(t,e){return"[Axios v"+n.VERSION+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,n,a)=>{if(!1===t)throw new o.default(i(n," has been removed"+(e?" in "+e:"")),o.default.ERR_DEPRECATED);return e&&!s[n]&&(s[n]=!0,// eslint-disable-next-line no-console
console.warn(i(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,a)}};var l={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new o.default("options must be an object",o.default.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),i=n.length;for(;i-- >0;){let a=n[i],s=e[a];if(s){let e=t[a],r=void 0===e||s(e,a,t);if(!0!==r)throw new o.default("option "+a+" must be "+r,o.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new o.default("Unknown option "+a,o.default.ERR_BAD_OPTION)}},validators:a}}),i.register("50GW0",function(e,r){t(e.exports,"VERSION",function(){return n});let n="1.5.1"}),i.register("2sjhC",function(e,r){t(e.exports,"default",function(){return a});var n=i("83xK9");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class o{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,i,o){r.reason||(r.reason=new n.default(t,i,o),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new o(function(e){t=e});return{token:e,cancel:t}}}var a=o}),i.register("av9gA",function(e,r){t(e.exports,"default",function(){return n});function n(t){return function(e){return t.apply(null,e)}}}),i.register("gNhGc",function(e,r){t(e.exports,"default",function(){return o});var n=i("2bBga");function o(t){return(0,n.default).isObject(t)&&!0===t.isAxiosError}}),i.register("jd7iQ",function(e,r){t(e.exports,"default",function(){return i});let n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach(([t,e])=>{n[e]=t});var i=n}),i.register("goQGx",function(e,r){t(e.exports,"default",function(){return o});var n=i("la1XE"),o//Основна мета такого процесу - забезпечити унікальний ідентифікатор для вхідних даних
=({timeStamp:t,PUBLIC_KEY:e,PRIVATE_KEY:r})=>(n&&n.__esModule?n.default:n)(`${t}${r}${e}`)}),i.register("la1XE",function(t,e){var r,n,o,a,s;r=i("fSg2G"),n=i("28Nm5").utf8,o=i("c8cSi"),a=i("28Nm5").bin,// Auxiliary functions
(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):n.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());// Swap endian
for(var i=r.bytesToWords(t),l=8*t.length,f=1732584193,u=-271733879,c=-1732584194,d=271733878,p=0;p<i.length;p++)i[p]=(i[p]<<8|i[p]>>>24)&16711935|(i[p]<<24|i[p]>>>8)&4278255360;// Padding
i[l>>>5]|=128<<l%32,i[(l+64>>>9<<4)+14]=l;for(var h=s._ff,m=s._gg,y=s._hh,g=s._ii,p=0;p<i.length;p+=16){var b=f,x=u,w=c,v=d;f=h(f,u,c,d,i[p+0],7,-680876936),d=h(d,f,u,c,i[p+1],12,-389564586),c=h(c,d,f,u,i[p+2],17,606105819),u=h(u,c,d,f,i[p+3],22,-1044525330),f=h(f,u,c,d,i[p+4],7,-176418897),d=h(d,f,u,c,i[p+5],12,1200080426),c=h(c,d,f,u,i[p+6],17,-1473231341),u=h(u,c,d,f,i[p+7],22,-45705983),f=h(f,u,c,d,i[p+8],7,1770035416),d=h(d,f,u,c,i[p+9],12,-1958414417),c=h(c,d,f,u,i[p+10],17,-42063),u=h(u,c,d,f,i[p+11],22,-1990404162),f=h(f,u,c,d,i[p+12],7,1804603682),d=h(d,f,u,c,i[p+13],12,-40341101),c=h(c,d,f,u,i[p+14],17,-1502002290),u=h(u,c,d,f,i[p+15],22,1236535329),f=m(f,u,c,d,i[p+1],5,-165796510),d=m(d,f,u,c,i[p+6],9,-1069501632),c=m(c,d,f,u,i[p+11],14,643717713),u=m(u,c,d,f,i[p+0],20,-373897302),f=m(f,u,c,d,i[p+5],5,-701558691),d=m(d,f,u,c,i[p+10],9,38016083),c=m(c,d,f,u,i[p+15],14,-660478335),u=m(u,c,d,f,i[p+4],20,-405537848),f=m(f,u,c,d,i[p+9],5,568446438),d=m(d,f,u,c,i[p+14],9,-1019803690),c=m(c,d,f,u,i[p+3],14,-187363961),u=m(u,c,d,f,i[p+8],20,1163531501),f=m(f,u,c,d,i[p+13],5,-1444681467),d=m(d,f,u,c,i[p+2],9,-51403784),c=m(c,d,f,u,i[p+7],14,1735328473),u=m(u,c,d,f,i[p+12],20,-1926607734),f=y(f,u,c,d,i[p+5],4,-378558),d=y(d,f,u,c,i[p+8],11,-2022574463),c=y(c,d,f,u,i[p+11],16,1839030562),u=y(u,c,d,f,i[p+14],23,-35309556),f=y(f,u,c,d,i[p+1],4,-1530992060),d=y(d,f,u,c,i[p+4],11,1272893353),c=y(c,d,f,u,i[p+7],16,-155497632),u=y(u,c,d,f,i[p+10],23,-1094730640),f=y(f,u,c,d,i[p+13],4,681279174),d=y(d,f,u,c,i[p+0],11,-358537222),c=y(c,d,f,u,i[p+3],16,-722521979),u=y(u,c,d,f,i[p+6],23,76029189),f=y(f,u,c,d,i[p+9],4,-640364487),d=y(d,f,u,c,i[p+12],11,-421815835),c=y(c,d,f,u,i[p+15],16,530742520),u=y(u,c,d,f,i[p+2],23,-995338651),f=g(f,u,c,d,i[p+0],6,-198630844),d=g(d,f,u,c,i[p+7],10,1126891415),c=g(c,d,f,u,i[p+14],15,-1416354905),u=g(u,c,d,f,i[p+5],21,-57434055),f=g(f,u,c,d,i[p+12],6,1700485571),d=g(d,f,u,c,i[p+3],10,-1894986606),c=g(c,d,f,u,i[p+10],15,-1051523),u=g(u,c,d,f,i[p+1],21,-2054922799),f=g(f,u,c,d,i[p+8],6,1873313359),d=g(d,f,u,c,i[p+15],10,-30611744),c=g(c,d,f,u,i[p+6],15,-1560198380),u=g(u,c,d,f,i[p+13],21,1309151649),f=g(f,u,c,d,i[p+4],6,-145523070),d=g(d,f,u,c,i[p+11],10,-1120210379),c=g(c,d,f,u,i[p+2],15,718787259),u=g(u,c,d,f,i[p+9],21,-343485551),f=f+b>>>0,u=u+x>>>0,c=c+w>>>0,d=d+v>>>0}return r.endian([f,u,c,d])})._ff=function(t,e,r,n,i,o,a){var s=t+(e&r|~e&n)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._gg=function(t,e,r,n,i,o,a){var s=t+(e&n|r&~n)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._hh=function(t,e,r,n,i,o,a){var s=t+(e^r^n)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._ii=function(t,e,r,n,i,o,a){var s=t+(r^(e|~n))+(i>>>0)+a;return(s<<o|s>>>32-o)+e},// Package private blocksize
s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw Error("Illegal argument "+t);var n=r.wordsToBytes(s(t,e));return e&&e.asBytes?n:e&&e.asString?a.bytesToString(n):r.bytesToHex(n)}}),i.register("fSg2G",function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={// Bit-wise rotation left
rotl:function(t,e){return t<<e|t>>>32-e},// Bit-wise rotation right
rotr:function(t,e){return t<<32-e|t>>>e},// Swap big-endian to little-endian and vice versa
endian:function(t){// If number given, swap endian
if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);// Else, assume array and swap all items
for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},// Generate an array of any length of random bytes
randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},// Convert a byte array to big-endian 32-bit words
bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},// Convert big-endian 32-bit words to a byte array
wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},// Convert a byte array to a hex string
bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},// Convert a hex string to a byte array
hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},// Convert a byte array to a base-64 string
bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var i=t[n]<<16|t[n+1]<<8|t[n+2],o=0;o<4;o++)8*n+6*o<=8*t.length?e.push(r.charAt(i>>>6*(3-o)&63)):e.push("=");return e.join("")},// Convert a base-64 string to a byte array
base64ToBytes:function(t){// Remove non-base-64 characters
t=t.replace(/[^A-Z0-9+\/]/ig,"");for(var e=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|r.indexOf(t.charAt(n))>>>6-2*i);return e}},t.exports=n}),i.register("28Nm5",function(t,e){var r={// UTF-8 encoding
utf8:{// Convert a string to a byte array
stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},// Convert a byte array to a string
bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},// Binary encoding
bin:{// Convert a string to a byte array
stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},// Convert a byte array to a string
bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r}),i.register("c8cSi",function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
t.exports=function(t){return null!=t&&(r(t)||"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))||!!t._isBuffer)}}),i.register("cH1ne",function(e,r){t(e.exports,"getItemsPerPage",function(){return n});let n=()=>{let t={mobile:320,tablet:768};return window.innerWidth<=t.mobile?5:window.innerWidth<=t.tablet?8:16}}),i.register("jKGAa",function(e,r){t(e.exports,"showLoader",function(){return a}),t(e.exports,"hideLoader",function(){return s});var n=i("dCvm9");let o=new(0,n.Spinner)({lines:16,length:18,width:4,radius:20,color:"#600404"}).spin(),a=()=>{let t=document.getElementById("loader-container");t.innerHTML="",t.appendChild(o.el),t.style.display="flex"},s=()=>{let t=document.getElementById("loader-container");t.style.display="none",t.innerHTML=""}}),i.register("dCvm9",function(e,r){t(e.exports,"Spinner",function(){return o});var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},o=/** @class */function(){function t(t){void 0===t&&(t={}),this.opts=n(n({},i),t)}return(/**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),a(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),/**
 * Internal method that draws the individual lines.
 */function(t,e){var r=Math.round(e.corners*e.width*500)/1e3+"px",n="none";!0===e.shadow?n="0 2px 4px #000":"string"==typeof e.shadow&&(n=e.shadow);for(var i=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,r=[],n=0,i=t.split(",");n<i.length;n++){var o=i[n].match(e);if(null!==o){var a=+o[2],s=+o[5],l=o[4],f=o[7];0!==a||l||(l=f),0!==s||f||(f=l),l===f&&r.push({prefix:o[1]||"",x:a,y:s,xUnits:l,yUnits:f,end:o[8]})}// invalid syntax
}return r}(n),o=0;o<e.lines;o++){var l=~~(360/e.lines*o+e.rotate),f=a(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:s(e.fadeColor,o),borderRadius:r,transformOrigin:"left",transform:"rotate("+l+"deg) translateX("+e.radius+"px)"}),u=o*e.direction/e.lines/e.speed;u-=1/e.speed;var c=a(document.createElement("div"),{width:"100%",height:"100%",background:s(e.color,o),borderRadius:r,boxShadow:/**
 * Modify box-shadow x/y offsets to counteract rotation
 */function(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n],o=function(t,e,r){var n=r*Math.PI/180,i=Math.sin(n),o=Math.cos(n);return[Math.round((t*o+e*i)*1e3)/1e3,Math.round((-t*i+e*o)*1e3)/1e3]}(i.x,i.y,e);r.push(i.prefix+o[0]+i.xUnits+" "+o[1]+i.yUnits+i.end)}return r.join(", ")}(i,l),animation:1/e.speed+"s linear "+u+"s infinite "+e.animation});f.appendChild(c),t.appendChild(f)}}(this.el,this.opts),this},/**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t)}();/**
 * Sets multiple style properties at once.
 */function a(t,e){for(var r in e)t.style[r]=e[r];return t}/**
 * Returns the line color from the given string or array.
 */function s(t,e){return"string"==typeof t?t:t[e%t.length]}}),i.register("6XzeY",function(e,r){t(e.exports,"onModalComicsClick",function(){return p});var n=i("iRoAB"),o=i("jKGAa"),a=i("cIK95"),s=i("iQIUW");let l=document.querySelector(".js-modal-section-characters"),f=document.querySelector(".modal-container-characters");document.querySelector(".js-click-delegate-comics");let u=document.querySelector(".js-markup-modal-comics"),c=document.querySelector(".js-markup-modal-characters"),d=document.querySelector(".js-click-rerender-Characters");d.addEventListener("click",t=>{let e=t.target,r=e.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
e.matches(".character-img, .character-name")&&((0,a.onModalOpenCharactersClick)({target:e},r),console.log("rerenderCharacters"))});let p=async t=>{let e=t.target.dataset.id;(0,o.showLoader)();try{let t=await (0,n.api).getComicById({comicId:e}),r=t[0].creators.items.map(t=>t.resourceURI.split("/").pop()),i=t[0].characters.items.map(t=>t.resourceURI.split("/").pop());t[0].authors=t[0].creators.items.map(({name:t,role:e})=>({name:t,role:e}));let a=r[0],s=await (0,n.api).getCreatorsById({creatorId:a});t[0].authors[0].pic=`${s[0].thumbnail.path}.${s[0].thumbnail.extension}`,console.log("creatorId =>",r[0]);for(let e=0;e<i.length;e+=1){let r=i[e],o=await (0,n.api).getCharactersById({characterId:r});t[0].characters.items[e].pic=`${o[0].thumbnail.path}.${o[0].thumbnail.extension}`,t[0].characters.items[e].id=r}l.classList.remove("display-is-hidden"),console.log("comicsDataById =>",t),c.innerHTML="";let d=g(t[0]);u.innerHTML=d,f.style.visibility="visible",(0,o.hideLoader)()}catch(t){(0,o.hideLoader)(),(0,s.Notify).failure("No information available")}},h=t=>t.slice(0,3).map(t=>`<li>
            <img class="photo-small-image" src="${t.path}.${t.extension}" alt="" />
          </li>`).join(""),m=t=>t.slice(0,1).map(t=>`
      <img class="author-img" src="${t.pic}" alt="${t.name}">
          <div class="author-description">
            <p class="author-role">${t.role}</p>
            <h3 class="author-name">${t.name}</h3>
             </div>
          `).join(""),y=t=>t.map(t=>`<li class="characters-item" data-id="${t.id}">
            <img class="character-img" src="${t.pic}" alt="" data-id="${t.id}"/>
            <h3 class="character-name" data-id="${t.id}">${t.name}</h3>
          </li>`).join(""),g=({description:t,thumbnail:e,prices:r,title:n,format:i,modified:o,authors:a,characters:s,images:l,dates:f,pageCount:u})=>{let c=a.filter(t=>"writer"===t.role),d=c.length>0?c[0].name:"",p=+Date.parse(o),g=new Date(p),b="Invalid Date"!==g.toString()?g.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"",x=new Date(f[0].date).getFullYear();return`

  <div class=" box-hero-images-modal">

     <img src="${e.path}.${e.extension}" class="hero-photo-comic" alt="" />

        <ul class="list-hero-photo-small">
          ${h(l)}
        </ul>
   </div>
  <div class="container-description-comics-modal">

 <div class="box-description-comics">
        <div class="info-container">
          <h1 class="title-name-hero-comics">${n}</h1>

            <p class="writer-separation"> <span class="writerName-author">
            ${d}</span>|<span class="writerName-date">
            ${b}</span>
            </p>

          </div>
        </div>
        <p class="text-description-info-comics">${t||""}</p>
        <ul class="list-info-comics">
          <li class="item-info-comics">
            <P class="text-product-details">FORMAT</P>
            <P class="text-format-render">${i}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">YEAR RELEASED</P>
            <P class="text-format-render">${x}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">PAGES</P>
            <P class="text-format-render">${u}</P>
          </li>
          <li class="item-info-comics">
            <P class="text-product-details">PRICE</P>
            <P class="text-format-render">$${r[0].price}</P>
          </li>
        </ul>
        <h2 class="title-creators">Creator</h2>
        <div class="creators-box">
          ${m(a)}
        </div>
        <h2 class="title-characters">Characters</h2>
        <ul class="characters-list ">
          ${y(s.items)}
        </ul>
      </div>
  </div>
      
  `}}),i.register("cIK95",function(e,r){t(e.exports,"onModalOpenCharactersClick",function(){return h});var n=i("iRoAB"),o=i("jKGAa"),a=i("6XzeY"),s=i("iQIUW");let l=document.querySelector(".js-modal-section-characters"),f=document.querySelector(".js-modal-close-btn"),u=document.querySelector(".js-markup-modal-characters"),c=document.querySelector(".js-markup-modal-comics"),d=document.querySelector(".modal-container-characters"),p=document.querySelector(".js-click-delegate-comics");f.addEventListener("click",()=>{u.innerHTML="",d.style.visibility="hidden",l.classList.add("display-is-hidden")}),p.addEventListener("click",t=>{let e=t.target,r=e.dataset.id;// Елемент, на який було клікнуто
// Перевіряємо, чи клікнуто на певному дитячому елементі
e.matches(".modal-comics-img, .comics-title")&&(0,a.onModalComicsClick)({target:e},r)});let h=async t=>{let e=t.target.dataset.id;(0,o.showLoader)();try{let t=await (0,n.api).getCharactersById({characterId:e}),r=t[0].series.items.map(t=>t.resourceURI.split("/").pop()),i=t[0].comics.items.map(t=>t.resourceURI.split("/").pop());for(let e=0;e<3;e+=1){let o=i[e],a=r[e];t[0][`comic${e}`]=await (0,n.api).getComicById({comicId:o}),t[0][`series${e}`]=await (0,n.api).getSeriesById({seriesId:a})}c.innerHTML="";let a=`
  ${m(t[0])}
  ${y(t[0])}
`;d.style.visibility="visible",u.innerHTML=a,l.classList.remove("display-is-hidden"),(0,o.hideLoader)()}catch(t){(0,o.hideLoader)(),(0,s.Notify).failure("No information available")}},m=t=>{let{thumbnail:e,series0:r,series1:n,series2:i,name:o}=t,a=`
    <div class="wraper-characters">
          <img
            class="modal-characters-primary-img"
            src="${e.path}.${e.extension}"
            alt="${o}"
          />
          <div class="modal-slide">
            <ul class="modal-characters-list">
               <li>
            <img
              class="modal-characters-small-img"
              src="${r[0].thumbnail.path}.${r[0].thumbnail.extension}" 
              alt="${o}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${n[0].thumbnail.path}.${n[0].thumbnail.extension}" 
              alt="${o}"
              width="80"
              height="80"
            />
          </li>
           <li>
            <img
              class="modal-characters-small-img"
              src="${i[0].thumbnail.path}.${i[0].thumbnail.extension}" 
              alt="${o}"
              width="80"
              height="80"
            />
          </li>
            </ul>
          </div>
        </div> 
        `;return a},y=t=>{let{id:e,thumbnail:r,name:n,description:i,modified:o,comics:a,comic0:s,comic1:l,comic2:f}=t;0===s[0].creators.available&&s[0].creators.items.push({name:""}),0===l[0].creators.available&&l[0].creators.items.push({name:""}),0===f[0].creators.available&&f[0].creators.items.push({name:""});let u=new Date(o).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),c=`
  <div class="wraper-comics">
     <div class="comics-title-date">
        <h1 class="comics-name-title">${n}</h1>
        <p class="comics-date">${u}</p>
      </div>
      <p class="comics-description">${i}</p>
      <h2 class="comics-list-title">List of comics</h2>
      <ul class="comics-list ">
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${s[0].thumbnail.path}.${s[0].thumbnail.extension}"
            alt="${s[0].name}"
            data-id="${s[0].id}"
          />
          <h3 class="comics-title"  data-id="${s[0].id}">${s[0].title}</h3>
          <p class="comics-creator-name"  data-id="${s[0].id}">${s[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${l[0].thumbnail.path}.${l[0].thumbnail.extension}"
            alt="${l[0].name}"
            data-id="${l[0].id}"
          />
          <h3 class="comics-title" data-id="${l[0].id}">${l[0].title}</h3>
          <p class="comics-creator-name" data-id="${l[0].id}">${l[0].creators.items[0].name}</p>
        </li>
        <li class="comics-list-item">
          <img
            class="modal-comics-img"
            src="${f[0].thumbnail.path}.${f[0].thumbnail.extension}"
            alt="${f[0].name}"
            data-id="${f[0].id}"
          />
          <h3 class="comics-title"  data-id="${f[0].id}">${f[0].title}</h3>
          <p class="comics-creator-name"  data-id="${f[0].id}">${f[0].creators.items[0].name}"</p>
        </li>
      </ul>
  </div>
     `;return c}}),i.register("iQIUW",function(t,r){var n,i;n=void 0!==e?e:"undefined"!=typeof window?window:t.exports,i=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var e,r={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},n={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},i=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},o=function(e){return e||(e="head"),null!==t.document[e]||(i('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},a=function(e,r){// check doc head
if(!o("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(r)){var n=t.document.createElement("style");n.id=r,n.innerHTML=e(),t.document.head.appendChild(n)}},s=function(){// variables
var t={},e=!1,r=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);r<arguments.length;r++)!function(r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e&&"[object Object]"===Object.prototype.toString.call(r[n])?t[n]=s(t[n],r[n]):t[n]=r[n])}(arguments[r]);return t},l=function(e){var r=t.document.createElement("div");return r.innerHTML=e,r.textContent||r.innerText||""},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},u=0,c=function(i,a,f,c){// check doc body
if(!o("body"))return!1;e||d.Notify.init({});// create a backup for new settings
var p=s(!0,e,{});// check callbackOrOptions and options: begin
if("object"==typeof f&&!Array.isArray(f)||"object"==typeof c&&!Array.isArray(c)){// new options
var h={};"object"==typeof f?h=f:"object"==typeof c&&(h=c),// extend new settings with the new options
e=s(!0,e,h)}// check callbackOrOptions and options: end
// notify type
var m=e[i.toLocaleLowerCase("en")];// notify counter
u++,"string"!=typeof a&&(a="Notiflix "+i),e.plainText&&(a=l(a)),!e.plainText&&a.length>e.messageMaxLength&&(// extend settings for error massege
e=s(!0,e,{closeButton:!0,messageMaxLength:150}),// error message
a='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),a.length>e.messageMaxLength&&(a=a.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(m.fontAwesomeIconColor=m.background),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var y=t.document.getElementById(n.wrapID)||t.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(y.id=n.wrapID,y.style.width=e.width,y.style.zIndex=e.zindex,y.style.opacity=e.opacity,"center-center"===e.position?(y.style.left=e.distance,y.style.top=e.distance,y.style.right=e.distance,y.style.bottom=e.distance,y.style.margin="auto",y.classList.add("nx-flex-center-center"),y.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.justifyContent="center",y.style.alignItems="center",y.style.pointerEvents="none"):"center-top"===e.position?(y.style.left=e.distance,y.style.right=e.distance,y.style.top=e.distance,y.style.bottom="auto",y.style.margin="auto"):"center-bottom"===e.position?(y.style.left=e.distance,y.style.right=e.distance,y.style.bottom=e.distance,y.style.top="auto",y.style.margin="auto"):"right-bottom"===e.position?(y.style.right=e.distance,y.style.bottom=e.distance,y.style.top="auto",y.style.left="auto"):"left-top"===e.position?(y.style.left=e.distance,y.style.top=e.distance,y.style.right="auto",y.style.bottom="auto"):"left-bottom"===e.position?(y.style.left=e.distance,y.style.bottom=e.distance,y.style.top="auto",y.style.right="auto"):(y.style.right=e.distance,y.style.top=e.distance,y.style.left="auto",y.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(n.overlayID)||t.document.createElement("div");g.id=n.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=m.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(n.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(n.wrapID)||t.document.body.appendChild(y);// notify wrap: end
// notify content: begin
var b=t.document.createElement("div");b.id=e.ID+"-"+u,b.className=e.className+" "+m.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),b.style.fontSize=e.fontSize,b.style.color=m.textColor,b.style.background=m.background,b.style.borderRadius=e.borderRadius,b.style.pointerEvents="all",e.rtl&&(b.setAttribute("dir","rtl"),b.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
b.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(b.style.animationDuration=e.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var x="";// close buttpon element: end
// use icon: begin
if(e.closeButton&&"function"!=typeof f&&(x='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+m.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon){// use font awesome
if(e.useFontAwesome)b.innerHTML='<i style="color:'+m.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+m.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+a+"</span>"+(e.closeButton?x:"");else{var w="";i===r.Success?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===r.Failure?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===r.Warning?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===r.Info&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),b.innerHTML=w+'<span class="nx-message nx-with-icon">'+a+"</span>"+(e.closeButton?x:"")}}else b.innerHTML='<span class="nx-message">'+a+"</span>"+(e.closeButton?x:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===e.position||"right-bottom"===e.position){var v=t.document.getElementById(n.wrapID);v.insertBefore(b,v.firstChild)}else t.document.getElementById(n.wrapID).appendChild(b);// notify append or prepend: end
// remove by timeout or click: begin
var E=t.document.getElementById(b.id);if(E){// hide notify elm and hide overlay: begin
var A,B,N=function(){E.classList.add("nx-remove");var e=t.document.getElementById(n.overlayID);e&&y.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(A)},S=function(){if(E&&null!==E.parentNode&&E.parentNode.removeChild(E),y.childElementCount<=0&&null!==y.parentNode){y.parentNode.removeChild(y);var e=t.document.getElementById(n.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(B)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(b.id).querySelector("span.nx-close-button").addEventListener("click",function(){N();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),("function"==typeof f||e.clickToClose)&&E.addEventListener("click",function(){"function"==typeof f&&f(),N();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof f){// auto remove: begin
var O=function(){A=setTimeout(function(){N()},e.timeout),B=setTimeout(function(){S()},e.timeout+e.cssAnimationDuration)};O(),e.pauseOnHover&&(E.addEventListener("mouseenter",function(){E.classList.add("nx-paused"),clearTimeout(A),clearTimeout(B)}),E.addEventListener("mouseleave",function(){E.classList.remove("nx-paused"),O()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(e.showOnlyTheLastOne&&u>0)for(var T=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+u+"])"),I=0;I<T.length;I++){var k=T[I];null!==k.parentNode&&k.parentNode.removeChild(k)}// notify - show only the last one: end
// extend new settings with the backup settings
e=s(!0,e,p)},d={Notify:{// Init
init:function(t){// extend options
e=s(!0,n,t),// internal css if exist
a(f,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return i("You have to initialize the Notify module before call Merge function."),!1;e=s(!0,e,t)},// Success
success:function(t,e,n){c(r.Success,t,e,n)},// Failure
failure:function(t,e,n){c(r.Failure,t,e,n)},// Warning
warning:function(t,e,n){c(r.Warning,t,e,n)},// Info
info:function(t,e,n){c(r.Info,t,e,n)}}};return"object"==typeof t.Notiflix?s(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],function(){return i(n)}):"object"==typeof t.exports?t.exports=i(n):n.Notiflix=i(n)});//# sourceMappingURL=characters.cee11915.js.map

//# sourceMappingURL=characters.cee11915.js.map
