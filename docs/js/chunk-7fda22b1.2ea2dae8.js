(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fda22b1"],{"057f":function(t,e,n){var r=n("c6b6"),s=n("fc6a"),i=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):i(s(t))}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return hi})),n.d(e,"b",(function(){return Yi})),n.d(e,"c",(function(){return fi})),n.d(e,"d",(function(){return Ki})),n.d(e,"e",(function(){return Gi}));var r=n("589b"),s=n("22e5"),i=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const l=new i["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=i["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=i["a"].ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=i["a"].WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new T;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new T,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new T)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class A{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */R.I=-1;class D{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function x(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function j(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function U(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===F.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof F?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class q extends F{construct(t,e,n){return new q(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new q(e)}static emptyPath(){return new q([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends F{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new E(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new E(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(e)}static emptyPath(){return new K([])}}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(v(!!t),"string"==typeof t){let e=0;const n=G.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function W(t){return"string"==typeof t?$.fromBase64String(t):$.fromUint8Array(t)}
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
 */function nt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?X(t)?4:10:y()}function rt(t,e){const n=nt(t);if(n!==nt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),r=H(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return W(t.bytesValue).isEqual(W(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return z(t.geoPointValue.latitude)===z(e.geoPointValue.latitude)&&z(t.geoPointValue.longitude)===z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return z(t.integerValue)===z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=z(t.doubleValue),r=z(e.doubleValue);return n===r?Z(n)===Z(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(j(n)!==j(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!rt(n[s],r[s])))return!1;return!0}(t,e);default:return y()}}function st(t,e){return void 0!==(t.values||[]).find(t=>rt(t,e))}function it(t,e){const n=nt(t),r=nt(e);if(n!==r)return x(n,r);switch(n){case 0:return 0;case 1:return x(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=z(t.integerValue||t.doubleValue),r=z(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ot(t.timestampValue,e.timestampValue);case 4:return ot(Y(t),Y(e));case 5:return x(t.stringValue,e.stringValue);case 6:return function(t,e){const n=W(t),r=W(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=x(n[s],r[s]);if(0!==t)return t}return x(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=x(z(t.latitude),z(e.latitude));return 0!==n?n:x(z(t.longitude),z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=it(n[s],r[s]);if(t)return t}return x(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=x(r[o],i[o]);if(0!==t)return t;const e=it(n[r[o]],s[i[o]]);if(0!==e)return e}return x(r.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return x(t,e);const n=H(t),r=H(e),s=x(n.seconds,r.seconds);return 0!==s?s:x(n.nanos,r.nanos)}function at(t){return ct(t)}function ct(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?W(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,et.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ct(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${ct(t.fields[s])}`;return n+"}"}(t.mapValue):y();var e,n}function ut(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ht(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function dt(t){return!!t&&"nullValue"in t}function ft(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pt(t){return!!t&&"mapValue"in t}function gt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return U(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=gt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!pt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gt(e)}setAll(t){let e=K.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=gt(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());pt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];pt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){U(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new mt(gt(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class yt{constructor(t,e,n,r,s){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=s}static newInvalidDocument(t){return new yt(t,0,M.min(),mt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,n,0)}static newNoDocument(t,e){return new yt(t,2,e,mt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new yt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class vt{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.R=null}}function wt(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vt(t,e,n,r,s,i,o)}function bt(t){const e=w(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>St(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),J(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Pt(e.startAt)),e.endAt&&(t+="|ub:",t+=Pt(e.endAt)),e.R=t}return e.R}function Et(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${at(e.value)}`;var e}).join(", ")}]`),J(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Pt(t.startAt)),t.endAt&&(e+=", endAt: "+Pt(t.endAt)),`Target(${e})`}function Tt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!jt(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!rt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vt(t.startAt,e.startAt)&&Vt(t.endAt,e.endAt)}function It(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class _t extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new At(t,e,n):"array-contains"===e?new Rt(t,n):"in"===e?new Nt(t,n):"not-in"===e?new Dt(t,n):"array-contains-any"===e?new xt(t,n):new _t(t,e,n)}static P(t,e,n){return"in"===e?new Ct(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(it(e,this.value)):null!==e&&nt(this.value)===nt(e)&&this.v(it(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function St(t){return t.field.canonicalString()+t.op.toString()+at(t.value)}class At extends _t{constructor(t,e,n){super(t,e,n),this.key=et.fromName(n.referenceValue)}matches(t){const e=et.comparator(t.key,this.key);return this.v(e)}}class Ct extends _t{constructor(t,e){super(t,"in",e),this.keys=Ot("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends _t{constructor(t,e){super(t,"not-in",e),this.keys=Ot("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ot(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>et.fromName(t.referenceValue))}class Rt extends _t{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lt(e)&&st(e.arrayValue,this.value)}}class Nt extends _t{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&st(this.value.arrayValue,e)}}class Dt extends _t{constructor(t,e){super(t,"not-in",e)}matches(t){if(st(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!st(this.value.arrayValue,e)}}class xt extends _t{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>st(this.value.arrayValue,t))}}class Lt{constructor(t,e){this.position=t,this.before=e}}function Pt(t){return`${t.before?"b":"a"}:${t.position.map(t=>at(t)).join(",")}`}class Mt{constructor(t,e="asc"){this.field=t,this.dir=e}}function jt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ut(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?et.comparator(et.fromName(o.referenceValue),n.key):it(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Vt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function qt(t,e,n,r,s,i,o,a){return new Ft(t,e,n,r,s,i,o,a)}function Bt(t){return new Ft(t)}function Kt(t){return!J(t.limit)&&"F"===t.limitType}function $t(t){return!J(t.limit)&&"L"===t.limitType}function Gt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ht(t){for(const e of t.filters)if(e.V())return e.field;return null}function zt(t){return null!==t.collectionGroup}function Wt(t){const e=w(t);if(null===e.S){e.S=[];const t=Ht(e),n=Gt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Mt(t)),e.S.push(new Mt(K.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Mt(K.keyField(),t))}}}return e.S}function Xt(t){const e=w(t);if(!e.D)if("F"===e.limitType)e.D=wt(e.path,e.collectionGroup,Wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Wt(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Mt(s.field,e))}const n=e.endAt?new Lt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Lt(e.startAt.position,!e.startAt.before):null;e.D=wt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function Qt(t,e,n){return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yt(t,e){return Tt(Xt(t),Xt(e))&&t.limitType===e.limitType}function Jt(t){return`${bt(Xt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${Et(Xt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ut(t.startAt,Wt(t),e))&&(!t.endAt||!Ut(t.endAt,Wt(t),e))}(t,e)}function ee(t){return(e,n)=>{let r=!1;for(const s of Wt(t)){const t=ne(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function ne(t,e,n){const r=t.field.isKeyField()?et.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?it(r,s):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
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
 */function re(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(e)?"-0":e}}function se(t){return{integerValue:""+t}}function ie(t,e){return tt(e)?se(e):re(t,e)}
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
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof he?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof le?de(t,e):t instanceof fe?pe(t,e):function(t,e){const n=ue(t,e),r=me(n)+me(t.N);return ht(n)&&ht(t.N)?se(r):re(t.k,r)}(t,e)}function ce(t,e,n){return t instanceof le?de(t,e):t instanceof fe?pe(t,e):n}function ue(t,e){return t instanceof ge?ht(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class he extends oe{}class le extends oe{constructor(t){super(),this.elements=t}}function de(t,e){const n=ye(e);for(const r of t.elements)n.some(t=>rt(t,r))||n.push(r);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function pe(t,e){let n=ye(e);for(const r of t.elements)n=n.filter(t=>!rt(t,r));return{arrayValue:{values:n}}}class ge extends oe{constructor(t,e){super(),this.k=t,this.N=e}}function me(t){return z(t.integerValue||t.doubleValue)}function ye(t){return lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof fe&&e instanceof fe?L(t.elements,e.elements,rt):t instanceof ge&&e instanceof ge?rt(t.N,e.N):t instanceof he&&e instanceof he}(t.transform,e.transform)}function we(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class be{}function Ee(t,e,n){t instanceof Se?function(t,e,n){const r=t.value.clone(),s=ke(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!we(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ke(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Ce(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Te(t,e,n){t instanceof Se?function(t,e,n){if(!we(t.precondition,e))return;const r=t.value.clone(),s=Oe(t.fieldTransforms,n,e);r.setAll(s),e.convertToFoundDocument(_e(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!we(t.precondition,e))return;const r=Oe(t.fieldTransforms,n,e),s=e.data;s.setAll(Ce(t)),s.setAll(r),e.convertToFoundDocument(_e(e),s).setHasLocalMutations()}(t,e,n):function(t,e){we(t.precondition,e)&&e.convertToNoDocument(M.min())}(t,e)}function Ie(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>ve(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function _e(t){return t.isFoundDocument()?t.version:M.min()}class Se extends be{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ae extends be{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Ce(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ke(t,e,n){const r=new Map;v(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ce(o,a,n[s]))}return r}function Oe(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,ae(t,i,e))}return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var Ne,De;function xe(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ne.OK:return b.OK;case Ne.CANCELLED:return b.CANCELLED;case Ne.UNKNOWN:return b.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return b.INTERNAL;case Ne.UNAVAILABLE:return b.UNAVAILABLE;case Ne.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ne.NOT_FOUND:return b.NOT_FOUND;case Ne.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ne.ABORTED:return b.ABORTED;case Ne.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ne.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(De=Ne||(Ne={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Le{constructor(t,e){this.comparator=t,this.root=e||Me.EMPTY}insert(t,e){return new Le(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(t){return new Le(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Me.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pe(this.root,t,this.comparator,!0)}}class Pe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Me{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Me.RED,this.left=null!=r?r:Me.EMPTY,this.right=null!=s?s:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Me(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Me.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1,Me.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class je{constructor(t){this.comparator=t,this.data=new Le(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ue(this.data.getIterator())}getIteratorFrom(t){return new Ue(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof je))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new je(this.comparator);return e.data=t,e}}class Ue{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Le(et.comparator);function Fe(){return Ve}const qe=new Le(et.comparator);function Be(){return qe}new Le(et.comparator);const Ke=new je(et.comparator);function $e(...t){let e=Ke;for(const n of t)e=e.add(n);return e}const Ge=new je(x);function He(){return Ge}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,We.createSynthesizedTargetChangeForCurrentChange(t,e)),new ze(M.min(),n,He(),Fe(),$e())}}class We{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new We($.EMPTY_BYTE_STRING,e,$e(),$e(),$e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.F=r}}class Qe{constructor(t,e){this.targetId=t,this.O=e}}class Ye{constructor(t,e,n=$.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Je{constructor(){this.M=0,this.L=en(),this.B=$.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=$e(),e=$e(),n=$e();return this.L.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new We(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=en()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Ze{constructor(t){this.et=t,this.nt=new Map,this.st=Fe(),this.it=tn(),this.rt=new je(x)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,r=this.wt(e);if(r){const t=r.target;if(It(t))if(0===n){const n=new et(t.path);this.ct(e,n,yt.newNoDocument(n,M.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,r)=>{const s=this.wt(r);if(s){if(n.current&&It(s.target)){const e=new et(s.target.path);null!==this.st.get(e)||this.yt(r,e)||this.ct(r,e,yt.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}});let n=$e();this.it.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new ze(t,e,this.rt,this.st,n);return this.st=Fe(),this.it=tn(),this.rt=new je(x),r}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Je,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new je(x),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Je),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function tn(){return new Le(et.comparator)}function en(){return new Le(et.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),rn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class sn{constructor(t,e){this.databaseId=t,this.C=e}}function on(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function an(t,e){return t.C?e.toBase64():e.toUint8Array()}function cn(t){return v(!!t),M.fromTimestamp(function(t){const e=H(t);return new P(e.seconds,e.nanos)}(t))}function un(t,e){return function(t){return new q(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function hn(t){const e=q.fromString(t);return v(Rn(e)),e}function ln(t,e){const n=hn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new et(gn(n))}function dn(t,e){return un(t.databaseId,e)}function fn(t){const e=hn(t);return 4===e.length?q.emptyPath():gn(e)}function pn(t){return new q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),$.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),$.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:xe(t.code);return new E(e,t.message||"")}(o);n=new Ye(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ln(t,r.document.name),i=cn(r.document.updateTime),o=new mt({mapValue:{fields:r.document.fields}}),a=yt.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Xe(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ln(t,r.document),i=r.readTime?cn(r.readTime):M.min(),o=yt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Xe([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ln(t,r.document),i=r.removedTargetIds||[];n=new Xe([],i,s,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Re(r),i=t.targetId;n=new Qe(i,s)}}return n}function yn(t,e){return{documents:[dn(t,e.path)]}}function vn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=dn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ft(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NAN"}};if(dt(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ft(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NAN"}};if(dt(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(t.field),op:Sn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:An(t.field),direction:_n(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.C||J(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Tn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Tn(e.endAt)),n}function wn(t){let e=fn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=En(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Mt(Cn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,J(e)?null:e}(n.limit));let c=null;n.startAt&&(c=In(n.startAt));let u=null;return n.endAt&&(u=In(n.endAt)),qt(e,s,o,i,a,"F",c,u)}function bn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function En(t){return t?void 0!==t.unaryFilter?[On(t)]:void 0!==t.fieldFilter?[kn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>En(t)).reduce((t,e)=>t.concat(e)):y():[]}function Tn(t){return{before:t.before,values:t.position}}function In(t){const e=!!t.before,n=t.values||[];return new Lt(n,e)}function _n(t){return nn[t]}function Sn(t){return rn[t]}function An(t){return{fieldPath:t.canonicalString()}}function Cn(t){return K.fromServerFormat(t.fieldPath)}function kn(t){return _t.create(Cn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function On(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Cn(t.unaryFilter.field);return _t.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Cn(t.unaryFilter.field);return _t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cn(t.unaryFilter.field);return _t.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Cn(t.unaryFilter.field);return _t.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Rn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xn(e)),e=Dn(t.get(n),e);return xn(e)}function Dn(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function xn(t){return t+""}class Ln{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Ln.store="owner",Ln.key="owner";class Pn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Pn.store="mutationQueues",Pn.keyPath="userId";class Mn{constructor(t,e,n,r,s){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=s}}Mn.store="mutations",Mn.keyPath="batchId",Mn.userMutationsIndex="userMutationsIndex",Mn.userMutationsKeyPath=["userId","batchId"];class jn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Nn(e)]}static key(t,e,n){return[t,Nn(e),n]}}jn.store="documentMutations",jn.PLACEHOLDER=new jn;class Un{constructor(t,e,n,r,s,i){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=s,this.parentPath=i}}Un.store="remoteDocuments",Un.readTimeIndex="readTimeIndex",Un.readTimeIndexPath="readTime",Un.collectionReadTimeIndex="collectionReadTimeIndex",Un.collectionReadTimeIndexPath=["parentPath","readTime"];class Vn{constructor(t){this.byteSize=t}}Vn.store="remoteDocumentGlobal",Vn.key="remoteDocumentGlobalKey";class Fn{constructor(t,e,n,r,s,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=o}}Fn.store="targets",Fn.keyPath="targetId",Fn.queryTargetsIndexName="queryTargetsIndex",Fn.queryTargetsKeyPath=["canonicalId","targetId"];class qn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}qn.store="targetDocuments",qn.keyPath=["targetId","path"],qn.documentTargetsIndex="documentTargetsIndex",qn.documentTargetsKeyPath=["path","targetId"];class Bn{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Bn.key="targetGlobalKey",Bn.store="targetGlobal";class Kn{constructor(t,e){this.collectionId=t,this.parent=e}}Kn.store="collectionParents",Kn.keyPath=["collectionId","parent"];class $n{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}$n.store="clientMetadata",$n.keyPath="clientId";class Gn{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Gn.store="bundles",Gn.keyPath="bundleId";class Hn{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Hn.store="namedQueries",Hn.keyPath="name";Pn.store,Mn.store,jn.store,Un.store,Fn.store,Ln.store,Bn.store,qn.store,$n.store,Vn.store,Kn.store,Gn.store,Hn.store;const zn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Xn((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Xn?e:Xn.resolve(e)}catch(t){return Xn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Xn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Xn.reject(e)}static resolve(t){return new Xn((e,n)=>{e(t)})}static reject(t){return new Xn((e,n)=>{n(t)})}static waitFor(t){return new Xn((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=Xn.resolve(!1);for(const n of t)e=e.next(t=>t?Xn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Yn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ee(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$e())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Ie(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Ie(t,e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Jn{constructor(t,e,n,r,s=M.min(),i=M.min(),o=$.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t){this.Gt=t}}function tr(t){const e=wn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Qt(e,e.limit,"L"):e}
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
class er{constructor(){this.zt=new nr}addToCollectionParentIndex(t,e){return this.zt.add(e),Xn.resolve()}getCollectionParents(t,e){return Xn.resolve(this.zt.getEntries(e))}}class nr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new je(q.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new je(q.comparator)).toArray()}}
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
class sr{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new sr(0)}static re(){return new sr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function ir(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==zn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
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
class or{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){U(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return V(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.changes=new or(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:M.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:yt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Xn.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class cr{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):zt(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new et(e)).next(t=>{let e=Be();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const r=e.collectionGroup;let s=Be();return this.Jt.getCollectionParents(t,r).next(i=>Xn.forEach(i,i=>{const o=function(t,e){return new Ft(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}Cn(t,e,n){let r,s;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(s=e,this.Nn(t,s,r).next(t=>{r=t;for(const e of s)for(const t of e.mutations){const n=t.key;let s=r.get(n);null==s&&(s=yt.newInvalidDocument(n),r=r.insert(n,s)),Te(t,s,e.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{te(e,n)||(r=r.remove(t))}),r))}Nn(t,e,n){let r=$e();for(const i of e)for(const t of i.mutations)t instanceof Ae&&null===n.get(t.key)&&(r=r.add(t.key));let s=n;return this.Je.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(s=s.insert(t,e))}),s))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=$e(),r=$e();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ur(t,e.fromCache,n,r)}}
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
 */class hr{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(M.min())?this.Mn(t,e):this.On.vn(t,r).next(s=>{const o=this.Ln(e,s);return(Kt(e)||$t(e))&&this.Bn(e.limitType,o,r,n)?this.Mn(t,e):(d()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new je(ee(t));return e.forEach((e,r)=>{te(t,r)&&(n=n.add(r))}),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mn(t,e){return d()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,M.min())}}
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
 */class lr{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new Le(x),this.Kn=new or(t=>bt(t),Tt),this.jn=M.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new cr(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function dr(t,e,n,r){return new lr(t,e,n,r)}async function fr(t,e){const n=w(t);let r=n.An,s=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.An.getAllMutationBatches(t).next(o=>(i=o,r=n.persistence.getMutationQueue(e),s=new cr(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=$e();for(const t of i){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return s.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=s,n.Un.Fn(n.Wn),i}function pr(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function gr(t,e){const n=w(t),r=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const o=[];e.targetChanges.forEach((e,i)=>{const a=s.get(i);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,i).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,i)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);s=s.insert(i,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.He.updateTargetData(t,u))}});let a=Fe();if(e.documentUpdates.forEach((r,s)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(mr(t,i,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(M.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Xn.waitFor(o).next(()=>i.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=s,t))}function mr(t,e,n,r,s){let i=$e();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=Fe();return n.forEach((n,o)=>{const a=t.get(n),c=(null==s?void 0:s.get(n))||r;o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,c),i=i.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),i=i.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),i})}function yr(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.He.getTargetData(t,e).next(s=>s?(r=s,Xn.resolve(r)):n.He.allocateTargetId(t).next(s=>(r=new Jn(e,s,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function vr(t,e,n){const r=w(t),s=r.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!Qn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(s.target)}function wr(t,e,n){const r=w(t);let s=M.min(),i=$e();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=w(t),s=r.Kn.get(n);return void 0!==s?Xn.resolve(r.qn.get(s)):r.He.getTargetData(e,n)}(r,t,Xt(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Un.getDocumentsMatchingQuery(t,e,n?s:M.min(),n?i:$e())).next(t=>({documents:t,zn:i})))}
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
class br{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Xn.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:cn(n.createTime)}),Xn.resolve()}getNamedQuery(t,e){return Xn.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:tr(t.bundledQuery),readTime:cn(t.readTime)}}(e)),Xn.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.ts=new je(Tr.es),this.ns=new je(Tr.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Tr(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new Tr(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new et(new q([])),n=new Tr(e,t),r=new Tr(e,t+1),s=[];return this.ns.forEachInRange([n,r],t=>{this.os(t),s.push(t.key)}),s}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new et(new q([])),n=new Tr(e,t),r=new Tr(e,t+1);let s=$e();return this.ns.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new Tr(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Tr{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return et.comparator(t.key,e.key)||x(t.fs,e.fs)}static ss(t,e){return x(t.fs,e.fs)||et.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new je(Tr.es)}checkEmpty(t){return Xn.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const i=new Yn(s,e,n,r);this.An.push(i);for(const o of r)this.ws=this.ws.add(new Tr(o.key,s)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Xn.resolve(i)}lookupMutationBatch(t,e){return Xn.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),s=r<0?0:r;return Xn.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return Xn.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Xn.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Tr(e,0),r=new Tr(e,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([n,r],t=>{const e=this._s(t.fs);s.push(e)}),Xn.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new je(x);return e.forEach(t=>{const e=new Tr(t,0),r=new Tr(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],t=>{n=n.add(t.fs)})}),Xn.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;et.isDocumentKey(s)||(s=s.child(""));const i=new Tr(new et(s),0);let o=new je(x);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)},i),Xn.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Xn.forEach(e.mutations,r=>{const s=new Tr(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new Tr(e,0),r=this.ws.firstAfterOrEqual(n);return Xn.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,Xn.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Le(et.comparator),this.size=0}addEntry(t,e,n){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-i,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Xn.resolve(n?n.document.clone():yt.newInvalidDocument(e))}getEntries(t,e){let n=Fe();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():yt.newInvalidDocument(t))}),Xn.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Fe();const s=new et(e.path.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s,readTime:o}}=i.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,s)&&(r=r.insert(s.key,s.clone()))}return Xn.resolve(r)}Es(t,e){return Xn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Sr(this)}getSize(t){return Xn.resolve(this.size)}}class Sr extends ar{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),Xn.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.persistence=t,this.Is=new or(t=>bt(t),Tt),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.As=0,this.Rs=new Er,this.targetCount=0,this.Ps=sr.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Xn.resolve()}getLastRemoteSnapshotVersion(t){return Xn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Xn.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Xn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Xn.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new sr(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Xn.resolve()}updateTargetData(t,e){return this.ce(e),Xn.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Xn.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Is.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Xn.waitFor(s).next(()=>r)}getTargetCount(t){return Xn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Xn.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Xn.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),Xn.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Xn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Xn.resolve(n)}containsKey(t,e){return Xn.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e){this.bs={},this.Be=new R(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Ar(this),this.Jt=new er,this.Je=function(t,e){return new _r(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Zn(e),this.Ye=new br(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Ir(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new kr(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(t=>this.referenceDelegate.Ss(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ds(t,e){return Xn.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class kr extends Wn{constructor(t){super(),this.currentSequenceNumber=t}}class Or{constructor(t){this.persistence=t,this.Cs=new Er,this.Ns=null}static ks(t){return new Or(t)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Xn.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Xn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Xn.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Xn.forEach(this.xs,n=>{const r=et.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Xn.or([()=>Xn.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
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
 */class Rr{constructor(){this.activeTargetIds=He()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nr{constructor(){this.pi=new Rr,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Rr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Dr{Ei(t){}shutdown(){}}
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
 */class xr{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Lr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,s){const i=this.Ui(t,e);f("RestConnection","Sending: ",i,n);const o={};return this.qi(o,r,s),this.Ki(t,i,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}ji(t,e,n,r,s){return this.Bi(t,e,n,r,s)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=Lr[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise((s,i)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),s(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new E(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);i(new E(e,t.message))}else i(new E(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Object(a["h"])(),i=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["l"])()||Object(o["m"])()||Object(o["i"])()||Object(o["j"])()||Object(o["o"])()||Object(o["h"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const h=s.createWebChannel(u,c);let l=!1,d=!1;const p=new Pr({Vi:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),h.open(),l=!0),f("Connection","WebChannel sending:",t),h.send(t))},Si:()=>h.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(h,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.Fi())}),m(h,a["f"].EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),p.Fi(new E(b.UNAVAILABLE,"The operation could not be completed")))}),m(h,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){f("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Ne[t];if(void 0!==e)return xe(e)}(t),n=s.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),d=!0,p.Fi(new E(e,n)),h.close()}else f("Connection","WebChannel received:",n),p.Oi(n)}}),m(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.$i()},0),p}}
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
 */function jr(){return"undefined"!=typeof document?document:null}
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
 */function Ur(t){return new sn(t,!0)}class Vr{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,n,r,s,i,o,a){this.Oe=t,this.nr=n,this.sr=r,this.ir=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Vr(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new E(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qr extends Fr{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.k=s}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=mn(this.k,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?cn(e.readTime):M.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=pn(this.k),e.addTarget=function(t,e){let n;const r=e.target;return n=It(r)?{documents:yn(t,r)}:{query:vn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=an(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=on(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=bn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=pn(this.k),e.removeTarget=t,this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Br extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.ir.Bi(t,e,n,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.ir.ji(t,e,n,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class Kr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(p(e),this.Lr=!1):f("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Zr(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.Gr.add(4),await Hr(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Gr(e)}(this))})}),this.Jr=new Kr(n,r)}}async function Gr(t){if(Zr(t))for(const e of t.zr)await e(!0)}async function Hr(t){for(const e of t.zr)await e(!1)}function zr(t,e){const n=w(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Jr(n)?Yr(n):os(n).lr()&&Xr(n,e))}function Wr(t,e){const n=w(t),r=os(n);n.Wr.delete(e),r.lr()&&Qr(n,e),0===n.Wr.size&&(r.lr()?r._r():Zr(n)&&n.Jr.set("Unknown"))}function Xr(t,e){t.Yr.X(e.targetId),os(t).br(e)}function Qr(t,e){t.Yr.X(e),os(t).vr(e)}function Yr(t){t.Yr=new Ze({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),os(t).start(),t.Jr.Br()}function Jr(t){return Zr(t)&&!os(t).hr()&&t.Wr.size>0}function Zr(t){return 0===w(t).Gr.size}function ts(t){t.Yr=void 0}async function es(t){t.Wr.forEach((e,n)=>{Xr(t,e)})}async function ns(t,e){ts(t),Jr(t)?(t.Jr.Kr(e),Yr(t)):t.Jr.set("Unknown")}async function rs(t,e,n){if(t.Jr.set("Online"),e instanceof Ye&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ss(t,n)}else if(e instanceof Xe?t.Yr.ot(e):e instanceof Qe?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(M.min()))try{const e=await pr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Wr.get(r);s&&t.Wr.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),Qr(t,e);const r=new Jn(n.target,e,1,n.sequenceNumber);Xr(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await ss(t,e)}}async function ss(t,e,n){if(!Qn(e))throw e;t.Gr.add(1),await Hr(t),t.Jr.set("Offline"),n||(n=()=>pr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Gr(t)})}async function is(t,e){const n=w(t);e?(n.Gr.delete(2),await Gr(n)):e||(n.Gr.add(2),await Hr(n),n.Jr.set("Unknown"))}function os(t){return t.Xr||(t.Xr=function(t,e,n){const r=w(t);return r.Fr(),new qr(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
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
 */}(t.datastore,t.asyncQueue,{Di:es.bind(null,t),Ni:ns.bind(null,t),Pr:rs.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Jr(t)?Yr(t):t.Jr.set("Unknown")):(await t.Xr.stop(),ts(t))})),t.Xr}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class as{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new as(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cs(t,e){if(p("AsyncQueue",`${e}: ${t}`),Qn(t))return new E(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t){this.comparator=t?(e,n)=>t(e,n)||et.comparator(e.key,n.key):(t,e)=>et.comparator(t.key,e.key),this.keyedMap=Be(),this.sortedSet=new Le(this.comparator)}static emptySet(t){return new us(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof us))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new us;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.eo=new Le(et.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):y():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class ls{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new ls(t,e,us.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.so=void 0,this.listeners=[]}}class fs{constructor(){this.queries=new or(t=>Jt(t),Yt),this.onlineState="Unknown",this.io=new Set}}async function ps(t,e){const n=w(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ds),s)try{i.so=await n.onListen(r)}catch(t){const n=cs(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&vs(n)}async function gs(t,e){const n=w(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function ms(t,e){const n=w(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(s)&&(r=!0);e.so=s}}r&&vs(n)}function ys(t,e,n){const r=w(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function vs(t){t.io.forEach(t=>{t.next()})}class ws{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ls(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=ls.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
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
class bs{constructor(t){this.key=t}}class Es{constructor(t){this.key=t}}class Ts{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=$e(),this.mutatedKeys=$e(),this.Ao=ee(t),this.Ro=new us(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new hs,r=e?e.Ro:this.Ro;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=Kt(this.query)&&r.size===this.query.limit?r.last():null,c=$t(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=te(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Vo(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ao(h,a)>0||c&&this.Ao(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),Kt(this.query)||$t(this.query))for(;i.size>this.query.limit;){const t=Kt(this.query)?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ro:i,vo:n,Bn:o,mutatedKeys:s}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const s=t.vo.no();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const i=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==s.length||a?{snapshot:new ls(this.query,t.Ro,r,s,t.mutatedKeys,0===o,a,!1),Co:i}:{Co:i}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new hs,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=$e(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Es(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new bs(n))}),e}ko(t){this.To=t.zn,this.Io=$e();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return ls.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Is{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _s{constructor(t){this.key=t,this.$o=!1}}class Ss{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Fo={},this.Oo=new or(t=>Jt(t),Yt),this.Mo=new Map,this.Lo=new Set,this.Bo=new Le(et.comparator),this.Uo=new Map,this.qo=new Er,this.Ko={},this.jo=new Map,this.Qo=sr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function As(t,e){const n=Fs(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const t=await yr(n.localStore,Xt(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await Cs(n,e,r,"current"===i),n.isPrimaryClient&&zr(n.remoteStore,t)}return s}async function Cs(t,e,n,r){t.Go=(e,n,r)=>async function(t,e,n,r){let s=e.view.bo(n);s.Bn&&(s=await wr(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Ls(t,e.targetId,o.Co),o.snapshot}(t,e,n,r);const s=await wr(t.localStore,e,!0),i=new Ts(e,s.zn),o=i.bo(s.documents),a=We.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Ls(t,n,c.Co);const u=new Is(e,n,i);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function ks(t,e){const n=w(t),r=n.Oo.get(e),s=n.Mo.get(r.targetId);if(s.length>1)return n.Mo.set(r.targetId,s.filter(t=>!Yt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Wr(n.remoteStore,r.targetId),Ds(n,r.targetId)}).catch(ir)):(Ds(n,r.targetId),await vr(n.localStore,r.targetId,!0))}async function Os(t,e){const n=w(t);try{const t=await gr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Uo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?v(r.$o):t.removedDocuments.size>0&&(v(r.$o),r.$o=!1))}),await js(n,t,e)}catch(t){await ir(t)}}function Rs(t,e,n){const r=w(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const s=r.view.ro(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.listeners)s.ro(e)&&(r=!0)}),r&&vs(n)}(r.eventManager,e),t.length&&r.Fo.Pr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ns(t,e,n){const r=w(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Uo.get(e),i=s&&s.key;if(i){let t=new Le(et.comparator);t=t.insert(i,yt.newNoDocument(i,M.min()));const n=$e().add(i),s=new ze(M.min(),new Map,new je(x),t,n);await Os(r,s),r.Bo=r.Bo.remove(i),r.Uo.delete(e),Ms(r)}else await vr(r.localStore,e,!1).then(()=>Ds(r,e,n)).catch(ir)}function Ds(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||xs(t,e)})}function xs(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Wr(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Ms(t))}function Ls(t,e,n){for(const r of n)r instanceof bs?(t.qo.addReference(r.key,e),Ps(t,r)):r instanceof Es?(f("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||xs(t,r.key)):y()}function Ps(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(f("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Ms(t))}function Ms(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new et(q.fromString(e)),r=t.Qo.next();t.Uo.set(r,new _s(n)),t.Bo=t.Bo.insert(n,r),zr(t.remoteStore,new Jn(Xt(Bt(n.path)),r,2,R.I))}}async function js(t,e,n){const r=w(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Go(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=ur.$n(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.Fo.Pr(s),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Xn.forEach(e,e=>Xn.forEach(e.kn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Xn.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Qn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,s)}}}(r.localStore,i))}async function Us(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await fr(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new E(b.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await js(n,t.Gn)}}function Vs(t,e){const n=w(t),r=n.Uo.get(e);if(r&&r.$o)return $e().add(r.key);{let t=$e();const r=n.Mo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Po)}return t}}function Fs(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Os.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ns.bind(null,e),e.Fo.Pr=ms.bind(null,e.eventManager),e.Fo.zo=ys.bind(null,e.eventManager),e}class qs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Ur(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return dr(this.persistence,new hr,t.initialUser,this.k)}Yo(t){return new Cr(Or.ks,this.k)}Jo(t){return new Nr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Rs(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Us.bind(null,this.syncEngine),await is(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fs}createDatastore(t){const e=Ur(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Mr(r));var r;return function(t,e,n,r){return new Br(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Rs(this.syncEngine,t,0),i=xr.bt()?new xr:new Dr,new $r(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Ss(t,e,n,r,s,i);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Hr(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
class Ks{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
class $s{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=D.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Gs(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await fr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Hs(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zs(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.Gr.add(3),await Hr(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Gr(n)}(e.remoteStore,t)),t.onlineComponents=e}async function zs(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Gs(t,new qs)),t.offlineComponents}async function Ws(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Hs(t,new Bs)),t.onlineComponents}async function Xs(t){const e=await Ws(t),n=e.eventManager;return n.onListen=As.bind(null,e.syncEngine),n.onUnlisten=ks.bind(null,e.syncEngine),n}function Qs(t,e,n={}){const r=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Ks({next:n=>{e.enqueueAndForget(()=>gs(t,o)),n.fromCache&&"server"===r.source?s.reject(new E(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new ws(n,i,{includeMetadataChanges:!0,wo:!0});return ps(t,o)}(await Xs(t),t.asyncQueue,e,n,r)),r.promise}class Ys{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Js{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Js&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Zs=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e,n){if(!n)throw new E(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ei(t,e,n,r){if(!0===e&&!0===r)throw new E(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ni(t){if(et.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ri(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ri(t);throw new E(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
 */class oi{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ii({}),this._settingsFrozen=!1,t instanceof Js?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ii(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new _;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new C(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zs.get(t);e&&(f("ComponentProvider","Removing Datastore"),Zs.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class ai{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ai(this.firestore,t,this._key)}}class ci{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ci(this.firestore,t,this._query)}}class ui extends ci{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ai(this.firestore,null,new et(t))}withConverter(t){return new ui(this.firestore,t,this._path)}}function hi(t,e,...n){if(t=Object(o["f"])(t),ti("collection","path",e),t instanceof oi){const r=q.fromString(e,...n);return ni(r),new ui(t,null,r)}{if(!(t instanceof ai||t instanceof ui))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(q.fromString(e,...n));return ni(r),new ui(t.firestore,null,r)}}
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
class li{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Vr(this,"async_queue_retry"),this.Ra=()=>{const t=jr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=jr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=jr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new T;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Qn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const r=as.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(r),r}Pa(){this.Ta&&y()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class di extends oi{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new li,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gi(this),this._firestoreClient.terminate()}}function fi(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function pi(t){return t._firestoreClient||gi(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gi(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ys(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $s(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
 */const bi=/^__.*__$/;function Ei(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Ti{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=r,void 0===s&&this.ka(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.Ma(t),r}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return Di(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Ei(this.xa)&&bi.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class Ii{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Ur(t)}ja(t,e,n,r=!1){return new Ti({xa:t,methodName:e,Ka:n,path:K.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function _i(t){const e=t._freezeSettings(),n=Ur(t._databaseId);return new Ii(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Si(t,e,n,r=!1){return Ai(n,t.ja(r?4:3,e))}function Ai(t,e){if(ki(t=Object(o["f"])(t)))return Oi("Unsupported field value:",e,t),Ci(t,e);if(t instanceof vi)return function(t,e){if(!Ei(e.xa))throw e.Ua(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ua(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Ai(s,e.Ba(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["f"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ie(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:on(e.k,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:on(e.k,n)}}if(t instanceof wi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof yi)return{bytesValue:an(e.k,t._byteString)};if(t instanceof ai){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:un(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua("Unsupported field value: "+ri(t))}(t,e)}function Ci(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):U(t,(t,r)=>{const s=Ai(r,e.Fa(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function ki(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof wi||t instanceof yi||t instanceof ai||t instanceof vi)}function Oi(t,e,n){if(!ki(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=ri(n);throw"an object"===r?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}const Ri=new RegExp("[~\\*/\\[\\]]");function Ni(t,e,n){if(e.search(Ri)>=0)throw Di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mi(...e.split("."))._internalPath}catch(r){throw Di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Di(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+s),c+=")"),new E(b.INVALID_ARGUMENT,a+t+c)}
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
class xi{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ai(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Li(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pi("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Li extends xi{data(){return super.data()}}function Pi(t,e){return"string"==typeof e?Ni(t,e):e instanceof mi?e._internalPath:e._delegate._internalPath}
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
 */class Mi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ji extends xi{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Pi("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ui extends ji{data(t={}){return super.data(t)}}class Vi{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Mi(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ui(this._firestore,this._userDataWriter,n.key,n,new Mi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ui(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Mi(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Ui(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Mi(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Fi(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Fi(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
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
function qi(t){if($t(t)&&0===t.explicitOrderBy.length)throw new E(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bi{}function Ki(t,...e){for(const n of e)t=n._apply(t);return t}class $i extends Bi{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=_i(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new E(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on FieldPath.documentId().`);if("in"===i||"not-in"===i){zi(o,i);const e=[];for(const n of o)e.push(Hi(r,t,n));a={arrayValue:{values:e}}}else a=Hi(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||zi(o,i),a=Si(n,e,o,"in"===i||"not-in"===i);const c=_t.create(s,i,a);return function(t,e){if(e.V()){const n=Ht(t);if(null!==n&&!n.isEqual(e.field))throw new E(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Gt(t);null!==r&&Wi(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new ci(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Gi(t,e,n){const r=e,s=Pi("where",t);return new $i(s,r,n)}function Hi(t,e,n){if("string"==typeof(n=Object(o["f"])(n))){if(""===n)throw new E(b.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!zt(e)&&-1!==n.indexOf("/"))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(q.fromString(n));if(!et.isDocumentKey(r))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ut(t,new et(r))}if(n instanceof ai)return ut(t,n._key);throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${ri(n)}.`)}function zi(t,e){if(!Array.isArray(t)||0===t.length)throw new E(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Wi(t,e,n){if(!n.isEqual(e))throw new E(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class Xi{convertValue(t,e="none"){switch(nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(W(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return U(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new wi(z(t.latitude),z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Q(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=H(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=q.fromString(t);v(Rn(n));const r=new Js(n.get(1),n.get(3)),s=new et(n.popFirst(5));return r.isEqual(e)||p(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */class Qi extends Xi{constructor(t){super(),this.firestore=t}convertBytes(t){return new yi(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ai(this.firestore,null,e)}}function Yi(t){t=si(t,ci);const e=si(t.firestore,di),n=pi(e),r=new Qi(e);return qi(t._query),Qs(n,t._query).then(n=>new Vi(e,r,t,n))}!function(t,e=!0){!function(t){h=t}(r["a"]),Object(r["c"])(new s["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new di(r,new S(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC")),Object(r["g"])(c,"3.4.0",t),Object(r["g"])(c,"3.4.0","esm2017")}()}).call(this,n("4362"))},"159b":function(t,e,n){var r=n("da84"),s=n("fdbc"),i=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in s)s[u]&&c(r[u]&&r[u].prototype);c(i)},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,s=n("a640"),i=s("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4dae":function(t,e,n){var r=n("da84"),s=n("23cb"),i=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=i(t),u=s(e,r),h=s(void 0===n?r:n,r),l=a(c(h-u,0)),d=0;u<h;u++,d++)o(l,d,t[u]);return l.length=d,l}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),s=n("b727").filter,i=n("1dde"),o=i("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"50bd":function(t,e,n){"use strict";n("c1bf")},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var r=n("428f"),s=n("1a2d"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});s(e,t)||o(e,t,{value:i.f(t)})}},"8b94":function(t,e,n){"use strict";n("a7e4")},"8c21":function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),s={class:"anime"},i=Object(r["j"])("이 멋진 애니에 별점을!"),o=Object(r["j"])(" 별을 누르면 그만큼의 별점을 줄 수 있어요 "),a=Object(r["j"])("취소"),c=Object(r["j"])("별점 저장");function u(t,e,n,u,h,l){var d=Object(r["H"])("anime-item-head"),f=Object(r["H"])("modal");return Object(r["z"])(),Object(r["g"])("div",s,[Object(r["k"])(d,{title:h.animeInfo.name,poster:h.animeInfo.poster,type:h.animeInfo.type,rating:h.animeInfo.rating,isEnd:h.animeInfo.isEnd,genres:h.animeInfo.genre,starRatingAvg:h.animeInfo.starRating,onStarModalOpened:l.starModalOpen,isUserRated:0!==h.myRating},null,8,["title","poster","type","rating","isEnd","genres","starRatingAvg","onStarModalOpened","isUserRated"]),Object(r["k"])(f,{type:"star",onStarChanged:l.starModalClose,rating:h.myRating,class:Object(r["q"])([{show:h.isStarRatingOpened}])},{title:Object(r["P"])((function(){return[i]})),description:Object(r["P"])((function(){return[o]})),"no-string":Object(r["P"])((function(){return[a]})),"yes-string":Object(r["P"])((function(){return[c]})),_:1},8,["onStarChanged","rating","class"])])}var h=n("5530"),l=n("1da1"),d=(n("96cf"),n("0829")),f=n("589b"),p=n("1fd5"),g=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const m="firebasestorage.googleapis.com",y="storageBucket",v=12e4,w=6e5;class b extends p["c"]{constructor(t,e){super(E(t),`Firebase Storage: ${e} (${E(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b.prototype)}_codeEquals(t){return E(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function E(t){return"storage/"+t}function T(){const t="An unknown error occurred, please check the error payload for server response.";return new b("unknown",t)}function I(t){return new b("object-not-found","Object '"+t+"' does not exist.")}function _(t){return new b("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function S(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new b("unauthenticated",t)}function A(){return new b("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function C(t){return new b("unauthorized","User does not have permission to access '"+t+"'.")}function k(){return new b("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function O(){return new b("canceled","User canceled the upload/download.")}function R(t){return new b("invalid-url","Invalid URL '"+t+"'.")}function N(t){return new b("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function D(){return new b("no-default-bucket","No default bucket found. Did you set the '"+y+"' property when initializing the app?")}function x(){return new b("no-download-url","The given file does not have any download URLs.")}function L(t){return new b("invalid-argument",t)}function P(){return new b("app-deleted","The Firebase app was deleted.")}function M(t){return new b("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function j(t){throw new b("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=U.makeFromUrl(t,e)}catch(r){return new U(t,"")}if(""===n.path)return n;throw N(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function s(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const i="(/(.*))?$",o=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),l="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${l}`,"i"),f={bucket:1,path:3},p=e===m?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",y=new RegExp(`^https?://${p}/${r}/${g}`,"i"),v={bucket:1,path:2},w=[{regex:o,indices:a,postModify:s},{regex:d,indices:f,postModify:c},{regex:y,indices:v,postModify:c}];for(let m=0;m<w.length;m++){const e=w[m],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let s=r[e.indices.path];s||(s=""),n=new U(t,s),e.postModify(n);break}}if(null==n)throw R(t);return n}}class V{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return 2===a}let u=!1;function h(...t){u||(u=!0,e.apply(null,t))}function l(e){s=setTimeout(()=>{s=null,t(f,c())},e)}function d(){i&&clearTimeout(i)}function f(t,...e){if(u)return void d();if(t)return d(),void h.call(null,t,...e);const n=c()||o;if(n)return d(),void h.call(null,t,...e);let s;r<64&&(r*=2),1===a?(a=2,s=0):s=1e3*(r+Math.random()),l(s)}let p=!1;function g(t){p||(p=!0,d(),u||(null!==s?(t||(a=2),clearTimeout(s),l(0)):t||(a=1)))}return l(0),i=setTimeout(()=>{o=!0,g(!0)},n),g}function q(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return void 0!==t}function K(t){return"object"===typeof t&&!Array.isArray(t)}function $(t){return"string"===typeof t||t instanceof String}function G(t,e,n,r){if(r<e)throw L(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw L(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(W||(W={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class X{constructor(t,e,n,r,s,i,o,a,c,u,h){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new Q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===W.NO_ERROR,s=n.getStatus();if(!e||this.isRetryStatusCode_(s)){const e=n.getErrorCode()===W.ABORT;return void t(!1,new Q(!1,null,e))}const i=-1!==this.successCodes_.indexOf(s);t(!0,new Q(i,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());B(t)?n(t):n()}catch(i){r(i)}else if(null!==s){const t=T();t.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,t)):r(t)}else if(e.canceled){const t=this.appDelete_?P():O();r(t)}else{const t=k();r(t)}};this.canceled_?e(!1,new Q(!1,null,!0)):this.backoffId_=F(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&q(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),s=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||s}}class Q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function Y(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function J(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Z(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tt(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function et(t,e,n,r,s,i){const o=z(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Z(c,e),Y(c,n),J(c,i),tt(c,r),new X(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function nt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return K(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function st(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function it(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e){return e}class at{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||ot}}let ct=null;function ut(t){return!$(t)||t.length<2?t:it(t)}function ht(){if(ct)return ct;const t=[];function e(t,e){return ut(e)}t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));const n=new at("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const s=new at("size");return s.xform=r,t.push(s),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),ct=t,ct}function lt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],s=new U(n,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function dt(t,e,n){const r={type:"file"},s=n.length;for(let i=0;i<s;i++){const t=n[i];r[t.local]=t.xform(r,e[t.server])}return lt(r,t),r}function ft(t,e,n){const r=nt(e);if(null===r)return null;const s=r;return dt(t,s,n)}function pt(t,e,n,r){const s=nt(e);if(null===s)return null;if(!$(s["downloadTokens"]))return null;const i=s["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,a=i.split(","),c=a.map(e=>{const s=t["bucket"],i=t["fullPath"],a="/b/"+o(s)+"/o/"+o(i),c=H(a,n,r),u=z({alt:"media",token:e});return c+u});return c[0]}class gt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){if(!t)throw T()}function yt(t,e){function n(n,r){const s=ft(t,r,e);return mt(null!==s),pt(s,r,t.host,t._protocol)}return n}function vt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?A():S():402===e.getStatus()?_(t.bucket):403===e.getStatus()?C(t.path):n,r.serverResponse=n.serverResponse,r}return e}function wt(t){const e=vt(t);function n(n,r){let s=e(n,r);return 404===n.getStatus()&&(s=I(t.path)),s.serverResponse=r.serverResponse,s}return n}function bt(t,e,n){const r=e.fullServerUrl(),s=H(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new gt(s,i,yt(t,n),o);return a.errorHandler=wt(e),a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
let Et=null;class Tt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=W.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=W.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw j("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw j("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class It extends Tt{initXhr(){this.xhr_.responseType="text"}}function _t(){return Et?Et():new It}
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
class St{constructor(t,e){this._service=t,this._location=e instanceof U?e:U.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new St(t,e)}get root(){const t=new U(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return it(this._location.path)}get storage(){return this._service}get parent(){const t=rt(this._location.path);if(null===t)return null;const e=new U(this._location.bucket,t);return new St(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw M(t)}}function At(t){t._throwIfRoot("getDownloadURL");const e=bt(t.storage,t._location,ht());return t.storage.makeRequestWithTokens(e,_t).then(t=>{if(null===t)throw x();return t})}function Ct(t,e){const n=st(t._location.path,e),r=new U(t._location.bucket,n);return new St(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){return/^[A-Za-z]+:\/\//.test(t)}function Ot(t,e){return new St(t,e)}function Rt(t,e){if(t instanceof xt){const n=t;if(null==n._bucket)throw D();const r=new St(n,n._bucket);return null!=e?Rt(r,e):r}return void 0!==e?Ct(t,e):t}function Nt(t,e){if(e&&kt(e)){if(t instanceof xt)return Ot(t,e);throw L("To use ref(service, url), the first argument must be a Storage instance.")}return Rt(t,e)}function Dt(t,e){const n=null===e||void 0===e?void 0:e[y];return null==n?null:U.makeFromBucketSpec(n,t)}class xt{constructor(t,e,n,r,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=m,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=v,this._maxUploadRetryTime=w,this._requests=new Set,this._bucket=null!=r?U.makeFromBucketSpec(r,this._host):Dt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=U.makeFromBucketSpec(this._url,t):this._bucket=Dt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){G("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){G("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new St(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new V(P());{const s=et(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Lt="@firebase/storage",Pt="0.9.0",Mt="storage";function jt(t){return t=Object(p["f"])(t),At(t)}function Ut(t,e){return t=Object(p["f"])(t),Nt(t,e)}function Vt(t=Object(f["e"])(),e){t=Object(p["f"])(t);const n=Object(f["b"])(t,Mt),r=n.getImmediate({identifier:e});return r}function Ft(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xt(n,r,s,e,f["a"])}function qt(){Object(f["c"])(new g["a"](Mt,Ft,"PUBLIC").setMultipleInstances(!0)),Object(f["g"])(Lt,Pt,""),Object(f["g"])(Lt,Pt,"esm2017")}qt();var Bt=function(t){return Object(r["C"])("data-v-7a927e56"),t=t(),Object(r["A"])(),t},Kt={class:"anime-item-head inner"},$t=Bt((function(){return Object(r["h"])("h1",{class:"blind"},"뷰플릭스",-1)})),Gt={key:0,class:"navigation"},Ht=Bt((function(){return Object(r["h"])("button",{class:"overflow-btn",title:"더보기 메뉴"},null,-1)})),zt={class:"anime-info"},Wt=["src","alt"],Xt={class:"col-right"},Qt={class:"sub-info"},Yt={class:"division-pipe"},Jt={class:"division-pipe"},Zt={class:"division-pipe"},te={class:"title"},ee={class:"genres"},ne={class:"star-rating"},re={class:"anime-interact-btn-area"},se=Object(r["j"])("보고싶다"),ie=Object(r["j"])("별점주기");function oe(t,e,n,s,i,o){var a=Object(r["H"])("icon-arrow-prev"),c=Object(r["H"])("icon-base"),u=Object(r["H"])("icon-wanna-see"),h=Object(r["H"])("anime-action-btn"),l=Object(r["H"])("icon-star-rating");return Object(r["z"])(),Object(r["g"])("div",Kt,[$t,i.isMobile?(Object(r["z"])(),Object(r["g"])("div",Gt,[Object(r["h"])("button",{class:"back",onClick:e[0]||(e[0]=function(){return o.goBack&&o.goBack.apply(o,arguments)})},[Object(r["k"])(c,{iconName:"뒤로가기"},{default:Object(r["P"])((function(){return[Object(r["k"])(a)]})),_:1})]),Ht])):Object(r["f"])("",!0),Object(r["h"])("div",zt,[Object(r["h"])("div",{class:Object(r["q"])(["poster","loading-target",{"poster--loaded":n.poster}])},[Object(r["h"])("img",{src:n.poster,alt:"".concat(n.title," 포스터")},null,8,Wt)],2),Object(r["h"])("div",Xt,[Object(r["h"])("div",{class:Object(r["q"])(["row-top","loading-target",{"row-top--loaded":n.type&&n.rating&&n.title}])},[Object(r["h"])("p",Qt,[Object(r["h"])("span",Yt,Object(r["K"])(n.type),1),Object(r["h"])("span",Jt,Object(r["K"])(n.rating),1),Object(r["h"])("span",Zt,Object(r["K"])(n.isEnd?"완결":"방영중"),1)]),Object(r["h"])("h2",te,Object(r["K"])(n.title),1)],2),Object(r["h"])("div",{class:Object(r["q"])(["row-bottom","loading-target",{"row-bottom--loaded":n.genres&&n.starRatingAvg}])},[Object(r["h"])("ul",ee,[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(n.genres,(function(t){return Object(r["z"])(),Object(r["g"])("li",{key:t,class:"genre division-pipe"},Object(r["K"])(t),1)})),128))]),Object(r["h"])("p",ne,"별점 "+Object(r["K"])(n.starRatingAvg),1)],2)])]),Object(r["h"])("div",re,[Object(r["k"])(h,{onClick:o.wannaSeeToggle,isEnabled:i.wannaSeeBool,type:"wanna-see"},{icon:Object(r["P"])((function(){return[Object(r["k"])(u)]})),label:Object(r["P"])((function(){return[se]})),_:1},8,["onClick","isEnabled"]),Object(r["k"])(h,{onClick:o.starModalOpen,isEnabled:n.isUserRated,type:"star-rating"},{icon:Object(r["P"])((function(){return[Object(r["k"])(l)]})),label:Object(r["P"])((function(){return[ie]})),_:1},8,["onClick","isEnabled"])])])}n("a9e3");var ae=n("4a42"),ce=n("5f9d");function ue(t,e,n,s,i,o){var a=Object(r["H"])("icon-base");return Object(r["z"])(),Object(r["g"])("button",{class:Object(r["q"])(["anime-interact-btn",{"anime-interact-btn--wanna-see":n.isEnabled&&"wanna-see"===n.type},{"anime-interact-btn--star-rating":n.isEnabled&&"star-rating"===n.type}])},[Object(r["k"])(a,{iconName:"ddd",class:"icon"},{default:Object(r["P"])((function(){return[Object(r["G"])(t.$slots,"icon",{},void 0,!0)]})),_:3}),Object(r["G"])(t.$slots,"label",{},void 0,!0)],2)}var he={name:"AnimeInteractBtn",components:{IconBase:ae["a"]},props:{isEnabled:{type:Boolean,default:!1},type:{type:String}}},le=(n("8b94"),n("6b0d")),de=n.n(le);const fe=de()(he,[["render",ue],["__scopeId","data-v-2e7249fc"]]);var pe=fe,ge=n("c9ed"),me={d:"M12.75,3.55,13.88,7a2.46,2.46,0,0,0,2.34,1.71h3.65a.79.79,0,0,1,.46,1.43L17.85,12a3.25,3.25,0,0,0-1.18,3.64l.94,2.92a.79.79,0,0,1-1.21.89l-2.95-2.15a2.49,2.49,0,0,0-2.9,0l-3,2.15a.79.79,0,0,1-1.21-.89L7.51,15a2.46,2.46,0,0,0-.89-2.75L3.67,10.15a.79.79,0,0,1,.46-1.43H7.78A2.46,2.46,0,0,0,10.12,7l1.13-3.46A.79.79,0,0,1,12.75,3.55Z"};function ye(t,e){return Object(r["z"])(),Object(r["g"])("path",me)}const ve={},we=de()(ve,[["render",ye]]);var be=we,Ee={components:{IconBase:ae["a"],IconArrowPrev:ce["a"],AnimeActionBtn:pe,IconWannaSee:ge["a"],IconStarRating:be},name:"AnimeItemHead",props:{title:{type:String},poster:{type:String},type:{type:String},rating:{type:String},isEnd:{type:Boolean},isUserRated:{type:Boolean},genres:{type:Array},starRatingAvg:{type:Number}},created:function(){window.addEventListener("resize",this.checkResolution)},unmounted:function(){window.removeEventListener("resize",this.checkResolution)},data:function(){return{wannaSeeBool:!1,isMobile:window.innerWidth<=768}},methods:{goBack:function(){return this.$router.go(-1)},wannaSeeToggle:function(){this.wannaSeeBool=!this.wannaSeeBool},checkResolution:function(){this.isMobile=window.innerWidth<=768},starModalOpen:function(){this.$emit("starModalOpened")}}};n("50bd");const Te=de()(Ee,[["render",oe],["__scopeId","data-v-7a927e56"]]);var Ie=Te,_e=n("714b"),Se={components:{AnimeItemHead:Ie,Modal:_e["a"]},name:"anime",mounted:function(){document.title="".concat(this.$route.params.id," 다시보기"),this.animeInit()},data:function(){return{animeInfo:[],myRating:0,isStarRatingOpened:!1}},methods:{getRawData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(d["c"])(),r=Object(d["a"])(n,"anime"),s=Object(d["d"])(r,Object(d["e"])("name","==",t.$route.params.id)),e.prev=3,e.next=6,Object(d["b"])(s);case 6:if(i=e.sent,0===i.docs.length){e.next=12;break}return o=i.docs[0].data(),e.abrupt("return",o);case 12:console.error("존재하지 않는 작품입니다");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),console.error("통신문제");case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()},animeInit:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Vt(),e.next=3,t.getRawData();case 3:return r=e.sent,s=Ut(n,r.poster),e.prev=5,e.next=8,jt(s);case 8:i=e.sent,t.animeInfo=Object(h["a"])(Object(h["a"])({},r),{},{poster:i}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](5),console.error("포스터 정보가 존재하지 않습니다");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()},starModalOpen:function(){this.isStarRatingOpened=!0},starModalClose:function(t){this.myRating=t,this.isStarRatingOpened=!1}}};n("b2c5");const Ae=de()(Se,[["render",u],["__scopeId","data-v-c7907f3e"]]);e["default"]=Ae},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return Rr})),n.d(e,"c",(function(){return Or})),n.d(e,"d",(function(){return Dr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return xr})),n.d(e,"g",(function(){return Lr})),n.d(e,"h",(function(){return Ar})),n.d(e,"i",(function(){return Cr}));var r,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=s||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function w(){this.s=this.s,this.o=this.o}var b=0,E={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=b)){var t=l(this);delete E[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function _(t){t:{var e=Bn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var k,O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function R(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var D=a.navigator;if(D){var x=D.userAgent;if(x){k=x;break t}}k=""}function L(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}function V(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=c;var F,q=R(k,"Opera"),B=R(k,"Trident")||R(k,"MSIE"),K=R(k,"Edge"),$=K||B,G=R(k,"Gecko")&&!(R(k.toLowerCase(),"webkit")&&!R(k,"Edge"))&&!(R(k,"Trident")||R(k,"MSIE"))&&!R(k,"Edge"),H=R(k.toLowerCase(),"webkit")&&!R(k,"Edge");function z(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",X=function(){var t=k;return G?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(X&&(W=X?X[1]:""),B){var Q=z();if(null!=Q&&Q>parseFloat(W)){F=String(Q);break t}}F=W}var Y,J={};function Z(){return V((function(){let t=0;const e=O(String(F)).split("."),n=O("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=N(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||N(0==s[2].length,0==i[2].length)||N(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=z();Y=tt||(parseInt(F,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function st(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{U(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(st,rt);var it={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=T(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}ht.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dt(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,s){if(r&&r.once)return vt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,r,s);return null}return n=St(n),t&&t[ot]?t.N(e,n,h(r)?!!r.capture:!!r,s):mt(t,e,n,!1,r,s)}function mt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=h(s)?!!s.capture:!!s,a=It(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function vt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,r,s);return null}return n=St(n),t&&t[ot]?t.O(e,n,h(r)?!!r.capture:!!r,s):mt(t,e,n,!0,r,s)}function wt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)wt(t,e[i],n,r,s);else r=h(r)?!!r.capture:!!r,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dt(i,n,r,s),-1<n&&(ut(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,s)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new st(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&bt(t),t=n.call(r,e)}return t}function It(t){return t=t[ft],t instanceof ht?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function At(){w.call(this),this.i=new ht(this),this.P=this,this.I=null}function Ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),j(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=kt(o,r,!0,e)&&s}if(o=e.g=t,s=kt(o,r,!0,e)&&s,s=kt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=kt(o,r,!1,e)&&s}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}v(At,w),At.prototype[ot]=!0,At.prototype.removeEventListener=function(t,e,n,r){wt(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ot=a.JSON.stringify;function Rt(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lt,t=>t.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Dt||jt(),Ut||(Dt(),Ut=!0),Vt.add(t,e)}function jt(){var t=a.Promise.resolve(void 0);Dt=function(){t.then(Ft)}}var Ut=!1,Vt=new Nt;function Ft(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function qt(t,e){At.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function $t(t){t.g=Kt(()=>{t.g=null,t.i&&(t.i=!1,$t(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(qt,At),r=qt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ct(this,"tick"),this.da&&(Bt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qt.Z.M.call(this),Bt(this),delete this.g};class Gt extends w{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$t(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){w.call(this),this.h=t,this.g={}}v(Ht,w);var zt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var s=0;s<n.length;s++){var i=gt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Xt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Qt(){this.g=!0}function Yt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ot(n)}catch(a){return e}}Ht.prototype.M=function(){Ht.Z.M.call(this),Xt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ne={},re=null;function se(){return re=re||new At}function ie(t){rt.call(this,ne.Ma,t)}function oe(t){const e=se();Ct(e,new ie(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=se();Ct(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(ie,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function we(){rt.call(this,"c")}function be(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ht(this),this.P=Ie,t=$?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(we,rt),v(be,fe),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},me=new be;var Ie=45e3,_e={},Se={};function Ae(t,e,n){t.K=1,t.v=Ye(Ge(e)),t.s=n,t.U=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),Ne(t),t.A=Ge(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Te,t.g=wr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?P(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Oe(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Re(t,n),r==Se){4==e&&(t.o=4,ce(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==_e){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}ke(t)&&r!=Se&&r!=_e&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Le(t))}function Re(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?_e:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,De(t,t.P)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(m(t.eb,t),e)}function xe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||pr(t.l,t)}function Pe(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Xt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}hr(n),ce(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(m(n.ab,n),6e3));if(1>=bn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!C(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(R(t,"spdy")||R(t,"quic")||R(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Tn(i,i.h),i.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Qe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){In(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(xe(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&sr(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=je(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ve(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ve)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Fe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],qe(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ee.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),xe(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Xn(this.g);t="";var s=r.length,i=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Le(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ce(12),Pe(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(Oe(this,l,o),$&&this.i&&3==l&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==l&&Pe(this),this.i&&!this.I&&(4==l?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Pe(this),Le(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(xe(this),Oe(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Pe(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Pe(this),this.o=2,Le(this)):De(this,this.Y-t)},r=Ve.prototype,r.R=function(){Fe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Fe(this),this.g.concat()},r.get=function(t,e){return qe(this.h,t)?this.h[t]:e},r.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $e(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $e){this.g=void 0!==e?e:t.g,He(this,t.j),this.s=t.s,ze(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ve(e.g),n.h=e.h),Xe(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,He(this,n[1]||"",!0),this.s=tn(n[2]||""),ze(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Xe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ge(t){return new $e(t)}function He(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Qe(t,e,n){t.h.set(e,n)}function Ye(t){return Qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof $e?Ge(t):new $e(t,void 0)}function Ze(t,e,n,r){var s=new $e(null,void 0);return t&&He(s,t),e&&ze(s,e),n&&We(s,n),r&&(s.l=r),s}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}$e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Ve,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=pn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Fe(t)))}function dn(t,e){return hn(t),e=pn(t,e),qe(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),A(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){hn(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){hn(this),this.g.forEach((function(n,r){I(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},r.R=function(t){hn(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return hn(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function bn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _n(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Sn(){}function An(){this.g=new Sn}function Cn(t,e,n){const r=n||"";try{Ue(t,(function(t,n){let s=t;h(t)&&(s=Ot(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function kn(t,e){const n=new Qt;if(a.Image){const r=new Image;r.onload=y(On,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(On,n,r,"TestLoadImage: error",!1,e),r.onabort=y(On,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(On,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function On(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Rn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=_n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(Rn,fe),Rn.prototype.g=function(){return new Nn(this.l,this.j)},Rn.prototype.i=function(t){return function(){return t}}({}),v(Nn,At);var Dn=0;function xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pn(t)}function Pn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=Dn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ln(this):Pn(this),3==this.readyState&&xn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Ln(this))},r.Ta=function(t){this.g&&(this.response=t,Ln(this))},r.ha=function(){this.g&&Ln(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function jn(t){At.call(this),this.headers=new Ve,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}v(jn,At);var Un="",Vn=/^https?$/i,Fn=["POST","PUT"];function qn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$n(t),Hn(t)}function $n(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Kt(t.Fa,0,t);else if(Ct(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.H).match(Be)[1]||null;if(!s&&a.self&&a.self.location){var i=a.self.location.protocol;s=i.substr(0,i.length-1)}r=!Vn.test(s?s.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",$n(t)}}finally{Hn(t)}}}function Hn(t,e){if(t.g){zn(t);const r=t.g,s=t.C[0]?c:null;t.g=null,t.C=null,e||Ct(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function zn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Qn(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Qn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Qe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Qt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ge(t.F);Qe(n,"SID",t.J),Qe(n,"RID",e),Qe(n,"TYPE","terminate"),ar(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ye(Ge(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=wr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yr(t)}function er(t){t.g&&(lr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&sr(t)}function sr(t){wn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function ir(t,e){return!(bn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=Ge(t.F);Qe(r,"SID",t.J),Qe(r,"RID",n),Qe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Yn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),Ae(n,r,e)}function ar(t,e){t.j&&Ue({},(function(t,n){Qe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=e,0>n)e=Math.max(0,s[a].h-100),o=!1;else try{Cn(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function hr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function lr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);Qe(e,"RID","rpc"),Qe(e,"SID",t.J),Qe(e,"CI",t.N?"0":"1"),Qe(e,"AID",t.U),ar(t,e),Qe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(Ge(e)),n.s=null,n.U=!0,Ce(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),lr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,In(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=se(),Ct(r,new ue(r,n,e,s)),sr(t)}else ur(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&ir(t,e)||2==r&&hr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new $e("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||He(n,"https"),Ye(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==_n(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&ze(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Qe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Qe(r,e,n),Qe(r,"VER",t.ma),ar(t,r),r}function wr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new Rn({ib:!0})):new jn(t.qa),e.L=t.H,e}function br(){}function Er(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Tr(t,e){At.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Ir(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function _r(){we.call(this),this.status=1}function Sr(t){this.g=t}r=jn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Kn(this,i)}t=n||"";const s=new Ve(this.headers);r&&Ue(r,(function(t,e){s.set(e,t)})),r=_(s.T()),n=a.FormData&&t instanceof a.FormData,!(0<=T(Fn,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kn(this,i)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Hn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hn(this,!0)),jn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ee(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=P(i),j(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,s,e),n=Ge(this.F),Qe(n,"RID",t),Qe(n,"CVER",22),this.D&&Qe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&i&&Yn(n,this.o,i),Tn(this.i,s),this.Ra&&Qe(n,"TYPE","init"),this.ja?(Qe(n,"$req",e),Qe(n,"SID","null"),s.$=!0,Ae(s,n,null)):Ae(s,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||wn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),hr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=br.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Er.prototype.g=function(t,e){return new Tr(t,e)},v(Tr,At),Tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),sr(t)},Tr.prototype.close=function(){tr(this.g)},Tr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ot(t),rr(this.g,e)):rr(this.g,t)},Tr.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Tr.Z.M.call(this)},v(Ir,ve),v(_r,we),v(Sr,br),Sr.prototype.xa=function(){Ct(this.g,"a")},Sr.prototype.wa=function(t){Ct(this.g,new Ir(t))},Sr.prototype.va=function(t){Ct(this.g,new _r(t))},Sr.prototype.ua=function(){Ct(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Tr.prototype.send=Tr.prototype.u,Tr.prototype.open=Tr.prototype.m,Tr.prototype.close=Tr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",At.prototype.listen=At.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Ar=i.createWebChannelTransport=function(){return new Er},Cr=i.getStatEventTarget=function(){return se()},kr=i.ErrorCode=le,Or=i.EventType=de,Rr=i.Event=ne,Nr=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Dr=i.FetchXmlHttpFactory=Rn,xr=i.WebChannel=ge,Lr=i.XhrIo=jn}).call(this,n("c8ba"))},a32a:function(t,e,n){},a4d3:function(t,e,n){"use strict";var r=n("23e7"),s=n("da84"),i=n("d066"),o=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),h=n("83ab"),l=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),g=n("1626"),m=n("861d"),y=n("3a9b"),v=n("d9b5"),w=n("825a"),b=n("7b0b"),E=n("fc6a"),T=n("a04b"),I=n("577e"),_=n("5c6c"),S=n("7c73"),A=n("df75"),C=n("241c"),k=n("057f"),O=n("7418"),R=n("06cf"),N=n("9bf2"),D=n("d1e7"),x=n("f36a"),L=n("6eeb"),P=n("5692"),M=n("f772"),j=n("d012"),U=n("90e3"),V=n("b622"),F=n("e538"),q=n("746f"),B=n("d44e"),K=n("69f3"),$=n("b727").forEach,G=M("hidden"),H="Symbol",z="prototype",W=V("toPrimitive"),X=K.set,Q=K.getterFor(H),Y=Object[z],J=s.Symbol,Z=J&&J[z],tt=s.TypeError,et=s.QObject,nt=i("JSON","stringify"),rt=R.f,st=N.f,it=k.f,ot=D.f,at=c([].push),ct=P("symbols"),ut=P("op-symbols"),ht=P("string-to-symbol-registry"),lt=P("symbol-to-string-registry"),dt=P("wks"),ft=!et||!et[z]||!et[z].findChild,pt=h&&d((function(){return 7!=S(st({},"a",{get:function(){return st(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=rt(Y,e);r&&delete Y[e],st(t,e,n),r&&t!==Y&&st(Y,e,r)}:st,gt=function(t,e){var n=ct[t]=S(Z);return X(n,{type:H,tag:t,description:e}),h||(n.description=e),n},mt=function(t,e,n){t===Y&&mt(ut,e,n),w(t);var r=T(e);return w(n),f(ct,r)?(n.enumerable?(f(t,G)&&t[G][r]&&(t[G][r]=!1),n=S(n,{enumerable:_(0,!1)})):(f(t,G)||st(t,G,_(1,{})),t[G][r]=!0),pt(t,r,n)):st(t,r,n)},yt=function(t,e){w(t);var n=E(e),r=A(n).concat(Tt(n));return $(r,(function(e){h&&!a(wt,n,e)||mt(t,e,n[e])})),t},vt=function(t,e){return void 0===e?S(t):yt(S(t),e)},wt=function(t){var e=T(t),n=a(ot,this,e);return!(this===Y&&f(ct,e)&&!f(ut,e))&&(!(n||!f(this,e)||!f(ct,e)||f(this,G)&&this[G][e])||n)},bt=function(t,e){var n=E(t),r=T(e);if(n!==Y||!f(ct,r)||f(ut,r)){var s=rt(n,r);return!s||!f(ct,r)||f(n,G)&&n[G][r]||(s.enumerable=!0),s}},Et=function(t){var e=it(E(t)),n=[];return $(e,(function(t){f(ct,t)||f(j,t)||at(n,t)})),n},Tt=function(t){var e=t===Y,n=it(e?ut:E(t)),r=[];return $(n,(function(t){!f(ct,t)||e&&!f(Y,t)||at(r,ct[t])})),r};if(l||(J=function(){if(y(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?I(arguments[0]):void 0,e=U(t),n=function(t){this===Y&&a(n,ut,t),f(this,G)&&f(this[G],e)&&(this[G][e]=!1),pt(this,e,_(1,t))};return h&&ft&&pt(Y,e,{configurable:!0,set:n}),gt(e,t)},Z=J[z],L(Z,"toString",(function(){return Q(this).tag})),L(J,"withoutSetter",(function(t){return gt(U(t),t)})),D.f=wt,N.f=mt,R.f=bt,C.f=k.f=Et,O.f=Tt,F.f=function(t){return gt(V(t),t)},h&&(st(Z,"description",{configurable:!0,get:function(){return Q(this).description}}),u||L(Y,"propertyIsEnumerable",wt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:J}),$(A(dt),(function(t){q(t)})),r({target:H,stat:!0,forced:!l},{for:function(t){var e=I(t);if(f(ht,e))return ht[e];var n=J(e);return ht[e]=n,lt[n]=e,n},keyFor:function(t){if(!v(t))throw tt(t+" is not a symbol");if(f(lt,t))return lt[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!h},{create:vt,defineProperty:mt,defineProperties:yt,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:Et,getOwnPropertySymbols:Tt}),r({target:"Object",stat:!0,forced:d((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(b(t))}}),nt){var It=!l||d((function(){var t=J();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));r({target:"JSON",stat:!0,forced:It},{stringify:function(t,e,n){var r=x(arguments),s=e;if((m(e)||void 0!==t)&&!v(t))return p(e)||(e=function(t,e){if(g(s)&&(e=a(s,this,t,e)),!v(e))return e}),r[1]=e,o(nt,null,r)}})}if(!Z[W]){var _t=Z.valueOf;L(Z,W,(function(t){return a(_t,this)}))}B(J,H),j[G]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a7e4:function(t,e,n){},b2c5:function(t,e,n){"use strict";n("a32a")},b64b:function(t,e,n){var r=n("23e7"),s=n("7b0b"),i=n("df75"),o=n("d039"),a=o((function(){i(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return i(s(t))}})},c1bf:function(t,e,n){},c9ed:function(t,e,n){"use strict";var r=n("7a23"),s={d:"M12,20,4.57,13.09a5,5,0,0,1,.74-6.83,4.7,4.7,0,0,1,6.6.73L12,7.1,12.09,7a4.7,4.7,0,0,1,6.6-.73,5,5,0,0,1,.74,6.83Z"};function i(t,e){return Object(r["z"])(),Object(r["g"])("path",s)}var o=n("6b0d"),a=n.n(o);const c={},u=a()(c,[["render",i]]);e["a"]=u},dbb4:function(t,e,n){var r=n("23e7"),s=n("83ab"),i=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),s=a.f,u=i(r),h={},l=0;while(u.length>l)n=s(r,e=u[l++]),void 0!==n&&c(h,e,n);return h}})},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){n=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(n,r)}function s(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return t=n(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var s=r(t.split("/")),i=r(n.split("/")),o=Math.min(s.length,i.length),a=o,c=0;c<o;c++)if(s[c]!==i[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,s=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!s){r=i;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,s=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(s=!1,r=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!s){n=o+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e439:function(t,e,n){var r=n("23e7"),s=n("d039"),i=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=s((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-7fda22b1.2ea2dae8.js.map