(function(e){function n(n){for(var r,o,u=n[0],i=n[1],f=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0cde9ffc":"f130b467","chunk-1278f05a":"54f33afe","chunk-3a7c7888":"7554bc90","chunk-cc551258":"2e14783c","chunk-e3b3d294":"440fc9e2"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0cde9ffc":1,"chunk-1278f05a":1,"chunk-3a7c7888":1,"chunk-cc551258":1,"chunk-e3b3d294":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0cde9ffc":"a8dbfd51","chunk-1278f05a":"5cf409ce","chunk-3a7c7888":"a8dbfd51","chunk-cc551258":"a8dbfd51","chunk-e3b3d294":"a8dbfd51"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var f=a[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){f=d[u],l=f.getAttribute("data-href");if(l===r||l===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),t(a)},s.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var s=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"41ac":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("3ca3"),t("ddb0"),t("99af");var r=t("6c02"),o=new Date,c=o.getFullYear(),a=o.getMonth(),u=(a+3)/3,i=[{path:"/",name:"Home",component:function(){return t.e("chunk-1278f05a").then(t.bind(null,"bb51"))},meta:{title:"뷰플릭스 - 합법적 애니 스트리밍"}},{path:"/tagsearch",name:"TagSearch",component:function(){return t.e("chunk-e3b3d294").then(t.bind(null,"87af"))},meta:{title:"필터로 취향저격 애니찾기"}},{path:"/daily",name:"Daily",component:function(){return t.e("chunk-3a7c7888").then(t.bind(null,"6312"))},meta:{title:"".concat(c,"년 ").concat(u,"분기 신작 애니 편성표")}},{path:"/recommend",name:"Recommend",component:function(){return t.e("chunk-cc551258").then(t.bind(null,"4802"))},meta:{title:"테마별 애니 추천"}},{path:"/membership",name:"Membership",component:function(){return t.e("chunk-0cde9ffc").then(t.bind(null,"daab"))},meta:{title:"뷰플릭스 멤버십 및 포인트 충전"}}],f=Object(r["a"])({history:Object(r["b"])(),routes:i}),l=t("7a23");function d(e,n,t,r,o,c){var a=Object(l["y"])("router-view");return Object(l["q"])(),Object(l["e"])(a)}var s={name:"App"};t("bba1");s.render=d;var h=s,p=t("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var b=Object(l["d"])(h),m="뷰플릭스";f.afterEach((function(e){Object(l["m"])((function(){document.title=e.meta.title||m}))})),b.use(f).mount("#app")},bba1:function(e,n,t){"use strict";t("41ac")}});
//# sourceMappingURL=app.17b11af0.js.map