(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f1af184"],{1602:function(e,t,c){},"54e4":function(e,t,c){},5938:function(e,t,c){"use strict";c("b243")},"5ea8":function(e,t,c){},"6d6e":function(e,t,c){},"73f5":function(e,t,c){"use strict";c("bb23")},"87af":function(e,t,c){"use strict";c.r(t);var i=c("7a23"),n=Object(i["K"])("data-v-a840d8b2");Object(i["y"])("data-v-a840d8b2");var a={class:"wrap"},o={class:"inner"},l={class:"result-text"},s=Object(i["h"])(" 총 "),r=Object(i["h"])("개의 작품이 검색되었어요! "),d=Object(i["g"])('<label for="sort-order" class="sort-order" data-v-a840d8b2> 정렬 순서 <select name="sort-order" id="sort-order" data-v-a840d8b2><option value="ranking" data-v-a840d8b2>뷰플릭스 랭킹</option><option value="ranking" data-v-a840d8b2>이름</option><option value="ranking" data-v-a840d8b2>최신</option><option value="ranking" data-v-a840d8b2>평가 많은</option><option value="ranking" data-v-a840d8b2>평점 높은</option></select></label>',1);Object(i["w"])();var b=n((function(e,t,c,n,b,u){var O=Object(i["D"])("controller"),j=Object(i["D"])("poster-list");return Object(i["v"])(),Object(i["e"])("div",a,[Object(i["i"])("main",null,[Object(i["i"])(O),Object(i["i"])("div",o,[Object(i["i"])("p",l,[s,Object(i["i"])("strong",null,Object(i["G"])(u.formatResult),1),r]),d,Object(i["i"])(j,{list:b.posterList},null,8,["list"])])])])})),u=Object(i["K"])("data-v-6b55e980");Object(i["y"])("data-v-6b55e980");var O={class:"poster-list"};Object(i["w"])();var j=u((function(e,t,c,n,a,o){var l=Object(i["D"])("poster-item");return Object(i["v"])(),Object(i["e"])("ul",O,[(Object(i["v"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(c.list,(function(e){return Object(i["v"])(),Object(i["e"])(l,{key:e.title,isAdult:e.isAdult},{default:u((function(){return[Object(i["h"])(Object(i["G"])(e.title),1)]})),_:2},1032,["isAdult"])})),128))])})),v=Object(i["K"])("data-v-c121901e");Object(i["y"])("data-v-c121901e");var f={class:"poster-item"},m={class:"img"},p={class:"icons"},h={key:0,class:"adult-icon icon"},g={class:"play-icon icon"},A={class:"title"};Object(i["w"])();var I=v((function(e,t,c,n,a,o){var l=Object(i["D"])("icon-play"),s=Object(i["D"])("icon-base");return Object(i["v"])(),Object(i["e"])("li",f,[Object(i["i"])("figure",null,[Object(i["i"])("div",m,[Object(i["i"])("div",p,[c.isAdult?(Object(i["v"])(),Object(i["e"])("i",h,"19")):Object(i["f"])("",!0),Object(i["i"])("i",g,[Object(i["i"])(s,{width:10,height:10},{default:v((function(){return[Object(i["i"])(l)]})),_:1})])])]),Object(i["i"])("figcaption",A,[Object(i["C"])(e.$slots,"default",{},void 0,!0)])])])})),k=c("4a42"),w=c("eef1"),y={name:"PosterItem",components:{IconBase:k["a"],IconPlay:w["a"]},props:{isAdult:{type:Boolean,default:!0},title:{type:String}}};c("b013");y.render=I,y.__scopeId="data-v-c121901e";var C=y,_={name:"PosterList",components:{PosterItem:C},props:{list:{type:Array}}};c("73f5");_.render=j,_.__scopeId="data-v-6b55e980";var S=_,x=(c("b0c0"),Object(i["K"])("data-v-7abd52c8"));Object(i["y"])("data-v-7abd52c8");var D={class:"swipe-indi",ref:"swipeIndi"},T=Object(i["i"])("strong",null,"태그 선택",-1),L={class:"bottom-row"},B={class:"tags-container selected"},V={class:"icon"},E={class:"tags"},M=Object(i["h"])("로맨스"),H=Object(i["h"])("드라마"),P={class:"tags-container excluded"},G={class:"icon"},K={class:"tags"},N=Object(i["h"])("특촬"),Z={class:"selector-container"},q=Object(i["i"])("legend",{class:"blind"},"일반 태그",-1),Y={class:"general-selector"},F={class:"year-quarter-selector"},J=Object(i["i"])("legend",{class:"blind"},"방영 시기",-1),R={for:"year"},$=Object(i["h"])(" 년도 "),W={name:"year",id:"year"},U={for:"quarter"},X=Object(i["h"])(" 분기 "),z={name:"quarter",id:"quarter"},Q=Object(i["i"])("legend",{class:"blind"},"세부 태그",-1),ee={class:"selectors"};Object(i["w"])();var te=x((function(e,t,c,n,a,o){var l=Object(i["D"])("icon-selected"),s=Object(i["D"])("icon-base"),r=Object(i["D"])("tag-item"),d=Object(i["D"])("icon-excluded"),b=Object(i["D"])("triple-checkbox"),u=Object(i["D"])("selector-accordion");return Object(i["v"])(),Object(i["e"])("form",{class:["controller",{open:a.isOpen}]},[Object(i["i"])("div",{class:"top-row",onTouchstart:t[1]||(t[1]=function(e){return o.touchStart(e)}),onTouchmove:t[2]||(t[2]=function(e){return o.touchMove(e)})},[Object(i["i"])("span",D,null,512),T],32),Object(i["i"])("div",L,[Object(i["i"])("div",B,[Object(i["i"])("i",V,[Object(i["i"])(s,{iconName:"선택된 태그"},{default:x((function(){return[Object(i["i"])(l)]})),_:1})]),Object(i["i"])("ul",E,[Object(i["i"])(r,null,{default:x((function(){return[M]})),_:1}),Object(i["i"])(r,null,{default:x((function(){return[H]})),_:1})])]),Object(i["i"])("div",P,[Object(i["i"])("i",G,[Object(i["i"])(s,{iconName:"제외된 태그"},{default:x((function(){return[Object(i["i"])(d)]})),_:1})]),Object(i["i"])("ul",K,[Object(i["i"])(r,null,{default:x((function(){return[N]})),_:1})])])]),Object(i["i"])("div",Z,[Object(i["i"])("fieldset",null,[q,Object(i["i"])("ul",Y,[Object(i["i"])(b,{label:"멤버십에 포함됨"}),Object(i["i"])(b,{label:"뷰플릭스에서 감상 가능"})])]),Object(i["i"])("fieldset",F,[J,Object(i["i"])("label",R,[$,Object(i["i"])("select",W,[(Object(i["v"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(o.years,(function(e){return Object(i["v"])(),Object(i["e"])("option",{key:e},Object(i["G"])(e)+"년",1)})),128))])]),Object(i["i"])("label",U,[X,Object(i["i"])("select",z,[(Object(i["v"])(),Object(i["e"])(i["a"],null,Object(i["B"])(4,(function(e){return Object(i["i"])("option",{key:"".concat(e,"분기")},Object(i["G"])(e)+"분기",1)})),64))])])]),Object(i["i"])("fieldset",null,[Q,Object(i["i"])("ul",ee,[(Object(i["v"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(a.selectors,(function(e){return Object(i["v"])(),Object(i["e"])(u,{key:e.name,selectorItems:e.selectorItem},{default:x((function(){return[Object(i["h"])(Object(i["G"])(e.name),1)]})),_:2},1032,["selectorItems"])})),128))])])])],2)})),ce={d:"M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM16,13H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"};function ie(e,t){return Object(i["v"])(),Object(i["e"])("path",ce)}const ne={};ne.render=ie;var ae=ne,oe={d:"M7.29,11.29a1,1,0,0,0,0,1.42l4,4a1,1,0,0,0,1.42,0L21,8.42V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19a2,2,0,0,1,2,2v.58l-2,2-7,7-3.29-3.3A1,1,0,0,0,7.29,11.29Z"};function le(e,t){return Object(i["v"])(),Object(i["e"])("path",oe)}const se={};se.render=le;var re=se,de=Object(i["K"])("data-v-46e626de");Object(i["y"])("data-v-46e626de");var be={class:"tag-item"};Object(i["w"])();var ue=de((function(e,t,c,n,a,o){return Object(i["v"])(),Object(i["e"])("li",be,[Object(i["C"])(e.$slots,"default",{},void 0,!0)])})),Oe={name:"TagItem"};c("8acb");Oe.render=ue,Oe.__scopeId="data-v-46e626de";var je=Oe,ve=Object(i["K"])("data-v-7d6bbd07");Object(i["y"])("data-v-7d6bbd07");var fe={class:"selector"},me={class:"icon"},pe={class:"sub-tags"};Object(i["w"])();var he=ve((function(e,t,c,n,a,o){var l=Object(i["D"])("icon-arrow-next"),s=Object(i["D"])("icon-base"),r=Object(i["D"])("triple-checkbox");return Object(i["v"])(),Object(i["e"])("li",fe,[Object(i["i"])("details",null,[Object(i["i"])("summary",null,[Object(i["i"])("i",me,[Object(i["i"])(s,{width:"2rem",height:"2rem"},{default:ve((function(){return[Object(i["i"])(l)]})),_:1})]),Object(i["C"])(e.$slots,"default",{},void 0,!0)]),Object(i["i"])("ul",pe,[(Object(i["v"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(c.selectorItems,(function(e){return Object(i["v"])(),Object(i["e"])(r,{key:e,label:e},null,8,["label"])})),128))])])])})),ge=Object(i["K"])("data-v-e1d94b98");Object(i["y"])("data-v-e1d94b98");var Ae={class:"tag"};Object(i["w"])();var Ie=ge((function(e,t,c,n,a,o){return Object(i["v"])(),Object(i["e"])("li",Ae,[Object(i["i"])("label",{for:c.label,onClick:t[1]||(t[1]=function(){return o.changeState&&o.changeState.apply(o,arguments)})},[(Object(i["v"])(),Object(i["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-checked":a.icon.ariaChecked,role:"checkbox",class:"icon"},[(Object(i["v"])(),Object(i["e"])(Object(i["E"])(a.icon.icon),{key:a.icon.icon}))],8,["aria-checked"])),Object(i["i"])("span",null,Object(i["G"])(c.label),1)],8,["for"])])})),ke={d:"M19,21H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19a2,2,0,0,1,2,2V19A2,2,0,0,1,19,21ZM5,5V19H19V5Z"};function we(e,t){return Object(i["v"])(),Object(i["e"])("path",ke)}const ye={};ye.render=we;var Ce=ye,_e={name:"TripleCheckbox",components:{IconExcluded:ae,IconSelected:re,IconNotSelected:Ce},props:{label:{type:String}},data:function(){return{state:"NOT",icon:this.showIcon(this.state)}},methods:{showIcon:function(e){switch(e){case"SELECTED":return{icon:"IconSelected",ariaChecked:"true"};case"EXCLUDED":return{icon:"IconExcluded",ariaChecked:"mixed"};default:return{icon:"IconNotSelected",ariaChecked:"false"}}},changeState:function(){switch(this.icon.ariaChecked){case"false":this.icon={icon:"IconSelected",ariaChecked:"true"};break;case"true":this.icon={icon:"IconExcluded",ariaChecked:"mixed"};break;default:this.icon={icon:"IconNotSelected",ariaChecked:"false"};break}}}};c("9bc4");_e.render=Ie,_e.__scopeId="data-v-e1d94b98";var Se=_e,xe=c("c000"),De={name:"SelectorAccordion",components:{IconArrowNext:xe["a"],IconBase:k["a"],TripleCheckbox:Se},props:{selectorItems:{type:Array}}};c("5938");De.render=he,De.__scopeId="data-v-7d6bbd07";var Te=De,Le={name:"Controller",components:{IconBase:k["a"],IconExcluded:ae,IconSelected:re,TagItem:je,SelectorAccordion:Te,TripleCheckbox:Se},data:function(){return{isOpen:!1,selectors:[{name:"장르",selectorItem:["BL","GL 백합","SF","개그","공포","드라마","로맨스","모험","무협","미스터리","범죄","스릴러","스포츠","시대물","아동","아이돌","액션","음식","일상","재난","추리","특촬","판타지","하렘"]},{name:"태그",selectorItem:["가족","감동","게임","동물","동양풍","두뇌싸움","로봇","루프물","마법소녀","먼치킨","배틀","뱀파이어","복수","삼각관계","서양풍","선생님","성장","슬픔","시간여행","역하렘","연예인","열혈","오타쿠","요괴 및 괴물","육아","이세계","정치","좀비","주체적 여성","짝사랑","철학","퇴마","학교"]},{name:"방영",selectorItem:["방영중","완결"]},{name:"제작사",selectorItem:["본즈","쿄토애니메이션","매드하우스","A-1Pictures","유포테이블","WIT Studio","프로덕션 I.G","P.A.Works","J.C.Staff","샤프트","동화공방","스튜디오 딘","실버 링크","스튜디오 피에로","MAPPA","화이트폭스","라르케","트리거","폴리곤 픽쳐스","사테라이트"]},{name:"출시타입",selectorItem:["TVA","극장판","OVA"]},{name:"브랜드",selectorItem:["애니맥스 플러스","애니플러스","KTH","대원","기타"]}],oldTouch:null}},computed:{years:function(){for(var e=new Date,t=e.getFullYear(),c=[],i=t;i>=1990;i--)c.push(i);return c}},methods:{touchStart:function(e){this.oldTouch=e.touches[0].clientY},touchMove:function(e){this.oldTouch>e.touches[0].clientY&&!this.isOpen?this.isOpen=!0:this.oldTouch<=e.touches[0].clientY&&this.isOpen&&(this.isOpen=!1)}}};c("cc5e");Le.render=te,Le.__scopeId="data-v-7abd52c8";var Be=Le,Ve={name:"TagSearch",components:{PosterList:S,Controller:Be},data:function(){return{resultCount:29,posterList:[{title:"호리미야",img:void 0,isAdult:!1},{title:"4월은 너의 거짓말",img:void 0,isAdult:!1},{title:"청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",img:void 0,isAdult:!1},{title:"목소리의 형태",img:void 0,isAdult:!1},{title:"청춘 돼지는 꿈꾸는 소녀의 꿈을 꾸지 않는다",img:void 0,isAdult:!1},{title:"역시 내 청춘 러브코메디는 잘못됐다. 완",img:void 0,isAdult:!1},{title:"역시 내 청춘 러브코메디는 잘못됐다.",img:void 0,isAdult:!1},{title:"역시 내 청춘 러브코메디는 잘못됐다. 속",img:void 0,isAdult:!1},{title:"너의 췌장을 먹고싶어",img:void 0,isAdult:!1},{title:"도메스틱한 그녀",img:void 0,isAdult:!0},{title:"클라나드 에프터 스토리",img:void 0,isAdult:!1},{title:"(자막) 바이올렛 에버가든 : 영원과 자동 수기인형",img:void 0,isAdult:!1},{title:"클라나드 1기",img:void 0,isAdult:!1},{title:"그 남자, 그 여자의 사정",img:void 0,isAdult:!1},{title:"이 게임 폐인이 사는 법",img:void 0,isAdult:!1},{title:"치하야후루 3기",img:void 0,isAdult:!1},{title:"치하야후루 1기",img:void 0,isAdult:!1},{title:"리라이프",img:void 0,isAdult:!1},{title:"언제나 우리의 사랑은 10cm였다.",img:void 0,isAdult:!1},{title:"치하야후루 2기",img:void 0,isAdult:!1},{title:"약캐 토모자키 군",img:void 0,isAdult:!1},{title:"러브 앤 프로듀서",img:void 0,isAdult:!1},{title:"언덕길의 아폴론",img:void 0,isAdult:!1},{title:"(더빙) 바이올렛 에버가든 : 영원과 자동 수기 인형",img:void 0,isAdult:!1},{title:"리라이프 FINAL ARC",img:void 0,isAdult:!1},{title:"아라카와 언더 더 브리지 1기",img:void 0,isAdult:!1},{title:"그 여름",img:void 0,isAdult:!1},{title:"카시카",img:void 0,isAdult:!1},{title:"어떻게든 되는 나날",img:void 0,isAdult:!1}]}},computed:{formatResult:function(){return this.resultCount.toLocaleString()}}};c("a48d");Ve.render=b,Ve.__scopeId="data-v-a840d8b2";t["default"]=Ve},"8acb":function(e,t,c){"use strict";c("5ea8")},"9bc4":function(e,t,c){"use strict";c("54e4")},a48d:function(e,t,c){"use strict";c("ceda")},b013:function(e,t,c){"use strict";c("1602")},b243:function(e,t,c){},bb23:function(e,t,c){},c000:function(e,t,c){"use strict";var i=c("7a23"),n={d:"M9,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L16.59,12,8.29,3.71A1,1,0,0,1,9.71,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,9,22Z"};function a(e,t){return Object(i["v"])(),Object(i["e"])("path",n)}const o={};o.render=a;t["a"]=o},cc5e:function(e,t,c){"use strict";c("6d6e")},ceda:function(e,t,c){},eef1:function(e,t,c){"use strict";var i=c("7a23"),n={class:"b",d:"M19.51,11.14,7.31,3.9a1,1,0,0,0-1.51.86V19.24a1,1,0,0,0,1.51.86l12.2-7.24A1,1,0,0,0,19.51,11.14Z"};function a(e,t){return Object(i["v"])(),Object(i["e"])("path",n)}const o={};o.render=a;t["a"]=o}}]);
//# sourceMappingURL=chunk-5f1af184.8414c127.js.map