(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fcb6617"],{"4de4":function(e,t,i){"use strict";var n=i("23e7"),r=i("b727").filter,o=i("1dde"),c=o("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},6181:function(e,t,i){"use strict";i("eba8")},b727:function(e,t,i){var n=i("0366"),r=i("44ad"),o=i("7b0b"),c=i("50c4"),l=i("65f0"),s=[].push,a=function(e){var t=1==e,i=2==e,a=3==e,f=4==e,d=6==e,u=7==e,b=5==e||d;return function(h,O,j,p){for(var v,g,m=o(h),w=r(m),S=n(O,j,3),M=c(w.length),P=0,N=p||l,k=t?N(h,M):i||u?N(h,0):void 0;M>P;P++)if((b||P in w)&&(v=w[P],g=S(v,P,m),e))if(t)k[P]=g;else if(g)switch(e){case 3:return!0;case 5:return v;case 6:return P;case 2:s.call(k,v)}else switch(e){case 4:return!1;case 7:s.call(k,v)}return d?-1:a||f?f:k}};e.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6),filterOut:a(7)}},cb55:function(e,t,i){"use strict";i.r(t);i("b0c0");var n=i("7a23"),r=Object(n["N"])("data-v-aa6711f6");Object(n["y"])("data-v-aa6711f6");var o={class:"change-profile"},c=Object(n["i"])("ul",{class:"alert"},[Object(n["i"])("li",null,"4개 이하의 프로필만 만들 수 있어요."),Object(n["i"])("li",null,"최소 1개의 프로필이 있어야 해요."),Object(n["i"])("li",null,"닉네임은 8글자보다 짧아야 해요.")],-1),l={class:"profiles"},s={class:"profile-items"},a={class:"icon"},f={class:"icon"};Object(n["w"])();var d=r((function(e,t,i,d,u,b){var h=Object(n["D"])("profile"),O=Object(n["D"])("icon-plus"),j=Object(n["D"])("icon-base"),p=Object(n["D"])("vueflix-func-btn"),v=Object(n["D"])("icon-remove");return Object(n["v"])(),Object(n["e"])("main",o,[Object(n["i"])("h2",null,Object(n["G"])(u.infoString),1),c,Object(n["i"])("div",l,[Object(n["i"])("ul",s,[(Object(n["v"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(u.profiles,(function(e,t){return Object(n["v"])(),Object(n["e"])("li",{class:["profile-item",{selected:u.isEditMode&&e.isSelected}],key:e.name,onClick:function(e){return b.toggleSelected(t)}},[Object(n["i"])(h),Object(n["i"])("span",null,Object(n["G"])(e.name),1)],10,["onClick"])})),128))]),Object(n["i"])("div",{class:["btn-area",{center:u.isNewProfileMode||u.isEditMode||u.profiles.length>3}]},[!u.isEditMode&&u.profiles.length<=3?(Object(n["v"])(),Object(n["e"])(p,{key:0,class:"new",border:"1px solid var(--bg-200)",onClick:b.newProfile},{default:r((function(){return[Object(n["i"])("i",a,[Object(n["i"])(j,null,{default:r((function(){return[Object(n["i"])(O)]})),_:1})]),Object(n["h"])(" "+Object(n["G"])(u.newBtnString),1)]})),_:1},8,["onClick"])):Object(n["f"])("",!0),u.isNewProfileMode?Object(n["f"])("",!0):(Object(n["v"])(),Object(n["e"])(p,{key:1,bg:"var(--theme-500)",border:"1px solid var(--theme-500)",onClick:b.editProfile,textColor:"var(--top-item)"},{default:r((function(){return[Object(n["i"])("i",f,[Object(n["i"])(j,null,{default:r((function(){return[Object(n["i"])(v)]})),_:1})]),Object(n["h"])(" "+Object(n["G"])(u.editBtnString),1)]})),_:1},8,["onClick"]))],2),Object(n["M"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.newProfileName=e}),placeholder:"새 프로필 이름을 입력하세요",class:"profile-name-input",ref:"profileNameInput"},null,512),[[n["I"],u.newProfileName],[n["J"],u.isNewProfileMode]])])])})),u=(i("4de4"),i("66aa")),b=i("ff57"),h=i("4a42"),O={d:"M20,11H13V4a1,1,0,0,0-2,0v7H4a1,1,0,0,0,0,2h7v7a1,1,0,0,0,2,0V13h7a1,1,0,0,0,0-2Z"};function j(e,t){return Object(n["v"])(),Object(n["e"])("path",O)}const p={};p.render=j;var v=p,g={d:"M19,6H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V6H5A1,1,0,0,0,5,8H6V20a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2ZM10,4h4V6H10Zm6,16H8V8h8Z"};function m(e,t){return Object(n["v"])(),Object(n["e"])("path",g)}const w={};w.render=m;var S=w,M={name:"ChangeProfile",components:{Profile:u["a"],VueflixFuncBtn:b["a"],IconBase:h["a"],IconPlus:v,IconRemove:S},data:function(){return{profiles:[{name:"미야조노 카오리",isSelected:!1},{name:"시이나 마시로",isSelected:!1},{name:"짱구",isSelected:!1}],notSelected:[],editBtnString:"편집",infoString:"사용할 프로필을 선택하세요",newBtnString:"새 프로필",isEditMode:!1,newProfileName:"",isNewProfileMode:!1}},methods:{editProfile:function(){this.isEditMode=!this.isEditMode,this.editBtnString=this.isEditMode?"삭제":"편집",this.infoString=this.isEditMode?"삭제할 프로필을 선택하세요":"사용할 프로필을 선택하세요",!this.isEditMode&&this.notSelected.length>=1&&(this.profiles=this.notSelected)},toggleSelected:function(e){this.isEditMode&&(this.profiles[e].isSelected=!this.profiles[e].isSelected),this.notSelected=this.profiles.filter((function(e){return!1===e.isSelected}))},newProfile:function(){this.$refs.profileNameInput.focus(),this.infoString=this.isNewProfileMode?"사용할 프로필을 선택하세요":"새로 만들 프로필의 이름을 입력하세요",this.profiles.length<=3&&(this.isNewProfileMode=!this.isNewProfileMode,this.newBtnString=this.isNewProfileMode?"추가":"새 프로필",!this.isNewProfileMode&&this.newProfileName.length>0&&this.newProfileName.length<=8&&this.profiles.push({name:this.newProfileName,isSelected:!1}),this.newProfileName="")}}};i("f881");M.render=d,M.__scopeId="data-v-aa6711f6";t["default"]=M},d308:function(e,t,i){},eba8:function(e,t,i){},f881:function(e,t,i){"use strict";i("d308")},ff57:function(e,t,i){"use strict";var n=i("7a23"),r=Object(n["N"])("data-v-b6ef0672"),o=r((function(e,t,i,r,o,c){return Object(n["v"])(),Object(n["e"])("button",{class:"func-btn",style:o.style},[Object(n["C"])(e.$slots,"default",{},void 0,!0)],4)})),c={name:"VueflixFuncBtn",props:{bg:{type:String,default:"#fff"},textColor:{type:String,default:"inherit"},border:{type:String,default:"none"}},data:function(){return{style:{backgroundColor:this.bg,color:this.textColor,border:this.border}}}};i("6181");c.render=o,c.__scopeId="data-v-b6ef0672";t["a"]=c}}]);
//# sourceMappingURL=chunk-1fcb6617.f31da22f.js.map