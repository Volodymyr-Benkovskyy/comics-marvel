let t;var e,r,n,o,i,s,a,u,f,l,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},h={},p={},d=c.parcelRequirece98;function g(t,e){return function(){return t.apply(e,arguments)}}null==d&&((d=function(t){if(t in h)return h[t].exports;if(t in p){var e=p[t];delete p[t];var r={id:t,exports:{}};return h[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){p[t]=e},c.parcelRequirece98=d),d.register("fSg2G",function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={// Bit-wise rotation left
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
bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?e.push(r.charAt(o>>>6*(3-i)&63)):e.push("=");return e.join("")},// Convert a base-64 string to a byte array
base64ToBytes:function(t){// Remove non-base-64 characters
t=t.replace(/[^A-Z0-9+\/]/ig,"");for(var e=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(t.charAt(n))>>>6-2*o);return e}},t.exports=n}),d.register("28Nm5",function(t,e){var r={// UTF-8 encoding
utf8:{// Convert a string to a byte array
stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},// Convert a byte array to a string
bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},// Binary encoding
bin:{// Convert a string to a byte array
stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},// Convert a byte array to a string
bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r}),d.register("c8cSi",function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
t.exports=function(t){return null!=t&&(r(t)||"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))||!!t._isBuffer)}});// utils is a library of generic helper functions non-specific to axios
const{toString:y}=Object.prototype,{getPrototypeOf:m}=Object,b=(e=Object.create(null),t=>{let r=y.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),w=t=>(t=t.toLowerCase(),e=>b(e)===t),E=t=>e=>typeof e===t,{isArray:A}=Array,O=E("undefined"),v=w("ArrayBuffer"),B=E("string"),S=E("function"),R=E("number"),T=t=>null!==t&&"object"==typeof t,U=t=>{if("object"!==b(t))return!1;let e=m(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},C=w("Date"),x=w("File"),I=w("Blob"),N=w("FileList"),_=w("URLSearchParams");/**
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
 */function L(t,e,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),A(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;for(n=0;n<s;n++)o=i[n],e.call(null,t[o],o,t)}}}function P(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}const j=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:c,F=t=>!O(t)&&t!==j,D=(r="undefined"!=typeof Uint8Array&&m(Uint8Array),t=>r&&t instanceof r),k=w("HTMLFormElement"),M=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),$=w("RegExp"),q=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};L(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},z="abcdefghijklmnopqrstuvwxyz",H="0123456789",W={DIGIT:H,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+H},J=w("AsyncFunction");var V={isArray:A,isArrayBuffer:v,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!O(t)&&null!==t.constructor&&!O(t.constructor)&&S(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||S(t.append)&&("formdata"===(e=b(t))||// detect form-data instance
"object"===e&&S(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&v(t.buffer)},isString:B,isNumber:R,isBoolean:t=>!0===t||!1===t,isObject:T,isPlainObject:U,isUndefined:O,isDate:C,isFile:x,isBlob:I,isRegExp:$,isFunction:S,isStream:t=>T(t)&&S(t.pipe),isURLSearchParams:_,isTypedArray:D,isFileList:N,forEach:L,merge:/**
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
 */function t(){let{caseless:e}=F(this)&&this||{},r={},n=(n,o)=>{let i=e&&P(r,o)||o;U(r[i])&&U(n)?r[i]=t(r[i],n):U(n)?r[i]=t({},n):A(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&L(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(L(e,(e,n)=>{r&&S(e)?t[n]=g(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)s=o[i],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&m(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:b,kindOfTest:w,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(A(t))return t;let e=t.length;if(!R(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],o=n.call(t);for(;(r=o.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:k,hasOwnProperty:M,hasOwnProp:M,reduceDescriptors:q,freezeMethods:t=>{q(t,(e,r)=>{// skip restricted props in strict mode
if(S(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(S(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(A(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:P,global:j,isContextDefined:F,ALPHABET:W,generateString:(t=16,e=W.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&S(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(T(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=A(t)?[]:{};return L(t,(t,e)=>{let i=r(t,n+1);O(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:J,isThenable:t=>t&&(T(t)||S(t))&&S(t.then)&&S(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function G(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}V.inherits(G,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const K=G.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Y[t]={value:t}}),Object.defineProperties(G,Y),Object.defineProperty(K,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
G.from=(t,e,r,n,o,i)=>{let s=Object.create(K);return V.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),G.call(s,t.message,e,r,n,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s},u=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push(X[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+X[n>>12&63]+X[n>>6&63]+X[63&n]);return o.join("")}(t,i,i+16383>s?s:i+16383));return 1===n?o.push(X[(e=t[r-1])>>2]+X[e<<4&63]+"=="):2===n&&o.push(X[(e=(t[r-2]<<8)+t[r-1])>>10]+X[e>>4&63]+X[e<<2&63]+"="),o.join("")};for(var X=[],Q=[],Z="undefined"!=typeof Uint8Array?Uint8Array:Array,tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",te=0,tr=tt.length;te<tr;++te)X[te]=tt[te],Q[tt.charCodeAt(te)]=te;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
Q["-".charCodeAt(0)]=62,Q["_".charCodeAt(0)]=63,f=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,f=u>>1,l=-7,c=r?o-1:0,h=r?-1:1,p=t[e+c];for(c+=h,i=p&(1<<-l)-1,p>>=-l,l+=a;l>0;i=256*i+t[e+c],c+=h,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=n;l>0;s=256*s+t[e+c],c+=h,l-=8);if(0===i)i=1-f;else{if(i===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),i-=f}return(p?-1:1)*s*Math.pow(2,i-n)},l=function(t,e,r,n,o,i){var s,a,u,f=8*i-o-1,l=(1<<f)-1,c=l>>1,h=23===o?5960464477539062e-23:0,p=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+c>=1?e+=h/u:e+=h*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(e*u-1)*Math.pow(2,o),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,f+=o;f>0;t[r+p]=255&s,p+=d,s/=256,f-=8);t[r+p-d]|=128*g};const tn="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function to(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,ti.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function ti(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return tu(t)}return ts(t,e,r)}function ts(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!ti.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|th(t,e),n=to(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tP(t,Uint8Array)){let e=new Uint8Array(t);return tl(e.buffer,e.byteOffset,e.byteLength)}return tf(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tP(t,ArrayBuffer)||t&&tP(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tP(t,SharedArrayBuffer)||t&&tP(t.buffer,SharedArrayBuffer)))return tl(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return ti.from(n,e,r);let o=function(t){var e;if(ti.isBuffer(t)){let e=0|tc(t.length),r=to(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?to(0):tf(t):"Buffer"===t.type&&Array.isArray(t.data)?tf(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return ti.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function ta(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function tu(t){return ta(t),to(t<0?0:0|tc(t))}function tf(t){let e=t.length<0?0:0|tc(t.length),r=to(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function tl(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),ti.prototype),n)}function tc(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function th(t,e){if(ti.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tP(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tN(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return t_(t).length;default:if(o)return n?-1:tN(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function tp(t,e,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=tj[t[n]];return o}(this,e,r);case"utf8":case"utf-8":return tm(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":var o,i;return o=e,i=r,0===o&&i===this.length?u(this):u(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}(this,e,r);default:if(n)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function td(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tg(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=ti.from(e,n)),ti.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:ty(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):ty(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function ty(t,e,r,n,o){let i,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function f(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let n=-1;for(i=r;i<a;i++)if(f(t,i)===f(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===u)return n*s}else -1!==n&&(i-=i-n),n=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){let r=!0;for(let n=0;n<u;n++)if(f(t,i+n)!==f(e,n)){r=!1;break}if(r)return i}return -1}function tm(t,e,r){r=Math.min(t.length,r);let n=[],o=e;for(;o<r;){let e=t[o],i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=r){let r,n,a,u;switch(s){case 1:e<128&&(i=e);break;case 2:(192&(r=t[o+1]))==128&&(u=(31&e)<<6|63&r)>127&&(i=u);break;case 3:r=t[o+1],n=t[o+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(i=u);break;case 4:r=t[o+1],n=t[o+2],a=t[o+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(i=u)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,s=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tb(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function tw(t,e,r,n,o,i){if(!ti.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function tE(t,e,r,n,o){tU(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function tA(t,e,r,n,o){tU(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function tO(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tv(t,e,r,n,o){return e=+e,r>>>=0,o||tO(t,e,r,4,34028234663852886e22,-34028234663852886e22),l(t,e,r,n,23,4),r+4}function tB(t,e,r,n,o){return e=+e,r>>>=0,o||tO(t,e,r,8,17976931348623157e292,-17976931348623157e292),l(t,e,r,n,52,8),r+8}/**
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
 */ti.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),ti.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ti.prototype,"parent",{enumerable:!0,get:function(){if(ti.isBuffer(this))return this.buffer}}),Object.defineProperty(ti.prototype,"offset",{enumerable:!0,get:function(){if(ti.isBuffer(this))return this.byteOffset}}),ti.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ti.from=function(t,e,r){return ts(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(ti.prototype,Uint8Array.prototype),Object.setPrototypeOf(ti,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ti.alloc=function(t,e,r){return(ta(t),t<=0)?to(t):void 0!==e?"string"==typeof r?to(t).fill(e,r):to(t).fill(e):to(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ti.allocUnsafe=function(t){return tu(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ti.allocUnsafeSlow=function(t){return tu(t)},ti.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==ti.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},ti.compare=function(t,e){if(tP(t,Uint8Array)&&(t=ti.from(t,t.offset,t.byteLength)),tP(e,Uint8Array)&&(e=ti.from(e,e.offset,e.byteLength)),!ti.isBuffer(t)||!ti.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},ti.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ti.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return ti.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=ti.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){let e=t[r];if(tP(e,Uint8Array))o+e.length>n.length?(ti.isBuffer(e)||(e=ti.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else if(ti.isBuffer(e))e.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=e.length}return n},ti.byteLength=th,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
ti.prototype._isBuffer=!0,ti.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)td(this,e,e+1);return this},ti.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)td(this,e,e+3),td(this,e+1,e+2);return this},ti.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)td(this,e,e+7),td(this,e+1,e+6),td(this,e+2,e+5),td(this,e+3,e+4);return this},ti.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?tm(this,0,t):tp.apply(this,arguments)},ti.prototype.toLocaleString=ti.prototype.toString,ti.prototype.equals=function(t){if(!ti.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===ti.compare(this,t)},ti.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},tn&&(ti.prototype[tn]=ti.prototype.inspect),ti.prototype.compare=function(t,e,r,n,o){if(tP(t,Uint8Array)&&(t=ti.from(t,t.offset,t.byteLength)),!ti.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;let i=o-n,s=r-e,a=Math.min(i,s),u=this.slice(n,o),f=t.slice(e,r);for(let t=0;t<a;++t)if(u[t]!==f[t]){i=u[t],s=f[t];break}return i<s?-1:s<i?1:0},ti.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},ti.prototype.indexOf=function(t,e,r){return tg(this,t,e,r,!0)},ti.prototype.lastIndexOf=function(t,e,r){return tg(this,t,e,r,!1)},ti.prototype.write=function(t,e,r,n){var o,i,s,a,u,f,l,c;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let o;r=Number(r)||0;let i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;let s=e.length;for(n>s/2&&(n=s/2),o=0;o<n;++o){let n=parseInt(e.substr(2*o,2),16);if(n!=n)break;t[r+o]=n}return o}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,tL(tN(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=e,a=r,tL(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,f=r,tL(t_(t),this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=e,c=r,tL(function(t,e){let r,n;let o=[];for(let i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-l),this,l,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},ti.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ti.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,ti.prototype),n)},ti.prototype.readUintLE=ti.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},ti.prototype.readUintBE=ti.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},ti.prototype.readUint8=ti.prototype.readUInt8=function(t,e){return t>>>=0,e||tb(t,1,this.length),this[t]},ti.prototype.readUint16LE=ti.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tb(t,2,this.length),this[t]|this[t+1]<<8},ti.prototype.readUint16BE=ti.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tb(t,2,this.length),this[t]<<8|this[t+1]},ti.prototype.readUint32LE=ti.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tb(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},ti.prototype.readUint32BE=ti.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tb(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},ti.prototype.readBigUInt64LE=tF(function(t){tC(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tx(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),ti.prototype.readBigUInt64BE=tF(function(t){tC(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tx(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),ti.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},ti.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},ti.prototype.readInt8=function(t,e){return(t>>>=0,e||tb(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},ti.prototype.readInt16LE=function(t,e){t>>>=0,e||tb(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},ti.prototype.readInt16BE=function(t,e){t>>>=0,e||tb(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},ti.prototype.readInt32LE=function(t,e){return t>>>=0,e||tb(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},ti.prototype.readInt32BE=function(t,e){return t>>>=0,e||tb(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},ti.prototype.readBigInt64LE=tF(function(t){tC(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tx(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),ti.prototype.readBigInt64BE=tF(function(t){tC(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tx(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),ti.prototype.readFloatLE=function(t,e){return t>>>=0,e||tb(t,4,this.length),f(this,t,!0,23,4)},ti.prototype.readFloatBE=function(t,e){return t>>>=0,e||tb(t,4,this.length),f(this,t,!1,23,4)},ti.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tb(t,8,this.length),f(this,t,!0,52,8)},ti.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tb(t,8,this.length),f(this,t,!1,52,8)},ti.prototype.writeUintLE=ti.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tw(this,t,e,r,n,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},ti.prototype.writeUintBE=ti.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tw(this,t,e,r,n,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},ti.prototype.writeUint8=ti.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,1,255,0),this[e]=255&t,e+1},ti.prototype.writeUint16LE=ti.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},ti.prototype.writeUint16BE=ti.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},ti.prototype.writeUint32LE=ti.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},ti.prototype.writeUint32BE=ti.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},ti.prototype.writeBigUInt64LE=tF(function(t,e=0){return tE(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),ti.prototype.writeBigUInt64BE=tF(function(t,e=0){return tA(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),ti.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);tw(this,t,e,r,n-1,-n)}let o=0,i=1,s=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},ti.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);tw(this,t,e,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},ti.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},ti.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},ti.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},ti.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},ti.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},ti.prototype.writeBigInt64LE=tF(function(t,e=0){return tE(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ti.prototype.writeBigInt64BE=tF(function(t,e=0){return tA(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ti.prototype.writeFloatLE=function(t,e,r){return tv(this,t,e,!0,r)},ti.prototype.writeFloatBE=function(t,e,r){return tv(this,t,e,!1,r)},ti.prototype.writeDoubleLE=function(t,e,r){return tB(this,t,e,!0,r)},ti.prototype.writeDoubleBE=function(t,e,r){return tB(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
ti.prototype.copy=function(t,e,r,n){if(!ti.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
ti.prototype.fill=function(t,e,r,n){let o;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ti.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{let i=ti.isBuffer(t)?t:ti.from(t,n),s=i.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const tS={};function tR(t,e,r){tS[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tT(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function tU(t,e,r,n,o,i){if(t>r||t<e){let n;let o="bigint"==typeof e?"n":"";throw n=i>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:`>= -(2${o} ** ${(i+1)*8-1}${o}) and < 2 ** ${(i+1)*8-1}${o}`:`>= ${e}${o} and <= ${r}${o}`,new tS.ERR_OUT_OF_RANGE("value",n,t)}tC(o,"offset"),(void 0===n[o]||void 0===n[o+i])&&tx(o,n.length-(i+1))}function tC(t,e){if("number"!=typeof t)throw new tS.ERR_INVALID_ARG_TYPE(e,"number",t)}function tx(t,e,r){if(Math.floor(t)!==t)throw tC(t,r),new tS.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new tS.ERR_BUFFER_OUT_OF_BOUNDS;throw new tS.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}tR("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tR("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tR("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=tT(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=tT(o)),o+="n"),n+=` It must be ${e}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
const tI=/[^+/0-9A-Za-z-_]/g;function tN(t,e){let r;e=e||1/0;let n=t.length,o=null,i=[];for(let s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function t_(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],s=new Z((o+i)*3/4-i),a=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)e=Q[t.charCodeAt(r)]<<18|Q[t.charCodeAt(r+1)]<<12|Q[t.charCodeAt(r+2)]<<6|Q[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===i&&(e=Q[t.charCodeAt(r)]<<2|Q[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===i&&(e=Q[t.charCodeAt(r)]<<10|Q[t.charCodeAt(r+1)]<<4|Q[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tI,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tL(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tP(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const tj=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();// Return not function with Error if BigInt not supported
function tF(t){return"undefined"==typeof BigInt?tD:t}function tD(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tk(t){return V.isPlainObject(t)||V.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tM(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function t$(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tM(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}const tq=V.toFlatObject(V,{},null,function(t){return/^is[A-Z]/.test(t)});var tz=/**
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
 */function(t,e,r){if(!V.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=V.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!V.isUndefined(e[t])});let n=r.metaTokens,o=r.visitor||l,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&V.isSpecCompliantForm(e);if(!V.isFunction(o))throw TypeError("visitor must be a function");function f(t){if(null===t)return"";if(V.isDate(t))return t.toISOString();if(!u&&V.isBlob(t))throw new G("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(t)||V.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):ti.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function l(t,r,o){let a=t;if(t&&!o&&"object"==typeof t){if(V.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if(V.isArray(t)&&(u=t,V.isArray(u)&&!u.some(tk))||(V.isFileList(t)||V.endsWith(r,"[]"))&&(a=V.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tM(r),a.forEach(function(t,n){V.isUndefined(t)||null===t||e.append(!0===s?t$([r],n,i):null===s?r:r+"[]",f(t))}),!1)}}return!!tk(t)||(e.append(t$(o,r,i),f(t)),!1)}let c=[],h=Object.assign(tq,{defaultVisitor:l,convertValue:f,isVisitable:tk});if(!V.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!V.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),V.forEach(r,function(r,i){let s=!(V.isUndefined(r)||null===r)&&o.call(e,r,V.isString(i)?i.trim():i,n,h);!0===s&&t(r,n?n.concat(i):[i])}),c.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tH(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tW(t,e){this._pairs=[],t&&tz(t,this,e)}const tJ=tW.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tV(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tG(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let o=r&&r.encode||tV,i=r&&r.serialize;if(n=i?i(e,r):V.isURLSearchParams(e)?e.toString():new tW(e,r).toString(o)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tJ.append=function(t,e){this._pairs.push([t,e])},tJ.toString=function(t){let e=t?function(e){return t.call(this,e,tH)}:tH;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tK=class{constructor(){this.handlers=[]}/**
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
   */forEach(t){V.forEach(this.handlers,function(e){null!==e&&t(e)})}},tY={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tX="undefined"!=typeof URLSearchParams?URLSearchParams:tW,tQ="undefined"!=typeof FormData?FormData:null,tZ="undefined"!=typeof Blob?Blob:null;/**
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
 */const t0=("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document,t1="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t2={classes:{URLSearchParams:tX,FormData:tQ,Blob:tZ},isStandardBrowserEnv:t0,isStandardBrowserWebWorkerEnv:t1,protocols:["http","https","file","blob","url","data"]},t6=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(V.isFormData(t)&&V.isFunction(t.entries)){let e={};return V.forEachEntry(t,(t,r)=>{!function t(e,r,n,o){let i=e[o++],s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&V.isArray(n)?n.length:i,a)return V.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&V.isObject(n[i])||(n[i]=[]);let u=t(e,r,n[i],o);return u&&V.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(n[i])),!s}(V.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};const t5={transitional:tY,adapter:t2.isNode?"http":"xhr",transformRequest:[function(t,e){let r;let n=e.getContentType()||"",o=n.indexOf("application/json")>-1,i=V.isObject(t);i&&V.isHTMLForm(t)&&(t=new FormData(t));let s=V.isFormData(t);if(s)return o&&o?JSON.stringify(t6(t)):t;if(V.isArrayBuffer(t)||V.isBuffer(t)||V.isStream(t)||V.isFile(t)||V.isBlob(t))return t;if(V.isArrayBufferView(t))return t.buffer;if(V.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=t,u=this.formSerializer,tz(a,new t2.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return t2.isNode&&V.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=V.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tz(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||o?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(V.isString(t))try{return(0,JSON.parse)(t),V.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t5.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&V.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw G.from(t,G.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t2.classes.FormData,Blob:t2.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],t=>{t5.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const t4=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */t3=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&t4[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o};const t8=Symbol("internals");function t7(t){return t&&String(t).trim().toLowerCase()}function t9(t){return!1===t||null==t?t:V.isArray(t)?t.map(t9):String(t)}const et=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ee(t,e,r,n,o){if(V.isFunction(n))return n.call(this,e,r);if(o&&(e=r),V.isString(e)){if(V.isString(n))return -1!==e.indexOf(n);if(V.isRegExp(n))return n.test(e)}}class er{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function o(t,e,r){let o=t7(e);if(!o)throw Error("header name must be a non-empty string");let i=V.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||e]=t9(t))}let i=(t,e)=>V.forEach(t,(t,r)=>o(t,r,e));return V.isPlainObject(t)||t instanceof this.constructor?i(t,e):V.isString(t)&&(t=t.trim())&&!et(t)?i(t3(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=t7(t)){let r=V.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(V.isFunction(e))return e.call(this,t,r);if(V.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t7(t)){let r=V.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||ee(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function o(t){if(t=t7(t)){let o=V.findKey(r,t);o&&(!e||ee(r,r[o],o,e))&&(delete r[o],n=!0)}}return V.isArray(t)?t.forEach(o):o(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return V.forEach(this,(n,o)=>{let i=V.findKey(r,o);if(i){e[i]=t9(n),delete e[o];return}let s=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(o).trim();s!==o&&delete e[o],e[s]=t9(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return V.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&V.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[t8]=this[t8]={accessors:{}},r=e.accessors,n=this.prototype;function o(t){let e=t7(t);r[e]||(!function(t,e){let r=V.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(n,t),r[e]=!0)}return V.isArray(t)?t.forEach(o):o(t),this}}function en(t,e){let r=this||t5,n=e||r,o=er.from(n.headers),i=n.data;return V.forEach(t,function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function eo(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function ei(t,e,r){G.call(this,null==t?"canceled":t,G.ERR_CANCELED,e,r),this.name="CanceledError"}er.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.reduceDescriptors(er.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),V.freezeMethods(er),V.inherits(ei,G,{__CANCEL__:!0});var es=t2.isStandardBrowserEnv?{write:function(t,e,r,n,o,i){let s=[];s.push(t+"="+encodeURIComponent(e)),V.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),V.isString(n)&&s.push("path="+n),V.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ea(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var eu=t2.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=n(window.location.href),function(e){let r=V.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},ef=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),o=Array(t),i=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),f=o[s];r||(r=u),n[i]=a,o[i]=u;let l=s,c=0;for(;l!==i;)c+=n[l++],l%=t;if((i=(i+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let h=f&&u-f;return h?Math.round(1e3*c/h):void 0}};function el(t,e){let r=0,n=ef(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a),f=i<=s;r=i;let l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&f?(s-i)/u:void 0,event:o};l[e?"download":"upload"]=!0,t(l)}}const ec="undefined"!=typeof XMLHttpRequest;var eh=ec&&function(t){return new Promise(function(e,r){let n,o=t.data,i=er.from(t.headers).normalize(),s=t.responseType;function a(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}V.isFormData(o)&&(t2.isStandardBrowserEnv||t2.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+r))}let f=ea(t.baseURL,t.url);function l(){if(!u)return;// Prepare the response
let n=er.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?u.response:u.responseText,i={data:o,status:u.status,statusText:u.statusText,headers:n,config:t,request:u};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new G("Request failed with status code "+r.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),a()},function(t){r(t),a()},i),// Clean up request
u=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(u.open(t.method.toUpperCase(),tG(f,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
u.timeout=t.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(l)},// Handle browser request cancellation (as opposed to a manual cancellation)
u.onabort=function(){u&&(r(new G("Request aborted",G.ECONNABORTED,t,u)),// Clean up request
u=null)},// Handle low level network errors
u.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new G("Network Error",G.ERR_NETWORK,t,u)),// Clean up request
u=null},// Handle timeout
u.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tY;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new G(e,n.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,u)),// Clean up request
u=null},t2.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||eu(f))&&t.xsrfCookieName&&es.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===o&&i.setContentType(null),"setRequestHeader"in u&&V.forEach(i.toJSON(),function(t,e){u.setRequestHeader(e,t)}),V.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),s&&"json"!==s&&(u.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&u.addEventListener("progress",el(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",el(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{u&&(r(!e||e.type?new ei(null,t,u):e),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let c=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(f);if(c&&-1===t2.protocols.indexOf(c)){r(new G("Unsupported protocol "+c+":",G.ERR_BAD_REQUEST,t));return}// Send the request
u.send(o||null)})};const ep={http:null,xhr:eh};V.forEach(ep,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var ed={getAdapter:t=>{let e,r;t=V.isArray(t)?t:[t];let{length:n}=t;for(let o=0;o<n&&(e=t[o],!(r=V.isString(e)?ep[e.toLowerCase()]:e));o++);if(!r){if(!1===r)throw new G(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(V.hasOwnProp(ep,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!V.isFunction(r))throw TypeError("adapter is not a function");return r},adapters:ep};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eg(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ei(null,t)}function ey(t){eg(t),t.headers=er.from(t.headers),// Transform request data
t.data=en.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=ed.getAdapter(t.adapter||t5.adapter);return e(t).then(function(e){return eg(t),// Transform response data
e.data=en.call(t,t.transformResponse,e),e.headers=er.from(e.headers),e},function(e){return!eo(e)&&(eg(t),e&&e.response&&(e.response.data=en.call(t,t.transformResponse,e.response),e.response.headers=er.from(e.response.headers))),Promise.reject(e)})}const em=t=>t instanceof er?t.toJSON():t;function eb(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return V.isPlainObject(t)&&V.isPlainObject(e)?V.merge.call({caseless:r},t,e):V.isPlainObject(e)?V.merge({},e):V.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,r){return V.isUndefined(e)?V.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function i(t,e){if(!V.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return V.isUndefined(e)?V.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}let u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(em(t),em(e),!0)};return V.forEach(Object.keys(Object.assign({},t,e)),function(n){let i=u[n]||o,s=i(t[n],e[n],n);V.isUndefined(s)&&i!==a||(r[n]=s)}),r}const ew="1.5.0",eE={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eE[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const eA={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */eE.transitional=function(t,e,r){function n(t,e){return"[Axios v"+ew+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===t)throw new G(n(o," has been removed"+(e?" in "+e:"")),G.ERR_DEPRECATED);return e&&!eA[o]&&(eA[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var eO={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let i=n[o],s=e[i];if(s){let e=t[i],r=void 0===e||s(e,i,t);if(!0!==r)throw new G("option "+i+" must be "+r,G.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}},validators:eE};const ev=eO.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eB{constructor(t){this.defaults=t,this.interceptors={request:new tK,response:new tK}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=eb(this.defaults,e);let{transitional:o,paramsSerializer:i,headers:s}=e;void 0!==o&&eO.assertOptions(o,{silentJSONParsing:ev.transitional(ev.boolean),forcedJSONParsing:ev.transitional(ev.boolean),clarifyTimeoutError:ev.transitional(ev.boolean)},!1),null!=i&&(V.isFunction(i)?e.paramsSerializer={serialize:i}:eO.assertOptions(i,{encode:ev.function,serialize:ev.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&V.merge(s.common,s[e.method]);s&&V.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=er.concat(a,s);// filter out skipped interceptors
let u=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let l=[];this.interceptors.response.forEach(function(t){l.push(t.fulfilled,t.rejected)});let c=0;if(!f){let t=[ey.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,l),n=t.length,r=Promise.resolve(e);c<n;)r=r.then(t[c++],t[c++]);return r}n=u.length;let h=e;for(c=0;c<n;){let t=u[c++],e=u[c++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=ey.call(this,h)}catch(t){return Promise.reject(t)}for(c=0,n=l.length;c<n;)r=r.then(l[c++],l[c++]);return r}getUri(t){t=eb(this.defaults,t);let e=ea(t.baseURL,t.url);return tG(e,t.params,t.paramsSerializer)}}V.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eB.prototype[t]=function(e,r){return this.request(eb(r||{},{method:t,url:e,data:(r||{}).data}))}}),V.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request(eb(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}eB.prototype[t]=e(),eB.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eS{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,o){r.reason||(r.reason=new ei(t,n,o),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eS(function(e){t=e});return{token:e,cancel:t}}}const eR={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eR).forEach(([t,e])=>{eR[e]=t});// Create the default instance to be exported
const eT=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new eB(e),n=g(eB.prototype.request,r);return V.extend(n,eB.prototype,r,{allOwnKeys:!0}),V.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(eb(e,r))},n}(t5);// Expose Axios class to allow class inheritance
eT.Axios=eB,// Expose Cancel & CancelToken
eT.CanceledError=ei,eT.CancelToken=eS,eT.isCancel=eo,eT.VERSION=ew,eT.toFormData=tz,// Expose AxiosError class
eT.AxiosError=G,// alias for CanceledError for backward compatibility
eT.Cancel=eT.CanceledError,// Expose all/spread
eT.all=function(t){return Promise.all(t)},eT.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eT.isAxiosError=function(t){return V.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eT.mergeConfig=eb,eT.AxiosHeaders=er,eT.formToJSON=t=>t6(V.isHTMLForm(t)?new FormData(t):t),eT.getAdapter=ed.getAdapter,eT.HttpStatusCode=eR,eT.default=eT;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:eU,AxiosError:eC,CanceledError:ex,isCancel:eI,CancelToken:eN,VERSION:e_,all:eL,Cancel:eP,isAxiosError:ej,spread:eF,toFormData:eD,AxiosHeaders:ek,HttpStatusCode:eM,formToJSON:e$,getAdapter:eq,mergeConfig:ez}=eT;var eH={};n=d("fSg2G"),o=d("28Nm5").utf8,i=d("c8cSi"),s=d("28Nm5").bin,// Auxiliary functions
(a=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?s.stringToBytes(t):o.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());// Swap endian
for(var r=n.bytesToWords(t),u=8*t.length,f=1732584193,l=-271733879,c=-1732584194,h=271733878,p=0;p<r.length;p++)r[p]=(r[p]<<8|r[p]>>>24)&16711935|(r[p]<<24|r[p]>>>8)&4278255360;// Padding
r[u>>>5]|=128<<u%32,r[(u+64>>>9<<4)+14]=u;for(var d=a._ff,g=a._gg,y=a._hh,m=a._ii,p=0;p<r.length;p+=16){var b=f,w=l,E=c,A=h;f=d(f,l,c,h,r[p+0],7,-680876936),h=d(h,f,l,c,r[p+1],12,-389564586),c=d(c,h,f,l,r[p+2],17,606105819),l=d(l,c,h,f,r[p+3],22,-1044525330),f=d(f,l,c,h,r[p+4],7,-176418897),h=d(h,f,l,c,r[p+5],12,1200080426),c=d(c,h,f,l,r[p+6],17,-1473231341),l=d(l,c,h,f,r[p+7],22,-45705983),f=d(f,l,c,h,r[p+8],7,1770035416),h=d(h,f,l,c,r[p+9],12,-1958414417),c=d(c,h,f,l,r[p+10],17,-42063),l=d(l,c,h,f,r[p+11],22,-1990404162),f=d(f,l,c,h,r[p+12],7,1804603682),h=d(h,f,l,c,r[p+13],12,-40341101),c=d(c,h,f,l,r[p+14],17,-1502002290),l=d(l,c,h,f,r[p+15],22,1236535329),f=g(f,l,c,h,r[p+1],5,-165796510),h=g(h,f,l,c,r[p+6],9,-1069501632),c=g(c,h,f,l,r[p+11],14,643717713),l=g(l,c,h,f,r[p+0],20,-373897302),f=g(f,l,c,h,r[p+5],5,-701558691),h=g(h,f,l,c,r[p+10],9,38016083),c=g(c,h,f,l,r[p+15],14,-660478335),l=g(l,c,h,f,r[p+4],20,-405537848),f=g(f,l,c,h,r[p+9],5,568446438),h=g(h,f,l,c,r[p+14],9,-1019803690),c=g(c,h,f,l,r[p+3],14,-187363961),l=g(l,c,h,f,r[p+8],20,1163531501),f=g(f,l,c,h,r[p+13],5,-1444681467),h=g(h,f,l,c,r[p+2],9,-51403784),c=g(c,h,f,l,r[p+7],14,1735328473),l=g(l,c,h,f,r[p+12],20,-1926607734),f=y(f,l,c,h,r[p+5],4,-378558),h=y(h,f,l,c,r[p+8],11,-2022574463),c=y(c,h,f,l,r[p+11],16,1839030562),l=y(l,c,h,f,r[p+14],23,-35309556),f=y(f,l,c,h,r[p+1],4,-1530992060),h=y(h,f,l,c,r[p+4],11,1272893353),c=y(c,h,f,l,r[p+7],16,-155497632),l=y(l,c,h,f,r[p+10],23,-1094730640),f=y(f,l,c,h,r[p+13],4,681279174),h=y(h,f,l,c,r[p+0],11,-358537222),c=y(c,h,f,l,r[p+3],16,-722521979),l=y(l,c,h,f,r[p+6],23,76029189),f=y(f,l,c,h,r[p+9],4,-640364487),h=y(h,f,l,c,r[p+12],11,-421815835),c=y(c,h,f,l,r[p+15],16,530742520),l=y(l,c,h,f,r[p+2],23,-995338651),f=m(f,l,c,h,r[p+0],6,-198630844),h=m(h,f,l,c,r[p+7],10,1126891415),c=m(c,h,f,l,r[p+14],15,-1416354905),l=m(l,c,h,f,r[p+5],21,-57434055),f=m(f,l,c,h,r[p+12],6,1700485571),h=m(h,f,l,c,r[p+3],10,-1894986606),c=m(c,h,f,l,r[p+10],15,-1051523),l=m(l,c,h,f,r[p+1],21,-2054922799),f=m(f,l,c,h,r[p+8],6,1873313359),h=m(h,f,l,c,r[p+15],10,-30611744),c=m(c,h,f,l,r[p+6],15,-1560198380),l=m(l,c,h,f,r[p+13],21,1309151649),f=m(f,l,c,h,r[p+4],6,-145523070),h=m(h,f,l,c,r[p+11],10,-1120210379),c=m(c,h,f,l,r[p+2],15,718787259),l=m(l,c,h,f,r[p+9],21,-343485551),f=f+b>>>0,l=l+w>>>0,c=c+E>>>0,h=h+A>>>0}return n.endian([f,l,c,h])})._ff=function(t,e,r,n,o,i,s){var a=t+(e&r|~e&n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},a._gg=function(t,e,r,n,o,i,s){var a=t+(e&n|r&~n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},a._hh=function(t,e,r,n,o,i,s){var a=t+(e^r^n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},a._ii=function(t,e,r,n,o,i,s){var a=t+(r^(e|~n))+(o>>>0)+s;return(a<<i|a>>>32-i)+e},// Package private blocksize
a._blocksize=16,a._digestsize=16,eH=function(t,e){if(null==t)throw Error("Illegal argument "+t);var r=n.wordsToBytes(a(t,e));return e&&e.asBytes?r:e&&e.asString?s.bytesToString(r):n.bytesToHex(r)};const eW="efe513042744199e2ee71f94d9988717",eJ=eT.create({baseURL:"https://gateway.marvel.com/v1/public",params:{apikey:eW,hash:(({timeStamp:t,PUBLIC_KEY:e,PRIVATE_KEY:r})=>{var n;return((n=eH)&&n.__esModule?n.default:n)(`${t}${r}${e}`)})({timeStamp:1,PRIVATE_KEY:"5488535f3958164a14b37ef40df2b28b6e569641",PUBLIC_KEY:eW}),ts:1}}),eV={getCharacters:async({limit:t=20,offset:e=0,nameStartsWith:r="",comics:n="",orderBy:o="",modifiedSince:i=""})=>{try{let s=await eJ.get("/characters",{params:{...t&&{limit:t},...e&&{offset:e},...r&&{nameStartsWith:r},...n&&{comics:n},...o&&{orderBy:o},...i&&{modifiedSince:i}}}),a=s.data.data;return a}catch(t){return console.log(t),{error:t.message}}}},eG=document.querySelector(".js-header-form");let eK=null;eK=(()=>{let t={mobile:320,tablet:768};return window.innerWidth<=t.mobile?5:window.innerWidth<=t.tablet?8:16})();const eY=async t=>{t.preventDefault();let{target:e}=t,r=e.elements.searchQuery.value;if(eG.reset(),""!==r)try{await eV.getCharacters({nameStartsWith:r,limit:eK,offset:0})}catch(t){console.log("Error!",t)}};eG.addEventListener("submit",eY),new Swiper(".section-hero-swiper",{direction:"vertical",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:50,slidesPerView:1,initialSlide:0});const eX=document.querySelector(".swiper-pagination"),eQ=document.querySelector(".js-btn-color");eX.addEventListener("click",t=>{let{target:e}=t,r=e.getAttribute("aria-label"),n="";"Go to slide 1"===r?(n="#600404",eQ.style.background=n):"Go to slide 2"===r?(n="#34387f",eQ.style.background=n):"Go to slide 3"===r&&(n="#5b7f3c",eQ.style.background=n)});/* swiperSlideHero *///# sourceMappingURL=index.4e264615.js.map

//# sourceMappingURL=index.4e264615.js.map
