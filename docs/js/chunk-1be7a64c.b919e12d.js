(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1be7a64c"],{"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(e){try{return i(e)}catch(t){return c.slice()}};e.exports.f=function(e){return c&&"[object Window]"==o.call(e)?f(e):i(r(e))}},"0e54":function(e,t,n){"use strict";n("778a")},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),c=n("9112");for(var f in i){var s=r[f],a=s&&s.prototype;if(a&&a.forEach!==o)try{c(a,"forEach",o)}catch(u){a.forEach=o}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),c=o("filter");r({target:"Array",proto:!0,forced:!c},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},6181:function(e,t,n){"use strict";n("eba8")},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),o=n("e538"),c=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||c(t,e,{value:o.f(e)})}},"778a":function(e,t,n){},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),c=n("c430"),f=n("83ab"),s=n("4930"),a=n("fdbf"),u=n("d039"),l=n("5135"),b=n("e8b5"),d=n("861d"),h=n("825a"),p=n("7b0b"),O=n("fc6a"),g=n("c04e"),v=n("5c6c"),j=n("7c73"),y=n("df75"),m=n("241c"),w=n("057f"),S=n("7418"),P=n("06cf"),M=n("9bf2"),k=n("d1e7"),D=n("9112"),N=n("6eeb"),C=n("5692"),x=n("f772"),B=n("d012"),E=n("90e3"),I=n("b622"),V=n("e538"),_=n("746f"),H=n("d44e"),L=n("69f3"),W=n("b727").forEach,A=x("hidden"),F="Symbol",G="prototype",J=I("toPrimitive"),Z=L.set,T=L.getterFor(F),$=Object[G],K=i.Symbol,Q=o("JSON","stringify"),R=P.f,q=M.f,z=w.f,U=k.f,X=C("symbols"),Y=C("op-symbols"),ee=C("string-to-symbol-registry"),te=C("symbol-to-string-registry"),ne=C("wks"),re=i.QObject,ie=!re||!re[G]||!re[G].findChild,oe=f&&u((function(){return 7!=j(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=R($,t);r&&delete $[t],q(e,t,n),r&&e!==$&&q($,t,r)}:q,ce=function(e,t){var n=X[e]=j(K[G]);return Z(n,{type:F,tag:e,description:t}),f||(n.description=t),n},fe=a?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof K},se=function(e,t,n){e===$&&se(Y,t,n),h(e);var r=g(t,!0);return h(n),l(X,r)?(n.enumerable?(l(e,A)&&e[A][r]&&(e[A][r]=!1),n=j(n,{enumerable:v(0,!1)})):(l(e,A)||q(e,A,v(1,{})),e[A][r]=!0),oe(e,r,n)):q(e,r,n)},ae=function(e,t){h(e);var n=O(t),r=y(n).concat(he(n));return W(r,(function(t){f&&!le.call(n,t)||se(e,t,n[t])})),e},ue=function(e,t){return void 0===t?j(e):ae(j(e),t)},le=function(e){var t=g(e,!0),n=U.call(this,t);return!(this===$&&l(X,t)&&!l(Y,t))&&(!(n||!l(this,t)||!l(X,t)||l(this,A)&&this[A][t])||n)},be=function(e,t){var n=O(e),r=g(t,!0);if(n!==$||!l(X,r)||l(Y,r)){var i=R(n,r);return!i||!l(X,r)||l(n,A)&&n[A][r]||(i.enumerable=!0),i}},de=function(e){var t=z(O(e)),n=[];return W(t,(function(e){l(X,e)||l(B,e)||n.push(e)})),n},he=function(e){var t=e===$,n=z(t?Y:O(e)),r=[];return W(n,(function(e){!l(X,e)||t&&!l($,e)||r.push(X[e])})),r};if(s||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=E(e),n=function(e){this===$&&n.call(Y,e),l(this,A)&&l(this[A],t)&&(this[A][t]=!1),oe(this,t,v(1,e))};return f&&ie&&oe($,t,{configurable:!0,set:n}),ce(t,e)},N(K[G],"toString",(function(){return T(this).tag})),N(K,"withoutSetter",(function(e){return ce(E(e),e)})),k.f=le,M.f=se,P.f=be,m.f=w.f=de,S.f=he,V.f=function(e){return ce(I(e),e)},f&&(q(K[G],"description",{configurable:!0,get:function(){return T(this).description}}),c||N($,"propertyIsEnumerable",le,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:K}),W(y(ne),(function(e){_(e)})),r({target:F,stat:!0,forced:!s},{for:function(e){var t=String(e);if(l(ee,t))return ee[t];var n=K(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!fe(e))throw TypeError(e+" is not a symbol");if(l(te,e))return te[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!f},{create:ue,defineProperty:se,defineProperties:ae,getOwnPropertyDescriptor:be}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:de,getOwnPropertySymbols:he}),r({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(p(e))}}),Q){var pe=!s||u((function(){var e=K();return"[null]"!=Q([e])||"{}"!=Q({a:e})||"{}"!=Q(Object(e))}));r({target:"JSON",stat:!0,forced:pe},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(d(t)||void 0!==e)&&!fe(e))return b(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!fe(t))return t}),i[1]=t,Q.apply(null,i)}})}K[G][J]||D(K[G],J,K[G].valueOf),H(K,F),B[A]=!0},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),c=n("d039"),f=c((function(){o(1)}));r({target:"Object",stat:!0,forced:f},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),c=n("50c4"),f=n("65f0"),s=[].push,a=function(e){var t=1==e,n=2==e,a=3==e,u=4==e,l=6==e,b=7==e,d=5==e||l;return function(h,p,O,g){for(var v,j,y=o(h),m=i(y),w=r(p,O,3),S=c(m.length),P=0,M=g||f,k=t?M(h,S):n||b?M(h,0):void 0;S>P;P++)if((d||P in m)&&(v=m[P],j=w(v,P,y),e))if(t)k[P]=j;else if(j)switch(e){case 3:return!0;case 5:return v;case 6:return P;case 2:s.call(k,v)}else switch(e){case 4:return!1;case 7:s.call(k,v)}return l?-1:a||u?u:k}};e.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6),filterOut:a(7)}},cb55:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),i=Object(r["M"])("data-v-2083ffb8");Object(r["y"])("data-v-2083ffb8");var o={class:"change-profile"},c=Object(r["i"])("ul",{class:"alert"},[Object(r["i"])("li",null,"4개 이하의 프로필만 만들 수 있어요."),Object(r["i"])("li",null,"최소 1개의 프로필이 있어야 해요."),Object(r["i"])("li",null,"닉네임은 8글자보다 짧아야 해요.")],-1),f={class:"profiles"},s={class:"profile-items"},a={class:"icon"},u=Object(r["h"])(" 취소 "),l={class:"icon"},b={key:0,class:"warning"};Object(r["w"])();var d=i((function(e,t,n,d,h,p){var O=Object(r["D"])("profile"),g=Object(r["D"])("icon-plus"),v=Object(r["D"])("icon-base"),j=Object(r["D"])("vueflix-func-btn"),y=Object(r["D"])("icon-remove");return Object(r["v"])(),Object(r["e"])("main",o,[Object(r["i"])("h2",null,Object(r["G"])(h.infoString),1),c,Object(r["i"])("div",f,[Object(r["i"])("ul",s,[(Object(r["v"])(!0),Object(r["e"])(r["a"],null,Object(r["B"])(h.profiles,(function(e,t){return Object(r["v"])(),Object(r["e"])("li",{class:["profile-item",{selected:h.isDeleteMode&&e.isSelected}],key:e.name,onClick:function(e){return p.toggleSelected(t)}},[Object(r["i"])(O),Object(r["i"])("span",null,Object(r["G"])(e.name),1)],10,["onClick"])})),128))]),Object(r["i"])("div",{class:["btn-area",{center:h.isNewProfileMode||h.isDeleteMode||h.profiles.length>3}]},[!h.isDeleteMode&&h.profiles.length<=3?(Object(r["v"])(),Object(r["e"])(j,{key:0,class:"new",border:"1px solid var(--bg-200)",onClick:p.newProfile,ref:"newBtn"},{default:i((function(){return[Object(r["i"])("i",a,[Object(r["i"])(v,null,{default:i((function(){return[Object(r["i"])(g)]})),_:1})]),Object(r["h"])(" "+Object(r["G"])(h.newBtnString),1)]})),_:1},8,["onClick"])):Object(r["f"])("",!0),h.isDeleteMode||h.isNewProfileMode?(Object(r["v"])(),Object(r["e"])(j,{key:1,class:"cancel",border:"1px solid var(--bg-200)",onClick:p.cancel},{default:i((function(){return[u]})),_:1},8,["onClick"])):Object(r["f"])("",!0),h.isNewProfileMode?Object(r["f"])("",!0):(Object(r["v"])(),Object(r["e"])(j,{key:2,bg:"var(--theme-500)",border:"1px solid var(--theme-500)",onClick:p.editProfile,textColor:"var(--top-item)"},{default:i((function(){return[Object(r["i"])("i",l,[Object(r["i"])(v,null,{default:i((function(){return[Object(r["i"])(y)]})),_:1})]),Object(r["h"])(" "+Object(r["G"])(h.editBtnString),1)]})),_:1},8,["onClick"]))],2),Object(r["L"])(Object(r["i"])("input",{type:"text",placeholder:"새 프로필 이름을 입력하세요",class:"profile-name-input",ref:"nameInput",onKeyup:t[1]||(t[1]=function(e){return p.lengthCheck(e)})},null,544),[[r["I"],h.isNewProfileMode]]),h.isWrongLength&&h.isNewProfileMode?(Object(r["v"])(),Object(r["e"])("span",b," 너무 길어요 ")):Object(r["f"])("",!0)])])}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n("d81d");var g=n("66aa"),v=n("ff57"),j=n("4a42"),y={d:"M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7a1,1,0,0,0,0-2Z"};function m(e,t){return Object(r["v"])(),Object(r["e"])("path",y)}const w={};w.render=m;var S=w,P={d:"M19,6H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V6H5A1,1,0,0,0,5,8H6V20a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2ZM10,4h4V6H10Zm6,16H8V8h8Z"};function M(e,t){return Object(r["v"])(),Object(r["e"])("path",P)}const k={};k.render=M;var D=k,N={name:"ChangeProfile",components:{Profile:g["a"],VueflixFuncBtn:v["a"],IconBase:j["a"],IconPlus:S,IconRemove:D},data:function(){return{profiles:[{name:"미야조노 카오리",isSelected:!1}],notSelected:[],editBtnString:"편집",infoString:"사용할 프로필을 선택하세요",newBtnString:"새 프로필",isDeleteMode:!1,isWrongLength:!1,isNewProfileMode:!1,newProfileName:""}},methods:{editProfile:function(){this.isDeleteMode=!0,this.editBtnString="삭제",this.infoString="삭제할 프로필을 선택하세요",!this.isDeleteMode&&this.notSelected.length>=1&&(this.profiles=this.notSelected)},toggleSelected:function(e){this.isDeleteMode&&(this.profiles[e].isSelected=!this.profiles[e].isSelected),this.notSelected=this.profiles.filter((function(e){return!1===e.isSelected}))},newProfile:function(){this.isNewProfileMode=!0,this.$refs.nameInput.focus(),this.infoString="새로 만들 프로필의 이름을 입력하세요",this.profiles.length<=3&&(this.newBtnString="추가",this.isNewProfileMode||this.isWrongLength||this.profiles.push({name:this.newProfileName,isSelected:!1}))},cancel:function(){this.isDeleteMode?(this.infoString="사용할 프로필을 선택하세요",this.editBtnString="편집",this.isDeleteMode=!1,this.profiles=this.profiles.map((function(e){return O(O({},e),{},{isSelected:!1})}))):(this.infoString="사용할 프로필을 선택하세요",this.newBtnString="새 프로필",this.isNewProfileMode=!1,this.$refs.nameInput.value="",this.newProfileName="",this.isWrongLength=!1)},lengthCheck:function(e){var t=e.currentTarget.value;this.newProfileName=t,this.isWrongLength=t.length>8||t.length<0}}};n("0e54");N.render=d,N.__scopeId="data-v-2083ffb8";t["default"]=N},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),c=o("map");r({target:"Array",proto:!0,forced:!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),c=n("fc6a"),f=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=c(e),i=f.f,a=o(r),u={},l=0;while(a.length>l)n=i(r,t=a[l++]),void 0!==n&&s(u,t,n);return u}})},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),c=n("06cf").f,f=n("83ab"),s=i((function(){c(1)})),a=!f||s;r({target:"Object",stat:!0,forced:a,sham:!f},{getOwnPropertyDescriptor:function(e,t){return c(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},eba8:function(e,t,n){},ff57:function(e,t,n){"use strict";var r=n("7a23"),i=Object(r["M"])("data-v-b6ef0672"),o=i((function(e,t,n,i,o,c){return Object(r["v"])(),Object(r["e"])("button",{class:"func-btn",style:o.style},[Object(r["C"])(e.$slots,"default",{},void 0,!0)],4)})),c={name:"VueflixFuncBtn",props:{bg:{type:String,default:"#fff"},textColor:{type:String,default:"inherit"},border:{type:String,default:"none"}},data:function(){return{style:{backgroundColor:this.bg,color:this.textColor,border:this.border}}}};n("6181");c.render=o,c.__scopeId="data-v-b6ef0672";t["a"]=c}}]);
//# sourceMappingURL=chunk-1be7a64c.b919e12d.js.map