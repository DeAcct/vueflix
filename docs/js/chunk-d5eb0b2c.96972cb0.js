(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5eb0b2c"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ui})),n.d(e,"b",(function(){return Yi})),n.d(e,"c",(function(){return fi})),n.d(e,"d",(function(){return Ki})),n.d(e,"e",(function(){return Gi}));var s=n("589b"),r=n("22e5"),i=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
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
 */class h{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
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
let u="9.6.0";
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
 */const l=new i["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=i["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=i["a"].ERROR){const n=e.map(m);l.error(`Firestore (${u}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=i["a"].WARN){const n=e.map(m);l.warn(`Firestore (${u}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function y(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(h.UNAUTHENTICATED))}shutdown(){}}class A{constructor(t){this.t=t,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new T;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new T,t.enqueueRetryable(()=>s(this.currentUser))};const i=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new T)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new h(t)}}class S{constructor(t,e,n){this.type="FirstParty",this.user=h.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(h.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
class N{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function O(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */N.I=-1;class D{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=O(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function x(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}
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
class P{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new P(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function U(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function V(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function F(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class j{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===j.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof j?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class q extends j{construct(t,e,n){return new q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new q(e)}static emptyPath(){return new q([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends j{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new E(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new E(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new E(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(e)}static emptyPath(){return new K([])}}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(v(!!t),"string"==typeof t){let e=0;const n=G.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?$.fromBase64String(t):$.fromUint8Array(t)}
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
 */function X(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Q(t){const e=t.mapValue.fields.__previous_value__;return X(e)?Q(e):e}function Y(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
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
 */function nt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?X(t)?4:10:y()}function st(t,e){const n=nt(t);if(n!==nt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),s=H(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return z(t.geoPointValue.latitude)===z(e.geoPointValue.latitude)&&z(t.geoPointValue.longitude)===z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return z(t.integerValue)===z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=z(t.doubleValue),s=z(e.doubleValue);return n===s?Z(n)===Z(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],st);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(U(n)!==U(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!st(n[r],s[r])))return!1;return!0}(t,e);default:return y()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>st(t,e))}function it(t,e){const n=nt(t),s=nt(e);if(n!==s)return x(n,s);switch(n){case 0:return 0;case 1:return x(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=z(t.integerValue||t.doubleValue),s=z(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ot(t.timestampValue,e.timestampValue);case 4:return ot(Y(t),Y(e));case 5:return x(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),s=W(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=x(n[r],s[r]);if(0!==t)return t}return x(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=x(z(t.latitude),z(e.latitude));return 0!==n?n:x(z(t.longitude),z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=it(n[r],s[r]);if(t)return t}return x(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=x(s[o],i[o]);if(0!==t)return t;const e=it(n[s[o]],r[i[o]]);if(0!==e)return e}return x(s.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return x(t,e);const n=H(t),s=H(e),r=x(n.seconds,s.seconds);return 0!==r?r:x(n.nanos,s.nanos)}function at(t){return ct(t)}function ct(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,et.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=ct(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${ct(t.fields[r])}`;return n+"}"}(t.mapValue):y();var e,n}function ht(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ut(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function dt(t){return!!t&&"nullValue"in t}function ft(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pt(t){return!!t&&"mapValue"in t}function gt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return V(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=gt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!pt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gt(e)}setAll(t){let e=K.emptyPath(),n={},s=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=gt(t):s.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());pt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return st(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];pt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){V(e,(e,n)=>t[e]=n);for(const s of n)delete t[s]}clone(){return new mt(gt(this.value))}}
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
class yt{constructor(t,e,n,s,r){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=r}static newInvalidDocument(t){return new yt(t,0,M.min(),mt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,n,0)}static newNoDocument(t,e){return new yt(t,2,e,mt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new yt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class vt{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.R=null}}function wt(t,e=null,n=[],s=[],r=null,i=null,o=null){return new vt(t,e,n,s,r,i,o)}function bt(t){const e=w(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>At(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),J(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Pt(e.startAt)),e.endAt&&(t+="|ub:",t+=Pt(e.endAt)),e.R=t}return e.R}function Et(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${at(e.value)}`;var e}).join(", ")}]`),J(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Pt(t.startAt)),t.endAt&&(e+=", endAt: "+Pt(t.endAt)),`Target(${e})`}function Tt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ut(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!st(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ft(t.startAt,e.startAt)&&Ft(t.endAt,e.endAt)}function It(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class _t extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new St(t,e,n):"array-contains"===e?new Nt(t,n):"in"===e?new Ot(t,n):"not-in"===e?new Dt(t,n):"array-contains-any"===e?new xt(t,n):new _t(t,e,n)}static P(t,e,n){return"in"===e?new Ct(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(it(e,this.value)):null!==e&&nt(this.value)===nt(e)&&this.v(it(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function At(t){return t.field.canonicalString()+t.op.toString()+at(t.value)}class St extends _t{constructor(t,e,n){super(t,e,n),this.key=et.fromName(n.referenceValue)}matches(t){const e=et.comparator(t.key,this.key);return this.v(e)}}class Ct extends _t{constructor(t,e){super(t,"in",e),this.keys=Rt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends _t{constructor(t,e){super(t,"not-in",e),this.keys=Rt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Rt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>et.fromName(t.referenceValue))}class Nt extends _t{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lt(e)&&rt(e.arrayValue,this.value)}}class Ot extends _t{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class Dt extends _t{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class xt extends _t{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class Lt{constructor(t,e){this.position=t,this.before=e}}function Pt(t){return`${t.before?"b":"a"}:${t.position.map(t=>at(t)).join(",")}`}class Mt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ut(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vt(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?et.comparator(et.fromName(o.referenceValue),n.key):it(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function Ft(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!st(t.position[n],e.position[n]))return!1;return!0}
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
 */class jt{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function qt(t,e,n,s,r,i,o,a){return new jt(t,e,n,s,r,i,o,a)}function Bt(t){return new jt(t)}function Kt(t){return!J(t.limit)&&"F"===t.limitType}function $t(t){return!J(t.limit)&&"L"===t.limitType}function Gt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ht(t){for(const e of t.filters)if(e.V())return e.field;return null}function zt(t){return null!==t.collectionGroup}function Wt(t){const e=w(t);if(null===e.S){e.S=[];const t=Ht(e),n=Gt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Mt(t)),e.S.push(new Mt(K.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Mt(K.keyField(),t))}}}return e.S}function Xt(t){const e=w(t);if(!e.D)if("F"===e.limitType)e.D=wt(e.path,e.collectionGroup,Wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Wt(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Mt(r.field,e))}const n=e.endAt?new Lt(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Lt(e.startAt.position,!e.startAt.before):null;e.D=wt(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function Qt(t,e,n){return new jt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yt(t,e){return Tt(Xt(t),Xt(e))&&t.limitType===e.limitType}function Jt(t){return`${bt(Xt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${Et(Xt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Vt(t.startAt,Wt(t),e))&&(!t.endAt||!Vt(t.endAt,Wt(t),e))}(t,e)}function ee(t){return(e,n)=>{let s=!1;for(const r of Wt(t)){const t=ne(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function ne(t,e,n){const s=t.field.isKeyField()?et.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?it(s,r):y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return y()}}
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
 */function se(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(e)?"-0":e}}function re(t){return{integerValue:""+t}}function ie(t,e){return tt(e)?re(e):se(t,e)}
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
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof ue?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof le?de(t,e):t instanceof fe?pe(t,e):function(t,e){const n=he(t,e),s=me(n)+me(t.N);return ut(n)&&ut(t.N)?re(s):se(t.k,s)}(t,e)}function ce(t,e,n){return t instanceof le?de(t,e):t instanceof fe?pe(t,e):n}function he(t,e){return t instanceof ge?ut(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ue extends oe{}class le extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=ye(e);for(const s of t.elements)n.some(t=>st(t,s))||n.push(s);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function pe(t,e){let n=ye(e);for(const s of t.elements)n=n.filter(t=>!st(t,s));return{arrayValue:{values:n}}}class ge extends oe{constructor(t,e){super(),this.k=t,this.N=e}}function me(t){return z(t.integerValue||t.doubleValue)}function ye(t){return lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function ve(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof fe&&e instanceof fe?L(t.elements,e.elements,st):t instanceof ge&&e instanceof ge?st(t.N,e.N):t instanceof ue&&e instanceof ue}(t.transform,e.transform)}function we(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class be{}function Ee(t,e,n){t instanceof Ae?function(t,e,n){const s=t.value.clone(),r=ke(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Se?function(t,e,n){if(!we(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=ke(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Ce(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Te(t,e,n){t instanceof Ae?function(t,e,n){if(!we(t.precondition,e))return;const s=t.value.clone(),r=Re(t.fieldTransforms,n,e);s.setAll(r),e.convertToFoundDocument(_e(e),s).setHasLocalMutations()}(t,e,n):t instanceof Se?function(t,e,n){if(!we(t.precondition,e))return;const s=Re(t.fieldTransforms,n,e),r=e.data;r.setAll(Ce(t)),r.setAll(s),e.convertToFoundDocument(_e(e),r).setHasLocalMutations()}(t,e,n):function(t,e){we(t.precondition,e)&&e.convertToNoDocument(M.min())}(t,e)}function Ie(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>ve(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function _e(t){return t.isFoundDocument()?t.version:M.min()}class Ae extends be{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Se extends be{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Ce(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ke(t,e,n){const s=new Map;v(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,ce(o,a,n[r]))}return s}function Re(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,ae(t,i,e))}return s}
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
class Ne{constructor(t){this.count=t}}
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
 */var Oe,De;function xe(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case Oe.OK:return b.OK;case Oe.CANCELLED:return b.CANCELLED;case Oe.UNKNOWN:return b.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return b.INTERNAL;case Oe.UNAVAILABLE:return b.UNAVAILABLE;case Oe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Oe.NOT_FOUND:return b.NOT_FOUND;case Oe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Oe.ABORTED:return b.ABORTED;case Oe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Oe.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(De=Oe||(Oe={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";
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
class Le{constructor(t,e){this.comparator=t,this.root=e||Me.EMPTY}insert(t,e){return new Le(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(t){return new Le(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Me.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pe(this.root,t,this.comparator,!0)}}class Pe{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Me{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Me.RED,this.left=null!=s?s:Me.EMPTY,this.right=null!=r?r:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Me(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Me.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1,Me.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ue{constructor(t){this.comparator=t,this.data=new Le(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ve(this.data.getIterator())}getIteratorFrom(t){return new Ve(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ue))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ue(this.comparator);return e.data=t,e}}class Ve{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Fe=new Le(et.comparator);function je(){return Fe}const qe=new Le(et.comparator);function Be(){return qe}new Le(et.comparator);const Ke=new Ue(et.comparator);function $e(...t){let e=Ke;for(const n of t)e=e.add(n);return e}const Ge=new Ue(x);function He(){return Ge}
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
 */class ze{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,We.createSynthesizedTargetChangeForCurrentChange(t,e)),new ze(M.min(),n,He(),je(),$e())}}class We{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new We($.EMPTY_BYTE_STRING,e,$e(),$e(),$e())}}
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
 */class Xe{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.F=s}}class Qe{constructor(t,e){this.targetId=t,this.O=e}}class Ye{constructor(t,e,n=$.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Je{constructor(){this.M=0,this.L=en(),this.B=$.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=$e(),e=$e(),n=$e();return this.L.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:y()}}),new We(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=en()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Ze{constructor(t){this.et=t,this.nt=new Map,this.st=je(),this.it=tn(),this.rt=new Ue(x)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,s=this.wt(e);if(s){const t=s.target;if(It(t))if(0===n){const n=new et(t.path);this.ct(e,n,yt.newNoDocument(n,M.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,s)=>{const r=this.wt(s);if(r){if(n.current&&It(r.target)){const e=new et(r.target.path);null!==this.st.get(e)||this.yt(s,e)||this.ct(s,e,yt.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}});let n=$e();this.it.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))});const s=new ze(t,e,this.rt,this.st,n);return this.st=je(),this.it=tn(),this.rt=new Ue(x),s}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Je,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Ue(x),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Je),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function tn(){return new Le(et.comparator)}function en(){return new Le(et.comparator)}
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
 */const nn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),sn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class rn{constructor(t,e){this.databaseId=t,this.C=e}}function on(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function an(t,e){return t.C?e.toBase64():e.toUint8Array()}function cn(t){return v(!!t),M.fromTimestamp(function(t){const e=H(t);return new P(e.seconds,e.nanos)}(t))}function hn(t,e){return function(t){return new q(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function un(t){const e=q.fromString(t);return v(Nn(e)),e}function ln(t,e){const n=un(e);if(n.get(1)!==t.databaseId.projectId)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new et(gn(n))}function dn(t,e){return hn(t.databaseId,e)}function fn(t){const e=un(t);return 4===e.length?q.emptyPath():gn(e)}function pn(t){return new q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mn(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),$.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),$.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:xe(t.code);return new E(e,t.message||"")}(o);n=new Ye(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ln(t,s.document.name),i=cn(s.document.updateTime),o=new mt({mapValue:{fields:s.document.fields}}),a=yt.newFoundDocument(r,i,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new Xe(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ln(t,s.document),i=s.readTime?cn(s.readTime):M.min(),o=yt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Xe([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ln(t,s.document),i=s.removedTargetIds||[];n=new Xe([],i,r,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new Ne(s),i=t.targetId;n=new Qe(i,r)}}return n}function yn(t,e){return{documents:[dn(t,e.path)]}}function vn(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=dn(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dn(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ft(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NAN"}};if(dt(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ft(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NOT_NAN"}};if(dt(t.value))return{unaryFilter:{field:Sn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sn(t.field),op:An(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Sn(t.field),direction:_n(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.C||J(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Tn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Tn(e.endAt)),n}function wn(t){let e=fn(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){v(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=En(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Mt(Cn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,J(e)?null:e}(n.limit));let c=null;n.startAt&&(c=In(n.startAt));let h=null;return n.endAt&&(h=In(n.endAt)),qt(e,r,o,i,a,"F",c,h)}function bn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function En(t){return t?void 0!==t.unaryFilter?[Rn(t)]:void 0!==t.fieldFilter?[kn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>En(t)).reduce((t,e)=>t.concat(e)):y():[]}function Tn(t){return{before:t.before,values:t.position}}function In(t){const e=!!t.before,n=t.values||[];return new Lt(n,e)}function _n(t){return nn[t]}function An(t){return sn[t]}function Sn(t){return{fieldPath:t.canonicalString()}}function Cn(t){return K.fromServerFormat(t.fieldPath)}function kn(t){return _t.create(Cn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Rn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Cn(t.unaryFilter.field);return _t.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Cn(t.unaryFilter.field);return _t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cn(t.unaryFilter.field);return _t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Cn(t.unaryFilter.field);return _t.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Nn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function On(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xn(e)),e=Dn(t.get(n),e);return xn(e)}function Dn(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function xn(t){return t+""}class Ln{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Ln.store="owner",Ln.key="owner";class Pn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Pn.store="mutationQueues",Pn.keyPath="userId";class Mn{constructor(t,e,n,s,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=s,this.mutations=r}}Mn.store="mutations",Mn.keyPath="batchId",Mn.userMutationsIndex="userMutationsIndex",Mn.userMutationsKeyPath=["userId","batchId"];class Un{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,On(e)]}static key(t,e,n){return[t,On(e),n]}}Un.store="documentMutations",Un.PLACEHOLDER=new Un;class Vn{constructor(t,e,n,s,r,i){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=s,this.readTime=r,this.parentPath=i}}Vn.store="remoteDocuments",Vn.readTimeIndex="readTimeIndex",Vn.readTimeIndexPath="readTime",Vn.collectionReadTimeIndex="collectionReadTimeIndex",Vn.collectionReadTimeIndexPath=["parentPath","readTime"];class Fn{constructor(t){this.byteSize=t}}Fn.store="remoteDocumentGlobal",Fn.key="remoteDocumentGlobalKey";class jn{constructor(t,e,n,s,r,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=s,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=i,this.query=o}}jn.store="targets",jn.keyPath="targetId",jn.queryTargetsIndexName="queryTargetsIndex",jn.queryTargetsKeyPath=["canonicalId","targetId"];class qn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}qn.store="targetDocuments",qn.keyPath=["targetId","path"],qn.documentTargetsIndex="documentTargetsIndex",qn.documentTargetsKeyPath=["path","targetId"];class Bn{constructor(t,e,n,s){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=s}}Bn.key="targetGlobalKey",Bn.store="targetGlobal";class Kn{constructor(t,e){this.collectionId=t,this.parent=e}}Kn.store="collectionParents",Kn.keyPath=["collectionId","parent"];class $n{constructor(t,e,n,s){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=s}}$n.store="clientMetadata",$n.keyPath="clientId";class Gn{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Gn.store="bundles",Gn.keyPath="bundleId";class Hn{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Hn.store="namedQueries",Hn.keyPath="name";Pn.store,Mn.store,Un.store,Vn.store,jn.store,Ln.store,Bn.store,qn.store,$n.store,Fn.store,Kn.store,Gn.store,Hn.store;const zn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class Xn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Xn((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Xn?e:Xn.resolve(e)}catch(t){return Xn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Xn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Xn.reject(e)}static resolve(t){return new Xn((e,n)=>{e(t)})}static reject(t){return new Xn((e,n)=>{n(t)})}static waitFor(t){return new Xn((e,n)=>{let s=0,r=0,i=!1;t.forEach(t=>{++s,t.next(()=>{++r,i&&r===s&&e()},t=>n(t))}),i=!0,r===s&&e()})}static or(t){let e=Xn.resolve(!1);for(const n of t)e=e.next(t=>t?Xn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}}
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
 */function Qn(t){return"IndexedDbTransactionError"===t.name}
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
class Yn{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Ee(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$e())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Ie(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Ie(t,e))}}
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
class Jn{constructor(t,e,n,s,r=M.min(),i=M.min(),o=$.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Zn{constructor(t){this.Gt=t}}function ts(t){const e=wn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Qt(e,e.limit,"L"):e}
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
class es{constructor(){this.zt=new ns}addToCollectionParentIndex(t,e){return this.zt.add(e),Xn.resolve()}getCollectionParents(t,e){return Xn.resolve(this.zt.getEntries(e))}}class ns{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ue(q.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ue(q.comparator)).toArray()}}
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
 */class ss{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ss(t,ss.DEFAULT_COLLECTION_PERCENTILE,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */ss.DEFAULT_COLLECTION_PERCENTILE=10,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ss.DEFAULT=new ss(41943040,ss.DEFAULT_COLLECTION_PERCENTILE,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ss.DISABLED=new ss(-1,0,0);
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
class rs{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new rs(0)}static re(){return new rs(-1)}}
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
async function is(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==zn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
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
class os{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){V(this.inner,(e,n)=>{for(const[s,r]of n)t(s,r)})}isEmpty(){return F(this.inner)}}
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
 */class as{constructor(){this.changes=new os(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:M.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:yt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Xn.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class cs{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const s of e)s.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):zt(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new et(e)).next(t=>{let e=Be();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const s=e.collectionGroup;let r=Be();return this.Jt.getCollectionParents(t,s).next(i=>Xn.forEach(i,i=>{const o=function(t,e){return new jt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}Cn(t,e,n){let s,r;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(r=e,this.Nn(t,r,s).next(t=>{s=t;for(const e of r)for(const t of e.mutations){const n=t.key;let r=s.get(n);null==r&&(r=yt.newInvalidDocument(n),s=s.insert(n,r)),Te(t,r,e.localWriteTime),r.isFoundDocument()||(s=s.remove(n))}}))).next(()=>(s.forEach((t,n)=>{te(e,n)||(s=s.remove(t))}),s))}Nn(t,e,n){let s=$e();for(const i of e)for(const t of i.mutations)t instanceof Se&&null===n.get(t.key)&&(s=s.add(t.key));let r=n;return this.Je.getEntries(t,s).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))}),r))}}
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
 */class hs{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=$e(),s=$e();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new hs(t,e.fromCache,n,s)}}
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
 */class us{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(M.min())?this.Mn(t,e):this.On.vn(t,s).next(r=>{const o=this.Ln(e,r);return(Kt(e)||$t(e))&&this.Bn(e.limitType,o,s,n)?this.Mn(t,e):(d()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Ue(ee(t));return e.forEach((e,s)=>{te(t,s)&&(n=n.add(s))}),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mn(t,e){return d()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,M.min())}}
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
 */class ls{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new Le(x),this.Kn=new os(t=>bt(t),Tt),this.jn=M.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new cs(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function ds(t,e,n,s){return new ls(t,e,n,s)}async function fs(t,e){const n=w(t);let s=n.An,r=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.An.getAllMutationBatches(t).next(o=>(i=o,s=n.persistence.getMutationQueue(e),r=new cs(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t))).next(e=>{const n=[],s=[];let o=$e();for(const t of i){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:s}))})});return n.An=s,n.Wn=r,n.Un.Fn(n.Wn),i}function ps(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function gs(t,e){const n=w(t),s=e.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const o=[];e.targetChanges.forEach((e,i)=>{const a=r.get(i);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,i).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,i)));const c=e.resumeToken;if(c.approximateByteSize()>0){const h=a.withResumeToken(c,s).withSequenceNumber(t.currentSequenceNumber);r=r.insert(i,h),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,h,e)&&o.push(n.He.updateTargetData(t,h))}});let a=je();if(e.documentUpdates.forEach((s,r)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(ms(t,i,e.documentUpdates,s,void 0).next(t=>{a=t})),!s.isEqual(M.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e)}return Xn.waitFor(o).next(()=>i.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=r,t))}function ms(t,e,n,s,r){let i=$e();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=je();return n.forEach((n,o)=>{const a=t.get(n),c=(null==r?void 0:r.get(n))||s;o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,c),i=i.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),i=i.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),i})}function ys(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.He.getTargetData(t,e).next(r=>r?(s=r,Xn.resolve(s)):n.He.allocateTargetId(t).next(r=>(s=new Jn(e,r,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next(()=>s))))}).then(t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function vs(t,e,n){const s=w(t),r=s.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,t=>s.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!Qn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qn=s.qn.remove(e),s.Kn.delete(r.target)}function ws(t,e,n){const s=w(t);let r=M.min(),i=$e();return s.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const s=w(t),r=s.Kn.get(n);return void 0!==r?Xn.resolve(s.qn.get(r)):s.He.getTargetData(e,n)}(s,t,Xt(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>s.Un.getDocumentsMatchingQuery(t,e,n?r:M.min(),n?i:$e())).next(t=>({documents:t,zn:i})))}
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
class bs{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Xn.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:cn(n.createTime)}),Xn.resolve()}getNamedQuery(t,e){return Xn.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:ts(t.bundledQuery),readTime:cn(t.readTime)}}(e)),Xn.resolve()}}
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
 */class Es{constructor(){this.ts=new Ue(Ts.es),this.ns=new Ue(Ts.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Ts(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new Ts(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new et(new q([])),n=new Ts(e,t),s=new Ts(e,t+1),r=[];return this.ns.forEachInRange([n,s],t=>{this.os(t),r.push(t.key)}),r}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new et(new q([])),n=new Ts(e,t),s=new Ts(e,t+1);let r=$e();return this.ns.forEachInRange([n,s],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new Ts(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ts{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return et.comparator(t.key,e.key)||x(t.fs,e.fs)}static ss(t,e){return x(t.fs,e.fs)||et.comparator(t.key,e.key)}}
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
 */class Is{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Ue(Ts.es)}checkEmpty(t){return Xn.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const i=new Yn(r,e,n,s);this.An.push(i);for(const o of s)this.ws=this.ws.add(new Ts(o.key,r)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Xn.resolve(i)}lookupMutationBatch(t,e){return Xn.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),r=s<0?0:s;return Xn.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return Xn.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Xn.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ts(e,0),s=new Ts(e,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,s],t=>{const e=this._s(t.fs);r.push(e)}),Xn.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ue(x);return e.forEach(t=>{const e=new Ts(t,0),s=new Ts(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],t=>{n=n.add(t.fs)})}),Xn.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;et.isDocumentKey(r)||(r=r.child(""));const i=new Ts(new et(r),0);let o=new Ue(x);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)},i),Xn.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Xn.forEach(e.mutations,s=>{const r=new Ts(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new Ts(e,0),s=this.ws.firstAfterOrEqual(n);return Xn.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,Xn.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
 */class _s{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Le(et.comparator),this.size=0}addEntry(t,e,n){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.clone(),size:o,readTime:n}),this.size+=o-i,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Xn.resolve(n?n.document.clone():yt.newInvalidDocument(e))}getEntries(t,e){let n=je();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():yt.newInvalidDocument(t))}),Xn.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=je();const r=new et(e.path.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r,readTime:o}}=i.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,r)&&(s=s.insert(r.key,r.clone()))}return Xn.resolve(s)}Es(t,e){return Xn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new As(this)}getSize(t){return Xn.resolve(this.size)}}class As extends as{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)}),Xn.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
 */class Ss{constructor(t){this.persistence=t,this.Is=new os(t=>bt(t),Tt),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.As=0,this.Rs=new Es,this.targetCount=0,this.Ps=rs.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Xn.resolve()}getLastRemoteSnapshotVersion(t){return Xn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Xn.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Xn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Xn.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new rs(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Xn.resolve()}updateTargetData(t,e){return this.ce(e),Xn.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Xn.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Is.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),Xn.waitFor(r).next(()=>s)}getTargetCount(t){return Xn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Xn.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Xn.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach(e=>{r.push(s.markPotentiallyOrphaned(t,e))}),Xn.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Xn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Xn.resolve(n)}containsKey(t,e){return Xn.resolve(this.Rs.containsKey(e))}}
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
 */class Cs{constructor(t,e){this.bs={},this.Be=new N(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Ss(this),this.Jt=new es,this.Je=function(t,e){return new _s(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Zn(e),this.Ye=new bs(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Is(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const s=new ks(this.Be.next());return this.referenceDelegate.Vs(),n(s).next(t=>this.referenceDelegate.Ss(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Ds(t,e){return Xn.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class ks extends Wn{constructor(t){super(),this.currentSequenceNumber=t}}class Rs{constructor(t){this.persistence=t,this.Cs=new Es,this.Ns=null}static ks(t){return new Rs(t)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Xn.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Xn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Xn.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Xn.forEach(this.xs,n=>{const s=et.fromPath(n);return this.$s(t,s).next(t=>{t||e.removeEntry(s)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Xn.or([()=>Xn.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
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
 */class Ns{constructor(){this.activeTargetIds=He()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Os{constructor(){this.pi=new Ns,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Ns,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Ds{Ei(t){}shutdown(){}}
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
 */class xs{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Ls={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Ps{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
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
 */class Ms extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,r){const i=this.Ui(t,e);f("RestConnection","Sending: ",i,n);const o={};return this.qi(o,s,r),this.Ki(t,i,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}ji(t,e,n,s,r){return this.Bi(t,e,n,s,r)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=Ls[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise((r,i)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),r(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new E(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);i(new E(e,t.message))}else i(new E(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(s);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["l"])()||Object(o["m"])()||Object(o["i"])()||Object(o["j"])()||Object(o["o"])()||Object(o["h"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const h=s.join("");f("Connection","Creating WebChannel: "+h,c);const u=r.createWebChannel(h,c);let l=!1,d=!1;const p=new Ps({Vi:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Si:()=>u.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(u,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(u,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.Fi())}),m(u,a["f"].EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),p.Fi(new E(b.UNAVAILABLE,"The operation could not be completed")))}),m(u,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){f("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Oe[t];if(void 0!==e)return xe(e)}(t),n=r.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),d=!0,p.Fi(new E(e,n)),u.close()}else f("Connection","WebChannel received:",n),p.Oi(n)}}),m(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.$i()},0),p}}
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
 */function Us(){return"undefined"!=typeof document?document:null}
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
 */function Vs(t){return new rn(t,!0)}class Fs{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&f("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
 */class js{constructor(t,e,n,s,r,i,o,a){this.Oe=t,this.nr=n,this.sr=s,this.ir=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Fs(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new E(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qs extends js{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.k=r}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=mn(this.k,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?cn(e.readTime):M.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=pn(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=It(s)?{documents:yn(t,s)}:{query:vn(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=an(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=on(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=bn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=pn(this.k),e.removeTarget=t,this.gr(e)}}
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
class Bs extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.Bi(t,e,n,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.ji(t,e,n,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Ks{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(p(e),this.Lr=!1):f("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
 */class $s{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Zs(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.Gr.add(4),await Hs(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Gs(e)}(this))})}),this.Jr=new Ks(n,s)}}async function Gs(t){if(Zs(t))for(const e of t.zr)await e(!0)}async function Hs(t){for(const e of t.zr)await e(!1)}function zs(t,e){const n=w(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Js(n)?Ys(n):or(n).lr()&&Xs(n,e))}function Ws(t,e){const n=w(t),s=or(n);n.Wr.delete(e),s.lr()&&Qs(n,e),0===n.Wr.size&&(s.lr()?s._r():Zs(n)&&n.Jr.set("Unknown"))}function Xs(t,e){t.Yr.X(e.targetId),or(t).br(e)}function Qs(t,e){t.Yr.X(e),or(t).vr(e)}function Ys(t){t.Yr=new Ze({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),or(t).start(),t.Jr.Br()}function Js(t){return Zs(t)&&!or(t).hr()&&t.Wr.size>0}function Zs(t){return 0===w(t).Gr.size}function tr(t){t.Yr=void 0}async function er(t){t.Wr.forEach((e,n)=>{Xs(t,e)})}async function nr(t,e){tr(t),Js(t)?(t.Jr.Kr(e),Ys(t)):t.Jr.set("Unknown")}async function sr(t,e,n){if(t.Jr.set("Online"),e instanceof Ye&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rr(t,n)}else if(e instanceof Xe?t.Yr.ot(e):e instanceof Qe?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(M.min()))try{const e=await ps(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.Wr.get(s);r&&t.Wr.set(s,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),Qs(t,e);const s=new Jn(n.target,e,1,n.sequenceNumber);Xs(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await rr(t,e)}}async function rr(t,e,n){if(!Qn(e))throw e;t.Gr.add(1),await Hs(t),t.Jr.set("Offline"),n||(n=()=>ps(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Gs(t)})}async function ir(t,e){const n=w(t);e?(n.Gr.delete(2),await Gs(n)):e||(n.Gr.add(2),await Hs(n),n.Jr.set("Unknown"))}function or(t){return t.Xr||(t.Xr=function(t,e,n){const s=w(t);return s.Fr(),new qs(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)
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
 */}(t.datastore,t.asyncQueue,{Di:er.bind(null,t),Ni:nr.bind(null,t),Pr:sr.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Js(t)?Ys(t):t.Jr.set("Unknown")):(await t.Xr.stop(),tr(t))})),t.Xr}
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
class ar{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new ar(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cr(t,e){if(p("AsyncQueue",`${e}: ${t}`),Qn(t))return new E(b.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class hr{constructor(t){this.comparator=t?(e,n)=>t(e,n)||et.comparator(e.key,n.key):(t,e)=>et.comparator(t.key,e.key),this.keyedMap=Be(),this.sortedSet=new Le(this.comparator)}static emptySet(t){return new hr(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof hr))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new hr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class ur{constructor(){this.eo=new Le(et.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):y():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class lr{constructor(t,e,n,s,r,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new lr(t,e,hr.emptySet(e),r,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class dr{constructor(){this.so=void 0,this.listeners=[]}}class fr{constructor(){this.queries=new os(t=>Jt(t),Yt),this.onlineState="Unknown",this.io=new Set}}async function pr(t,e){const n=w(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new dr),r)try{i.so=await n.onListen(s)}catch(t){const n=cr(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&vr(n)}async function gr(t,e){const n=w(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function mr(t,e){const n=w(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(r)&&(s=!0);e.so=r}}s&&vr(n)}function yr(t,e,n){const s=w(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function vr(t){t.io.forEach(t=>{t.next()})}class wr{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new lr(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=lr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
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
class br{constructor(t){this.key=t}}class Er{constructor(t){this.key=t}}class Tr{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=$e(),this.mutatedKeys=$e(),this.Ao=ee(t),this.Ro=new hr(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new ur,s=e?e.Ro:this.Ro;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a=Kt(this.query)&&s.size===this.query.limit?s.last():null,c=$t(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{const h=s.get(t),u=te(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))}),Kt(this.query)||$t(this.query))for(;i.size>this.query.limit;){const t=Kt(this.query)?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ro:i,vo:n,Bn:o,mutatedKeys:r}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const r=t.vo.no();r.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const i=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==r.length||a?{snapshot:new lr(this.query,t.Ro,s,r,t.mutatedKeys,0===o,a,!1),Co:i}:{Co:i}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new ur,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=$e(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Er(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new br(n))}),e}ko(t){this.To=t.zn,this.Io=$e();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return lr.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Ir{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _r{constructor(t){this.key=t,this.$o=!1}}class Ar{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Fo={},this.Oo=new os(t=>Jt(t),Yt),this.Mo=new Map,this.Lo=new Set,this.Bo=new Le(et.comparator),this.Uo=new Map,this.qo=new Es,this.Ko={},this.jo=new Map,this.Qo=rs.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Sr(t,e){const n=jr(t);let s,r;const i=n.Oo.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.xo();else{const t=await ys(n.localStore,Xt(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await Cr(n,e,s,"current"===i),n.isPrimaryClient&&zs(n.remoteStore,t)}return r}async function Cr(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let r=e.view.bo(n);r.Bn&&(r=await ws(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,r)));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return Lr(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const r=await ws(t.localStore,e,!0),i=new Tr(e,r.zn),o=i.bo(r.documents),a=We.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Lr(t,n,c.Co);const h=new Ir(e,n,i);return t.Oo.set(e,h),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function kr(t,e){const n=w(t),s=n.Oo.get(e),r=n.Mo.get(s.targetId);if(r.length>1)return n.Mo.set(s.targetId,r.filter(t=>!Yt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ws(n.remoteStore,s.targetId),Dr(n,s.targetId)}).catch(is)):(Dr(n,s.targetId),await vs(n.localStore,s.targetId,!0))}async function Rr(t,e){const n=w(t);try{const t=await gs(n.localStore,e);e.targetChanges.forEach((t,e)=>{const s=n.Uo.get(e);s&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?v(s.$o):t.removedDocuments.size>0&&(v(s.$o),s.$o=!1))}),await Ur(n,t,e)}catch(t){await is(t)}}function Nr(t,e,n){const s=w(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Oo.forEach((n,s)=>{const r=s.view.ro(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(const r of n.listeners)r.ro(e)&&(s=!0)}),s&&vr(n)}(s.eventManager,e),t.length&&s.Fo.Pr(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Or(t,e,n){const s=w(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Uo.get(e),i=r&&r.key;if(i){let t=new Le(et.comparator);t=t.insert(i,yt.newNoDocument(i,M.min()));const n=$e().add(i),r=new ze(M.min(),new Map,new Ue(x),t,n);await Rr(s,r),s.Bo=s.Bo.remove(i),s.Uo.delete(e),Mr(s)}else await vs(s.localStore,e,!1).then(()=>Dr(s,e,n)).catch(is)}function Dr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Mo.get(e))t.Oo.delete(s),n&&t.Fo.zo(s,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||xr(t,e)})}function xr(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Ws(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Mr(t))}function Lr(t,e,n){for(const s of n)s instanceof br?(t.qo.addReference(s.key,e),Pr(t,s)):s instanceof Er?(f("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||xr(t,s.key)):y()}function Pr(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(f("SyncEngine","New document in limbo: "+n),t.Lo.add(s),Mr(t))}function Mr(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new et(q.fromString(e)),s=t.Qo.next();t.Uo.set(s,new _r(n)),t.Bo=t.Bo.insert(n,s),zs(t.remoteStore,new Jn(Xt(Bt(n.path)),s,2,N.I))}}async function Ur(t,e,n){const s=w(t),r=[],i=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach((t,a)=>{o.push(s.Go(a,e,n).then(t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=hs.$n(a.targetId,t);i.push(e)}}))}),await Promise.all(o),s.Fo.Pr(r),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Xn.forEach(e,e=>Xn.forEach(e.kn,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>Xn.forEach(e.xn,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(t){if(!Qn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.qn.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(t,r)}}}(s.localStore,i))}async function Vr(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await fs(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new E(b.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ur(n,t.Gn)}}function Fr(t,e){const n=w(t),s=n.Uo.get(e);if(s&&s.$o)return $e().add(s.key);{let t=$e();const s=n.Mo.get(e);if(!s)return t;for(const e of s){const s=n.Oo.get(e);t=t.unionWith(s.view.Po)}return t}}function jr(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rr.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fr.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Or.bind(null,e),e.Fo.Pr=mr.bind(null,e.eventManager),e.Fo.zo=yr.bind(null,e.eventManager),e}class qr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Vs(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return ds(this.persistence,new us,t.initialUser,this.k)}Yo(t){return new Cs(Rs.ks,this.k)}Jo(t){return new Os}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Br{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vr.bind(null,this.syncEngine),await ir(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fr}createDatastore(t){const e=Vs(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Ms(s));var s;return function(t,e,n,s){return new Bs(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Nr(this.syncEngine,t,0),i=xs.bt()?new xs:new Ds,new $s(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Ar(t,e,n,s,r,i);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Hs(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
class Kr{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
class $r{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=h.UNAUTHENTICATED,this.clientId=D.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Gr(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await fs(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Hr(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zr(t);f("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(t=>async function(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const s=Zs(n);n.Gr.add(3),await Hs(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Gs(n)}(e.remoteStore,t)),t.onlineComponents=e}async function zr(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Gr(t,new qr)),t.offlineComponents}async function Wr(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Hr(t,new Br)),t.onlineComponents}async function Xr(t){const e=await Wr(t),n=e.eventManager;return n.onListen=Sr.bind(null,e.syncEngine),n.onUnlisten=kr.bind(null,e.syncEngine),n}function Qr(t,e,n={}){const s=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,r){const i=new Kr({next:n=>{e.enqueueAndForget(()=>gr(t,o)),n.fromCache&&"server"===s.source?r.reject(new E(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new wr(n,i,{includeMetadataChanges:!0,wo:!0});return pr(t,o)}(await Xr(t),t.asyncQueue,e,n,s)),s.promise}class Yr{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Jr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Jr&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Zr=new Map;
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
 */function ti(t,e,n){if(!n)throw new E(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ei(t,e,n,s){if(!0===e&&!0===s)throw new E(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ni(t){if(et.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function si(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function ri(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=si(t);throw new E(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class ii{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ei("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class oi{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ii({}),this._settingsFrozen=!1,t instanceof Jr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jr(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ii(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new _;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new C(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zr.get(t);e&&(f("ComponentProvider","Removing Datastore"),Zr.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class ai{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ai(this.firestore,t,this._key)}}class ci{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ci(this.firestore,t,this._query)}}class hi extends ci{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ai(this.firestore,null,new et(t))}withConverter(t){return new hi(this.firestore,t,this._path)}}function ui(t,e,...n){if(t=Object(o["f"])(t),ti("collection","path",e),t instanceof oi){const s=q.fromString(e,...n);return ni(s),new hi(t,null,s)}{if(!(t instanceof ai||t instanceof hi))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(q.fromString(e,...n));return ni(s),new hi(t.firestore,null,s)}}
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
class li{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Fs(this,"async_queue_retry"),this.Ra=()=>{const t=Us();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Us();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Us();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new T;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Qn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const s=ar.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(s),s}Pa(){this.Ta&&y()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class di extends oi{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new li,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gi(this),this._firestoreClient.terminate()}}function fi(t=Object(s["e"])()){return Object(s["b"])(t,"firestore").getImmediate()}function pi(t){return t._firestoreClient||gi(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gi(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Yr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $r(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
class mi{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class yi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new yi($.fromBase64String(t))}catch(t){throw new E(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new yi($.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class vi{constructor(t){this._methodName=t}}
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
 */class wi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}
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
 */const bi=/^__.*__$/;function Ei(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Ti{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=s,void 0===r&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$a({path:n,Oa:!1});return s.Ma(t),s}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$a({path:n,Oa:!1});return s.ka(),s}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return Di(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Ei(this.xa)&&bi.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class Ii{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Vs(t)}ja(t,e,n,s=!1){return new Ti({xa:t,methodName:e,Ka:n,path:K.emptyPath(),Oa:!1,qa:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function _i(t){const e=t._freezeSettings(),n=Vs(t._databaseId);return new Ii(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ai(t,e,n,s=!1){return Si(n,t.ja(s?4:3,e))}function Si(t,e){if(ki(t=Object(o["f"])(t)))return Ri("Unsupported field value:",e,t),Ci(t,e);if(t instanceof vi)return function(t,e){if(!Ei(e.xa))throw e.Ua(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ua(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=Si(r,e.Ba(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["f"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ie(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:on(e.k,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:on(e.k,n)}}if(t instanceof wi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof yi)return{bytesValue:an(e.k,t._byteString)};if(t instanceof ai){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Ua(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:hn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua("Unsupported field value: "+si(t))}(t,e)}function Ci(t,e){const n={};return F(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):V(t,(t,s)=>{const r=Si(s,e.Fa(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function ki(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof wi||t instanceof yi||t instanceof ai||t instanceof vi)}function Ri(t,e,n){if(!ki(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=si(n);throw"an object"===s?e.Ua(t+" a custom object"):e.Ua(t+" "+s)}}const Ni=new RegExp("[~\\*/\\[\\]]");function Oi(t,e,n){if(e.search(Ni)>=0)throw Di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mi(...e.split("."))._internalPath}catch(s){throw Di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Di(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+s),o&&(c+=" in document "+r),c+=")"),new E(b.INVALID_ARGUMENT,a+t+c)}
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
class xi{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ai(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Li(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pi("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Li extends xi{data(){return super.data()}}function Pi(t,e){return"string"==typeof e?Oi(t,e):e instanceof mi?e._internalPath:e._delegate._internalPath}
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
 */class Mi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ui extends xi{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Pi("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Vi extends Ui{data(t={}){return super.data(t)}}class Fi{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Mi(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Vi(this._firestore,this._userDataWriter,n.key,n,new Mi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Vi(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Mi(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const s=new Vi(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Mi(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:ji(e.type),doc:s,oldIndex:r,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ji(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
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
function qi(t){if($t(t)&&0===t.explicitOrderBy.length)throw new E(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bi{}function Ki(t,...e){for(const n of e)t=n._apply(t);return t}class $i extends Bi{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=_i(t.firestore),n=function(t,e,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new E(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on FieldPath.documentId().`);if("in"===i||"not-in"===i){zi(o,i);const e=[];for(const n of o)e.push(Hi(s,t,n));a={arrayValue:{values:e}}}else a=Hi(s,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||zi(o,i),a=Ai(n,e,o,"in"===i||"not-in"===i);const c=_t.create(r,i,a);return function(t,e){if(e.V()){const n=Ht(t);if(null!==n&&!n.isEqual(e.field))throw new E(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const s=Gt(t);null!==s&&Wi(t,e.field,s)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new ci(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new jt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Gi(t,e,n){const s=e,r=Pi("where",t);return new $i(r,s,n)}function Hi(t,e,n){if("string"==typeof(n=Object(o["f"])(n))){if(""===n)throw new E(b.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!zt(e)&&-1!==n.indexOf("/"))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(q.fromString(n));if(!et.isDocumentKey(s))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ht(t,new et(s))}if(n instanceof ai)return ht(t,n._key);throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${si(n)}.`)}function zi(t,e){if(!Array.isArray(t)||0===t.length)throw new E(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Wi(t,e,n){if(!n.isEqual(e))throw new E(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class Xi{convertValue(t,e="none"){switch(nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return V(t.fields,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertGeoPoint(t){return new wi(z(t.latitude),z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Q(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=H(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=q.fromString(t);v(Nn(n));const s=new Jr(n.get(1),n.get(3)),r=new et(n.popFirst(5));return s.isEqual(e)||p(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
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
 */class Qi extends Xi{constructor(t){super(),this.firestore=t}convertBytes(t){return new yi(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ai(this.firestore,null,e)}}function Yi(t){t=ri(t,ci);const e=ri(t.firestore,di),n=pi(e),s=new Qi(e);return qi(t._query),Qr(n,t._query).then(n=>new Fi(e,s,t,n))}!function(t,e=!0){!function(t){u=t}(s["a"]),Object(s["c"])(new r["a"]("firestore",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=new di(s,new A(t.getProvider("auth-internal")),new R(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r},"PUBLIC")),Object(s["g"])(c,"3.4.0",t),Object(s["g"])(c,"3.4.0","esm2017")}()}).call(this,n("4362"))},"159b":function(t,e,n){var s=n("da84"),r=n("fdbc"),i=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var h in r)r[h]&&c(s[h]&&s[h].prototype);c(i)},"17c2":function(t,e,n){"use strict";var s=n("b727").forEach,r=n("a640"),i=r("forEach");t.exports=i?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,s="/";e.cwd=function(){return s},e.chdir=function(e){t||(t=n("df7c")),s=t.resolve(e,s)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4af5":function(t,e,n){"use strict";n("d4cf")},"4de4":function(t,e,n){"use strict";var s=n("23e7"),r=n("b727").filter,i=n("1dde"),o=i("filter");s({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"808a":function(t,e,n){},"8c21":function(t,e,n){"use strict";n.r(e);n("b0c0");var s=n("7a23");function r(t,e,n,r,i,o){var a=Object(s["H"])("anime-item-head");return Object(s["z"])(),Object(s["g"])("div",null,[Object(s["k"])(a,{title:i.animeInfo.name,poster:i.animeInfo.poster,type:i.animeInfo.type,rating:i.animeInfo.rating,isEnd:i.animeInfo.isEnd,genres:i.animeInfo.genre,starRatingAvg:i.animeInfo.starRating},null,8,["title","poster","type","rating","isEnd","genres","starRatingAvg"])])}var i=n("5530"),o=n("1da1"),a=(n("96cf"),n("0829")),c=n("589b"),h=n("1fd5"),u=n("22e5");
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
const l="firebasestorage.googleapis.com",d="storageBucket",f=12e4,p=6e5;class g extends h["c"]{constructor(t,e){super(m(t),`Firebase Storage: ${e} (${m(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,g.prototype)}_codeEquals(t){return m(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function m(t){return"storage/"+t}function y(){const t="An unknown error occurred, please check the error payload for server response.";return new g("unknown",t)}function v(t){return new g("object-not-found","Object '"+t+"' does not exist.")}function w(t){return new g("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new g("unauthenticated",t)}function E(){return new g("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function T(t){return new g("unauthorized","User does not have permission to access '"+t+"'.")}function I(){return new g("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _(){return new g("canceled","User canceled the upload/download.")}function A(t){return new g("invalid-url","Invalid URL '"+t+"'.")}function S(t){return new g("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function C(){return new g("no-default-bucket","No default bucket found. Did you set the '"+d+"' property when initializing the app?")}function k(){return new g("no-download-url","The given file does not have any download URLs.")}function R(t){return new g("invalid-argument",t)}function N(){return new g("app-deleted","The Firebase app was deleted.")}function O(t){return new g("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(t){throw new g("internal-error","Internal error: "+t)}
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
 */class x{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=x.makeFromUrl(t,e)}catch(s){return new x(t,"")}if(""===n.path)return n;throw S(t)}static makeFromUrl(t,e){let n=null;const s="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const i="(/(.*))?$",o=new RegExp("^gs://"+s+i,"i"),a={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const h="v[A-Za-z0-9_]+",u=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${u}/${h}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},g=e===l?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${s}/${m}`,"i"),v={bucket:1,path:2},w=[{regex:o,indices:a,postModify:r},{regex:f,indices:p,postModify:c},{regex:y,indices:v,postModify:c}];for(let l=0;l<w.length;l++){const e=w[l],s=e.regex.exec(t);if(s){const t=s[e.indices.bucket];let r=s[e.indices.path];r||(r=""),n=new x(t,r),e.postModify(n);break}}if(null==n)throw A(t);return n}}class L{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function P(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return 2===a}let h=!1;function u(...t){h||(h=!0,e.apply(null,t))}function l(e){r=setTimeout(()=>{r=null,t(f,c())},e)}function d(){i&&clearTimeout(i)}function f(t,...e){if(h)return void d();if(t)return d(),void u.call(null,t,...e);const n=c()||o;if(n)return d(),void u.call(null,t,...e);let r;s<64&&(s*=2),1===a?(a=2,r=0):r=1e3*(s+Math.random()),l(r)}let p=!1;function g(t){p||(p=!0,d(),h||(null!==r?(t||(a=2),clearTimeout(r),l(0)):t||(a=1)))}return l(0),i=setTimeout(()=>{o=!0,g(!0)},n),g}function M(t){t(!1)}
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
 */function U(t){return void 0!==t}function V(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function j(t,e,n,s){if(s<e)throw R(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw R(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function q(t,e,n){let s=e;return null==n&&(s="https://"+e),`${n}://${s}/v0${t}`}function B(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}
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
 */var K;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(K||(K={}));
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
class ${constructor(t,e,n,s,r,i,o,a,c,h,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const e=n.getErrorCode()===K.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===K.ABORT;return void t(!1,new G(!1,null,e))}const i=-1!==this.successCodes_.indexOf(r);t(!0,new G(i,n))})},e=(t,e)=>{const n=this.resolve_,s=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());U(t)?n(t):n()}catch(i){s(i)}else if(null!==r){const t=y();t.serverResponse=r.getErrorText(),this.errorCallback_?s(this.errorCallback_(r,t)):s(t)}else if(e.canceled){const t=this.appDelete_?N():_();s(t)}else{const t=I();s(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=P(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],s=-1!==n.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||s||r}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function H(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function z(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function W(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Q(t,e,n,s,r,i){const o=B(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return W(c,e),H(c,n),z(c,i),X(c,s),new $(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
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
function Y(t){let e;try{e=JSON.parse(t)}catch(n){return null}return V(e)?e:null}
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
 */function J(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function Z(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function tt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function et(t,e){return e}class nt{constructor(t,e,n,s){this.server=t,this.local=e||t,this.writable=!!n,this.xform=s||et}}let st=null;function rt(t){return!F(t)||t.length<2?t:tt(t)}function it(){if(st)return st;const t=[];function e(t,e){return rt(e)}t.push(new nt("bucket")),t.push(new nt("generation")),t.push(new nt("metageneration")),t.push(new nt("name","fullPath",!0));const n=new nt("name");function s(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new nt("size");return r.xform=s,t.push(r),t.push(new nt("timeCreated")),t.push(new nt("updated")),t.push(new nt("md5Hash",null,!0)),t.push(new nt("cacheControl",null,!0)),t.push(new nt("contentDisposition",null,!0)),t.push(new nt("contentEncoding",null,!0)),t.push(new nt("contentLanguage",null,!0)),t.push(new nt("contentType",null,!0)),t.push(new nt("metadata","customMetadata",!0)),st=t,st}function ot(t,e){function n(){const n=t["bucket"],s=t["fullPath"],r=new x(n,s);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function at(t,e,n){const s={type:"file"},r=n.length;for(let i=0;i<r;i++){const t=n[i];s[t.local]=t.xform(s,e[t.server])}return ot(s,t),s}function ct(t,e,n){const s=Y(e);if(null===s)return null;const r=s;return at(t,r,n)}function ht(t,e,n,s){const r=Y(e);if(null===r)return null;if(!F(r["downloadTokens"]))return null;const i=r["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,a=i.split(","),c=a.map(e=>{const r=t["bucket"],i=t["fullPath"],a="/b/"+o(r)+"/o/"+o(i),c=q(a,n,s),h=B({alt:"media",token:e});return c+h});return c[0]}class ut{constructor(t,e,n,s){this.url=t,this.method=e,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function lt(t){if(!t)throw y()}function dt(t,e){function n(n,s){const r=ct(t,s,e);return lt(null!==r),ht(r,s,t.host,t._protocol)}return n}function ft(t){function e(e,n){let s;return s=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?E():b():402===e.getStatus()?w(t.bucket):403===e.getStatus()?T(t.path):n,s.serverResponse=n.serverResponse,s}return e}function pt(t){const e=ft(t);function n(n,s){let r=e(n,s);return 404===n.getStatus()&&(r=v(t.path)),r.serverResponse=s.serverResponse,r}return n}function gt(t,e,n){const s=e.fullServerUrl(),r=q(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ut(r,i,dt(t,n),o);return a.errorHandler=pt(e),a}
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
let mt=null;class yt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=K.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=K.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=K.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,s){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class vt extends yt{initXhr(){this.xhr_.responseType="text"}}function wt(){return mt?mt():new vt}
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
class bt{constructor(t,e){this._service=t,this._location=e instanceof x?e:x.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new bt(t,e)}get root(){const t=new x(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tt(this._location.path)}get storage(){return this._service}get parent(){const t=J(this._location.path);if(null===t)return null;const e=new x(this._location.bucket,t);return new bt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw O(t)}}function Et(t){t._throwIfRoot("getDownloadURL");const e=gt(t.storage,t._location,it());return t.storage.makeRequestWithTokens(e,wt).then(t=>{if(null===t)throw k();return t})}function Tt(t,e){const n=Z(t._location.path,e),s=new x(t._location.bucket,n);return new bt(t.storage,s)}
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
 */function It(t){return/^[A-Za-z]+:\/\//.test(t)}function _t(t,e){return new bt(t,e)}function At(t,e){if(t instanceof kt){const n=t;if(null==n._bucket)throw C();const s=new bt(n,n._bucket);return null!=e?At(s,e):s}return void 0!==e?Tt(t,e):t}function St(t,e){if(e&&It(e)){if(t instanceof kt)return _t(t,e);throw R("To use ref(service, url), the first argument must be a Storage instance.")}return At(t,e)}function Ct(t,e){const n=null===e||void 0===e?void 0:e[d];return null==n?null:x.makeFromBucketSpec(n,t)}class kt{constructor(t,e,n,s,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=f,this._maxUploadRetryTime=p,this._requests=new Set,this._bucket=null!=s?x.makeFromBucketSpec(s,this._host):Ct(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,t):this._bucket=Ct(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new bt(this,t)}_makeRequest(t,e,n,s){if(this._deleted)return new L(N());{const r=Q(t,this._appId,n,s,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,e){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,s).getPromise()}}const Rt="@firebase/storage",Nt="0.9.0",Ot="storage";function Dt(t){return t=Object(h["f"])(t),Et(t)}function xt(t,e){return t=Object(h["f"])(t),St(t,e)}function Lt(t=Object(c["e"])(),e){t=Object(h["f"])(t);const n=Object(c["b"])(t,Ot),s=n.getImmediate({identifier:e});return s}function Pt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new kt(n,s,r,e,c["a"])}function Mt(){Object(c["c"])(new u["a"](Ot,Pt,"PUBLIC").setMultipleInstances(!0)),Object(c["g"])(Rt,Nt,""),Object(c["g"])(Rt,Nt,"esm2017")}Mt();var Ut=function(t){return Object(s["C"])("data-v-a1af3e82"),t=t(),Object(s["A"])(),t},Vt={class:"anime-item-head inner"},Ft=Ut((function(){return Object(s["h"])("h1",{class:"blind"},"뷰플릭스",-1)})),jt={key:0,class:"navigation"},qt=Ut((function(){return Object(s["h"])("button",{class:"overflow-btn",title:"더보기 메뉴"},null,-1)})),Bt={class:"anime-info"},Kt={class:"poster loading-target"},$t=["src","alt"],Gt={class:"col-right"},Ht={class:"division-pipe"},zt={class:"division-pipe"},Wt={class:"division-pipe"},Xt={class:"anime-interact-btn-area"},Qt=Object(s["j"])("보고싶다");function Yt(t,e,n,r,i,o){var a=Object(s["H"])("icon-arrow-prev"),c=Object(s["H"])("icon-base"),h=Object(s["H"])("icon-wanna-see"),u=Object(s["H"])("anime-wanna-see-btn");return Object(s["z"])(),Object(s["g"])("div",Vt,[Ft,i.isMobile?(Object(s["z"])(),Object(s["g"])("div",jt,[Object(s["h"])("button",{class:"back",onClick:e[0]||(e[0]=function(){return o.goBack&&o.goBack.apply(o,arguments)})},[Object(s["k"])(c,{iconName:"뒤로가기"},{default:Object(s["P"])((function(){return[Object(s["k"])(a)]})),_:1})]),qt])):Object(s["f"])("",!0),Object(s["h"])("div",Bt,[Object(s["h"])("div",Kt,[Object(s["h"])("img",{src:n.poster,alt:"".concat(n.title," 포스터")},null,8,$t)]),Object(s["h"])("div",Gt,[Object(s["h"])("div",null,[Object(s["h"])("p",{class:Object(s["q"])(["sub-info","loading-target",{"sub-info--loaded":n.type&&n.rating}])},[Object(s["h"])("span",Ht,Object(s["K"])(n.type),1),Object(s["h"])("span",zt,Object(s["K"])(n.rating),1),Object(s["h"])("span",Wt,Object(s["K"])(n.isEnd?"완결":"방영중"),1)],2),Object(s["h"])("h2",{class:Object(s["q"])(["title","loading-target",{"title--loaded":n.title}])},Object(s["K"])(n.title),3)]),Object(s["h"])("div",null,[Object(s["h"])("ul",{class:Object(s["q"])(["genres","loading-target",{"genres--loaded":n.genres}])},[(Object(s["z"])(!0),Object(s["g"])(s["a"],null,Object(s["F"])(n.genres,(function(t){return Object(s["z"])(),Object(s["g"])("li",{key:t,class:"genre division-pipe"},Object(s["K"])(t),1)})),128))],2),Object(s["h"])("p",{class:Object(s["q"])(["star-rating","loading-target",{"star-rating--loaded":n.starRatingAvg}])}," 별점 "+Object(s["K"])(n.starRatingAvg),3)])])]),Object(s["h"])("div",Xt,[Object(s["k"])(u,{onClick:o.wannaSeeToggle,isEnabled:i.wannaSeeBool},{icon:Object(s["P"])((function(){return[Object(s["k"])(h)]})),label:Object(s["P"])((function(){return[Qt]})),_:1},8,["onClick","isEnabled"])])])}n("a9e3");var Jt=n("4a42"),Zt=n("5f9d");function te(t,e,n,r,i,o){var a=Object(s["H"])("icon-base");return Object(s["z"])(),Object(s["g"])("button",{class:Object(s["q"])(["anime-interact-btn",{"anime-interact-btn--on":n.isEnabled}])},[Object(s["k"])(a,{iconName:"ddd",class:"icon"},{default:Object(s["P"])((function(){return[Object(s["G"])(t.$slots,"icon",{},void 0,!0)]})),_:3}),Object(s["G"])(t.$slots,"label",{},void 0,!0)],2)}var ee={name:"AnimeInteractBtn",components:{IconBase:Jt["a"]},props:{isEnabled:{type:Boolean,default:!1}}},ne=(n("4af5"),n("6b0d")),se=n.n(ne);const re=se()(ee,[["render",te],["__scopeId","data-v-0ce7d316"]]);var ie=re,oe=n("c9ed"),ae={components:{IconBase:Jt["a"],IconArrowPrev:Zt["a"],AnimeWannaSeeBtn:ie,IconWannaSee:oe["a"]},name:"AnimeItemHead",props:{title:{type:String},poster:{type:String},type:{type:String},rating:{type:String},isEnd:{type:Boolean},genres:{type:Array},starRatingAvg:{type:Number}},created:function(){window.addEventListener("resize",this.checkResolution)},unmounted:function(){window.removeEventListener("resize",this.checkResolution)},data:function(){return{wannaSeeBool:!1,starRatingBool:!1,isMobile:window.innerWidth<=768}},methods:{goBack:function(){return this.$router.go(-1)},wannaSeeToggle:function(){this.wannaSeeBool=!this.wannaSeeBool},starRatingToggle:function(){this.starRatingBool=!this.starRatingBool},checkResolution:function(){this.isMobile=window.innerWidth<=768}}};n("abe0");const ce=se()(ae,[["render",Yt],["__scopeId","data-v-a1af3e82"]]);var he=ce,ue={components:{AnimeItemHead:he},name:"anime",mounted:function(){document.title="".concat(this.$route.params.id," 다시보기"),this.animeInit()},data:function(){return{animeInfo:[]}},methods:{getRawData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,s,r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(a["c"])(),s=Object(a["a"])(n,"anime"),r=Object(a["d"])(s,Object(a["e"])("name","==",t.$route.params.id)),e.prev=3,e.next=6,Object(a["b"])(r);case 6:if(i=e.sent,0===i.docs.length){e.next=12;break}return o=i.docs[0].data(),e.abrupt("return",o);case 12:console.error("존재하지 않는 작품입니다");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),console.error("통신문제");case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()},animeInit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,s,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Lt(),e.next=3,t.getRawData();case 3:return s=e.sent,r=xt(n,s.poster),e.prev=5,e.next=8,Dt(r);case 8:o=e.sent,t.animeInfo=Object(i["a"])(Object(i["a"])({},s),{},{poster:o}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](5),console.error("포스터 정보가 존재하지 않습니다");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()}}};n("c9a4");const le=se()(ue,[["render",r],["__scopeId","data-v-54abcfd2"]]);e["default"]=le},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ks})),n.d(e,"b",(function(){return Ns})),n.d(e,"c",(function(){return Rs})),n.d(e,"d",(function(){return Ds})),n.d(e,"e",(function(){return Os})),n.d(e,"f",(function(){return xs})),n.d(e,"g",(function(){return Ls})),n.d(e,"h",(function(){return Ss})),n.d(e,"i",(function(){return Cs}));var s,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=r||self;function c(){}function h(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function w(){this.s=this.s,this.o=this.o}var b=0,E={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=b)){var t=l(this);delete E[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function _(t){t:{var e=Bn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var k,R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return-1!=t.indexOf(e)}function O(t,e){return t<e?-1:t>e?1:0}t:{var D=a.navigator;if(D){var x=D.userAgent;if(x){k=x;break t}}k=""}function L(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function V(t){return V[" "](t),t}function F(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=c;var j,q=N(k,"Opera"),B=N(k,"Trident")||N(k,"MSIE"),K=N(k,"Edge"),$=K||B,G=N(k,"Gecko")&&!(N(k.toLowerCase(),"webkit")&&!N(k,"Edge"))&&!(N(k,"Trident")||N(k,"MSIE"))&&!N(k,"Edge"),H=N(k.toLowerCase(),"webkit")&&!N(k,"Edge");function z(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",X=function(){var t=k;return G?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(X&&(W=X?X[1]:""),B){var Q=z();if(null!=Q&&Q>parseFloat(W)){j=String(Q);break t}}j=W}var Y,J={};function Z(){return F((function(){let t=0;const e=R(String(j)).split("."),n=R("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=O(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||O(0==r[2].length,0==i[2].length)||O(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=z();Y=tt||(parseInt(j,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function rt(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{V(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},v(rt,st);var it={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++at,this.ca=this.fa=!1}function ht(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=T(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ht(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}ut.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dt(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,s,r){if(s&&s.once)return vt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,s,r);return null}return n=At(n),t&&t[ot]?t.N(e,n,u(s)?!!s.capture:!!s,r):mt(t,e,n,!1,s,r)}function mt(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=u(r)?!!r.capture:!!r,a=It(t);if(a||(t[ft]=a=new ut(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=yt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)nt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Et(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function vt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,s,r);return null}return n=At(n),t&&t[ot]?t.O(e,n,u(s)?!!s.capture:!!s,r):mt(t,e,n,!0,s,r)}function wt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)wt(t,e[i],n,s,r);else s=u(s)?!!s.capture:!!s,n=At(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dt(i,n,s,r),-1<n&&(ht(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,s,r)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Et(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=It(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ht(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new rt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&bt(t),t=n.call(s,e)}return t}function It(t){return t=t[ft],t instanceof ut?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function St(){w.call(this),this.i=new ut(this),this.P=this,this.I=null}function Ct(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(s,t),U(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=kt(o,s,!0,e)&&r}if(o=e.g=t,r=kt(o,s,!0,e)&&r,r=kt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=kt(o,s,!1,e)&&r}function kt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}v(St,w),St.prototype[ot]=!0,St.prototype.removeEventListener=function(t,e,n,s){wt(this,t,e,n,s)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ht(n[s]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},St.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Rt=a.JSON.stringify;function Nt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ot{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lt,t=>t.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Dt||Ut(),Vt||(Dt(),Vt=!0),Ft.add(t,e)}function Ut(){var t=a.Promise.resolve(void 0);Dt=function(){t.then(jt)}}var Vt=!1,Ft=new Ot;function jt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vt=!1}function qt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function $t(t){t.g=Kt(()=>{t.g=null,t.i&&(t.i=!1,$t(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(qt,St),s=qt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ct(this,"tick"),this.da&&(Bt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){qt.Z.M.call(this),Bt(this),delete this.g};class Gt extends w{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$t(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){w.call(this),this.h=t,this.g={}}v(Ht,w);var zt=[];function Wt(t,e,n,s){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var r=0;r<n.length;r++){var i=gt(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Xt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Qt(){this.g=!0}function Yt(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(s?" "+s:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Rt(n)}catch(a){return e}}Ht.prototype.M=function(){Ht.Z.M.call(this),Xt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ne={},se=null;function re(){return se=se||new St}function ie(t){st.call(this,ne.Ma,t)}function oe(t){const e=re();Ct(e,new ie(e,t))}function ae(t,e){st.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=re();Ct(e,new ae(e,t))}function he(t,e){st.call(this,ne.Na,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(ie,st),ne.STAT_EVENT="statevent",v(ae,st),ne.Na="timingevent",v(he,st);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){st.call(this,"d")}function we(){st.call(this,"c")}function be(){}function Ee(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ht(this),this.P=Ie,t=$?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}v(ve,st),v(we,st),v(be,fe),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},me=new be;var Ie=45e3,_e={},Ae={};function Se(t,e,n){t.K=1,t.v=Ye(Ge(e)),t.s=n,t.U=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),Oe(t),t.A=Ge(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),fn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Te,t.g=ws(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?P(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Re(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=Ne(t,n),s==Ae){4==e&&(t.o=4,ce(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==_e){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Zt(t.j,t.m,s,null),Me(t,s)}ke(t)&&s!=Ae&&s!=_e&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ls(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Le(t))}function Ne(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ae:(n=Number(e.substring(n,s)),isNaN(n)?_e:(s+=1,s+n>e.length?Ae:(e=e.substr(s,n),t.C=s+n,e)))}function Oe(t){t.Y=Date.now()+t.P,De(t,t.P)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(m(t.eb,t),e)}function xe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||ps(t.l,t)}function Pe(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Xt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fs(n),es(n)}us(n),ce(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=ue(m(n.ab,n),6e3));if(1>=bn(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else ms(n,11)}else if((t.J||n.g==t)&&fs(n),!C(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=h[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"===typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.i;!i.g&&(N(t,"spdy")||N(t,"quic")||N(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Tn(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Qe(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=vs(s,s.H?s.la:null,s.W),o.J){In(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(xe(a),Oe(a)),s.g=o}else hs(s);0<n.l.length&&rs(n)}else"stop"!=h[0]&&"close"!=h[0]||ms(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?ms(n,7):ts(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}oe(4)}catch(h){}}function Ue(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(h(t)||"string"===typeof t){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Ue(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Fe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Fe)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function je(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];qe(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],qe(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Ee.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const l=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),xe(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var s=Xn(this.g);t="";var r=s.length,i=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Le(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,h=this.g;if((c=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var u=c;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Pe(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(Re(this,l,o),$&&this.i&&3==l&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==l&&Pe(this),this.i&&!this.I&&(4==l?ps(this.l,this):(this.i=!1,Oe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Pe(this),Le(this)}}}catch(l){}},s.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(xe(this),Re(this,t,e),this.i&&4!=t&&Oe(this))}},s.cancel=function(){this.I=!0,Pe(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Pe(this),this.o=2,Le(this)):De(this,this.Y-t)},s=Fe.prototype,s.R=function(){je(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return je(this),this.g.concat()},s.get=function(t,e){return qe(this.h,t)?this.h[t]:e},s.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function $e(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $e){this.g=void 0!==e?e:t.g,He(this,t.j),this.s=t.s,ze(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new hn;n.i=e.i,e.g&&(n.g=new Fe(e.g),n.h=e.h),Xe(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,He(this,n[1]||"",!0),this.s=tn(n[2]||""),ze(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Xe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new hn(null,this.g))}function Ge(t){return new $e(t)}function He(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xe(t,e,n){e instanceof hn?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new hn(e,t.g))}function Qe(t,e,n){t.h.set(e,n)}function Ye(t){return Qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof $e?Ge(t):new $e(t,void 0)}function Ze(t,e,n,s){var r=new $e(null,void 0);return t&&He(r,t),e&&ze(r,e),n&&We(r,n),s&&(r.l=s),r}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}$e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,sn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:rn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var sn=/[#\/\?@]/g,rn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function un(t){t.g||(t.g=new Fe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){un(t),e=pn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&je(t)))}function dn(t,e){return un(t),e=pn(t,e),qe(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(un(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}s=hn.prototype,s.add=function(t,e){un(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){un(this),this.g.forEach((function(n,s){I(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){un(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n},s.R=function(t){un(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=A(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},s.set=function(t,e){return un(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function bn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _n(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function An(){}function Sn(){this.g=new An}function Cn(t,e,n){const s=n||"";try{Ve(t,(function(t,n){let r=t;u(t)&&(r=Rt(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function kn(t,e){const n=new Qt;if(a.Image){const s=new Image;s.onload=y(Rn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=y(Rn,n,s,"TestLoadImage: error",!1,e),s.onabort=y(Rn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=y(Rn,n,s,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Rn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function Nn(t){this.l=t.$b||null,this.j=t.ib||!1}function On(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=_n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(Nn,fe),Nn.prototype.g=function(){return new On(this.l,this.j)},Nn.prototype.i=function(t){return function(){return t}}({}),v(On,St);var Dn=0;function xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pn(t)}function Pn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=On.prototype,s.open=function(t,e){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=Dn},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ln(this):Pn(this),3==this.readyState&&xn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Ln(this))},s.Ta=function(t){this.g&&(this.response=t,Ln(this))},s.ha=function(){this.g&&Ln(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(On.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function Un(t){St.call(this),this.headers=new Fe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vn,this.K=this.L=!1}v(Un,St);var Vn="",Fn=/^https?$/i,jn=["POST","PUT"];function qn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$n(t),Hn(t)}function $n(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Kt(t.Fa,0,t);else if(Ct(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var r=String(t.H).match(Be)[1]||null;if(!r&&a.self&&a.self.location){var i=a.self.location.protocol;r=i.substr(0,i.length-1)}s=!Fn.test(r?r.toLowerCase():"")}n=s}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(h){c=""}t.j=c+" ["+t.ba()+"]",$n(t)}}finally{Hn(t)}}}function Hn(t,e){if(t.g){zn(t);const s=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||Ct(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function zn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Qn(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Qn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Qe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Qt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ts(t){if(ns(t),3==t.G){var e=t.V++,n=Ge(t.F);Qe(n,"SID",t.J),Qe(n,"RID",e),Qe(n,"TYPE","terminate"),as(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ye(Ge(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=ws(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Oe(e)}ys(t)}function es(t){t.g&&(ls(t),t.g.cancel(),t.g=null)}function ns(t){es(t),t.u&&(a.clearTimeout(t.u),t.u=null),fs(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function ss(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&rs(t)}function rs(t){wn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function is(t,e){return!(bn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ue(m(t.Ha,t,e),gs(t,t.C)),t.C++,!0))}function os(t,e){var n;n=e?e.m:t.V++;const s=Ge(t.F);Qe(s,"SID",t.J),Qe(s,"RID",n),Qe(s,"AID",t.U),as(t,s),t.o&&t.s&&Yn(s,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cs(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),Se(n,s,e)}function as(t,e){t.j&&Ve({},(function(t,n){Qe(e,n,t)}))}function cs(t,e,n){n=Math.min(t.l.length,n);var s=t.j?m(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{Cn(c,t,"req"+n+"_")}catch(i){s&&s(c)}}if(o){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function hs(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function us(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ue(m(t.Ga,t),gs(t,t.A)),t.A++,!0)}function ls(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function ds(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);Qe(e,"RID","rpc"),Qe(e,"SID",t.J),Qe(e,"CI",t.N?"0":"1"),Qe(e,"AID",t.U),as(t,e),Qe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(Ge(e)),n.s=null,n.U=!0,Ce(n,t)}function fs(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function ps(t,e){var n=null;if(t.g==e){fs(t),ls(t),t.g=null;var s=2}else{if(!En(t.i,e))return;n=e.D,In(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=re(),Ct(s,new he(s,n,e,r)),rs(t)}else hs(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==s&&is(t,e)||2==s&&us(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ms(t,5);break;case 4:ms(t,10);break;case 3:ms(t,6);break;default:ms(t,2)}}function gs(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ms(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=m(t.jb,t);n||(n=new $e("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||He(n,"https"),Ye(n)),kn(n.toString(),s)}else ce(2);t.G=0,t.j&&t.j.va(e),ys(t),ns(t)}function ys(t){t.G=0,t.I=-1,t.j&&(0==_n(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function vs(t,e,n){let s=Je(n);if(""!=s.i)e&&ze(s,e+"."+s.i),We(s,s.m);else{const t=a.location;s=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Qe(s,e,t)})),e=t.D,n=t.sa,e&&n&&Qe(s,e,n),Qe(s,"VER",t.ma),as(t,s),s}function ws(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Un(new Nn({ib:!0})):new Un(t.qa),e.L=t.H,e}function bs(){}function Es(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Ts(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new As(this)}function Is(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function _s(){we.call(this),this.status=1}function As(t){this.g=t}s=Un.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Kn(this,i)}t=n||"";const r=new Fe(this.headers);s&&Ve(s,(function(t,e){r.set(e,t)})),s=_(r.T()),n=a.FormData&&t instanceof a.FormData,!(0<=T(jn,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kn(this,i)}},s.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Hn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hn(this,!0)),Un.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},s.cb=function(){Gn(this)},s.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Zn.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ee(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=P(i),U(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cs(this,r,e),n=Ge(this.F),Qe(n,"RID",t),Qe(n,"CVER",22),this.D&&Qe(n,"X-HTTP-Session-Id",this.D),as(this,n),this.o&&i&&Yn(n,this.o,i),Tn(this.i,r),this.Ra&&Qe(n,"TYPE","init"),this.ja?(Qe(n,"$req",e),Qe(n,"SID","null"),r.$=!0,Se(r,n,null)):Se(r,n,e),this.G=2}}else 3==this.G&&(t?os(this,t):0==this.l.length||wn(this.i)||os(this))},s.Ga=function(){if(this.u=null,ds(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ue(m(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),es(this),ds(this))},s.ab=function(){null!=this.v&&(this.v=null,es(this),us(this),ce(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},s=bs.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Es.prototype.g=function(t,e){return new Ts(t,e)},v(Ts,St),Ts.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vs(t,null,t.W),rs(t)},Ts.prototype.close=function(){ts(this.g)},Ts.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ss(this.g,e)}else this.v?(e={},e.__data__=Rt(t),ss(this.g,e)):ss(this.g,t)},Ts.prototype.M=function(){this.g.j=null,delete this.j,ts(this.g),delete this.g,Ts.Z.M.call(this)},v(Is,ve),v(_s,we),v(As,bs),As.prototype.xa=function(){Ct(this.g,"a")},As.prototype.wa=function(t){Ct(this.g,new Is(t))},As.prototype.va=function(t){Ct(this.g,new _s(t))},As.prototype.ua=function(){Ct(this.g,"b")},Es.prototype.createWebChannel=Es.prototype.g,Ts.prototype.send=Ts.prototype.u,Ts.prototype.open=Ts.prototype.m,Ts.prototype.close=Ts.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",St.prototype.listen=St.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var Ss=i.createWebChannelTransport=function(){return new Es},Cs=i.getStatEventTarget=function(){return re()},ks=i.ErrorCode=le,Rs=i.EventType=de,Ns=i.Event=ne,Os=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ds=i.FetchXmlHttpFactory=Nn,xs=i.WebChannel=ge,Ls=i.XhrIo=Un}).call(this,n("c8ba"))},a640:function(t,e,n){"use strict";var s=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&s((function(){n.call(null,e||function(){throw 1},1)}))}},abe0:function(t,e,n){"use strict";n("ca8b")},b64b:function(t,e,n){var s=n("23e7"),r=n("7b0b"),i=n("df75"),o=n("d039"),a=o((function(){i(1)}));s({target:"Object",stat:!0,forced:a},{keys:function(t){return i(r(t))}})},c9a4:function(t,e,n){"use strict";n("808a")},c9ed:function(t,e,n){"use strict";var s=n("7a23"),r={d:"M12,20,4.57,13.09a5,5,0,0,1,.74-6.83,4.7,4.7,0,0,1,6.6.73L12,7.1,12.09,7a4.7,4.7,0,0,1,6.6-.73,5,5,0,0,1,.74,6.83Z"};function i(t,e){return Object(s["z"])(),Object(s["g"])("path",r)}var o=n("6b0d"),a=n.n(o);const c={},h=a()(c,[["render",i]]);e["a"]=h},ca8b:function(t,e,n){},d4cf:function(t,e,n){},dbb4:function(t,e,n){var s=n("23e7"),r=n("83ab"),i=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");s({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,s=o(t),r=a.f,h=i(s),u={},l=0;while(h.length>l)n=r(s,e=h[l++]),void 0!==n&&c(u,e,n);return u}})},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,s=t.length-1;s>=0;s--){var r=t[s];"."===r?t.splice(s,1):".."===r?(t.splice(s,1),n++):n&&(t.splice(s,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function s(t){"string"!==typeof t&&(t+="");var e,n=0,s=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){n=e+1;break}}else-1===s&&(r=!1,s=e+1);return-1===s?"":t.slice(n,s)}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],s=0;s<t.length;s++)e(t[s],s,t)&&n.push(t[s]);return n}e.resolve=function(){for(var e="",s=!1,i=arguments.length-1;i>=-1&&!s;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,s="/"===o.charAt(0))}return e=n(r(e.split("/"),(function(t){return!!t})),!s).join("/"),(s?"/":"")+e||"."},e.normalize=function(t){var s=e.isAbsolute(t),o="/"===i(t,-1);return t=n(r(t.split("/"),(function(t){return!!t})),!s).join("/"),t||s||(t="."),t&&o&&(t+="/"),(s?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function s(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=s(t.split("/")),i=s(n.split("/")),o=Math.min(r.length,i.length),a=o,c=0;c<o;c++)if(r[c]!==i[c]){a=c;break}var h=[];for(c=a;c<r.length;c++)h.push("..");return h=h.concat(i.slice(a)),h.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,s=-1,r=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!r){s=i;break}}else r=!1;return-1===s?n?"/":".":n&&1===s?"/":t.slice(0,s)},e.basename=function(t,e){var n=s(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,s=-1,r=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===s&&(r=!1,s=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!r){n=o+1;break}}return-1===e||-1===s||0===i||1===i&&e===s-1&&e===n+1?"":t.slice(e,s)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e439:function(t,e,n){var s=n("23e7"),r=n("d039"),i=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=r((function(){o(1)})),h=!a||c;s({target:"Object",stat:!0,forced:h,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})}}]);
//# sourceMappingURL=chunk-d5eb0b2c.96972cb0.js.map