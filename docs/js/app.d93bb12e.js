(function(e){function t(t){for(var i,a,r=t[0],u=t[1],s=t[2],l=0,b=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);h&&h(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(i=!1)}i&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},a={app:0},o={app:0},c=[];function r(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0c006528":"b7c624a6","chunk-0ea8d804":"244b0410","chunk-12eff212":"d6e0b5e4","chunk-1f8dbcbe":"0a5b8cc1","chunk-04f77aae":"af5172ae","chunk-e6d2696e":"98859965","chunk-2d0e1478":"90e08d89","chunk-2d21eeeb":"2c40188a","chunk-48e18bb6":"fe0721cb","chunk-c3588174":"7b907847","chunk-0537260f":"1e24345e","chunk-5d19fda2":"4203992b","chunk-e0eba7ec":"d73ab240","chunk-e423c742":"d5167ac2","chunk-76370ded":"92ef5c34","chunk-7dcd14e0":"451f0a4f","chunk-805db65a":"2f37e6cf","chunk-e7f8c95c":"3afc2c4f","chunk-ffaafff0":"13075489"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0c006528":1,"chunk-0ea8d804":1,"chunk-12eff212":1,"chunk-1f8dbcbe":1,"chunk-04f77aae":1,"chunk-e6d2696e":1,"chunk-c3588174":1,"chunk-0537260f":1,"chunk-5d19fda2":1,"chunk-e0eba7ec":1,"chunk-e423c742":1,"chunk-76370ded":1,"chunk-7dcd14e0":1,"chunk-805db65a":1,"chunk-e7f8c95c":1,"chunk-ffaafff0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-0c006528":"bfb632ab","chunk-0ea8d804":"9f6333dc","chunk-12eff212":"51d06014","chunk-1f8dbcbe":"2798066b","chunk-04f77aae":"b39dcc59","chunk-e6d2696e":"b0a05de1","chunk-2d0e1478":"31d6cfe0","chunk-2d21eeeb":"31d6cfe0","chunk-48e18bb6":"31d6cfe0","chunk-c3588174":"5542f03a","chunk-0537260f":"990e86c0","chunk-5d19fda2":"7cadb2b4","chunk-e0eba7ec":"ae9e3a5d","chunk-e423c742":"60e32d6c","chunk-76370ded":"5af617ef","chunk-7dcd14e0":"e97b3859","chunk-805db65a":"59b81e59","chunk-e7f8c95c":"174dc486","chunk-ffaafff0":"0b3cab5c"}[e]+".css",o=u.p+i,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var s=c[r],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===i||l===o))return t()}var b=document.getElementsByTagName("style");for(r=0;r<b.length;r++){s=b[r],l=s.getAttribute("data-href");if(l===i||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var c=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(e);var b=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",b.name="ChunkLoadError",b.type=i,b.request=a,n[1](b)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0581":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_sonnyboy.8a59240c.webp"},"05ed":function(e,t,n){"use strict";n("7ba5")},"0abd":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_decide.9291906e.webp"},"0b55":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_barakamon.d1666e5e.webp"},"13a3":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_jahisama_title.73df809b.webp"},"141d":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_planetwith.53ba71b8.webp"},"14b6":function(e,t,n){"use strict";n("a2e7")},1865:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_kimiuso.589093eb.jpg"},"18e3":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_tenslime.45e7dcca.webp"},"1b00":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_gridman.665f9db6.webp"},"1bb2":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_shindeiru.00474e7b.webp"},2211:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_blackmaid.b7759294.webp"},2241:function(e,t,n){"use strict";var i=n("7a23"),a=Object(i["i"])('<svg viewBox="0 0 706.49 196.56" xmlns="http://www.w3.org/2000/svg"><polygon points="61.73 133.18 38.06 0 0 1 35 189.44 91.91 181.89 123.17 0 85.15 0 61.73 133.18"></polygon><path d="M203,114.39a34.27,34.27,0,0,1-1.28,9.66,22.5,22.5,0,0,1-3.51,7.24,15.45,15.45,0,0,1-5.22,4.47,15.45,15.45,0,0,1-13.49,0,15.26,15.26,0,0,1-5.22-4.47,22.5,22.5,0,0,1-3.51-7.24,34.22,34.22,0,0,1-1.28-9.66V0H133.62V120a65.17,65.17,0,0,0,3.68,22.47A48.84,48.84,0,0,0,148,159.73a47,47,0,0,0,16.68,11,63.35,63.35,0,0,0,43.11,0,46.22,46.22,0,0,0,16.62-11,49.59,49.59,0,0,0,10.6-17.3A65.25,65.25,0,0,0,238.67,120V0H203Z"></path><polygon points="283.27 102.15 330.35 97.11 330.35 64.87 283.27 69.92 283.27 32.2 336.09 32.2 336.09 0 247.57 0 247.57 168.22 337.49 166.04 337.49 131.37 283.27 131.37 283.27 102.15"></polygon><polygon points="349.14 166.02 384.85 166.02 384.85 104.88 429.82 104.85 429.82 72.65 384.85 72.68 384.85 32.2 438.37 32.2 438.37 0 349.14 0 349.14 166.02"></polygon><polygon points="481.24 0 445.54 0 445.54 167.96 527.05 173.35 527.05 136.42 481.24 137.03 481.24 0"></polygon><polygon points="534.5 173.62 571.05 177.51 571.05 0 534.5 0 534.5 173.62"></polygon><polygon points="666.7 97.81 701.62 1 660.37 0 640.06 68.95 619.75 0 578.47 0 614.22 97.84 582.78 178.76 621.92 183.57 640.76 129.34 661.57 189.22 706.49 196.56 666.7 97.81"></polygon></svg><span class="blind">뷰플릭스</span>',2);function o(e,t,n,i,o,c){return a}var c={name:"Logo"},r=n("6b0d"),u=n.n(r);const s=u()(c,[["render",o]]);t["a"]=s},"2e7c":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_necheongko.36058f42.webp"},"339f":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_hamehura.a6587a1c.webp"},"40d9":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_akademia5.f4fcaf31.webp"},4192:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_dragonquest.c73718c9.webp"},"44f8":function(e,t,n){"use strict";var i=n("7a23"),a={d:"M19,17H18V9A6,6,0,0,0,6,9v8H5a1,1,0,0,0,0,2H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,0-2ZM8,9a4,4,0,0,1,8,0v8H8Zm4,11a2,2,0,0,1-1.73-1h3.46A2,2,0,0,1,12,20Z"};function o(e,t){return Object(i["z"])(),Object(i["g"])("path",a)}var c=n("6b0d"),r=n.n(c);const u={},s=r()(u,[["render",o]]);t["a"]=s},"49a8":function(e,t,n){"use strict";n("59c4")},"4a42":function(e,t,n){"use strict";var i=n("7a23"),a=["width","height","fill"],o={lang:"ko"};function c(e,t,n,c,r,u){return Object(i["z"])(),Object(i["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:n.width,height:n.height,fill:n.iconColor,role:"presentation"},[Object(i["h"])("title",o,Object(i["L"])(n.iconName),1),Object(i["G"])(e.$slots,"default",{},void 0,!0)],8,a)}n("a9e3");var r={name:"IconBase",props:{iconName:{type:String},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},iconColor:{type:String,default:"currentColor"}}},u=(n("cd19"),n("6b0d")),s=n.n(u);const l=s()(r,[["render",c],["__scopeId","data-v-108cf3ee"]]);t["a"]=l},"4d15":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_vanitas.a10c05c9.webp"},"4e71":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_maiko.56cf9a9a.webp"},5485:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_kanokano.1f541c32.webp"},"54df":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("3ca3"),n("ddb0"),n("99af");var i=n("6c02"),a=new Date,o=a.getFullYear(),c=a.getMonth(),r=Math.floor((c+3)/3),u=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-48e18bb6"),n.e("chunk-c3588174"),n.e("chunk-0537260f"),n.e("chunk-e0eba7ec")]).then(n.bind(null,"bb51"))},meta:{title:"뷰플릭스 - 합법적 애니 스트리밍",appBar:!0,bottomTabMenu:!0}},{path:"/anime/:id",name:"anime",component:function(){return Promise.all([n.e("chunk-48e18bb6"),n.e("chunk-c3588174"),n.e("chunk-0537260f"),n.e("chunk-5d19fda2")]).then(n.bind(null,"8c21"))},meta:{appBar:!1,bottomTabMenu:!1},children:[{path:"reviews",name:"reviews",component:function(){return Promise.all([n.e("chunk-c3588174"),n.e("chunk-e7f8c95c")]).then(n.bind(null,"2e51"))},meta:{appBar:!0,bottomTabMenu:!1}}]},{path:"/tag-search",name:"tag-search",component:function(){return n.e("chunk-0c006528").then(n.bind(null,"87af"))},meta:{title:"필터로 취향저격 애니찾기",appBar:!0,bottomTabMenu:!0}},{path:"/daily",name:"daily",component:function(){return n.e("chunk-7dcd14e0").then(n.bind(null,"6312"))},meta:{title:"".concat(o,"년 ").concat(r,"분기 신작 애니 편성표"),appBar:!0,bottomTabMenu:!0}},{path:"/basket",name:"basket",component:function(){return n.e("chunk-0ea8d804").then(n.bind(null,"c00b"))},meta:{title:"보관함",appBar:!0,bottomTabMenu:!0}},{path:"/my",name:"my",component:function(){return n.e("chunk-12eff212").then(n.bind(null,"4c41"))},meta:{title:"내 뷰플릭스",appBar:!0,bottomTabMenu:!0},children:[{path:"membership",name:"membership",component:function(){return n.e("chunk-ffaafff0").then(n.bind(null,"daab"))},meta:{title:"뷰플릭스 멤버십",appBar:!0,bottomTabMenu:!1}},{path:"dark-mode",name:"dark-mode",component:function(){return n.e("chunk-2d21eeeb").then(n.bind(null,"d856"))},meta:{title:"다크 모드",appBar:!0,bottomTabMenu:!1}}]},{path:"/auth",name:"auth",component:function(){return Promise.all([n.e("chunk-48e18bb6"),n.e("chunk-e423c742")]).then(n.bind(null,"2fef"))},meta:{title:"회원가입 / 로그인",appBar:!1,bottomTabMenu:!1},children:[{path:"by-email",name:"by-email",component:function(){return Promise.all([n.e("chunk-1f8dbcbe"),n.e("chunk-04f77aae")]).then(n.bind(null,"acf2"))},meta:{title:"이메일로 로그인",appBar:!1,bottomTabMenu:!1}},{path:"sign-up",name:"sign-up",component:function(){return Promise.all([n.e("chunk-1f8dbcbe"),n.e("chunk-e6d2696e")]).then(n.bind(null,"5c9c"))},meta:{title:"이메일로 가입",appBar:!1,bottomTabMenu:!1}},{path:"another",name:"another",component:function(){return n.e("chunk-76370ded").then(n.bind(null,"2e2b"))},meta:{title:"다른 방법으로 계속하기",appBar:!1,bottomTabMenu:!1}}]},{path:"/notialert",name:"notialert",component:function(){return n.e("chunk-2d0e1478").then(n.bind(null,"7a80"))},meta:{title:"알림",appBar:!1,bottomTabMenu:!1}},{path:"/notfound",name:"notfound",component:function(){return n.e("chunk-805db65a").then(n.bind(null,"9703"))},meta:{appBar:!0,bottomTabMenu:!1}},{path:"/:pathMatch(.*)*",redirect:"/notfound"}],s=Object(i["a"])({history:Object(i["b"])(),routes:u,linkActiveClass:"vueflix-active-link"}),l=n("7a23"),b=n("5502"),h={recentAnime:[{title:"쟈히님은 기죽지 않아",episode:"1화",img:n("5788"),url:"#none",isMovie:!1,progress:"100%"},{title:"그날 본 꽃의 이름을 우리는 아직 모른다",episode:"11화",img:n("9ad2"),url:"#none",isMovie:!1,progress:"90%"},{title:"카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~ 2기",episode:"12화",img:n("bf49"),url:"#none",isMovie:!1,progress:"50%"},{title:"전생했더니 슬라임이었던 건에 대하여 2기 2부",episode:"1화",img:n("18e3"),url:"#none",isMovie:!1,progress:"30%"},{title:"이 멋진 세계에 축복을! 붉은 전설",episode:"없음",img:n("ed4c"),url:"#none",isMovie:!0,progress:"10%"},{title:"역시 내 청춘 러브코메디는 잘못됐다.",episode:"1화",img:n("2e7c"),url:"#none",isMovie:!1,progress:"95%"}],recommendAnime:[{recommendTitle:"방황하는 이 시대의 청춘들에게 바칩니다",list:[{title:"4월은 너의 거짓말",img:n("1865"),url:"#none"},{title:"SHIROBAKO",img:n("bd34"),url:"#none"},{title:"청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",img:n("8b3e"),url:"#none"},{title:"역시 내 청춘 러브코미디는 잘못됐다",img:n("98c8"),url:"#none"},{title:"후르츠 바스켓 1기",img:n("6ed4"),url:"#none"},{title:"바라카몬",img:n("0b55"),url:"#none"}]},{recommendTitle:"가슴이 웅장해지는 메카닉",list:[{title:"SSSS.GRIDMAN",img:n("1b00"),url:"#none"},{title:"플래닛 위드",img:n("141d"),url:"#none"},{title:"기동전사 건담 디 오리진 1 : 푸른 눈의 캬스발",img:n("847d"),url:"#none"},{title:"달링 인 더 프랑키스",img:n("c8ea"),url:"#none"},{title:"(무삭제) 미소의 대가",img:n("b566"),url:"#none"}]}]},f={namespaced:!0,state:h},d=(n("7db0"),{dailyAnime:[{day:"월",animes:[{title:"도쿄 리벤저스 part 2",img:n("dd7b"),url:"#none",genre:"액션 / 드라마"},{title:"사신 도련님과 검은 메이드",img:n("2211"),url:"#none",genre:"로맨스 / 개그"},{title:"아이돌리쉬 세븐 Third BEAT!",img:n("8af9"),url:"#none",genre:"아이돌 / 음악"},{title:"디사이드 트로이메라이",img:n("0abd"),url:"#none",genre:"판타지 / 액션"},{title:"드래곤 퀘스트 : 다이의대모험 part 4",img:n("4192"),url:"#none",genre:"판타지 / 액션"}]},{day:"화",animes:[{title:"우라미치 선생님",img:n("5a87"),url:"#none",genre:"개그"},{title:"우리들의 리메이크",img:n("e171"),url:"#none",genre:"로맨스"},{title:"아라카와 언더 더 브리지",img:n("e087"),url:"#none",genre:"SF / 드라마"},{title:"RE-MAIN",img:n("c598"),url:"#none",genre:"스포츠 / 치유"},{title:"현실주의 용사의 왕국 재건기",img:n("6967"),url:"#none",genre:"판타지"},{title:"마기아 레코드 : 마법소녀 마도카★마기카 외전 세컨드 시즌",img:n("84ee"),url:"#none",genre:"판타지 / 액션"},{title:"쓰르라미 울 적에 졸",img:n("dc38"),url:"#none",genre:"공포"},{title:"만난 지 5초만에 배틀",img:n("8e74"),url:"#none",genre:"액션 / 판타지"},{title:"킹덤 3기 part 2",img:n("a19c"),url:"#none",genre:"액션 / 시대극"},{title:"겟타 로보 아크",img:n("66a9"),url:"#none",genre:"액션 / SF"}]},{day:"수",animes:[{title:"나의 히어로 아카데미아 5기",img:n("40d9"),url:"#none",genre:"판타지 / 액션"},{title:"탐정은 이미 죽었다.",img:n("1bb2"),url:"#none",genre:"판타지 / 로맨스"},{title:"그녀도 여친",img:n("5485"),url:"#none",genre:"개그 / 로맨스"},{title:"BLUE REFLECTION RAY part 2",img:n("85d3"),url:"#none",genre:"판타지 / 액션"}]},{day:"목",animes:[{title:"코바야시네 메이드래곤 S",img:n("b7c0"),url:"#none",genre:"일상 / 개그"},{title:"전생했더니 슬라임이었던 건에 대하여 2기 2부",img:n("584a"),url:"#none",genre:"판타지 / 액션"},{title:"불멸의 그대에게 part 2",img:n("7500"),url:"#none",genre:"판타지 / 드라마"},{title:"러브 라이브! 슈퍼스타!!",img:n("91f2"),url:"#none",genre:"음악 / 아이돌"},{title:"가극 소녀!!",img:n("f110"),url:"#none",genre:"드라마 / 음악"},{title:"NIGHT HEAD 2041",img:n("6e85"),url:"#none",genre:"SF / 액션"},{title:"치트 약사의 슬로 라이프 -이세계에 만들자 드러그 스토어-",img:n("5b73"),url:"#none",genre:"판타지 / 치유"}]},{day:"금",animes:[{title:"달이 이끄는 이세계 여행",img:n("b9fe"),url:"#none",genre:"판타지"},{title:"하얀 모래의 아쿠아톱",img:n("c01b"),url:"#none",genre:"드라마"},{title:"Sonny Boy",img:n("0581"),url:"#none",genre:"SF / 판타지"}]},{day:"토",animes:[{title:"바니타스의 수기",img:n("4d15"),url:"#none",genre:"판타지"},{title:"마이코네 행복한 밥상",img:n("4e71"),url:"#none",genre:"치유 / 일상"},{title:"피치 보이 리버사이드",img:n("afab"),url:"#none",genre:"액션 / 판타지"}]},{day:"일",animes:[{title:"여성향 게임의 파멸 플래그밖에 없는 악역 영애로 환생해버렸다... X",img:n("339f"),url:"#none",genre:"판타지 / 개그"},{title:"쟈히님은 기죽지 않아!",img:n("13a3"),url:"#none",genre:"판타지 / 개그"},{title:"달의 요정 세일러 문 SuperS",img:n("6217"),url:"#none",genre:"판타지 / 액션"},{title:"나는 100만명의 목숨 위에 서 있다 2기",img:n("d446"),url:"#none",genre:"판타지 / 성인"}]}],shownList:[]}),p={changeAnime:function(e,t){e.shownList=e.dailyAnime.find((function(e){return e.day===t})).animes}},m={namespaced:!0,state:d,mutations:p},g={isShown:!1,text:""},O={changeToastMeta:function(e,t){e.isShown=t.isShown,e.text=t.text,console.log(t)}},j={namespaced:!0,state:g,mutations:O},k={user:void 0},v={setUser:function(e,t){e.user=t}},_={namespaced:!0,state:k,mutations:v},w=Object(b["a"])({modules:{anime:f,daily:m,toast:j,auth:_}}),y=n("260b");function x(e,t,n,i,a,o){var c=Object(l["H"])("vueflix-header"),r=Object(l["H"])("bottom-tab-menu"),u=Object(l["H"])("toast"),s=Object(l["H"])("router-view");return Object(l["z"])(),Object(l["e"])(s,null,{default:Object(l["Q"])((function(t){var n=t.Component;return[a.headerVisible?(Object(l["z"])(),Object(l["e"])(c,{key:0})):Object(l["f"])("",!0),a.bottomTabMenuVisible?(Object(l["z"])(),Object(l["e"])(r,{key:1})):Object(l["f"])("",!0),Object(l["k"])(l["b"],{name:"fade"},{default:Object(l["Q"])((function(){return[(Object(l["z"])(),Object(l["e"])(Object(l["J"])(n),{key:e.$route.path}))]})),_:2},1024),Object(l["k"])(l["b"],{name:"toast-show"},{default:Object(l["Q"])((function(){return[e.toastShown?(Object(l["z"])(),Object(l["e"])(u,{key:0},{default:Object(l["Q"])((function(){return[Object(l["j"])(Object(l["L"])(e.toastText),1)]})),_:1})):Object(l["f"])("",!0)]})),_:1})]})),_:1})}n("b0c0");var M=n("ea7b"),S={class:"inner"},H={key:1,class:"title"},B={class:"col-right"};function A(e,t,n,i,a,o){var c=Object(l["H"])("logo"),r=Object(l["H"])("router-link"),u=Object(l["H"])("icon-arrow-prev"),s=Object(l["H"])("icon-base"),b=Object(l["H"])("site-menu"),h=Object(l["H"])("search-bar"),f=Object(l["H"])("notification");return Object(l["z"])(),Object(l["g"])("header",{class:Object(l["q"])(["header",{fill:a.isScroll||!a.isHome}]),onScroll:t[1]||(t[1]=function(){return o.handleScroll&&o.handleScroll.apply(o,arguments)})},[Object(l["h"])("div",S,[Object(l["h"])("div",{class:Object(l["q"])(["col-left",{centered:a.isHome&&a.isMobile}])},[Object(l["h"])("h1",{class:Object(l["q"])(["logo",{blind:a.isMobile&&!a.isHome}])},[Object(l["k"])(r,{to:"/"},{default:Object(l["Q"])((function(){return[Object(l["k"])(c)]})),_:1})],2),a.isPrevVisible?(Object(l["z"])(),Object(l["g"])("button",{key:0,class:"go-back",onClick:t[0]||(t[0]=function(){return o.goBack&&o.goBack.apply(o,arguments)}),role:"link",id:"뒤로가기"},[Object(l["k"])(s,{iconName:"뒤로가기"},{default:Object(l["Q"])((function(){return[Object(l["k"])(u)]})),_:1})])):Object(l["f"])("",!0),a.isMobile&&!a.isHome?(Object(l["z"])(),Object(l["g"])("h2",H,Object(l["L"])(a.headString),1)):Object(l["f"])("",!0),a.isMobile?Object(l["f"])("",!0):(Object(l["z"])(),Object(l["e"])(b,{key:2}))],2),Object(l["h"])("div",B,[a.isSearchVisible?(Object(l["z"])(),Object(l["e"])(h,{key:0})):Object(l["f"])("",!0),a.isHome?(Object(l["z"])(),Object(l["e"])(f,{key:1})):Object(l["f"])("",!0)])])],34)}var T=function(e){return Object(l["C"])("data-v-ba97be84"),e=e(),Object(l["A"])(),e},I={class:"menu"},V=T((function(){return Object(l["h"])("h2",{class:"blind"},"대메뉴",-1)})),z={class:"items"};function C(e,t,n,i,a,o){var c=Object(l["H"])("router-link");return Object(l["z"])(),Object(l["g"])("nav",I,[V,Object(l["h"])("ul",z,[(Object(l["z"])(!0),Object(l["g"])(l["a"],null,Object(l["F"])(a.items,(function(e,t){return Object(l["z"])(),Object(l["g"])("li",{key:t,class:"item"},[Object(l["k"])(c,{to:"/".concat(e.to)},{default:Object(l["Q"])((function(){return[Object(l["j"])(Object(l["L"])(e.item),1)]})),_:2},1032,["to"])])})),128))])])}var N={name:"SiteMenu",data:function(){return{items:[{to:"tag-search",item:"태그검색"},{to:"daily",item:"요일별 신작"},{to:"basket",item:"보관함"},{to:"my",item:"MY"}]}}},L=(n("49a8"),n("6b0d")),E=n.n(L);const P=E()(N,[["render",C],["__scopeId","data-v-ba97be84"]]);var $=P,Z=function(e){return Object(l["C"])("data-v-60824b50"),e=e(),Object(l["A"])(),e},Q=Z((function(){return Object(l["h"])("legend",{class:"blind"},"작품 검색",-1)})),R={for:"검색",class:"search-box"};function F(e,t,n,i,a,o){var c=Object(l["H"])("icon-search"),r=Object(l["H"])("icon-base");return Object(l["z"])(),Object(l["g"])("form",{class:Object(l["q"])(["search-bar",{open:a.isOpen}])},[Object(l["h"])("fieldset",null,[Q,Object(l["h"])("label",R,[Object(l["h"])("i",{class:"icon",onClick:t[0]||(t[0]=function(){return o.searchBarOpen&&o.searchBarOpen.apply(o,arguments)}),onFocus:t[1]||(t[1]=function(){return o.searchBarOpen&&o.searchBarOpen.apply(o,arguments)}),tabindex:"0"},[Object(l["k"])(r,{iconName:"검색"},{default:Object(l["Q"])((function(){return[Object(l["k"])(c)]})),_:1})],32),Object(l["h"])("input",{type:"text",id:"검색",class:"input-area",ref:"search",onInput:t[2]||(t[2]=function(){return o.inputChange&&o.inputChange.apply(o,arguments)}),onBlur:t[3]||(t[3]=function(){return o.searchBarClose&&o.searchBarClose.apply(o,arguments)})},null,544),Object(l["h"])("span",{class:Object(l["q"])(["placeholder",{blind:!a.isOpen}]),ref:"placeholder"}," 제목/제작사/감독으로 검색해보세요 ",2)])])],2)}n("ac1f"),n("841c");var q=n("4a42"),D={class:"icon",d:"M20.71,19.29l-6-6a6.52,6.52,0,1,0-1.41,1.41l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.51,4.51,0,0,1,9.5,14Z"};function G(e,t){return Object(l["z"])(),Object(l["g"])("path",D)}const J={},Y=E()(J,[["render",G]]);var U=Y,W={name:"SearchBar",components:{IconBase:q["a"],IconSearch:U},data:function(){return{isOpen:!1,isBlank:!0,inputValue:""}},methods:{searchBarOpen:function(){this.isOpen=!this.isOpen,this.isOpen?this.$refs.search.blur():this.$refs.search.focus()},searchBarClose:function(){this.isOpen=!1,this.$refs.search.value="",this.$refs.search.blur(),this.$refs.placeholder.textContent="제목/제작사/감독으로 검색해보세요"},inputChange:function(){this.inputValue=this.$refs.search.value,this.isBlank=""===this.inputValue,this.isBlank?this.$refs.placeholder.textContent="제목/제작사/감독으로 검색해보세요":this.$refs.placeholder.textContent=""}}};n("bd09");const K=E()(W,[["render",F],["__scopeId","data-v-60824b50"]]);var X=K;function ee(e,t,n,i,a,o){var c=Object(l["H"])("icon-notification"),r=Object(l["H"])("icon-base"),u=Object(l["H"])("router-link");return Object(l["z"])(),Object(l["e"])(u,{to:"/notialert",class:"notification"},{default:Object(l["Q"])((function(){return[Object(l["h"])("i",{class:"icon",onClick:t[0]||(t[0]=function(){return e.searchBarOpen&&e.searchBarOpen.apply(e,arguments)})},[Object(l["k"])(r,{iconName:"알림"},{default:Object(l["Q"])((function(){return[Object(l["k"])(c)]})),_:1})])]})),_:1})}var te=n("44f8"),ne={name:"Notification",components:{IconBase:q["a"],IconNotification:te["a"]}};n("f58c");const ie=E()(ne,[["render",ee],["__scopeId","data-v-4a3f1904"]]);var ae=ie,oe=n("2241"),ce=n("5f9d"),re={name:"VueflixHeader",components:{SiteMenu:$,SearchBar:X,Notification:ae,Logo:oe["a"],IconBase:q["a"],IconArrowPrev:ce["a"]},data:function(){return{isScroll:!1,isMobile:window.innerWidth<=768,isSearchVisible:!1,isHome:"home"===this.page,isPrevVisible:"home"!==this.page&&"tag-search"!==this.page&&"daily"!==this.page&&"basket"!==this.page&&"my"!==this.page&&this.isMobile,page:this.$route.name,headString:void 0}},methods:{handleScroll:function(){setTimeout(this.isScroll=0<Math.round(window.scrollY),500)},checkResolution:function(){this.isMobile=window.innerWidth<=768},goBack:function(){this.$router.go(-1)},init:function(){switch(this.page=this.$route.name,this.isHome="home"===this.page,this.isSearchVisible="reviews"!==this.page&&"auth"!==this.page&&"dark-mode"!==this.page,this.isPrevVisible="home"!==this.page&&"tag-search"!==this.page&&"daily"!==this.page&&"basket"!==this.page&&"my"!==this.page&&this.isMobile,this.page){case"tag-search":this.headString="태그검색";break;case"daily":this.headString="요일별 신작";break;case"basket":this.headString="보관함";break;case"my":this.headString="MY";break;case"membership":this.headString="멤버십";break;case"change-profile":this.headString="프로필 관리";break;case"reviews":this.headString="리뷰";break;case"auth":this.headString="로그인";break;case"dark-mode":this.headString="다크 모드";break;default:this.headString=""}}},mounted:function(){this.init()},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.checkResolution)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.checkResolution)},watch:{$route:function(){this.init()}}};n("05ed");const ue=E()(re,[["render",A],["__scopeId","data-v-554f7b46"]]);var se=ue,le=function(e){return Object(l["C"])("data-v-2b62d342"),e=e(),Object(l["A"])(),e},be={class:"bottom-tab-menu"},he=le((function(){return Object(l["h"])("h2",{class:"blind"},"탭메뉴",-1)})),fe={class:"items"},de={class:"icon"};function pe(e,t,n,i,a,o){var c=Object(l["H"])("icon-base"),r=Object(l["H"])("router-link");return Object(l["z"])(),Object(l["g"])("nav",be,[he,Object(l["h"])("ul",fe,[(Object(l["z"])(!0),Object(l["g"])(l["a"],null,Object(l["F"])(a.items,(function(e,t){return Object(l["z"])(),Object(l["g"])("li",{key:t,class:"item"},[Object(l["k"])(r,{to:"home"===e.to?"/":"/".concat(e.to)},{default:Object(l["Q"])((function(){return[Object(l["h"])("i",de,["my"!==e.to?(Object(l["z"])(),Object(l["e"])(c,{key:0},{default:Object(l["Q"])((function(){return[(Object(l["z"])(),Object(l["e"])(Object(l["J"])(e.icon),{key:e.item}))]})),_:2},1024)):(Object(l["z"])(),Object(l["e"])(Object(l["J"])(e.icon),{key:e.item}))]),Object(l["h"])("span",null,Object(l["L"])(e.item),1)]})),_:2},1032,["to"])])})),128))])])}var me={d:"M20.66,10.25l-8-7a1,1,0,0,0-1.32,0l-8,7a1,1,0,0,0,1.32,1.5L6,10.58V20a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V10.58l1.34,1.17A1,1,0,0,0,20,12a1,1,0,0,0,.75-.34A1,1,0,0,0,20.66,10.25ZM16,19H8V8.83l4-3.5,4,3.5Z"};function ge(e,t){return Object(l["z"])(),Object(l["g"])("path",me)}const Oe={},je=E()(Oe,[["render",ge]]);var ke=je,ve={d:"M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM5,19V5H19V7.59l-7,7-3.29-3.3a1,1,0,1,0-1.42,1.42l4,4a1,1,0,0,0,1.42,0L19,10.41V19Z"};function _e(e,t){return Object(l["z"])(),Object(l["g"])("path",ve)}const we={},ye=E()(we,[["render",_e]]);var xe=ye,Me=Object(l["h"])("path",{d:"M19,5H17V4a1,1,0,0,0-2,0V5H9V4A1,1,0,0,0,7,4V5H5A2,2,0,0,0,3,7V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V7A2,2,0,0,0,19,5Zm0,14H5V7H19Z"},null,-1),Se=Object(l["h"])("circle",{cx:"8",cy:"13",r:"1"},null,-1),He=Object(l["h"])("circle",{cx:"12",cy:"13",r:"1"},null,-1),Be=Object(l["h"])("circle",{cx:"16",cy:"13",r:"1"},null,-1);function Ae(e,t){return Object(l["z"])(),Object(l["g"])(l["a"],null,[Me,Se,He,Be],64)}const Te={},Ie=E()(Te,[["render",Ae]]);var Ve=Ie,ze={d:"M21.92,12.45l-2-7A2,2,0,0,0,18,4H6A2,2,0,0,0,4.08,5.45l-2,7A2,2,0,0,0,2,13v5a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V13A2,2,0,0,0,21.92,12.45ZM6,6H18l2,7H15a1,1,0,0,0-1,1v1H10V14a1,1,0,0,0-1-1H4ZM4,18V15H8v1a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V15h4v3Z"};function Ce(e,t){return Object(l["z"])(),Object(l["g"])("path",ze)}const Ne={},Le=E()(Ne,[["render",Ce]]);var Ee=Le,Pe=n("66aa"),$e={name:"BottomTabMenu",components:{IconBase:q["a"],IconHome:ke,IconTagSearch:xe,IconDaily:Ve,IconBasket:Ee,Profile:Pe["a"]},data:function(){return{items:[{to:"home",item:"홈",icon:"IconHome"},{to:"tag-search",item:"태그검색",icon:"IconTagSearch"},{to:"daily",item:"요일별 신작",icon:"IconDaily"},{to:"basket",item:"보관함",icon:"IconBasket"},{to:"my",item:"MY",icon:"Profile"}]}}};n("684d");const Ze=E()($e,[["render",pe],["__scopeId","data-v-2b62d342"]]);var Qe=Ze,Re={class:"toast"};function Fe(e,t){return Object(l["z"])(),Object(l["g"])("div",Re,[Object(l["G"])(e.$slots,"default",{},void 0,!0)])}n("14b6");const qe={},De=E()(qe,[["render",Fe],["__scopeId","data-v-0b6b0bf4"]]);var Ge=De,Je={name:"App",components:{VueflixHeader:se,BottomTabMenu:Qe,Toast:Ge},mounted:function(){var e=this,t=Object(M["d"])();Object(M["e"])(t,(function(t){e.$store.commit("auth/setUser",t)})),this.init(),window.addEventListener("resize",(function(){e.isMobile=window.innerWidth<=768}))},data:function(){return{headerVisible:this.$route.meta.appBar||!this.isMobile,bottomTabMenuVisible:this.$route.meta.bottomTabMenu&&this.isMobile,isMobile:window.innerWidth<=768}},methods:{init:function(){this.headerVisible=this.$route.meta.appBar||!this.isMobile,this.bottomTabMenuVisible=this.$route.meta.bottomTabMenu&&this.isMobile,document.title=this.$route.meta.title||"뷰플릭스"}},watch:{$route:function(e,t){this.init(),this.isMobile&&"anime"===e.name?this.transitionName="anime-to":this.isMobile&&"anime"===t.name?this.transitionName="anime-from":this.transitionName="fade"},isMobile:function(){this.init()}},computed:Object(b["b"])({toastText:function(e){return e.toast.text},toastShown:function(e){return e.toast.isShown}})};n("f7fa");const Ye=E()(Je,[["render",x]]);var Ue=Ye,We=n("9483");Object(We["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available;")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("159b");var Ke={mounted:function(e){function t(){"IMG"===e.nodeName&&(e.src=e.dataset.url)}function n(n,i){n.forEach((function(n){(n.isIntersecting||n.boundingClientRect.top<=window.innerHeight)&&(t(),i.unobserve(e))}))}function i(){var t=new IntersectionObserver(n);t.observe(e)}window.IntersectionObserver?i():t()}},Xe={apiKey:"AIzaSyADaZoKn0znUJfphIuZkRyNf_fXzInvvT8",authDomain:"vueflix-5c7fa.firebaseapp.com",projectId:"vueflix-5c7fa",storageBucket:"vueflix-5c7fa.appspot.com",messagingSenderId:"826170390049",appId:"1:826170390049:web:4b3e43928b3d31f3cf1560",measurementId:"G-WXZTXT8SLM"};Object(y["a"])(Xe);var et=Object(l["d"])(Ue);et.use(s),et.use(w),et.directive("intersection-lazy",Ke),et.mount("#app")},5788:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_jahisama.b8bb0253.jpg"},"584a":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_tenslime2_title.27feecca.webp"},"59c4":function(e,t,n){},"5a87":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_uramichi.4abd47ec.webp"},"5b73":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_drugstore.bfdd00d2.webp"},"5f9d":function(e,t,n){"use strict";var i=n("7a23"),a={d:"M15,22a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L7.41,12l8.3-8.29a1,1,0,1,0-1.42-1.42l-9,9a1,1,0,0,0,0,1.42l9,9A1,1,0,0,0,15,22Z"};function o(e,t){return Object(i["z"])(),Object(i["g"])("path",a)}var c=n("6b0d"),r=n.n(c);const u={},s=r()(u,[["render",o]]);t["a"]=s},6217:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_sailormoonsupers.878f54f6.webp"},"66a9":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_getta.2a455dbb.webp"},"66aa":function(e,t,n){"use strict";var i=n("7a23"),a={class:"profile"},o=["src"];function c(e,t,n,c,r,u){return Object(i["z"])(),Object(i["g"])("div",a,[Object(i["h"])("img",{src:r.src,alt:"프로필 사진"},null,8,o)])}var r={name:"Profile",data:function(){return{src:n("7d31")}}},u=(n("caf0"),n("6b0d")),s=n.n(u);const l=s()(r,[["render",c],["__scopeId","data-v-8bc76816"]]);t["a"]=l},"684d":function(e,t,n){"use strict";n("6fbd")},6967:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_realism.c286e672.webp"},"6e85":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_nighthead2041.4f5337b8.webp"},"6ed4":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_fruitbasket.54af68f7.webp"},"6fbd":function(e,t,n){},7500:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_infinite_part2.ee0a4734.webp"},"7ba5":function(e,t,n){},"7d31":function(e,t,n){e.exports=n.p+"img/NotFoundAqua.8241d4ea.svg"},"847d":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_gundam.98e6cc42.webp"},"84ee":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_madoka.dbd15d1d.webp"},"85d3":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_reflection.e02d96a7.webp"},"8af9":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_idolish.7ee2b8f8.webp"},"8b3e":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_butayarou.5967c3e0.jpg"},"8e74":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_5seconds.dd91ae23.webp"},"91f2":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_lovelivesuperstar.8962839d.webp"},"98c8":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_necheongko_title.50172743.jpg"},"9ad2":function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_anohana.9ed7784a.jpg"},a19c:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_kingdom3.8aadcbed.webp"},a2e7:function(e,t,n){},afab:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_peachriver.ea6e4504.webp"},b566:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_smile.fd160bc0.webp"},b7c0:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_kobayashis.f6c05000.webp"},b9fe:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_tsukimichi.2eef1034.webp"},bd09:function(e,t,n){"use strict";n("d6ec")},bd34:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_shirobako.c5888f6a.jpg"},bf49:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_kaguya.576f7001.jpg"},bfe9:function(e,t,n){},c01b:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_aquatop.c2c09c50.webp"},c598:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_RE-MAIN.e99ce519.webp"},c8ea:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_dalinginthefranxx.d7c52f09.webp"},caf0:function(e,t,n){"use strict";n("ffa9")},cd19:function(e,t,n){"use strict";n("df78")},d446:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_standing2.75046445.webp"},d6ec:function(e,t,n){},dc38:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_sururami.bf2f2724.webp"},dd7b:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_tokyorevenger.6fc391cc.webp"},df78:function(e,t,n){},e087:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_arakawa.d3f7a1ca.webp"},e171:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_bokutachi.ac1afd5f.webp"},ed4c:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_konosubaRed.0fac02ce.jpg"},f110:function(e,t,n){e.exports=n.p+"img/carousel_thumbnail_gaguksonyeo.4a9b002c.webp"},f58c:function(e,t,n){"use strict";n("bfe9")},f7fa:function(e,t,n){"use strict";n("54df")},ffa9:function(e,t,n){}});
//# sourceMappingURL=app.d93bb12e.js.map