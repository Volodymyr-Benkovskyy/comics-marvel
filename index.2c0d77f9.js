let t;var e,r,n,i,o,s,a,u,l,f,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},h={},p={},d=c.parcelRequirece98;function g(t,e){return function(){return t.apply(e,arguments)}}null==d&&((d=function(t){if(t in h)return h[t].exports;if(t in p){var e=p[t];delete p[t];var r={id:t,exports:{}};return h[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){p[t]=e},c.parcelRequirece98=d),d.register("fSg2G",function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={// Bit-wise rotation left
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
t=t.replace(/[^A-Z0-9+\/]/ig,"");for(var e=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|r.indexOf(t.charAt(n))>>>6-2*i);return e}},t.exports=n}),d.register("28Nm5",function(t,e){var r={// UTF-8 encoding
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
const{toString:y}=Object.prototype,{getPrototypeOf:m}=Object,b=(e=Object.create(null),t=>{let r=y.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),w=t=>(t=t.toLowerCase(),e=>b(e)===t),E=t=>e=>typeof e===t,{isArray:v}=Array,A=E("undefined"),O=w("ArrayBuffer"),B=E("string"),S=E("function"),R=E("number"),T=t=>null!==t&&"object"==typeof t,x=t=>{if("object"!==b(t))return!1;let e=m(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},U=w("Date"),C=w("File"),j=w("Blob"),I=w("FileList"),L=w("URLSearchParams");/**
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
 */function N(t,e,{allOwnKeys:r=!1}={}){let n,i;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),v(t))for(n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else{let i;// Iterate over object keys
let o=r?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;for(n=0;n<s;n++)i=o[n],e.call(null,t[i],i,t)}}}function _(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),i=n.length;for(;i-- >0;)if(e===(r=n[i]).toLowerCase())return r;return null}const P=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:c,F=t=>!A(t)&&t!==P,D=(r="undefined"!=typeof Uint8Array&&m(Uint8Array),t=>r&&t instanceof r),$=w("HTMLFormElement"),k=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),M=w("RegExp"),q=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};N(r,(r,i)=>{let o;!1!==(o=e(r,i,t))&&(n[i]=o||r)}),Object.defineProperties(t,n)},z="abcdefghijklmnopqrstuvwxyz",H="0123456789",W={DIGIT:H,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+H},V=w("AsyncFunction");var J={isArray:v,isArrayBuffer:O,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!A(t)&&null!==t.constructor&&!A(t.constructor)&&S(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||S(t.append)&&("formdata"===(e=b(t))||// detect form-data instance
"object"===e&&S(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&O(t.buffer)},isString:B,isNumber:R,isBoolean:t=>!0===t||!1===t,isObject:T,isPlainObject:x,isUndefined:A,isDate:U,isFile:C,isBlob:j,isRegExp:M,isFunction:S,isStream:t=>T(t)&&S(t.pipe),isURLSearchParams:L,isTypedArray:D,isFileList:I,forEach:N,merge:/**
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
 */function t(){let{caseless:e}=F(this)&&this||{},r={},n=(n,i)=>{let o=e&&_(r,i)||i;x(r[o])&&x(n)?r[o]=t(r[o],n):x(n)?r[o]=t({},n):v(n)?r[o]=n.slice():r[o]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&N(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(N(e,(e,n)=>{r&&S(e)?t[n]=g(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let i,o,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(o=(i=Object.getOwnPropertyNames(t)).length;o-- >0;)s=i[o],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&m(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:b,kindOfTest:w,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(v(t))return t;let e=t.length;if(!R(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],i=n.call(t);for(;(r=i.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:$,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:q,freezeMethods:t=>{q(t,(e,r)=>{// skip restricted props in strict mode
if(S(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(S(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(v(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:_,global:P,isContextDefined:F,ALPHABET:W,generateString:(t=16,e=W.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&S(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(T(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let i=v(t)?[]:{};return N(t,(t,e)=>{let o=r(t,n+1);A(o)||(i[e]=o)}),e[n]=void 0,i}}return t};return r(t,0)},isAsyncFn:V,isThenable:t=>t&&(T(t)||S(t))&&S(t.then)&&S(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function K(t,e,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}J.inherits(K,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:J.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const G=K.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Y[t]={value:t}}),Object.defineProperties(K,Y),Object.defineProperty(G,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
K.from=(t,e,r,n,i,o)=>{let s=Object.create(G);return J.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),K.call(s,t.message,e,r,n,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s},u=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],o=0,s=r-n;o<s;o+=16383// must be multiple of 3
)i.push(function(t,e,r){for(var n,i=[],o=e;o<r;o+=3)i.push(Z[(n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]))>>18&63]+Z[n>>12&63]+Z[n>>6&63]+Z[63&n]);return i.join("")}(t,o,o+16383>s?s:o+16383));return 1===n?i.push(Z[(e=t[r-1])>>2]+Z[e<<4&63]+"=="):2===n&&i.push(Z[(e=(t[r-2]<<8)+t[r-1])>>10]+Z[e>>4&63]+Z[e<<2&63]+"="),i.join("")};for(var Z=[],X=[],Q="undefined"!=typeof Uint8Array?Uint8Array:Array,tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",te=0,tr=tt.length;te<tr;++te)Z[te]=tt[te],X[tt.charCodeAt(te)]=te;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
X["-".charCodeAt(0)]=62,X["_".charCodeAt(0)]=63,l=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,l=u>>1,f=-7,c=r?i-1:0,h=r?-1:1,p=t[e+c];for(c+=h,o=p&(1<<-f)-1,p>>=-f,f+=a;f>0;o=256*o+t[e+c],c+=h,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=n;f>0;s=256*s+t[e+c],c+=h,f-=8);if(0===o)o=1-l;else{if(o===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),o-=l}return(p?-1:1)*s*Math.pow(2,o-n)},f=function(t,e,r,n,i,o){var s,a,u,l=8*o-i-1,f=(1<<l)-1,c=f>>1,h=23===i?5960464477539062e-23:0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+c>=1?e+=h/u:e+=h*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=f?(a=0,s=f):s+c>=1?(a=(e*u-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;t[r+p]=255&s,p+=d,s/=256,l-=8);t[r+p-d]|=128*g};const tn="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function ti(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,to.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function to(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return tu(t)}return ts(t,e,r)}function ts(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!to.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|th(t,e),n=ti(r),i=n.write(t,e);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(t_(t,Uint8Array)){let e=new Uint8Array(t);return tf(e.buffer,e.byteOffset,e.byteLength)}return tl(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t_(t,ArrayBuffer)||t&&t_(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(t_(t,SharedArrayBuffer)||t&&t_(t.buffer,SharedArrayBuffer)))return tf(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return to.from(n,e,r);let i=function(t){var e;if(to.isBuffer(t)){let e=0|tc(t.length),r=ti(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?ti(0):tl(t):"Buffer"===t.type&&Array.isArray(t.data)?tl(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return to.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function ta(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function tu(t){return ta(t),ti(t<0?0:0|tc(t))}function tl(t){let e=t.length<0?0:0|tc(t.length),r=ti(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function tf(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),to.prototype),n)}function tc(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function th(t,e){if(to.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t_(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tI(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tL(t).length;default:if(i)return n?-1:tI(t).length// assume utf8
;e=(""+e).toLowerCase(),i=!0}}function tp(t,e,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=tP[t[n]];return i}(this,e,r);case"utf8":case"utf-8":return tm(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}(this,e,r);case"base64":var i,o;return i=e,o=r,0===i&&o===this.length?u(this):u(this.slice(i,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}(this,e,r);default:if(n)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function td(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tg(t,e,r,n,i){var o;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=to.from(e,n)),to.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:ty(t,e,r,n,i));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):ty(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function ty(t,e,r,n,i){let o,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let n=-1;for(o=r;o<a;o++)if(l(t,o)===l(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*s}else -1!==n&&(o-=o-n),n=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(l(t,o+n)!==l(e,n)){r=!1;break}if(r)return o}return -1}function tm(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let e=t[i],o=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=r){let r,n,a,u;switch(s){case 1:e<128&&(o=e);break;case 2:(192&(r=t[i+1]))==128&&(u=(31&e)<<6|63&r)>127&&(o=u);break;case 3:r=t[i+1],n=t[i+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=t[i+1],n=t[i+2],a=t[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(o=u)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,s=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tb(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function tw(t,e,r,n,i,o){if(!to.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function tE(t,e,r,n,i){tx(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function tv(t,e,r,n,i){tx(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function tA(t,e,r,n,i,o){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tO(t,e,r,n,i){return e=+e,r>>>=0,i||tA(t,e,r,4,34028234663852886e22,-34028234663852886e22),f(t,e,r,n,23,4),r+4}function tB(t,e,r,n,i){return e=+e,r>>>=0,i||tA(t,e,r,8,17976931348623157e292,-17976931348623157e292),f(t,e,r,n,52,8),r+8}/**
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
 */to.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),to.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(to.prototype,"parent",{enumerable:!0,get:function(){if(to.isBuffer(this))return this.buffer}}),Object.defineProperty(to.prototype,"offset",{enumerable:!0,get:function(){if(to.isBuffer(this))return this.byteOffset}}),to.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/to.from=function(t,e,r){return ts(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(to.prototype,Uint8Array.prototype),Object.setPrototypeOf(to,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/to.alloc=function(t,e,r){return(ta(t),t<=0)?ti(t):void 0!==e?"string"==typeof r?ti(t).fill(e,r):ti(t).fill(e):ti(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */to.allocUnsafe=function(t){return tu(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */to.allocUnsafeSlow=function(t){return tu(t)},to.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==to.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},to.compare=function(t,e){if(t_(t,Uint8Array)&&(t=to.from(t,t.offset,t.byteLength)),t_(e,Uint8Array)&&(e=to.from(e,e.offset,e.byteLength)),!to.isBuffer(t)||!to.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},to.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},to.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return to.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=to.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){let e=t[r];if(t_(e,Uint8Array))i+e.length>n.length?(to.isBuffer(e)||(e=to.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else if(to.isBuffer(e))e.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return n},to.byteLength=th,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
to.prototype._isBuffer=!0,to.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)td(this,e,e+1);return this},to.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)td(this,e,e+3),td(this,e+1,e+2);return this},to.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)td(this,e,e+7),td(this,e+1,e+6),td(this,e+2,e+5),td(this,e+3,e+4);return this},to.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?tm(this,0,t):tp.apply(this,arguments)},to.prototype.toLocaleString=to.prototype.toString,to.prototype.equals=function(t){if(!to.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===to.compare(this,t)},to.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},tn&&(to.prototype[tn]=to.prototype.inspect),to.prototype.compare=function(t,e,r,n,i){if(t_(t,Uint8Array)&&(t=to.from(t,t.offset,t.byteLength)),!to.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;let o=i-n,s=r-e,a=Math.min(o,s),u=this.slice(n,i),l=t.slice(e,r);for(let t=0;t<a;++t)if(u[t]!==l[t]){o=u[t],s=l[t];break}return o<s?-1:s<o?1:0},to.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},to.prototype.indexOf=function(t,e,r){return tg(this,t,e,r,!0)},to.prototype.lastIndexOf=function(t,e,r){return tg(this,t,e,r,!1)},to.prototype.write=function(t,e,r,n){var i,o,s,a,u,l,f,c;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let i;r=Number(r)||0;let o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;let s=e.length;for(n>s/2&&(n=s/2),i=0;i<n;++i){let n=parseInt(e.substr(2*i,2),16);if(n!=n)break;t[r+i]=n}return i}(this,t,e,r);case"utf8":case"utf-8":return i=e,o=r,tN(tI(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return s=e,a=r,tN(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,l=r,tN(tL(t),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=e,c=r,tN(function(t,e){let r,n;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(t,this.length-f),this,f,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},to.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},to.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,to.prototype),n)},to.prototype.readUintLE=to.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},to.prototype.readUintBE=to.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},to.prototype.readUint8=to.prototype.readUInt8=function(t,e){return t>>>=0,e||tb(t,1,this.length),this[t]},to.prototype.readUint16LE=to.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tb(t,2,this.length),this[t]|this[t+1]<<8},to.prototype.readUint16BE=to.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tb(t,2,this.length),this[t]<<8|this[t+1]},to.prototype.readUint32LE=to.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tb(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},to.prototype.readUint32BE=to.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tb(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},to.prototype.readBigUInt64LE=tF(function(t){tU(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tC(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),to.prototype.readBigUInt64BE=tF(function(t){tU(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tC(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),to.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},to.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tb(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},to.prototype.readInt8=function(t,e){return(t>>>=0,e||tb(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},to.prototype.readInt16LE=function(t,e){t>>>=0,e||tb(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},to.prototype.readInt16BE=function(t,e){t>>>=0,e||tb(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},to.prototype.readInt32LE=function(t,e){return t>>>=0,e||tb(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},to.prototype.readInt32BE=function(t,e){return t>>>=0,e||tb(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},to.prototype.readBigInt64LE=tF(function(t){tU(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tC(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),to.prototype.readBigInt64BE=tF(function(t){tU(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tC(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),to.prototype.readFloatLE=function(t,e){return t>>>=0,e||tb(t,4,this.length),l(this,t,!0,23,4)},to.prototype.readFloatBE=function(t,e){return t>>>=0,e||tb(t,4,this.length),l(this,t,!1,23,4)},to.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tb(t,8,this.length),l(this,t,!0,52,8)},to.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tb(t,8,this.length),l(this,t,!1,52,8)},to.prototype.writeUintLE=to.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tw(this,t,e,r,n,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},to.prototype.writeUintBE=to.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tw(this,t,e,r,n,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},to.prototype.writeUint8=to.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,1,255,0),this[e]=255&t,e+1},to.prototype.writeUint16LE=to.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},to.prototype.writeUint16BE=to.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},to.prototype.writeUint32LE=to.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},to.prototype.writeUint32BE=to.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},to.prototype.writeBigUInt64LE=tF(function(t,e=0){return tE(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),to.prototype.writeBigUInt64BE=tF(function(t,e=0){return tv(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),to.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);tw(this,t,e,r,n-1,-n)}let i=0,o=1,s=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},to.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);tw(this,t,e,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},to.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},to.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},to.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},to.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},to.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tw(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},to.prototype.writeBigInt64LE=tF(function(t,e=0){return tE(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),to.prototype.writeBigInt64BE=tF(function(t,e=0){return tv(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),to.prototype.writeFloatLE=function(t,e,r){return tO(this,t,e,!0,r)},to.prototype.writeFloatBE=function(t,e,r){return tO(this,t,e,!1,r)},to.prototype.writeDoubleLE=function(t,e,r){return tB(this,t,e,!0,r)},to.prototype.writeDoubleBE=function(t,e,r){return tB(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
to.prototype.copy=function(t,e,r,n){if(!to.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
to.prototype.fill=function(t,e,r,n){let i;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!to.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{let o=to.isBuffer(t)?t:to.from(t,n),s=o.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const tS={};function tR(t,e,r){tS[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tT(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function tx(t,e,r,n,i,o){if(t>r||t<e){let n;let i="bigint"==typeof e?"n":"";throw n=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${r}${i}`,new tS.ERR_OUT_OF_RANGE("value",n,t)}tU(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&tC(i,n.length-(o+1))}function tU(t,e){if("number"!=typeof t)throw new tS.ERR_INVALID_ARG_TYPE(e,"number",t)}function tC(t,e,r){if(Math.floor(t)!==t)throw tU(t,r),new tS.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new tS.ERR_BUFFER_OUT_OF_BOUNDS;throw new tS.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}tR("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tR("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tR("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=tT(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=tT(i)),i+="n"),n+=` It must be ${e}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
const tj=/[^+/0-9A-Za-z-_]/g;function tI(t,e){let r;e=e||1/0;let n=t.length,i=null,o=[];for(let s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function tL(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),i=n[0],o=n[1],s=new Q((i+o)*3/4-o),a=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)e=X[t.charCodeAt(r)]<<18|X[t.charCodeAt(r+1)]<<12|X[t.charCodeAt(r+2)]<<6|X[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===o&&(e=X[t.charCodeAt(r)]<<2|X[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===o&&(e=X[t.charCodeAt(r)]<<10|X[t.charCodeAt(r+1)]<<4|X[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tj,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tN(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length)&&!(i>=t.length);++i)e[i+r]=t[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function t_(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const tP=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();// Return not function with Error if BigInt not supported
function tF(t){return"undefined"==typeof BigInt?tD:t}function tD(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function t$(t){return J.isPlainObject(t)||J.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tk(t){return J.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tM(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tk(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}const tq=J.toFlatObject(J,{},null,function(t){return/^is[A-Z]/.test(t)});var tz=/**
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
 */function(t,e,r){if(!J.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=J.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!J.isUndefined(e[t])});let n=r.metaTokens,i=r.visitor||f,o=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&J.isSpecCompliantForm(e);if(!J.isFunction(i))throw TypeError("visitor must be a function");function l(t){if(null===t)return"";if(J.isDate(t))return t.toISOString();if(!u&&J.isBlob(t))throw new K("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(t)||J.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):to.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function f(t,r,i){let a=t;if(t&&!i&&"object"==typeof t){if(J.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if(J.isArray(t)&&(u=t,J.isArray(u)&&!u.some(t$))||(J.isFileList(t)||J.endsWith(r,"[]"))&&(a=J.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tk(r),a.forEach(function(t,n){J.isUndefined(t)||null===t||e.append(!0===s?tM([r],n,o):null===s?r:r+"[]",l(t))}),!1)}}return!!t$(t)||(e.append(tM(i,r,o),l(t)),!1)}let c=[],h=Object.assign(tq,{defaultVisitor:f,convertValue:l,isVisitable:t$});if(!J.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!J.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),J.forEach(r,function(r,o){let s=!(J.isUndefined(r)||null===r)&&i.call(e,r,J.isString(o)?o.trim():o,n,h);!0===s&&t(r,n?n.concat(o):[o])}),c.pop()}}(t),e};/**
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
 */function tW(t,e){this._pairs=[],t&&tz(t,this,e)}const tV=tW.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tJ(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tK(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let i=r&&r.encode||tJ,o=r&&r.serialize;if(n=o?o(e,r):J.isURLSearchParams(e)?e.toString():new tW(e,r).toString(i)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tV.append=function(t,e){this._pairs.push([t,e])},tV.toString=function(t){let e=t?function(e){return t.call(this,e,tH)}:tH;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tG=class{constructor(){this.handlers=[]}/**
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
   */forEach(t){J.forEach(this.handlers,function(e){null!==e&&t(e)})}},tY={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tZ="undefined"!=typeof URLSearchParams?URLSearchParams:tW,tX="undefined"!=typeof FormData?FormData:null,tQ="undefined"!=typeof Blob?Blob:null;/**
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
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t2={classes:{URLSearchParams:tZ,FormData:tX,Blob:tQ},isStandardBrowserEnv:t0,isStandardBrowserWebWorkerEnv:t1,protocols:["http","https","file","blob","url","data"]},t6=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(J.isFormData(t)&&J.isFunction(t.entries)){let e={};return J.forEachEntry(t,(t,r)=>{!function t(e,r,n,i){let o=e[i++],s=Number.isFinite(+o),a=i>=e.length;if(o=!o&&J.isArray(n)?n.length:o,a)return J.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!s;n[o]&&J.isObject(n[o])||(n[o]=[]);let u=t(e,r,n[o],i);return u&&J.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},i=Object.keys(t),o=i.length;for(e=0;e<o;e++)n[r=i[e]]=t[r];return n}(n[o])),!s}(J.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};const t5={transitional:tY,adapter:t2.isNode?"http":"xhr",transformRequest:[function(t,e){let r;let n=e.getContentType()||"",i=n.indexOf("application/json")>-1,o=J.isObject(t);o&&J.isHTMLForm(t)&&(t=new FormData(t));let s=J.isFormData(t);if(s)return i&&i?JSON.stringify(t6(t)):t;if(J.isArrayBuffer(t)||J.isBuffer(t)||J.isStream(t)||J.isFile(t)||J.isBlob(t))return t;if(J.isArrayBufferView(t))return t.buffer;if(J.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=t,u=this.formSerializer,tz(a,new t2.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return t2.isNode&&J.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=J.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tz(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(J.isString(t))try{return(0,JSON.parse)(t),J.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t5.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&J.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw K.from(t,K.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t2.classes.FormData,Blob:t2.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],t=>{t5.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const t3=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */t4=t=>{let e,r,n;let i={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||i[e]&&t3[e]||("set-cookie"===e?i[e]?i[e].push(r):i[e]=[r]:i[e]=i[e]?i[e]+", "+r:r)}),i};const t8=Symbol("internals");function t7(t){return t&&String(t).trim().toLowerCase()}function t9(t){return!1===t||null==t?t:J.isArray(t)?t.map(t9):String(t)}const et=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ee(t,e,r,n,i){if(J.isFunction(n))return n.call(this,e,r);if(i&&(e=r),J.isString(e)){if(J.isString(n))return -1!==e.indexOf(n);if(J.isRegExp(n))return n.test(e)}}class er{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function i(t,e,r){let i=t7(e);if(!i)throw Error("header name must be a non-empty string");let o=J.findKey(n,i);o&&void 0!==n[o]&&!0!==r&&(void 0!==r||!1===n[o])||(n[o||e]=t9(t))}let o=(t,e)=>J.forEach(t,(t,r)=>i(t,r,e));return J.isPlainObject(t)||t instanceof this.constructor?o(t,e):J.isString(t)&&(t=t.trim())&&!et(t)?o(t4(t),e):null!=t&&i(e,t,r),this}get(t,e){if(t=t7(t)){let r=J.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(J.isFunction(e))return e.call(this,t,r);if(J.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t7(t)){let r=J.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||ee(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function i(t){if(t=t7(t)){let i=J.findKey(r,t);i&&(!e||ee(r,r[i],i,e))&&(delete r[i],n=!0)}}return J.isArray(t)?t.forEach(i):i(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let i=e[r];(!t||ee(this,this[i],i,t,!0))&&(delete this[i],n=!0)}return n}normalize(t){let e=this,r={};return J.forEach(this,(n,i)=>{let o=J.findKey(r,i);if(o){e[o]=t9(n),delete e[i];return}let s=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(i).trim();s!==i&&delete e[i],e[s]=t9(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return J.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&J.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[t8]=this[t8]={accessors:{}},r=e.accessors,n=this.prototype;function i(t){let e=t7(t);r[e]||(!function(t,e){let r=J.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,i){return this[n].call(this,e,t,r,i)},configurable:!0})})}(n,t),r[e]=!0)}return J.isArray(t)?t.forEach(i):i(t),this}}function en(t,e){let r=this||t5,n=e||r,i=er.from(n.headers),o=n.data;return J.forEach(t,function(t){o=t.call(r,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function ei(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function eo(t,e,r){K.call(this,null==t?"canceled":t,K.ERR_CANCELED,e,r),this.name="CanceledError"}er.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),J.reduceDescriptors(er.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),J.freezeMethods(er),J.inherits(eo,K,{__CANCEL__:!0});var es=t2.isStandardBrowserEnv?{write:function(t,e,r,n,i,o){let s=[];s.push(t+"="+encodeURIComponent(e)),J.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),J.isString(n)&&s.push("path="+n),J.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ea(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var eu=t2.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
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
    */return t=n(window.location.href),function(e){let r=J.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},el=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),i=Array(t),o=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),l=i[s];r||(r=u),n[o]=a,i[o]=u;let f=s,c=0;for(;f!==o;)c+=n[f++],f%=t;if((o=(o+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let h=l&&u-l;return h?Math.round(1e3*c/h):void 0}};function ef(t,e){let r=0,n=el(50,250);return i=>{let o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-r,u=n(a),l=o<=s;r=o;let f={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&l?(s-o)/u:void 0,event:i};f[e?"download":"upload"]=!0,t(f)}}const ec="undefined"!=typeof XMLHttpRequest;var eh=ec&&function(t){return new Promise(function(e,r){let n,i=t.data,o=er.from(t.headers).normalize(),s=t.responseType;function a(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}J.isFormData(i)&&(t2.isStandardBrowserEnv||t2.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(e+":"+r))}let l=ea(t.baseURL,t.url);function f(){if(!u)return;// Prepare the response
let n=er.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?u.response:u.responseText,o={data:i,status:u.status,statusText:u.statusText,headers:n,config:t,request:u};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new K("Request failed with status code "+r.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),a()},function(t){r(t),a()},o),// Clean up request
u=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(u.open(t.method.toUpperCase(),tK(l,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
u.timeout=t.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(f)},// Handle browser request cancellation (as opposed to a manual cancellation)
u.onabort=function(){u&&(r(new K("Request aborted",K.ECONNABORTED,t,u)),// Clean up request
u=null)},// Handle low level network errors
u.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new K("Network Error",K.ERR_NETWORK,t,u)),// Clean up request
u=null},// Handle timeout
u.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tY;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new K(e,n.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,t,u)),// Clean up request
u=null},t2.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||eu(l))&&t.xsrfCookieName&&es.read(t.xsrfCookieName);e&&o.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===i&&o.setContentType(null),"setRequestHeader"in u&&J.forEach(o.toJSON(),function(t,e){u.setRequestHeader(e,t)}),J.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),s&&"json"!==s&&(u.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&u.addEventListener("progress",ef(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",ef(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{u&&(r(!e||e.type?new eo(null,t,u):e),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let c=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(l);if(c&&-1===t2.protocols.indexOf(c)){r(new K("Unsupported protocol "+c+":",K.ERR_BAD_REQUEST,t));return}// Send the request
u.send(i||null)})};const ep={http:null,xhr:eh};J.forEach(ep,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var ed={getAdapter:t=>{let e,r;t=J.isArray(t)?t:[t];let{length:n}=t;for(let i=0;i<n&&(e=t[i],!(r=J.isString(e)?ep[e.toLowerCase()]:e));i++);if(!r){if(!1===r)throw new K(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(J.hasOwnProp(ep,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!J.isFunction(r))throw TypeError("adapter is not a function");return r},adapters:ep};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eg(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new eo(null,t)}function ey(t){eg(t),t.headers=er.from(t.headers),// Transform request data
t.data=en.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=ed.getAdapter(t.adapter||t5.adapter);return e(t).then(function(e){return eg(t),// Transform response data
e.data=en.call(t,t.transformResponse,e),e.headers=er.from(e.headers),e},function(e){return!ei(e)&&(eg(t),e&&e.response&&(e.response.data=en.call(t,t.transformResponse,e.response),e.response.headers=er.from(e.response.headers))),Promise.reject(e)})}const em=t=>t instanceof er?t.toJSON():t;function eb(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return J.isPlainObject(t)&&J.isPlainObject(e)?J.merge.call({caseless:r},t,e):J.isPlainObject(e)?J.merge({},e):J.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,r){return J.isUndefined(e)?J.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function o(t,e){if(!J.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return J.isUndefined(e)?J.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,i,o){return o in e?n(r,i):o in t?n(void 0,r):void 0}let u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>i(em(t),em(e),!0)};return J.forEach(Object.keys(Object.assign({},t,e)),function(n){let o=u[n]||i,s=o(t[n],e[n],n);J.isUndefined(s)&&o!==a||(r[n]=s)}),r}const ew="1.5.0",eE={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eE[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ev={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */eE.transitional=function(t,e,r){function n(t,e){return"[Axios v"+ew+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,i,o)=>{if(!1===t)throw new K(n(i," has been removed"+(e?" in "+e:"")),K.ERR_DEPRECATED);return e&&!ev[i]&&(ev[i]=!0,// eslint-disable-next-line no-console
console.warn(n(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,i,o)}};var eA={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),i=n.length;for(;i-- >0;){let o=n[i],s=e[o];if(s){let e=t[o],r=void 0===e||s(e,o,t);if(!0!==r)throw new K("option "+o+" must be "+r,K.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new K("Unknown option "+o,K.ERR_BAD_OPTION)}},validators:eE};const eO=eA.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eB{constructor(t){this.defaults=t,this.interceptors={request:new tG,response:new tG}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=eb(this.defaults,e);let{transitional:i,paramsSerializer:o,headers:s}=e;void 0!==i&&eA.assertOptions(i,{silentJSONParsing:eO.transitional(eO.boolean),forcedJSONParsing:eO.transitional(eO.boolean),clarifyTimeoutError:eO.transitional(eO.boolean)},!1),null!=o&&(J.isFunction(o)?e.paramsSerializer={serialize:o}:eA.assertOptions(o,{encode:eO.function,serialize:eO.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&J.merge(s.common,s[e.method]);s&&J.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=er.concat(a,s);// filter out skipped interceptors
let u=[],l=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(l=l&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let f=[];this.interceptors.response.forEach(function(t){f.push(t.fulfilled,t.rejected)});let c=0;if(!l){let t=[ey.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,f),n=t.length,r=Promise.resolve(e);c<n;)r=r.then(t[c++],t[c++]);return r}n=u.length;let h=e;for(c=0;c<n;){let t=u[c++],e=u[c++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=ey.call(this,h)}catch(t){return Promise.reject(t)}for(c=0,n=f.length;c<n;)r=r.then(f[c++],f[c++]);return r}getUri(t){t=eb(this.defaults,t);let e=ea(t.baseURL,t.url);return tK(e,t.params,t.paramsSerializer)}}J.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eB.prototype[t]=function(e,r){return this.request(eb(r||{},{method:t,url:e,data:(r||{}).data}))}}),J.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,i){return this.request(eb(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}eB.prototype[t]=e(),eB.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eS{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,i){r.reason||(r.reason=new eo(t,n,i),e(r.reason))})}/**
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
 */function t(e){let r=new eB(e),n=g(eB.prototype.request,r);return J.extend(n,eB.prototype,r,{allOwnKeys:!0}),J.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(eb(e,r))},n}(t5);// Expose Axios class to allow class inheritance
eT.Axios=eB,// Expose Cancel & CancelToken
eT.CanceledError=eo,eT.CancelToken=eS,eT.isCancel=ei,eT.VERSION=ew,eT.toFormData=tz,// Expose AxiosError class
eT.AxiosError=K,// alias for CanceledError for backward compatibility
eT.Cancel=eT.CanceledError,// Expose all/spread
eT.all=function(t){return Promise.all(t)},eT.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eT.isAxiosError=function(t){return J.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eT.mergeConfig=eb,eT.AxiosHeaders=er,eT.formToJSON=t=>t6(J.isHTMLForm(t)?new FormData(t):t),eT.getAdapter=ed.getAdapter,eT.HttpStatusCode=eR,eT.default=eT;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:ex,AxiosError:eU,CanceledError:eC,isCancel:ej,CancelToken:eI,VERSION:eL,all:eN,Cancel:e_,isAxiosError:eP,spread:eF,toFormData:eD,AxiosHeaders:e$,HttpStatusCode:ek,formToJSON:eM,getAdapter:eq,mergeConfig:ez}=eT;var eH={};n=d("fSg2G"),i=d("28Nm5").utf8,o=d("c8cSi"),s=d("28Nm5").bin,// Auxiliary functions
(a=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?s.stringToBytes(t):i.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());// Swap endian
for(var r=n.bytesToWords(t),u=8*t.length,l=1732584193,f=-271733879,c=-1732584194,h=271733878,p=0;p<r.length;p++)r[p]=(r[p]<<8|r[p]>>>24)&16711935|(r[p]<<24|r[p]>>>8)&4278255360;// Padding
r[u>>>5]|=128<<u%32,r[(u+64>>>9<<4)+14]=u;for(var d=a._ff,g=a._gg,y=a._hh,m=a._ii,p=0;p<r.length;p+=16){var b=l,w=f,E=c,v=h;l=d(l,f,c,h,r[p+0],7,-680876936),h=d(h,l,f,c,r[p+1],12,-389564586),c=d(c,h,l,f,r[p+2],17,606105819),f=d(f,c,h,l,r[p+3],22,-1044525330),l=d(l,f,c,h,r[p+4],7,-176418897),h=d(h,l,f,c,r[p+5],12,1200080426),c=d(c,h,l,f,r[p+6],17,-1473231341),f=d(f,c,h,l,r[p+7],22,-45705983),l=d(l,f,c,h,r[p+8],7,1770035416),h=d(h,l,f,c,r[p+9],12,-1958414417),c=d(c,h,l,f,r[p+10],17,-42063),f=d(f,c,h,l,r[p+11],22,-1990404162),l=d(l,f,c,h,r[p+12],7,1804603682),h=d(h,l,f,c,r[p+13],12,-40341101),c=d(c,h,l,f,r[p+14],17,-1502002290),f=d(f,c,h,l,r[p+15],22,1236535329),l=g(l,f,c,h,r[p+1],5,-165796510),h=g(h,l,f,c,r[p+6],9,-1069501632),c=g(c,h,l,f,r[p+11],14,643717713),f=g(f,c,h,l,r[p+0],20,-373897302),l=g(l,f,c,h,r[p+5],5,-701558691),h=g(h,l,f,c,r[p+10],9,38016083),c=g(c,h,l,f,r[p+15],14,-660478335),f=g(f,c,h,l,r[p+4],20,-405537848),l=g(l,f,c,h,r[p+9],5,568446438),h=g(h,l,f,c,r[p+14],9,-1019803690),c=g(c,h,l,f,r[p+3],14,-187363961),f=g(f,c,h,l,r[p+8],20,1163531501),l=g(l,f,c,h,r[p+13],5,-1444681467),h=g(h,l,f,c,r[p+2],9,-51403784),c=g(c,h,l,f,r[p+7],14,1735328473),f=g(f,c,h,l,r[p+12],20,-1926607734),l=y(l,f,c,h,r[p+5],4,-378558),h=y(h,l,f,c,r[p+8],11,-2022574463),c=y(c,h,l,f,r[p+11],16,1839030562),f=y(f,c,h,l,r[p+14],23,-35309556),l=y(l,f,c,h,r[p+1],4,-1530992060),h=y(h,l,f,c,r[p+4],11,1272893353),c=y(c,h,l,f,r[p+7],16,-155497632),f=y(f,c,h,l,r[p+10],23,-1094730640),l=y(l,f,c,h,r[p+13],4,681279174),h=y(h,l,f,c,r[p+0],11,-358537222),c=y(c,h,l,f,r[p+3],16,-722521979),f=y(f,c,h,l,r[p+6],23,76029189),l=y(l,f,c,h,r[p+9],4,-640364487),h=y(h,l,f,c,r[p+12],11,-421815835),c=y(c,h,l,f,r[p+15],16,530742520),f=y(f,c,h,l,r[p+2],23,-995338651),l=m(l,f,c,h,r[p+0],6,-198630844),h=m(h,l,f,c,r[p+7],10,1126891415),c=m(c,h,l,f,r[p+14],15,-1416354905),f=m(f,c,h,l,r[p+5],21,-57434055),l=m(l,f,c,h,r[p+12],6,1700485571),h=m(h,l,f,c,r[p+3],10,-1894986606),c=m(c,h,l,f,r[p+10],15,-1051523),f=m(f,c,h,l,r[p+1],21,-2054922799),l=m(l,f,c,h,r[p+8],6,1873313359),h=m(h,l,f,c,r[p+15],10,-30611744),c=m(c,h,l,f,r[p+6],15,-1560198380),f=m(f,c,h,l,r[p+13],21,1309151649),l=m(l,f,c,h,r[p+4],6,-145523070),h=m(h,l,f,c,r[p+11],10,-1120210379),c=m(c,h,l,f,r[p+2],15,718787259),f=m(f,c,h,l,r[p+9],21,-343485551),l=l+b>>>0,f=f+w>>>0,c=c+E>>>0,h=h+v>>>0}return n.endian([l,f,c,h])})._ff=function(t,e,r,n,i,o,s){var a=t+(e&r|~e&n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},a._gg=function(t,e,r,n,i,o,s){var a=t+(e&n|r&~n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},a._hh=function(t,e,r,n,i,o,s){var a=t+(e^r^n)+(i>>>0)+s;return(a<<o|a>>>32-o)+e},a._ii=function(t,e,r,n,i,o,s){var a=t+(r^(e|~n))+(i>>>0)+s;return(a<<o|a>>>32-o)+e},// Package private blocksize
a._blocksize=16,a._digestsize=16,eH=function(t,e){if(null==t)throw Error("Illegal argument "+t);var r=n.wordsToBytes(a(t,e));return e&&e.asBytes?r:e&&e.asString?s.bytesToString(r):n.bytesToHex(r)};const eW="efe513042744199e2ee71f94d9988717",eV=eT.create({baseURL:"https://gateway.marvel.com/v1/public",params:{apikey:eW,hash:(({timeStamp:t,PUBLIC_KEY:e,PRIVATE_KEY:r})=>{var n;return((n=eH)&&n.__esModule?n.default:n)(`${t}${r}${e}`)})({timeStamp:1,PRIVATE_KEY:"5488535f3958164a14b37ef40df2b28b6e569641",PUBLIC_KEY:eW}),ts:1}}),eJ={getCharacters:async({limit:t=60,offset:e=0,nameStartsWith:r="",comics:n="",orderBy:i="",modifiedSince:o=""})=>{try{let s=await eV.get("/characters",{params:{...t&&{limit:t},...e&&{offset:e},...r&&{nameStartsWith:r},...n&&{comics:n},...i&&{orderBy:i},...o&&{modifiedSince:o}}}),a=s.data.data;return a}catch(t){return{error:t.message}}},getComics:async({limit:t=20,offset:e=0,startYear:r=0,format:n="",title:i="",titleStartsWith:o="",orderBy:s="",dateDescriptor:a=""})=>{try{let u=await eV.get("/comics",{params:{...t&&{limit:t},...e&&{offset:e},...r&&{startYear:r},...o&&{titleStartsWith:o},...n&&{format:n},...i&&{title:i},...s&&{orderBy:s},...a&&{dateDescriptor:a}}}),l=u.data.data;return l}catch(t){return console.log(t),{error:t.message}}}};var eK={};Object.defineProperty(eK,"Spinner",{get:function(){return eZ},set:void 0,enumerable:!0,configurable:!0});var eG=function(){return(eG=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},eY={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},eZ=/** @class */function(){function t(t){void 0===t&&(t={}),this.opts=eG(eG({},eY),t)}return(/**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),eX(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),/**
 * Internal method that draws the individual lines.
 */function(t,e){var r=Math.round(e.corners*e.width*500)/1e3+"px",n="none";!0===e.shadow?n="0 2px 4px #000":"string"==typeof e.shadow&&(n=e.shadow);for(var i=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,r=[],n=0,i=t.split(",");n<i.length;n++){var o=i[n].match(e);if(null!==o){var s=+o[2],a=+o[5],u=o[4],l=o[7];0!==s||u||(u=l),0!==a||l||(l=u),u===l&&r.push({prefix:o[1]||"",x:s,y:a,xUnits:u,yUnits:l,end:o[8]})}// invalid syntax
}return r}(n),o=0;o<e.lines;o++){var s=~~(360/e.lines*o+e.rotate),a=eX(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:eQ(e.fadeColor,o),borderRadius:r,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+e.radius+"px)"}),u=o*e.direction/e.lines/e.speed;u-=1/e.speed;var l=eX(document.createElement("div"),{width:"100%",height:"100%",background:eQ(e.color,o),borderRadius:r,boxShadow:/**
 * Modify box-shadow x/y offsets to counteract rotation
 */function(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n],o=function(t,e,r){var n=r*Math.PI/180,i=Math.sin(n),o=Math.cos(n);return[Math.round((t*o+e*i)*1e3)/1e3,Math.round((-t*i+e*o)*1e3)/1e3]}(i.x,i.y,e);r.push(i.prefix+o[0]+i.xUnits+" "+o[1]+i.yUnits+i.end)}return r.join(", ")}(i,s),animation:1/e.speed+"s linear "+u+"s infinite "+e.animation});a.appendChild(l),t.appendChild(a)}}(this.el,this.opts),this},/**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t)}();/**
 * Sets multiple style properties at once.
 */function eX(t,e){for(var r in e)t.style[r]=e[r];return t}/**
 * Returns the line color from the given string or array.
 */function eQ(t,e){return"string"==typeof t?t:t[e%t.length]}const e0=new(0,eK.Spinner)({lines:16,length:18,width:4,radius:20,color:"#600404"}).spin(),e1=()=>{let t=document.getElementById("loader-container");t.innerHTML="",t.appendChild(e0.el),t.style.display="flex"},e2=()=>{let t=document.getElementById("loader-container");t.style.display="none",t.innerHTML=""},e6=document.querySelector(".js-header-search"),e5=document.querySelector(".js-header-form");let e3=null;e3=(()=>{let t={mobile:320,tablet:768};return window.innerWidth<=t.mobile?5:window.innerWidth<=t.tablet?8:16})();const e4=t=>t.map(t=>`<li class="header-search-item">
        <img class="header-search-img"
       data-set="${t.id}"
        src="${t.thumbnail.path}.${t.thumbnail.extension}"
        alt="${t.name}"
      />
          <div class="header-search-context">
          <h3  class="header-search-title" data-set="${t.id}">${t.name}</h3>
          </div>
      </li>
    `).join(""),e8=t=>{e6.insertAdjacentHTML("beforeend",e4(t))},e7=()=>{e6.scrollIntoView({behavior:"smooth"})},e9=()=>{e6.innerHTML=""},rt=async t=>{t.preventDefault();let{target:e}=t,r=e.elements.searchQuery.value;if(e5.reset(),""!==r)try{e1();let t=await eJ.getCharacters({nameStartsWith:r,limit:e3,offset:0});if(0===t.results.length){e2(),e7(),e6.innerHTML='<div class="nothing-seach"></div>';return}e2(),e9(),e8(t.results),e7()}catch(t){location.replace("../error.html"),e2()}};e5.addEventListener("submit",rt);const re=document.querySelector(".header");window.addEventListener("scroll",()=>{0!==scrollY?re.classList.add("js-header-bg"):re.classList.remove("js-header-bg")});/* let swiperSlideHero = null; // Змінна для зберігання екземпляру Swiper

// Функція для ініціалізації Swiper
function initSwiper() {
  const direction =
    window.innerWidth < 768 || window.innerWidth >= 1440
      ? 'vertical'
      : 'horizontal';

  swiperSlideHero ? swiperSlideHero.destroy() : null;

  swiperSlideHero = new Swiper('.section-hero-swiper', {
    direction: direction,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 50,
    slidesPerView: 1,
    initialSlide: 0,
  });
}

initSwiper();

window.addEventListener('resize', initSwiper);
 *//* const swiperaPagination = document.querySelector('.swiper-pagination');
const btnColor = document.querySelector('.js-btn-color');

const onSwiper = event => {
  const { target: bullet } = event;
  const ariaLabel = bullet.getAttribute('aria-label');
  let color = '';

  if (ariaLabel === 'Go to slide 1') {
    color = '#600404';
    btnColor.style.background = color;
  } else if (ariaLabel === 'Go to slide 2') {
    color = '#34387f';
    btnColor.style.background = color;
  } else if (ariaLabel === 'Go to slide 3') {
    color = '#5b7f3c';
    btnColor.style.background = color;
  }
};

swiperaPagination.addEventListener('click', onSwiper); *///import { showNextSlide } from './helpers/slide';
const rr=document.querySelector(".js-random-img"),rn=document.querySelector(".js-random-descr"),ri=t=>{let e=t.map(({id:t,thumbnail:e,name:r})=>`  <li class= "js-slide js-random-characters-img" data-id="${t}">
      <picture>
      <source media="(min-width: 1440px)"
                  srcset="${e.path}.${e.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${e.path}.${e.extension}"/>
      <img class="js-random-characters-img" data-id="${t}"
        src='${e.path}.${e.extension}'
        alt='${r}'
      /></picture>
    </li>`).join("");return e},ro=t=>{rr.insertAdjacentHTML("beforeend",ri(t))},rs=t=>{let e=t.map(({name:t,description:e,id:r})=>`
    <li class='js-random-characters-description' data-id="${r}">
      <h3 class='js-random-characters-title' data-id="${r}">${t}</h3>
      <p class='js-random-characters-text' data-id="${r}">${e}</p>
    </li>`).join("");return e},ra=t=>{rn.insertAdjacentHTML("beforeend",rs(t))},ru=async()=>{try{let t=await eJ.getCharacters("/characters"),{results:e}=t;e=e.filter(({name:t,thumbnail:{path:e}})=>t&&!e.includes("not_available"));let r=[],n=[...e];for(let t=0;t<5&&n.length>0;t++){let t=Math.floor(Math.random()*n.length),e=n[t];r.push(e),n.splice(t,1)}console.log(r),ro(r),ra(r),rl=document.querySelectorAll(".js-slide"),rf=document.querySelectorAll(".js-random-characters-description"),setInterval(rp,3500)}catch(t){return console.log(t),location.replace("../error.html"),{error:t.message}}};ru();let rl=[],rf=null,rc=0,rh=0;const rp=()=>{for(let t=0;t<rl.length;t+=1)rl[t].classList.remove("js-show"),rl[t].classList.add("js-slide");for(let t=0;t<rf.length;t+=1)rf[t].classList.remove("js-active"),rf[t].classList.add("js-random-characters-description");rh=(rh+1)%rl.length,rc=(rc+1)%rf.length,rl[rh].classList.add("js-show"),rl[rh].classList.remove("js-slide"),rf[rc].classList.add("js-active"),rf[rc].classList.remove("js-random-characters-description")},rd=document.querySelector(".js-last-comics-list"),rg=t=>{let e=t.map(({id:t,thumbnail:e,title:r,creators:n})=>`  <li class= "last-comics-item swiper-slide" data-id="${t}" width="auto">
     <picture>
      <source media="(min-width: 1440px)"
                  srcset="${e.path}.${e.extension}" />
      <source media="(min-width: 768px)"
                  srcset="${e.path}.${e.extension}"/> 
      <img class="last-comics-img slide-comics-img" data-id="${t}"
        src='${e.path}.${e.extension}'
        alt='${r}'
      />
     </picture>
      <h3 class="last-comics-title" data-id="${t}">${r}</h3>
      <p class= "last-comics-creator" data-id="${t}">${n.items[0].name}</p>
    </li>`).join("");return e},ry=t=>{rd.insertAdjacentHTML("beforeend",rg(t))},rm=async()=>{try{let t=await eJ.getComics({limit:3,dateDescriptor:"lastWeek"});ry(t.results)}catch(t){console.log(t)}};rm(),new Swiper(".section-comics-swiper",{slidesPerView:1,spaceBetween:15,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1.5},1440:{slidesPerView:3,init:!1}}});//# sourceMappingURL=index.2c0d77f9.js.map

//# sourceMappingURL=index.2c0d77f9.js.map
