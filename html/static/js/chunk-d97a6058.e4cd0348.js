(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d97a6058"],{"27e6":function(t,e,o){},"64bb":function(t,e,o){t.exports=o.p+"static/img/login_logo.228ee757.png"},"7e1d":function(t,e,o){t.exports=o.p+"static/img/login_qr.adf7e57a.png"},"944e":function(t,e,o){"use strict";o("27e6")},"9ed6":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-container"},[i("div",{staticClass:"login-version"},[i("p",{staticClass:"login-version-text"},[t._v(t._s(t.$t("login.version"))+t._s(t.define.version))])]),i("div",{staticClass:"login-content"},[i("div",{staticClass:"login-form"},[i("img",{staticClass:"login-logo",attrs:{src:o("64bb"),alt:""}}),i("div",{staticClass:"login-tab",class:"active"+t.active},[i("a",{staticClass:"item",class:{active:1==t.active},on:{click:function(e){t.active=1}}},[t._v(t._s(t.$t("login.title")))]),i("a",{staticClass:"item",class:{active:2==t.active},on:{click:function(e){t.active=2}}},[t._v(t._s(t.$t("login.scanTitle")))])]),i("el-form",{directives:[{name:"show",rawName:"v-show",value:1==t.active,expression:"active==1"}],ref:"loginForm",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[i("el-form-item",{attrs:{prop:"account"}},[i("el-input",{ref:"account",attrs:{placeholder:t.$t("login.username"),name:"account",type:"text",tabindex:"1",autocomplete:"on","prefix-icon":"el-icon-user",size:"large"},model:{value:t.loginForm.account,callback:function(e){t.$set(t.loginForm,"account",e)},expression:"loginForm.account"}})],1),i("el-form-item",{staticClass:"rule-tip"},[t._v(t._s(t.$t("login.rule")))]),i("el-tooltip",{attrs:{content:t.$t("login.upper"),placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{ref:"password",attrs:{"show-password":"",placeholder:t.$t("login.password"),name:"password",tabindex:"2",autocomplete:"on","prefix-icon":"el-icon-lock",size:"large"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:function(e){return t.checkCapslock(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1),i("el-button",{staticClass:"login-btn",attrs:{loading:t.loading,type:"primary",size:"large"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v(t._s(t.$t("login.logIn")))])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.active,expression:"active==2"}],staticClass:"login-form-QRCode"},[i("img",{staticClass:"qrcode-img",attrs:{src:o("7e1d")}}),i("p",{staticClass:"qrcode-tip"},[t._v(t._s(t.$t("login.scanTip")))])])],1)])])},n=[],s=(o("ac6a"),o("456d"),{name:"Login",data:function(){return{loginForm:{account:"",password:""},loginRules:{account:[{required:!0,trigger:"blur",message:this.$t("login.accountTip")}],password:[{required:!0,trigger:"blur",message:this.$t("login.passwordTip")}]},capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},active:1}},computed:{loginLoading:function(){return this.$store.state.user.loginLoading}},watch:{loginLoading:function(t){t||(this.loading=!1)},$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){var t=this;document.onkeydown=function(e){var o=e.keyCode;13===o&&t.handleLogin()}},mounted:function(){this.$store.commit("user/SET_LOGIN_LOADING",!1)},destroyed:function(){document.onkeydown=function(t){t.keyCode}},methods:{checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},handleLogin:function(){var t=this;this.loading||this.$refs.loginForm.validate((function(e){if(!e)return!1;t.loading=!0,t.$store.commit("user/SET_LOGIN_LOADING",!0),t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/home",query:t.otherQuery})})).catch((function(){t.$store.commit("user/SET_LOGIN_LOADING",!1)}))}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,o){return"redirect"!==o&&(e[o]=t[o]),e}),{})}}}),a=s,r=(o("944e"),o("2877")),c=Object(r["a"])(a,i,n,!1,null,"305a0c0c",null);e["default"]=c.exports}}]);