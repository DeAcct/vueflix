(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6d2696e"],{"5c9c":function(e,n,t){"use strict";t.r(n);var a=t("7a23"),i={class:"input-boxes"},c=Object(a["j"])("닉네임"),o=Object(a["j"])("이메일"),r=Object(a["j"])(" 이메일 형식이 올바르지 않아요. 다시 입력해 주세요. "),u=Object(a["j"])("비밀번호"),s=Object(a["j"])("로그인");function d(e,n,t,d,l,b){var p=Object(a["H"])("input-box"),f=Object(a["H"])("vueflix-btn");return Object(a["z"])(),Object(a["g"])("form",{class:"login-box",onSubmit:n[0]||(n[0]=Object(a["T"])((function(){return b.loginContinue&&b.loginContinue.apply(b,arguments)}),["prevent"]))},[Object(a["h"])("div",i,[Object(a["k"])(p,{type:"text",autofocus:!0,identify:"nickname",validAlert:!1,onValueChanged:b.onNickNameChanged},{label:Object(a["R"])((function(){return[c]})),_:1},8,["onValueChanged"]),Object(a["k"])(p,{type:"email",autofocus:!1,identify:"email",isValid:b.isEmailValid,validAlert:!0,onValueChanged:b.onEmailChanged},{label:Object(a["R"])((function(){return[o]})),"valid-alert":Object(a["R"])((function(){return[r]})),_:1},8,["isValid","onValueChanged"]),Object(a["k"])(p,{type:"password",autofocus:!1,identify:"password",validAlert:!1,onValueChanged:b.onPasswordChanged},{label:Object(a["R"])((function(){return[u]})),_:1},8,["onValueChanged"])]),Object(a["k"])(f,{type:"submit",component:"button",disabled:!(b.isEmailValid&&b.isPasswordValid)},{text:Object(a["R"])((function(){return[s]})),_:1},8,["disabled"])],32)}var l=t("1da1"),b=(t("96cf"),t("ac1f"),t("466d"),t("b0c0"),t("ea7b")),p=t("dc18"),f=t("3291"),m={name:"Auth",components:{VueflixBtn:f["a"],InputBox:p["a"]},data:function(){return{nickname:"",email:"",password:""}},computed:{isEmailValid:function(){var e=/^[0-9a-zA-Z]([-]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-]?[0-9a-zA-Z])+[.][a-zA-Z]{2,3}$/i,n=!!this.email.match(e);return n},isPasswordValid:function(){var e=!!this.password;return e}},methods:{onNickNameChanged:function(e){this.name=e},onEmailChanged:function(e){this.email=e},onPasswordChanged:function(e){this.password=e},loginContinue:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=Object(b["b"])(),n.prev=1,n.next=4,Object(b["a"])(t,e.email,e.password);case 4:return n.next=6,Object(b["f"])(t.currentUser,{displayName:e.nickname});case 6:return n.next=8,Object(b["d"])(t,e.email,e.password);case 8:e.$router.push("/my"),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),console.log(n.t0.code);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()}}},j=(t("9d39"),t("6b0d")),h=t.n(j);const O=h()(m,[["render",d],["__scopeId","data-v-5db45079"]]);n["default"]=O},"9d39":function(e,n,t){"use strict";t("a8a3")},a8a3:function(e,n,t){}}]);
//# sourceMappingURL=chunk-e6d2696e.341ae7b0.js.map