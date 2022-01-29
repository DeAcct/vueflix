(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},"0366":function(e,t,n){var r=n("e330"),o=n("59ed"),i=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?i(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),o=n("c65b"),i=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0b42":function(e,t,n){var r=n("da84"),o=n("e8b5"),i=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,i(t)&&(t===u||o(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("cc12");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),o=r.String;e.exports=function(e){try{return o(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),o=n("da84"),i=o.RegExp;e.exports=r((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("825a"),s=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var r=o(n,e,t);return null!==r&&i(r),r}if("RegExp"===a(e))return o(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in o)o[u]&&c(r[u]&&r[u].prototype);c(i)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=o("forEach");e.exports=i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),o=n("3a9b"),i=r.TypeError;e.exports=function(e,t){if(o(t,e))return e;throw i("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),o=n("7b0b"),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),o=r("iterator"),i=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){i=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),o=r.TypeError;e.exports=function(e){if(void 0==e)throw o("Can't call method on "+e);return e}},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),i=n("2d00"),s=o("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return R})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return M})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return k})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return _})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return v})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return b})),n.d(t,"t",(function(){return x})),n.d(t,"u",(function(){return C}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const a=o<e.length,c=a?n[e.charAt(o)]:64;++o;const u=o<e.length,l=u?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function h(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return d().indexOf("Electron/")>=0}function g(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return d().indexOf("MSAppHost/")>=0}function y(){return!h()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class w extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?E(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new w(r,s,n);return a}}function E(e,t){return e.replace(j,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function S(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(T(n)&&T(i)){if(!S(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function T(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function C(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function A(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){const n=new P(e,t);return n.subscribe.bind(n)}class P{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=N(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),o=n("0366"),i=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),d=n("9a1f"),f=n("35a1"),h=n("2a62"),p=r.TypeError,v=function(e,t){this.stopped=e,this.result=t},m=v.prototype;e.exports=function(e,t,n){var r,g,b,y,_,O,w,I=n&&n.that,E=!(!n||!n.AS_ENTRIES),j=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),S=o(t,I),T=function(e){return r&&h(r,"normal",e),new v(!0,e)},x=function(e){return E?(s(e),k?S(e[0],e[1],T):S(e[0],e[1])):k?S(e,T):S(e)};if(j)r=e;else{if(g=f(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(b=0,y=u(e);y>b;b++)if(_=x(e[b]),_&&l(m,_))return _;return new v(!1)}r=d(e,g)}O=r.next;while(!(w=i(O,r)).done){try{_=x(w.value)}catch(C){h(r,"throw",C)}if("object"==typeof _&&_&&l(m,_))return _}return new v(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},"23e7":function(e,t,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,f,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(d in t){if(h=t[d],e.noTargetGet?(p=o(l,d),f=p&&p.value):f=l[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&i(h,"sham",!0),s(l,d,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["f"]}));var o="firebase",i="9.6.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(o,i,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),s=n("83ab"),a=i("species");e.exports=function(e){var t=r(e),n=o.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),o=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var s,a;o(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return o(s),n}},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,o=n.bind,i=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(o?i.bind(r):function(){return i.apply(r,arguments)})},"2cf4":function(e,t,n){var r,o,i,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),d=n("1a2d"),f=n("d039"),h=n("1be4"),p=n("f36a"),v=n("cc12"),m=n("1cdc"),g=n("605d"),b=a.setImmediate,y=a.clearImmediate,_=a.process,O=a.Dispatch,w=a.Function,I=a.MessageChannel,E=a.String,j=0,k={},S="onreadystatechange";try{r=a.location}catch(R){}var T=function(e){if(d(k,e)){var t=k[e];delete k[e],t()}},x=function(e){return function(){T(e)}},C=function(e){T(e.data)},A=function(e){a.postMessage(E(e),r.protocol+"//"+r.host)};b&&y||(b=function(e){var t=p(arguments,1);return k[++j]=function(){c(l(e)?e:w(e),void 0,t)},o(j),j},y=function(e){delete k[e]},g?o=function(e){_.nextTick(x(e))}:O&&O.now?o=function(e){O.now(x(e))}:I&&!m?(i=new I,s=i.port2,i.port1.onmessage=C,o=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(A)?(o=A,a.addEventListener("message",C,!1)):o=S in v("script")?function(e){h.appendChild(v("script"))[S]=function(){h.removeChild(this),T(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:b,clear:y}},"2d00":function(e,t,n){var r,o,i=n("da84"),s=n("342f"),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),o=n("dc4a"),i=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return o(e,a)||o(e,"@@iterator")||i[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),s=n("fc6a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){i(e);var n,r=s(t),c=a(t),u=c.length,l=0;while(u>l)o.f(e,n=c[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),o=n("1626"),i=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||o(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,o=n("577e"),i=n("69f3"),s=n("7dd0"),a="String Iterator",c=i.set,u=i.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:o(e),index:0})}),(function(){var e,t=u(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"setupDevtoolsPlugin",(function(){return s}));var r=n("abc5"),o=n("b774"),i=n("f30a");function s(e,t){const n=Object(r["b"])(),s=Object(r["a"])(),a=r["c"]&&e.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new i["a"](e,s):null,o=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:e,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}else s.emit(o["b"],e,t)}},"3f8c":function(e,t){e.exports={}},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"44ad":function(e,t,n){var r=n("da84"),o=n("e330"),i=n("d039"),s=n("c6b6"),a=r.Object,c=o("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),o=n("5087"),i=n("b622"),s=i("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[s])?t:o(n)}},"485a":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!s(r=o(n,e)))return r;if(i(n=e.valueOf)&&!s(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!s(r=o(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),o=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),o=n("23cb"),i=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c),l=o(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),o=n("68ee"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return J})),n.d(t,"b",(function(){return Q}));var r=n("7a23"),o=n("3f4e"),i="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function u(e,t){if(!e)throw new Error("[vuex] "+t)}function l(e,t){return function(){return e(t)}}function d(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function f(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),h(e,n,t)}function h(e,t,n){var o=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,a={};s(i,(function(t,n){a[n]=l(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["D"])({data:t}),e.strict&&_(e),o&&n&&e._withCommit((function(){o.data=null}))}function p(e,t,n,r,o){var i=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!i&&!o){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=v(e,s,n);r.forEachMutation((function(t,n){var r=s+n;g(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,o=t.handler||t;b(e,r,o,u)})),r.forEachGetter((function(t,n){var r=s+n;y(e,r,t,u)})),r.forEachChild((function(r,i){p(e,t,n.concat(i),r,o)}))}function v(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=w(n,r,o),s=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?e.commit:function(n,r,o){var i=w(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return m(e,t)}},state:{get:function(){return O(e.state,n)}}}),o}function m(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function g(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function b(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function y(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function _(e){Object(r["P"])((function(){return e._state.data}),(function(){u(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function w(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),u("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var I="vuex bindings",E="vuex:mutations",j="vuex:actions",k="vuex",S=0;function T(e,t){Object(o["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[I]},(function(n){n.addTimelineLayer({id:E,label:"Vuex Mutations",color:x}),n.addTimelineLayer({id:j,label:"Vuex Actions",color:x}),n.addInspector({id:k,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===k)if(n.filter){var r=[];L(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===k){var r=n.nodeId;m(t,r),n.state=M(U(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===k){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),t._withCommit((function(){n.set(t._state.data,o,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(k),n.sendInspectorState(k),n.addTimelineEvent({layerId:E,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=S++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:j,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},o=Date.now()-e._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:j,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var x=8702998,C=6710886,A=16777215,R={label:"namespaced",textColor:A,backgroundColor:C};function P(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:P(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return N(e._children[n],t+n+"/")}))}}function L(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(o){L(e,t._children[o],n,r+o+"/")}))}function M(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=D(t);o.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?P(e):e,editable:!1,value:F((function(){return i[e]}))}}))}return o}function D(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var o=t,i=r.pop();r.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[i]=F((function(){return e[n]}))}else t[n]=F((function(){return e[n]}))})),t}function U(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,o){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return o===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function F(e){try{return e()}catch(t){return t}}var V=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},$={namespaced:{configurable:!0}};$.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(e,t){this._children[e]=t},V.prototype.removeChild=function(e){delete this._children[e]},V.prototype.getChild=function(e){return this._children[e]},V.prototype.hasChild=function(e){return e in this._children},V.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},V.prototype.forEachChild=function(e){s(this._children,e)},V.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},V.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},V.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(V.prototype,$);var B=function(e){this.register([],e,!1)};function z(e,t,n){if(q(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");z(e.concat(r),t.getChild(r),n.modules[r])}}B.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},B.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},B.prototype.update=function(e){z([],this.root,e)},B.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),q(e,t);var o=new V(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&s(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},B.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},B.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var W={assert:function(e){return"function"===typeof e},expected:"function"},G={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},H={getters:W,mutations:W,actions:G};function q(e,t){Object.keys(H).forEach((function(n){if(t[n]){var r=H[n];s(t[n],(function(t,o){u(r.assert(t),K(e,n,o,t,r.expected))}))}}))}function K(e,t,n,r,o){var i=t+" should be "+o+' but "'+t+"."+n+'"';return e.length>0&&(i+=' in module "'+e.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function J(e){return new X(e)}var X=function e(t){var n=this;void 0===t&&(t={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new B(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=o;var d=this._modules.root.state;p(this,d,[],this._modules.root),h(this,d),r.forEach((function(e){return e(n)}))},Y={state:{configurable:!0}};X.prototype.install=function(e,t){e.provide(t||i,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&T(e,this)},Y.state.get=function(){return this._state.data},Y.state.set=function(e){u(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(e,t,n){var r=this,o=w(e,t,n),i=o.type,s=o.payload,a=o.options,c={type:i,payload:s},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},X.prototype.dispatch=function(e,t){var n=this,r=w(e,t),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+o)},X.prototype.subscribe=function(e,t){return d(e,this._subscribers,t)},X.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return d(n,this._actionSubscribers,t)},X.prototype.watch=function(e,t,n){var o=this;return u("function"===typeof e,"store.watch only accepts a function."),Object(r["P"])((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},X.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},X.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),u(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),h(this,this.state)},X.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),f(this)},X.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},X.prototype.hotUpdate=function(e){this._modules.update(e),f(this,!0)},X.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(X.prototype,Y);var Q=te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n}));te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=ne(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e)){if(o in this.$store.getters)return this.$store.getters[o];console.error("[vuex] unknown getter: "+o)}},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=ne(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function Z(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||a(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5692:function(e,t,n){var r=n("c430"),o=n("c6cd");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),o=n("e330"),i=n("241c"),s=n("7418"),a=n("825a"),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),o=n("f5df"),i=r.String;e.exports=function(e){if("Symbol"===o(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return q})),n.d(t,"b",(function(){return B})),n.d(t,"c",(function(){return $})),n.d(t,"d",(function(){return z})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return K})),n.d(t,"g",(function(){return X}));var r=n("22e5"),o=n("e691"),i=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.10",l=new o["b"]("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",b="@firebase/database",y="@firebase/database-compat",_="@firebase/functions",O="@firebase/functions-compat",w="@firebase/installations",I="@firebase/installations-compat",E="@firebase/messaging",j="@firebase/messaging-compat",k="@firebase/performance",S="@firebase/performance-compat",T="@firebase/remote-config",x="@firebase/remote-config-compat",C="@firebase/storage",A="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",N="firebase",L="9.6.0",M="[DEFAULT]",D={[c]:"fire-core",[d]:"fire-core-compat",[h]:"fire-analytics",[f]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[b]:"fire-rtdb",[y]:"fire-rtdb-compat",[_]:"fire-fn",[O]:"fire-fn-compat",[w]:"fire-iid",[I]:"fire-iid-compat",[E]:"fire-fcm",[j]:"fire-fcm-compat",[k]:"fire-perf",[S]:"fire-perf-compat",[T]:"fire-rc",[x]:"fire-rc-compat",[C]:"fire-gcs",[A]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},U=new Map,F=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(F.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of U.values())V(n,e);return!0}function B(e,t){return e.container.getProvider(t)}function z(e,t,n=M){B(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new i["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=L;function K(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!==typeof o||!o)throw G.create("bad-app-name",{appName:String(o)});const s=U.get(o);if(s){if(Object(i["g"])(e,s.options)&&Object(i["g"])(n,s.config))return s;throw G.create("duplicate-app",{appName:o})}const a=new r["b"](o);for(const r of F.values())a.addComponent(r);const c=new H(e,n,a);return U.set(o,c),c}function J(e=M){const t=U.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function X(e,t,n){var o;let i=null!==(o=D[e])&&void 0!==o?o:e;n&&(i+="-"+n);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new r["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){$(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),X(c,u,e),X(c,u,"esm2017"),X("fire-js","")}Y("")},"58a8":function(e,t,n){var r=n("e330"),o=n("1d80"),i=n("577e"),s=n("5899"),a=r("".replace),c="["+s+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(e){return function(t){var n=i(o(t));return 1&e&&(n=a(n,u,"")),2&e&&(n=a(n,l,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),o=n("1a2d"),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),o=n("da84");e.exports="process"==r(o.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),o=n("e330"),i=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),d=n("44ad"),f=Object.assign,h=Object.defineProperty,p=o([].concat);e.exports=!f||s((function(){if(r&&1!==f({b:1},f(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||a(f({},t)).join("")!=o}))?function(e,t){var n=l(e),o=arguments.length,s=1,f=c.f,h=u.f;while(o>s){var v,m=d(arguments[s++]),g=f?p(a(m),f(m)):a(m),b=g.length,y=0;while(b>y)v=g[y++],r&&!i(h,m,v)||(n[v]=m[v])}return n}:f},6547:function(e,t,n){var r=n("e330"),o=n("5926"),i=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,d=i(s(t)),f=o(n),h=d.length;return f<0||f>=h?e?"":void 0:(r=c(d,f),r<55296||r>56319||f+1===h||(l=c(d,f+1))<56320||l>57343?e?a(d,f):r:e?u(d,f,f+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),o=n("d039"),i=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],d=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,h=r(f.exec),p=!f.exec(u),v=function(e){if(!i(e))return!1;try{return d(u,l,e),!0}catch(t){return!1}},m=function(e){if(!i(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!h(f,c(e))};e.exports=!d||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?m:v},"69f3":function(e,t,n){var r,o,i,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),d=n("1a2d"),f=n("c6cd"),h=n("f772"),p=n("d012"),v="Object already initialized",m=a.TypeError,g=a.WeakMap,b=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var _=f.state||(f.state=new g),O=c(_.get),w=c(_.has),I=c(_.set);r=function(e,t){if(w(_,e))throw new m(v);return t.facade=e,I(_,e,t),t},o=function(e){return O(_,e)||{}},i=function(e){return w(_,e)}}else{var E=h("state");p[E]=!0,r=function(e,t){if(d(e,E))throw new m(v);return t.facade=e,l(e,E,t),t},o=function(e){return d(e,E)?e[E]:{}},i=function(e){return d(e,E)}}e.exports={set:r,get:o,has:i,enforce:b,getterFor:y}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return W}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>o?Symbol(e):"_vr_"+e,s=i("rvlm"),a=i("rvd"),c=i("r"),u=i("rl"),l=i("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function p(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const v=()=>{};const m=/\/$/,g=e=>e.replace(m,"");function b(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),o=e(i)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=k(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function O(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&w(t.matched[r],n.matched[o])&&I(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function w(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function I(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?j(e,t):Array.isArray(t)?j(t,e):e===t}function j(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==s&&"."!==i){if(".."!==i)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var S,T;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function x(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const C=/^[^#]+#/;function A(e,t){return e.replace(C,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=R(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+o}function $(e,t,n,r){let o=[],i=[],s=null;const a=({state:i})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function c(){s=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:P()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function B(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function z(e){const{history:t,location:n}=window,r={value:V(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=h({},t.state,B(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function a(e,n){const s=h({},o.value,t.state,{forward:e,scroll:P()});i(s.current,s,!0);const a=h({},B(r.value,e,null),{position:s.position+1},n);i(e,a,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:a,replace:s}}function W(e){e=x(e);const t=z(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:A.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function G(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=i("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return h(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t),r=[];let o=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const d=c||Q;if(d!==Q){s+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),o+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:i,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ne(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const oe={type:0,value:""},ie=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function d(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ie.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),o}function ae(e,t,n){const r=te(se(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ce(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(h({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let d,f;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(d=ae(t,n,u),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),o&&e.name&&!fe(d)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,c(d)}return f?()=>{s(f)}:v}function s(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,s,a={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw X(1,{location:e});s=o.record.name,a=h(ue(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),i=o.stringify(a)}else if("path"in e)i=e.path,o=n.find(e=>e.re.test(i)),o&&(a=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw X(1,{location:e,currentLocation:t});s=o.record.name,a=h({},t.params,e.params),i=o.stringify(a)}const c=[];let u=o;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:i,params:a,matched:c,meta:he(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>i(e)),{addRoute:i,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,me=/&/g,ge=/\//g,be=/=/g,ye=/\?/g,_e=/\+/g,Oe=/%5B/g,we=/%5D/g,Ie=/%5E/g,Ee=/%60/g,je=/%7B/g,ke=/%7C/g,Se=/%7D/g,Te=/%20/g;function xe(e){return encodeURI(""+e).replace(ke,"|").replace(Oe,"[").replace(we,"]")}function Ce(e){return xe(e).replace(je,"{").replace(Se,"}").replace(Ie,"^")}function Ae(e){return xe(e).replace(_e,"%2B").replace(Te,"+").replace(ve,"%23").replace(me,"%26").replace(Ee,"`").replace(je,"{").replace(Se,"}").replace(Ie,"^")}function Re(e){return Ae(e).replace(be,"%3D")}function Pe(e){return xe(e).replace(ve,"%23").replace(ye,"%3F")}function Ne(e){return null==e?"":Pe(e).replace(ge,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(_e," "),n=e.indexOf("="),i=Le(n<0?e:e.slice(0,n)),s=n<0?null:Le(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map(e=>e&&Ae(e)):[r&&Ae(r)];o.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):G(e)?a(X(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function $e(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let s=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(Be(s)){const a=s.__vccOpts||s,c=a[t];c&&o.push(Ve(c,n,r,i,e))}else{let a=s();0,o.push(()=>a.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const s=f(o)?o.default:o;i.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Ve(c,n,r,i,e)()}))}}return o}function Be(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=Object(r["o"])(c),n=Object(r["o"])(u),o=Object(r["c"])(()=>t.resolve(Object(r["M"])(e.to))),i=Object(r["c"])(()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(w.bind(null,r));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&i[i.length-1].path!==a?i.findIndex(w.bind(null,e[t-2])):s}),s=Object(r["c"])(()=>i.value>-1&&qe(n.params,o.value.params)),a=Object(r["c"])(()=>i.value>-1&&i.value===n.matched.length-1&&I(n.params,o.value.params));function l(n={}){return He(n)?t[Object(r["M"])(e.replace)?"replace":"push"](Object(r["M"])(e.to)).catch(v):Promise.resolve()}return{route:o,href:Object(r["c"])(()=>o.value.href),isActive:s,isExactActive:a,navigate:l}}const We=Object(r["l"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=Object(r["D"])(ze(e)),{options:o}=Object(r["o"])(c),i=Object(r["c"])(()=>({[Je(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r["n"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Ge=We;function He(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qe(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["l"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r["o"])(l),i=Object(r["c"])(()=>e.route||o.value),c=Object(r["o"])(a,0),u=Object(r["c"])(()=>i.value.matched[c]);Object(r["B"])(a,c+1),Object(r["B"])(s,u),Object(r["B"])(l,i);const d=Object(r["E"])();return Object(r["P"])(()=>[d.value,u.value,e.name],([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&w(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=i.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:o});const l=s.props[e.name],f=l?!0===l?o.params:"function"===typeof l?l(o):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},v=Object(r["n"])(a,h({},f,t,{onVnodeUnmounted:p,ref:d}));return Ye(n.default,{Component:v,route:o})||v}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Xe;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||De,i=e.history;const s=Fe(),a=Fe(),f=Fe(),m=Object(r["K"])(q);let g=q;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),w=p.bind(null,Ne),I=p.bind(null,Le);function E(e,n){let r,o;return H(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function j(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map(e=>e.record)}function T(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=h({},r||m.value),"string"===typeof e){const o=b(n,e,r.path),s=t.resolve({path:o.path},r),a=i.createHref(o.fullPath);return h(o,s,{params:I(s.params),hash:Le(o.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=h({},e,{path:b(n,e.path,r.path).path});else{const t=h({},e.params);for(const e in t)null==t[e]&&delete t[e];s=h({},e,{params:w(e.params)}),r.params=w(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(I(a.params));const u=y(o,h({},e,{hash:Ce(c),path:a.path})),l=i.createHref(u);return h({fullPath:u,hash:c,query:o===De?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function C(e){return"string"===typeof e?b(n,e,m.value.path):h({},e)}function A(e,t){if(g!==e)return X(8,{from:t,to:e})}function R(e){return V(e)}function M(e){return R(h(C(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=g=x(e),r=m.value,i=e.state,s=e.force,a=!0===e.replace,c=F(n);if(c)return V(h(C(c),{state:i,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&O(o,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch(e=>Y(e)?e:ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(h(C(e.to),{state:i,force:s,replace:a}),t||u)}else e=W(u,r,!0,a,i);return z(u,r,e),e})}function $(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,o,i]=tt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=$.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=$e(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$e(i,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function W(e,t,n,r,o){const s=A(e,t);if(s)return s;const a=t===q,c=d?history.state:{};n&&(r||a?i.replace(e.fullPath,h({scroll:a&&c&&c.scroll},o)):i.push(e.fullPath,o)),m.value=e,re(e,t,n,a),ne()}let G;function K(){G=i.listen((e,t,n)=>{const r=x(e),o=F(r);if(o)return void V(h(o,{replace:!0}),r).catch(v);g=r;const s=m.value;d&&D(L(s.fullPath,n.delta),P()),B(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===S.pop&&i.go(-1,!1)}).catch(v),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||W(r,s,!1),e&&(n.delta?i.go(-n.delta,!1):n.type===S.pop&&Y(e,20)&&i.go(-1,!1)),z(r,s,e)}).catch(v)})}let J,Q=Fe(),Z=Fe();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&m.value!==q?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){J||(J=!0,K(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function re(t,n,o,i){const{scrollBehavior:s}=e;if(!d||!s)return Promise.resolve();const a=!o&&U(L(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return Object(r["p"])().then(()=>s(t,n,a)).then(e=>e&&N(e)).catch(e=>ee(e,t,n))}const oe=e=>i.go(e);let ie;const se=new Set,ae={currentRoute:m,addRoute:E,removeRoute:j,hasRoute:T,getRoutes:k,resolve:x,options:e,push:R,replace:M,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["M"])(m)}),d&&!ie&&m.value===q&&(ie=!0,R(i.location).catch(e=>{0}));const n={};for(const i in q)n[i]=Object(r["c"])(()=>m.value[i]);e.provide(c,t),e.provide(u,Object(r["D"])(n)),e.provide(l,m);const o=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=q,G&&G(),m.value=q,ie=!1,J=!1),o()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find(e=>w(e,i))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find(e=>w(e,a))||o.push(a))}return[n,r,o]}},"6eeb":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,d=u.get,f=u.enforce,h=String(String).split("String");(e.exports=function(e,t,n,c){var u,d=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=f(n),u.source||(u.source=h.join("string"==typeof m?m:""))),e!==r?(d?!v&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return o(this)&&d(this).source||c(this)}))},7156:function(e,t,n){var r=n("1626"),o=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var s,a;return i&&r(s=t.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&i(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),o=r("span").classList,i=o&&o.constructor&&o.constructor.prototype;e.exports=i===Object.prototype?void 0:i},"7a23":function(e,t,n){"use strict";n.d(t,"c",(function(){return Ge})),n.d(t,"D",(function(){return Ie})),n.d(t,"E",(function(){return De})),n.d(t,"K",(function(){return Ue})),n.d(t,"M",(function(){return $e})),n.d(t,"q",(function(){return r["I"]})),n.d(t,"r",(function(){return r["J"]})),n.d(t,"L",(function(){return r["L"]})),n.d(t,"a",(function(){return Bn})),n.d(t,"e",(function(){return er})),n.d(t,"f",(function(){return hr})),n.d(t,"g",(function(){return Zn})),n.d(t,"h",(function(){return sr})),n.d(t,"i",(function(){return fr})),n.d(t,"j",(function(){return dr})),n.d(t,"k",(function(){return ar})),n.d(t,"l",(function(){return Ot})),n.d(t,"m",(function(){return Tr})),n.d(t,"n",(function(){return ko})),n.d(t,"o",(function(){return lt})),n.d(t,"p",(function(){return ao})),n.d(t,"s",(function(){return jt})),n.d(t,"t",(function(){return Dt})),n.d(t,"u",(function(){return Lt})),n.d(t,"v",(function(){return kt})),n.d(t,"w",(function(){return Nt})),n.d(t,"x",(function(){return Ut})),n.d(t,"y",(function(){return Mt})),n.d(t,"z",(function(){return Kn})),n.d(t,"A",(function(){return Ze})),n.d(t,"B",(function(){return ut})),n.d(t,"C",(function(){return Qe})),n.d(t,"F",(function(){return br})),n.d(t,"G",(function(){return yr})),n.d(t,"H",(function(){return Mn})),n.d(t,"I",(function(){return Fn})),n.d(t,"J",(function(){return Un})),n.d(t,"P",(function(){return Oo})),n.d(t,"Q",(function(){return et})),n.d(t,"R",(function(){return _n})),n.d(t,"b",(function(){return si})),n.d(t,"d",(function(){return Bi})),n.d(t,"N",(function(){return Ni})),n.d(t,"O",(function(){return ki})),n.d(t,"S",(function(){return Ui}));var r=n("9ff4");let o;const i=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&o&&(this.parent=o,this.index=(o.scopes||(o.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(i.push(this),o=this)}off(){this.active&&(i.pop(),o=i[i.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||o,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&v)>0,l=e=>(e.n&v)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];u(o)&&!l(o)?o.delete(e):t[n++]=o,o.w&=~v,o.n&=~v}t.length=n}},h=new WeakMap;let p=0,v=1;const m=30,g=[];let b;const y=Symbol(""),_=Symbol("");class O{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!g.includes(this))try{return g.push(b=this),k(),v=1<<++p,p<=m?d(this):w(this),this.fn()}finally{p<=m&&f(this),v=1<<--p,S(),g.pop();const e=g.length;b=e>0?g[e-1]:void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function j(){E.push(I),I=!1}function k(){E.push(I),I=!0}function S(){const e=E.pop();I=void 0===e||e}function T(e,t,n){if(!x())return;let r=h.get(e);r||h.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=c());const i=void 0;C(o,i)}function x(){return I&&void 0!==b}function C(e,t){let n=!1;p<=m?l(e)||(e.n|=v,n=!u(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e))}function A(e,t,n,o,i,s){const a=h.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=o)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"set":Object(r["t"])(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&R(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);R(c(e))}}function R(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==b||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=Object(r["H"])("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),L=V(),M=V(!1,!0),D=V(!0),U=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,o=this.length;t<o;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){j();const n=Ce(this)[t].apply(this,e);return S(),n}}),e}function V(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&i===(e?t?_e:ye:t?be:ge).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(U,o))return Reflect.get(U,o,i);const a=Reflect.get(n,o,i);if(Object(r["E"])(o)?N.has(o):P(o))return a;if(e||T(n,"get",o),t)return a;if(Me(a)){const e=!s||!Object(r["s"])(o);return e?a.value:a}return Object(r["v"])(a)?e?je(a):Ie(a):a}}const $=z(),B=z(!0);function z(e=!1){return function(t,n,o,i){let s=t[n];if(!e&&!Te(o)&&(o=Ce(o),s=Ce(s),!Object(r["o"])(t)&&Me(s)&&!Me(o)))return s.value=o,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,o,i);return t===Ce(i)&&(a?Object(r["j"])(o,s)&&A(t,"set",n,o,s):A(t,"add",n,o)),c}}function W(e,t){const n=Object(r["k"])(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&A(e,"delete",t,void 0,o),i}function G(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&N.has(t)||T(e,"has",t),n}function H(e){return T(e,"iterate",Object(r["o"])(e)?"length":y),Reflect.ownKeys(e)}const q={get:L,set:$,deleteProperty:W,has:G,ownKeys:H},K={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},J=Object(r["h"])({},q,{get:M,set:B}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Ce(e),i=Ce(t);t!==i&&!n&&T(o,"get",t),!n&&T(o,"get",i);const{has:s}=Y(o),a=r?X:n?Pe:Re;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void(e!==o&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ce(n),o=Ce(e);return e!==o&&!t&&T(r,"has",e),!t&&T(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function ee(e,t=!1){return e=e["__v_raw"],!t&&T(Ce(e),"iterate",y),Reflect.get(e,"size",e)}function te(e){e=Ce(e);const t=Ce(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function ne(e,t){t=Ce(t);const n=Ce(this),{has:o,get:i}=Y(n);let s=o.call(n,e);s||(e=Ce(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function re(e){const t=Ce(this),{has:n,get:r}=Y(t);let o=n.call(t,e);o||(e=Ce(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&A(t,"delete",e,void 0,i),s}function oe(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=Ce(i),a=t?X:e?Pe:Re;return!e&&T(s,"iterate",y),i.forEach((e,t)=>n.call(r,a(e),a(t),o))}}function se(e,t,n){return function(...o){const i=this["__v_raw"],s=Ce(i),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...o),d=n?X:t?Pe:Re;return!t&&T(s,"iterate",u?_:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:oe,forEach:ie(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:oe,forEach:ie(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach(o=>{e[o]=se(o,!1,!1),n[o]=se(o,!0,!1),t[o]=se(o,!1,!0),r[o]=se(o,!0,!0)}),[e,n,t,r]}const[ue,le,de,fe]=ce();function he(e,t){const n=t?e?fe:de:e?le:ue;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Object(r["k"])(n,o)&&o in t?n:t,o,i)}const pe={get:he(!1,!1)},ve={get:he(!1,!0)},me={get:he(!0,!1)};const ge=new WeakMap,be=new WeakMap,ye=new WeakMap,_e=new WeakMap;function Oe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Oe(Object(r["O"])(e))}function Ie(e){return e&&e["__v_isReadonly"]?e:ke(e,!1,q,pe,ge)}function Ee(e){return ke(e,!1,J,ve,be)}function je(e){return ke(e,!0,K,me,ye)}function ke(e,t,n,o,i){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=we(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function Se(e){return Te(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return Se(e)||Te(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ae(e){return Object(r["g"])(e,"__v_skip",!0),e}const Re=e=>Object(r["v"])(e)?Ie(e):e,Pe=e=>Object(r["v"])(e)?je(e):e;function Ne(e){x()&&(e=Ce(e),e.dep||(e.dep=c()),C(e.dep))}function Le(e,t){e=Ce(e),e.dep&&R(e.dep)}function Me(e){return Boolean(e&&!0===e.__v_isRef)}function De(e){return Fe(e,!1)}function Ue(e){return Fe(e,!0)}function Fe(e,t){return Me(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Re(e)}get value(){return Ne(this),this._value}set value(e){e=this._shallow?e:Ce(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Re(e),Le(this,e))}}function $e(e){return Me(e)?e.value:e}const Be={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Me(o)&&!Me(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return Se(e)?e:new Proxy(e,Be)}class We{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new O(e,()=>{this._dirty||(this._dirty=!0,Le(this))}),this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Ne(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t){let n,o;const i=Object(r["p"])(e);i?(n=e,o=r["d"]):(n=e.get,o=e.set);const s=new We(n,o,i||!o);return s}Promise.resolve();new Set;new Map;function He(e,t,...n){const o=e.vnode.props||r["b"];let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in o){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=o[e]||r["b"];s?i=n.map(e=>e.trim()):t&&(i=n.map(r["N"]))}let c;let u=o[c=Object(r["M"])(t)]||o[c=Object(r["M"])(Object(r["e"])(t))];!u&&s&&(u=o[c=Object(r["M"])(Object(r["l"])(t))]),u&&Gr(u,e,6,i);const l=o[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Gr(l,e,6,i)}}function qe(e,t,n=!1){const o=t.emitsCache,i=o.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const o=e=>{const n=qe(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),o.set(e,a),a):(o.set(e,null),null)}function Ke(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Je=null,Xe=null;function Ye(e){const t=Je;return Je=e,Xe=e&&e.type.__scopeId||null,t}function Qe(e){Xe=e}function Ze(){Xe=null}function et(e,t=Je,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Yn(-1);const o=Ye(t),i=e(...n);return Ye(o),r._d&&Yn(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function tt(e){const{type:t,vnode:n,proxy:o,withProxy:i,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:d,renderCache:f,data:h,setupState:p,ctx:v,inheritAttrs:m}=e;let g,b;const y=Ye(e);try{if(4&n.shapeFlag){const e=i||o;g=pr(d.call(e,e,f,s,p,h,v)),b=u}else{const e=t;0,g=pr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),b=t.props?u:nt(u)}}catch(O){Hn.length=0,Hr(O,e,1),g=ar(Wn)}let _=g;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(r["u"])&&(b=rt(b,a)),_=lr(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_,Ye(y),g}const nt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},rt=(e,t)=>{const n={};for(const o in e)Object(r["u"])(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function ot(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||it(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?it(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ke(u,n))return!0}}return!1}function it(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Ke(n,i))return!0}return!1}function st({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const at=e=>e.__isSuspense;function ct(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):vo(e)}function ut(e,t){if(Sr){let n=Sr.provides;const r=Sr.parent&&Sr.parent.provides;r===n&&(n=Sr.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const o=Sr||Je;if(o){const i=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(o.proxy):t}else 0}function dt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nt(()=>{e.isMounted=!0}),Dt(()=>{e.isUnmounting=!0}),e}const ft=[Function,Array],ht={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(e,{slots:t}){const n=Tr(),r=dt();let o;return()=>{const i=t.default&&_t(t.default(),!0);if(!i||!i.length)return;const s=Ce(e),{mode:a}=s;const c=i[0];if(r.isLeaving)return gt(c);const u=bt(c);if(!u)return gt(c);const l=mt(u,s,r,n);yt(u,l);const d=n.subTree,f=d&&bt(d);let h=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===o?o=e:e!==o&&(o=e,h=!0)}if(f&&f.type!==Wn&&(!nr(u,f)||h)){const e=mt(f,s,r,n);if(yt(f,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},gt(c);"in-out"===a&&u.type!==Wn&&(e.delayLeave=(e,t,n)=>{const o=vt(r,f);o[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},pt=ht;function vt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function mt(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:v,onAppear:m,onAfterAppear:g,onAppearCancelled:b}=t,y=String(e.key),_=vt(n,e),O=(e,t)=>{e&&Gr(e,r,9,t)},w={mode:i,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!o)return;r=v||a}t._leaveCb&&t._leaveCb(!0);const i=_[y];i&&nr(e,i)&&i.el._leaveCb&&i.el._leaveCb(),O(r,[t])},enter(e){let t=c,r=u,i=l;if(!n.isMounted){if(!o)return;t=m||c,r=g||u,i=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,O(t?i:r,[e]),w.delayedLeave&&w.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();O(d,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),O(n?p:h,[t]),t._leaveCb=void 0,_[o]===e&&delete _[o])};_[o]=e,f?(f(t,s),f.length<=1&&s()):s()},clone(e){return mt(e,t,n,r)}};return w}function gt(e){if(It(e))return e=lr(e),e.children=null,e}function bt(e){return It(e)?e.children?e.children[0]:void 0:e}function yt(e,t){6&e.shapeFlag&&e.component?yt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _t(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const i=e[o];i.type===Bn?(128&i.patchFlag&&r++,n=n.concat(_t(i.children,t))):(t||i.type!==Wn)&&n.push(i)}if(r>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function Ot(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const wt=e=>!!e.type.__asyncLoader;const It=e=>e.type.__isKeepAlive;RegExp,RegExp;function Et(e,t){return Object(r["o"])(e)?e.some(e=>Et(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function jt(e,t){St(e,"a",t)}function kt(e,t){St(e,"da",t)}function St(e,t,n=Sr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(At(t,r,n),n){let e=n.parent;while(e&&e.parent)It(e.parent.vnode)&&Tt(r,t,n,e),e=e.parent}}function Tt(e,t,n,o){const i=At(t,e,o,!0);Ut(()=>{Object(r["K"])(o[t],i)},n)}function xt(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ct(e){return 128&e.shapeFlag?e.ssContent:e}function At(e,t,n=Sr,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;j(),xr(n);const o=Gr(t,n,e,r);return Cr(),S(),o});return r?o.unshift(i):o.push(i),i}}const Rt=e=>(t,n=Sr)=>(!Nr||"sp"===e)&&At(e,t,n),Pt=Rt("bm"),Nt=Rt("m"),Lt=Rt("bu"),Mt=Rt("u"),Dt=Rt("bum"),Ut=Rt("um"),Ft=Rt("sp"),Vt=Rt("rtg"),$t=Rt("rtc");function Bt(e,t=Sr){At("ec",e,t)}let zt=!0;function Wt(e){const t=Kt(e),n=e.proxy,o=e.ctx;zt=!1,t.beforeCreate&&Ht(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:c,provide:u,inject:l,created:d,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:m,deactivated:g,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:O,render:w,renderTracked:I,renderTriggered:E,errorCaptured:j,serverPrefetch:k,expose:S,inheritAttrs:T,components:x,directives:C,filters:A}=t,R=null;if(l&&Gt(l,o,R,e.appContext.config.unwrapInjectedRef),a)for(const N in a){const e=a[N];Object(r["p"])(e)&&(o[N]=e.bind(n))}if(i){0;const t=i.call(n,n);0,Object(r["v"])(t)&&(e.data=Ie(t))}if(zt=!0,s)for(const N in s){const e=s[N],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const i=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=Ge({get:t,set:i});Object.defineProperty(o,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)qt(c[r],o,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{ut(t,e[t])})}function P(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&Ht(d,e,"c"),P(Pt,f),P(Nt,h),P(Lt,p),P(Mt,v),P(jt,m),P(kt,g),P(Bt,j),P($t,I),P(Vt,E),P(Dt,y),P(Ut,O),P(Ft,k),Object(r["o"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});w&&e.render===r["d"]&&(e.render=w),null!=T&&(e.inheritAttrs=T),x&&(e.components=x),C&&(e.directives=C)}function Gt(e,t,n=r["d"],o=!1){Object(r["o"])(e)&&(e=Zt(e));for(const i in e){const n=e[i];let s;s=Object(r["v"])(n)?"default"in n?lt(n.from||i,n.default,!0):lt(n.from||i):lt(n),Me(s)&&o?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function Ht(e,t,n){Gr(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function qt(e,t,n,o){const i=o.includes(".")?Eo(n,o):()=>n[o];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&Oo(i,n)}else if(Object(r["p"])(e))Oo(i,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>qt(e,t,n,o));else{const o=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(o)&&Oo(i,o,e)}else 0}function Kt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let c;return a?c=a:o.length||n||r?(c={},o.length&&o.forEach(e=>Jt(c,e,s,!0)),Jt(c,t,s)):c=t,i.set(t,c),c}function Jt(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Jt(e,i,n,!0),o&&o.forEach(t=>Jt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Xt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Xt={data:Yt,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:tn,directives:tn,watch:nn,provide:Yt,inject:Qt};function Yt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Qt(e,t){return tn(Zt(e),Zt(t))}function Zt(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function en(e,t){return e?[...new Set([].concat(e,t))]:t}function tn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function nn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=en(e[r],t[r]);return n}function rn(e,t,n,o=!1){const i={},s={};Object(r["g"])(s,rr,1),e.propsDefaults=Object.create(null),sn(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:Ee(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function on(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,c=Ce(i),[u]=e.propsOptions;let l=!1;if(!(o||a>0)||16&a){let o;sn(e,t,i,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(o=Object(r["l"])(s))!==s&&Object(r["k"])(t,o))||(u?!n||void 0===n[s]&&void 0===n[o]||(i[s]=an(u,c,s,void 0,e,!0)):delete i[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let a=n[o];const d=t[a];if(u)if(Object(r["k"])(s,a))d!==s[a]&&(s[a]=d,l=!0);else{const t=Object(r["e"])(a);i[t]=an(u,c,t,d,e,!1)}else d!==s[a]&&(s[a]=d,l=!0)}}l&&A(e,"set","$attrs")}function sn(e,t,n,o){const[i,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let d;i&&Object(r["k"])(i,d=Object(r["e"])(u))?s&&s.includes(d)?(a||(a={}))[d]=l:n[d]=l:Ke(e.emitsOptions,u)||l!==o[u]&&(o[u]=l,c=!0)}if(s){const t=Ce(n),o=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=an(i,t,c,o[c],e,!Object(r["k"])(o,c))}}return c}function an(e,t,n,o,i,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===o){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=i;n in r?o=r[n]:(xr(i),o=r[n]=e.call(null,t),Cr())}else o=e}a[0]&&(s&&!e?o=!1:!a[1]||""!==o&&o!==Object(r["l"])(n)||(o=!0))}return o}function cn(e,t,n=!1){const o=t.propsCache,i=o.get(e);if(i)return i;const s=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const o=e=>{u=!0;const[n,o]=cn(e,t,!0);Object(r["h"])(a,n),o&&c.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!s&&!u)return o.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let d=0;d<s.length;d++){0;const e=Object(r["e"])(s[d]);un(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(un(t)){const n=s[e],o=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(o){const e=fn(Boolean,o.type),n=fn(String,o.type);o[0]=e>-1,o[1]=n<0||e<n,(e>-1||Object(r["k"])(o,"default"))&&c.push(t)}}}}const l=[a,c];return o.set(e,l),l}function un(e){return"$"!==e[0]}function ln(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function dn(e,t){return ln(e)===ln(t)}function fn(e,t){return Object(r["o"])(t)?t.findIndex(t=>dn(t,e)):Object(r["p"])(t)&&dn(t,e)?0:-1}const hn=e=>"_"===e[0]||"$stable"===e,pn=e=>Object(r["o"])(e)?e.map(pr):[pr(e)],vn=(e,t,n)=>{const r=et((...e)=>pn(t(...e)),n);return r._c=!1,r},mn=(e,t,n)=>{const o=e._ctx;for(const i in e){if(hn(i))continue;const n=e[i];if(Object(r["p"])(n))t[i]=vn(i,n,o);else if(null!=n){0;const e=pn(n);t[i]=()=>e}}},gn=(e,t)=>{const n=pn(t);e.slots.default=()=>n},bn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ce(t),Object(r["g"])(t,"_",n)):mn(t,e.slots={})}else e.slots={},t&&gn(e,t);Object(r["g"])(e.slots,rr,1)},yn=(e,t,n)=>{const{vnode:o,slots:i}=e;let s=!0,a=r["b"];if(32&o.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(i,t),n||1!==e||delete i._):(s=!t.$stable,mn(t,i)),a=t}else t&&(gn(e,t),a={default:1});if(s)for(const r in i)hn(r)||r in a||delete i[r]};function _n(e,t){const n=Je;if(null===n)return e;const o=n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&jo(n),i.push({dir:e,instance:o,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function On(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let c=a.dir[r];c&&(j(),Gr(c,n,8,[e.el,a,e,t]),S())}}function wn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let In=0;function En(e,t){return function(n,o=null){null==o||Object(r["v"])(o)||(o=null);const i=wn(),s=new Set;let a=!1;const c=i.app={_uid:In++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:So,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(r,s,u){if(!a){const l=ar(n,o);return l.appContext=i,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,$r(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function jn(){}const kn=ct;function Sn(e){return Tn(e)}function Tn(e,t){jn();const n=Object(r["i"])();n.__VUE__=!0;const{insert:o,remove:i,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:d,parentNode:f,nextSibling:h,setScopeId:p=r["d"],cloneNode:v,insertStaticContent:m}=e,g=(e,t,n,r=null,o=null,i=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!nr(e,t)&&(r=K(e),z(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case zn:b(e,t,n,r);break;case Wn:y(e,t,n,r);break;case Gn:null==e&&_(t,n,r,s);break;case Bn:P(e,t,n,r,o,i,s,a,c);break;default:1&d?E(e,t,n,r,o,i,s,a,c):6&d?N(e,t,n,r,o,i,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,o,i,s,a,c,X)}null!=l&&o&&xn(l,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)o(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},y=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r)},w=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=h(e),o(e,n,r),e=i;o(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=h(e),i(e),e=n;i(t)},E=(e,t,n,r,o,i,s,a,c)=>{s=s||"svg"===t.type,null==e?k(t,n,r,o,i,s,a,c):C(e,t,o,i,s,a,c)},k=(e,t,n,i,c,u,l,f)=>{let h,p;const{type:m,props:g,shapeFlag:b,transition:y,patchFlag:_,dirs:O}=e;if(e.el&&void 0!==v&&-1===_)h=e.el=v(e.el);else{if(h=e.el=a(e.type,u,g&&g.is,g),8&b?d(h,e.children):16&b&&x(e.children,h,null,i,c,u&&"foreignObject"!==m,l,f),O&&On(e,null,i,"created"),g){for(const t in g)"value"===t||Object(r["z"])(t)||s(h,t,null,g[t],u,e.children,i,c,q);"value"in g&&s(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Cn(p,i,e)}T(h,e,e.scopeId,l,i)}O&&On(e,null,i,"beforeMount");const w=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(h),o(h,t,n),((p=g&&g.onVnodeMounted)||w||O)&&kn(()=>{p&&Cn(p,i,e),w&&y.enter(h),O&&On(e,null,i,"mounted")},c)},T=(e,t,n,r,o)=>{if(n&&p(e,n),r)for(let i=0;i<r.length;i++)p(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;T(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},x=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?vr(e[u]):pr(e[u]);g(null,c,t,n,r,o,i,s,a)}},C=(e,t,n,o,i,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||r["b"],v=t.props||r["b"];let m;(m=v.onVnodeBeforeUpdate)&&Cn(m,n,t,e),h&&On(t,e,n,"beforeUpdate");const g=i&&"foreignObject"!==t.type;if(f?A(e.dynamicChildren,f,u,n,o,g,a):c||F(e,t,u,null,n,o,g,a,!1),l>0){if(16&l)R(u,t,p,v,n,o,i);else if(2&l&&p.class!==v.class&&s(u,"class",null,v.class,i),4&l&&s(u,"style",p.style,v.style,i),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=v[a];l===c&&"value"!==a||s(u,a,c,l,i,e.children,n,o,q)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=f||R(u,t,p,v,n,o,i);((m=v.onVnodeUpdated)||h)&&kn(()=>{m&&Cn(m,n,t,e),h&&On(t,e,n,"updated")},o)},A=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Bn||!nr(c,u)||70&c.shapeFlag)?f(c.el):n;g(c,u,l,null,r,o,i,s,!0)}},R=(e,t,n,o,i,a,c)=>{if(n!==o){for(const u in o){if(Object(r["z"])(u))continue;const l=o[u],d=n[u];l!==d&&"value"!==u&&s(e,u,d,l,c,t.children,i,a,q)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in o||s(e,u,n[u],null,c,t.children,i,a,q);"value"in o&&s(e,"value",n.value,o.value)}},P=(e,t,n,r,i,s,a,u,l)=>{const d=t.el=e?e.el:c(""),f=t.anchor=e?e.anchor:c("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:v}=t;v&&(u=u?u.concat(v):v),null==e?(o(d,n,r),o(f,n,r),x(t.children,n,f,i,s,a,u,l)):h>0&&64&h&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,i,s,a,u),(null!=t.key||i&&t===i.subTree)&&An(e,t,!0)):F(e,t,n,f,i,s,a,u,l)},N=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):L(t,n,r,o,i,s,c):M(e,t,c)},L=(e,t,n,r,o,i,s)=>{const a=e.component=kr(e,r,o);if(It(e)&&(a.ctx.renderer=X),Lr(a),a.asyncDep){if(o&&o.registerDep(a,D),!e.el){const e=a.subTree=ar(Wn);y(null,e,t,n)}}else D(a,e,t,n,o,i,s)},M=(e,t,n)=>{const r=t.component=e.component;if(ot(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,fo(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,o,i,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:o,u:c,parent:l,vnode:d}=e,h=n;0,u.allowRecurse=!1,n?(n.el=d.el,U(e,n,a)):n=d,o&&Object(r["n"])(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Cn(t,l,n,d),u.allowRecurse=!0;const p=tt(e);0;const v=e.subTree;e.subTree=p,g(v,p,f(v.el),K(v),e,i,s),n.el=p.el,null===h&&st(e,p.el),c&&kn(c,i),(t=n.props&&n.props.onVnodeUpdated)&&kn(()=>Cn(t,l,n,d),i)}else{let a;const{el:c,props:l}=t,{bm:d,m:f,parent:h}=e,p=wt(t);if(u.allowRecurse=!1,d&&Object(r["n"])(d),!p&&(a=l&&l.onVnodeBeforeMount)&&Cn(a,h,t),u.allowRecurse=!0,c&&Q){const n=()=>{e.subTree=tt(e),Q(c,e.subTree,e,i,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=tt(e);0,g(null,r,n,o,e,i,s),t.el=r.el}if(f&&kn(f,i),!p&&(a=l&&l.onVnodeMounted)){const e=t;kn(()=>Cn(a,h,e),i)}256&t.shapeFlag&&e.a&&kn(e.a,i),e.isMounted=!0,t=n=o=null}},u=new O(c,()=>uo(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,u.allowRecurse=l.allowRecurse=!0,l()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,on(e,t.props,r,n),yn(e,t.children,n),j(),mo(void 0,e.update),S()},F=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void $(u,f,n,r,o,i,s,a,c);if(256&h)return void V(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&q(u,o,i),f!==u&&d(n,f)):16&l?16&p?$(u,f,n,r,o,i,s,a,c):q(u,o,i,!0):(8&l&&d(n,""),16&p&&x(f,n,r,o,i,s,a,c))},V=(e,t,n,o,i,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,d=t.length,f=Math.min(l,d);let h;for(h=0;h<f;h++){const r=t[h]=u?vr(t[h]):pr(t[h]);g(e[h],r,n,null,i,s,a,c,u)}l>d?q(e,i,s,!0,!1,f):x(t,n,o,i,s,a,c,u,f)},$=(e,t,n,o,i,s,a,c,u)=>{let l=0;const d=t.length;let f=e.length-1,h=d-1;while(l<=f&&l<=h){const r=e[l],o=t[l]=u?vr(t[l]):pr(t[l]);if(!nr(r,o))break;g(r,o,n,null,i,s,a,c,u),l++}while(l<=f&&l<=h){const r=e[f],o=t[h]=u?vr(t[h]):pr(t[h]);if(!nr(r,o))break;g(r,o,n,null,i,s,a,c,u),f--,h--}if(l>f){if(l<=h){const e=h+1,r=e<d?t[e].el:o;while(l<=h)g(null,t[l]=u?vr(t[l]):pr(t[l]),n,r,i,s,a,c,u),l++}}else if(l>h)while(l<=f)z(e[l],i,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=h;l++){const e=t[l]=u?vr(t[l]):pr(t[l]);null!=e.key&&m.set(e.key,l)}let b,y=0;const _=h-v+1;let O=!1,w=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=f;l++){const r=e[l];if(y>=_){z(r,i,s,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(b=v;b<=h;b++)if(0===I[b-v]&&nr(r,t[b])){o=b;break}void 0===o?z(r,i,s,!0):(I[o-v]=l+1,o>=w?w=o:O=!0,g(r,t[o],n,null,i,s,a,c,u),y++)}const E=O?Rn(I):r["a"];for(b=E.length-1,l=_-1;l>=0;l--){const e=v+l,r=t[e],f=e+1<d?t[e+1].el:o;0===I[l]?g(null,r,n,f,i,s,a,c,u):O&&(b<0||l!==E[b]?B(r,n,f,2):b--)}}},B=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,X);if(a===Bn){o(s,t,n);for(let e=0;e<u.length;e++)B(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Gn)return void w(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),o(s,t,n),kn(()=>c.enter(s),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,()=>{a(),i&&i()})};r?r(s,a,u):u()}else o(s,t,n)},z=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:f}=e;if(null!=a&&xn(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&f,p=!wt(e);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&Cn(v,t,e),6&l)H(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&On(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,o,X,r):u&&(i!==Bn||d>0&&64&d)?q(u,t,n,!1,!0):(i===Bn&&384&d||!o&&16&l)&&q(c,t,n),r&&W(e)}(p&&(v=s&&s.onVnodeUnmounted)||h)&&kn(()=>{v&&Cn(v,t,e),h&&On(e,null,t,"unmounted")},n)},W=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Bn)return void G(n,r);if(t===Gn)return void I(e);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,i=()=>t(n,s);r?r(e.el,s,i):i()}else s()},G=(e,t)=>{let n;while(e!==t)n=h(e),i(e),e=n;i(t)},H=(e,t,n)=>{const{bum:o,scope:i,update:s,subTree:a,um:c}=e;o&&Object(r["n"])(o),i.stop(),s&&(s.active=!1,z(a,e,t,n)),c&&kn(c,t),kn(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},q=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)z(e[s],t,n,r,o)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():h(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),go(),t._vnode=e},X={p:g,um:z,m:B,r:W,mt:L,mc:x,pc:F,pbc:A,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(X)),{render:J,hydrate:Y,createApp:En(J,Y)}}function xn(e,t,n,o,i=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>xn(e,t&&(Object(r["o"])(t)?t[s]:t),n,o,i));if(wt(o)&&!i)return;const s=4&o.shapeFlag?$r(o.component)||o.component.proxy:o.el,a=i?null:s,{i:c,r:u}=e;const l=t&&t.r,d=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(d[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Me(l)&&(l.value=null)),Object(r["D"])(u)){const e=()=>{d[u]=a,Object(r["k"])(f,u)&&(f[u]=a)};a?(e.id=-1,kn(e,n)):e()}else if(Me(u)){const e=()=>{u.value=a};a?(e.id=-1,kn(e,n)):e()}else Object(r["p"])(u)&&Wr(u,c,12,[a,d])}function Cn(e,t,n,r=null){Gr(e,t,7,[n,r])}function An(e,t,n=!1){const o=e.children,i=t.children;if(Object(r["o"])(o)&&Object(r["o"])(i))for(let r=0;r<o.length;r++){const e=o[r];let t=i[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[r]=vr(i[r]),t.el=e.el),n||An(e,t))}}function Rn(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const Pn=e=>e.__isTeleport;const Nn="components",Ln="directives";function Mn(e,t){return Vn(Nn,e,!0,t)||e}const Dn=Symbol();function Un(e){return Object(r["D"])(e)?Vn(Nn,e,!1)||e:e||Dn}function Fn(e){return Vn(Ln,e)}function Vn(e,t,n=!0,o=!1){const i=Je||Sr;if(i){const n=i.type;if(e===Nn){const e=Br(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=$n(i[e]||n[e],t)||$n(i.appContext[e],t);return!s&&o?n:s}}function $n(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Bn=Symbol(void 0),zn=Symbol(void 0),Wn=Symbol(void 0),Gn=Symbol(void 0),Hn=[];let qn=null;function Kn(e=!1){Hn.push(qn=e?null:[])}function Jn(){Hn.pop(),qn=Hn[Hn.length-1]||null}let Xn=1;function Yn(e){Xn+=e}function Qn(e){return e.dynamicChildren=Xn>0?qn||r["a"]:null,Jn(),Xn>0&&qn&&qn.push(e),e}function Zn(e,t,n,r,o,i){return Qn(sr(e,t,n,r,o,i,!0))}function er(e,t,n,r,o){return Qn(ar(e,t,n,r,o,!0))}function tr(e){return!!e&&!0===e.__v_isVNode}function nr(e,t){return e.type===t.type&&e.key===t.key}const rr="__vInternal",or=({key:e})=>null!=e?e:null,ir=({ref:e})=>null!=e?Object(r["D"])(e)||Me(e)||Object(r["p"])(e)?{i:Je,r:e}:e:null;function sr(e,t=null,n=null,o=0,i=null,s=(e===Bn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&or(t),ref:t&&ir(t),scopeId:Xe,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(mr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Xn>0&&!a&&qn&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&qn.push(u),u}const ar=cr;function cr(e,t=null,n=null,o=0,i=null,s=!1){if(e&&e!==Dn||(e=Wn),tr(e)){const r=lr(e,t,!0);return n&&mr(r,n),r}if(zr(e)&&(e=e.__vccOpts),t){t=ur(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(xe(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:at(e)?128:Pn(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return sr(e,t,n,o,i,a,s,!0)}function ur(e){return e?xe(e)||rr in e?Object(r["h"])({},e):e:null}function lr(e,t,n=!1){const{props:o,ref:i,patchFlag:s,children:a}=e,c=t?gr(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&or(c),ref:t&&t.ref?n&&i?Object(r["o"])(i)?i.concat(ir(t)):[i,ir(t)]:ir(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Bn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lr(e.ssContent),ssFallback:e.ssFallback&&lr(e.ssFallback),el:e.el,anchor:e.anchor};return u}function dr(e=" ",t=0){return ar(zn,null,e,t)}function fr(e,t){const n=ar(Gn,null,e);return n.staticCount=t,n}function hr(e="",t=!1){return t?(Kn(),er(Wn,null,e)):ar(Wn,null,e)}function pr(e){return null==e||"boolean"===typeof e?ar(Wn):Object(r["o"])(e)?ar(Bn,null,e.slice()):"object"===typeof e?vr(e):ar(zn,null,String(e))}function vr(e){return null===e.el||e.memo?e:lr(e)}function mr(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),mr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||rr in t?3===r&&Je&&(1===Je.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Je}}else Object(r["p"])(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),64&o?(n=16,t=[dr(t)]):n=8);e.children=t,e.shapeFlag|=n}function gr(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=Object(r["I"])([t.class,o.class]));else if("style"===e)t.style=Object(r["J"])([t.style,o.style]);else if(Object(r["w"])(e)){const n=t[e],i=o[e];n===i||Object(r["o"])(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=o[e])}return t}function br(e,t,n,o){let i;const s=n&&n[o];if(Object(r["o"])(e)||Object(r["D"])(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[o]=i),i}function yr(e,t,n={},r,o){if(Je.isCE)return ar("slot","default"===t?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),Kn();const s=i&&_r(i(n)),a=er(Bn,{key:n.key||"_"+t},s||(r?r():[]),s&&1===e._?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function _r(e){return e.some(e=>!tr(e)||e.type!==Wn&&!(e.type===Bn&&!_r(e.children)))?e:null}const Or=e=>e?Ar(e)?$r(e)||e.proxy:Or(e.parent):null,wr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>Kt(e),$forceUpdate:e=>()=>uo(e.update),$nextTick:e=>ao.bind(e.proxy),$watch:e=>Io.bind(e)}),Ir={get({_:e},t){const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=1,o[t];if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];zt&&(a[t]=0)}}const d=wr[t];let f,h;return d?("$attrs"===t&&T(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(h=u.config.globalProperties,Object(r["k"])(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(o,a)||Object(r["k"])(wr,a)||Object(r["k"])(i.config.globalProperties,a)}};const Er=wn();let jr=0;function kr(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||Er,a={uid:jr++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cn(o,i),emitsOptions:qe(o,i),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:o.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=He.bind(null,a),e.ce&&e.ce(a),a}let Sr=null;const Tr=()=>Sr||Je,xr=e=>{Sr=e,e.scope.on()},Cr=()=>{Sr&&Sr.scope.off(),Sr=null};function Ar(e){return 4&e.vnode.shapeFlag}let Rr,Pr,Nr=!1;function Lr(e,t=!1){Nr=t;const{props:n,children:r}=e.vnode,o=Ar(e);rn(e,n,o,t),bn(e,r);const i=o?Mr(e,t):void 0;return Nr=!1,i}function Mr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ae(new Proxy(e.ctx,Ir));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Vr(e):null;xr(e),j();const i=Wr(o,e,0,[e.props,n]);if(S(),Cr(),Object(r["y"])(i)){if(i.then(Cr,Cr),t)return i.then(n=>{Dr(e,n,t)}).catch(t=>{Hr(t,e,0)});e.asyncDep=i}else Dr(e,i,t)}else Ur(e,t)}function Dr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=ze(t)),Ur(e,n)}function Ur(e,t,n){const o=e.type;if(!e.render){if(!t&&Rr&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},i),a);o.render=Rr(t,c)}}e.render=o.render||r["d"],Pr&&Pr(e)}xr(e),j(),Wt(e),S(),Cr()}function Fr(e){return new Proxy(e.attrs,{get(t,n){return T(e,"get","$attrs"),t[n]}})}function Vr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Fr(e))},slots:e.slots,emit:e.emit,expose:t}}function $r(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ze(Ae(e.exposed)),{get(t,n){return n in t?t[n]:n in wr?wr[n](e):void 0}}))}function Br(e){return Object(r["p"])(e)&&e.displayName||e.name}function zr(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Wr(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){Hr(i,t,n)}return o}function Gr(e,t,n,o){if(Object(r["p"])(e)){const i=Wr(e,t,n,o);return i&&Object(r["y"])(i)&&i.catch(e=>{Hr(e,t,n)}),i}const i=[];for(let r=0;r<e.length;r++)i.push(Gr(e[r],t,n,o));return i}function Hr(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,i))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Wr(s,null,10,[e,o,i])}qr(e,n,o,r)}function qr(e,t,n,r=!0){console.error(e)}let Kr=!1,Jr=!1;const Xr=[];let Yr=0;const Qr=[];let Zr=null,eo=0;const to=[];let no=null,ro=0;const oo=Promise.resolve();let io=null,so=null;function ao(e){const t=io||oo;return e?t.then(this?e.bind(this):e):t}function co(e){let t=Yr+1,n=Xr.length;while(t<n){const r=t+n>>>1,o=bo(Xr[r]);o<e?t=r+1:n=r}return t}function uo(e){Xr.length&&Xr.includes(e,Kr&&e.allowRecurse?Yr+1:Yr)||e===so||(null==e.id?Xr.push(e):Xr.splice(co(e.id),0,e),lo())}function lo(){Kr||Jr||(Jr=!0,io=oo.then(yo))}function fo(e){const t=Xr.indexOf(e);t>Yr&&Xr.splice(t,1)}function ho(e,t,n,o){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),lo()}function po(e){ho(e,Zr,Qr,eo)}function vo(e){ho(e,no,to,ro)}function mo(e,t=null){if(Qr.length){for(so=t,Zr=[...new Set(Qr)],Qr.length=0,eo=0;eo<Zr.length;eo++)Zr[eo]();Zr=null,eo=0,so=null,mo(e,t)}}function go(e){if(to.length){const e=[...new Set(to)];if(to.length=0,no)return void no.push(...e);for(no=e,no.sort((e,t)=>bo(e)-bo(t)),ro=0;ro<no.length;ro++)no[ro]();no=null,ro=0}}const bo=e=>null==e.id?1/0:e.id;function yo(e){Jr=!1,Kr=!0,mo(e),Xr.sort((e,t)=>bo(e)-bo(t));r["d"];try{for(Yr=0;Yr<Xr.length;Yr++){const e=Xr[Yr];e&&!1!==e.active&&Wr(e,null,14)}}finally{Yr=0,Xr.length=0,go(e),Kr=!1,io=null,(Xr.length||Qr.length||to.length)&&yo(e)}}const _o={};function Oo(e,t,n){return wo(e,t,n)}function wo(e,t,{immediate:n,deep:o,flush:i,onTrack:s,onTrigger:a}=r["b"]){const c=Sr;let u,l,d=!1,f=!1;if(Me(e)?(u=()=>e.value,d=!!e._shallow):Se(e)?(u=()=>e,o=!0):Object(r["o"])(e)?(f=!0,d=e.some(Se),u=()=>e.map(e=>Me(e)?e.value:Se(e)?jo(e):Object(r["p"])(e)?Wr(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>Wr(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Gr(e,c,3,[h])}:r["d"],t&&o){const e=u;u=()=>jo(e())}let h=e=>{l=g.onStop=()=>{Wr(e,c,4)}};if(Nr)return h=r["d"],t?n&&Gr(t,c,3,[u(),f?[]:void 0,h]):u(),r["d"];let p=f?[]:_o;const v=()=>{if(g.active)if(t){const e=g.run();(o||d||(f?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),Gr(t,c,3,[e,p===_o?void 0:p,h]),p=e)}else g.run()};let m;v.allowRecurse=!!t,m="sync"===i?v:"post"===i?()=>kn(v,c&&c.suspense):()=>{!c||c.isMounted?po(v):v()};const g=new O(u,m);return t?n?v():p=g.run():"post"===i?kn(g.run.bind(g),c&&c.suspense):g.run(),()=>{g.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,g)}}function Io(e,t,n){const o=this.proxy,i=Object(r["D"])(e)?e.includes(".")?Eo(o,e):()=>o[e]:e.bind(o,o);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=Sr;xr(this);const c=wo(i,s.bind(o),n);return a?xr(a):Cr(),c}function Eo(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function jo(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Me(e))jo(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)jo(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{jo(e,t)});else if(Object(r["x"])(e))for(const n in e)jo(e[n],t);return e}function ko(e,t,n){const o=arguments.length;return 2===o?Object(r["v"])(t)&&!Object(r["o"])(t)?tr(t)?ar(e,null,[t]):ar(e,t):ar(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&tr(n)&&(n=[n]),ar(e,t,n))}Symbol("");const So="3.2.23",To="http://www.w3.org/2000/svg",xo="undefined"!==typeof document?document:null,Co=new Map,Ao={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?xo.createElementNS(To,e):xo.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>xo.createTextNode(e),createComment:e=>xo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xo.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const o=n?n.previousSibling:t.lastChild;let i=Co.get(e);if(!i){const t=xo.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,i=t.content,r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}Co.set(e,i)}return t.insertBefore(i.cloneNode(!0),n),[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ro(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Po(e,t,n){const o=e.style,i=Object(r["D"])(n);if(n&&!i){for(const e in n)Lo(o,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Lo(o,e,"")}else{const r=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const No=/\s*!important$/;function Lo(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Lo(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const o=Uo(e,t);No.test(n)?e.setProperty(Object(r["l"])(o),n.replace(No,""),"important"):e[o]=n}}const Mo=["Webkit","Moz","ms"],Do={};function Uo(e,t){const n=Do[t];if(n)return n;let o=Object(r["e"])(t);if("filter"!==o&&o in e)return Do[t]=o;o=Object(r["f"])(o);for(let r=0;r<Mo.length;r++){const n=Mo[r]+o;if(n in e)return Do[t]=n}return t}const Fo="http://www.w3.org/1999/xlink";function Vo(e,t,n,o,i){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Fo,t.slice(6,t.length)):e.setAttributeNS(Fo,t,n);else{const o=Object(r["C"])(t);null==n||o&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function $o(e,t,n,o,i,s,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const o=typeof e[t];if("boolean"===o)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===o)return e[t]="",void e.removeAttribute(t);if("number"===o){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Bo=Date.now,zo=!1;if("undefined"!==typeof window){Bo()>document.createEvent("Event").timeStamp&&(Bo=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);zo=!!(e&&Number(e[1])<=53)}let Wo=0;const Go=Promise.resolve(),Ho=()=>{Wo=0},qo=()=>Wo||(Go.then(Ho),Wo=Bo());function Ko(e,t,n,r){e.addEventListener(t,n,r)}function Jo(e,t,n,r){e.removeEventListener(t,n,r)}function Xo(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=Qo(t);if(r){const s=i[t]=Zo(r,o);Ko(e,n,s,a)}else s&&(Jo(e,n,s,a),i[t]=void 0)}}const Yo=/(?:Once|Passive|Capture)$/;function Qo(e){let t;if(Yo.test(e)){let n;t={};while(n=e.match(Yo))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Zo(e,t){const n=e=>{const r=e.timeStamp||Bo();(zo||r>=n.attached-1)&&Gr(ei(e,n.value),t,5,[e])};return n.value=e,n.attached=qo(),n}function ei(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const ti=/^on[a-z]/,ni=(e,t,n,o,i=!1,s,a,c,u)=>{"class"===t?Ro(e,o,i):"style"===t?Po(e,n,o):Object(r["w"])(t)?Object(r["u"])(t)||Xo(e,t,n,o,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ri(e,t,o,i))?$o(e,t,o,s,a,c,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),Vo(e,t,o,i))};function ri(e,t,n,o){return o?"innerHTML"===t||"textContent"===t||!!(t in e&&ti.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!ti.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const oi="transition",ii="animation",si=(e,{slots:t})=>ko(pt,li(e),t);si.displayName="Transition";const ai={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ci=(si.props=Object(r["h"])({},pt.props,ai),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),ui=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function li(e){const t={};for(const r in e)r in ai||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:h=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,v=di(i),m=v&&v[0],g=v&&v[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:O,onLeaveCancelled:w,onBeforeAppear:I=b,onAppear:E=y,onAppearCancelled:j=_}=t,k=(e,t,n)=>{pi(e,t?d:c),pi(e,t?l:a),n&&n()},S=(e,t)=>{pi(e,p),pi(e,h),t&&t()},T=e=>(t,n)=>{const r=e?E:y,i=()=>k(t,e,n);ci(r,[t,i]),vi(()=>{pi(t,e?u:s),hi(t,e?d:c),ui(r)||gi(t,o,m,i)})};return Object(r["h"])(t,{onBeforeEnter(e){ci(b,[e]),hi(e,s),hi(e,a)},onBeforeAppear(e){ci(I,[e]),hi(e,u),hi(e,l)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){const n=()=>S(e,t);hi(e,f),Oi(),hi(e,h),vi(()=>{pi(e,f),hi(e,p),ui(O)||gi(e,o,g,n)}),ci(O,[e,n])},onEnterCancelled(e){k(e,!1),ci(_,[e])},onAppearCancelled(e){k(e,!0),ci(j,[e])},onLeaveCancelled(e){S(e),ci(w,[e])}})}function di(e){if(null==e)return null;if(Object(r["v"])(e))return[fi(e.enter),fi(e.leave)];{const t=fi(e);return[t,t]}}function fi(e){const t=Object(r["N"])(e);return t}function hi(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function pi(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function vi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let mi=0;function gi(e,t,n,r){const o=e._endId=++mi,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=bi(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,f),i()},f=t=>{t.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,f)}function bi(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(oi+"Delay"),i=r(oi+"Duration"),s=yi(o,i),a=r(ii+"Delay"),c=r(ii+"Duration"),u=yi(a,c);let l=null,d=0,f=0;t===oi?s>0&&(l=oi,d=s,f=i.length):t===ii?u>0&&(l=ii,d=u,f=c.length):(d=Math.max(s,u),l=d>0?s>u?oi:ii:null,f=l?l===oi?i.length:c.length:0);const h=l===oi&&/\b(transform|all)(,|$)/.test(n[oi+"Property"]);return{type:l,timeout:d,propCount:f,hasTransform:h}}function yi(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>_i(t)+_i(e[n])))}function _i(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Oi(){return document.body.offsetHeight}new WeakMap,new WeakMap;const wi=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function Ii(e){e.target.composing=!0}function Ei(e){const t=e.target;t.composing&&(t.composing=!1,ji(t,"input"))}function ji(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const ki={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=wi(i);const s=o||i.props&&"number"===i.props.type;Ko(e,t?"change":"input",t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Object(r["N"])(o)),e._assign(o)}),n&&Ko(e,"change",()=>{e.value=e.value.trim()}),t||(Ko(e,"compositionstart",Ii),Ko(e,"compositionend",Ei),Ko(e,"change",Ei))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:i}},s){if(e._assign=wi(s),e.composing)return;if(document.activeElement===e){if(n)return;if(o&&e.value.trim()===t)return;if((i||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},Si={deep:!0,created(e,t,n){e._assign=wi(n),Ko(e,"change",()=>{const t=e._modelValue,n=Ri(e),o=e.checked,i=e._assign;if(Object(r["o"])(t)){const e=Object(r["G"])(t,n),s=-1!==e;if(o&&!s)i(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),i(n)}}else if(Object(r["B"])(t)){const e=new Set(t);o?e.add(n):e.delete(n),i(e)}else i(Pi(e,o))})},mounted:Ti,beforeUpdate(e,t,n){e._assign=wi(n),Ti(e,t,n)}};function Ti(e,{value:t,oldValue:n},o){e._modelValue=t,Object(r["o"])(t)?e.checked=Object(r["G"])(t,o.props.value)>-1:Object(r["B"])(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=Object(r["F"])(t,Pi(e,!0)))}const xi={created(e,{value:t},n){e.checked=Object(r["F"])(t,n.props.value),e._assign=wi(n),Ko(e,"change",()=>{e._assign(Ri(e))})},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=wi(o),t!==n&&(e.checked=Object(r["F"])(t,o.props.value))}},Ci={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const i=Object(r["B"])(t);Ko(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(r["N"])(Ri(e)):Ri(e));e._assign(e.multiple?i?new Set(t):t:t[0])}),e._assign=wi(o)},mounted(e,{value:t}){Ai(e,t)},beforeUpdate(e,t,n){e._assign=wi(n)},updated(e,{value:t}){Ai(e,t)}};function Ai(e,t){const n=e.multiple;if(!n||Object(r["o"])(t)||Object(r["B"])(t)){for(let o=0,i=e.options.length;o<i;o++){const i=e.options[o],s=Ri(i);if(n)Object(r["o"])(t)?i.selected=Object(r["G"])(t,s)>-1:i.selected=t.has(s);else if(Object(r["F"])(Ri(i),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Ri(e){return"_value"in e?e._value:e.value}function Pi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ni={created(e,t,n){Li(e,t,n,null,"created")},mounted(e,t,n){Li(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Li(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Li(e,t,n,r,"updated")}};function Li(e,t,n,r,o){let i;switch(e.tagName){case"SELECT":i=Ci;break;case"TEXTAREA":i=ki;break;default:switch(n.props&&n.props.type){case"checkbox":i=Si;break;case"radio":i=xi;break;default:i=ki}}const s=i[o];s&&s(e,t,n,r)}const Mi=["ctrl","shift","alt","meta"],Di={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Mi.some(n=>e[n+"Key"]&&!t.includes(n))},Ui=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Di[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Fi=Object(r["h"])({patchProp:ni},Ao);let Vi;function $i(){return Vi||(Vi=Sn(Fi))}const Bi=(...e)=>{const t=$i().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=zi(e);if(!o)return;const i=t._component;Object(r["p"])(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function zi(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),o=n("1d80"),i=r.Object;e.exports=function(e){return i(o(e))}},"7c73":function(e,t,n){var r,o=n("825a"),i=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return f+p+d+e+f+"/"+p+d},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var e=s.length;while(e--)delete _[h][s[e]];return _()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=o(e),n=new m,m[h]=null,n[v]=e):n=_(),void 0===t?n:i(n,t)}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").find,i=n("44d2"),s="find",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i(s)},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),d=n("d44e"),f=n("9112"),h=n("6eeb"),p=n("b622"),v=n("3f8c"),m=n("ae93"),g=s.PROPER,b=s.CONFIGURABLE,y=m.IteratorPrototype,_=m.BUGGY_SAFARI_ITERATORS,O=p("iterator"),w="keys",I="values",E="entries",j=function(){return this};e.exports=function(e,t,n,s,p,m,k){c(n,t,s);var S,T,x,C=function(e){if(e===p&&L)return L;if(!_&&e in P)return P[e];switch(e){case w:return function(){return new n(this,e)};case I:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},A=t+" Iterator",R=!1,P=e.prototype,N=P[O]||P["@@iterator"]||p&&P[p],L=!_&&N||C(p),M="Array"==t&&P.entries||N;if(M&&(S=u(M.call(new e)),S!==Object.prototype&&S.next&&(i||u(S)===y||(l?l(S,y):a(S[O])||h(S,O,j)),d(S,A,!0,!0),i&&(v[A]=j))),g&&p==I&&N&&N.name!==I&&(!i&&b?f(P,"name",I):(R=!0,L=function(){return o(N,this)})),p)if(T={values:C(I),keys:m?L:C(w),entries:C(E)},k)for(x in T)(_||R||!(x in P))&&h(P,x,T[x]);else r({target:t,proto:!0,forced:_||R},T);return i&&!k||P[O]===L||h(P,O,L,{name:p}),v[t]=L,T}},"7f9a":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("8925"),s=r.WeakMap;e.exports=o(s)&&/native code/.test(i(s))},"825a":function(e,t,n){var r=n("da84"),o=n("861d"),i=r.String,s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),o=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?o.f(e,s,i(0,n)):e[s]=n}},"841c":function(e,t,n){"use strict";var r=n("c65b"),o=n("d784"),i=n("825a"),s=n("1d80"),a=n("129f"),c=n("577e"),u=n("dc4a"),l=n("14c3");o("search",(function(e,t,n){return[function(t){var n=s(this),o=void 0==t?void 0:u(t,e);return o?r(o,t,n):new RegExp(t)[e](c(n))},function(e){var r=i(this),o=c(e),s=n(t,r,o);if(s.done)return s.value;var u=r.lastIndex;a(u,0)||(r.lastIndex=0);var d=l(r,o);return a(r.lastIndex,u)||(r.lastIndex=u),null===d?-1:d.index}]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),o=n("1626"),i=n("c6cd"),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},"90e3":function(e,t,n){var r=n("e330"),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},9112:function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),o=n("e330"),i=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,d=n("fce3"),f=n("107c"),h=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,m=o("".charAt),g=o("".indexOf),b=o("".replace),y=o("".slice),_=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),O=a.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],I=_||w||O||d||f;I&&(v=function(e){var t,n,o,a,c,d,f,I=this,E=l(I),j=i(e),k=E.raw;if(k)return k.lastIndex=I.lastIndex,t=r(v,k,j),I.lastIndex=k.lastIndex,t;var S=E.groups,T=O&&I.sticky,x=r(s,I),C=I.source,A=0,R=j;if(T&&(x=b(x,"y",""),-1===g(x,"g")&&(x+="g"),R=y(j,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==m(j,I.lastIndex-1))&&(C="(?: "+C+")",R=" "+R,A++),n=new RegExp("^(?:"+C+")",x)),w&&(n=new RegExp("^"+C+"$(?!\\s)",x)),_&&(o=I.lastIndex),a=r(p,T?n:I,R),T?a?(a.input=y(a.input,A),a[0]=y(a[0],A),a.index=I.lastIndex,I.lastIndex+=a[0].length):I.lastIndex=0:_&&a&&(I.lastIndex=I.global?a.index+a[0].length:o),w&&a&&a.length>1&&r(h,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&S)for(a.groups=d=u(null),c=0;c<S.length;c++)f=S[c],d[f[0]]=a[f[1]];return a}),e.exports=v},9483:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,o=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function i(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var i=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){o()?(c(e,i,n),navigator.serviceWorker.ready.then((function(e){i("ready",e)})).catch((function(e){return s(i,e)}))):(a(e,i,n),navigator.serviceWorker.ready.then((function(e){i("ready",e)})).catch((function(e){return s(i,e)})))}))}function s(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return s(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return s(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return s(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},"94ca":function(e,t,n){var r=n("d039"),o=n("1626"),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),d=n("65f0"),f=n("1dde"),h=n("b622"),p=n("2d00"),v=h("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",b=o.TypeError,y=p>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),_=f("concat"),O=function(e){if(!a(e))return!1;var t=e[v];return void 0!==t?!!t:s(e)},w=!y||!_;r({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,r,o,i,s=c(this),a=d(s,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?s:arguments[t],O(i)){if(o=u(i),f+o>m)throw b(g);for(n=0;n<o;n++,f++)n in i&&l(a,f,i[n])}else{if(f>=m)throw b(g);l(a,f++,i)}return a.length=f,a}})},"9a1f":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(i(n))return s(o(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),o=n("83ab"),i=n("0cfb"),s=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;t.f=o?u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=o(r,{next:i(1,n)}),s(e,u,!1,!0),a[u]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),o=n("da84"),i=o.RegExp,s=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=s||r((function(){return!i("a","y").sticky})),c=s||r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return oe})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return P})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return U})),n.d(t,"q",(function(){return i})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return q})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return $})),n.d(t,"w",(function(){return T})),n.d(t,"x",(function(){return H})),n.d(t,"y",(function(){return B})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return g})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return F})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return y})),n.d(t,"G",(function(){return _})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return h})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return A})),n.d(t,"L",(function(){return O})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return ie})),n.d(t,"O",(function(){return G}));const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=F(r)?f(r):u(r);if(o)for(const e in o)t[e]=o[e]}return t}return F(e)||$(e)?e:void 0}const l=/;(?![^(]*\))/g,d=/:(.+)/;function f(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function h(e){let t="";if(F(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",v="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),g=r(v);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=N(e),r=N(t),n||r)return!(!n||!r)&&b(e,t);if(n=$(e),r=$(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>y(e,t))}const O=e=>null==e?"":N(e)||$(e)&&(e.toString===z||!U(e.toString))?JSON.stringify(e,w,2):String(e),w=(e,t)=>t&&t.__v_isRef?w(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!$(t)||N(t)||H(t)?t:String(t),I={},E=[],j=()=>{},k=()=>!1,S=/^on[^a-z]/,T=e=>S.test(e),x=e=>e.startsWith("onUpdate:"),C=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,P=(e,t)=>R.call(e,t),N=Array.isArray,L=e=>"[object Map]"===W(e),M=e=>"[object Set]"===W(e),D=e=>e instanceof Date,U=e=>"function"===typeof e,F=e=>"string"===typeof e,V=e=>"symbol"===typeof e,$=e=>null!==e&&"object"===typeof e,B=e=>$(e)&&U(e.then)&&U(e.catch),z=Object.prototype.toString,W=e=>z.call(e),G=e=>W(e).slice(8,-1),H=e=>"[object Object]"===W(e),q=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,Y=J(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Q=/\B([A-Z])/g,Z=J(e=>e.replace(Q,"-$1").toLowerCase()),ee=J(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=J(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},oe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ie=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let se;const ae=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),o=n("d9b5");e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),d=n("6eeb"),f=!!i&&s((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!o&&c(i)){var h=a("Promise").prototype["finally"];i.prototype["finally"]!==h&&d(i.prototype,"finally",h,{unsafe:!0})}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("e330"),s=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),d=n("d9b5"),f=n("c04e"),h=n("d039"),p=n("241c").f,v=n("06cf").f,m=n("9bf2").f,g=n("408a"),b=n("58a8").trim,y="Number",_=o[y],O=_.prototype,w=o.TypeError,I=i("".slice),E=i("".charCodeAt),j=function(e){var t=f(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,n,r,o,i,s,a,c,u=f(e,"number");if(d(u))throw w("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=b(u),t=E(u,0),43===t||45===t){if(n=E(u,2),88===n||120===n)return NaN}else if(48===t){switch(E(u,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(i=I(u,2),s=i.length,a=0;a<s;a++)if(c=E(i,a),c<48||c>o)return NaN;return parseInt(i,r)}return+u};if(s(y,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,T=function(e){var t=arguments.length<1?0:_(j(e)),n=this;return l(O,n)&&h((function(){g(n)}))?u(Object(t),n,T):t},x=r?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;x.length>C;C++)c(_,S=x[C])&&!c(T,S)&&m(T,S,v(_,S));T.prototype=O,O.constructor=T,a(o,y,T)}},abc5:function(e,t,n){"use strict";(function(e){function r(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));const i="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,o,i,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),d=n("b622"),f=n("c430"),h=d("iterator"),p=!1;[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(r=o)):p=!0);var v=void 0==r||s((function(){var e={};return r[h].call(e)!==e}));v?r={}:f&&(r=c(r)),a(r[h])||l(r,h,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var r=n("00ee"),o=n("f5df");e.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),o=n("5e77").EXISTS,i=n("e330"),s=n("9bf2").f,a=Function.prototype,c=i(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(u.exec),d="name";r&&!o&&s(a,d,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,o,i,s,a,c,u,l,d=n("da84"),f=n("0366"),h=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),m=n("d4c3"),g=n("a4b4"),b=n("605d"),y=d.MutationObserver||d.WebKitMutationObserver,_=d.document,O=d.process,w=d.Promise,I=h(d,"queueMicrotask"),E=I&&I.value;E||(r=function(){var e,t;b&&(e=O.domain)&&e.exit();while(o){t=o.fn,o=o.next;try{t()}catch(n){throw o?s():i=void 0,n}}i=void 0,e&&e.enter()},v||b||g||!y||!_?!m&&w&&w.resolve?(u=w.resolve(void 0),u.constructor=w,l=f(u.then,u),s=function(){l(r)}):b?s=function(){O.nextTick(r)}:(p=f(p,d),s=function(){p(r)}):(a=!0,c=_.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,s()),i=t}},b622:function(e,t,n){var r=n("da84"),o=n("5692"),i=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=o("wks"),l=r.Symbol,d=l&&l["for"],f=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!i(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&i(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):f(t)}return u[e]}},b727:function(e,t,n){var r=n("0366"),o=n("e330"),i=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=o([].push),l=function(e){var t=1==e,n=2==e,o=3==e,l=4==e,d=6==e,f=7==e,h=5==e||d;return function(p,v,m,g){for(var b,y,_=s(p),O=i(_),w=r(v,m),I=a(O),E=0,j=g||c,k=t?j(p,I):n||f?j(p,0):void 0;I>E;E++)if((h||E in O)&&(b=O[E],y=w(b,E,_),e))if(t)k[E]=y;else if(y)switch(e){case 3:return!0;case 5:return b;case 6:return E;case 2:u(k,b)}else switch(e){case 4:return!1;case 7:u(k,b)}return d?-1:o||l?l:k}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b774:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r="devtools-plugin:setup",o="plugin:settings:set"},c04e:function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,d=u("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,r=a(e,d);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),o=n("1a2d"),i=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),o=n("861d"),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(e,t,n){var r=n("825a"),o=n("861d"),i=n("f069");e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),o=n("1626"),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),o=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,o=n("1a2d"),i=n("b622"),s=i("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),o=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==o.Pebble},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),o=n("6eeb"),i=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,d){var f=a(e),h=!s((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=h&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!h||!p||n){var v=r(/./[f]),m=t(f,""[e],(function(e,t,n,o,s){var a=r(e),c=t.exec;return c===i||c===l.exec?h&&!s?{done:!0,value:v(t,n,o)}:{done:!0,value:a(n,t,o)}:{done:!1}}));o(String.prototype,e,m[0]),o(l,f,m[1])}d&&c(l[f],"sham",!0)}},d9b5:function(e,t,n){var r=n("da84"),o=n("d066"),i=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),d=s.values,f=function(e,t){if(e){if(e[u]!==d)try{a(e,u,d)}catch(r){e[u]=d}if(e[l]||a(e,l,t),o[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var h in o)f(r[h]&&r[h].prototype,h);f(i,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},e163:function(e,t,n){var r=n("da84"),o=n("1a2d"),i=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,d=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(o(t,u))return t[u];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?d:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,o=n.call,i=r&&r.bind(o);e.exports=r?function(e){return e&&i(o,e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=i[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,o,i,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),d=n("c65b"),f=n("fea9"),h=n("6eeb"),p=n("e2cc"),v=n("d2bb"),m=n("d44e"),g=n("2626"),b=n("59ed"),y=n("1626"),_=n("861d"),O=n("19aa"),w=n("8925"),I=n("2266"),E=n("1c7e"),j=n("4840"),k=n("2cf4").set,S=n("b575"),T=n("cdf9"),x=n("44de"),C=n("f069"),A=n("e667"),R=n("69f3"),P=n("94ca"),N=n("b622"),L=n("6069"),M=n("605d"),D=n("2d00"),U=N("species"),F="Promise",V=R.get,$=R.set,B=R.getterFor(F),z=f&&f.prototype,W=f,G=z,H=u.TypeError,q=u.document,K=u.process,J=C.f,X=J,Y=!!(q&&q.createEvent&&u.dispatchEvent),Q=y(u.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,re=2,oe=1,ie=2,se=!1,ae=P(F,(function(){var e=w(W),t=e!==String(W);if(!t&&66===D)return!0;if(c&&!G["finally"])return!0;if(D>=51&&/native code/.test(e))return!1;var n=new W((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},o=n.constructor={};return o[U]=r,se=n.then((function(){}))instanceof r,!se||!t&&L&&!Q})),ce=ae||!E((function(e){W.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!_(e)||!y(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;S((function(){var r=e.value,o=e.state==ne,i=0;while(n.length>i){var s,a,c,u=n[i++],l=o?u.ok:u.fail,f=u.resolve,h=u.reject,p=u.domain;try{l?(o||(e.rejection===ie&&pe(e),e.rejection=oe),!0===l?s=r:(p&&p.enter(),s=l(r),p&&(p.exit(),c=!0)),s===u.promise?h(H("Promise-chain cycle")):(a=ue(s))?d(a,s,f,h):f(s)):h(r)}catch(v){p&&!c&&p.exit(),h(v)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&fe(e)}))}},de=function(e,t,n){var r,o;Y?(r=q.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Q&&(o=u["on"+e])?o(r):e===Z&&x("Unhandled promise rejection",n)},fe=function(e){d(k,u,(function(){var t,n=e.facade,r=e.value,o=he(e);if(o&&(t=A((function(){M?K.emit("unhandledRejection",r,n):de(Z,n,r)})),e.rejection=M||he(e)?ie:oe,t.error))throw t.value}))},he=function(e){return e.rejection!==oe&&!e.parent},pe=function(e){d(k,u,(function(){var t=e.facade;M?K.emit("rejectionHandled",t):de(ee,t,e.value)}))},ve=function(e,t,n){return function(r){e(t,r,n)}},me=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,le(e,!0))},ge=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw H("Promise can't be resolved itself");var r=ue(t);r?S((function(){var n={done:!1};try{d(r,t,ve(ge,n,e),ve(me,n,e))}catch(o){me(n,o,e)}})):(e.value=t,e.state=ne,le(e,!1))}catch(o){me({done:!1},o,e)}}};if(ae&&(W=function(e){O(this,G),b(e),d(r,this);var t=V(this);try{e(ve(ge,t),ve(me,t))}catch(n){me(t,n)}},G=W.prototype,r=function(e){$(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},r.prototype=p(G,{then:function(e,t){var n=B(this),r=n.reactions,o=J(j(this,W));return o.ok=!y(e)||e,o.fail=y(t)&&t,o.domain=M?K.domain:void 0,n.parent=!0,r[r.length]=o,n.state!=te&&le(n,!1),o.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r,t=V(e);this.promise=e,this.resolve=ve(ge,t),this.reject=ve(me,t)},C.f=J=function(e){return e===W||e===i?new o(e):X(e)},!c&&y(f)&&z!==Object.prototype)){s=z.then,se||(h(z,"then",(function(e,t){var n=this;return new W((function(e,t){d(s,n,e,t)})).then(e,t)}),{unsafe:!0}),h(z,"catch",G["catch"],{unsafe:!0}));try{delete z.constructor}catch(be){}v&&v(z,G)}a({global:!0,wrap:!0,forced:ae},{Promise:W}),m(W,F,!1,!0),g(F),i=l(F),a({target:F,stat:!0,forced:ae},{reject:function(e){var t=J(this);return d(t.reject,void 0,e),t.promise}}),a({target:F,stat:!0,forced:c||ae},{resolve:function(e){return T(c&&this===i?W:this,e)}}),a({target:F,stat:!0,forced:ce},{all:function(e){var t=this,n=J(t),r=n.resolve,o=n.reject,i=A((function(){var n=b(t.resolve),i=[],s=0,a=1;I(e,(function(e){var c=s++,u=!1;a++,d(n,t,e).then((function(e){u||(u=!0,i[c]=e,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=J(t),r=n.reject,o=A((function(){var o=b(t.resolve);I(e,(function(e){d(o,t,e).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),o=n("56ef"),i=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=o(t),a=s.f,c=i.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[i]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return Je})),n.d(t,"b",(function(){return Xe})),n.d(t,"c",(function(){return ct})),n.d(t,"d",(function(){return fr})),n.d(t,"e",(function(){return ft})),n.d(t,"f",(function(){return ut})),n.d(t,"g",(function(){return fn})),n.d(t,"h",(function(){return ht})),n.d(t,"i",(function(){return dt}));var r=n("1fd5"),o=n("589b");function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),d=new s["b"]("@firebase/auth");function f(e,...t){d.logLevel<=s["a"].ERROR&&d.error(`Auth (${o["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function v(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r["b"]("auth","Firebase",o);return i.create(t,{appName:e.name})}function m(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&h(e,"argument-error"),v(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function b(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new Map;function w(e){_(e instanceof Function,"Expected a class definition");let t=O.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,O.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const n=Object(o["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if(Object(r["g"])(o,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const i=n.initialize({options:t});return i}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["p"])()||Object(r["q"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,o,i={}){return D(e,i,()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=Object(r["t"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=new(R.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),R.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function D(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},P),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw $(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);h(e,a)}}catch(i){if(i instanceof r["c"])throw i;h(e,"network-request-failed")}}async function U(e,t,n,r,o={}){const i=await M(e,t,n,r,o);return"mfaPendingCredential"in i&&h(e,"multi-factor-auth-required",{_serverResponse:i}),i}function F(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?A(e.config,o):`${e.config.apiScheme}://${o}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"timeout")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){const n=Object(r["i"])(e),o=await n.getIdToken(t),i=q(o);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:W(H(i.auth_time)),issuedAtTime:W(H(i.iat)),expirationTime:W(H(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function q(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",i),null}}function K(e){const t=q(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r["c"]&&X(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),o=await J(e,z(n,{idToken:r}));b(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?ne(i.providerUserInfo):[],a=te(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Q(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function ee(e){const t=Object(r["i"])(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function ne(e){return e.map(e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){const n=await D(e,{},()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=F(e,o,"/v1/token","key="+i);return R.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new oe;return n&&(b("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(b("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.metadata=new Q(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:O,providerData:w,stsTokenManager:I}=t;b(y&&I,e,"internal-error");const E=oe.fromJSON(this.name,I);b("string"===typeof y,e,"internal-error"),ie(l,e.name),ie(d,e.name),b("boolean"===typeof _,e,"internal-error"),b("boolean"===typeof O,e,"internal-error"),ie(f,e.name),ie(h,e.name),ie(p,e.name),ie(v,e.name),ie(m,e.name),ie(g,e.name);const j=new se({uid:y,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:O,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(j.providerData=w.map(e=>Object.assign({},e))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const o=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const ce=ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ue(this.userKey,r.apiKey,o),this.fullPersistenceKey=ue("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ce),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let o=r[0]||w(ce);const i=ue(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=se._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==o)try{await e._remove(i)}catch(c){}})),new le(o,e,n)):new le(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ve(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(be(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=Object(r["j"])()){return/firefox\//i.test(e)}function he(e=Object(r["j"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=Object(r["j"])()){return/crios\//i.test(e)}function ve(e=Object(r["j"])()){return/iemobile/i.test(e)}function me(e=Object(r["j"])()){return/android/i.test(e)}function ge(e=Object(r["j"])()){return/blackberry/i.test(e)}function be(e=Object(r["j"])()){return/webos/i.test(e)}function ye(e=Object(r["j"])()){return/iphone|ipad|ipod/i.test(e)}function _e(e=Object(r["j"])()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Oe(){return Object(r["n"])()&&10===document.documentMode}function we(e=Object(r["j"])()){return ye(e)||me(e)||be(e)||ge(e)||/windows phone/i.test(e)||ve(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=de(Object(r["j"])());break;case"Worker":n=`${de(Object(r["j"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o["a"]}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;this._deleted||(this.persistenceManager=await le.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);r&&r!==o||!(null===i||void 0===i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["i"])(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return b(i,this,"internal-error"),i.then(()=>o(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ke(e){return Object(r["i"])(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ae(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Re(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Te{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ce(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="http://localhost";class Me extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Me(n,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ne(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["t"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Ue(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Fe(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const Ve={["USER_NOT_FOUND"]:"user-not-found"};async function $e(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ve)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Be({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Be({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ue(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $e(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new Be({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function We(e){const t=Object(r["u"])(Object(r["h"])(e))["link"],n=t?Object(r["u"])(Object(r["h"])(t))["deep_link_id"]:null,o=Object(r["u"])(Object(r["h"])(e))["deep_link_id"],i=o?Object(r["u"])(Object(r["h"])(o))["link"]:null;return i||o||n||t||e}class Ge{constructor(e){var t,n,o,i,s,a;const c=Object(r["u"])(Object(r["h"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=ze(null!==(o=c["mode"])&&void 0!==o?o:null);b(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=We(e);try{return new Ge(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(){this.providerId=He.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ge.parseLink(t);return b(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}He.PROVIDER_ID="password",He.EMAIL_PASSWORD_SIGN_IN_METHOD="password",He.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends qe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ke{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Me._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com",Xe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ke{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com",Ye.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ke{constructor(){super("twitter.com")}static credential(e,t){return Me._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ze(e,t){return U(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await se._fromIdTokenResponse(e,n,r),i=tt(n),s=new et({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends r["c"]{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return et._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await J(e,rt(r,o,t,e),n);b(i.idToken,r,"internal-error");const s=q(i.idToken);b(s,r,"internal-error");const{sub:a}=s;return b(e.uid===a,r,"user-mismatch"),et._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&h(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){const r="signIn",o=await rt(e,r,t),i=await et._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function at(e,t){return st(ke(e),t)}async function ct(e,t,n){const r=ke(e),o=await Ze(r,{returnSecureToken:!0,email:t,password:n}),i=await et._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(i.user),i}function ut(e,t,n){return at(Object(r["i"])(e),He.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lt(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const o=Object(r["i"])(e),i=await o.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},a=await J(o,lt(o.auth,s));o.displayName=a.displayName||null,o.photoURL=a.photoUrl||null;const c=o.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=o.displayName,c.photoURL=o.photoURL),await o._updateTokensIfNecessary(a)}function ft(e,t,n,o){return Object(r["i"])(e).onAuthStateChanged(t,n,o)}function ht(e){return Object(r["i"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function vt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const mt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mt,"1"),this.storage.removeItem(mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){const e=Object(r["j"])();return he(e)||ye(e)}const yt=1e3,_t=10;class Ot extends gt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bt()&&Ie(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Oe()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_t):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ot.type="LOCAL";const wt=Ot;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends gt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}It.type="SESSION";const Et=It;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new kt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map(async e=>e(t.origin,o)),a=await jt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function St(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((s,a)=>{const c=St("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function Ct(e){xt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return"undefined"!==typeof xt()["WorkerGlobalScope"]&&"function"===typeof xt()["importScripts"]}async function Rt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Pt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Nt(){return At()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="firebaseLocalStorageDb",Mt=1,Dt="firebaseLocalStorage",Ut="fbase_key";class Ft{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vt(e,t){return e.transaction([Dt],t?"readwrite":"readonly").objectStore(Dt)}function $t(){const e=indexedDB.deleteDatabase(Lt);return new Ft(e).toPromise()}function Bt(){const e=indexedDB.open(Lt,Mt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Dt,{keyPath:Ut})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Dt)?t(n):(n.close(),await $t(),t(await Bt()))})})}async function zt(e,t,n){const r=Vt(e,!0).put({[Ut]:t,value:n});return new Ft(r).toPromise()}async function Wt(e,t){const n=Vt(e,!1).get(t),r=await new Ft(n).toPromise();return void 0===r?null:r.value}function Gt(e,t){const n=Vt(e,!0).delete(t);return new Ft(n).toPromise()}const Ht=800,qt=3;class Kt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Bt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>qt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return At()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kt._getInstance(Nt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rt(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Pt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bt();return await zt(e,mt,"1"),await Gt(e,mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Wt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Vt(e,!1).getAll();return new Ft(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Kt.type="LOCAL";const Jt=Kt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Yt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Zt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Qt().appendChild(r)})}function en(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
en("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn="recaptcha";async function nn(e,t,n){var r;const o=await n.verify();try{let i;if(b("string"===typeof o,e,"argument-error"),b(n.type===tn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){b("enroll"===t.type,e,"internal-error");const n=await pt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;b(n,e,"missing-multi-factor-info");const s=await Xt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e){this.providerId=rn.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return nn(this.auth,e,Object(r["i"])(t))}static credential(e,t){return Be._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rn.credentialFromTaggedObject(t)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Be._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e,t){return t?w(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.PROVIDER_ID="phone",rn.PHONE_SIGN_IN_METHOD="phone";class sn extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ne(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function an(e){return st(e.auth,new sn(e),e.bypassAuthState)}function cn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),it(n,new sn(e),e.bypassAuthState)}async function un(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),ot(n,new sn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return an;case"linkViaPopup":case"linkViaRedirect":return un;case"reauthViaPopup":case"reauthViaRedirect":return cn;default:h(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new C(2e3,1e4);async function fn(e,t,n){const r=ke(e);m(e,t,qe);const o=on(r,n),i=new hn(r,"signInViaPopup",t,o);return i.executeNotNull()}class hn extends ln{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=St();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,dn.get())};e()}}hn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn="pendingRedirect",vn=new Map;class mn extends ln{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const t=await gn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function gn(e,t){const n=yn(t),r=bn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function bn(e){return w(e._redirectPersistence)}function yn(e){return ue(pn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t,n=!1){const r=ke(e),o=on(r,t),i=new mn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On=6e5;class wn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!En(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=On&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(e))}saveEventToCache(e){this.cachedEventUids.add(In(e)),this.lastProcessedEventTime=Date.now()}}function In(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function En({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function jn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return En(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function xn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await kn(e);for(const r of t)try{if(Cn(r))return}catch(n){}h(e,"unauthorized-domain")}function Cn(e){const t=j(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Tn.test(n))return!1;if(Sn.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new C(3e4,6e4);function Rn(){const e=xt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Pn(e){return new Promise((t,n)=>{var r,o,i;function s(){Rn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Rn(),n(p(e,"network-request-failed"))},timeout:An.get()})}if(null===(o=null===(r=xt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=xt().gapi)||void 0===i?void 0:i.load)){const t=en("iframefcb");return xt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Zt("https://apis.google.com/js/api.js?onload="+t)}s()}}).catch(e=>{throw Nn=null,e})}let Nn=null;function Ln(e){return Nn=Nn||Pn(e),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new C(5e3,15e3),Dn="__/auth/iframe",Un="emulator/auth/iframe",Fn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,Un):`https://${e.config.authDomain}/${Dn}`,i={apiKey:t.apiKey,appName:e.name,v:o["a"]},s=Vn.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Object(r["t"])(i).slice(1)}`}async function Bn(e){const t=await Ln(e),n=xt().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:$n(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=xt().setTimeout(()=>{r(o)},Mn.get());function s(){xt().clearTimeout(i),n(t)}t.ping(s).then(s,()=>{r(o)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wn=500,Gn=600,Hn="_blank",qn="http://localhost";class Kn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Jn(e,t,n,o=Wn,i=Gn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},zn),{width:o.toString(),height:i.toString(),top:s,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=pe(l)?Hn:n),fe(l)&&(t=t||qn,u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(_e(l)&&"_self"!==c)return Xn(t||"",c),new Kn(null);const f=window.open(t||"",c,d);b(f,e,"popup-blocked");try{f.focus()}catch(h){}return new Kn(f)}function Xn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="__/auth/handler",Qn="emulator/auth/handler";function Zn(e,t,n,i,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o["a"],eventId:s};if(t instanceof qe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["m"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ke){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${er(e)}?${Object(r["t"])(u).slice(1)}`}function er({config:e}){return e.emulator?A(e,Qn):`https://${e.authDomain}/${Yn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="webStorageSupport";class nr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Et,this._completeRedirectFn=_n}async _openPopup(e,t,n,r){var o;_(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=Zn(e,t,n,j(),r);return Jn(e,i,St())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ct(Zn(e,t,n,j(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Bn(e),n=new wn(e);return t.register("authEvent",t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(tr,{type:tr},n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[tr];void 0!==o&&t(!!o),h(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||ye()}}const rr=nr;class or{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class ir extends or{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ir(e)}_finalizeEnroll(e,t,n){return vt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Yt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sr{constructor(){}static assertion(e){return ir._fromCredential(e)}}sr.FACTOR_ID="phone";var ar="@firebase/auth",cr="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dr(e){Object(o["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:o,authDomain:i}=r.options;return(t=>{b(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),b(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:t.name});const r={apiKey:o,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},s=new je(t,r);return E(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(o["c"])(new a["a"]("auth-internal",e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new ur(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(o["g"])(ar,cr,lr(e)),Object(o["g"])(ar,cr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e=Object(o["e"])()){const t=Object(o["b"])(e,"auth");return t.isInitialized()?t.getImmediate():I(e,{popupRedirectResolver:rr,persistence:[Jt,wt,Et]})}dr("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},f30a:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("b774");class o{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const r in e.settings){const t=e.settings[r];n[r]=t.defaultValue}const o="__vue-devtools-plugin-settings__"+e.id;let i={...n};try{const e=localStorage.getItem(o),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(o,JSON.stringify(e))}catch(s){}i=e}},t.on(r["a"],(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),o=n("00ee"),i=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=o?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),o=n("90e3"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},fc6a:function(e,t,n){var r=n("44ad"),o=n("1d80");e.exports=function(e){return r(o(e))}},fce3:function(e,t,n){var r=n("d039"),o=n("da84"),i=o.RegExp;e.exports=r((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.271907c1.js.map