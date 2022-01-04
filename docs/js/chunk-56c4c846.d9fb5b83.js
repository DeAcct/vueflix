(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56c4c846"],{"057f":function(t,e,n){var i=n("c6b6"),r=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return s(t)}catch(e){return o(a)}};t.exports.f=function(t){return a&&"Window"==i(t)?c(t):s(r(t))}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return hs})),n.d(e,"b",(function(){return Ys})),n.d(e,"c",(function(){return fs})),n.d(e,"d",(function(){return Hs})),n.d(e,"e",(function(){return Gs}));var i=n("589b"),r=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
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
 */const l=new s["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=s["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=s["a"].ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=s["a"].WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function v(t,e){t||y()}function b(t,e){return t}
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
 */class O{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new T;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new T,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new T)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new O(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class A{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */function _(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
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
 */N.I=-1;class R{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=_(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}
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
class x{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new x(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new x(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function V(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function F(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class q extends U{construct(t,e,n){return new q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new q(e)}static emptyPath(){return new q([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends U{construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
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
class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new z(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $(t){if(v(!!t),"string"==typeof t){let e=0;const n=G.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:K(t.seconds),nanos:K(t.nanos)}}function K(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?z.fromBase64String(t):z.fromUint8Array(t)}
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
 */function Q(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(t){const e=t.mapValue.fields.__previous_value__;return Q(e)?X(e):e}function Y(t){const e=$(t.mapValue.fields.__local_write_time__.timestampValue);return new x(e.seconds,e.nanos)}
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
 */function nt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q(t)?4:10:y()}function it(t,e){const n=nt(t);if(n!==nt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=$(t.timestampValue),i=$(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return K(t.geoPointValue.latitude)===K(e.geoPointValue.latitude)&&K(t.geoPointValue.longitude)===K(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return K(t.integerValue)===K(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=K(t.doubleValue),i=K(e.doubleValue);return n===i?Z(n)===Z(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(P(n)!==P(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!it(n[r],i[r])))return!1;return!0}(t,e);default:return y()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>it(t,e))}function st(t,e){const n=nt(t),i=nt(e);if(n!==i)return D(n,i);switch(n){case 0:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=K(t.integerValue||t.doubleValue),i=K(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return ot(t.timestampValue,e.timestampValue);case 4:return ot(Y(t),Y(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),i=W(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=D(n[r],i[r]);if(0!==t)return t}return D(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(K(t.latitude),K(e.latitude));return 0!==n?n:D(K(t.longitude),K(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=st(n[r],i[r]);if(t)return t}return D(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=D(i[o],s[o]);if(0!==t)return t;const e=st(n[i[o]],r[s[o]]);if(0!==e)return e}return D(i.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=$(t),i=$(e),r=D(n.seconds,i.seconds);return 0!==r?r:D(n.nanos,i.nanos)}function at(t){return ct(t)}function ct(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=$(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,et.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=ct(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${ct(t.fields[r])}`;return n+"}"}(t.mapValue):y();var e,n}function ut(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ht(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function dt(t){return!!t&&"nullValue"in t}function ft(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gt(t){return!!t&&"mapValue"in t}function pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return V(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=pt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!gt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pt(e)}setAll(t){let e=H.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=pt(t):i.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());gt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return it(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];gt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){V(e,(e,n)=>t[e]=n);for(const i of n)delete t[i]}clone(){return new mt(pt(this.value))}}
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
class yt{constructor(t,e,n,i,r){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(t){return new yt(t,0,M.min(),mt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,n,0)}static newNoDocument(t,e){return new yt(t,2,e,mt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new yt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class vt{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.R=null}}function bt(t,e=null,n=[],i=[],r=null,s=null,o=null){return new vt(t,e,n,i,r,s,o)}function wt(t){const e=b(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>St(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),J(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=xt(e.startAt)),e.endAt&&(t+="|ub:",t+=xt(e.endAt)),e.R=t}return e.R}function Et(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${at(e.value)}`;var e}).join(", ")}]`),J(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+xt(t.startAt)),t.endAt&&(e+=", endAt: "+xt(t.endAt)),`Target(${e})`}function Tt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Pt(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!it(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ft(t.startAt,e.startAt)&&Ft(t.endAt,e.endAt)}function Ot(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class It extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new At(t,e,n):"array-contains"===e?new Nt(t,n):"in"===e?new _t(t,n):"not-in"===e?new Rt(t,n):"array-contains-any"===e?new Dt(t,n):new It(t,e,n)}static P(t,e,n){return"in"===e?new Ct(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(st(e,this.value)):null!==e&&nt(this.value)===nt(e)&&this.v(st(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function St(t){return t.field.canonicalString()+t.op.toString()+at(t.value)}class At extends It{constructor(t,e,n){super(t,e,n),this.key=et.fromName(n.referenceValue)}matches(t){const e=et.comparator(t.key,this.key);return this.v(e)}}class Ct extends It{constructor(t,e){super(t,"in",e),this.keys=jt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends It{constructor(t,e){super(t,"not-in",e),this.keys=jt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function jt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>et.fromName(t.referenceValue))}class Nt extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lt(e)&&rt(e.arrayValue,this.value)}}class _t extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class Rt extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class Dt extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class Lt{constructor(t,e){this.position=t,this.before=e}}function xt(t){return`${t.before?"b":"a"}:${t.position.map(t=>at(t)).join(",")}`}class Mt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vt(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?et.comparator(et.fromName(o.referenceValue),n.key):st(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function Ft(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!it(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ut{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function qt(t,e,n,i,r,s,o,a){return new Ut(t,e,n,i,r,s,o,a)}function Bt(t){return new Ut(t)}function Ht(t){return!J(t.limit)&&"F"===t.limitType}function zt(t){return!J(t.limit)&&"L"===t.limitType}function Gt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $t(t){for(const e of t.filters)if(e.V())return e.field;return null}function Kt(t){return null!==t.collectionGroup}function Wt(t){const e=b(t);if(null===e.S){e.S=[];const t=$t(e),n=Gt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Mt(t)),e.S.push(new Mt(H.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Mt(H.keyField(),t))}}}return e.S}function Qt(t){const e=b(t);if(!e.D)if("F"===e.limitType)e.D=bt(e.path,e.collectionGroup,Wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Wt(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Mt(r.field,e))}const n=e.endAt?new Lt(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Lt(e.startAt.position,!e.startAt.before):null;e.D=bt(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.D}function Xt(t,e,n){return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yt(t,e){return Tt(Qt(t),Qt(e))&&t.limitType===e.limitType}function Jt(t){return`${wt(Qt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${Et(Qt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Vt(t.startAt,Wt(t),e))&&(!t.endAt||!Vt(t.endAt,Wt(t),e))}(t,e)}function ee(t){return(e,n)=>{let i=!1;for(const r of Wt(t)){const t=ne(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function ne(t,e,n){const i=t.field.isKeyField()?et.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?st(i,r):y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
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
 */function ie(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(e)?"-0":e}}function re(t){return{integerValue:""+t}}function se(t,e){return tt(e)?re(e):ie(t,e)}
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
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof he?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof le?de(t,e):t instanceof fe?ge(t,e):function(t,e){const n=ue(t,e),i=me(n)+me(t.N);return ht(n)&&ht(t.N)?re(i):ie(t.k,i)}(t,e)}function ce(t,e,n){return t instanceof le?de(t,e):t instanceof fe?ge(t,e):n}function ue(t,e){return t instanceof pe?ht(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class he extends oe{}class le extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=ye(e);for(const i of t.elements)n.some(t=>it(t,i))||n.push(i);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function ge(t,e){let n=ye(e);for(const i of t.elements)n=n.filter(t=>!it(t,i));return{arrayValue:{values:n}}}class pe extends oe{constructor(t,e){super(),this.k=t,this.N=e}}function me(t){return K(t.integerValue||t.doubleValue)}function ye(t){return lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function ve(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof fe&&e instanceof fe?L(t.elements,e.elements,it):t instanceof pe&&e instanceof pe?it(t.N,e.N):t instanceof he&&e instanceof he}(t.transform,e.transform)}function be(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class we{}function Ee(t,e,n){t instanceof Se?function(t,e,n){const i=t.value.clone(),r=ke(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!be(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ke(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Ce(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Te(t,e,n){t instanceof Se?function(t,e,n){if(!be(t.precondition,e))return;const i=t.value.clone(),r=je(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(Ie(e),i).setHasLocalMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!be(t.precondition,e))return;const i=je(t.fieldTransforms,n,e),r=e.data;r.setAll(Ce(t)),r.setAll(i),e.convertToFoundDocument(Ie(e),r).setHasLocalMutations()}(t,e,n):function(t,e){be(t.precondition,e)&&e.convertToNoDocument(M.min())}(t,e)}function Oe(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>ve(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ie(t){return t.isFoundDocument()?t.version:M.min()}class Se extends we{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Ae extends we{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Ce(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function ke(t,e,n){const i=new Map;v(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,ce(o,a,n[r]))}return i}function je(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,ae(t,s,e))}return i}
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
 */var _e,Re;function De(t){if(void 0===t)return g("GRPC error has no .code"),w.UNKNOWN;switch(t){case _e.OK:return w.OK;case _e.CANCELLED:return w.CANCELLED;case _e.UNKNOWN:return w.UNKNOWN;case _e.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case _e.INTERNAL:return w.INTERNAL;case _e.UNAVAILABLE:return w.UNAVAILABLE;case _e.UNAUTHENTICATED:return w.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case _e.NOT_FOUND:return w.NOT_FOUND;case _e.ALREADY_EXISTS:return w.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return w.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case _e.ABORTED:return w.ABORTED;case _e.OUT_OF_RANGE:return w.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return w.UNIMPLEMENTED;case _e.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(Re=_e||(_e={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";
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
class Le{constructor(t,e){this.comparator=t,this.root=e||Me.EMPTY}insert(t,e){return new Le(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(t){return new Le(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Me.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xe(this.root,t,this.comparator,!1)}getReverseIterator(){return new xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xe(this.root,t,this.comparator,!0)}}class xe{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Me{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Me.RED,this.left=null!=i?i:Me.EMPTY,this.right=null!=r?r:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Me(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Me.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1,Me.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Pe{constructor(t){this.comparator=t,this.data=new Le(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ve(this.data.getIterator())}getIteratorFrom(t){return new Ve(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Pe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pe(this.comparator);return e.data=t,e}}class Ve{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Fe=new Le(et.comparator);function Ue(){return Fe}const qe=new Le(et.comparator);function Be(){return qe}new Le(et.comparator);const He=new Pe(et.comparator);function ze(...t){let e=He;for(const n of t)e=e.add(n);return e}const Ge=new Pe(D);function $e(){return Ge}
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
 */class Ke{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,We.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ke(M.min(),n,$e(),Ue(),ze())}}class We{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new We(z.EMPTY_BYTE_STRING,e,ze(),ze(),ze())}}
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
 */class Qe{constructor(t,e,n,i){this.$=t,this.removedTargetIds=e,this.key=n,this.F=i}}class Xe{constructor(t,e){this.targetId=t,this.O=e}}class Ye{constructor(t,e,n=z.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Je{constructor(){this.M=0,this.L=en(),this.B=z.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=ze(),e=ze(),n=ze();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:y()}}),new We(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=en()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Ze{constructor(t){this.et=t,this.nt=new Map,this.st=Ue(),this.it=tn(),this.rt=new Pe(D)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,i=this.wt(e);if(i){const t=i.target;if(Ot(t))if(0===n){const n=new et(t.path);this.ct(e,n,yt.newNoDocument(n,M.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,i)=>{const r=this.wt(i);if(r){if(n.current&&Ot(r.target)){const e=new et(r.target.path);null!==this.st.get(e)||this.yt(i,e)||this.ct(i,e,yt.newNoDocument(e,t))}n.j&&(e.set(i,n.G()),n.H())}});let n=ze();this.it.forEach((t,e)=>{let i=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)}),i&&(n=n.add(t))});const i=new Ke(t,e,this.rt,this.st,n);return this.st=Ue(),this.it=tn(),this.rt=new Pe(D),i}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const i=this.ht(t);this.yt(t,e)?i.J(e,1):i.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Je,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Pe(D),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Je),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function tn(){return new Le(et.comparator)}function en(){return new Le(et.comparator)}
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
 */const nn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),rn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class sn{constructor(t,e){this.databaseId=t,this.C=e}}function on(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function an(t,e){return t.C?e.toBase64():e.toUint8Array()}function cn(t){return v(!!t),M.fromTimestamp(function(t){const e=$(t);return new x(e.seconds,e.nanos)}(t))}function un(t,e){return function(t){return new q(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function hn(t){const e=q.fromString(t);return v(Nn(e)),e}function ln(t,e){const n=hn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new et(pn(n))}function dn(t,e){return un(t.databaseId,e)}function fn(t){const e=hn(t);return 4===e.length?q.emptyPath():pn(e)}function gn(t){return new q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mn(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),z.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?w.UNKNOWN:De(t.code);return new E(e,t.message||"")}(o);n=new Ye(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=ln(t,i.document.name),s=cn(i.document.updateTime),o=new mt({mapValue:{fields:i.document.fields}}),a=yt.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Qe(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=ln(t,i.document),s=i.readTime?cn(i.readTime):M.min(),o=yt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Qe([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=ln(t,i.document),s=i.removedTargetIds||[];n=new Qe([],s,r,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Ne(i),s=t.targetId;n=new Xe(s,r)}}return n}function yn(t,e){return{documents:[dn(t,e.path)]}}function vn(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=dn(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dn(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ft(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NAN"}};if(dt(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ft(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NAN"}};if(dt(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(t.field),op:Sn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:An(t.field),direction:In(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||J(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Tn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Tn(e.endAt)),n}function bn(t){let e=fn(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){v(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=En(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Mt(Cn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,J(e)?null:e}(n.limit));let c=null;n.startAt&&(c=On(n.startAt));let u=null;return n.endAt&&(u=On(n.endAt)),qt(e,r,o,s,a,"F",c,u)}function wn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function En(t){return t?void 0!==t.unaryFilter?[jn(t)]:void 0!==t.fieldFilter?[kn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>En(t)).reduce((t,e)=>t.concat(e)):y():[]}function Tn(t){return{before:t.before,values:t.position}}function On(t){const e=!!t.before,n=t.values||[];return new Lt(n,e)}function In(t){return nn[t]}function Sn(t){return rn[t]}function An(t){return{fieldPath:t.canonicalString()}}function Cn(t){return H.fromServerFormat(t.fieldPath)}function kn(t){return It.create(Cn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function jn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Cn(t.unaryFilter.field);return It.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Cn(t.unaryFilter.field);return It.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cn(t.unaryFilter.field);return It.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Cn(t.unaryFilter.field);return It.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Nn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function _n(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dn(e)),e=Rn(t.get(n),e);return Dn(e)}function Rn(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Dn(t){return t+""}class Ln{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Ln.store="owner",Ln.key="owner";class xn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}xn.store="mutationQueues",xn.keyPath="userId";class Mn{constructor(t,e,n,i,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=r}}Mn.store="mutations",Mn.keyPath="batchId",Mn.userMutationsIndex="userMutationsIndex",Mn.userMutationsKeyPath=["userId","batchId"];class Pn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,_n(e)]}static key(t,e,n){return[t,_n(e),n]}}Pn.store="documentMutations",Pn.PLACEHOLDER=new Pn;class Vn{constructor(t,e,n,i,r,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=s}}Vn.store="remoteDocuments",Vn.readTimeIndex="readTimeIndex",Vn.readTimeIndexPath="readTime",Vn.collectionReadTimeIndex="collectionReadTimeIndex",Vn.collectionReadTimeIndexPath=["parentPath","readTime"];class Fn{constructor(t){this.byteSize=t}}Fn.store="remoteDocumentGlobal",Fn.key="remoteDocumentGlobalKey";class Un{constructor(t,e,n,i,r,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Un.store="targets",Un.keyPath="targetId",Un.queryTargetsIndexName="queryTargetsIndex",Un.queryTargetsKeyPath=["canonicalId","targetId"];class qn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}qn.store="targetDocuments",qn.keyPath=["targetId","path"],qn.documentTargetsIndex="documentTargetsIndex",qn.documentTargetsKeyPath=["path","targetId"];class Bn{constructor(t,e,n,i){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}Bn.key="targetGlobalKey",Bn.store="targetGlobal";class Hn{constructor(t,e){this.collectionId=t,this.parent=e}}Hn.store="collectionParents",Hn.keyPath=["collectionId","parent"];class zn{constructor(t,e,n,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=i}}zn.store="clientMetadata",zn.keyPath="clientId";class Gn{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Gn.store="bundles",Gn.keyPath="bundleId";class $n{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}$n.store="namedQueries",$n.keyPath="name";xn.store,Mn.store,Pn.store,Vn.store,Un.store,Ln.store,Bn.store,qn.store,zn.store,Fn.store,Hn.store,Gn.store,$n.store;const Kn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class Qn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Qn((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Qn?e:Qn.resolve(e)}catch(t){return Qn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.reject(e)}static resolve(t){return new Qn((e,n)=>{e(t)})}static reject(t){return new Qn((e,n)=>{n(t)})}static waitFor(t){return new Qn((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=Qn.resolve(!1);for(const n of t)e=e.next(t=>t?Qn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}}
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
class Yn{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Ee(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ze())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Oe(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Oe(t,e))}}
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
class Jn{constructor(t,e,n,i,r=M.min(),s=M.min(),o=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Zn{constructor(t){this.Gt=t}}function ti(t){const e=bn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Xt(e,e.limit,"L"):e}
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
class ei{constructor(){this.zt=new ni}addToCollectionParentIndex(t,e){return this.zt.add(e),Qn.resolve()}getCollectionParents(t,e){return Qn.resolve(this.zt.getEntries(e))}}class ni{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Pe(q.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Pe(q.comparator)).toArray()}}
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
 */class ii{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ii(t,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */ii.DEFAULT_COLLECTION_PERCENTILE=10,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ii.DEFAULT=new ii(41943040,ii.DEFAULT_COLLECTION_PERCENTILE,ii.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ii.DISABLED=new ii(-1,0,0);
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
class ri{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new ri(0)}static re(){return new ri(-1)}}
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
async function si(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Kn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
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
class oi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){V(this.inner,(e,n)=>{for(const[i,r]of n)t(i,r)})}isEmpty(){return F(this.inner)}}
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
 */class ai{constructor(){this.changes=new oi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:M.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:yt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Qn.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class ci{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const i of e)i.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):Kt(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new et(e)).next(t=>{let e=Be();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const i=e.collectionGroup;let r=Be();return this.Jt.getCollectionParents(t,i).next(s=>Qn.forEach(s,s=>{const o=function(t,e){return new Ut(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}Cn(t,e,n){let i,r;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(r=e,this.Nn(t,r,i).next(t=>{i=t;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=yt.newInvalidDocument(n),i=i.insert(n,r)),Te(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))).next(()=>(i.forEach((t,n)=>{te(e,n)||(i=i.remove(t))}),i))}Nn(t,e,n){let i=ze();for(const s of e)for(const t of s.mutations)t instanceof Ae&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.Je.getEntries(t,i).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))}),r))}}
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
 */class ui{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=i}static $n(t,e){let n=ze(),i=ze();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ui(t,e.fromCache,n,i)}}
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
 */class hi{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(M.min())?this.Mn(t,e):this.On.vn(t,i).next(r=>{const o=this.Ln(e,r);return(Ht(e)||zt(e))&&this.Bn(e.limitType,o,i,n)?this.Mn(t,e):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Pe(ee(t));return e.forEach((e,i)=>{te(t,i)&&(n=n.add(i))}),n}Bn(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mn(t,e){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,M.min())}}
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
 */class li{constructor(t,e,n,i){this.persistence=t,this.Un=e,this.k=i,this.qn=new Le(D),this.Kn=new oi(t=>wt(t),Tt),this.jn=M.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new ci(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function di(t,e,n,i){return new li(t,e,n,i)}async function fi(t,e){const n=b(t);let i=n.An,r=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,i=n.persistence.getMutationQueue(e),r=new ci(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t))).next(e=>{const n=[],i=[];let o=ze();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:i}))})});return n.An=i,n.Wn=r,n.Un.Fn(n.Wn),s}function gi(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function pi(t,e){const n=b(t),i=e.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const o=[];e.targetChanges.forEach((e,s)=>{const a=r.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,i).withSequenceNumber(t.currentSequenceNumber);r=r.insert(s,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.He.updateTargetData(t,u))}});let a=Ue();if(e.documentUpdates.forEach((i,r)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))}),o.push(mi(t,s,e.documentUpdates,i,void 0).next(t=>{a=t})),!i.isEqual(M.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,i));o.push(e)}return Qn.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=r,t))}function mi(t,e,n,i,r){let s=ze();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Ue();return n.forEach((n,o)=>{const a=t.get(n),c=(null==r?void 0:r.get(n))||i;o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function yi(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let i;return n.He.getTargetData(t,e).next(r=>r?(i=r,Qn.resolve(i)):n.He.allocateTargetId(t).next(r=>(i=new Jn(e,r,0,t.currentSequenceNumber),n.He.addTargetData(t,i).next(()=>i))))}).then(t=>{const i=n.qn.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function vi(t,e,n){const i=b(t),r=i.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,t=>i.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!Xn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qn=i.qn.remove(e),i.Kn.delete(r.target)}function bi(t,e,n){const i=b(t);let r=M.min(),s=ze();return i.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const i=b(t),r=i.Kn.get(n);return void 0!==r?Qn.resolve(i.qn.get(r)):i.He.getTargetData(e,n)}(i,t,Qt(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>i.Un.getDocumentsMatchingQuery(t,e,n?r:M.min(),n?s:ze())).next(t=>({documents:t,zn:s})))}
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
class wi{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Qn.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:cn(n.createTime)}),Qn.resolve()}getNamedQuery(t,e){return Qn.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:ti(t.bundledQuery),readTime:cn(t.readTime)}}(e)),Qn.resolve()}}
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
 */class Ei{constructor(){this.ts=new Pe(Ti.es),this.ns=new Pe(Ti.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Ti(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new Ti(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new et(new q([])),n=new Ti(e,t),i=new Ti(e,t+1),r=[];return this.ns.forEachInRange([n,i],t=>{this.os(t),r.push(t.key)}),r}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new et(new q([])),n=new Ti(e,t),i=new Ti(e,t+1);let r=ze();return this.ns.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new Ti(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ti{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return et.comparator(t.key,e.key)||D(t.fs,e.fs)}static ss(t,e){return D(t.fs,e.fs)||et.comparator(t.key,e.key)}}
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
 */class Oi{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Pe(Ti.es)}checkEmpty(t){return Qn.resolve(0===this.An.length)}addMutationBatch(t,e,n,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Yn(r,e,n,i);this.An.push(s);for(const o of i)this.ws=this.ws.add(new Ti(o.key,r)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Qn.resolve(s)}lookupMutationBatch(t,e){return Qn.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.gs(n),r=i<0?0:i;return Qn.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return Qn.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Qn.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ti(e,0),i=new Ti(e,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,i],t=>{const e=this._s(t.fs);r.push(e)}),Qn.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pe(D);return e.forEach(t=>{const e=new Ti(t,0),i=new Ti(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,i],t=>{n=n.add(t.fs)})}),Qn.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;et.isDocumentKey(r)||(r=r.child(""));const s=new Ti(new et(r),0);let o=new Pe(D);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.fs)),!0)},s),Qn.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Qn.forEach(e.mutations,i=>{const r=new Ti(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new Ti(e,0),i=this.ws.firstAfterOrEqual(n);return Qn.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.An.length,Qn.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
 */class Ii{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Le(et.comparator),this.size=0}addEntry(t,e,n){const i=e.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(e);return this.docs=this.docs.insert(i,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Qn.resolve(n?n.document.clone():yt.newInvalidDocument(e))}getEntries(t,e){let n=Ue();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():yt.newInvalidDocument(t))}),Qn.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=Ue();const r=new et(e.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,r)&&(i=i.insert(r.key,r.clone()))}return Qn.resolve(i)}Es(t,e){return Qn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Si(this)}getSize(t){return Qn.resolve(this.size)}}class Si extends ai{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?e.push(this.De.addEntry(t,i.document,this.getReadTime(n))):this.De.removeEntry(n)}),Qn.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
 */class Ai{constructor(t){this.persistence=t,this.Is=new oi(t=>wt(t),Tt),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.As=0,this.Rs=new Ei,this.targetCount=0,this.Ps=ri.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Qn.resolve()}getLastRemoteSnapshotVersion(t){return Qn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Qn.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Qn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Qn.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new ri(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Qn.resolve()}updateTargetData(t,e){return this.ce(e),Qn.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Qn.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),Qn.waitFor(r).next(()=>i)}getTargetCount(t){return Qn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Qn.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Qn.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),Qn.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Qn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Qn.resolve(n)}containsKey(t,e){return Qn.resolve(this.Rs.containsKey(e))}}
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
 */class Ci{constructor(t,e){this.bs={},this.Be=new N(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Ai(this),this.Jt=new ei,this.Je=function(t,e){return new Ii(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Zn(e),this.Ye=new wi(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Oi(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const i=new ki(this.Be.next());return this.referenceDelegate.Vs(),n(i).next(t=>this.referenceDelegate.Ss(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Ds(t,e){return Qn.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class ki extends Wn{constructor(t){super(),this.currentSequenceNumber=t}}class ji{constructor(t){this.persistence=t,this.Cs=new Ei,this.Ns=null}static ks(t){return new ji(t)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Qn.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Qn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Qn.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qn.forEach(this.xs,n=>{const i=et.fromPath(n);return this.$s(t,i).next(t=>{t||e.removeEntry(i)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Qn.or([()=>Qn.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
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
 */class Ni{constructor(){this.activeTargetIds=$e()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _i{constructor(){this.pi=new Ni,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Ni,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Ri{Ei(t){}shutdown(){}}
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
 */class Di{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Li={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class xi{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
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
 */class Mi extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,i,r){const s=this.Ui(t,e);f("RestConnection","Sending: ",s,n);const o={};return this.qi(o,i,r),this.Ki(t,s,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,i,r){return this.Bi(t,e,n,i,r)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=Li[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,i){return new Promise((r,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),r(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);s(new E(e,t.message))}else s(new E(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["p"])()||Object(o["q"])()||Object(o["l"])()||Object(o["n"])()||Object(o["s"])()||Object(o["k"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");f("Connection","Creating WebChannel: "+u,c);const h=r.createWebChannel(u,c);let l=!1,d=!1;const g=new xi({Vi:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),h.open(),l=!0),f("Connection","WebChannel sending:",t),h.send(t))},Si:()=>h.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(h,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),g.Fi())}),m(h,a["f"].EventType.ERROR,t=>{d||(d=!0,p("Connection","WebChannel transport errored:",t),g.Fi(new E(w.UNAVAILABLE,"The operation could not be completed")))}),m(h,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){f("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=_e[t];if(void 0!==e)return De(e)}(t),n=r.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),d=!0,g.Fi(new E(e,n)),h.close()}else f("Connection","WebChannel received:",n),g.Oi(n)}}),m(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.$i()},0),g}}
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
 */function Pi(){return"undefined"!=typeof document?document:null}
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
 */function Vi(t){return new sn(t,!0)}class Fi{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,e-n);i>0&&f("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
 */class Ui{constructor(t,e,n,i,r,s,o,a){this.Oe=t,this.nr=n,this.sr=i,this.ir=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Fi(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new E(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qi extends Ui{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.k=r}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=mn(this.k,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?cn(e.readTime):M.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=gn(this.k),e.addTarget=function(t,e){let n;const i=e.target;return n=Ot(i)?{documents:yn(t,i)}:{query:vn(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=an(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=on(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=wn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=gn(this.k),e.removeTarget=t,this.gr(e)}}
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
class Bi extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.Bi(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.ji(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Hi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(g(e),this.Lr=!1):f("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
 */class zi{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Zi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Gr.add(4),await $i(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Gi(e)}(this))})}),this.Jr=new Hi(n,i)}}async function Gi(t){if(Zi(t))for(const e of t.zr)await e(!0)}async function $i(t){for(const e of t.zr)await e(!1)}function Ki(t,e){const n=b(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Ji(n)?Yi(n):or(n).lr()&&Qi(n,e))}function Wi(t,e){const n=b(t),i=or(n);n.Wr.delete(e),i.lr()&&Xi(n,e),0===n.Wr.size&&(i.lr()?i._r():Zi(n)&&n.Jr.set("Unknown"))}function Qi(t,e){t.Yr.X(e.targetId),or(t).br(e)}function Xi(t,e){t.Yr.X(e),or(t).vr(e)}function Yi(t){t.Yr=new Ze({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),or(t).start(),t.Jr.Br()}function Ji(t){return Zi(t)&&!or(t).hr()&&t.Wr.size>0}function Zi(t){return 0===b(t).Gr.size}function tr(t){t.Yr=void 0}async function er(t){t.Wr.forEach((e,n)=>{Qi(t,e)})}async function nr(t,e){tr(t),Ji(t)?(t.Jr.Kr(e),Yi(t)):t.Jr.set("Unknown")}async function ir(t,e,n){if(t.Jr.set("Online"),e instanceof Ye&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Wr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Wr.delete(i),t.Yr.removeTarget(i))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rr(t,n)}else if(e instanceof Qe?t.Yr.ot(e):e instanceof Xe?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(M.min()))try{const e=await gi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.Wr.get(i);r&&t.Wr.set(i,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),Xi(t,e);const i=new Jn(n.target,e,1,n.sequenceNumber);Qi(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await rr(t,e)}}async function rr(t,e,n){if(!Xn(e))throw e;t.Gr.add(1),await $i(t),t.Jr.set("Offline"),n||(n=()=>gi(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Gi(t)})}async function sr(t,e){const n=b(t);e?(n.Gr.delete(2),await Gi(n)):e||(n.Gr.add(2),await $i(n),n.Jr.set("Unknown"))}function or(t){return t.Xr||(t.Xr=function(t,e,n){const i=b(t);return i.Fr(),new qi(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)
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
 */}(t.datastore,t.asyncQueue,{Di:er.bind(null,t),Ni:nr.bind(null,t),Pr:ir.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Ji(t)?Yi(t):t.Jr.set("Unknown")):(await t.Xr.stop(),tr(t))})),t.Xr}
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
class ar{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new ar(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cr(t,e){if(g("AsyncQueue",`${e}: ${t}`),Xn(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class ur{constructor(t){this.comparator=t?(e,n)=>t(e,n)||et.comparator(e.key,n.key):(t,e)=>et.comparator(t.key,e.key),this.keyedMap=Be(),this.sortedSet=new Le(this.comparator)}static emptySet(t){return new ur(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ur))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ur;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class hr{constructor(){this.eo=new Le(et.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):y():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class lr{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new lr(t,e,ur.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
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
 */class dr{constructor(){this.so=void 0,this.listeners=[]}}class fr{constructor(){this.queries=new oi(t=>Jt(t),Yt),this.onlineState="Unknown",this.io=new Set}}async function gr(t,e){const n=b(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new dr),r)try{s.so=await n.onListen(i)}catch(t){const n=cr(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&vr(n)}async function pr(t,e){const n=b(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function mr(t,e){const n=b(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(r)&&(i=!0);e.so=r}}i&&vr(n)}function yr(t,e,n){const i=b(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function vr(t){t.io.forEach(t=>{t.next()})}class br{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new lr(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=lr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
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
class wr{constructor(t){this.key=t}}class Er{constructor(t){this.key=t}}class Tr{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=ze(),this.mutatedKeys=ze(),this.Ao=ee(t),this.Ro=new ur(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new hr,i=e?e.Ro:this.Ro;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=Ht(this.query)&&i.size===this.query.limit?i.last():null,c=zt(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((t,e)=>{const u=i.get(t),h=te(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Vo(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ao(h,a)>0||c&&this.Ao(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))}),Ht(this.query)||zt(this.query))for(;s.size>this.query.limit;){const t=Ht(this.query)?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:r}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const r=t.vo.no();r.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==r.length||a?{snapshot:new lr(this.query,t.Ro,i,r,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new hr,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=ze(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Er(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new wr(n))}),e}ko(t){this.To=t.zn,this.Io=ze();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return lr.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Or{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ir{constructor(t){this.key=t,this.$o=!1}}class Sr{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new oi(t=>Jt(t),Yt),this.Mo=new Map,this.Lo=new Set,this.Bo=new Le(et.comparator),this.Uo=new Map,this.qo=new Ei,this.Ko={},this.jo=new Map,this.Qo=ri.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Ar(t,e){const n=Ur(t);let i,r;const s=n.Oo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const t=await yi(n.localStore,Qt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Cr(n,e,i,"current"===s),n.isPrimaryClient&&Ki(n.remoteStore,t)}return r}async function Cr(t,e,n,i){t.Go=(e,n,i)=>async function(t,e,n,i){let r=e.view.bo(n);r.Bn&&(r=await bi(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,r)));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Lr(t,e.targetId,o.Co),o.snapshot}(t,e,n,i);const r=await bi(t.localStore,e,!0),s=new Tr(e,r.zn),o=s.bo(r.documents),a=We.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Lr(t,n,c.Co);const u=new Or(e,n,s);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function kr(t,e){const n=b(t),i=n.Oo.get(e),r=n.Mo.get(i.targetId);if(r.length>1)return n.Mo.set(i.targetId,r.filter(t=>!Yt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await vi(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Wi(n.remoteStore,i.targetId),Rr(n,i.targetId)}).catch(si)):(Rr(n,i.targetId),await vi(n.localStore,i.targetId,!0))}async function jr(t,e){const n=b(t);try{const t=await pi(n.localStore,e);e.targetChanges.forEach((t,e)=>{const i=n.Uo.get(e);i&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.$o=!0:t.modifiedDocuments.size>0?v(i.$o):t.removedDocuments.size>0&&(v(i.$o),i.$o=!1))}),await Pr(n,t,e)}catch(t){await si(t)}}function Nr(t,e,n){const i=b(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Oo.forEach((n,i)=>{const r=i.view.ro(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let i=!1;n.queries.forEach((t,n)=>{for(const r of n.listeners)r.ro(e)&&(i=!0)}),i&&vr(n)}(i.eventManager,e),t.length&&i.Fo.Pr(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _r(t,e,n){const i=b(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Uo.get(e),s=r&&r.key;if(s){let t=new Le(et.comparator);t=t.insert(s,yt.newNoDocument(s,M.min()));const n=ze().add(s),r=new Ke(M.min(),new Map,new Pe(D),t,n);await jr(i,r),i.Bo=i.Bo.remove(s),i.Uo.delete(e),Mr(i)}else await vi(i.localStore,e,!1).then(()=>Rr(i,e,n)).catch(si)}function Rr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Mo.get(e))t.Oo.delete(i),n&&t.Fo.zo(i,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Dr(t,e)})}function Dr(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Wi(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Mr(t))}function Lr(t,e,n){for(const i of n)i instanceof wr?(t.qo.addReference(i.key,e),xr(t,i)):i instanceof Er?(f("SyncEngine","Document no longer in limbo: "+i.key),t.qo.removeReference(i.key,e),t.qo.containsKey(i.key)||Dr(t,i.key)):y()}function xr(t,e){const n=e.key,i=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(i)||(f("SyncEngine","New document in limbo: "+n),t.Lo.add(i),Mr(t))}function Mr(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new et(q.fromString(e)),i=t.Qo.next();t.Uo.set(i,new Ir(n)),t.Bo=t.Bo.insert(n,i),Ki(t.remoteStore,new Jn(Qt(Bt(n.path)),i,2,N.I))}}async function Pr(t,e,n){const i=b(t),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((t,a)=>{o.push(i.Go(a,e,n).then(t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=ui.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),i.Fo.Pr(r),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Qn.forEach(e,e=>Qn.forEach(e.kn,i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i)).next(()=>Qn.forEach(e.xn,i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))}catch(t){if(!Xn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.qn.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(t,r)}}}(i.localStore,s))}async function Vr(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await fi(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new E(w.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Pr(n,t.Gn)}}function Fr(t,e){const n=b(t),i=n.Uo.get(e);if(i&&i.$o)return ze().add(i.key);{let t=ze();const i=n.Mo.get(e);if(!i)return t;for(const e of i){const i=n.Oo.get(e);t=t.unionWith(i.view.Po)}return t}}function Ur(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jr.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fr.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_r.bind(null,e),e.Fo.Pr=mr.bind(null,e.eventManager),e.Fo.zo=yr.bind(null,e.eventManager),e}class qr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Vi(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return di(this.persistence,new hi,t.initialUser,this.k)}Yo(t){return new Ci(ji.ks,this.k)}Jo(t){return new _i}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Br{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vr.bind(null,this.syncEngine),await sr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fr}createDatastore(t){const e=Vi(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Mi(i));var i;return function(t,e,n,i){return new Bi(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Nr(this.syncEngine,t,0),s=Di.bt()?new Di:new Ri,new zi(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Sr(t,e,n,i,r,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);f("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await $i(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
class Hr{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
class zr{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=R.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Gr(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await fi(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $r(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kr(t);f("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>async function(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const i=Zi(n);n.Gr.add(3),await $i(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Gi(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Kr(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Gr(t,new qr)),t.offlineComponents}async function Wr(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await $r(t,new Br)),t.onlineComponents}async function Qr(t){const e=await Wr(t),n=e.eventManager;return n.onListen=Ar.bind(null,e.syncEngine),n.onUnlisten=kr.bind(null,e.syncEngine),n}function Xr(t,e,n={}){const i=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,r){const s=new Hr({next:n=>{e.enqueueAndForget(()=>pr(t,o)),n.fromCache&&"server"===i.source?r.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new br(n,s,{includeMetadataChanges:!0,wo:!0});return gr(t,o)}(await Qr(t),t.asyncQueue,e,n,i)),i.promise}class Yr{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Jr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Jr&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function ts(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function es(t,e,n,i){if(!0===e&&!0===i)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ns(t){if(et.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function is(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=is(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
 */class os{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ss({}),this._settingsFrozen=!1,t instanceof Jr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jr(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ss(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new I;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new C(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zr.get(t);e&&(f("ComponentProvider","Removing Datastore"),Zr.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class as{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new as(this.firestore,t,this._key)}}class cs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new cs(this.firestore,t,this._query)}}class us extends cs{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new as(this.firestore,null,new et(t))}withConverter(t){return new us(this.firestore,t,this._path)}}function hs(t,e,...n){if(t=Object(o["i"])(t),ts("collection","path",e),t instanceof os){const i=q.fromString(e,...n);return ns(i),new us(t,null,i)}{if(!(t instanceof as||t instanceof us))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(q.fromString(e,...n));return ns(i),new us(t.firestore,null,i)}}
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
class ls{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Fi(this,"async_queue_retry"),this.Ra=()=>{const t=Pi();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Pi();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Pi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new T;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Xn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const i=ar.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(i),i}Pa(){this.Ta&&y()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class ds extends os{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ls,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ps(this),this._firestoreClient.terminate()}}function fs(t=Object(i["e"])()){return Object(i["b"])(t,"firestore").getImmediate()}function gs(t){return t._firestoreClient||ps(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ps(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Yr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zr(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
class ys{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ys(z.fromBase64String(t))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ys(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */const ws=/^__.*__$/;function Es(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Ts{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.$a({path:n,Oa:!1});return i.Ma(t),i}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.$a({path:n,Oa:!1});return i.ka(),i}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return Rs(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Es(this.xa)&&ws.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class Os{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Vi(t)}ja(t,e,n,i=!1){return new Ts({xa:t,methodName:e,Ka:n,path:H.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Is(t){const e=t._freezeSettings(),n=Vi(t._databaseId);return new Os(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ss(t,e,n,i=!1){return As(n,t.ja(i?4:3,e))}function As(t,e){if(ks(t=Object(o["i"])(t)))return js("Unsupported field value:",e,t),Cs(t,e);if(t instanceof vs)return function(t,e){if(!Es(e.xa))throw e.Ua(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ua(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=As(r,e.Ba(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return se(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=x.fromDate(t);return{timestampValue:on(e.k,n)}}if(t instanceof x){const n=new x(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:on(e.k,n)}}if(t instanceof bs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ys)return{bytesValue:an(e.k,t._byteString)};if(t instanceof as){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:un(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua("Unsupported field value: "+is(t))}(t,e)}function Cs(t,e){const n={};return F(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):V(t,(t,i)=>{const r=As(i,e.Fa(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function ks(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof x||t instanceof bs||t instanceof ys||t instanceof as||t instanceof vs)}function js(t,e,n){if(!ks(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=is(n);throw"an object"===i?e.Ua(t+" a custom object"):e.Ua(t+" "+i)}}const Ns=new RegExp("[~\\*/\\[\\]]");function _s(t,e,n){if(e.search(Ns)>=0)throw Rs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ms(...e.split("."))._internalPath}catch(i){throw Rs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rs(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+i),o&&(c+=" in document "+r),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}
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
class Ds{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new as(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ls(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ls extends Ds{data(){return super.data()}}function xs(t,e){return"string"==typeof e?_s(t,e):e instanceof ms?e._internalPath:e._delegate._internalPath}
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
 */class Ms{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ps extends Ds{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(xs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Vs extends Ps{data(t={}){return super.data(t)}}class Fs{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ms(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Vs(this._firestore,this._userDataWriter,n.key,n,new Ms(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Vs(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ms(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new Vs(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ms(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Us(e.type),doc:i,oldIndex:r,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Us(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
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
function qs(t){if(zt(t)&&0===t.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bs{}function Hs(t,...e){for(const n of e)t=n._apply(t);return t}class zs extends Bs{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=Is(t.firestore),n=function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Ks(o,s);const e=[];for(const n of o)e.push($s(i,t,n));a={arrayValue:{values:e}}}else a=$s(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ks(o,s),a=Ss(n,e,o,"in"===s||"not-in"===s);const c=It.create(r,s,a);return function(t,e){if(e.V()){const n=$t(t);if(null!==n&&!n.isEqual(e.field))throw new E(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=Gt(t);null!==i&&Ws(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new cs(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ut(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Gs(t,e,n){const i=e,r=xs("where",t);return new zs(r,i,n)}function $s(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new E(w.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kt(e)&&-1!==n.indexOf("/"))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(q.fromString(n));if(!et.isDocumentKey(i))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ut(t,new et(i))}if(n instanceof as)return ut(t,n._key);throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${is(n)}.`)}function Ks(t,e){if(!Array.isArray(t)||0===t.length)throw new E(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ws(t,e,n){if(!n.isEqual(e))throw new E(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class Qs{convertValue(t,e="none"){switch(nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return V(t.fields,(t,i)=>{n[t]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new bs(K(t.latitude),K(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=X(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=$(t);return new x(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=q.fromString(t);v(Nn(n));const i=new Jr(n.get(1),n.get(3)),r=new et(n.popFirst(5));return i.isEqual(e)||g(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
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
 */class Xs extends Qs{constructor(t){super(),this.firestore=t}convertBytes(t){return new ys(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new as(this.firestore,null,e)}}function Ys(t){t=rs(t,cs);const e=rs(t.firestore,ds),n=gs(e),i=new Xs(e);return qs(t._query),Xr(n,t._query).then(n=>new Fs(e,i,t,n))}!function(t,e=!0){!function(t){h=t}(i["a"]),Object(i["c"])(new r["a"]("firestore",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new ds(i,new S(t.getProvider("auth-internal")),new j(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r},"PUBLIC")),Object(i["g"])(c,"3.4.0",t),Object(i["g"])(c,"3.4.0","esm2017")}()}).call(this,n("4362"))},1148:function(t,e,n){"use strict";var i=n("da84"),r=n("5926"),s=n("577e"),o=n("1d80"),a=i.RangeError;t.exports=function(t){var e=s(o(this)),n="",i=r(t);if(i<0||i==1/0)throw a("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"19be":function(t,e,n){},2252:function(t,e,n){"use strict";n("19be")},"2f56":function(t,e,n){"use strict";n("7057")},"3d2b":function(t,e,n){"use strict";n("bfdb")},"3daf":function(t,e,n){"use strict";n("d178")},"428f":function(t,e,n){var i=n("da84");t.exports=i},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4dae":function(t,e,n){var i=n("da84"),r=n("23cb"),s=n("07fa"),o=n("8418"),a=i.Array,c=Math.max;t.exports=function(t,e,n){for(var i=s(t),u=r(e,i),h=r(void 0===n?i:n,i),l=a(c(h-u,0)),d=0;u<h;u++,d++)o(l,d,t[u]);return l.length=d,l}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,s=n("1dde"),o=s("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5655:function(t,e,n){"use strict";n("8ddd")},"5a02":function(t,e,n){"use strict";var i=n("7a23"),r={class:"col-left"},s={key:0,class:"icon"},o={class:"col-right"},a={class:"icon"};function c(t,e,n,c,u,h){var l=Object(i["H"])("icon-base"),d=Object(i["H"])("icon-arrow-next"),f=Object(i["H"])("router-link");return Object(i["z"])(),Object(i["e"])(f,{class:"arrow-link-btn"},{default:Object(i["R"])((function(){return[Object(i["h"])("div",r,[n.icon?(Object(i["z"])(),Object(i["g"])("i",s,[Object(i["k"])(l,null,{default:Object(i["R"])((function(){return[Object(i["G"])(t.$slots,"icon",{},void 0,!0)]})),_:3})])):Object(i["f"])("",!0),Object(i["h"])("span",null,[Object(i["G"])(t.$slots,"text",{},void 0,!0)])]),Object(i["h"])("div",o,[Object(i["h"])("i",a,[Object(i["k"])(l,null,{default:Object(i["R"])((function(){return[Object(i["k"])(d)]})),_:1})])])]})),_:3})}var u=n("4a42"),h=n("c000"),l={name:"ArrowLinkBtn",components:{IconBase:u["a"],IconArrowNext:h["a"]},props:{icon:{type:[Boolean,String]}}},d=(n("ce5a"),n("6b0d")),f=n.n(d);const g=f()(l,[["render",c],["__scopeId","data-v-3da680d2"]]);e["a"]=g},"5eda":function(t,e,n){"use strict";n("9a1f8")},7057:function(t,e,n){},"714b":function(t,e,n){"use strict";var i=n("7a23"),r={class:"modal"},s={class:"action-area",role:"dialog"},o={class:"title"},a={class:"description"},c={key:1,class:"cta"};function u(t,e,n,u,h,l){var d=Object(i["H"])("star-interaction"),f=Object(i["H"])("vueflix-btn");return Object(i["z"])(),Object(i["g"])("div",r,[Object(i["h"])("button",{class:"shadow",onClick:e[0]||(e[0]=function(){return n.noFunc&&n.noFunc.apply(n,arguments)}),title:"닫기"}),Object(i["h"])("div",s,[Object(i["h"])("h2",o,[Object(i["G"])(t.$slots,"title",{},void 0,!0)]),Object(i["h"])("p",a,[Object(i["G"])(t.$slots,"description",{},void 0,!0)]),"star"===n.type?(Object(i["z"])(),Object(i["e"])(d,{key:0,rating:n.rating,onStarChanged:l.starChanged},null,8,["rating","onStarChanged"])):Object(i["f"])("",!0),"star"!==n.type?(Object(i["z"])(),Object(i["g"])("div",c,["yes-no"===n.type?(Object(i["z"])(),Object(i["e"])(f,{key:0,onClick:n.noFunc,class:"btn--later"},{text:Object(i["R"])((function(){return[Object(i["G"])(t.$slots,"no-string",{},void 0,!0)]})),_:3},8,["onClick"])):Object(i["f"])("",!0),"yes-no"===n.type||"alert"===n.type?(Object(i["z"])(),Object(i["e"])(f,{key:1,onClick:n.yesFunc,class:"btn--install"},{text:Object(i["R"])((function(){return[Object(i["G"])(t.$slots,"yes-string",{},void 0,!0)]})),_:3},8,["onClick"])):Object(i["f"])("",!0)])):Object(i["f"])("",!0)])])}n("a9e3");var h=n("3291"),l=(n("99af"),{class:"star-interaction"}),d=["disabled"];function f(t,e,n,r,s,o){var a=Object(i["H"])("star-graph");return Object(i["z"])(),Object(i["g"])("div",l,[Object(i["k"])(a,{onStarChanged:o.starChanged,rating:n.rating},null,8,["onStarChanged","rating"]),Object(i["h"])("button",{class:"rating-reset-btn",onClick:e[0]||(e[0]=function(){return o.ratingReset&&o.ratingReset.apply(o,arguments)}),style:Object(i["r"])("color: ".concat(n.textColor,"; border-bottom-color:").concat(n.textColor,";")),disabled:0===n.rating}," 별점 초기화 ",12,d)])}var g=n("b204"),p={name:"StarInteraction",props:{rating:{type:Number},textColor:{type:String,default:"inherit"}},components:{StarGraph:g["a"]},methods:{starChanged:function(t){this.$emit("starChanged",t)},ratingReset:function(){0!==this.rating&&this.$emit("starChanged",0)}}},m=(n("3daf"),n("6b0d")),y=n.n(m);const v=y()(p,[["render",f],["__scopeId","data-v-2f4f83c0"]]);var b=v,w={components:{VueflixBtn:h["a"],StarInteraction:b},name:"Modal",props:{title:{type:String},type:{type:String},yesFunc:{type:Function},noFunc:{type:Function},rating:{type:Number}},methods:{starChanged:function(t){this.$emit("starChanged",t)}}};n("2252");const E=y()(w,[["render",u],["__scopeId","data-v-94d39dda"]]);e["a"]=E},"746f":function(t,e,n){var i=n("428f"),r=n("1a2d"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||o(e,t,{value:s.f(t)})}},"75b6":function(t,e,n){"use strict";n("a1d7")},"7e2e":function(t,e,n){"use strict";n("b920")},"8c21":function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),r=function(t){return Object(i["C"])("data-v-9d6d5b48"),t=t(),Object(i["A"])(),t},s={class:"anime-useful-widget widget"},o={class:"info"},a={class:"inner"},c=r((function(){return Object(i["h"])("strong",{class:"title"}," 줄거리 ",-1)})),u={class:"inner"},h=r((function(){return Object(i["h"])("strong",{class:"title"}," 제작사 ",-1)})),l=Object(i["j"])("리뷰"),d={class:"episodes-widget widget"},f=Object(i["j"])("이 멋진 애니에 별점을!"),g=Object(i["j"])(" 별을 누르면 그만큼의 별점을 줄 수 있어요 "),p=Object(i["j"])("취소"),m=Object(i["j"])("별점 저장");function y(t,e,n,r,y,v){var b=Object(i["H"])("anime-item-head"),w=Object(i["H"])("icon-review"),E=Object(i["H"])("arrow-link-btn"),T=Object(i["H"])("episodes"),O=Object(i["H"])("modal"),I=Object(i["H"])("action-sheet"),S=Object(i["H"])("router-view");return y.isSub?(Object(i["z"])(),Object(i["e"])(S,{key:1,myRating:y.myRating},null,8,["myRating"])):(Object(i["z"])(),Object(i["g"])("div",{key:0,class:"anime",style:Object(i["r"])("min-height: ".concat(y.deviceHeight,"px"))},[Object(i["k"])(b,{isScroll:y.isScroll,title:y.animeInfo.name,poster:y.animeInfo.poster,type:y.animeInfo.type,rating:y.animeInfo.rating,isEnd:y.animeInfo.isEnd,genres:y.animeInfo.genre,starRatingAvg:y.animeInfo.starRating,onStarModalOpened:v.starModalOpen,isUserRated:0!==y.myRating,onOverflowMenuOpened:v.overflowMenuOpen,myRating:y.myRating,onStarChanged:v.starChanged,class:"widget"},null,8,["isScroll","title","poster","type","rating","isEnd","genres","starRatingAvg","onStarModalOpened","isUserRated","onOverflowMenuOpened","myRating","onStarChanged"]),Object(i["h"])("div",s,[Object(i["h"])("ul",o,[Object(i["h"])("li",a,[c,Object(i["h"])("p",{class:Object(i["q"])(["text","loading-target",{"text--loaded":y.animeInfo.summary}])},Object(i["L"])(y.animeInfo.summary),3)]),Object(i["h"])("li",u,[h,Object(i["h"])("p",{class:Object(i["q"])(["text","loading-target",{"text--loaded":y.animeInfo.summary}])},[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(y.animeInfo.madeBy,(function(t){return Object(i["z"])(),Object(i["g"])("span",{key:t,class:"division-pipe"},Object(i["L"])(t),1)})),128))],2)])]),Object(i["k"])(E,{to:"".concat(t.$route.params.id,"/reviews"),icon:!0},{icon:Object(i["R"])((function(){return[Object(i["k"])(w)]})),text:Object(i["R"])((function(){return[l]})),_:1},8,["to"])]),Object(i["h"])("div",d,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(y.animeInfo.parts,(function(t,e){return Object(i["z"])(),Object(i["e"])(T,{episodesData:t,key:e,id:t.part},null,8,["episodesData","id"])})),128))]),Object(i["k"])(O,{title:"별점주기 창",type:"star",noFunc:v.starModalCancel,onStarChanged:v.starModalClose,rating:y.myRating,class:Object(i["q"])([{show:y.isStarRatingOpened},"optional-show"])},{title:Object(i["R"])((function(){return[f]})),description:Object(i["R"])((function(){return[g]})),"no-string":Object(i["R"])((function(){return[p]})),"yes-string":Object(i["R"])((function(){return[m]})),_:1},8,["noFunc","onStarChanged","rating","class"]),Object(i["k"])(I,{class:Object(i["q"])([{show:y.isOverflowMenuOpened},"optional-show"]),title:"더보기",actions:y.actions,close:v.actionSheetClose},null,8,["class","actions","close"])],4))}var v=n("5530"),b=n("1da1"),w=(n("96cf"),n("99af"),n("d3b7"),n("0829")),E=n("588e"),T=(n("b680"),function(t){return Object(i["C"])("data-v-421abb02"),t=t(),Object(i["A"])(),t}),O={key:0,class:"blind"},I={class:"col-left"},S={class:"scroll-title"},A={class:"anime-info inner"},C=["src","alt"],k=Object(i["j"])("보고싶다"),j={class:"col-right"},N={class:"sub-info"},_={class:"division-pipe"},R={class:"division-pipe"},D={class:"division-pipe"},L={class:"title"},x={class:"genres"},M={class:"star-rating-number"},P=T((function(){return Object(i["h"])("div",{class:"anime-interact-btn-area inner"},null,-1)})),V={class:"continue-play-bg"},F=Object(i["j"])("1화 무료보기");function U(t,e,n,r,s,o){var a=Object(i["H"])("icon-arrow-prev"),c=Object(i["H"])("icon-base"),u=Object(i["H"])("icon-overflow"),h=Object(i["H"])("icon-wanna-see"),l=Object(i["H"])("anime-action-btn"),d=Object(i["H"])("icon-play"),f=Object(i["H"])("vueflix-btn");return Object(i["z"])(),Object(i["g"])("header",{class:"anime-item-head",style:Object(i["r"])(o.posterBg)},[s.notPC?(Object(i["z"])(),Object(i["g"])("h1",O,"뷰플릭스")):Object(i["f"])("",!0),s.isMobile?(Object(i["z"])(),Object(i["g"])("div",{key:1,class:Object(i["q"])(["navigation","inner",{"navigation--scrolled":n.isScroll}])},[Object(i["h"])("div",I,[Object(i["h"])("button",{class:"back",onClick:e[0]||(e[0]=function(){return o.goBack&&o.goBack.apply(o,arguments)})},[Object(i["k"])(c,{iconName:"뒤로가기"},{default:Object(i["R"])((function(){return[Object(i["k"])(a)]})),_:1})]),Object(i["h"])("strong",S,Object(i["L"])(n.title),1)]),Object(i["h"])("button",{class:"overflow-btn",onClick:e[1]||(e[1]=function(){return o.openOverflowMenu&&o.openOverflowMenu.apply(o,arguments)})},[Object(i["k"])(c,{iconName:"더보기 메뉴"},{default:Object(i["R"])((function(){return[Object(i["k"])(u)]})),_:1})])],2)):Object(i["f"])("",!0),Object(i["h"])("div",A,[s.notPC?Object(i["f"])("",!0):(Object(i["z"])(),Object(i["g"])("div",{key:0,class:Object(i["q"])(["poster","loading-target",{"poster--loaded":n.poster}])},[Object(i["h"])("img",{src:n.poster,alt:"".concat(n.title," 포스터")},null,8,C),s.isMobile?Object(i["f"])("",!0):(Object(i["z"])(),Object(i["e"])(l,{key:0,onClick:o.wannaSeeToggle,isEnabled:s.wannaSeeBool,type:"wanna-see"},{icon:Object(i["R"])((function(){return[Object(i["k"])(h)]})),label:Object(i["R"])((function(){return[k]})),_:1},8,["onClick","isEnabled"]))],2)),Object(i["h"])("div",j,[Object(i["h"])("div",{class:Object(i["q"])(["row-top","loading-target",{"row-top--loaded":n.type&&n.rating&&n.title}])},[Object(i["h"])("p",N,[Object(i["h"])("span",_,Object(i["L"])(n.type),1),Object(i["h"])("span",R,Object(i["L"])(n.rating),1),Object(i["h"])("span",D,Object(i["L"])(n.isEnd?"완결":"방영중"),1)]),Object(i["h"])("h2",L,Object(i["L"])(n.title),1)],2),Object(i["h"])("div",{class:Object(i["q"])(["row-bottom","loading-target",{"row-bottom--loaded":n.genres&&n.starRatingAvg}])},[Object(i["h"])("ul",x,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(n.genres,(function(t){return Object(i["z"])(),Object(i["g"])("li",{key:t,class:"genre division-pipe"},Object(i["L"])(t),1)})),128))]),Object(i["h"])("p",M," 평균 "+Object(i["L"])(n.starRatingAvg?n.starRatingAvg.toFixed(1):"")+"점 ",1)],2)])]),P,Object(i["h"])("div",V,[s.notPC?(Object(i["z"])(),Object(i["e"])(l,{key:0,onClick:o.wannaSeeToggle,isEnabled:s.wannaSeeBool,type:"wanna-see",label:"보고싶다"},{icon:Object(i["R"])((function(){return[Object(i["k"])(h)]})),_:1},8,["onClick","isEnabled"])):Object(i["f"])("",!0),Object(i["k"])(f,{class:"btn--continue-play",component:"button",icon:!0},{icon:Object(i["R"])((function(){return[Object(i["k"])(d)]})),text:Object(i["R"])((function(){return[F]})),_:1})])],4)}n("a9e3");var q=n("3291"),B=n("4a42"),H=n("5f9d"),z=Object(i["h"])("circle",{cx:"12",cy:"4",r:"2"},null,-1),G=Object(i["h"])("circle",{cx:"12",cy:"12",r:"2"},null,-1),$=Object(i["h"])("circle",{cx:"12",cy:"20",r:"2"},null,-1);function K(t,e){return Object(i["z"])(),Object(i["g"])(i["a"],null,[z,G,$],64)}var W=n("6b0d"),Q=n.n(W);const X={},Y=Q()(X,[["render",K]]);var J=Y,Z=["title"],tt={class:"label"};function et(t,e,n,r,s,o){var a=Object(i["H"])("icon-base");return Object(i["z"])(),Object(i["g"])("button",{class:Object(i["q"])(["anime-interact-btn",{"anime-interact-btn--wanna-see":n.isEnabled&&"wanna-see"===n.type}]),title:n.label},[Object(i["k"])(a,{iconName:"label",class:"icon"},{default:Object(i["R"])((function(){return[Object(i["G"])(t.$slots,"icon",{},void 0,!0)]})),_:3}),Object(i["h"])("span",tt,[Object(i["G"])(t.$slots,"label",{},void 0,!0)])],10,Z)}var nt={name:"AnimeInteractBtn",components:{IconBase:B["a"]},props:{isEnabled:{type:Boolean,default:!1},type:{type:String},label:{type:String}}};n("75b6");const it=Q()(nt,[["render",et],["__scopeId","data-v-d7949a42"]]);var rt=it,st=n("c9ed"),ot=n("eef1"),at={name:"AnimeItemHead",components:{VueflixBtn:q["a"],IconBase:B["a"],IconArrowPrev:H["a"],IconOverflow:J,AnimeActionBtn:rt,IconWannaSee:st["a"],IconPlay:ot["a"]},props:{isScroll:{type:Boolean},title:{type:String},poster:{type:String},type:{type:String},rating:{type:String},isEnd:{type:Boolean},isUserRated:{type:Boolean},genres:{type:Array},starRatingAvg:{type:Number},myRating:{type:Number}},created:function(){window.addEventListener("resize",this.checkResolution)},unmounted:function(){window.removeEventListener("resize",this.checkResolution)},data:function(){return{wannaSeeBool:!1,isMobile:window.innerWidth<=768,notPC:window.innerWidth<=1080}},methods:{goBack:function(){return this.$router.go(-1)},wannaSeeToggle:function(){this.wannaSeeBool=!this.wannaSeeBool},checkResolution:function(){this.isMobile=window.innerWidth<=768,this.notPC=window.innerWidth<=1080},starModalOpen:function(){this.$emit("starModalOpened")},openOverflowMenu:function(){this.$emit("overflowMenuOpened")},starChanged:function(t){this.$emit("starChanged",t)}},computed:{posterBg:function(){var t="\n        background: linear-gradient(var(--anime-item-head-opacity-700), var(--anime-item-head-opacity-500)), url(".concat(this.poster,") center/cover;\n      ");return t}}};n("2f56");const ct=Q()(at,[["render",U],["__scopeId","data-v-421abb02"]]);var ut=ct,ht={class:"episodes"},lt={class:"part-title"};function dt(t,e,n,r,s,o){var a=this,c=Object(i["H"])("icon-arrow-next"),u=Object(i["H"])("icon-base"),h=Object(i["H"])("episode-card");return Object(i["z"])(),Object(i["g"])("div",ht,[Object(i["h"])("button",{class:"part-info inner",onClick:e[0]||(e[0]=function(){return o.widgetToggle&&o.widgetToggle.apply(o,arguments)})},[Object(i["h"])("i",{class:Object(i["q"])(["open-icon",{"open-icon--widget-opened":s.isWidgetOpen}])},[Object(i["k"])(u,null,{default:Object(i["R"])((function(){return[Object(i["k"])(c)]})),_:1})],2),Object(i["h"])("strong",lt,Object(i["L"])(n.episodesData.part),1)]),Object(i["h"])("ul",{class:Object(i["q"])(["episode-widget",{"episode-widget--opened":s.isWidgetOpen}])},[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(n.episodesData.episodes,(function(t,e){return Object(i["z"])(),Object(i["e"])(h,{key:t.title,title:t.title,date:t.date,thumbnail:"".concat(a.$route.params.id,"/").concat(t.thumbnail),index:e+1,ref:"episodeCard".concat(e)},null,8,["title","date","thumbnail","index"])})),128))],2)])}var ft=n("c000"),gt={class:"episode-card"},pt={href:"#none",class:"episode-item inner"},mt={class:"col-left"},yt={class:"thumbnail"},vt=["data-url","alt"],bt={class:"episode-info"},wt={class:"title"},Et={class:"date"},Tt={class:"col-right"};function Ot(t,e,n,r,s,o){var a=Object(i["H"])("icon-base"),c=Object(i["I"])("intersection-lazy");return Object(i["z"])(),Object(i["g"])("li",gt,[Object(i["h"])("a",pt,[Object(i["h"])("figure",null,[Object(i["h"])("div",mt,[Object(i["h"])("div",yt,[Object(i["S"])(Object(i["h"])("img",{"data-url":s.thumbnailURL,alt:"".concat(n.title," 썸네일"),ref:"thumbnail-".concat(n.index)},null,8,vt),[[c]])]),Object(i["h"])("div",bt,[Object(i["h"])("figcaption",wt,Object(i["L"])(n.index)+"화 "+Object(i["L"])(n.title),1),Object(i["h"])("p",Et,Object(i["L"])(n.date),1)])]),Object(i["h"])("div",Tt,[Object(i["k"])(a)])])])])}var It={name:"EpisodeCard",props:{thumbnail:{type:String},title:{type:String},index:{type:Number},date:{type:String}},components:{IconBase:B["a"]},data:function(){return{thumbnailURL:""}},mounted:function(){this.useURL()},methods:{useURL:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(E["b"])(),i=Object(E["c"])(n,t.thumbnail),e.next=4,Object(E["a"])(i);case 4:r=e.sent,s=t.$refs["thumbnail-".concat(t.index)],s.getBoundingClientRect().top<=window.innerHeight?s.src=r:t.thumbnailURL=r;case 7:case"end":return e.stop()}}),e)})))()}}};n("3d2b");const St=Q()(It,[["render",Ot],["__scopeId","data-v-10258a8e"]]);var At=St,Ct={name:"Episodes",components:{EpisodeCard:At,IconBase:B["a"],IconArrowNext:ft["a"]},props:{episodesData:{type:Object},id:{type:String}},data:function(){return{isWidgetOpen:!0}},methods:{widgetToggle:function(){this.isWidgetOpen=!this.isWidgetOpen}}};n("5eda");const kt=Q()(Ct,[["render",dt],["__scopeId","data-v-a497d9f8"]]);var jt=kt,Nt=n("714b"),_t={class:"action-sheet"},Rt=["title"],Dt={class:"action-area inner"},Lt={class:"action-sheet__title"},xt=["onClick"],Mt={class:"action-item"};function Pt(t,e,n,r,s,o){return Object(i["z"])(),Object(i["g"])("div",_t,[Object(i["h"])("button",{class:"action-sheet__shadow",onClick:e[0]||(e[0]=function(){return n.close&&n.close.apply(n,arguments)}),title:"".concat(n.title," 닫기")},null,8,Rt),Object(i["h"])("div",Dt,[Object(i["h"])("strong",Lt,Object(i["L"])(n.title),1),Object(i["h"])("ul",null,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(n.actions,(function(t){return Object(i["z"])(),Object(i["g"])("li",{key:t.text,onClick:t.method,class:"action-item"},[Object(i["h"])("button",null,Object(i["L"])(t.text),1)],8,xt)})),128)),Object(i["h"])("li",Mt,[Object(i["h"])("button",{onClick:e[1]||(e[1]=function(){return n.close&&n.close.apply(n,arguments)})},"닫기")])])])])}var Vt={name:"ActionSheet",props:{title:{type:String},actions:{type:Array},close:{type:Function}}};n("ee4c");const Ft=Q()(Vt,[["render",Pt],["__scopeId","data-v-13d4c1c6"]]);var Ut=Ft,qt=n("5a02"),Bt=Object(i["h"])("path",{d:"M19,3H5A2,2,0,0,0,3,5V15a2,2,0,0,0,2,2H7v3a1,1,0,0,0,.62.92A.84.84,0,0,0,8,21a1,1,0,0,0,.71-.29L12.41,17H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Zm0,12H12a1,1,0,0,0-.71.29L9.59,17,9,17.59V16a1,1,0,0,0-1-1H5V5H19Z"},null,-1),Ht=Object(i["h"])("circle",{cx:"12",cy:"10",r:"1"},null,-1),zt=Object(i["h"])("circle",{cx:"16",cy:"10",r:"1"},null,-1),Gt=Object(i["h"])("circle",{cx:"8",cy:"10",r:"1"},null,-1);function $t(t,e){return Object(i["z"])(),Object(i["g"])(i["a"],null,[Bt,Ht,zt,Gt],64)}const Kt={},Wt=Q()(Kt,[["render",$t]]);var Qt=Wt,Xt={components:{AnimeItemHead:ut,Episodes:jt,Modal:Nt["a"],ActionSheet:Ut,ArrowLinkBtn:qt["a"],IconReview:Qt},name:"anime",mounted:function(){var t=this;document.title="".concat(this.$route.params.id," 다시보기"),this.animeInit(),window.addEventListener("resize",(function(){t.deviceHeight=window.innerHeight})),window.addEventListener("scroll",this.handleScroll)},unmounted:function(){var t=this;window.removeEventListener("resize",(function(){t.deviceHeight=window.innerHeight})),window.removeEventListener("scroll",this.handleScroll)},data:function(){return{deviceHeight:window.innerHeight,animeInfo:{},animeNumber:"",myRating:0,isStarRatingOpened:!1,isOverflowMenuOpened:!1,actions:[{text:"공유하기",method:this.openSystemShare},{text:"관심없음",method:this.notInterested}],infos:[{title:"줄거리",text:this.animeInfo?this.animeInfo.summary:""},{title:"제작사",text:this.animeInfo?this.animeInfo.madeBy:""}],isSub:"anime"!==this.$route.name,isScroll:!1}},methods:{handleScroll:function(){this.isScroll=0<Math.round(window.scrollY)},getRawData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,i,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(w["c"])(),i=Object(w["a"])(n,"anime"),r=Object(w["d"])(i,Object(w["e"])("name","==",t.$route.params.id)),e.prev=3,e.next=6,Object(w["b"])(r);case 6:if(s=e.sent,0===s.docs.length){e.next=12;break}return o=s.docs[0].data(),e.abrupt("return",o);case 12:console.error("존재하지 않는 작품입니다");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),console.error("통신문제");case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()},animeInit:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(E["b"])(),e.next=3,t.getRawData();case 3:return i=e.sent,r=Object(E["c"])(n,"".concat(t.$route.params.id,"/").concat(i.poster)),e.prev=5,e.next=8,Object(E["a"])(r);case 8:s=e.sent,t.animeInfo=Object(v["a"])(Object(v["a"])({},i),{},{poster:s}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](5),console.error("포스터 정보가 존재하지 않습니다");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()},starModalOpen:function(){this.isStarRatingOpened=!0},starModalClose:function(t){this.myRating=t,this.isStarRatingOpened=!1},starModalCancel:function(){this.isStarRatingOpened=!1},overflowMenuOpen:function(){this.isOverflowMenuOpened=!0},actionSheetClose:function(){this.isOverflowMenuOpened=!1},delay:function(t){return new Promise((function(e){setTimeout(e,t)}))},openSystemShare:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.share({title:document.title,text:"뷰플릭스에서 ".concat(t.animeInfo.name,"을 다시 즐겨보세요!"),url:"https://vueflix.hyse.kr/anime/".concat(t.animeInfo.name)});case 3:t.actionSheetClose(),e.next=13;break;case 6:return e.prev=6,e.t0=e["catch"](0),t.$store.commit("toast/changeToastMeta",{isShown:!0,text:"공유하기 토스트를 불러오는데 실패했어요"}),e.next=11,t.delay(3e3);case 11:t.$store.commit("toast/changeToastMeta",{isShown:!1,text:""}),t.actionSheetClose();case 13:case"end":return e.stop()}}),e,null,[[0,6]])})))()},notInterested:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("toast/changeToastMeta",{isShown:!0,text:"취향에 반영했어요"}),e.next=3,t.delay(3e3);case 3:t.$store.commit("toast/changeToastMeta",{isShown:!1,text:""});case 4:case"end":return e.stop()}}),e)})))()},starChanged:function(t){this.myRating=t}}};n("5655");const Yt=Q()(Xt,[["render",y],["__scopeId","data-v-9d6d5b48"]]);e["default"]=Yt},"8ddd":function(t,e,n){},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ki})),n.d(e,"b",(function(){return Ni})),n.d(e,"c",(function(){return ji})),n.d(e,"d",(function(){return Ri})),n.d(e,"e",(function(){return _i})),n.d(e,"f",(function(){return Di})),n.d(e,"g",(function(){return Li})),n.d(e,"h",(function(){return Ai})),n.d(e,"i",(function(){return Ci}));var i,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=r||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:p,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function b(){this.s=this.s,this.o=this.o}var w=0,E={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=l(this);delete E[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function I(t){t:{var e=Bn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var k,j=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return-1!=t.indexOf(e)}function _(t,e){return t<e?-1:t>e?1:0}t:{var R=a.navigator;if(R){var D=R.userAgent;if(D){k=D;break t}}k=""}function L(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function x(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function V(t){return V[" "](t),t}function F(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=c;var U,q=N(k,"Opera"),B=N(k,"Trident")||N(k,"MSIE"),H=N(k,"Edge"),z=H||B,G=N(k,"Gecko")&&!(N(k.toLowerCase(),"webkit")&&!N(k,"Edge"))&&!(N(k,"Trident")||N(k,"MSIE"))&&!N(k,"Edge"),$=N(k.toLowerCase(),"webkit")&&!N(k,"Edge");function K(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=k;return G?/rv:([^\);]+)(\)|;)/.exec(t):H?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),B){var X=K();if(null!=X&&X>parseFloat(W)){U=String(X);break t}}U=W}var Y,J={};function Z(){return F((function(){let t=0;const e=j(String(U)).split("."),n=j("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=_(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||_(0==r[2].length,0==s[2].length)||_(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=K();Y=tt||(parseInt(U,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function rt(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{V(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.Z.h.call(this)}}it.prototype.h=function(){this.defaultPrevented=!0},v(rt,it);var st={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=T(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}ht.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),gt={};function pt(t,e,n,i,r){if(i&&i.once)return vt(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pt(t,e[s],n,i,r);return null}return n=St(n),t&&t[ot]?t.N(e,n,h(i)?!!i.capture:!!i,r):mt(t,e,n,!1,i,r)}function mt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=Ot(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=yt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Et(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function vt(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,i,r);return null}return n=St(n),t&&t[ot]?t.O(e,n,h(i)?!!i.capture:!!i,r):mt(t,e,n,!0,i,r)}function bt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,i,r);else i=h(i)?!!i.capture:!!i,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,i,r),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ot(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,i,r)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Et(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ot(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function Et(t){return t in gt?gt[t]:gt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new rt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&wt(t),t=n.call(i,e)}return t}function Ot(t){return t=t[ft],t instanceof ht?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function At(){b.call(this),this.i=new ht(this),this.P=this,this.I=null}function Ct(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(i,t),P(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=kt(o,i,!0,e)&&r}if(o=e.g=t,r=kt(o,i,!0,e)&&r,r=kt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=kt(o,i,!1,e)&&r}function kt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}v(At,b),At.prototype[ot]=!0,At.prototype.removeEventListener=function(t,e,n,i){bt(this,t,e,n,i)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ut(n[i]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},At.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var jt=a.JSON.stringify;function Nt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _t{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lt,t=>t.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Rt||Pt(),Vt||(Rt(),Vt=!0),Ft.add(t,e)}function Pt(){var t=a.Promise.resolve(void 0);Rt=function(){t.then(Ut)}}var Vt=!1,Ft=new _t;function Ut(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){xt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vt=!1}function qt(t,e){At.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ht(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function zt(t){t.g=Ht(()=>{t.g=null,t.i&&(t.i=!1,zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(qt,At),i=qt.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ct(this,"tick"),this.da&&(Bt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){qt.Z.M.call(this),Bt(this),delete this.g};class Gt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){b.call(this),this.h=t,this.g={}}v($t,b);var Kt=[];function Wt(t,e,n,i){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var r=0;r<n.length;r++){var s=pt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(i?" "+i:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return jt(n)}catch(a){return e}}$t.prototype.M=function(){$t.Z.M.call(this),Qt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},ie=null;function re(){return ie=ie||new At}function se(t){it.call(this,ne.Ma,t)}function oe(t){const e=re();Ct(e,new se(e,t))}function ae(t,e){it.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=re();Ct(e,new ae(e,t))}function ue(t,e){it.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(se,it),ne.STAT_EVENT="statevent",v(ae,it),ne.Na="timingevent",v(ue,it);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function ge(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){it.call(this,"d")}function be(){it.call(this,"c")}function we(){}function Ee(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new $t(this),this.P=Oe,t=z?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}v(ve,it),v(be,it),v(we,fe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Oe=45e3,Ie={},Se={};function Ae(t,e,n){t.K=1,t.v=Ye(Ge(e)),t.s=n,t.U=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),_e(t),t.A=Ge(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),fn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Te,t.g=bi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?x(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function je(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Ne(t,n),i==Se){4==e&&(t.o=4,ce(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Zt(t.j,t.m,i,null),Me(t,i)}ke(t)&&i!=Se&&i!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),li(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),Le(t))}function Ne(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Se:(n=Number(e.substring(n,i)),isNaN(n)?Ie:(i+=1,i+n>e.length?Se:(e=e.substr(i,n),t.C=i+n,e)))}function _e(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(m(t.eb,t),e)}function De(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||gi(t.l,t)}function xe(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fi(n),ei(n)}hi(n),ce(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mi(n,11)}else if((t.J||n.g==t)&&fi(n),!C(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(i=1.5*h,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(N(t,"spdy")||N(t,"quic")||N(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Tn(s,s.h),s.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Xe(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=vi(i,i.H?i.la:null,i.W),o.J){On(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(De(a),_e(a)),i.g=o}else ui(i);0<n.l.length&&ri(n)}else"stop"!=u[0]&&"close"!=u[0]||mi(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mi(n,7):ti(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Pe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)O(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Pe(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Fe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Fe)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];qe(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],qe(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=Ee.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const l=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),De(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var i=Qn(this.g);t="";var r=i.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),Le(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ce(12),xe(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(je(this,l,o),z&&this.i&&3==l&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==l&&xe(this),this.i&&!this.I&&(4==l?gi(this.l,this):(this.i=!1,_e(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),xe(this),Le(this)}}}catch(l){}},i.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(De(this),je(this,t,e),this.i&&4!=t&&_e(this))}},i.cancel=function(){this.I=!0,xe(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),xe(this),this.o=2,Le(this)):Re(this,this.Y-t)},i=Fe.prototype,i.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ue(this),this.g.concat()},i.get=function(t,e){return qe(this.h,t)?this.h[t]:e},i.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function He(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ze){this.g=void 0!==e?e:t.g,$e(this,t.j),this.s=t.s,Ke(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Fe(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,$e(this,n[1]||"",!0),this.s=tn(n[2]||""),Ke(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ge(t){return new ze(t)}function $e(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ke(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,pn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof ze?Ge(t):new ze(t,void 0)}function Ze(t,e,n,i){var r=new ze(null,void 0);return t&&$e(r,t),e&&Ke(r,e),n&&We(r,n),i&&(r.l=i),r}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Fe,t.h=0,t.i&&He(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=gn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function dn(t,e){return hn(t),e=gn(t,e),qe(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),A(n)),t.h+=n.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}i=un.prototype,i.add=function(t,e){hn(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){hn(this),this.g.forEach((function(n,i){O(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){hn(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(gn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},i.set=function(t,e){return hn(this),this.i=null,t=gn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function On(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Sn(){}function An(){this.g=new Sn}function Cn(t,e,n){const i=n||"";try{Ve(t,(function(t,n){let r=t;h(t)&&(r=jt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function kn(t,e){const n=new Xt;if(a.Image){const i=new Image;i.onload=y(jn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=y(jn,n,i,"TestLoadImage: error",!1,e),i.onabort=y(jn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=y(jn,n,i,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function jn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function Nn(t){this.l=t.$b||null,this.j=t.ib||!1}function _n(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(Nn,fe),Nn.prototype.g=function(){return new _n(this.l,this.j)},Nn.prototype.i=function(t){return function(){return t}}({}),v(_n,At);var Rn=0;function Dn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=_n.prototype,i.open=function(t,e){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=Rn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ln(this):xn(this),3==this.readyState&&Dn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Ln(this))},i.Ta=function(t){this.g&&(this.response=t,Ln(this))},i.ha=function(){this.g&&Ln(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function Pn(t){At.call(this),this.headers=new Fe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vn,this.K=this.L=!1}v(Pn,At);var Vn="",Fn=/^https?$/i,Un=["POST","PUT"];function qn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Hn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zn(t),$n(t)}function zn(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Ht(t.Fa,0,t);else if(Ct(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.H).match(Be)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!Fn.test(r?r.toLowerCase():"")}n=i}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",zn(t)}}finally{$n(t)}}}function $n(t,e){if(t.g){Kn(t);const i=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||Ct(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Kn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ti(t){if(ni(t),3==t.G){var e=t.V++,n=Ge(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ai(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ye(Ge(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=bi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),_e(e)}yi(t)}function ei(t){t.g&&(li(t),t.g.cancel(),t.g=null)}function ni(t){ei(t),t.u&&(a.clearTimeout(t.u),t.u=null),fi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function ii(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ri(t)}function ri(t){bn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function si(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(m(t.Ha,t,e),pi(t,t.C)),t.C++,!0))}function oi(t,e){var n;n=e?e.m:t.V++;const i=Ge(t.F);Xe(i,"SID",t.J),Xe(i,"RID",n),Xe(i,"AID",t.U),ai(t,i),t.o&&t.s&&Yn(i,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ci(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),Ae(n,i,e)}function ai(t,e){t.j&&Ve({},(function(t,n){Xe(e,n,t)}))}function ci(t,e,n){n=Math.min(t.l.length,n);var i=t.j?m(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{Cn(c,t,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function ui(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function hi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(m(t.Ga,t),pi(t,t.A)),t.A++,!0)}function li(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function di(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ai(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(Ge(e)),n.s=null,n.U=!0,Ce(n,t)}function fi(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function gi(t,e){var n=null;if(t.g==e){fi(t),li(t),t.g=null;var i=2}else{if(!En(t.i,e))return;n=e.D,On(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=re(),Ct(i,new ue(i,n,e,r)),ri(t)}else ui(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==i&&si(t,e)||2==i&&hi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}function pi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=m(t.jb,t);n||(n=new ze("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$e(n,"https"),Ye(n)),kn(n.toString(),i)}else ce(2);t.G=0,t.j&&t.j.va(e),yi(t),ni(t)}function yi(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function vi(t,e,n){let i=Je(n);if(""!=i.i)e&&Ke(i,e+"."+i.i),We(i,i.m);else{const t=a.location;i=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Xe(i,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(i,e,n),Xe(i,"VER",t.ma),ai(t,i),i}function bi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Pn(new Nn({ib:!0})):new Pn(t.qa),e.L=t.H,e}function wi(){}function Ei(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Ti(t,e){At.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Si(this)}function Oi(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ii(){be.call(this),this.status=1}function Si(t){this.g=t}i=Pn.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?ge(this.u):ge(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Hn(this,s)}t=n||"";const r=new Fe(this.headers);i&&Ve(i,(function(t,e){r.set(e,t)})),i=I(r.T()),n=a.FormData&&t instanceof a.FormData,!(0<=T(Un,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ht(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Hn(this,s)}},i.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),$n(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Pn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},i.cb=function(){Gn(this)},i.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Zn.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ee(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=x(s),P(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ci(this,r,e),n=Ge(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ai(this,n),this.o&&s&&Yn(n,this.o,s),Tn(this.i,r),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),r.$=!0,Ae(r,n,null)):Ae(r,n,e),this.G=2}}else 3==this.G&&(t?oi(this,t):0==this.l.length||bn(this.i)||oi(this))},i.Ga=function(){if(this.u=null,di(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(m(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),ei(this),di(this))},i.ab=function(){null!=this.v&&(this.v=null,ei(this),hi(this),ce(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},i=wi.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Ei.prototype.g=function(t,e){return new Ti(t,e)},v(Ti,At),Ti.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vi(t,null,t.W),ri(t)},Ti.prototype.close=function(){ti(this.g)},Ti.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ii(this.g,e)}else this.v?(e={},e.__data__=jt(t),ii(this.g,e)):ii(this.g,t)},Ti.prototype.M=function(){this.g.j=null,delete this.j,ti(this.g),delete this.g,Ti.Z.M.call(this)},v(Oi,ve),v(Ii,be),v(Si,wi),Si.prototype.xa=function(){Ct(this.g,"a")},Si.prototype.wa=function(t){Ct(this.g,new Oi(t))},Si.prototype.va=function(t){Ct(this.g,new Ii(t))},Si.prototype.ua=function(){Ct(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,Ti.prototype.send=Ti.prototype.u,Ti.prototype.open=Ti.prototype.m,Ti.prototype.close=Ti.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",pe.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",At.prototype.listen=At.prototype.N,Pn.prototype.listenOnce=Pn.prototype.O,Pn.prototype.getLastError=Pn.prototype.La,Pn.prototype.getLastErrorCode=Pn.prototype.Da,Pn.prototype.getStatus=Pn.prototype.ba,Pn.prototype.getResponseJson=Pn.prototype.Qa,Pn.prototype.getResponseText=Pn.prototype.ga,Pn.prototype.send=Pn.prototype.ea;var Ai=s.createWebChannelTransport=function(){return new Ei},Ci=s.getStatEventTarget=function(){return re()},ki=s.ErrorCode=le,ji=s.EventType=de,Ni=s.Event=ne,_i=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ri=s.FetchXmlHttpFactory=Nn,Di=s.WebChannel=pe,Li=s.XhrIo=Pn}).call(this,n("c8ba"))},"9a1f8":function(t,e,n){},a1d7:function(t,e,n){},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("d066"),o=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),h=n("83ab"),l=n("4930"),d=n("d039"),f=n("1a2d"),g=n("e8b5"),p=n("1626"),m=n("861d"),y=n("3a9b"),v=n("d9b5"),b=n("825a"),w=n("7b0b"),E=n("fc6a"),T=n("a04b"),O=n("577e"),I=n("5c6c"),S=n("7c73"),A=n("df75"),C=n("241c"),k=n("057f"),j=n("7418"),N=n("06cf"),_=n("9bf2"),R=n("d1e7"),D=n("f36a"),L=n("6eeb"),x=n("5692"),M=n("f772"),P=n("d012"),V=n("90e3"),F=n("b622"),U=n("e538"),q=n("746f"),B=n("d44e"),H=n("69f3"),z=n("b727").forEach,G=M("hidden"),$="Symbol",K="prototype",W=F("toPrimitive"),Q=H.set,X=H.getterFor($),Y=Object[K],J=r.Symbol,Z=J&&J[K],tt=r.TypeError,et=r.QObject,nt=s("JSON","stringify"),it=N.f,rt=_.f,st=k.f,ot=R.f,at=c([].push),ct=x("symbols"),ut=x("op-symbols"),ht=x("string-to-symbol-registry"),lt=x("symbol-to-string-registry"),dt=x("wks"),ft=!et||!et[K]||!et[K].findChild,gt=h&&d((function(){return 7!=S(rt({},"a",{get:function(){return rt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=it(Y,e);i&&delete Y[e],rt(t,e,n),i&&t!==Y&&rt(Y,e,i)}:rt,pt=function(t,e){var n=ct[t]=S(Z);return Q(n,{type:$,tag:t,description:e}),h||(n.description=e),n},mt=function(t,e,n){t===Y&&mt(ut,e,n),b(t);var i=T(e);return b(n),f(ct,i)?(n.enumerable?(f(t,G)&&t[G][i]&&(t[G][i]=!1),n=S(n,{enumerable:I(0,!1)})):(f(t,G)||rt(t,G,I(1,{})),t[G][i]=!0),gt(t,i,n)):rt(t,i,n)},yt=function(t,e){b(t);var n=E(e),i=A(n).concat(Tt(n));return z(i,(function(e){h&&!a(bt,n,e)||mt(t,e,n[e])})),t},vt=function(t,e){return void 0===e?S(t):yt(S(t),e)},bt=function(t){var e=T(t),n=a(ot,this,e);return!(this===Y&&f(ct,e)&&!f(ut,e))&&(!(n||!f(this,e)||!f(ct,e)||f(this,G)&&this[G][e])||n)},wt=function(t,e){var n=E(t),i=T(e);if(n!==Y||!f(ct,i)||f(ut,i)){var r=it(n,i);return!r||!f(ct,i)||f(n,G)&&n[G][i]||(r.enumerable=!0),r}},Et=function(t){var e=st(E(t)),n=[];return z(e,(function(t){f(ct,t)||f(P,t)||at(n,t)})),n},Tt=function(t){var e=t===Y,n=st(e?ut:E(t)),i=[];return z(n,(function(t){!f(ct,t)||e&&!f(Y,t)||at(i,ct[t])})),i};if(l||(J=function(){if(y(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,e=V(t),n=function(t){this===Y&&a(n,ut,t),f(this,G)&&f(this[G],e)&&(this[G][e]=!1),gt(this,e,I(1,t))};return h&&ft&&gt(Y,e,{configurable:!0,set:n}),pt(e,t)},Z=J[K],L(Z,"toString",(function(){return X(this).tag})),L(J,"withoutSetter",(function(t){return pt(V(t),t)})),R.f=bt,_.f=mt,N.f=wt,C.f=k.f=Et,j.f=Tt,U.f=function(t){return pt(F(t),t)},h&&(rt(Z,"description",{configurable:!0,get:function(){return X(this).description}}),u||L(Y,"propertyIsEnumerable",bt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:J}),z(A(dt),(function(t){q(t)})),i({target:$,stat:!0,forced:!l},{for:function(t){var e=O(t);if(f(ht,e))return ht[e];var n=J(e);return ht[e]=n,lt[n]=e,n},keyFor:function(t){if(!v(t))throw tt(t+" is not a symbol");if(f(lt,t))return lt[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!h},{create:vt,defineProperty:mt,defineProperties:yt,getOwnPropertyDescriptor:wt}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:Et,getOwnPropertySymbols:Tt}),i({target:"Object",stat:!0,forced:d((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(w(t))}}),nt){var Ot=!l||d((function(){var t=J();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));i({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,n){var i=D(arguments),r=e;if((m(e)||void 0!==t)&&!v(t))return g(e)||(e=function(t,e){if(p(r)&&(e=a(r,this,t,e)),!v(e))return e}),i[1]=e,o(nt,null,i)}})}if(!Z[W]){var It=Z.valueOf;L(Z,W,(function(t){return a(It,this)}))}B(J,$),P[G]=!0},b204:function(t,e,n){"use strict";var i=n("7a23"),r={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 280 48",class:"star-graph"},s=["d","onClick","title"];function o(t,e,n,o,a,c){return Object(i["z"])(),Object(i["g"])("svg",r,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(a.svgPoints,(function(t,e){return Object(i["z"])(),Object(i["g"])("path",{key:e,d:t,onClick:function(t){return c.starClicked(e)},class:Object(i["q"])(["star",{"star--filled":.5*e<n.rating}]),role:"button",title:"".concat(.5*e,"점")},null,10,s)})),128))])}n("a9e3");var a={name:"StarGraph",props:{rating:{type:Number}},data:function(){return{svgPoints:["M21.44,1.63,15.65,14l-13.25,2A2.84,2.84,0,0,0,.81,20.86l9.67,10L8.23,44.7a2.82,2.82,0,0,0,4.15,2.94L24,41.19V0A2.79,2.79,0,0,0,21.44,1.63Z","M39.77,44.7,37.52,30.82l9.67-10a2.84,2.84,0,0,0-1.59-4.79L32.35,14,26.56,1.63A2.79,2.79,0,0,0,24,0V41.19l11.62,6.45A2.82,2.82,0,0,0,39.77,44.7Z","M79.44,1.63,73.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L66.23,44.7a2.82,2.82,0,0,0,4.15,2.94L82,41.19V0A2.79,2.79,0,0,0,79.44,1.63Z","M97.77,44.7,95.52,30.82l9.67-10a2.84,2.84,0,0,0-1.59-4.79L90.35,14,84.56,1.63A2.79,2.79,0,0,0,82,0V41.19l11.62,6.45A2.82,2.82,0,0,0,97.77,44.7Z","M137.44,1.63,131.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L124.23,44.7a2.82,2.82,0,0,0,4.15,2.94L140,41.19V0A2.79,2.79,0,0,0,137.44,1.63Z","M155.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L142.56,1.63A2.79,2.79,0,0,0,140,0V41.19l11.62,6.45A2.82,2.82,0,0,0,155.77,44.7Z","M195.44,1.63,189.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L182.23,44.7a2.82,2.82,0,0,0,4.15,2.94L198,41.19V0A2.79,2.79,0,0,0,195.44,1.63Z","M213.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L200.56,1.63A2.79,2.79,0,0,0,198,0V41.19l11.62,6.45A2.82,2.82,0,0,0,213.77,44.7Z","M253.44,1.63,247.65,14l-13.25,2a2.84,2.84,0,0,0-1.59,4.79l9.67,10L240.23,44.7a2.82,2.82,0,0,0,4.15,2.94L256,41.19V0A2.79,2.79,0,0,0,253.44,1.63Z","M271.77,44.7l-2.25-13.88,9.67-10a2.84,2.84,0,0,0-1.59-4.79l-13.25-2L258.56,1.63A2.79,2.79,0,0,0,256,0V41.19l11.62,6.45A2.82,2.82,0,0,0,271.77,44.7Z"]}},methods:{starClicked:function(t){this.$emit("starChanged",.5*(t+1))}}},c=(n("7e2e"),n("6b0d")),u=n.n(c);const h=u()(a,[["render",o],["__scopeId","data-v-7ca29d7a"]]);e["a"]=h},b2b1:function(t,e,n){},b64b:function(t,e,n){var i=n("23e7"),r=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));i({target:"Object",stat:!0,forced:a},{keys:function(t){return s(r(t))}})},b680:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("e330"),o=n("5926"),a=n("408a"),c=n("1148"),u=n("d039"),h=r.RangeError,l=r.String,d=Math.floor,f=s(c),g=s("".slice),p=s(1..toFixed),m=function(t,e,n){return 0===e?n:e%2===1?m(t,e-1,n*t):m(t*t,e/2,n)},y=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},v=function(t,e,n){var i=-1,r=n;while(++i<6)r+=e*t[i],t[i]=r%1e7,r=d(r/1e7)},b=function(t,e){var n=6,i=0;while(--n>=0)i+=t[n],t[n]=d(i/e),i=i%e*1e7},w=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var i=l(t[e]);n=""===n?i:n+f("0",7-i.length)+i}return n},E=u((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!u((function(){p({})}));i({target:"Number",proto:!0,forced:E},{toFixed:function(t){var e,n,i,r,s=a(this),c=o(t),u=[0,0,0,0,0,0],d="",p="0";if(c<0||c>20)throw h("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return l(s);if(s<0&&(d="-",s=-s),s>1e-21)if(e=y(s*m(2,69,1))-69,n=e<0?s*m(2,-e,1):s/m(2,e,1),n*=4503599627370496,e=52-e,e>0){v(u,0,n),i=c;while(i>=7)v(u,1e7,0),i-=7;v(u,m(10,i,1),0),i=e-1;while(i>=23)b(u,1<<23),i-=23;b(u,1<<i),v(u,1,1),b(u,2),p=w(u)}else v(u,0,n),v(u,1<<-e,0),p=w(u)+f("0",c);return c>0?(r=p.length,p=d+(r<=c?"0."+f("0",c-r)+p:g(p,0,r-c)+"."+g(p,r-c))):p=d+p,p}})},b920:function(t,e,n){},ba3a:function(t,e,n){},bfdb:function(t,e,n){},c000:function(t,e,n){"use strict";var i=n("7a23"),r={d:"M9,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L16.59,12,8.29,3.71A1,1,0,0,1,9.71,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,9,22Z"};function s(t,e){return Object(i["z"])(),Object(i["g"])("path",r)}var o=n("6b0d"),a=n.n(o);const c={},u=a()(c,[["render",s]]);e["a"]=u},c9ed:function(t,e,n){"use strict";var i=n("7a23"),r={d:"M12,20,4.57,13.09a5,5,0,0,1,.74-6.83,4.7,4.7,0,0,1,6.6.73L12,7.1,12.09,7a4.7,4.7,0,0,1,6.6-.73,5,5,0,0,1,.74,6.83Z"};function s(t,e){return Object(i["z"])(),Object(i["g"])("path",r)}var o=n("6b0d"),a=n.n(o);const c={},u=a()(c,[["render",s]]);e["a"]=u},ce5a:function(t,e,n){"use strict";n("ba3a")},d178:function(t,e,n){},dbb4:function(t,e,n){var i=n("23e7"),r=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),r=a.f,u=s(i),h={},l=0;while(u.length>l)n=r(i,e=u[l++]),void 0!==n&&c(h,e,n);return h}})},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function i(t){"string"!==typeof t&&(t+="");var e,n=0,i=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){n=e+1;break}}else-1===i&&(r=!1,i=e+1);return-1===i?"":t.slice(n,i)}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,i="/"===o.charAt(0))}return e=n(r(e.split("/"),(function(t){return!!t})),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),o="/"===s(t,-1);return t=n(r(t.split("/"),(function(t){return!!t})),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=i(t.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,c=0;c<o;c++)if(r[c]!==s[c]){a=c;break}var u=[];for(c=a;c<r.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,i=-1,r=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":t.slice(0,i)},e.basename=function(t,e){var n=i(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,i=-1,r=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!r){n=o+1;break}}return-1===e||-1===i||0===s||1===s&&e===i-1&&e===n+1?"":t.slice(e,i)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e439:function(t,e,n){var i=n("23e7"),r=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=r((function(){o(1)})),u=!a||c;i({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},e538:function(t,e,n){var i=n("b622");e.f=i},ee4c:function(t,e,n){"use strict";n("b2b1")},eef1:function(t,e,n){"use strict";var i=n("7a23"),r={class:"b",d:"M19.51,11.14,7.31,3.9a1,1,0,0,0-1.51.86V19.24a1,1,0,0,0,1.51.86l12.2-7.24A1,1,0,0,0,19.51,11.14Z"};function s(t,e){return Object(i["z"])(),Object(i["g"])("path",r)}var o=n("6b0d"),a=n.n(o);const c={},u=a()(c,[["render",s]]);e["a"]=u}}]);
//# sourceMappingURL=chunk-56c4c846.d9fb5b83.js.map