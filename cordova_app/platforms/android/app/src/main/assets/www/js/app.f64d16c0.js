(function(e){function n(n){for(var o,a,c=n[0],l=n[1],u=n[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var s=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a=t("2877"),c={},l=Object(a["a"])(c,r,i,!1,null,null,null),u=l.exports,s=t("8c4f"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main_div"},[e._m(0),t("div",{staticStyle:{"margin-top":"90px"}},[t("div",{staticClass:"darkbutton__controls button"},[t("b-button",{attrs:{type:"login",variant:""},on:{click:e.onCallDevice}},[e._v("Get Device Token")])],1),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.store.deviceFCMToken,expression:"store.deviceFCMToken"}],domProps:{value:e.store.deviceFCMToken},on:{input:function(n){n.target.composing||e.$set(e.store,"deviceFCMToken",n.target.value)}}})])])},f=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"brand-logo text-center"},[t("h3",[e._v("Cordova with Vuejs, Firebase")])])}],p=new o["default"]({data:{deviceFCMToken:""},methods:{}}),v={name:"Home",components:{},data:function(){return{token:"",store:p}},mounted:function(){setTimeout(this.onCallDevice,1e3)},methods:{onCallDevice:function(){window.FirebasePlugin&&(window.FirebasePlugin.grantPermission((function(e){console.log("granted"+e)}),(function(e){console.log("Failed to get FCM token",e)})),window.FirebasePlugin.getToken((function(e){console.log("Got FCM token: "+e),e&&(p.deviceFCMToken="",p.deviceFCMToken=e)}),(function(e){console.log("Failed to get FCM token",e)})),window.FirebasePlugin.onTokenRefresh((function(e){console.log("Token refreshed: "+e)}),(function(e){console.log("Failed to refresh token",e)})),window.FirebasePlugin.getId((function(e){console.log("Got FCM ID: "+e)}),(function(e){console.log("Failed to get FCM ID",e)})))}}},g=v,b=Object(a["a"])(g,d,f,!1,null,null,null),w=b.exports;o["default"].use(s["a"]);var m=[{path:"/",name:"home",component:w}],h=new s["a"]({routes:m}),F=h,k=t("5f5b"),y=t("bc3a"),C=t.n(y);t("f9e3"),t("2dd8");o["default"].config.productionTip=!1,o["default"].use(k["a"]),C.a.defaults.baseURL="http://3.14.103.48:8080/api/";var T=function(){new o["default"]({router:F,data:function(){return{store:p}},render:function(e){return e(u)}}).$mount("#app")};document.addEventListener("deviceready",(function(){console.log("Ready, Render the App"),window.FirebasePlugin&&(window.FirebasePlugin.getToken((function(e){p.deviceFCMToken=e}),(function(e){console.error(e)})),window.FirebasePlugin.onTokenRefresh((function(e){console.log("Refresh to get new token: "+e),p.deviceFCMToken=e}),(function(e){alert(e)})),window.FirebasePlugin.onMessageReceived((function(e){console.log("Message type: "+e.messageType),"notification"===e.messageType&&(alert("Notification message received"),e.tap&&alert("Tapped in "+e.tap))}),(function(e){console.error(e)}))),T()}));var M="undefined"!==typeof window.cordova;M||document.dispatchEvent(new CustomEvent("deviceready",{}))}});
//# sourceMappingURL=app.f64d16c0.js.map