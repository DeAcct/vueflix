(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-042113c9"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function r(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var s=t.apply(e,n);function a(t){r(s,o,i,a,c,"next",t)}function c(t){r(s,o,i,a,c,"throw",t)}a(void 0)}))}}},"588e":function(t,e,n){"use strict";n.d(e,"a",(function(){return Et})),n.d(e,"b",(function(){return Pt})),n.d(e,"c",(function(){return Ct}));var r=n("589b"),o=n("1fd5"),i=n("22e5");
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
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
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
class h extends o["c"]{constructor(t,e){super(l(t),`Firebase Storage: ${e} (${l(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return l(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function l(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function d(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function _(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function m(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function v(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function y(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function b(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function k(){return new h("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function x(){return new h("no-download-url","The given file does not have any download URLs.")}function R(t){return new h("invalid-argument",t)}function O(){return new h("app-deleted","The Firebase app was deleted.")}function T(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function E(t){throw new h("internal-error","Internal error: "+t)}
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
 */class C{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=C.makeFromUrl(t,e)}catch(r){return new C(t,"")}if(""===n.path)return n;throw b(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const h="v[A-Za-z0-9_]+",l=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${l}/${h}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,_="([^?#]*)",m=new RegExp(`^https?://${g}/${r}/${_}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:c,postModify:o},{regex:d,indices:p,postModify:u},{regex:m,indices:v,postModify:u}];for(let s=0;s<w.length;s++){const e=w[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let o=r[e.indices.path];o||(o=""),n=new C(t,o),e.postModify(n);break}}if(null==n)throw y(t);return n}}class P{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function L(t,e,n){let r=1,o=null,i=null,s=!1,a=0;function c(){return 2===a}let u=!1;function h(...t){u||(u=!0,e.apply(null,t))}function l(e){o=setTimeout(()=>{o=null,t(d,c())},e)}function f(){i&&clearTimeout(i)}function d(t,...e){if(u)return void f();if(t)return f(),void h.call(null,t,...e);const n=c()||s;if(n)return f(),void h.call(null,t,...e);let o;r<64&&(r*=2),1===a?(a=2,o=0):o=1e3*(r+Math.random()),l(o)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==o?(t||(a=2),clearTimeout(o),l(0)):t||(a=1)))}return l(0),i=setTimeout(()=>{s=!0,g(!0)},n),g}function I(t){t(!1)}
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
 */function S(t){return void 0!==t}function j(t){return"object"===typeof t&&!Array.isArray(t)}function U(t){return"string"===typeof t||t instanceof String}function F(t,e,n,r){if(r<e)throw R(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw R(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function A(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function N(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const o=e(r)+"="+e(t[r]);n=n+o+"&"}return n=n.slice(0,-1),n}
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
 */var $;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})($||($={}));
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
class q{constructor(t,e,n,r,o,i,s,a,c,u,h){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new M(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===$.NO_ERROR,o=n.getStatus();if(!e||this.isRetryStatusCode_(o)){const e=n.getErrorCode()===$.ABORT;return void t(!1,new M(!1,null,e))}const i=-1!==this.successCodes_.indexOf(o);t(!0,new M(i,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,o=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(o,o.getResponse());S(t)?n(t):n()}catch(i){r(i)}else if(null!==o){const t=f();t.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,t)):r(t)}else if(e.canceled){const t=this.appDelete_?O():w();r(t)}else{const t=v();r(t)}};this.canceled_?e(!1,new M(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&I(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),o=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||o}}class M{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function D(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function B(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function G(t,e){e&&(t["X-Firebase-GMPID"]=e)}function z(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function H(t,e,n,r,o,i){const s=N(t.urlParams),a=t.url+s,c=Object.assign({},t.headers);return G(c,e),D(c,n),B(c,i),z(c,r),new q(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o)}
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
function X(t){let e;try{e=JSON.parse(t)}catch(n){return null}return j(e)?e:null}
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
 */function V(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function W(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function Y(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function J(t,e){return e}class K{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||J}}let Z=null;function Q(t){return!U(t)||t.length<2?t:Y(t)}function tt(){if(Z)return Z;const t=[];function e(t,e){return Q(e)}t.push(new K("bucket")),t.push(new K("generation")),t.push(new K("metageneration")),t.push(new K("name","fullPath",!0));const n=new K("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const o=new K("size");return o.xform=r,t.push(o),t.push(new K("timeCreated")),t.push(new K("updated")),t.push(new K("md5Hash",null,!0)),t.push(new K("cacheControl",null,!0)),t.push(new K("contentDisposition",null,!0)),t.push(new K("contentEncoding",null,!0)),t.push(new K("contentLanguage",null,!0)),t.push(new K("contentType",null,!0)),t.push(new K("metadata","customMetadata",!0)),Z=t,Z}function et(t,e){function n(){const n=t["bucket"],r=t["fullPath"],o=new C(n,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function nt(t,e,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const t=n[i];r[t.local]=t.xform(r,e[t.server])}return et(r,t),r}function rt(t,e,n){const r=X(e);if(null===r)return null;const o=r;return nt(t,o,n)}function ot(t,e,n,r){const o=X(e);if(null===o)return null;if(!U(o["downloadTokens"]))return null;const i=o["downloadTokens"];if(0===i.length)return null;const s=encodeURIComponent,a=i.split(","),c=a.map(e=>{const o=t["bucket"],i=t["fullPath"],a="/b/"+s(o)+"/o/"+s(i),c=A(a,n,r),u=N({alt:"media",token:e});return c+u});return c[0]}class it{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function st(t){if(!t)throw f()}function at(t,e){function n(n,r){const o=rt(t,r,e);return st(null!==o),ot(o,r,t.host,t._protocol)}return n}function ct(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?_():g():402===e.getStatus()?p(t.bucket):403===e.getStatus()?m(t.path):n,r.serverResponse=n.serverResponse,r}return e}function ut(t){const e=ct(t);function n(n,r){let o=e(n,r);return 404===n.getStatus()&&(o=d(t.path)),o.serverResponse=r.serverResponse,o}return n}function ht(t,e,n){const r=e.fullServerUrl(),o=A(r,t.host,t._protocol),i="GET",s=t.maxOperationRetryTime,a=new it(o,i,at(t,n),s);return a.errorHandler=ut(e),a}
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
let lt=null;class ft{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw E("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw E("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class dt extends ft{initXhr(){this.xhr_.responseType="text"}}function pt(){return lt?lt():new dt}
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
class gt{constructor(t,e){this._service=t,this._location=e instanceof C?e:C.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new gt(t,e)}get root(){const t=new C(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const t=V(this._location.path);if(null===t)return null;const e=new C(this._location.bucket,t);return new gt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw T(t)}}function _t(t){t._throwIfRoot("getDownloadURL");const e=ht(t.storage,t._location,tt());return t.storage.makeRequestWithTokens(e,pt).then(t=>{if(null===t)throw x();return t})}function mt(t,e){const n=W(t._location.path,e),r=new C(t._location.bucket,n);return new gt(t.storage,r)}
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
 */function vt(t){return/^[A-Za-z]+:\/\//.test(t)}function wt(t,e){return new gt(t,e)}function yt(t,e){if(t instanceof xt){const n=t;if(null==n._bucket)throw k();const r=new gt(n,n._bucket);return null!=e?yt(r,e):r}return void 0!==e?mt(t,e):t}function bt(t,e){if(e&&vt(e)){if(t instanceof xt)return wt(t,e);throw R("To use ref(service, url), the first argument must be a Storage instance.")}return yt(t,e)}function kt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:C.makeFromBucketSpec(n,t)}class xt{constructor(t,e,n,r,o){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?C.makeFromBucketSpec(r,this._host):kt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=C.makeFromBucketSpec(this._url,t):this._bucket=kt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new gt(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new P(O());{const o=H(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Rt="@firebase/storage",Ot="0.9.2",Tt="storage";function Et(t){return t=Object(o["i"])(t),_t(t)}function Ct(t,e){return t=Object(o["i"])(t),bt(t,e)}function Pt(t=Object(r["e"])(),e){t=Object(o["i"])(t);const n=Object(r["b"])(t,Tt),i=n.getImmediate({identifier:e});return i}function Lt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new xt(n,o,i,e,r["a"])}function It(){Object(r["c"])(new i["a"](Tt,Lt,"PUBLIC").setMultipleInstances(!0)),Object(r["g"])(Rt,Ot,""),Object(r["g"])(Rt,Ot,"esm2017")}It()},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),s=new P(r||[]);return i._invoke=O(t,n,s),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function _(){}function m(){}function v(){}var w={};c(w,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==n&&r.call(b,i)&&(w=b);var k=v.prototype=_.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function n(o,i,s,a){var c=h(t[o],t,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(l).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function O(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return I()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=T(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=h(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=h(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=v,c(k,"constructor",v),c(v,"constructor",m),m.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(R.prototype),c(R.prototype,s,(function(){return this})),t.AsyncIterator=R,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var s=new R(u(e,n,r,o),i);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(k),c(k,a,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=chunk-042113c9.3de0ecf7.js.map