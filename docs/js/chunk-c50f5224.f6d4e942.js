(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c50f5224"],{"18b7":function(t,e,c){},2548:function(t,e,c){"use strict";c("6821")},"38e9":function(t,e,c){},4970:function(t,e,c){},5375:function(t,e,c){"use strict";c("4970")},"5b7b":function(t,e,c){"use strict";c("18b7")},"5d6e":function(t,e,c){},"5ea8":function(t,e,c){},6821:function(t,e,c){},"6ef8":function(t,e,c){"use strict";c("38e9")},"87af":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),i={class:"wrap"},o={class:"inner"},a={class:"result-text"},l=Object(n["j"])(" 총 "),s=Object(n["j"])("개의 작품이 검색되었어요! "),r=Object(n["i"])('<label for="sort-order" class="sort-order" data-v-95dea2a8> 정렬 순서 <select name="sort-order" id="sort-order" data-v-95dea2a8><option value="ranking" data-v-95dea2a8>뷰플릭스 랭킹</option><option value="ranking" data-v-95dea2a8>이름</option><option value="ranking" data-v-95dea2a8>최신</option><option value="ranking" data-v-95dea2a8>평가 많은</option><option value="ranking" data-v-95dea2a8>평점 높은</option></select></label><h3 class="blind" data-v-95dea2a8>검색 결과</h3>',2);function u(t,e,c,u,d,b){var O=Object(n["H"])("controller"),j=Object(n["H"])("poster-list");return Object(n["z"])(),Object(n["g"])("div",i,[Object(n["h"])("main",null,[Object(n["k"])(O),Object(n["h"])("div",o,[Object(n["h"])("p",a,[l,Object(n["h"])("strong",null,Object(n["L"])(b.formatResult),1),s]),r,Object(n["k"])(j,{list:d.posterList},null,8,["list"])])])])}var d={class:"poster-list"};function b(t,e,c,i,o,a){var l=Object(n["H"])("poster-item");return Object(n["z"])(),Object(n["g"])("ul",d,[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])(c.list,(function(t){return Object(n["z"])(),Object(n["e"])(l,{key:t.title,isAdult:t.isAdult},{default:Object(n["Q"])((function(){return[Object(n["j"])(Object(n["L"])(t.title),1)]})),_:2},1032,["isAdult"])})),128))])}var O={class:"poster-item"},j={class:"img"},f={class:"icons"},h={key:0,class:"adult-icon icon"},v={class:"play-icon icon"},g={class:"title"};function m(t,e,c,i,o,a){var l=Object(n["H"])("icon-play"),s=Object(n["H"])("icon-base");return Object(n["z"])(),Object(n["g"])("li",O,[Object(n["h"])("figure",null,[Object(n["h"])("div",j,[Object(n["h"])("div",f,[c.isAdult?(Object(n["z"])(),Object(n["g"])("i",h,"19")):Object(n["f"])("",!0),Object(n["h"])("i",v,[Object(n["k"])(s,{width:10,height:10},{default:Object(n["Q"])((function(){return[Object(n["k"])(l)]})),_:1})])])]),Object(n["h"])("figcaption",g,[Object(n["G"])(t.$slots,"default",{},void 0,!0)])])])}var p=c("4a42"),A=c("eef1"),k={name:"PosterItem",components:{IconBase:p["a"],IconPlay:A["a"]},props:{isAdult:{type:Boolean,default:!0},title:{type:String}}},I=(c("8a55"),c("6b0d")),y=c.n(I);const w=y()(k,[["render",m],["__scopeId","data-v-7f2a157a"]]);var z=w,_={name:"PosterList",components:{PosterItem:z},props:{list:{type:Array}}};c("9b74");const H=y()(_,[["render",b],["__scopeId","data-v-4aa1a6c8"]]);var T=H,C=(c("b0c0"),function(t){return Object(n["C"])("data-v-1e9b6834"),t=t(),Object(n["A"])(),t}),L={class:"swipe-indi",ref:"swipeIndi"},S=C((function(){return Object(n["h"])("strong",null,"태그 선택",-1)})),x={class:"bottom-row"},M={class:"tags-container selected"},Q={class:"icon"},V={class:"tags"},E=Object(n["j"])("로맨스"),P=Object(n["j"])("드라마"),F={class:"tags-container excluded"},Z={class:"icon"},Y={class:"tags"},B=Object(n["j"])("특촬"),G={class:"selector-container"},N=C((function(){return Object(n["h"])("legend",{class:"blind"},"일반 태그",-1)})),q={class:"general-selector"},W={class:"year-quarter-selector"},D=C((function(){return Object(n["h"])("legend",{class:"blind"},"방영 시기",-1)})),J={for:"year"},$=Object(n["j"])(" 년도 "),R={name:"year",id:"year"},K={for:"quarter"},U=Object(n["j"])(" 분기 "),X={name:"quarter",id:"quarter"},tt=C((function(){return Object(n["h"])("legend",{class:"blind"},"세부 태그",-1)})),et={class:"selectors"};function ct(t,e,c,i,o,a){var l=Object(n["H"])("icon-selected"),s=Object(n["H"])("icon-base"),r=Object(n["H"])("tag-item"),u=Object(n["H"])("icon-excluded"),d=Object(n["H"])("triple-checkbox"),b=Object(n["H"])("accordion-widget");return Object(n["z"])(),Object(n["g"])("form",{class:Object(n["q"])(["controller",{"controller--open":o.isOpen}])},[Object(n["h"])("div",{class:"top-row",onTouchstart:e[0]||(e[0]=function(t){return a.touchStart(t)}),onTouchmove:e[1]||(e[1]=function(t){return a.touchMove(t)})},[Object(n["h"])("span",L,null,512),S],32),Object(n["h"])("div",x,[Object(n["h"])("div",M,[Object(n["h"])("i",Q,[Object(n["k"])(s,{"icon-name":"선택된 태그"},{default:Object(n["Q"])((function(){return[Object(n["k"])(l)]})),_:1})]),Object(n["h"])("ul",V,[Object(n["k"])(r,null,{default:Object(n["Q"])((function(){return[E]})),_:1}),Object(n["k"])(r,null,{default:Object(n["Q"])((function(){return[P]})),_:1})])]),Object(n["h"])("div",F,[Object(n["h"])("i",Z,[Object(n["k"])(s,{"icon-name":"제외된 태그"},{default:Object(n["Q"])((function(){return[Object(n["k"])(u)]})),_:1})]),Object(n["h"])("ul",Y,[Object(n["k"])(r,null,{default:Object(n["Q"])((function(){return[B]})),_:1})])])]),Object(n["h"])("div",G,[Object(n["h"])("fieldset",null,[N,Object(n["h"])("ul",q,[Object(n["k"])(d,{label:"멤버십에 포함됨"}),Object(n["k"])(d,{label:"뷰플릭스에서 감상 가능"})])]),Object(n["h"])("fieldset",W,[D,Object(n["h"])("label",J,[$,Object(n["h"])("select",R,[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])(a.years,(function(t){return Object(n["z"])(),Object(n["g"])("option",{key:t},Object(n["L"])(t)+"년",1)})),128))])]),Object(n["h"])("label",K,[U,Object(n["h"])("select",X,[(Object(n["z"])(),Object(n["g"])(n["a"],null,Object(n["F"])(4,(function(t){return Object(n["h"])("option",{key:"".concat(t,"분기")},Object(n["L"])(t)+"분기 ",1)})),64))])])]),Object(n["h"])("fieldset",null,[tt,Object(n["h"])("ul",et,[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])(o.selectors,(function(t){return Object(n["z"])(),Object(n["g"])("li",{key:t.name,class:"selector"},[Object(n["k"])(b,null,{title:Object(n["Q"])((function(){return[Object(n["j"])(Object(n["L"])(t.name),1)]})),content:Object(n["Q"])((function(){return[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])(t.selectorItem,(function(t){return Object(n["z"])(),Object(n["e"])(d,{key:t,label:t},null,8,["label"])})),128))]})),_:2},1024)])})),128))])])])],2)}var nt={d:"M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM16,13H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"};function it(t,e){return Object(n["z"])(),Object(n["g"])("path",nt)}const ot={},at=y()(ot,[["render",it]]);var lt=at,st={d:"M7.29,11.29a1,1,0,0,0,0,1.42l4,4a1,1,0,0,0,1.42,0L21,8.42V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19a2,2,0,0,1,2,2v.58l-2,2-7,7-3.29-3.3A1,1,0,0,0,7.29,11.29Z"};function rt(t,e){return Object(n["z"])(),Object(n["g"])("path",st)}const ut={},dt=y()(ut,[["render",rt]]);var bt=dt,Ot={class:"tag-item"};function jt(t,e,c,i,o,a){return Object(n["z"])(),Object(n["g"])("li",Ot,[Object(n["G"])(t.$slots,"default",{},void 0,!0)])}var ft={name:"TagItem"};c("8acb");const ht=y()(ft,[["render",jt],["__scopeId","data-v-46e626de"]]);var vt=ht,gt={class:"accordion-widget"},mt={class:"icon"},pt={class:"sub-tags"};function At(t,e,c,i,o,a){var l=Object(n["H"])("icon-arrow-next"),s=Object(n["H"])("icon-base");return Object(n["z"])(),Object(n["g"])("div",gt,[Object(n["h"])("details",{ref:"accordionWidget",onToggle:e[0]||(e[0]=function(){return a.detailsToggle&&a.detailsToggle.apply(a,arguments)})},[Object(n["h"])("summary",null,[Object(n["h"])("i",mt,[Object(n["k"])(s,{width:"2rem",height:"2rem","icon-name":o.isOpen?"닫기":"열기"},{default:Object(n["Q"])((function(){return[Object(n["k"])(l)]})),_:1},8,["icon-name"])]),Object(n["G"])(t.$slots,"title",{},void 0,!0)]),Object(n["h"])("ul",pt,[Object(n["G"])(t.$slots,"content",{},void 0,!0)])],544)])}var kt=c("c000"),It={name:"AccordionWidget",components:{IconArrowNext:kt["a"],IconBase:p["a"]},props:{selectorItems:{type:Array}},data:function(){return{isOpen:!1}},methods:{detailsToggle:function(t){this.isOpen=t.currentTarget.open}}};c("5375");const yt=y()(It,[["render",At],["__scopeId","data-v-3add38f4"]]);var wt=yt,zt={class:"tag"},_t=["for"],Ht=["aria-checked"];function Tt(t,e,c,i,o,a){return Object(n["z"])(),Object(n["g"])("li",zt,[Object(n["h"])("span",{for:c.label,onClick:e[0]||(e[0]=function(){return a.changeState&&a.changeState.apply(a,arguments)}),class:"label"},[(Object(n["z"])(),Object(n["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-checked":o.icon.ariaChecked,role:"checkbox",class:"icon"},[(Object(n["z"])(),Object(n["e"])(Object(n["J"])(o.icon.icon),{key:o.icon.icon}))],8,Ht)),Object(n["h"])("span",null,Object(n["L"])(c.label),1)],8,_t)])}var Ct={d:"M19,21H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19a2,2,0,0,1,2,2V19A2,2,0,0,1,19,21ZM5,5V19H19V5Z"};function Lt(t,e){return Object(n["z"])(),Object(n["g"])("path",Ct)}const St={},xt=y()(St,[["render",Lt]]);var Mt=xt,Qt={name:"TripleCheckbox",components:{IconExcluded:lt,IconSelected:bt,IconNotSelected:Mt},props:{label:{type:String}},data:function(){return{state:"NOT",icon:this.showIcon(this.state)}},methods:{showIcon:function(t){switch(t){case"SELECTED":return{icon:"IconSelected",ariaChecked:"true"};case"EXCLUDED":return{icon:"IconExcluded",ariaChecked:"mixed"};default:return{icon:"IconNotSelected",ariaChecked:"false"}}},changeState:function(){switch(this.icon.ariaChecked){case"false":this.icon={icon:"IconSelected",ariaChecked:"true"};break;case"true":this.icon={icon:"IconExcluded",ariaChecked:"mixed"};break;default:this.icon={icon:"IconNotSelected",ariaChecked:"false"};break}}}};c("2548");const Vt=y()(Qt,[["render",Tt],["__scopeId","data-v-3f69b574"]]);var Et=Vt,Pt={name:"Controller",components:{IconBase:p["a"],IconExcluded:lt,IconSelected:bt,TagItem:vt,AccordionWidget:wt,TripleCheckbox:Et},data:function(){return{isOpen:!1,selectors:[{name:"장르",selectorItem:["BL","GL 백합","SF","개그","공포","드라마","로맨스","모험","무협","미스터리","범죄","스릴러","스포츠","시대물","아동","아이돌","액션","음식","일상","재난","추리","특촬","판타지","하렘"]},{name:"태그",selectorItem:["가족","감동","게임","동물","동양풍","두뇌싸움","로봇","루프물","마법소녀","먼치킨","배틀","뱀파이어","복수","삼각관계","서양풍","선생님","성장","슬픔","시간여행","역하렘","연예인","열혈","오타쿠","요괴 및 괴물","육아","이세계","정치","좀비","주체적 여성","짝사랑","철학","퇴마","학교"]},{name:"방영",selectorItem:["방영중","완결"]},{name:"제작사",selectorItem:["본즈","쿄토애니메이션","매드하우스","A-1Pictures","유포테이블","WIT Studio","프로덕션 I.G","P.A.Works","J.C.Staff","샤프트","동화공방","스튜디오 딘","실버 링크","스튜디오 피에로","MAPPA","화이트폭스","라르케","트리거","폴리곤 픽쳐스","사테라이트"]},{name:"출시타입",selectorItem:["TVA","극장판","OVA"]},{name:"브랜드",selectorItem:["애니맥스 플러스","애니플러스","KTH","대원","기타"]}],oldTouch:null}},computed:{years:function(){for(var t=new Date,e=t.getFullYear(),c=[],n=e;n>=1990;n--)c.push(n);return c}},methods:{touchStart:function(t){this.oldTouch=t.touches[0].clientY,document.body.style.overflowY="hidden"},touchMove:function(t){this.oldTouch>t.touches[0].clientY&&!this.isOpen?this.isOpen=!0:this.oldTouch<=t.touches[0].clientY&&this.isOpen&&(this.isOpen=!1,document.body.style.overflowY="scroll")}},unmounted:function(){document.body.style.overflowY="scroll"}};c("5b7b");const Ft=y()(Pt,[["render",ct],["__scopeId","data-v-1e9b6834"]]);var Zt=Ft,Yt={name:"TagSearch",components:{PosterList:T,Controller:Zt},data:function(){return{resultCount:29,posterList:[{title:"호리미야",img:void 0,isAdult:!1},{title:"4월은 너의 거짓말",img:void 0,isAdult:!1},{title:"청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",img:void 0,isAdult:!1},{title:"목소리의 형태",img:void 0,isAdult:!1},{title:"청춘 돼지는 꿈꾸는 소녀의 꿈을 꾸지 않는다",img:void 0,isAdult:!1},{title:"역시 내 청춘 러브코메디는 잘못됐다. 완",img:void 0,isAdult:!1},{title:"역시 내 청춘 러브코메디는 잘못됐다.",img:void 0,isAdult:!1},{title:"역시 내 청춘 러브코메디는 잘못됐다. 속",img:void 0,isAdult:!1},{title:"너의 췌장을 먹고싶어",img:void 0,isAdult:!1},{title:"도메스틱한 그녀",img:void 0,isAdult:!0},{title:"클라나드 에프터 스토리",img:void 0,isAdult:!1},{title:"(자막) 바이올렛 에버가든 : 영원과 자동 수기인형",img:void 0,isAdult:!1},{title:"클라나드 1기",img:void 0,isAdult:!1},{title:"그 남자, 그 여자의 사정",img:void 0,isAdult:!1},{title:"이 게임 폐인이 사는 법",img:void 0,isAdult:!1},{title:"치하야후루 3기",img:void 0,isAdult:!1},{title:"치하야후루 1기",img:void 0,isAdult:!1},{title:"리라이프",img:void 0,isAdult:!1},{title:"언제나 우리의 사랑은 10cm였다.",img:void 0,isAdult:!1},{title:"치하야후루 2기",img:void 0,isAdult:!1},{title:"약캐 토모자키 군",img:void 0,isAdult:!1},{title:"러브 앤 프로듀서",img:void 0,isAdult:!1},{title:"언덕길의 아폴론",img:void 0,isAdult:!1},{title:"(더빙) 바이올렛 에버가든 : 영원과 자동 수기 인형",img:void 0,isAdult:!1},{title:"리라이프 FINAL ARC",img:void 0,isAdult:!1},{title:"아라카와 언더 더 브리지 1기",img:void 0,isAdult:!1},{title:"그 여름",img:void 0,isAdult:!1},{title:"카시카",img:void 0,isAdult:!1},{title:"어떻게든 되는 나날",img:void 0,isAdult:!1}]}},computed:{formatResult:function(){return this.resultCount.toLocaleString()}}};c("6ef8");const Bt=y()(Yt,[["render",u],["__scopeId","data-v-95dea2a8"]]);e["default"]=Bt},"8a55":function(t,e,c){"use strict";c("9c0e")},"8acb":function(t,e,c){"use strict";c("5ea8")},"9b74":function(t,e,c){"use strict";c("5d6e")},"9c0e":function(t,e,c){},c000:function(t,e,c){"use strict";var n=c("7a23"),i={d:"M9,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L16.59,12,8.29,3.71A1,1,0,0,1,9.71,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,9,22Z"};function o(t,e){return Object(n["z"])(),Object(n["g"])("path",i)}var a=c("6b0d"),l=c.n(a);const s={},r=l()(s,[["render",o]]);e["a"]=r},eef1:function(t,e,c){"use strict";var n=c("7a23"),i={d:"M8,20.52a3,3,0,0,1-1.52-.42A3,3,0,0,1,5,17.51v-11A3,3,0,0,1,6.48,3.9a3,3,0,0,1,3,0l9.84,5.51a3,3,0,0,1,0,5.24L9.47,20.13A3,3,0,0,1,8,20.52Zm0-15a1,1,0,0,0-.51.14A1,1,0,0,0,7,6.49v11a1,1,0,0,0,1.49.87l9.84-5.51a1,1,0,0,0,0-1.74h0L8.49,5.62A1,1,0,0,0,8,5.49Z"};function o(t,e){return Object(n["z"])(),Object(n["g"])("path",i)}var a=c("6b0d"),l=c.n(a);const s={},r=l()(s,[["render",o]]);e["a"]=r}}]);
//# sourceMappingURL=chunk-c50f5224.f6d4e942.js.map