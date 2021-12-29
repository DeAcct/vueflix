(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cbcd33e"],{"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return s(t)}catch(e){return o(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):s(i(t))}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return hs})),n.d(e,"b",(function(){return Ys})),n.d(e,"c",(function(){return fs})),n.d(e,"d",(function(){return Hs})),n.d(e,"e",(function(){return zs}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
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
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
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
let h="9.6.0";
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
 */const l=new s["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=s["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=s["a"].ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=s["a"].WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function b(t,e){return t}
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class T{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class O{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new O(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class _{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new _(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
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
class R{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */R.I=-1;class j{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function x(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
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
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new L(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function M(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function U(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class F{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===F.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof F?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class q extends F{construct(t,e,n){return new q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new q(e)}static emptyPath(){return new q([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends F{construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
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
class ${constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new $(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new $(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const z=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(t){if(v(!!t),"string"==typeof t){let e=0;const n=z.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?$.fromBase64String(t):$.fromUint8Array(t)}
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
 */function Q(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(t){const e=t.mapValue.fields.__previous_value__;return Q(e)?X(e):e}function Y(t){const e=K(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
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
 */function J(t){return null==t}function Z(t){return 0===t&&1/t==-1/0}function tt(t){return"number"==typeof t&&Number.isInteger(t)&&!Z(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class et{constructor(t){this.path=t}static fromPath(t){return new et(q.fromString(t))}static fromName(t){return new et(q.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===q.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new et(new q(t.slice()))}}
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
 */function nt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q(t)?4:10:y()}function rt(t,e){const n=nt(t);if(n!==nt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=K(t.timestampValue),r=K(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return G(t.geoPointValue.latitude)===G(e.geoPointValue.latitude)&&G(t.geoPointValue.longitude)===G(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return G(t.integerValue)===G(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=G(t.doubleValue),r=G(e.doubleValue);return n===r?Z(n)===Z(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return x(t.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!rt(n[i],r[i])))return!1;return!0}(t,e);default:return y()}}function it(t,e){return void 0!==(t.values||[]).find(t=>rt(t,e))}function st(t,e){const n=nt(t),r=nt(e);if(n!==r)return D(n,r);switch(n){case 0:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=G(t.integerValue||t.doubleValue),r=G(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ot(t.timestampValue,e.timestampValue);case 4:return ot(Y(t),Y(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),r=W(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=D(n[i],r[i]);if(0!==t)return t}return D(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(G(t.latitude),G(e.latitude));return 0!==n?n:D(G(t.longitude),G(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=st(n[i],r[i]);if(t)return t}return D(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=D(r[o],s[o]);if(0!==t)return t;const e=st(n[r[o]],i[s[o]]);if(0!==e)return e}return D(r.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=K(t),r=K(e),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function at(t){return ct(t)}function ct(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=K(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,et.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ct(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ct(t.fields[i])}`;return n+"}"}(t.mapValue):y();var e,n}function ut(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ht(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function dt(t){return!!t&&"nullValue"in t}function ft(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pt(t){return!!t&&"mapValue"in t}function gt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return U(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=gt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!pt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gt(e)}setAll(t){let e=H.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=gt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());pt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];pt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){U(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new mt(gt(this.value))}}
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
class yt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new yt(t,0,P.min(),mt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,n,0)}static newNoDocument(t,e){return new yt(t,2,e,mt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new yt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class vt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function bt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vt(t,e,n,r,i,s,o)}function wt(t){const e=b(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>St(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),J(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Lt(e.startAt)),e.endAt&&(t+="|ub:",t+=Lt(e.endAt)),e.R=t}return e.R}function Et(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${at(e.value)}`;var e}).join(", ")}]`),J(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Lt(t.startAt)),t.endAt&&(e+=", endAt: "+Lt(t.endAt)),`Target(${e})`}function Tt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Mt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!rt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vt(t.startAt,e.startAt)&&Vt(t.endAt,e.endAt)}function Ot(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class It extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new _t(t,e,n):"array-contains"===e?new Rt(t,n):"in"===e?new Nt(t,n):"not-in"===e?new jt(t,n):"array-contains-any"===e?new Dt(t,n):new It(t,e,n)}static P(t,e,n){return"in"===e?new At(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(st(e,this.value)):null!==e&&nt(this.value)===nt(e)&&this.v(st(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function St(t){return t.field.canonicalString()+t.op.toString()+at(t.value)}class _t extends It{constructor(t,e,n){super(t,e,n),this.key=et.fromName(n.referenceValue)}matches(t){const e=et.comparator(t.key,this.key);return this.v(e)}}class At extends It{constructor(t,e){super(t,"in",e),this.keys=Ct("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends It{constructor(t,e){super(t,"not-in",e),this.keys=Ct("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ct(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>et.fromName(t.referenceValue))}class Rt extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lt(e)&&it(e.arrayValue,this.value)}}class Nt extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&it(this.value.arrayValue,e)}}class jt extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(it(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!it(this.value.arrayValue,e)}}class Dt extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>it(this.value.arrayValue,t))}}class xt{constructor(t,e){this.position=t,this.before=e}}function Lt(t){return`${t.before?"b":"a"}:${t.position.map(t=>at(t)).join(",")}`}class Pt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ut(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?et.comparator(et.fromName(o.referenceValue),n.key):st(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Vt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rt(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ft{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function qt(t,e,n,r,i,s,o,a){return new Ft(t,e,n,r,i,s,o,a)}function Bt(t){return new Ft(t)}function Ht(t){return!J(t.limit)&&"F"===t.limitType}function $t(t){return!J(t.limit)&&"L"===t.limitType}function zt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kt(t){for(const e of t.filters)if(e.V())return e.field;return null}function Gt(t){return null!==t.collectionGroup}function Wt(t){const e=b(t);if(null===e.S){e.S=[];const t=Kt(e),n=zt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Pt(t)),e.S.push(new Pt(H.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Pt(H.keyField(),t))}}}return e.S}function Qt(t){const e=b(t);if(!e.D)if("F"===e.limitType)e.D=bt(e.path,e.collectionGroup,Wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Wt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Pt(i.field,e))}const n=e.endAt?new xt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new xt(e.startAt.position,!e.startAt.before):null;e.D=bt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function Xt(t,e,n){return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yt(t,e){return Tt(Qt(t),Qt(e))&&t.limitType===e.limitType}function Jt(t){return`${wt(Qt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${Et(Qt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ut(t.startAt,Wt(t),e))&&(!t.endAt||!Ut(t.endAt,Wt(t),e))}(t,e)}function ee(t){return(e,n)=>{let r=!1;for(const i of Wt(t)){const t=ne(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ne(t,e,n){const r=t.field.isKeyField()?et.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?st(r,i):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
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
 */function re(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(e)?"-0":e}}function ie(t){return{integerValue:""+t}}function se(t,e){return tt(e)?ie(e):re(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof he?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof le?de(t,e):t instanceof fe?pe(t,e):function(t,e){const n=ue(t,e),r=me(n)+me(t.N);return ht(n)&&ht(t.N)?ie(r):re(t.k,r)}(t,e)}function ce(t,e,n){return t instanceof le?de(t,e):t instanceof fe?pe(t,e):n}function ue(t,e){return t instanceof ge?ht(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class he extends oe{}class le extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=ye(e);for(const r of t.elements)n.some(t=>rt(t,r))||n.push(r);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function pe(t,e){let n=ye(e);for(const r of t.elements)n=n.filter(t=>!rt(t,r));return{arrayValue:{values:n}}}class ge extends oe{constructor(t,e){super(),this.k=t,this.N=e}}function me(t){return G(t.integerValue||t.doubleValue)}function ye(t){return lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function ve(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof fe&&e instanceof fe?x(t.elements,e.elements,rt):t instanceof ge&&e instanceof ge?rt(t.N,e.N):t instanceof he&&e instanceof he}(t.transform,e.transform)}function be(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class we{}function Ee(t,e,n){t instanceof Se?function(t,e,n){const r=t.value.clone(),i=ke(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof _e?function(t,e,n){if(!be(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ke(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ae(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Te(t,e,n){t instanceof Se?function(t,e,n){if(!be(t.precondition,e))return;const r=t.value.clone(),i=Ce(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Ie(e),r).setHasLocalMutations()}(t,e,n):t instanceof _e?function(t,e,n){if(!be(t.precondition,e))return;const r=Ce(t.fieldTransforms,n,e),i=e.data;i.setAll(Ae(t)),i.setAll(r),e.convertToFoundDocument(Ie(e),i).setHasLocalMutations()}(t,e,n):function(t,e){be(t.precondition,e)&&e.convertToNoDocument(P.min())}(t,e)}function Oe(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&x(t,e,(t,e)=>ve(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ie(t){return t.isFoundDocument()?t.version:P.min()}class Se extends we{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class _e extends we{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ae(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ke(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ce(o,a,n[i]))}return r}function Ce(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ae(t,s,e))}return r}
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
class Re{constructor(t){this.count=t}}
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
 */var Ne,je;function De(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ne.OK:return w.OK;case Ne.CANCELLED:return w.CANCELLED;case Ne.UNKNOWN:return w.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return w.INTERNAL;case Ne.UNAVAILABLE:return w.UNAVAILABLE;case Ne.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ne.NOT_FOUND:return w.NOT_FOUND;case Ne.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ne.ABORTED:return w.ABORTED;case Ne.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ne.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(je=Ne||(Ne={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";
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
class xe{constructor(t,e){this.comparator=t,this.root=e||Pe.EMPTY}insert(t,e){return new xe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(t){return new xe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Le(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Le(this.root,t,this.comparator,!1)}getReverseIterator(){return new Le(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Le(this.root,t,this.comparator,!0)}}class Le{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pe{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Pe.RED,this.left=null!=r?r:Pe.EMPTY,this.right=null!=i?i:Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Pe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Pe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1,Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Me{constructor(t){this.comparator=t,this.data=new xe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ue(this.data.getIterator())}getIteratorFrom(t){return new Ue(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Me))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Me(this.comparator);return e.data=t,e}}class Ue{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Ve=new xe(et.comparator);function Fe(){return Ve}const qe=new xe(et.comparator);function Be(){return qe}new xe(et.comparator);const He=new Me(et.comparator);function $e(...t){let e=He;for(const n of t)e=e.add(n);return e}const ze=new Me(D);function Ke(){return ze}
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
 */class Ge{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,We.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ge(P.min(),n,Ke(),Fe(),$e())}}class We{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new We($.EMPTY_BYTE_STRING,e,$e(),$e(),$e())}}
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
 */class Qe{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.F=r}}class Xe{constructor(t,e){this.targetId=t,this.O=e}}class Ye{constructor(t,e,n=$.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Je{constructor(){this.M=0,this.L=en(),this.B=$.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=$e(),e=$e(),n=$e();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new We(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=en()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Ze{constructor(t){this.et=t,this.nt=new Map,this.st=Fe(),this.it=tn(),this.rt=new Me(D)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,r=this.wt(e);if(r){const t=r.target;if(Ot(t))if(0===n){const n=new et(t.path);this.ct(e,n,yt.newNoDocument(n,P.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ot(i.target)){const e=new et(i.target.path);null!==this.st.get(e)||this.yt(r,e)||this.ct(r,e,yt.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}});let n=$e();this.it.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new Ge(t,e,this.rt,this.st,n);return this.st=Fe(),this.it=tn(),this.rt=new Me(D),r}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Je,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Me(D),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Je),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function tn(){return new xe(et.comparator)}function en(){return new xe(et.comparator)}
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
 */const nn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),rn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class sn{constructor(t,e){this.databaseId=t,this.C=e}}function on(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function an(t,e){return t.C?e.toBase64():e.toUint8Array()}function cn(t){return v(!!t),P.fromTimestamp(function(t){const e=K(t);return new L(e.seconds,e.nanos)}(t))}function un(t,e){return function(t){return new q(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function hn(t){const e=q.fromString(t);return v(Rn(e)),e}function ln(t,e){const n=hn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new et(gn(n))}function dn(t,e){return un(t.databaseId,e)}function fn(t){const e=hn(t);return 4===e.length?q.emptyPath():gn(e)}function pn(t){return new q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),$.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),$.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?w.UNKNOWN:De(t.code);return new E(e,t.message||"")}(o);n=new Ye(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ln(t,r.document.name),s=cn(r.document.updateTime),o=new mt({mapValue:{fields:r.document.fields}}),a=yt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Qe(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ln(t,r.document),s=r.readTime?cn(r.readTime):P.min(),o=yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qe([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ln(t,r.document),s=r.removedTargetIds||[];n=new Qe([],s,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Re(r),s=t.targetId;n=new Xe(s,i)}}return n}function yn(t,e){return{documents:[dn(t,e.path)]}}function vn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=dn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ft(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NAN"}};if(dt(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ft(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NAN"}};if(dt(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(t.field),op:Sn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:_n(t.field),direction:In(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||J(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Tn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Tn(e.endAt)),n}function bn(t){let e=fn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=En(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Pt(An(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,J(e)?null:e}(n.limit));let c=null;n.startAt&&(c=On(n.startAt));let u=null;return n.endAt&&(u=On(n.endAt)),qt(e,i,o,s,a,"F",c,u)}function wn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function En(t){return t?void 0!==t.unaryFilter?[Cn(t)]:void 0!==t.fieldFilter?[kn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>En(t)).reduce((t,e)=>t.concat(e)):y():[]}function Tn(t){return{before:t.before,values:t.position}}function On(t){const e=!!t.before,n=t.values||[];return new xt(n,e)}function In(t){return nn[t]}function Sn(t){return rn[t]}function _n(t){return{fieldPath:t.canonicalString()}}function An(t){return H.fromServerFormat(t.fieldPath)}function kn(t){return It.create(An(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Cn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=An(t.unaryFilter.field);return It.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=An(t.unaryFilter.field);return It.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=An(t.unaryFilter.field);return It.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=An(t.unaryFilter.field);return It.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Rn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function Nn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dn(e)),e=jn(t.get(n),e);return Dn(e)}function jn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Dn(t){return t+""}class xn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}xn.store="owner",xn.key="owner";class Ln{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Ln.store="mutationQueues",Ln.keyPath="userId";class Pn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Pn.store="mutations",Pn.keyPath="batchId",Pn.userMutationsIndex="userMutationsIndex",Pn.userMutationsKeyPath=["userId","batchId"];class Mn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Nn(e)]}static key(t,e,n){return[t,Nn(e),n]}}Mn.store="documentMutations",Mn.PLACEHOLDER=new Mn;class Un{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Un.store="remoteDocuments",Un.readTimeIndex="readTimeIndex",Un.readTimeIndexPath="readTime",Un.collectionReadTimeIndex="collectionReadTimeIndex",Un.collectionReadTimeIndexPath=["parentPath","readTime"];class Vn{constructor(t){this.byteSize=t}}Vn.store="remoteDocumentGlobal",Vn.key="remoteDocumentGlobalKey";class Fn{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Fn.store="targets",Fn.keyPath="targetId",Fn.queryTargetsIndexName="queryTargetsIndex",Fn.queryTargetsKeyPath=["canonicalId","targetId"];class qn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}qn.store="targetDocuments",qn.keyPath=["targetId","path"],qn.documentTargetsIndex="documentTargetsIndex",qn.documentTargetsKeyPath=["path","targetId"];class Bn{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Bn.key="targetGlobalKey",Bn.store="targetGlobal";class Hn{constructor(t,e){this.collectionId=t,this.parent=e}}Hn.store="collectionParents",Hn.keyPath=["collectionId","parent"];class $n{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}$n.store="clientMetadata",$n.keyPath="clientId";class zn{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}zn.store="bundles",zn.keyPath="bundleId";class Kn{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Kn.store="namedQueries",Kn.keyPath="name";Ln.store,Pn.store,Mn.store,Un.store,Fn.store,xn.store,Bn.store,qn.store,$n.store,Vn.store,Hn.store,zn.store,Kn.store;const Gn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class Qn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Qn((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Qn?e:Qn.resolve(e)}catch(t){return Qn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.reject(e)}static resolve(t){return new Qn((e,n)=>{e(t)})}static reject(t){return new Qn((e,n)=>{n(t)})}static waitFor(t){return new Qn((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Qn.resolve(!1);for(const n of t)e=e.next(t=>t?Qn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
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
 */function Xn(t){return"IndexedDbTransactionError"===t.name}
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
class Yn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ee(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$e())}isEqual(t){return this.batchId===t.batchId&&x(this.mutations,t.mutations,(t,e)=>Oe(t,e))&&x(this.baseMutations,t.baseMutations,(t,e)=>Oe(t,e))}}
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
class Jn{constructor(t,e,n,r,i=P.min(),s=P.min(),o=$.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Zn{constructor(t){this.Gt=t}}function tr(t){const e=bn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xt(e,e.limit,"L"):e}
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
class er{constructor(){this.zt=new nr}addToCollectionParentIndex(t,e){return this.zt.add(e),Qn.resolve()}getCollectionParents(t,e){return Qn.resolve(this.zt.getEntries(e))}}class nr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Me(q.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Me(q.comparator)).toArray()}}
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
 */class rr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new rr(t,rr.DEFAULT_COLLECTION_PERCENTILE,rr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */rr.DEFAULT_COLLECTION_PERCENTILE=10,rr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rr.DEFAULT=new rr(41943040,rr.DEFAULT_COLLECTION_PERCENTILE,rr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rr.DISABLED=new rr(-1,0,0);
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
class ir{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new ir(0)}static re(){return new ir(-1)}}
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
async function sr(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Gn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
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
class or{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){U(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return V(this.inner)}}
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
 */class ar{constructor(){this.changes=new or(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:P.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:yt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Qn.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class cr{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):Gt(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new et(e)).next(t=>{let e=Be();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const r=e.collectionGroup;let i=Be();return this.Jt.getCollectionParents(t,r).next(s=>Qn.forEach(s,s=>{const o=function(t,e){return new Ft(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Cn(t,e,n){let r,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Nn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=yt.newInvalidDocument(n),r=r.insert(n,i)),Te(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{te(e,n)||(r=r.remove(t))}),r))}Nn(t,e,n){let r=$e();for(const s of e)for(const t of s.mutations)t instanceof _e&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
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
 */class ur{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=$e(),r=$e();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ur(t,e.fromCache,n,r)}}
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
 */class hr{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(P.min())?this.Mn(t,e):this.On.vn(t,r).next(i=>{const o=this.Ln(e,i);return(Ht(e)||$t(e))&&this.Bn(e.limitType,o,r,n)?this.Mn(t,e):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Me(ee(t));return e.forEach((e,r)=>{te(t,r)&&(n=n.add(r))}),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(t,e){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,P.min())}}
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
 */class lr{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new xe(D),this.Kn=new or(t=>wt(t),Tt),this.jn=P.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new cr(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function dr(t,e,n,r){return new lr(t,e,n,r)}async function fr(t,e){const n=b(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new cr(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=$e();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function pr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function gr(t,e){const n=b(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.He.updateTargetData(t,u))}});let a=Fe();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(mr(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(P.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Qn.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=i,t))}function mr(t,e,n,r,i){let s=$e();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Fe();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(P.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function yr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.He.getTargetData(t,e).next(i=>i?(r=i,Qn.resolve(r)):n.He.allocateTargetId(t).next(i=>(r=new Jn(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function vr(t,e,n){const r=b(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Xn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function br(t,e,n){const r=b(t);let i=P.min(),s=$e();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.Kn.get(n);return void 0!==i?Qn.resolve(r.qn.get(i)):r.He.getTargetData(e,n)}(r,t,Qt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Un.getDocumentsMatchingQuery(t,e,n?i:P.min(),n?s:$e())).next(t=>({documents:t,zn:s})))}
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
class wr{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Qn.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:cn(n.createTime)}),Qn.resolve()}getNamedQuery(t,e){return Qn.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:tr(t.bundledQuery),readTime:cn(t.readTime)}}(e)),Qn.resolve()}}
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
 */class Er{constructor(){this.ts=new Me(Tr.es),this.ns=new Me(Tr.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Tr(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new Tr(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new et(new q([])),n=new Tr(e,t),r=new Tr(e,t+1),i=[];return this.ns.forEachInRange([n,r],t=>{this.os(t),i.push(t.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new et(new q([])),n=new Tr(e,t),r=new Tr(e,t+1);let i=$e();return this.ns.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Tr(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Tr{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return et.comparator(t.key,e.key)||D(t.fs,e.fs)}static ss(t,e){return D(t.fs,e.fs)||et.comparator(t.key,e.key)}}
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
 */class Or{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Me(Tr.es)}checkEmpty(t){return Qn.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Yn(i,e,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new Tr(o.key,i)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Qn.resolve(s)}lookupMutationBatch(t,e){return Qn.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),i=r<0?0:r;return Qn.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Qn.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Qn.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Tr(e,0),r=new Tr(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],t=>{const e=this._s(t.fs);i.push(e)}),Qn.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Me(D);return e.forEach(t=>{const e=new Tr(t,0),r=new Tr(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],t=>{n=n.add(t.fs)})}),Qn.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;et.isDocumentKey(i)||(i=i.child(""));const s=new Tr(new et(i),0);let o=new Me(D);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)},s),Qn.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Qn.forEach(e.mutations,r=>{const i=new Tr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new Tr(e,0),r=this.ws.firstAfterOrEqual(n);return Qn.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,Qn.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
 */class Ir{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new xe(et.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Qn.resolve(n?n.document.clone():yt.newInvalidDocument(e))}getEntries(t,e){let n=Fe();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():yt.newInvalidDocument(t))}),Qn.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Fe();const i=new et(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,i)&&(r=r.insert(i.key,i.clone()))}return Qn.resolve(r)}Es(t,e){return Qn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Sr(this)}getSize(t){return Qn.resolve(this.size)}}class Sr extends ar{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),Qn.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
 */class _r{constructor(t){this.persistence=t,this.Is=new or(t=>wt(t),Tt),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.As=0,this.Rs=new Er,this.targetCount=0,this.Ps=ir.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Qn.resolve()}getLastRemoteSnapshotVersion(t){return Qn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Qn.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Qn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Qn.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new ir(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Qn.resolve()}updateTargetData(t,e){return this.ce(e),Qn.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Qn.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Qn.waitFor(i).next(()=>r)}getTargetCount(t){return Qn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Qn.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Qn.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Qn.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Qn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Qn.resolve(n)}containsKey(t,e){return Qn.resolve(this.Rs.containsKey(e))}}
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
 */class Ar{constructor(t,e){this.bs={},this.Be=new R(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new _r(this),this.Jt=new er,this.Je=function(t,e){return new Ir(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Zn(e),this.Ye=new wr(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Or(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new kr(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(t=>this.referenceDelegate.Ss(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ds(t,e){return Qn.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class kr extends Wn{constructor(t){super(),this.currentSequenceNumber=t}}class Cr{constructor(t){this.persistence=t,this.Cs=new Er,this.Ns=null}static ks(t){return new Cr(t)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Qn.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Qn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Qn.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qn.forEach(this.xs,n=>{const r=et.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Qn.or([()=>Qn.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
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
 */class Rr{constructor(){this.activeTargetIds=Ke()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nr{constructor(){this.pi=new Rr,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Rr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class jr{Ei(t){}shutdown(){}}
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
 */class Dr{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const xr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Lr{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
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
 */class Pr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,i){const s=this.Ui(t,e);f("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(t,s,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,r,i){return this.Bi(t,e,n,r,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=xr[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);s(new E(e,t.message))}else s(new E(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["l"])()||Object(o["m"])()||Object(o["i"])()||Object(o["j"])()||Object(o["o"])()||Object(o["h"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const h=i.createWebChannel(u,c);let l=!1,d=!1;const p=new Lr({Vi:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),h.open(),l=!0),f("Connection","WebChannel sending:",t),h.send(t))},Si:()=>h.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(h,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.Fi())}),m(h,a["f"].EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),p.Fi(new E(w.UNAVAILABLE,"The operation could not be completed")))}),m(h,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ne[t];if(void 0!==e)return De(e)}(t),n=i.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,p.Fi(new E(e,n)),h.close()}else f("Connection","WebChannel received:",n),p.Oi(n)}}),m(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.$i()},0),p}}
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
 */function Mr(){return"undefined"!=typeof document?document:null}
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
 */function Ur(t){return new sn(t,!0)}class Vr{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
 */class Fr{constructor(t,e,n,r,i,s,o,a){this.Oe=t,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Vr(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new E(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qr extends Fr{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=mn(this.k,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?cn(e.readTime):P.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=pn(this.k),e.addTarget=function(t,e){let n;const r=e.target;return n=Ot(r)?{documents:yn(t,r)}:{query:vn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=an(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=on(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=wn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=pn(this.k),e.removeTarget=t,this.gr(e)}}
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
class Br extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Hr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(p(e),this.Lr=!1):f("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
 */class $r{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Zr(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Gr.add(4),await Kr(e),e.Jr.set("Unknown"),e.Gr.delete(4),await zr(e)}(this))})}),this.Jr=new Hr(n,r)}}async function zr(t){if(Zr(t))for(const e of t.zr)await e(!0)}async function Kr(t){for(const e of t.zr)await e(!1)}function Gr(t,e){const n=b(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Jr(n)?Yr(n):oi(n).lr()&&Qr(n,e))}function Wr(t,e){const n=b(t),r=oi(n);n.Wr.delete(e),r.lr()&&Xr(n,e),0===n.Wr.size&&(r.lr()?r._r():Zr(n)&&n.Jr.set("Unknown"))}function Qr(t,e){t.Yr.X(e.targetId),oi(t).br(e)}function Xr(t,e){t.Yr.X(e),oi(t).vr(e)}function Yr(t){t.Yr=new Ze({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),oi(t).start(),t.Jr.Br()}function Jr(t){return Zr(t)&&!oi(t).hr()&&t.Wr.size>0}function Zr(t){return 0===b(t).Gr.size}function ti(t){t.Yr=void 0}async function ei(t){t.Wr.forEach((e,n)=>{Qr(t,e)})}async function ni(t,e){ti(t),Jr(t)?(t.Jr.Kr(e),Yr(t)):t.Jr.set("Unknown")}async function ri(t,e,n){if(t.Jr.set("Online"),e instanceof Ye&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ii(t,n)}else if(e instanceof Qe?t.Yr.ot(e):e instanceof Xe?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(P.min()))try{const e=await pr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(r);i&&t.Wr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),Xr(t,e);const r=new Jn(n.target,e,1,n.sequenceNumber);Qr(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await ii(t,e)}}async function ii(t,e,n){if(!Xn(e))throw e;t.Gr.add(1),await Kr(t),t.Jr.set("Offline"),n||(n=()=>pr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await zr(t)})}async function si(t,e){const n=b(t);e?(n.Gr.delete(2),await zr(n)):e||(n.Gr.add(2),await Kr(n),n.Jr.set("Unknown"))}function oi(t){return t.Xr||(t.Xr=function(t,e,n){const r=b(t);return r.Fr(),new qr(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{Di:ei.bind(null,t),Ni:ni.bind(null,t),Pr:ri.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Jr(t)?Yr(t):t.Jr.set("Unknown")):(await t.Xr.stop(),ti(t))})),t.Xr}
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
class ai{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ai(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ci(t,e){if(p("AsyncQueue",`${e}: ${t}`),Xn(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class ui{constructor(t){this.comparator=t?(e,n)=>t(e,n)||et.comparator(e.key,n.key):(t,e)=>et.comparator(t.key,e.key),this.keyedMap=Be(),this.sortedSet=new xe(this.comparator)}static emptySet(t){return new ui(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ui))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ui;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class hi{constructor(){this.eo=new xe(et.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):y():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class li{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new li(t,e,ui.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class di{constructor(){this.so=void 0,this.listeners=[]}}class fi{constructor(){this.queries=new or(t=>Jt(t),Yt),this.onlineState="Unknown",this.io=new Set}}async function pi(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new di),i)try{s.so=await n.onListen(r)}catch(t){const n=ci(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&vi(n)}async function gi(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mi(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(i)&&(r=!0);e.so=i}}r&&vi(n)}function yi(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vi(t){t.io.forEach(t=>{t.next()})}class bi{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new li(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=li.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
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
class wi{constructor(t){this.key=t}}class Ei{constructor(t){this.key=t}}class Ti{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=$e(),this.mutatedKeys=$e(),this.Ao=ee(t),this.Ro=new ui(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new hi,r=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ht(this.query)&&r.size===this.query.limit?r.last():null,c=$t(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=te(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Vo(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ao(h,a)>0||c&&this.Ao(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Ht(this.query)||$t(this.query))for(;s.size>this.query.limit;){const t=Ht(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new li(this.query,t.Ro,r,i,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new hi,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=$e(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Ei(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new wi(n))}),e}ko(t){this.To=t.zn,this.Io=$e();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return li.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Oi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ii{constructor(t){this.key=t,this.$o=!1}}class Si{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new or(t=>Jt(t),Yt),this.Mo=new Map,this.Lo=new Set,this.Bo=new xe(et.comparator),this.Uo=new Map,this.qo=new Er,this.Ko={},this.jo=new Map,this.Qo=ir.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function _i(t,e){const n=Fi(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await yr(n.localStore,Qt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ai(n,e,r,"current"===s),n.isPrimaryClient&&Gr(n.remoteStore,t)}return i}async function Ai(t,e,n,r){t.Go=(e,n,r)=>async function(t,e,n,r){let i=e.view.bo(n);i.Bn&&(i=await br(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return xi(t,e.targetId,o.Co),o.snapshot}(t,e,n,r);const i=await br(t.localStore,e,!0),s=new Ti(e,i.zn),o=s.bo(i.documents),a=We.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);xi(t,n,c.Co);const u=new Oi(e,n,s);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function ki(t,e){const n=b(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(t=>!Yt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Wr(n.remoteStore,r.targetId),ji(n,r.targetId)}).catch(sr)):(ji(n,r.targetId),await vr(n.localStore,r.targetId,!0))}async function Ci(t,e){const n=b(t);try{const t=await gr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Uo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?v(r.$o):t.removedDocuments.size>0&&(v(r.$o),r.$o=!1))}),await Mi(n,t,e)}catch(t){await sr(t)}}function Ri(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.ro(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.ro(e)&&(r=!0)}),r&&vi(n)}(r.eventManager,e),t.length&&r.Fo.Pr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ni(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let t=new xe(et.comparator);t=t.insert(s,yt.newNoDocument(s,P.min()));const n=$e().add(s),i=new Ge(P.min(),new Map,new Me(D),t,n);await Ci(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Pi(r)}else await vr(r.localStore,e,!1).then(()=>ji(r,e,n)).catch(sr)}function ji(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Di(t,e)})}function Di(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Wr(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Pi(t))}function xi(t,e,n){for(const r of n)r instanceof wi?(t.qo.addReference(r.key,e),Li(t,r)):r instanceof Ei?(f("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Di(t,r.key)):y()}function Li(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(f("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Pi(t))}function Pi(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new et(q.fromString(e)),r=t.Qo.next();t.Uo.set(r,new Ii(n)),t.Bo=t.Bo.insert(n,r),Gr(t.remoteStore,new Jn(Qt(Bt(n.path)),r,2,R.I))}}async function Mi(t,e,n){const r=b(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Go(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=ur.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Qn.forEach(e,e=>Qn.forEach(e.kn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Qn.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Xn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function Ui(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await fr(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new E(w.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Mi(n,t.Gn)}}function Vi(t,e){const n=b(t),r=n.Uo.get(e);if(r&&r.$o)return $e().add(r.key);{let t=$e();const r=n.Mo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Po)}return t}}function Fi(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ci.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vi.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ni.bind(null,e),e.Fo.Pr=mi.bind(null,e.eventManager),e.Fo.zo=yi.bind(null,e.eventManager),e}class qi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Ur(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return dr(this.persistence,new hr,t.initialUser,this.k)}Yo(t){return new Ar(Cr.ks,this.k)}Jo(t){return new Nr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ri(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ui.bind(null,this.syncEngine),await si(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fi}createDatastore(t){const e=Ur(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Pr(r));var r;return function(t,e,n,r){return new Br(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Ri(this.syncEngine,t,0),s=Dr.bt()?new Dr:new jr,new $r(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Si(t,e,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);f("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Kr(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
class Hi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
class $i{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=j.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ci(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function zi(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await fr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ki(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Gi(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.Gr.add(3),await Kr(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await zr(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Gi(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await zi(t,new qi)),t.offlineComponents}async function Wi(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ki(t,new Bi)),t.onlineComponents}async function Qi(t){const e=await Wi(t),n=e.eventManager;return n.onListen=_i.bind(null,e.syncEngine),n.onUnlisten=ki.bind(null,e.syncEngine),n}function Xi(t,e,n={}){const r=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Hi({next:n=>{e.enqueueAndForget(()=>gi(t,o)),n.fromCache&&"server"===r.source?i.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new bi(n,s,{includeMetadataChanges:!0,wo:!0});return pi(t,o)}(await Qi(t),t.asyncQueue,e,n,r)),r.promise}class Yi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ji{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ji&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Zi=new Map;
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
 */function ts(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function es(t,e,n,r){if(!0===e&&!0===r)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ns(t){if(et.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rs(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class ss{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,es("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class os{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ss({}),this._settingsFrozen=!1,t instanceof Ji?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ss(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new I;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new A(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zi.get(t);e&&(f("ComponentProvider","Removing Datastore"),Zi.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class as{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new as(this.firestore,t,this._key)}}class cs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new cs(this.firestore,t,this._query)}}class us extends cs{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new as(this.firestore,null,new et(t))}withConverter(t){return new us(this.firestore,t,this._path)}}function hs(t,e,...n){if(t=Object(o["f"])(t),ts("collection","path",e),t instanceof os){const r=q.fromString(e,...n);return ns(r),new us(t,null,r)}{if(!(t instanceof as||t instanceof us))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(q.fromString(e,...n));return ns(r),new us(t.firestore,null,r)}}
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
class ls{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Vr(this,"async_queue_retry"),this.Ra=()=>{const t=Mr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Mr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Mr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new T;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Xn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const r=ai.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(r),r}Pa(){this.Ta&&y()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class ds extends os{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ls,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gs(this),this._firestoreClient.terminate()}}function fs(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function ps(t){return t._firestoreClient||gs(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gs(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Yi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $i(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class ms{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class ys{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ys($.fromBase64String(t))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ys($.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class vs{constructor(t){this._methodName=t}}
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
 */class bs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}
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
 */const ws=/^__.*__$/;function Es(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Ts{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.Ma(t),r}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return js(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Es(this.xa)&&ws.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class Os{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Ur(t)}ja(t,e,n,r=!1){return new Ts({xa:t,methodName:e,Ka:n,path:H.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Is(t){const e=t._freezeSettings(),n=Ur(t._databaseId);return new Os(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ss(t,e,n,r=!1){return _s(n,t.ja(r?4:3,e))}function _s(t,e){if(ks(t=Object(o["f"])(t)))return Cs("Unsupported field value:",e,t),As(t,e);if(t instanceof vs)return function(t,e){if(!Es(e.xa))throw e.Ua(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ua(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=_s(i,e.Ba(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["f"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return se(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:on(e.k,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:on(e.k,n)}}if(t instanceof bs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ys)return{bytesValue:an(e.k,t._byteString)};if(t instanceof as){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:un(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua("Unsupported field value: "+rs(t))}(t,e)}function As(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):U(t,(t,r)=>{const i=_s(r,e.Fa(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function ks(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof bs||t instanceof ys||t instanceof as||t instanceof vs)}function Cs(t,e,n){if(!ks(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=rs(n);throw"an object"===r?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}const Rs=new RegExp("[~\\*/\\[\\]]");function Ns(t,e,n){if(e.search(Rs)>=0)throw js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ms(...e.split("."))._internalPath}catch(r){throw js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function js(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}
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
class Ds{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new as(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new xs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ls("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class xs extends Ds{data(){return super.data()}}function Ls(t,e){return"string"==typeof e?Ns(t,e):e instanceof ms?e._internalPath:e._delegate._internalPath}
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
 */class Ps{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ms extends Ds{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ls("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Us extends Ms{data(t={}){return super.data(t)}}class Vs{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ps(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Us(this._firestore,this._userDataWriter,n.key,n,new Ps(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Us(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ps(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Us(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ps(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Fs(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Fs(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
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
function qs(t){if($t(t)&&0===t.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bs{}function Hs(t,...e){for(const n of e)t=n._apply(t);return t}class $s extends Bs{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=Is(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Gs(o,s);const e=[];for(const n of o)e.push(Ks(r,t,n));a={arrayValue:{values:e}}}else a=Ks(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Gs(o,s),a=Ss(n,e,o,"in"===s||"not-in"===s);const c=It.create(i,s,a);return function(t,e){if(e.V()){const n=Kt(t);if(null!==n&&!n.isEqual(e.field))throw new E(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=zt(t);null!==r&&Ws(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new cs(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function zs(t,e,n){const r=e,i=Ls("where",t);return new $s(i,r,n)}function Ks(t,e,n){if("string"==typeof(n=Object(o["f"])(n))){if(""===n)throw new E(w.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gt(e)&&-1!==n.indexOf("/"))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(q.fromString(n));if(!et.isDocumentKey(r))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ut(t,new et(r))}if(n instanceof as)return ut(t,n._key);throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${rs(n)}.`)}function Gs(t,e){if(!Array.isArray(t)||0===t.length)throw new E(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ws(t,e,n){if(!n.isEqual(e))throw new E(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class Qs{convertValue(t,e="none"){switch(nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return U(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new bs(G(t.latitude),G(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=X(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=K(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=q.fromString(t);v(Rn(n));const r=new Ji(n.get(1),n.get(3)),i=new et(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */class Xs extends Qs{constructor(t){super(),this.firestore=t}convertBytes(t){return new ys(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new as(this.firestore,null,e)}}function Ys(t){t=is(t,cs);const e=is(t.firestore,ds),n=ps(e),r=new Xs(e);return qs(t._query),Xi(n,t._query).then(n=>new Vs(e,r,t,n))}!function(t,e=!0){!function(t){h=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new ds(r,new S(t.getProvider("auth-internal")),new C(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.0",t),Object(r["g"])(c,"3.4.0","esm2017")}()}).call(this,n("4362"))},1148:function(t,e,n){"use strict";var r=n("da84"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r.RangeError;t.exports=function(t){var e=s(o(this)),n="",r=i(t);if(r<0||r==1/0)throw a("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},2060:function(t,e,n){},"3d2b":function(t,e,n){"use strict";n("bfdb")},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4a88":function(t,e,n){"use strict";n("2060")},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),s=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=s(t),u=i(e,r),h=i(void 0===n?r:n,r),l=a(c(h-u,0)),d=0;u<h;u++,d++)o(l,d,t[u]);return l.length=d,l}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5a02":function(t,e,n){"use strict";var r=n("7a23"),i={class:"col-left"},s={key:0,class:"icon"},o={class:"col-right"},a={class:"icon"};function c(t,e,n,c,u,h){var l=Object(r["H"])("icon-base"),d=Object(r["H"])("icon-arrow-next"),f=Object(r["H"])("router-link");return Object(r["z"])(),Object(r["e"])(f,{class:"arrow-link-btn"},{default:Object(r["Q"])((function(){return[Object(r["h"])("div",i,[n.icon?(Object(r["z"])(),Object(r["g"])("i",s,[Object(r["k"])(l,null,{default:Object(r["Q"])((function(){return[Object(r["G"])(t.$slots,"icon",{},void 0,!0)]})),_:3})])):Object(r["f"])("",!0),Object(r["h"])("span",null,[Object(r["G"])(t.$slots,"text",{},void 0,!0)])]),Object(r["h"])("div",o,[Object(r["h"])("i",a,[Object(r["k"])(l,null,{default:Object(r["Q"])((function(){return[Object(r["k"])(d)]})),_:1})])])]})),_:3})}var u=n("4a42"),h=n("c000"),l={name:"ArrowLinkBtn",components:{IconBase:u["a"],IconArrowNext:h["a"]},props:{icon:{type:[Boolean,String]}}},d=(n("ce5a"),n("6b0d")),f=n.n(d);const p=f()(l,[["render",c],["__scopeId","data-v-3da680d2"]]);e["a"]=p},"5eda":function(t,e,n){"use strict";n("9a1f8")},"6e49":function(t,e,n){},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},"78f6":function(t,e,n){},"8c21":function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),i=function(t){return Object(r["C"])("data-v-1f4dcf90"),t=t(),Object(r["A"])(),t},s={key:0,class:"anime-useful-widget widget"},o={class:"info"},a={class:"inner"},c=i((function(){return Object(r["h"])("strong",{class:"title"}," 줄거리 ",-1)})),u={class:"inner"},h=i((function(){return Object(r["h"])("strong",{class:"title"}," 제작사 ",-1)})),l=Object(r["j"])("리뷰"),d={class:"episode-and-review-widget widget"},f=Object(r["j"])("이 멋진 애니에 별점을!"),p=Object(r["j"])(" 별을 누르면 그만큼의 별점을 줄 수 있어요 "),g=Object(r["j"])("취소"),m=Object(r["j"])("별점 저장");function y(t,e,n,i,y,v){var b=Object(r["H"])("anime-item-head"),w=Object(r["H"])("icon-review"),E=Object(r["H"])("arrow-link-btn"),T=Object(r["H"])("episodes"),O=Object(r["H"])("modal"),I=Object(r["H"])("action-sheet"),S=Object(r["H"])("router-view");return y.isSub?(Object(r["z"])(),Object(r["g"])("div",{key:0,class:"anime",style:Object(r["r"])("min-height: ".concat(y.deviceHeight,"px"))},[Object(r["k"])(b,{isScroll:y.isScroll,title:y.animeInfo.name,poster:y.animeInfo.poster,type:y.animeInfo.type,rating:y.animeInfo.rating,isEnd:y.animeInfo.isEnd,genres:y.animeInfo.genre,starRatingAvg:y.animeInfo.starRating,onStarModalOpened:v.starModalOpen,isUserRated:0!==y.myRating,onOverflowMenuOpened:v.overflowMenuOpen,myRating:y.myRating,onStarChanged:v.starChanged,class:"widget"},null,8,["isScroll","title","poster","type","rating","isEnd","genres","starRatingAvg","onStarModalOpened","isUserRated","onOverflowMenuOpened","myRating","onStarChanged"]),y.isPC?Object(r["f"])("",!0):(Object(r["z"])(),Object(r["g"])("div",s,[Object(r["h"])("ul",o,[Object(r["h"])("li",a,[c,Object(r["h"])("p",{class:Object(r["q"])(["text","loading-target",{"text--loaded":y.animeInfo.summary}])},Object(r["L"])(y.animeInfo.summary),3)]),Object(r["h"])("li",u,[h,Object(r["h"])("p",{class:Object(r["q"])(["text","loading-target",{"text--loaded":y.animeInfo.summary}])},[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(y.animeInfo.madeBy,(function(t){return Object(r["z"])(),Object(r["g"])("span",{key:t,class:"division-pipe"},Object(r["L"])(t),1)})),128))],2)])]),Object(r["k"])(E,{to:"".concat(t.$route.params.id,"/reviews"),icon:!0},{icon:Object(r["Q"])((function(){return[Object(r["k"])(w)]})),text:Object(r["Q"])((function(){return[l]})),_:1},8,["to"])])),Object(r["h"])("div",d,[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(y.animeInfo.parts,(function(t,e){return Object(r["z"])(),Object(r["e"])(T,{episodesData:t,key:e,id:t.part,ref:"episodes"},null,8,["episodesData","id"])})),128))]),Object(r["k"])(O,{title:"별점주기 창",type:"star",noFunc:v.starModalCancel,onStarChanged:v.starModalClose,rating:y.myRating,class:Object(r["q"])([{show:y.isStarRatingOpened},"optional-show"])},{title:Object(r["Q"])((function(){return[f]})),description:Object(r["Q"])((function(){return[p]})),"no-string":Object(r["Q"])((function(){return[g]})),"yes-string":Object(r["Q"])((function(){return[m]})),_:1},8,["noFunc","onStarChanged","rating","class"]),Object(r["k"])(I,{class:Object(r["q"])([{show:y.isOverflowMenuOpened},"optional-show"]),title:"더보기",actions:y.actions,close:v.actionSheetClose},null,8,["class","actions","close"])],4)):(Object(r["z"])(),Object(r["e"])(S,{key:1}))}var v=n("5530"),b=n("1da1"),w=(n("96cf"),n("99af"),n("d3b7"),n("0829")),E=n("589b"),T=n("1fd5"),O=n("22e5");
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
const I="firebasestorage.googleapis.com",S="storageBucket",_=12e4,A=6e5;class k extends T["c"]{constructor(t,e){super(C(t),`Firebase Storage: ${e} (${C(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,k.prototype)}_codeEquals(t){return C(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function C(t){return"storage/"+t}function R(){const t="An unknown error occurred, please check the error payload for server response.";return new k("unknown",t)}function N(t){return new k("object-not-found","Object '"+t+"' does not exist.")}function j(t){return new k("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function D(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new k("unauthenticated",t)}function x(){return new k("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function L(t){return new k("unauthorized","User does not have permission to access '"+t+"'.")}function P(){return new k("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function M(){return new k("canceled","User canceled the upload/download.")}function U(t){return new k("invalid-url","Invalid URL '"+t+"'.")}function V(t){return new k("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function F(){return new k("no-default-bucket","No default bucket found. Did you set the '"+S+"' property when initializing the app?")}function q(){return new k("no-download-url","The given file does not have any download URLs.")}function B(t){return new k("invalid-argument",t)}function H(){return new k("app-deleted","The Firebase app was deleted.")}function $(t){return new k("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t){throw new k("internal-error","Internal error: "+t)}
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
 */class K{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=K.makeFromUrl(t,e)}catch(r){return new K(t,"")}if(""===n.path)return n;throw V(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),a={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),l="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${l}`,"i"),f={bucket:1,path:3},p=e===I?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",m=new RegExp(`^https?://${p}/${r}/${g}`,"i"),y={bucket:1,path:2},v=[{regex:o,indices:a,postModify:i},{regex:d,indices:f,postModify:c},{regex:m,indices:y,postModify:c}];for(let b=0;b<v.length;b++){const e=v[b],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new K(t,i),e.postModify(n);break}}if(null==n)throw U(t);return n}}class G{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function W(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function h(...t){u||(u=!0,e.apply(null,t))}function l(e){i=setTimeout(()=>{i=null,t(f,c())},e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void h.call(null,t,...e);const n=c()||o;if(n)return d(),void h.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),l(i)}let p=!1;function g(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),l(0)):t||(a=1)))}return l(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function Q(t){t(!1)}
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
 */function X(t){return void 0!==t}function Y(t){return"object"===typeof t&&!Array.isArray(t)}function J(t){return"string"===typeof t||t instanceof String}function Z(t,e,n,r){if(r<e)throw B(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw B(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function tt(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function et(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
 */var nt;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(nt||(nt={}));
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
class rt{constructor(t,e,n,r,i,s,o,a,c,u,h){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new it(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===nt.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===nt.ABORT;return void t(!1,new it(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new it(s,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());X(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=R();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?H():M();r(t)}else{const t=P();r(t)}};this.canceled_?e(!1,new it(!1,null,!0)):this.backoffId_=W(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&Q(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class it{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function st(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function ot(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function at(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ct(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function ut(t,e,n,r,i,s){const o=et(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return at(c,e),st(c,n),ot(c,s),ct(c,r),new rt(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
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
function ht(t){let e;try{e=JSON.parse(t)}catch(n){return null}return Y(e)?e:null}
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
 */function lt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function dt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function ft(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function pt(t,e){return e}class gt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||pt}}let mt=null;function yt(t){return!J(t)||t.length<2?t:ft(t)}function vt(){if(mt)return mt;const t=[];function e(t,e){return yt(e)}t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));const n=new gt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new gt("size");return i.xform=r,t.push(i),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),mt=t,mt}function bt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new K(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function wt(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return bt(r,t),r}function Et(t,e,n){const r=ht(e);if(null===r)return null;const i=r;return wt(t,i,n)}function Tt(t,e,n,r){const i=ht(e);if(null===i)return null;if(!J(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=tt(a,n,r),u=et({alt:"media",token:e});return c+u});return c[0]}class Ot{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function It(t){if(!t)throw R()}function St(t,e){function n(n,r){const i=Et(t,r,e);return It(null!==i),Tt(i,r,t.host,t._protocol)}return n}function _t(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?x():D():402===e.getStatus()?j(t.bucket):403===e.getStatus()?L(t.path):n,r.serverResponse=n.serverResponse,r}return e}function At(t){const e=_t(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=N(t.path)),i.serverResponse=r.serverResponse,i}return n}function kt(t,e,n){const r=e.fullServerUrl(),i=tt(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ot(i,s,St(t,n),o);return a.errorHandler=At(e),a}
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
let Ct=null;class Rt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nt.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nt.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nt.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw z("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw z("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw z("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw z("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw z("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Nt extends Rt{initXhr(){this.xhr_.responseType="text"}}function jt(){return Ct?Ct():new Nt}
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
class Dt{constructor(t,e){this._service=t,this._location=e instanceof K?e:K.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Dt(t,e)}get root(){const t=new K(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ft(this._location.path)}get storage(){return this._service}get parent(){const t=lt(this._location.path);if(null===t)return null;const e=new K(this._location.bucket,t);return new Dt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw $(t)}}function xt(t){t._throwIfRoot("getDownloadURL");const e=kt(t.storage,t._location,vt());return t.storage.makeRequestWithTokens(e,jt).then(t=>{if(null===t)throw q();return t})}function Lt(t,e){const n=dt(t._location.path,e),r=new K(t._location.bucket,n);return new Dt(t.storage,r)}
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
 */function Pt(t){return/^[A-Za-z]+:\/\//.test(t)}function Mt(t,e){return new Dt(t,e)}function Ut(t,e){if(t instanceof qt){const n=t;if(null==n._bucket)throw F();const r=new Dt(n,n._bucket);return null!=e?Ut(r,e):r}return void 0!==e?Lt(t,e):t}function Vt(t,e){if(e&&Pt(e)){if(t instanceof qt)return Mt(t,e);throw B("To use ref(service, url), the first argument must be a Storage instance.")}return Ut(t,e)}function Ft(t,e){const n=null===e||void 0===e?void 0:e[S];return null==n?null:K.makeFromBucketSpec(n,t)}class qt{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=I,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_,this._maxUploadRetryTime=A,this._requests=new Set,this._bucket=null!=r?K.makeFromBucketSpec(r,this._host):Ft(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=K.makeFromBucketSpec(this._url,t):this._bucket=Ft(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Z("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Z("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Dt(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new G(H());{const i=ut(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Bt="@firebase/storage",Ht="0.9.0",$t="storage";function zt(t){return t=Object(T["f"])(t),xt(t)}function Kt(t,e){return t=Object(T["f"])(t),Vt(t,e)}function Gt(t=Object(E["e"])(),e){t=Object(T["f"])(t);const n=Object(E["b"])(t,$t),r=n.getImmediate({identifier:e});return r}function Wt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new qt(n,r,i,e,E["a"])}function Qt(){Object(E["c"])(new O["a"]($t,Wt,"PUBLIC").setMultipleInstances(!0)),Object(E["g"])(Bt,Ht,""),Object(E["g"])(Bt,Ht,"esm2017")}Qt();n("b680");var Xt=function(t){return Object(r["C"])("data-v-2e19e89f"),t=t(),Object(r["A"])(),t},Yt={key:0,class:"blind"},Jt={class:"col-left"},Zt={class:"scroll-title"},te={class:"anime-info inner"},ee=["src","alt"],ne=Object(r["j"])("보고싶다"),re={class:"col-right"},ie={class:"sub-info"},se={class:"division-pipe"},oe={class:"division-pipe"},ae={class:"division-pipe"},ce={class:"title"},ue={class:"genres"},he={class:"star-rating-number"},le={key:2,class:"anime-interact-btn-area inner"},de=Object(r["j"])("보고싶다"),fe=Object(r["j"])("별점주기"),pe=Xt((function(){return Object(r["h"])("div",{class:"continue-play-bg"},[Object(r["h"])("button",{class:"continue-play-btn"},"1화 무료보기")],-1)}));function ge(t,e,n,i,s,o){var a=Object(r["H"])("icon-arrow-prev"),c=Object(r["H"])("icon-base"),u=Object(r["H"])("icon-overflow"),h=Object(r["H"])("icon-wanna-see"),l=Object(r["H"])("anime-action-btn"),d=Object(r["H"])("star-interaction"),f=Object(r["H"])("icon-star-rating");return Object(r["z"])(),Object(r["g"])("header",{class:"anime-item-head",style:Object(r["r"])(o.posterBg)},[s.notPC?(Object(r["z"])(),Object(r["g"])("h1",Yt,"뷰플릭스")):Object(r["f"])("",!0),s.isMobile?(Object(r["z"])(),Object(r["g"])("div",{key:1,class:Object(r["q"])(["navigation","inner",{"navigation--scrolled":n.isScroll}])},[Object(r["h"])("div",Jt,[Object(r["h"])("button",{class:"back",onClick:e[0]||(e[0]=function(){return o.goBack&&o.goBack.apply(o,arguments)})},[Object(r["k"])(c,{iconName:"뒤로가기"},{default:Object(r["Q"])((function(){return[Object(r["k"])(a)]})),_:1})]),Object(r["h"])("strong",Zt,Object(r["L"])(n.title),1)]),Object(r["h"])("button",{class:"overflow-btn",onClick:e[1]||(e[1]=function(){return o.openOverflowMenu&&o.openOverflowMenu.apply(o,arguments)})},[Object(r["k"])(c,{iconName:"더보기 메뉴"},{default:Object(r["Q"])((function(){return[Object(r["k"])(u)]})),_:1})])],2)):Object(r["f"])("",!0),Object(r["h"])("div",te,[s.notPC?Object(r["f"])("",!0):(Object(r["z"])(),Object(r["g"])("div",{key:0,class:Object(r["q"])(["poster","loading-target",{"poster--loaded":n.poster}])},[Object(r["h"])("img",{src:n.poster,alt:"".concat(n.title," 포스터")},null,8,ee),s.isMobile?Object(r["f"])("",!0):(Object(r["z"])(),Object(r["e"])(l,{key:0,onClick:o.wannaSeeToggle,isEnabled:s.wannaSeeBool,type:"wanna-see"},{icon:Object(r["Q"])((function(){return[Object(r["k"])(h)]})),label:Object(r["Q"])((function(){return[ne]})),_:1},8,["onClick","isEnabled"]))],2)),Object(r["h"])("div",re,[Object(r["h"])("div",{class:Object(r["q"])(["row-top","loading-target",{"row-top--loaded":n.type&&n.rating&&n.title}])},[Object(r["h"])("p",ie,[Object(r["h"])("span",se,Object(r["L"])(n.type),1),Object(r["h"])("span",oe,Object(r["L"])(n.rating),1),Object(r["h"])("span",ae,Object(r["L"])(n.isEnd?"완결":"방영중"),1)]),Object(r["h"])("h2",ce,Object(r["L"])(n.title),1)],2),Object(r["h"])("div",{class:Object(r["q"])(["row-bottom","loading-target",{"row-bottom--loaded":n.genres&&n.starRatingAvg}])},[Object(r["h"])("ul",ue,[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(n.genres,(function(t){return Object(r["z"])(),Object(r["g"])("li",{key:t,class:"genre division-pipe"},Object(r["L"])(t),1)})),128))]),Object(r["h"])("p",he," 평균 "+Object(r["L"])(n.starRatingAvg?n.starRatingAvg.toFixed(1):"")+"점 ",1),s.notPC?Object(r["f"])("",!0):(Object(r["z"])(),Object(r["e"])(d,{key:0,rating:n.myRating,textColor:"#fff",onStarChanged:o.starChanged},null,8,["rating","onStarChanged"]))],2)])]),s.notPC?(Object(r["z"])(),Object(r["g"])("div",le,[Object(r["k"])(l,{onClick:o.wannaSeeToggle,isEnabled:s.wannaSeeBool,type:"wanna-see"},{icon:Object(r["Q"])((function(){return[Object(r["k"])(h)]})),label:Object(r["Q"])((function(){return[de]})),_:1},8,["onClick","isEnabled"]),Object(r["k"])(l,{onClick:o.starModalOpen,isEnabled:n.isUserRated,type:"star-rating"},{icon:Object(r["Q"])((function(){return[Object(r["k"])(f)]})),label:Object(r["Q"])((function(){return[fe]})),_:1},8,["onClick","isEnabled"])])):Object(r["f"])("",!0),pe],4)}n("a9e3");var me=n("4a42"),ye=n("5f9d"),ve=Object(r["h"])("circle",{cx:"12",cy:"4",r:"2"},null,-1),be=Object(r["h"])("circle",{cx:"12",cy:"12",r:"2"},null,-1),we=Object(r["h"])("circle",{cx:"12",cy:"20",r:"2"},null,-1);function Ee(t,e){return Object(r["z"])(),Object(r["g"])(r["a"],null,[ve,be,we],64)}var Te=n("6b0d"),Oe=n.n(Te);const Ie={},Se=Oe()(Ie,[["render",Ee]]);var _e=Se;function Ae(t,e,n,i,s,o){var a=Object(r["H"])("icon-base");return Object(r["z"])(),Object(r["g"])("button",{class:Object(r["q"])(["anime-interact-btn",{"anime-interact-btn--wanna-see":n.isEnabled&&"wanna-see"===n.type},{"anime-interact-btn--star-rating":n.isEnabled&&"star-rating"===n.type}])},[Object(r["k"])(a,{iconName:"ddd",class:"icon"},{default:Object(r["Q"])((function(){return[Object(r["G"])(t.$slots,"icon",{},void 0,!0)]})),_:3}),Object(r["G"])(t.$slots,"label",{},void 0,!0)],2)}var ke={name:"AnimeInteractBtn",components:{IconBase:me["a"]},props:{isEnabled:{type:Boolean,default:!1},type:{type:String}}};n("fcf4");const Ce=Oe()(ke,[["render",Ae],["__scopeId","data-v-4cd1b552"]]);var Re=Ce,Ne=n("91f20"),je=n("c9ed"),De={d:"M12.75,3.55,13.88,7a2.46,2.46,0,0,0,2.34,1.71h3.65a.79.79,0,0,1,.46,1.43L17.85,12a3.25,3.25,0,0,0-1.18,3.64l.94,2.92a.79.79,0,0,1-1.21.89l-2.95-2.15a2.49,2.49,0,0,0-2.9,0l-3,2.15a.79.79,0,0,1-1.21-.89L7.51,15a2.46,2.46,0,0,0-.89-2.75L3.67,10.15a.79.79,0,0,1,.46-1.43H7.78A2.46,2.46,0,0,0,10.12,7l1.13-3.46A.79.79,0,0,1,12.75,3.55Z"};function xe(t,e){return Object(r["z"])(),Object(r["g"])("path",De)}const Le={},Pe=Oe()(Le,[["render",xe]]);var Me=Pe,Ue={name:"AnimeItemHead",components:{IconBase:me["a"],IconArrowPrev:ye["a"],IconOverflow:_e,AnimeActionBtn:Re,StarInteraction:Ne["a"],IconWannaSee:je["a"],IconStarRating:Me},props:{isScroll:{type:Boolean},title:{type:String},poster:{type:String},type:{type:String},rating:{type:String},isEnd:{type:Boolean},isUserRated:{type:Boolean},genres:{type:Array},starRatingAvg:{type:Number},myRating:{type:Number}},created:function(){window.addEventListener("resize",this.checkResolution)},unmounted:function(){window.removeEventListener("resize",this.checkResolution)},data:function(){return{wannaSeeBool:!1,isMobile:window.innerWidth<=768,notPC:window.innerWidth<=1080}},methods:{goBack:function(){return this.$router.go(-1)},wannaSeeToggle:function(){this.wannaSeeBool=!this.wannaSeeBool},checkResolution:function(){this.isMobile=window.innerWidth<=768,this.notPC=window.innerWidth<=1080},starModalOpen:function(){this.$emit("starModalOpened")},openOverflowMenu:function(){this.$emit("overflowMenuOpened")},starChanged:function(t){this.$emit("starChanged",t)}},computed:{posterBg:function(){var t="\n        background: linear-gradient(var(--anime-item-head-opacity-700), var(--anime-item-head-opacity-500)), url(".concat(this.poster,") center/cover;\n      ");return t}}};n("f6be");const Ve=Oe()(Ue,[["render",ge],["__scopeId","data-v-2e19e89f"]]);var Fe=Ve,qe={class:"episodes"},Be={class:"part-title"};function He(t,e,n,i,s,o){var a=this,c=Object(r["H"])("icon-arrow-next"),u=Object(r["H"])("icon-base"),h=Object(r["H"])("episode-card");return Object(r["z"])(),Object(r["g"])("div",qe,[Object(r["h"])("button",{class:"part-info inner",onClick:e[0]||(e[0]=function(){return o.widgetToggle&&o.widgetToggle.apply(o,arguments)})},[Object(r["h"])("i",{class:Object(r["q"])(["open-icon",{"open-icon--widget-opened":s.isWidgetOpen}])},[Object(r["k"])(u,null,{default:Object(r["Q"])((function(){return[Object(r["k"])(c)]})),_:1})],2),Object(r["h"])("strong",Be,Object(r["L"])(n.episodesData.part),1)]),Object(r["h"])("ul",{class:Object(r["q"])(["episode-widget",{"episode-widget--opened":s.isWidgetOpen}])},[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(n.episodesData.episodes,(function(t,e){return Object(r["z"])(),Object(r["e"])(h,{key:t.title,title:t.title,date:t.date,thumbnail:"".concat(a.$route.params.id,"/").concat(t.thumbnail),index:e+1,ref:"episodeCard".concat(e)},null,8,["title","date","thumbnail","index"])})),128))],2)])}var $e=n("c000"),ze={class:"episode-card"},Ke={href:"#none",class:"episode-item inner"},Ge={class:"col-left"},We={class:"thumbnail"},Qe=["data-url","alt"],Xe={class:"episode-info"},Ye={class:"title"},Je={class:"date"},Ze={class:"col-right"};function tn(t,e,n,i,s,o){var a=Object(r["H"])("icon-base"),c=Object(r["I"])("intersection-lazy");return Object(r["z"])(),Object(r["g"])("li",ze,[Object(r["h"])("a",Ke,[Object(r["h"])("figure",null,[Object(r["h"])("div",Ge,[Object(r["h"])("div",We,[Object(r["R"])(Object(r["h"])("img",{"data-url":s.thumbnailURL,alt:"".concat(n.title," 썸네일"),ref:"thumbnail-".concat(n.index)},null,8,Qe),[[c]])]),Object(r["h"])("div",Xe,[Object(r["h"])("figcaption",Ye,Object(r["L"])(n.index)+"화 "+Object(r["L"])(n.title),1),Object(r["h"])("p",Je,Object(r["L"])(n.date),1)])]),Object(r["h"])("div",Ze,[Object(r["k"])(a)])])])])}var en={name:"EpisodeCard",props:{thumbnail:{type:String},title:{type:String},index:{type:Number},date:{type:String}},components:{IconBase:me["a"]},data:function(){return{thumbnailURL:""}},mounted:function(){this.useURL()},methods:{useURL:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Gt(),r=Kt(n,t.thumbnail),e.next=4,zt(r);case 4:i=e.sent,s=t.$refs["thumbnail-".concat(t.index)],s.getBoundingClientRect().top<=window.innerHeight?s.src=i:t.thumbnailURL=i;case 7:case"end":return e.stop()}}),e)})))()}}};n("3d2b");const nn=Oe()(en,[["render",tn],["__scopeId","data-v-10258a8e"]]);var rn=nn,sn={name:"Episodes",components:{EpisodeCard:rn,IconBase:me["a"],IconArrowNext:$e["a"]},props:{episodesData:{type:Object},id:{type:String}},data:function(){return{isWidgetOpen:!0}},methods:{widgetToggle:function(){this.isWidgetOpen=!this.isWidgetOpen}}};n("5eda");const on=Oe()(sn,[["render",He],["__scopeId","data-v-a497d9f8"]]);var an=on,cn=n("714b"),un={class:"action-sheet"},hn=["title"],ln={class:"action-area inner"},dn={class:"action-sheet__title"},fn=["onClick"],pn={class:"action-item"};function gn(t,e,n,i,s,o){return Object(r["z"])(),Object(r["g"])("div",un,[Object(r["h"])("button",{class:"action-sheet__shadow",onClick:e[0]||(e[0]=function(){return n.close&&n.close.apply(n,arguments)}),title:"".concat(n.title," 닫기")},null,8,hn),Object(r["h"])("div",ln,[Object(r["h"])("strong",dn,Object(r["L"])(n.title),1),Object(r["h"])("ul",null,[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(n.actions,(function(t){return Object(r["z"])(),Object(r["g"])("li",{key:t.text,onClick:t.method,class:"action-item"},[Object(r["h"])("button",null,Object(r["L"])(t.text),1)],8,fn)})),128)),Object(r["h"])("li",pn,[Object(r["h"])("button",{onClick:e[1]||(e[1]=function(){return n.close&&n.close.apply(n,arguments)})},"닫기")])])])])}var mn={name:"ActionSheet",props:{title:{type:String},actions:{type:Array},close:{type:Function}}};n("ee4c");const yn=Oe()(mn,[["render",gn],["__scopeId","data-v-13d4c1c6"]]);var vn=yn,bn=n("5a02"),wn=Object(r["h"])("path",{d:"M19,3H5A2,2,0,0,0,3,5V15a2,2,0,0,0,2,2H7v3a1,1,0,0,0,.62.92A.84.84,0,0,0,8,21a1,1,0,0,0,.71-.29L12.41,17H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Zm0,12H12a1,1,0,0,0-.71.29L9.59,17,9,17.59V16a1,1,0,0,0-1-1H5V5H19Z"},null,-1),En=Object(r["h"])("circle",{cx:"12",cy:"10",r:"1"},null,-1),Tn=Object(r["h"])("circle",{cx:"16",cy:"10",r:"1"},null,-1),On=Object(r["h"])("circle",{cx:"8",cy:"10",r:"1"},null,-1);function In(t,e){return Object(r["z"])(),Object(r["g"])(r["a"],null,[wn,En,Tn,On],64)}const Sn={},_n=Oe()(Sn,[["render",In]]);var An=_n,kn={components:{AnimeItemHead:Fe,Episodes:an,Modal:cn["a"],ActionSheet:vn,ArrowLinkBtn:bn["a"],IconReview:An},name:"anime",mounted:function(){var t=this;document.title="".concat(this.$route.params.id," 다시보기"),this.animeInit(),window.addEventListener("resize",(function(){t.deviceHeight=window.innerHeight})),window.addEventListener("resize",(function(){t.isPC=window.innerWidth<=768})),window.addEventListener("scroll",this.handleScroll)},unmounted:function(){var t=this;window.removeEventListener("resize",(function(){t.deviceHeight=window.innerHeight})),window.removeEventListener("resize",(function(){t.isPC=window.innerWidth<=768}))},data:function(){return{deviceHeight:window.innerHeight,animeInfo:{},animeNumber:"",myRating:0,isStarRatingOpened:!1,isOverflowMenuOpened:!1,actions:[{text:"공유하기",method:this.openSystemShare},{text:"관심없음",method:this.notInterested}],infos:[{title:"줄거리",text:this.animeInfo?this.animeInfo.summary:""},{title:"제작사",text:this.animeInfo?this.animeInfo.madeBy:""}],isSub:"anime"===this.$route.name,isPC:window.innerWidth>=1080,isScroll:!1}},methods:{handleScroll:function(){this.isScroll=0<Math.round(window.scrollY)},getRawData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,r,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(w["c"])(),r=Object(w["a"])(n,"anime"),i=Object(w["d"])(r,Object(w["e"])("name","==",t.$route.params.id)),e.prev=3,e.next=6,Object(w["b"])(i);case 6:if(s=e.sent,0===s.docs.length){e.next=12;break}return o=s.docs[0].data(),e.abrupt("return",o);case 12:console.error("존재하지 않는 작품입니다");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),console.error("통신문제");case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()},animeInit:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Gt(),e.next=3,t.getRawData();case 3:return r=e.sent,i=Kt(n,"".concat(t.$route.params.id,"/").concat(r.poster)),e.prev=5,e.next=8,zt(i);case 8:s=e.sent,t.animeInfo=Object(v["a"])(Object(v["a"])({},r),{},{poster:s}),console.log(t.animeInfo),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](5),console.error("포스터 정보가 존재하지 않습니다");case 16:case"end":return e.stop()}}),e,null,[[5,13]])})))()},starModalOpen:function(){this.isStarRatingOpened=!0},starModalClose:function(t){this.myRating=t,this.isStarRatingOpened=!1},starModalCancel:function(){this.isStarRatingOpened=!1},overflowMenuOpen:function(){this.isOverflowMenuOpened=!0},actionSheetClose:function(){this.isOverflowMenuOpened=!1},delay:function(t){return new Promise((function(e){setTimeout(e,t)}))},openSystemShare:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.share({title:document.title,text:"뷰플릭스에서 ".concat(t.animeInfo.name,"을 다시 즐겨보세요!"),url:"https://vueflix.hyse.kr/anime/".concat(t.animeInfo.name)});case 3:t.actionSheetClose(),e.next=13;break;case 6:return e.prev=6,e.t0=e["catch"](0),t.$store.commit("toast/changeToastMeta",{isShown:!0,text:"공유하기 토스트를 불러오는데 실패했어요"}),e.next=11,t.delay(3e3);case 11:t.$store.commit("toast/changeToastMeta",{isShown:!1,text:""}),t.actionSheetClose();case 13:case"end":return e.stop()}}),e,null,[[0,6]])})))()},notInterested:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("toast/changeToastMeta",{isShown:!0,text:"취향에 반영했어요"}),e.next=3,t.delay(3e3);case 3:t.$store.commit("toast/changeToastMeta",{isShown:!1,text:""});case 4:case"end":return e.stop()}}),e)})))()},starChanged:function(t){this.myRating=t}}};n("4a88");const Cn=Oe()(kn,[["render",y],["__scopeId","data-v-1f4dcf90"]]);e["default"]=Cn},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return Rr})),n.d(e,"c",(function(){return Cr})),n.d(e,"d",(function(){return jr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return Dr})),n.d(e,"g",(function(){return xr})),n.d(e,"h",(function(){return _r})),n.d(e,"i",(function(){return Ar}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,E={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=l(this);delete E[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function I(t){t:{var e=Bn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function _(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var k,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function R(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var j=a.navigator;if(j){var D=j.userAgent;if(D){k=D;break t}}k=""}function x(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<P.length;e++)n=P[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}function V(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=c;var F,q=R(k,"Opera"),B=R(k,"Trident")||R(k,"MSIE"),H=R(k,"Edge"),$=H||B,z=R(k,"Gecko")&&!(R(k.toLowerCase(),"webkit")&&!R(k,"Edge"))&&!(R(k,"Trident")||R(k,"MSIE"))&&!R(k,"Edge"),K=R(k.toLowerCase(),"webkit")&&!R(k,"Edge");function G(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=k;return z?/rv:([^\);]+)(\)|;)/.exec(t):H?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),B){var X=G();if(null!=X&&X>parseFloat(W)){F=String(X);break t}}F=W}var Y,J={};function Z(){return V((function(){let t=0;const e=C(String(F)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=G();Y=tt||(parseInt(F,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z){t:{try{U(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=T(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ht.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.N(e,n,h(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=Ot(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.O(e,n,h(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ot(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ot(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Ot(t){return t=t[ft],t instanceof ht?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function _t(){b.call(this),this.i=new ht(this),this.P=this,this.I=null}function At(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=kt(o,r,!0,e)&&i}if(o=e.g=t,i=kt(o,r,!0,e)&&i,i=kt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=kt(o,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(_t,b),_t.prototype[ot]=!0,_t.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},_t.prototype.M=function(){if(_t.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},_t.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=a.JSON.stringify;function Rt(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var jt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xt,t=>t.reset());class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function Pt(t,e){jt||Mt(),Ut||(jt(),Ut=!0),Vt.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);jt=function(){t.then(Ft)}}var Ut=!1,Vt=new Nt;function Ft(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function qt(t,e){_t.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ht(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function $t(t){t.g=Ht(()=>{t.g=null,t.i&&(t.i=!1,$t(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(qt,_t),r=qt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),At(this,"tick"),this.da&&(Bt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qt.Z.M.call(this),Bt(this),delete this.g};class zt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$t(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){b.call(this),this.h=t,this.g={}}v(Kt,b);var Gt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var i=0;i<n.length;i++){var s=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){x(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.Z.M.call(this),Qt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new _t}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();At(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();At(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(se,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Kt(this),this.P=Oe,t=$?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(be,rt),v(we,fe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Oe=45e3,Ie={},Se={};function _e(t,e,n){t.K=1,t.v=Ye(ze(e)),t.s=n,t.U=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),Ne(t),t.A=ze(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Te,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Re(t,n),r==Se){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Pe(t,r)}ke(t)&&r!=Se&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),xe(t))}function Re(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,je(t,t.P)}function je(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(m(t.eb,t),e)}function De(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}hr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!A(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(R(t,"spdy")||R(t,"quic")||R(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Tn(s,s.h),s.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){On(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(De(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)O(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ve(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ve)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Fe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],qe(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ee.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),De(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Qn(this.g);t="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),xe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ce(12),Le(this),xe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.U?(Ce(this,l,o),$&&this.i&&3==l&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Pe(this,o)),4==l&&Le(this),this.i&&!this.I&&(4==l?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),xe(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(De(this),Ce(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,xe(this)):je(this,this.Y-t)},r=Ve.prototype,r.R=function(){Fe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Fe(this),this.g.concat()},r.get=function(t,e){return qe(this.h,t)?this.h[t]:e},r.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function He(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $e(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $e){this.g=void 0!==e?e:t.g,Ke(this,t.j),this.s=t.s,Ge(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ve(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,Ke(this,n[1]||"",!0),this.s=tn(n[2]||""),Ge(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function ze(t){return new $e(t)}function Ke(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof $e?ze(t):new $e(t,void 0)}function Ze(t,e,n,r){var i=new $e(null,void 0);return t&&Ke(i,t),e&&Ge(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}$e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Ve,t.h=0,t.i&&He(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=pn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Fe(t)))}function dn(t,e){return hn(t),e=pn(t,e),qe(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),_(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){hn(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){hn(this),this.g.forEach((function(n,r){O(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){hn(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return hn(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function On(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _(t.i)}function Sn(){}function _n(){this.g=new Sn}function An(t,e,n){const r=n||"";try{Ue(t,(function(t,n){let i=t;h(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=y(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(Cn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Rn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){_t.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(Rn,fe),Rn.prototype.g=function(){return new Nn(this.l,this.j)},Rn.prototype.i=function(t){return function(){return t}}({}),v(Nn,_t);var jn=0;function Dn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function xn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=jn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=jn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xn(this):Ln(this),3==this.readyState&&Dn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,xn(this))},r.Ta=function(t){this.g&&(this.response=t,xn(this))},r.ha=function(){this.g&&xn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Pn=a.JSON.parse;function Mn(t){_t.call(this),this.headers=new Ve,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}v(Mn,_t);var Un="",Vn=/^https?$/i,Fn=["POST","PUT"];function qn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Hn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$n(t),Kn(t)}function $n(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function zn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Ht(t.Fa,0,t);else if(At(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(Be)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",$n(t)}}finally{Kn(t)}}}function Kn(t,e){if(t.g){Gn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||At(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Gn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return x(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new _n,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=ze(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ye(ze(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yr(t)}function er(t){t.g&&(lr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function sr(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=ze(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Yn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),_e(n,r,e)}function ar(t,e){t.j&&Ue({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{An(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function hr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function lr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ze(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(ze(e)),n.s=null,n.U=!0,Ae(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),lr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,On(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),At(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&hr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new $e("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ke(n,"https"),Ye(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,_(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&Ge(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&x(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new Rn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function wr(){}function Er(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Tr(t,e){_t.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Or(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ir(){be.call(this),this.status=1}function Sr(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Hn(this,s)}t=n||"";const i=new Ve(this.headers);r&&Ue(r,(function(t,e){i.set(e,t)})),r=I(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=T(Fn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ht(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Hn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Kn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?zn(this):this.cb())},r.cb=function(){zn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ee(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=ze(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Yn(n,this.o,s),Tn(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,_e(i,n,null)):_e(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),hr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Er.prototype.g=function(t,e){return new Tr(t,e)},v(Tr,_t),Tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),ir(t)},Tr.prototype.close=function(){tr(this.g)},Tr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ct(t),rr(this.g,e)):rr(this.g,t)},Tr.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Tr.Z.M.call(this)},v(Or,ve),v(Ir,be),v(Sr,wr),Sr.prototype.xa=function(){At(this.g,"a")},Sr.prototype.wa=function(t){At(this.g,new Or(t))},Sr.prototype.va=function(t){At(this.g,new Ir(t))},Sr.prototype.ua=function(){At(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Tr.prototype.send=Tr.prototype.u,Tr.prototype.open=Tr.prototype.m,Tr.prototype.close=Tr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",_t.prototype.listen=_t.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var _r=s.createWebChannelTransport=function(){return new Er},Ar=s.getStatEventTarget=function(){return ie()},kr=s.ErrorCode=le,Cr=s.EventType=de,Rr=s.Event=ne,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},jr=s.FetchXmlHttpFactory=Rn,Dr=s.WebChannel=ge,xr=s.XhrIo=Mn}).call(this,n("c8ba"))},"9a1f8":function(t,e,n){},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),h=n("83ab"),l=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),g=n("1626"),m=n("861d"),y=n("3a9b"),v=n("d9b5"),b=n("825a"),w=n("7b0b"),E=n("fc6a"),T=n("a04b"),O=n("577e"),I=n("5c6c"),S=n("7c73"),_=n("df75"),A=n("241c"),k=n("057f"),C=n("7418"),R=n("06cf"),N=n("9bf2"),j=n("d1e7"),D=n("f36a"),x=n("6eeb"),L=n("5692"),P=n("f772"),M=n("d012"),U=n("90e3"),V=n("b622"),F=n("e538"),q=n("746f"),B=n("d44e"),H=n("69f3"),$=n("b727").forEach,z=P("hidden"),K="Symbol",G="prototype",W=V("toPrimitive"),Q=H.set,X=H.getterFor(K),Y=Object[G],J=i.Symbol,Z=J&&J[G],tt=i.TypeError,et=i.QObject,nt=s("JSON","stringify"),rt=R.f,it=N.f,st=k.f,ot=j.f,at=c([].push),ct=L("symbols"),ut=L("op-symbols"),ht=L("string-to-symbol-registry"),lt=L("symbol-to-string-registry"),dt=L("wks"),ft=!et||!et[G]||!et[G].findChild,pt=h&&d((function(){return 7!=S(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=rt(Y,e);r&&delete Y[e],it(t,e,n),r&&t!==Y&&it(Y,e,r)}:it,gt=function(t,e){var n=ct[t]=S(Z);return Q(n,{type:K,tag:t,description:e}),h||(n.description=e),n},mt=function(t,e,n){t===Y&&mt(ut,e,n),b(t);var r=T(e);return b(n),f(ct,r)?(n.enumerable?(f(t,z)&&t[z][r]&&(t[z][r]=!1),n=S(n,{enumerable:I(0,!1)})):(f(t,z)||it(t,z,I(1,{})),t[z][r]=!0),pt(t,r,n)):it(t,r,n)},yt=function(t,e){b(t);var n=E(e),r=_(n).concat(Tt(n));return $(r,(function(e){h&&!a(bt,n,e)||mt(t,e,n[e])})),t},vt=function(t,e){return void 0===e?S(t):yt(S(t),e)},bt=function(t){var e=T(t),n=a(ot,this,e);return!(this===Y&&f(ct,e)&&!f(ut,e))&&(!(n||!f(this,e)||!f(ct,e)||f(this,z)&&this[z][e])||n)},wt=function(t,e){var n=E(t),r=T(e);if(n!==Y||!f(ct,r)||f(ut,r)){var i=rt(n,r);return!i||!f(ct,r)||f(n,z)&&n[z][r]||(i.enumerable=!0),i}},Et=function(t){var e=st(E(t)),n=[];return $(e,(function(t){f(ct,t)||f(M,t)||at(n,t)})),n},Tt=function(t){var e=t===Y,n=st(e?ut:E(t)),r=[];return $(n,(function(t){!f(ct,t)||e&&!f(Y,t)||at(r,ct[t])})),r};if(l||(J=function(){if(y(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,e=U(t),n=function(t){this===Y&&a(n,ut,t),f(this,z)&&f(this[z],e)&&(this[z][e]=!1),pt(this,e,I(1,t))};return h&&ft&&pt(Y,e,{configurable:!0,set:n}),gt(e,t)},Z=J[G],x(Z,"toString",(function(){return X(this).tag})),x(J,"withoutSetter",(function(t){return gt(U(t),t)})),j.f=bt,N.f=mt,R.f=wt,A.f=k.f=Et,C.f=Tt,F.f=function(t){return gt(V(t),t)},h&&(it(Z,"description",{configurable:!0,get:function(){return X(this).description}}),u||x(Y,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:J}),$(_(dt),(function(t){q(t)})),r({target:K,stat:!0,forced:!l},{for:function(t){var e=O(t);if(f(ht,e))return ht[e];var n=J(e);return ht[e]=n,lt[n]=e,n},keyFor:function(t){if(!v(t))throw tt(t+" is not a symbol");if(f(lt,t))return lt[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!h},{create:vt,defineProperty:mt,defineProperties:yt,getOwnPropertyDescriptor:wt}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:Et,getOwnPropertySymbols:Tt}),r({target:"Object",stat:!0,forced:d((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(w(t))}}),nt){var Ot=!l||d((function(){var t=J();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));r({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,n){var r=D(arguments),i=e;if((m(e)||void 0!==t)&&!v(t))return p(e)||(e=function(t,e){if(g(i)&&(e=a(i,this,t,e)),!v(e))return e}),r[1]=e,o(nt,null,r)}})}if(!Z[W]){var It=Z.valueOf;x(Z,W,(function(t){return a(It,this)}))}B(J,K),M[z]=!0},b2b1:function(t,e,n){},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return s(i(t))}})},b680:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("e330"),o=n("5926"),a=n("408a"),c=n("1148"),u=n("d039"),h=i.RangeError,l=i.String,d=Math.floor,f=s(c),p=s("".slice),g=s(1..toFixed),m=function(t,e,n){return 0===e?n:e%2===1?m(t,e-1,n*t):m(t*t,e/2,n)},y=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},v=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=d(i/1e7)},b=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=d(r/e),r=r%e*1e7},w=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=l(t[e]);n=""===n?r:n+f("0",7-r.length)+r}return n},E=u((function(){return"0.000"!==g(8e-5,3)||"1"!==g(.9,0)||"1.25"!==g(1.255,2)||"1000000000000000128"!==g(0xde0b6b3a7640080,0)}))||!u((function(){g({})}));r({target:"Number",proto:!0,forced:E},{toFixed:function(t){var e,n,r,i,s=a(this),c=o(t),u=[0,0,0,0,0,0],d="",g="0";if(c<0||c>20)throw h("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return l(s);if(s<0&&(d="-",s=-s),s>1e-21)if(e=y(s*m(2,69,1))-69,n=e<0?s*m(2,-e,1):s/m(2,e,1),n*=4503599627370496,e=52-e,e>0){v(u,0,n),r=c;while(r>=7)v(u,1e7,0),r-=7;v(u,m(10,r,1),0),r=e-1;while(r>=23)b(u,1<<23),r-=23;b(u,1<<r),v(u,1,1),b(u,2),g=w(u)}else v(u,0,n),v(u,1<<-e,0),g=w(u)+f("0",c);return c>0?(i=g.length,g=d+(i<=c?"0."+f("0",c-i)+g:p(g,0,i-c)+"."+p(g,i-c))):g=d+g,g}})},ba3a:function(t,e,n){},bfdb:function(t,e,n){},c9ed:function(t,e,n){"use strict";var r=n("7a23"),i={d:"M12,20,4.57,13.09a5,5,0,0,1,.74-6.83,4.7,4.7,0,0,1,6.6.73L12,7.1,12.09,7a4.7,4.7,0,0,1,6.6-.73,5,5,0,0,1,.74,6.83Z"};function s(t,e){return Object(r["z"])(),Object(r["g"])("path",i)}var o=n("6b0d"),a=n.n(o);const c={},u=a()(c,[["render",s]]);e["a"]=u},ce5a:function(t,e,n){"use strict";n("ba3a")},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,u=s(r),h={},l=0;while(u.length>l)n=i(r,e=u[l++]),void 0!==n&&c(h,e,n);return h}})},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},ee4c:function(t,e,n){"use strict";n("b2b1")},f6be:function(t,e,n){"use strict";n("78f6")},fcf4:function(t,e,n){"use strict";n("6e49")}}]);
//# sourceMappingURL=chunk-1cbcd33e.8000ac3d.js.map