(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0537260f"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ur})),n.d(e,"b",(function(){return Yr})),n.d(e,"c",(function(){return fr})),n.d(e,"d",(function(){return Kr})),n.d(e,"e",(function(){return $r}));var s=n("589b"),i=n("22e5"),r=n("e691"),o=n("1fd5"),a=n("8f6b");const h="@firebase/firestore";
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
 */class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
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
 */const l=new r["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=r["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${u}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=r["a"].ERROR){const n=e.map(m);l.error(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=r["a"].WARN){const n=e.map(m);l.warn(`Firestore (${u}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function y(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class b{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new b;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new b,t.enqueueRetryable(()=>s(this.currentUser))};const r=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new b)}},0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new c(t)}}class C{constructor(t,e,n){this.type="FirstParty",this.user=c.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class N{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
class _{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
 */function R(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */_.I=-1;class L{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=R(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function O(t,e){return t<e?-1:t>e?1:0}function x(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}
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
class M{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new M(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function V(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function U(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function F(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class j extends q{construct(t,e,n){return new j(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new j(e)}static emptyPath(){return new j([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends q{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(e)}static emptyPath(){return new K([])}}
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
class G{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new G(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new G(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(v(!!t),"string"==typeof t){let e=0;const n=$.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?G.fromBase64String(t):G.fromUint8Array(t)}
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
 */function Q(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(t){const e=t.mapValue.fields.__previous_value__;return Q(e)?X(e):e}function Y(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
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
 */class et{constructor(t){this.path=t}static fromPath(t){return new et(j.fromString(t))}static fromName(t){return new et(j.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===j.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return j.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new et(new j(t.slice()))}}
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
 */function nt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q(t)?4:10:y()}function st(t,e){const n=nt(t);if(n!==nt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),s=H(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return z(t.geoPointValue.latitude)===z(e.geoPointValue.latitude)&&z(t.geoPointValue.longitude)===z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return z(t.integerValue)===z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=z(t.doubleValue),s=z(e.doubleValue);return n===s?Z(n)===Z(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return x(t.arrayValue.values||[],e.arrayValue.values||[],st);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(V(n)!==V(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!st(n[i],s[i])))return!1;return!0}(t,e);default:return y()}}function it(t,e){return void 0!==(t.values||[]).find(t=>st(t,e))}function rt(t,e){const n=nt(t),s=nt(e);if(n!==s)return O(n,s);switch(n){case 0:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=z(t.integerValue||t.doubleValue),s=z(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ot(t.timestampValue,e.timestampValue);case 4:return ot(Y(t),Y(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),s=W(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=O(n[i],s[i]);if(0!==t)return t}return O(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=O(z(t.latitude),z(e.latitude));return 0!==n?n:O(z(t.longitude),z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=rt(n[i],s[i]);if(t)return t}return O(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=O(s[o],r[o]);if(0!==t)return t;const e=rt(n[s[o]],i[r[o]]);if(0!==e)return e}return O(s.length,r.length)}(t.mapValue,e.mapValue);default:throw y()}}function ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return O(t,e);const n=H(t),s=H(e),i=O(n.seconds,s.seconds);return 0!==i?i:O(n.nanos,s.nanos)}function at(t){return ht(t)}function ht(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,et.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=ht(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${ht(t.fields[i])}`;return n+"}"}(t.mapValue):y();var e,n}function ct(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ut(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function dt(t){return!!t&&"nullValue"in t}function ft(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gt(t){return!!t&&"mapValue"in t}function pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return U(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=pt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!gt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pt(e)}setAll(t){let e=K.emptyPath(),n={},s=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=pt(t):s.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());gt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return st(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];gt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){U(e,(e,n)=>t[e]=n);for(const s of n)delete t[s]}clone(){return new mt(pt(this.value))}}
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
class yt{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new yt(t,0,P.min(),mt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,n,0)}static newNoDocument(t,e){return new yt(t,2,e,mt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new yt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class vt{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.R=null}}function wt(t,e=null,n=[],s=[],i=null,r=null,o=null){return new vt(t,e,n,s,i,r,o)}function Et(t){const e=w(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>St(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),J(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Mt(e.startAt)),e.endAt&&(t+="|ub:",t+=Mt(e.endAt)),e.R=t}return e.R}function Tt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${at(e.value)}`;var e}).join(", ")}]`),J(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Mt(t.startAt)),t.endAt&&(e+=", endAt: "+Mt(t.endAt)),`Target(${e})`}function bt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Vt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!st(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ft(t.startAt,e.startAt)&&Ft(t.endAt,e.endAt)}function It(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class At extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Ct(t,e,n):"array-contains"===e?new _t(t,n):"in"===e?new Rt(t,n):"not-in"===e?new Lt(t,n):"array-contains-any"===e?new Ot(t,n):new At(t,e,n)}static P(t,e,n){return"in"===e?new Nt(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(rt(e,this.value)):null!==e&&nt(this.value)===nt(e)&&this.v(rt(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function St(t){return t.field.canonicalString()+t.op.toString()+at(t.value)}class Ct extends At{constructor(t,e,n){super(t,e,n),this.key=et.fromName(n.referenceValue)}matches(t){const e=et.comparator(t.key,this.key);return this.v(e)}}class Nt extends At{constructor(t,e){super(t,"in",e),this.keys=Dt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends At{constructor(t,e){super(t,"not-in",e),this.keys=Dt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Dt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>et.fromName(t.referenceValue))}class _t extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lt(e)&&it(e.arrayValue,this.value)}}class Rt extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&it(this.value.arrayValue,e)}}class Lt extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(it(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!it(this.value.arrayValue,e)}}class Ot extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>it(this.value.arrayValue,t))}}class xt{constructor(t,e){this.position=t,this.before=e}}function Mt(t){return`${t.before?"b":"a"}:${t.position.map(t=>at(t)).join(",")}`}class Pt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ut(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?et.comparator(et.fromName(o.referenceValue),n.key):rt(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function Ft(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!st(t.position[n],e.position[n]))return!1;return!0}
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
 */class qt{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function jt(t,e,n,s,i,r,o,a){return new qt(t,e,n,s,i,r,o,a)}function Bt(t){return new qt(t)}function Kt(t){return!J(t.limit)&&"F"===t.limitType}function Gt(t){return!J(t.limit)&&"L"===t.limitType}function $t(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ht(t){for(const e of t.filters)if(e.V())return e.field;return null}function zt(t){return null!==t.collectionGroup}function Wt(t){const e=w(t);if(null===e.S){e.S=[];const t=Ht(e),n=$t(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Pt(t)),e.S.push(new Pt(K.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Pt(K.keyField(),t))}}}return e.S}function Qt(t){const e=w(t);if(!e.D)if("F"===e.limitType)e.D=wt(e.path,e.collectionGroup,Wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Wt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Pt(i.field,e))}const n=e.endAt?new xt(e.endAt.position,!e.endAt.before):null,s=e.startAt?new xt(e.startAt.position,!e.startAt.before):null;e.D=wt(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function Xt(t,e,n){return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yt(t,e){return bt(Qt(t),Qt(e))&&t.limitType===e.limitType}function Jt(t){return`${Et(Qt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${Tt(Qt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ut(t.startAt,Wt(t),e))&&(!t.endAt||!Ut(t.endAt,Wt(t),e))}(t,e)}function ee(t){return(e,n)=>{let s=!1;for(const i of Wt(t)){const t=ne(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function ne(t,e,n){const s=t.field.isKeyField()?et.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?rt(s,i):y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return y()}}
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
 */function se(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(e)?"-0":e}}function ie(t){return{integerValue:""+t}}function re(t,e){return tt(e)?ie(e):se(t,e)}
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
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof ue?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof le?de(t,e):t instanceof fe?ge(t,e):function(t,e){const n=ce(t,e),s=me(n)+me(t.N);return ut(n)&&ut(t.N)?ie(s):se(t.k,s)}(t,e)}function he(t,e,n){return t instanceof le?de(t,e):t instanceof fe?ge(t,e):n}function ce(t,e){return t instanceof pe?ut(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ue extends oe{}class le extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=ye(e);for(const s of t.elements)n.some(t=>st(t,s))||n.push(s);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function ge(t,e){let n=ye(e);for(const s of t.elements)n=n.filter(t=>!st(t,s));return{arrayValue:{values:n}}}class pe extends oe{constructor(t,e){super(),this.k=t,this.N=e}}function me(t){return z(t.integerValue||t.doubleValue)}function ye(t){return lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function ve(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof fe&&e instanceof fe?x(t.elements,e.elements,st):t instanceof pe&&e instanceof pe?st(t.N,e.N):t instanceof ue&&e instanceof ue}(t.transform,e.transform)}function we(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ee{}function Te(t,e,n){t instanceof Se?function(t,e,n){const s=t.value.clone(),i=ke(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ce?function(t,e,n){if(!we(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=ke(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ne(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function be(t,e,n){t instanceof Se?function(t,e,n){if(!we(t.precondition,e))return;const s=t.value.clone(),i=De(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Ae(e),s).setHasLocalMutations()}(t,e,n):t instanceof Ce?function(t,e,n){if(!we(t.precondition,e))return;const s=De(t.fieldTransforms,n,e),i=e.data;i.setAll(Ne(t)),i.setAll(s),e.convertToFoundDocument(Ae(e),i).setHasLocalMutations()}(t,e,n):function(t,e){we(t.precondition,e)&&e.convertToNoDocument(P.min())}(t,e)}function Ie(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&x(t,e,(t,e)=>ve(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ae(t){return t.isFoundDocument()?t.version:P.min()}class Se extends Ee{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Ce extends Ee{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Ne(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ke(t,e,n){const s=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,he(o,a,n[i]))}return s}function De(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,ae(t,r,e))}return s}
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
class _e{constructor(t){this.count=t}}
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
 */var Re,Le;function Oe(t){if(void 0===t)return g("GRPC error has no .code"),E.UNKNOWN;switch(t){case Re.OK:return E.OK;case Re.CANCELLED:return E.CANCELLED;case Re.UNKNOWN:return E.UNKNOWN;case Re.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Re.INTERNAL:return E.INTERNAL;case Re.UNAVAILABLE:return E.UNAVAILABLE;case Re.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Re.NOT_FOUND:return E.NOT_FOUND;case Re.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Re.ABORTED:return E.ABORTED;case Re.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Re.DATA_LOSS:return E.DATA_LOSS;default:return y()}}(Le=Re||(Re={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";
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
class xe{constructor(t,e){this.comparator=t,this.root=e||Pe.EMPTY}insert(t,e){return new xe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(t){return new xe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Me(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Me(this.root,t,this.comparator,!1)}getReverseIterator(){return new Me(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Me(this.root,t,this.comparator,!0)}}class Me{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pe{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Pe.RED,this.left=null!=s?s:Pe.EMPTY,this.right=null!=i?i:Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Pe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Pe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1,Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ve{constructor(t){this.comparator=t,this.data=new xe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ue(this.data.getIterator())}getIteratorFrom(t){return new Ue(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ve))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ve(this.comparator);return e.data=t,e}}class Ue{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Fe=new xe(et.comparator);function qe(){return Fe}const je=new xe(et.comparator);function Be(){return je}new xe(et.comparator);const Ke=new Ve(et.comparator);function Ge(...t){let e=Ke;for(const n of t)e=e.add(n);return e}const $e=new Ve(O);function He(){return $e}
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
 */class ze{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,We.createSynthesizedTargetChangeForCurrentChange(t,e)),new ze(P.min(),n,He(),qe(),Ge())}}class We{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new We(G.EMPTY_BYTE_STRING,e,Ge(),Ge(),Ge())}}
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
 */class Qe{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.F=s}}class Xe{constructor(t,e){this.targetId=t,this.O=e}}class Ye{constructor(t,e,n=G.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Je{constructor(){this.M=0,this.L=en(),this.B=G.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Ge(),e=Ge(),n=Ge();return this.L.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:y()}}),new We(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=en()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Ze{constructor(t){this.et=t,this.nt=new Map,this.st=qe(),this.it=tn(),this.rt=new Ve(O)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,s=this.wt(e);if(s){const t=s.target;if(It(t))if(0===n){const n=new et(t.path);this.ct(e,n,yt.newNoDocument(n,P.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,s)=>{const i=this.wt(s);if(i){if(n.current&&It(i.target)){const e=new et(i.target.path);null!==this.st.get(e)||this.yt(s,e)||this.ct(s,e,yt.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}});let n=Ge();this.it.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))});const s=new ze(t,e,this.rt,this.st,n);return this.st=qe(),this.it=tn(),this.rt=new Ve(O),s}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Je,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Ve(O),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Je),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function tn(){return new xe(et.comparator)}function en(){return new xe(et.comparator)}
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
 */const nn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),sn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class rn{constructor(t,e){this.databaseId=t,this.C=e}}function on(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function an(t,e){return t.C?e.toBase64():e.toUint8Array()}function hn(t){return v(!!t),P.fromTimestamp(function(t){const e=H(t);return new M(e.seconds,e.nanos)}(t))}function cn(t,e){return function(t){return new j(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function un(t){const e=j.fromString(t);return v(_n(e)),e}function ln(t,e){const n=un(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new et(pn(n))}function dn(t,e){return cn(t.databaseId,e)}function fn(t){const e=un(t);return 4===e.length?j.emptyPath():pn(e)}function gn(t){return new j(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mn(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),G.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),G.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?E.UNKNOWN:Oe(t.code);return new T(e,t.message||"")}(o);n=new Ye(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ln(t,s.document.name),r=hn(s.document.updateTime),o=new mt({mapValue:{fields:s.document.fields}}),a=yt.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new Qe(h,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ln(t,s.document),r=s.readTime?hn(s.readTime):P.min(),o=yt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Qe([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ln(t,s.document),r=s.removedTargetIds||[];n=new Qe([],r,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new _e(s),r=t.targetId;n=new Xe(r,i)}}return n}function yn(t,e){return{documents:[dn(t,e.path)]}}function vn(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=dn(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dn(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ft(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NAN"}};if(dt(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ft(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NAN"}};if(dt(t.value))return{unaryFilter:{field:Cn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(t.field),op:Sn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Cn(t.field),direction:An(t.dir)}}(t))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||J(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=bn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=bn(e.endAt)),n}function wn(t){let e=fn(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){v(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Tn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Pt(Nn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,J(e)?null:e}(n.limit));let h=null;n.startAt&&(h=In(n.startAt));let c=null;return n.endAt&&(c=In(n.endAt)),jt(e,i,o,r,a,"F",h,c)}function En(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Tn(t){return t?void 0!==t.unaryFilter?[Dn(t)]:void 0!==t.fieldFilter?[kn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Tn(t)).reduce((t,e)=>t.concat(e)):y():[]}function bn(t){return{before:t.before,values:t.position}}function In(t){const e=!!t.before,n=t.values||[];return new xt(n,e)}function An(t){return nn[t]}function Sn(t){return sn[t]}function Cn(t){return{fieldPath:t.canonicalString()}}function Nn(t){return K.fromServerFormat(t.fieldPath)}function kn(t){return At.create(Nn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Dn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Nn(t.unaryFilter.field);return At.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Nn(t.unaryFilter.field);return At.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Nn(t.unaryFilter.field);return At.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Nn(t.unaryFilter.field);return At.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function _n(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function Rn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=On(e)),e=Ln(t.get(n),e);return On(e)}function Ln(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function On(t){return t+""}class xn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}xn.store="owner",xn.key="owner";class Mn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Mn.store="mutationQueues",Mn.keyPath="userId";class Pn{constructor(t,e,n,s,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=s,this.mutations=i}}Pn.store="mutations",Pn.keyPath="batchId",Pn.userMutationsIndex="userMutationsIndex",Pn.userMutationsKeyPath=["userId","batchId"];class Vn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Rn(e)]}static key(t,e,n){return[t,Rn(e),n]}}Vn.store="documentMutations",Vn.PLACEHOLDER=new Vn;class Un{constructor(t,e,n,s,i,r){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=s,this.readTime=i,this.parentPath=r}}Un.store="remoteDocuments",Un.readTimeIndex="readTimeIndex",Un.readTimeIndexPath="readTime",Un.collectionReadTimeIndex="collectionReadTimeIndex",Un.collectionReadTimeIndexPath=["parentPath","readTime"];class Fn{constructor(t){this.byteSize=t}}Fn.store="remoteDocumentGlobal",Fn.key="remoteDocumentGlobalKey";class qn{constructor(t,e,n,s,i,r,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=s,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=r,this.query=o}}qn.store="targets",qn.keyPath="targetId",qn.queryTargetsIndexName="queryTargetsIndex",qn.queryTargetsKeyPath=["canonicalId","targetId"];class jn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}jn.store="targetDocuments",jn.keyPath=["targetId","path"],jn.documentTargetsIndex="documentTargetsIndex",jn.documentTargetsKeyPath=["path","targetId"];class Bn{constructor(t,e,n,s){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=s}}Bn.key="targetGlobalKey",Bn.store="targetGlobal";class Kn{constructor(t,e){this.collectionId=t,this.parent=e}}Kn.store="collectionParents",Kn.keyPath=["collectionId","parent"];class Gn{constructor(t,e,n,s){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=s}}Gn.store="clientMetadata",Gn.keyPath="clientId";class $n{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}$n.store="bundles",$n.keyPath="bundleId";class Hn{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Hn.store="namedQueries",Hn.keyPath="name";Mn.store,Pn.store,Vn.store,Un.store,qn.store,xn.store,Bn.store,jn.store,Gn.store,Fn.store,Kn.store,$n.store,Hn.store;const zn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class Qn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Qn((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Qn?e:Qn.resolve(e)}catch(t){return Qn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.reject(e)}static resolve(t){return new Qn((e,n)=>{e(t)})}static reject(t){return new Qn((e,n)=>{n(t)})}static waitFor(t){return new Qn((e,n)=>{let s=0,i=0,r=!1;t.forEach(t=>{++s,t.next(()=>{++i,r&&i===s&&e()},t=>n(t))}),r=!0,i===s&&e()})}static or(t){let e=Qn.resolve(!1);for(const n of t)e=e.next(t=>t?Qn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}}
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
class Yn{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Te(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&be(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&be(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ge())}isEqual(t){return this.batchId===t.batchId&&x(this.mutations,t.mutations,(t,e)=>Ie(t,e))&&x(this.baseMutations,t.baseMutations,(t,e)=>Ie(t,e))}}
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
class Jn{constructor(t,e,n,s,i=P.min(),r=P.min(),o=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Zn{constructor(t){this.Gt=t}}function ts(t){const e=wn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xt(e,e.limit,"L"):e}
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
class es{constructor(){this.zt=new ns}addToCollectionParentIndex(t,e){return this.zt.add(e),Qn.resolve()}getCollectionParents(t,e){return Qn.resolve(this.zt.getEntries(e))}}class ns{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ve(j.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ve(j.comparator)).toArray()}}
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
class is{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new is(0)}static re(){return new is(-1)}}
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
async function rs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==zn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
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
class os{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){U(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return F(this.inner)}}
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
 */class as{constructor(){this.changes=new os(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:P.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:yt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Qn.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class hs{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const s of e)s.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):zt(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new et(e)).next(t=>{let e=Be();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const s=e.collectionGroup;let i=Be();return this.Jt.getCollectionParents(t,s).next(r=>Qn.forEach(r,r=>{const o=function(t,e){return new qt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Cn(t,e,n){let s,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Nn(t,i,s).next(t=>{s=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=yt.newInvalidDocument(n),s=s.insert(n,i)),be(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))).next(()=>(s.forEach((t,n)=>{te(e,n)||(s=s.remove(t))}),s))}Nn(t,e,n){let s=Ge();for(const r of e)for(const t of r.mutations)t instanceof Ce&&null===n.get(t.key)&&(s=s.add(t.key));let i=n;return this.Je.getEntries(t,s).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
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
 */class cs{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=Ge(),s=Ge();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cs(t,e.fromCache,n,s)}}
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
 */class us{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(P.min())?this.Mn(t,e):this.On.vn(t,s).next(i=>{const o=this.Ln(e,i);return(Kt(e)||Gt(e))&&this.Bn(e.limitType,o,s,n)?this.Mn(t,e):(d()<=r["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Ve(ee(t));return e.forEach((e,s)=>{te(t,s)&&(n=n.add(s))}),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mn(t,e){return d()<=r["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,P.min())}}
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
 */class ls{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new xe(O),this.Kn=new os(t=>Et(t),bt),this.jn=P.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new hs(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function ds(t,e,n,s){return new ls(t,e,n,s)}async function fs(t,e){const n=w(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.An.getAllMutationBatches(t).next(o=>(r=o,s=n.persistence.getMutationQueue(e),i=new hs(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t))).next(e=>{const n=[],s=[];let o=Ge();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:s}))})});return n.An=s,n.Wn=i,n.Un.Fn(n.Wn),r}function gs(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function ps(t,e){const n=w(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach((e,r)=>{const a=i.get(r);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,r).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,r)));const h=e.resumeToken;if(h.approximateByteSize()>0){const c=a.withResumeToken(h,s).withSequenceNumber(t.currentSequenceNumber);i=i.insert(r,c),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,c,e)&&o.push(n.He.updateTargetData(t,c))}});let a=qe();if(e.documentUpdates.forEach((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(ms(t,r,e.documentUpdates,s,void 0).next(t=>{a=t})),!s.isEqual(P.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e)}return Qn.waitFor(o).next(()=>r.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=i,t))}function ms(t,e,n,s,i){let r=Ge();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=qe();return n.forEach((n,o)=>{const a=t.get(n),h=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual(P.min())?(e.removeEntry(n,h),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,h),r=r.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),r})}function ys(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.He.getTargetData(t,e).next(i=>i?(s=i,Qn.resolve(s)):n.He.allocateTargetId(t).next(i=>(s=new Jn(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next(()=>s))))}).then(t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function vs(t,e,n){const s=w(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,t=>s.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Xn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function ws(t,e,n){const s=w(t);let i=P.min(),r=Ge();return s.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const s=w(t),i=s.Kn.get(n);return void 0!==i?Qn.resolve(s.qn.get(i)):s.He.getTargetData(e,n)}(s,t,Qt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{r=t})}).next(()=>s.Un.getDocumentsMatchingQuery(t,e,n?i:P.min(),n?r:Ge())).next(t=>({documents:t,zn:r})))}
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
class Es{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Qn.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:hn(n.createTime)}),Qn.resolve()}getNamedQuery(t,e){return Qn.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:ts(t.bundledQuery),readTime:hn(t.readTime)}}(e)),Qn.resolve()}}
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
 */class Ts{constructor(){this.ts=new Ve(bs.es),this.ns=new Ve(bs.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new bs(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new bs(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new et(new j([])),n=new bs(e,t),s=new bs(e,t+1),i=[];return this.ns.forEachInRange([n,s],t=>{this.os(t),i.push(t.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new et(new j([])),n=new bs(e,t),s=new bs(e,t+1);let i=Ge();return this.ns.forEachInRange([n,s],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new bs(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class bs{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return et.comparator(t.key,e.key)||O(t.fs,e.fs)}static ss(t,e){return O(t.fs,e.fs)||et.comparator(t.key,e.key)}}
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
 */class Is{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Ve(bs.es)}checkEmpty(t){return Qn.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new Yn(i,e,n,s);this.An.push(r);for(const o of s)this.ws=this.ws.add(new bs(o.key,i)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Qn.resolve(r)}lookupMutationBatch(t,e){return Qn.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),i=s<0?0:s;return Qn.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Qn.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Qn.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new bs(e,0),s=new bs(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,s],t=>{const e=this._s(t.fs);i.push(e)}),Qn.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ve(O);return e.forEach(t=>{const e=new bs(t,0),s=new bs(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],t=>{n=n.add(t.fs)})}),Qn.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;et.isDocumentKey(i)||(i=i.child(""));const r=new bs(new et(i),0);let o=new Ve(O);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)},r),Qn.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Qn.forEach(e.mutations,s=>{const i=new bs(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new bs(e,0),s=this.ws.firstAfterOrEqual(n);return Qn.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,Qn.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
 */class As{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new xe(et.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.clone(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Qn.resolve(n?n.document.clone():yt.newInvalidDocument(e))}getEntries(t,e){let n=qe();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():yt.newInvalidDocument(t))}),Qn.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=qe();const i=new et(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,i)&&(s=s.insert(i.key,i.clone()))}return Qn.resolve(s)}Es(t,e){return Qn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Ss(this)}getSize(t){return Qn.resolve(this.size)}}class Ss extends as{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)}),Qn.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
 */class Cs{constructor(t){this.persistence=t,this.Is=new os(t=>Et(t),bt),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.As=0,this.Rs=new Ts,this.targetCount=0,this.Ps=is.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Qn.resolve()}getLastRemoteSnapshotVersion(t){return Qn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Qn.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Qn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Qn.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new is(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Qn.resolve()}updateTargetData(t,e){return this.ce(e),Qn.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Qn.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Is.forEach((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),Qn.waitFor(i).next(()=>s)}getTargetCount(t){return Qn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Qn.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Qn.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(e=>{i.push(s.markPotentiallyOrphaned(t,e))}),Qn.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Qn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Qn.resolve(n)}containsKey(t,e){return Qn.resolve(this.Rs.containsKey(e))}}
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
 */class Ns{constructor(t,e){this.bs={},this.Be=new _(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Cs(this),this.Jt=new es,this.Je=function(t,e){return new As(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Zn(e),this.Ye=new Es(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Is(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const s=new ks(this.Be.next());return this.referenceDelegate.Vs(),n(s).next(t=>this.referenceDelegate.Ss(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Ds(t,e){return Qn.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class ks extends Wn{constructor(t){super(),this.currentSequenceNumber=t}}class Ds{constructor(t){this.persistence=t,this.Cs=new Ts,this.Ns=null}static ks(t){return new Ds(t)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Qn.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Qn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Qn.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qn.forEach(this.xs,n=>{const s=et.fromPath(n);return this.$s(t,s).next(t=>{t||e.removeEntry(s)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Qn.or([()=>Qn.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
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
 */class _s{constructor(){this.activeTargetIds=He()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rs{constructor(){this.pi=new _s,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new _s,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Ls{Ei(t){}shutdown(){}}
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
 */class Os{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const xs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Ms{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
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
 */class Ps extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,i){const r=this.Ui(t,e);f("RestConnection","Sending: ",r,n);const o={};return this.qi(o,s,i),this.Ki(t,r,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",r,"request:",n),e})}ji(t,e,n,s,i){return this.Bi(t,e,n,s,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=xs[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise((i,r)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),r(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);r(new T(e,t.message))}else r(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new T(E.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const h=JSON.stringify(s);o.send(e,"POST",h,n,15)})}Qi(t,e,n){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),r=Object(a["i"])(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(h.xmlHttpFactory=new a["d"]({})),this.qi(h.initMessageHeaders,e,n),Object(o["p"])()||Object(o["q"])()||Object(o["l"])()||Object(o["n"])()||Object(o["s"])()||Object(o["k"])()||(h.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");f("Connection","Creating WebChannel: "+c,h);const u=i.createWebChannel(c,h);let l=!1,d=!1;const g=new Ms({Vi:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Si:()=>u.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(u,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(u,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),g.Fi())}),m(u,a["f"].EventType.ERROR,t=>{d||(d=!0,p("Connection","WebChannel transport errored:",t),g.Fi(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(u,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Re[t];if(void 0!==e)return Oe(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,g.Fi(new T(e,n)),u.close()}else f("Connection","WebChannel received:",n),g.Oi(n)}}),m(r,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.$i()},0),g}}
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
 */function Vs(){return"undefined"!=typeof document?document:null}
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
 */function Us(t){return new rn(t,!0)}class Fs{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&f("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
 */class qs{constructor(t,e,n,s,i,r,o,a){this.Oe=t,this.nr=n,this.sr=s,this.ir=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Fs(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class js extends qs{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=mn(this.k,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?hn(e.readTime):P.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=gn(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=It(s)?{documents:yn(t,s)}:{query:vn(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=an(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=on(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=En(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=gn(this.k),e.removeTarget=t,this.gr(e)}}
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
class Bs extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.Bi(t,e,n,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.ji(t,e,n,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Ks{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(g(e),this.Lr=!1):f("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
 */class Gs{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Zs(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.Gr.add(4),await Hs(e),e.Jr.set("Unknown"),e.Gr.delete(4),await $s(e)}(this))})}),this.Jr=new Ks(n,s)}}async function $s(t){if(Zs(t))for(const e of t.zr)await e(!0)}async function Hs(t){for(const e of t.zr)await e(!1)}function zs(t,e){const n=w(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Js(n)?Ys(n):oi(n).lr()&&Qs(n,e))}function Ws(t,e){const n=w(t),s=oi(n);n.Wr.delete(e),s.lr()&&Xs(n,e),0===n.Wr.size&&(s.lr()?s._r():Zs(n)&&n.Jr.set("Unknown"))}function Qs(t,e){t.Yr.X(e.targetId),oi(t).br(e)}function Xs(t,e){t.Yr.X(e),oi(t).vr(e)}function Ys(t){t.Yr=new Ze({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),oi(t).start(),t.Jr.Br()}function Js(t){return Zs(t)&&!oi(t).hr()&&t.Wr.size>0}function Zs(t){return 0===w(t).Gr.size}function ti(t){t.Yr=void 0}async function ei(t){t.Wr.forEach((e,n)=>{Qs(t,e)})}async function ni(t,e){ti(t),Js(t)?(t.Jr.Kr(e),Ys(t)):t.Jr.set("Unknown")}async function si(t,e,n){if(t.Jr.set("Online"),e instanceof Ye&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ii(t,n)}else if(e instanceof Qe?t.Yr.ot(e):e instanceof Xe?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(P.min()))try{const e=await gs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(s);i&&t.Wr.set(s,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),Xs(t,e);const s=new Jn(n.target,e,1,n.sequenceNumber);Qs(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await ii(t,e)}}async function ii(t,e,n){if(!Xn(e))throw e;t.Gr.add(1),await Hs(t),t.Jr.set("Offline"),n||(n=()=>gs(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await $s(t)})}async function ri(t,e){const n=w(t);e?(n.Gr.delete(2),await $s(n)):e||(n.Gr.add(2),await Hs(n),n.Jr.set("Unknown"))}function oi(t){return t.Xr||(t.Xr=function(t,e,n){const s=w(t);return s.Fr(),new js(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)
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
 */}(t.datastore,t.asyncQueue,{Di:ei.bind(null,t),Ni:ni.bind(null,t),Pr:si.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Js(t)?Ys(t):t.Jr.set("Unknown")):(await t.Xr.stop(),ti(t))})),t.Xr}
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
class ai{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new ai(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hi(t,e){if(g("AsyncQueue",`${e}: ${t}`),Xn(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class ci{constructor(t){this.comparator=t?(e,n)=>t(e,n)||et.comparator(e.key,n.key):(t,e)=>et.comparator(t.key,e.key),this.keyedMap=Be(),this.sortedSet=new xe(this.comparator)}static emptySet(t){return new ci(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ci))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ci;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class ui{constructor(){this.eo=new xe(et.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):y():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class li{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new li(t,e,ci.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class di{constructor(){this.so=void 0,this.listeners=[]}}class fi{constructor(){this.queries=new os(t=>Jt(t),Yt),this.onlineState="Unknown",this.io=new Set}}async function gi(t,e){const n=w(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new di),i)try{r.so=await n.onListen(s)}catch(t){const n=hi(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&vi(n)}async function pi(t,e){const n=w(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function mi(t,e){const n=w(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(i)&&(s=!0);e.so=i}}s&&vi(n)}function yi(t,e,n){const s=w(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function vi(t){t.io.forEach(t=>{t.next()})}class wi{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new li(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=li.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
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
class Ei{constructor(t){this.key=t}}class Ti{constructor(t){this.key=t}}class bi{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=Ge(),this.mutatedKeys=Ge(),this.Ao=ee(t),this.Ro=new ci(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new ui,s=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Kt(this.query)&&s.size===this.query.limit?s.last():null,h=Gt(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{const c=s.get(t),u=te(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||h&&this.Ao(u,h)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||h)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))}),Kt(this.query)||Gt(this.query))for(;r.size>this.query.limit;){const t=Kt(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new li(this.query,t.Ro,s,i,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new ui,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Ge(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Ti(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new Ei(n))}),e}ko(t){this.To=t.zn,this.Io=Ge();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return li.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Ii{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ai{constructor(t){this.key=t,this.$o=!1}}class Si{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Fo={},this.Oo=new os(t=>Jt(t),Yt),this.Mo=new Map,this.Lo=new Set,this.Bo=new xe(et.comparator),this.Uo=new Map,this.qo=new Ts,this.Ko={},this.jo=new Map,this.Qo=is.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Ci(t,e){const n=qi(t);let s,i;const r=n.Oo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await ys(n.localStore,Qt(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Ni(n,e,s,"current"===r),n.isPrimaryClient&&zs(n.remoteStore,t)}return i}async function Ni(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let i=e.view.bo(n);i.Bn&&(i=await ws(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return xi(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const i=await ws(t.localStore,e,!0),r=new bi(e,i.zn),o=r.bo(i.documents),a=We.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),h=r.applyChanges(o,t.isPrimaryClient,a);xi(t,n,h.Co);const c=new Ii(e,n,r);return t.Oo.set(e,c),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),h.snapshot}async function ki(t,e){const n=w(t),s=n.Oo.get(e),i=n.Mo.get(s.targetId);if(i.length>1)return n.Mo.set(s.targetId,i.filter(t=>!Yt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ws(n.remoteStore,s.targetId),Li(n,s.targetId)}).catch(rs)):(Li(n,s.targetId),await vs(n.localStore,s.targetId,!0))}async function Di(t,e){const n=w(t);try{const t=await ps(n.localStore,e);e.targetChanges.forEach((t,e)=>{const s=n.Uo.get(e);s&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?v(s.$o):t.removedDocuments.size>0&&(v(s.$o),s.$o=!1))}),await Vi(n,t,e)}catch(t){await rs(t)}}function _i(t,e,n){const s=w(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Oo.forEach((n,s)=>{const i=s.view.ro(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.ro(e)&&(s=!0)}),s&&vi(n)}(s.eventManager,e),t.length&&s.Fo.Pr(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ri(t,e,n){const s=w(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let t=new xe(et.comparator);t=t.insert(r,yt.newNoDocument(r,P.min()));const n=Ge().add(r),i=new ze(P.min(),new Map,new Ve(O),t,n);await Di(s,i),s.Bo=s.Bo.remove(r),s.Uo.delete(e),Pi(s)}else await vs(s.localStore,e,!1).then(()=>Li(s,e,n)).catch(rs)}function Li(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Mo.get(e))t.Oo.delete(s),n&&t.Fo.zo(s,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Oi(t,e)})}function Oi(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Ws(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Pi(t))}function xi(t,e,n){for(const s of n)s instanceof Ei?(t.qo.addReference(s.key,e),Mi(t,s)):s instanceof Ti?(f("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||Oi(t,s.key)):y()}function Mi(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(f("SyncEngine","New document in limbo: "+n),t.Lo.add(s),Pi(t))}function Pi(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new et(j.fromString(e)),s=t.Qo.next();t.Uo.set(s,new Ai(n)),t.Bo=t.Bo.insert(n,s),zs(t.remoteStore,new Jn(Qt(Bt(n.path)),s,2,_.I))}}async function Vi(t,e,n){const s=w(t),i=[],r=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach((t,a)=>{o.push(s.Go(a,e,n).then(t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=cs.$n(a.targetId,t);r.push(e)}}))}),await Promise.all(o),s.Fo.Pr(i),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Qn.forEach(e,e=>Qn.forEach(e.kn,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>Qn.forEach(e.xn,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(t){if(!Xn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.qn.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(t,i)}}}(s.localStore,r))}async function Ui(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await fs(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new T(E.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Vi(n,t.Gn)}}function Fi(t,e){const n=w(t),s=n.Uo.get(e);if(s&&s.$o)return Ge().add(s.key);{let t=Ge();const s=n.Mo.get(e);if(!s)return t;for(const e of s){const s=n.Oo.get(e);t=t.unionWith(s.view.Po)}return t}}function qi(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Di.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fi.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ri.bind(null,e),e.Fo.Pr=mi.bind(null,e.eventManager),e.Fo.zo=yi.bind(null,e.eventManager),e}class ji{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Us(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return ds(this.persistence,new us,t.initialUser,this.k)}Yo(t){return new Ns(Ds.ks,this.k)}Jo(t){return new Rs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>_i(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ui.bind(null,this.syncEngine),await ri(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fi}createDatastore(t){const e=Us(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Ps(s));var s;return function(t,e,n,s){return new Bs(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>_i(this.syncEngine,t,0),r=Os.bt()?new Os:new Ls,new Gs(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Si(t,e,n,s,i,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Hs(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
class Ki{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
class Gi{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=c.UNAUTHENTICATED,this.clientId=L.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=hi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function $i(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await fs(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Hi(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zi(t);f("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(t=>async function(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const s=Zs(n);n.Gr.add(3),await Hs(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await $s(n)}(e.remoteStore,t)),t.onlineComponents=e}async function zi(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await $i(t,new ji)),t.offlineComponents}async function Wi(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Hi(t,new Bi)),t.onlineComponents}async function Qi(t){const e=await Wi(t),n=e.eventManager;return n.onListen=Ci.bind(null,e.syncEngine),n.onUnlisten=ki.bind(null,e.syncEngine),n}function Xi(t,e,n={}){const s=new b;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,i){const r=new Ki({next:n=>{e.enqueueAndForget(()=>pi(t,o)),n.fromCache&&"server"===s.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new wi(n,r,{includeMetadataChanges:!0,wo:!0});return gi(t,o)}(await Qi(t),t.asyncQueue,e,n,s)),s.promise}class Yi{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ji{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ji&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function tr(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function er(t,e,n,s){if(!0===e&&!0===s)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nr(t){if(et.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sr(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sr(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class rr{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,er("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class or{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rr({}),this._settingsFrozen=!1,t instanceof Ji?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new N(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zi.get(t);e&&(f("ComponentProvider","Removing Datastore"),Zi.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class ar{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ar(this.firestore,t,this._key)}}class hr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hr(this.firestore,t,this._query)}}class cr extends hr{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ar(this.firestore,null,new et(t))}withConverter(t){return new cr(this.firestore,t,this._path)}}function ur(t,e,...n){if(t=Object(o["i"])(t),tr("collection","path",e),t instanceof or){const s=j.fromString(e,...n);return nr(s),new cr(t,null,s)}{if(!(t instanceof ar||t instanceof cr))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(j.fromString(e,...n));return nr(s),new cr(t.firestore,null,s)}}
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
class lr{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Fs(this,"async_queue_retry"),this.Ra=()=>{const t=Vs();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Vs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Vs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new b;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Xn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const s=ai.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(s),s}Pa(){this.Ta&&y()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class dr extends or{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new lr,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pr(this),this._firestoreClient.terminate()}}function fr(t=Object(s["e"])()){return Object(s["b"])(t,"firestore").getImmediate()}function gr(t){return t._firestoreClient||pr(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pr(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Yi(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gi(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
class mr{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class yr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new yr(G.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new yr(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class vr{constructor(t){this._methodName=t}}
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
 */class wr{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}}
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
 */const Er=/^__.*__$/;function Tr(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class br{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new br(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$a({path:n,Oa:!1});return s.Ma(t),s}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$a({path:n,Oa:!1});return s.ka(),s}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return Lr(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Tr(this.xa)&&Er.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class Ir{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Us(t)}ja(t,e,n,s=!1){return new br({xa:t,methodName:e,Ka:n,path:K.emptyPath(),Oa:!1,qa:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Ar(t){const e=t._freezeSettings(),n=Us(t._databaseId);return new Ir(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sr(t,e,n,s=!1){return Cr(n,t.ja(s?4:3,e))}function Cr(t,e){if(kr(t=Object(o["i"])(t)))return Dr("Unsupported field value:",e,t),Nr(t,e);if(t instanceof vr)return function(t,e){if(!Tr(e.xa))throw e.Ua(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ua(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Cr(i,e.Ba(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return re(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:on(e.k,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:on(e.k,n)}}if(t instanceof wr)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof yr)return{bytesValue:an(e.k,t._byteString)};if(t instanceof ar){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Ua(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:cn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua("Unsupported field value: "+sr(t))}(t,e)}function Nr(t,e){const n={};return F(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):U(t,(t,s)=>{const i=Cr(s,e.Fa(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function kr(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof wr||t instanceof yr||t instanceof ar||t instanceof vr)}function Dr(t,e,n){if(!kr(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=sr(n);throw"an object"===s?e.Ua(t+" a custom object"):e.Ua(t+" "+s)}}const _r=new RegExp("[~\\*/\\[\\]]");function Rr(t,e,n){if(e.search(_r)>=0)throw Lr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mr(...e.split("."))._internalPath}catch(s){throw Lr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lr(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=" in field "+s),o&&(h+=" in document "+i),h+=")"),new T(E.INVALID_ARGUMENT,a+t+h)}
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
class Or{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ar(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new xr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mr("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class xr extends Or{data(){return super.data()}}function Mr(t,e){return"string"==typeof e?Rr(t,e):e instanceof mr?e._internalPath:e._delegate._internalPath}
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
 */class Pr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vr extends Or{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Mr("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ur extends Vr{data(t={}){return super.data(t)}}class Fr{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Pr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ur(this._firestore,this._userDataWriter,n.key,n,new Pr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ur(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Pr(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const s=new Ur(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Pr(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:qr(e.type),doc:s,oldIndex:i,newIndex:r}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qr(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
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
function jr(t){if(Gt(t)&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Br{}function Kr(t,...e){for(const n of e)t=n._apply(t);return t}class Gr extends Br{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=Ar(t.firestore),n=function(t,e,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);if("in"===r||"not-in"===r){zr(o,r);const e=[];for(const n of o)e.push(Hr(s,t,n));a={arrayValue:{values:e}}}else a=Hr(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||zr(o,r),a=Sr(n,e,o,"in"===r||"not-in"===r);const h=At.create(i,r,a);return function(t,e){if(e.V()){const n=Ht(t);if(null!==n&&!n.isEqual(e.field))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const s=$t(t);null!==s&&Wr(t,e.field,s)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,h),h}(t._query,"where",e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new hr(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function $r(t,e,n){const s=e,i=Mr("where",t);return new Gr(i,s,n)}function Hr(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!zt(e)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(j.fromString(n));if(!et.isDocumentKey(s))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ct(t,new et(s))}if(n instanceof ar)return ct(t,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${sr(n)}.`)}function zr(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Wr(t,e,n){if(!n.isEqual(e))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class Qr{convertValue(t,e="none"){switch(nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return U(t.fields,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertGeoPoint(t){return new wr(z(t.latitude),z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=X(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=H(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=j.fromString(t);v(_n(n));const s=new Ji(n.get(1),n.get(3)),i=new et(n.popFirst(5));return s.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */class Xr extends Qr{constructor(t){super(),this.firestore=t}convertBytes(t){return new yr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ar(this.firestore,null,e)}}function Yr(t){t=ir(t,hr);const e=ir(t.firestore,dr),n=gr(e),s=new Xr(e);return jr(t._query),Xi(n,t._query).then(n=>new Fr(e,s,t,n))}!function(t,e=!0){!function(t){u=t}(s["a"]),Object(s["c"])(new i["a"]("firestore",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new dr(s,new S(t.getProvider("auth-internal")),new D(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(s["g"])(h,"3.4.0",t),Object(s["g"])(h,"3.4.0","esm2017")}()}).call(this,n("4362"))},3746:function(t,e,n){"use strict";n("92d5")},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,s="/";e.cwd=function(){return s},e.chdir=function(e){t||(t=n("df7c")),s=t.resolve(e,s)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"714b":function(t,e,n){"use strict";var s=n("7a23"),i={class:"modal"},r={class:"action-area",role:"dialog"},o={class:"title"},a={class:"description"},h={key:1,class:"cta"};function c(t,e,n,c,u,l){var d=Object(s["H"])("star-interaction"),f=Object(s["H"])("vueflix-btn");return Object(s["z"])(),Object(s["g"])("div",i,[Object(s["h"])("button",{class:"shadow",onClick:e[0]||(e[0]=function(){return n.noFunc&&n.noFunc.apply(n,arguments)}),title:"닫기"}),Object(s["h"])("div",r,[Object(s["h"])("h2",o,[Object(s["G"])(t.$slots,"title",{},void 0,!0)]),Object(s["h"])("p",a,[Object(s["G"])(t.$slots,"description",{},void 0,!0)]),"star"===n.type?(Object(s["z"])(),Object(s["e"])(d,{key:0,rating:n.rating,onStarChanged:l.starChanged},null,8,["rating","onStarChanged"])):Object(s["f"])("",!0),"star"!==n.type?(Object(s["z"])(),Object(s["g"])("div",h,["yes-no"===n.type?(Object(s["z"])(),Object(s["e"])(f,{key:0,onClick:n.noFunc,class:"btn--later",component:"button"},{text:Object(s["Q"])((function(){return[Object(s["G"])(t.$slots,"no-string",{},void 0,!0)]})),_:3},8,["onClick"])):Object(s["f"])("",!0),"yes-no"===n.type||"alert"===n.type?(Object(s["z"])(),Object(s["e"])(f,{key:1,onClick:n.yesFunc,class:"btn--install",component:"button"},{text:Object(s["Q"])((function(){return[Object(s["G"])(t.$slots,"yes-string",{},void 0,!0)]})),_:3},8,["onClick"])):Object(s["f"])("",!0)])):Object(s["f"])("",!0)])])}n("a9e3");var u=n("3291"),l=n("91f20"),d={components:{VueflixBtn:u["a"],StarInteraction:l["a"]},name:"Modal",props:{title:{type:String},type:{type:String},yesFunc:{type:Function},noFunc:{type:Function},rating:{type:Number}},methods:{starChanged:function(t){this.$emit("starChanged",t)}}},f=(n("3746"),n("6b0d")),g=n.n(f);const p=g()(d,[["render",c],["__scopeId","data-v-de8b210a"]]);e["a"]=p},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ks})),n.d(e,"b",(function(){return _s})),n.d(e,"c",(function(){return Ds})),n.d(e,"d",(function(){return Ls})),n.d(e,"e",(function(){return Rs})),n.d(e,"f",(function(){return Os})),n.d(e,"g",(function(){return xs})),n.d(e,"h",(function(){return Cs})),n.d(e,"i",(function(){return Ns}));var s,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},r={},o=o||{},a=i||self;function h(){}function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:p,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function w(){this.s=this.s,this.o=this.o}var E=0,T={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=E)){var t=l(this);delete T[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function A(t){t:{var e=Bn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var k,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var L=a.navigator;if(L){var O=L.userAgent;if(O){k=O;break t}}k=""}function x(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<P.length;e++)n=P[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function U(t){return U[" "](t),t}function F(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=h;var q,j=_(k,"Opera"),B=_(k,"Trident")||_(k,"MSIE"),K=_(k,"Edge"),G=K||B,$=_(k,"Gecko")&&!(_(k.toLowerCase(),"webkit")&&!_(k,"Edge"))&&!(_(k,"Trident")||_(k,"MSIE"))&&!_(k,"Edge"),H=_(k.toLowerCase(),"webkit")&&!_(k,"Edge");function z(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=k;return $?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):j?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),B){var X=z();if(null!=X&&X>parseFloat(W)){q=String(X);break t}}q=W}var Y,J={};function Z(){return F((function(){let t=0;const e=D(String(q)).split("."),n=D("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=R(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||R(0==i[2].length,0==r[2].length)||R(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=z();Y=tt||(parseInt(q,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",h,e),a.removeEventListener("test",h,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{U(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:rt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},v(it,st);var rt={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ht(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ct(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=b(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(ct(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}ut.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dt(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ht(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),gt={};function pt(t,e,n,s,i){if(s&&s.once)return vt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)pt(t,e[r],n,s,i);return null}return n=St(n),t&&t[ot]?t.N(e,n,u(s)?!!s.capture:!!s,i):mt(t,e,n,!1,s,i)}function mt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=It(t);if(a||(t[ft]=a=new ut(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=yt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Tt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=bt;return t}function vt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)vt(t,e[r],n,s,i);return null}return n=St(n),t&&t[ot]?t.O(e,n,u(s)?!!s.capture:!!s,i):mt(t,e,n,!0,s,i)}function wt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)wt(t,e[r],n,s,i);else s=u(s)?!!s.capture:!!s,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dt(r,n,s,i),-1<n&&(ct(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,s,i)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=It(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ct(t)}}}function Tt(t){return t in gt?gt[t]:gt[t]="on"+t}function bt(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Et(t),t=n.call(s,e)}return t}function It(t){return t=t[ft],t instanceof ut?t:null}var At="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[At]||(t[At]=function(e){return t.handleEvent(e)}),t[At])}function Ct(){w.call(this),this.i=new ut(this),this.P=this,this.I=null}function Nt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(s,t),V(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=kt(o,s,!0,e)&&i}if(o=e.g=t,i=kt(o,s,!0,e)&&i,i=kt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=kt(o,s,!1,e)&&i}function kt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&lt(t.i,o),i=!1!==a.call(h,s)&&i}}return i&&!s.defaultPrevented}v(Ct,w),Ct.prototype[ot]=!0,Ct.prototype.removeEventListener=function(t,e,n,s){wt(this,t,e,n,s)},Ct.prototype.M=function(){if(Ct.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ct(n[s]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ct.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Dt=a.JSON.stringify;function _t(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Ot.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Lt,Ot=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xt,t=>t.reset());class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){a.setTimeout(()=>{throw t},0)}function Pt(t,e){Lt||Vt(),Ut||(Lt(),Ut=!0),Ft.add(t,e)}function Vt(){var t=a.Promise.resolve(void 0);Lt=function(){t.then(qt)}}var Ut=!1,Ft=new Rt;function qt(){for(var t;t=_t();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Ot;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function jt(t,e){Ct.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Gt(t){t.g=Kt(()=>{t.g=null,t.i&&(t.i=!1,Gt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(jt,Ct),s=jt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Nt(this,"tick"),this.da&&(Bt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){jt.Z.M.call(this),Bt(this),delete this.g};class $t extends w{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){w.call(this),this.h=t,this.g={}}v(Ht,w);var zt=[];function Wt(t,e,n,s){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var i=0;i<n.length;i++){var r=pt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Qt(t){x(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(s?" "+s:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Dt(n)}catch(a){return e}}Ht.prototype.M=function(){Ht.Z.M.call(this),Qt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},se=null;function ie(){return se=se||new Ct}function re(t){st.call(this,ne.Ma,t)}function oe(t){const e=ie();Nt(e,new re(e,t))}function ae(t,e){st.call(this,ne.STAT_EVENT,t),this.stat=e}function he(t){const e=ie();Nt(e,new ae(e,t))}function ce(t,e){st.call(this,ne.Na,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(re,st),ne.STAT_EVENT="statevent",v(ae,st),ne.Na="timingevent",v(ce,st);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function ge(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){st.call(this,"d")}function we(){st.call(this,"c")}function Ee(){}function Te(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ht(this),this.P=Ie,t=G?125:void 0,this.W=new jt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}v(ve,st),v(we,st),v(Ee,fe),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},me=new Ee;var Ie=45e3,Ae={},Se={};function Ce(t,e,n){t.K=1,t.v=Ye($e(e)),t.s=n,t.U=!0,Ne(t,null)}function Ne(t,e){t.F=Date.now(),Re(t),t.A=$e(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),fn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new be,t.g=ws(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $t(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?M(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function De(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=_e(t,n),s==Se){4==e&&(t.o=4,he(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ae){t.o=4,he(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,s,null),Pe(t,s)}ke(t)&&s!=Se&&s!=Ae&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,he(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ls(e),e.L=!0,he(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),xe(t))}function _e(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Se:(n=Number(e.substring(n,s)),isNaN(n)?Ae:(s+=1,s+n>e.length?Se:(e=e.substr(s,n),t.C=s+n,e)))}function Re(t){t.Y=Date.now()+t.P,Le(t,t.P)}function Le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(m(t.eb,t),e)}function Oe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.G||t.I||gs(t.l,t)}function Me(t){Oe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Tn(n.i,t)))if(n.I=t.N,!t.J&&Tn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fs(n),es(n)}us(n),he(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ue(m(n.ab,n),6e3));if(1>=En(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else ms(n,11)}else if((t.J||n.g==t)&&fs(n),!N(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(_(t,"spdy")||_(t,"quic")||_(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(bn(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Xe(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=vs(s,s.H?s.la:null,s.W),o.J){In(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(Oe(a),Re(a)),s.g=o}else cs(s);0<n.l.length&&is(n)}else"stop"!=c[0]&&"close"!=c[0]||ms(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ms(n,7):ts(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}oe(4)}catch(c){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(c(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Ve(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Fe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Fe)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function qe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];je(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],je(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Te.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const l=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||G||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),Oe(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var s=Qn(this.g);t="";var i=s.length,r=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),xe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var h,c=this.g;if((h=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(h)){var u=h;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,he(12),Me(this),xe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.U?(De(this,l,o),G&&this.i&&3==l&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Pe(this,o)),4==l&&Me(this),this.i&&!this.I&&(4==l?gs(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),Me(this),xe(this)}}}catch(l){}},s.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(Oe(this),De(this,t,e),this.i&&4!=t&&Re(this))}},s.cancel=function(){this.I=!0,Me(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),he(17)),Me(this),this.o=2,xe(this)):Le(this,this.Y-t)},s=Fe.prototype,s.R=function(){qe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return qe(this),this.g.concat()},s.get=function(t,e){return je(this.h,t)?this.h[t]:e},s.set=function(t,e){je(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,He(this,t.j),this.s=t.s,ze(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new cn;n.i=e.i,e.g&&(n.g=new Fe(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,He(this,n[1]||"",!0),this.s=tn(n[2]||""),ze(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new cn(null,this.g))}function $e(t){return new Ge(t)}function He(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof cn?(t.h=e,pn(t.h,t.g)):(n||(e=en(e,an)),t.h=new cn(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof Ge?$e(t):new Ge(t,void 0)}function Ze(t,e,n,s){var i=new Ge(null,void 0);return t&&He(i,t),e&&ze(i,e),n&&We(i,n),s&&(i.l=s),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,sn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:rn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,hn)),t.join("")};var sn=/[#\/\?@]/g,rn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,hn=/#/g;function cn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function un(t){t.g||(t.g=new Fe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){un(t),e=gn(t,e),je(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,je(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qe(t)))}function dn(t,e){return un(t),e=gn(t,e),je(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),C(n)),t.h+=n.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pn(t,e){e&&!t.j&&(un(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}s=cn.prototype,s.add=function(t,e){un(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){un(this),this.g.forEach((function(n,s){I(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){un(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},s.R=function(t){un(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(gn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},s.set=function(t,e){return un(this),this.i=null,t=gn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function En(t){return t.h?1:t.g?t.g.size:0}function Tn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function bn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function An(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function Sn(){}function Cn(){this.g=new Sn}function Nn(t,e,n){const s=n||"";try{Ue(t,(function(t,n){let i=t;u(t)&&(i=Dt(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Xt;if(a.Image){const s=new Image;s.onload=y(Dn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=y(Dn,n,s,"TestLoadImage: error",!1,e),s.onabort=y(Dn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=y(Dn,n,s,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Dn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function _n(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(_n,fe),_n.prototype.g=function(){return new Rn(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),v(Rn,Ct);var Ln=0;function On(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function xn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mn(t)}function Mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Rn.prototype,s.open=function(t,e){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=Ln},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;On(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xn(this):Mn(this),3==this.readyState&&On(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,xn(this))},s.Ta=function(t){this.g&&(this.response=t,xn(this))},s.ha=function(){this.g&&xn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Pn=a.JSON.parse;function Vn(t){Ct.call(this),this.headers=new Fe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}v(Vn,Ct);var Un="",Fn=/^https?$/i,qn=["POST","PUT"];function jn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),Hn(t)}function Gn(t){t.D||(t.D=!0,Nt(t,"complete"),Nt(t,"error"))}function $n(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Kt(t.Fa,0,t);else if(Nt(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var i=String(t.H).match(Be)[1]||null;if(!i&&a.self&&a.self.location){var r=a.self.location.protocol;i=r.substr(0,r.length-1)}s=!Fn.test(i?i.toLowerCase():"")}n=s}if(n)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var h=2<Wn(t)?t.g.statusText:""}catch(c){h=""}t.j=h+" ["+t.ba()+"]",Gn(t)}}finally{Hn(t)}}}function Hn(t,e){if(t.g){zn(t);const s=t.g,i=t.C[0]?h:null;t.g=null,t.C=null,e||Nt(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function zn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return x(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Cn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ts(t){if(ns(t),3==t.G){var e=t.V++,n=$e(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),as(t,n),e=new Te(t,t.h,e,void 0),e.K=2,e.v=Ye($e(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=ws(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}ys(t)}function es(t){t.g&&(ls(t),t.g.cancel(),t.g=null)}function ns(t){es(t),t.u&&(a.clearTimeout(t.u),t.u=null),fs(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function ss(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&is(t)}function is(t){wn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function rs(t,e){return!(En(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ue(m(t.Ha,t,e),ps(t,t.C)),t.C++,!0))}function os(t,e){var n;n=e?e.m:t.V++;const s=$e(t.F);Xe(s,"SID",t.J),Xe(s,"RID",n),Xe(s,"AID",t.U),as(t,s),t.o&&t.s&&Yn(s,t.o,t.s),n=new Te(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=hs(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),bn(t.i,n),Ce(n,s,e)}function as(t,e){t.j&&Ue({},(function(t,n){Xe(e,n,t)}))}function hs(t,e,n){n=Math.min(t.l.length,n);var s=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const h=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{Nn(h,t,"req"+n+"_")}catch(r){s&&s(h)}}if(o){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function cs(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function us(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ue(m(t.Ga,t),ps(t,t.A)),t.A++,!0)}function ls(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function ds(t){t.g=new Te(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=$e(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),as(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye($e(e)),n.s=null,n.U=!0,Ne(n,t)}function fs(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function gs(t,e){var n=null;if(t.g==e){fs(t),ls(t),t.g=null;var s=2}else{if(!Tn(t.i,e))return;n=e.D,In(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ie(),Nt(s,new ce(s,n,e,i)),is(t)}else cs(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&rs(t,e)||2==s&&us(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ms(t,5);break;case 4:ms(t,10);break;case 3:ms(t,6);break;default:ms(t,2)}}function ps(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ms(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=m(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||He(n,"https"),Ye(n)),kn(n.toString(),s)}else he(2);t.G=0,t.j&&t.j.va(e),ys(t),ns(t)}function ys(t){t.G=0,t.I=-1,t.j&&(0==An(t.i).length&&0==t.l.length||(t.i.i.length=0,C(t.l),t.l.length=0),t.j.ua())}function vs(t,e,n){let s=Je(n);if(""!=s.i)e&&ze(s,e+"."+s.i),We(s,s.m);else{const t=a.location;s=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&x(t.aa,(function(t,e){Xe(s,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(s,e,n),Xe(s,"VER",t.ma),as(t,s),s}function ws(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new _n({ib:!0})):new Vn(t.qa),e.L=t.H,e}function Es(){}function Ts(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function bs(t,e){Ct.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ss(this)}function Is(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function As(){we.call(this),this.status=1}function Ss(t){this.g=t}s=Vn.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?ge(this.u):ge(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Kn(this,r)}t=n||"";const i=new Fe(this.headers);s&&Ue(s,(function(t,e){i.set(e,t)})),s=A(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=b(qn,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zn(this),0<this.B&&((this.K=jn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Kn(this,r)}},s.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),Hn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hn(this,!0)),Vn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?$n(this):this.cb())},s.cb=function(){$n(this)},s.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Zn.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Te(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=M(r),V(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=hs(this,i,e),n=$e(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),as(this,n),this.o&&r&&Yn(n,this.o,r),bn(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Ce(i,n,null)):Ce(i,n,e),this.G=2}}else 3==this.G&&(t?os(this,t):0==this.l.length||wn(this.i)||os(this))},s.Ga=function(){if(this.u=null,ds(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ue(m(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,he(10),es(this),ds(this))},s.ab=function(){null!=this.v&&(this.v=null,es(this),us(this),he(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),he(2)):(this.h.info("Failed to ping google.com"),he(1))},s=Es.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Ts.prototype.g=function(t,e){return new bs(t,e)},v(bs,Ct),bs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(m(t.hb,t,e))),he(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vs(t,null,t.W),is(t)},bs.prototype.close=function(){ts(this.g)},bs.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ss(this.g,e)}else this.v?(e={},e.__data__=Dt(t),ss(this.g,e)):ss(this.g,t)},bs.prototype.M=function(){this.g.j=null,delete this.j,ts(this.g),delete this.g,bs.Z.M.call(this)},v(Is,ve),v(As,we),v(Ss,Es),Ss.prototype.xa=function(){Nt(this.g,"a")},Ss.prototype.wa=function(t){Nt(this.g,new Is(t))},Ss.prototype.va=function(t){Nt(this.g,new As(t))},Ss.prototype.ua=function(){Nt(this.g,"b")},Ts.prototype.createWebChannel=Ts.prototype.g,bs.prototype.send=bs.prototype.u,bs.prototype.open=bs.prototype.m,bs.prototype.close=bs.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",pe.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Cs=r.createWebChannelTransport=function(){return new Ts},Ns=r.getStatEventTarget=function(){return ie()},ks=r.ErrorCode=le,Ds=r.EventType=de,_s=r.Event=ne,Rs=r.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ls=r.FetchXmlHttpFactory=_n,Os=r.WebChannel=pe,xs=r.XhrIo=Vn}).call(this,n("c8ba"))},"92d5":function(t,e,n){},c000:function(t,e,n){"use strict";var s=n("7a23"),i={d:"M9,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L16.59,12,8.29,3.71A1,1,0,0,1,9.71,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,9,22Z"};function r(t,e){return Object(s["z"])(),Object(s["g"])("path",i)}var o=n("6b0d"),a=n.n(o);const h={},c=a()(h,[["render",r]]);e["a"]=c},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,s=t.length-1;s>=0;s--){var i=t[s];"."===i?t.splice(s,1):".."===i?(t.splice(s,1),n++):n&&(t.splice(s,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function s(t){"string"!==typeof t&&(t+="");var e,n=0,s=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===s&&(i=!1,s=e+1);return-1===s?"":t.slice(n,s)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],s=0;s<t.length;s++)e(t[s],s,t)&&n.push(t[s]);return n}e.resolve=function(){for(var e="",s=!1,r=arguments.length-1;r>=-1&&!s;r--){var o=r>=0?arguments[r]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,s="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!s).join("/"),(s?"/":"")+e||"."},e.normalize=function(t){var s=e.isAbsolute(t),o="/"===r(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!s).join("/"),t||s||(t="."),t&&o&&(t+="/"),(s?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function s(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=s(t.split("/")),r=s(n.split("/")),o=Math.min(i.length,r.length),a=o,h=0;h<o;h++)if(i[h]!==r[h]){a=h;break}var c=[];for(h=a;h<i.length;h++)c.push("..");return c=c.concat(r.slice(a)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,s=-1,i=!0,r=t.length-1;r>=1;--r)if(e=t.charCodeAt(r),47===e){if(!i){s=r;break}}else i=!1;return-1===s?n?"/":".":n&&1===s?"/":t.slice(0,s)},e.basename=function(t,e){var n=s(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,s=-1,i=!0,r=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===s&&(i=!1,s=o+1),46===a?-1===e?e=o:1!==r&&(r=1):-1!==e&&(r=-1);else if(!i){n=o+1;break}}return-1===e||-1===s||0===r||1===r&&e===s-1&&e===n+1?"":t.slice(e,s)};var r="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e71f:function(t,e,n){"use strict";var s=n("0829");n.d(e,"a",(function(){return s["a"]})),n.d(e,"b",(function(){return s["b"]})),n.d(e,"c",(function(){return s["c"]})),n.d(e,"d",(function(){return s["d"]})),n.d(e,"e",(function(){return s["e"]}))},eef1:function(t,e,n){"use strict";var s=n("7a23"),i={class:"b",d:"M19.51,11.14,7.31,3.9a1,1,0,0,0-1.51.86V19.24a1,1,0,0,0,1.51.86l12.2-7.24A1,1,0,0,0,19.51,11.14Z"};function r(t,e){return Object(s["z"])(),Object(s["g"])("path",i)}var o=n("6b0d"),a=n.n(o);const h={},c=a()(h,[["render",r]]);e["a"]=c}}]);
//# sourceMappingURL=chunk-0537260f.1e24345e.js.map