(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76370ded"],{"0d57":function(t,e,n){"use strict";n("a887")},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function r(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))}}},"2e2b":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o={class:"btn-area"},i=Object(r["j"])(" Google 계정으로 계속하기 "),c={class:"btn-row-bottom"},a=Object(r["j"])("페이스북으로 계속하기");function u(t,e,n,u,s,l){var f=Object(r["H"])("icon-google"),h=Object(r["H"])("vueflix-btn"),p=Object(r["H"])("icon-facebook");return Object(r["z"])(),Object(r["g"])("div",o,[Object(r["k"])(h,{component:"button",icon:!0,type:"button",to:"/auth/by-email",class:"btn--google",onClick:l.googleContinue},{icon:Object(r["Q"])((function(){return[Object(r["k"])(f)]})),text:Object(r["Q"])((function(){return[i]})),_:1},8,["onClick"]),Object(r["h"])("div",c,[Object(r["k"])(h,{component:"button",icon:!0,type:"button",to:"/auth/sign-up",class:"btn--facebook",onClick:l.facebookContinue},{icon:Object(r["Q"])((function(){return[Object(r["k"])(p)]})),text:Object(r["Q"])((function(){return[a]})),_:1},8,["onClick"])])])}var s=n("1da1"),l=(n("96cf"),n("ea7b")),f=n("3291"),h={transform:"matrix(1, 0, 0, 1, 27.009001, -39.238998)"},p=Object(r["h"])("path",{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"},null,-1),d=Object(r["h"])("path",{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"},null,-1),v=Object(r["h"])("path",{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"},null,-1),y=Object(r["h"])("path",{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"},null,-1),b=[p,d,v,y];function g(t,e){return Object(r["z"])(),Object(r["g"])("g",h,b)}var m=n("6b0d"),w=n.n(m);const j={},O=w()(j,[["render",g]]);var L=O,x={d:"M12,0a12,12,0,0,0-2,23.87l.07-.06H10V15.33H7V12h3V9.33a4.33,4.33,0,0,1,4.67-4.66,18.43,18.43,0,0,1,2.66.26V8H15.8C14.33,8,14,8.73,14,9.67V12h3.2l-.53,3.33H14V23.8h-.07l.07.06A12,12,0,0,0,12,0Z"};function k(t,e){return Object(r["z"])(),Object(r["g"])("path",x)}const C={},E=w()(C,[["render",k]]);var _=E,G={name:"Auth",components:{VueflixBtn:f["a"],IconGoogle:L,IconFacebook:_},data:function(){return{nickname:"",email:"",password:""}},methods:{googleContinue:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(l["d"])(),r=new l["b"],e.next=4,Object(l["g"])(n,r);case 4:t.$router.go(-2);case 5:case"end":return e.stop()}}),e)})))()},facebookContinue:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(l["d"])(),r=new l["a"],e.next=4,Object(l["g"])(n,r);case 4:t.$router.go(-2);case 5:case"end":return e.stop()}}),e)})))()}}};n("0d57");const F=w()(G,[["render",u],["__scopeId","data-v-70a12185"]]);e["default"]=F},3291:function(t,e,n){"use strict";var r=n("7a23"),o={key:0,class:"icon"},i={class:"text"};function c(t,e,n,c,a,u){var s=Object(r["H"])("icon-base");return Object(r["z"])(),Object(r["e"])(Object(r["J"])(n.component),{class:"btn",type:n.type},{default:Object(r["Q"])((function(){return[n.icon?(Object(r["z"])(),Object(r["g"])("i",o,[Object(r["k"])(s,null,{default:Object(r["Q"])((function(){return[Object(r["G"])(t.$slots,"icon")]})),_:3})])):Object(r["f"])("",!0),Object(r["h"])("span",i,[Object(r["G"])(t.$slots,"text")])]})),_:3},8,["type"])}var a=n("4a42"),u={name:"VueflixFuncBtn",props:{type:{type:String,default:"button"},component:{type:String},icon:{type:Boolean}},components:{IconBase:a["a"]}},s=n("6b0d"),l=n.n(s);const f=l()(u,[["render",c]]);e["a"]=f},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new G(r||[]);return i._invoke=k(t,n,c),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function b(){}function g(){}var m={};u(m,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(F([])));j&&j!==n&&r.call(j,i)&&(m=j);var O=g.prototype=y.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,c,a){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function k(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return H()}n.method=o,n.arg=i;while(1){var c=n.delegate;if(c){var a=C(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function F(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:H}}function H(){return{value:e,done:!0}}return b.prototype=g,u(O,"constructor",g),u(g,"constructor",b),b.displayName=u(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,a,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},L(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},L(O),u(O,a,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=F,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},a887:function(t,e,n){}}]);
//# sourceMappingURL=chunk-76370ded.92ef5c34.js.map