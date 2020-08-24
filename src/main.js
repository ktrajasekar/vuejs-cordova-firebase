import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store.js";
import { BootstrapVue } from "bootstrap-vue";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import vueMultiSelect from 'vue-multi-select';
// import 'vue-multi-select/dist/lib/vue-multi-select.min.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// var VueCordovaDevice = require("vue-cordova-device");
// Vue.use(VueCordovaDevice);



const init = () => {
new Vue({
  router,
  data() {
    return {
      store: store
    };
  },
  render: h => h(App),
}).$mount("#app");
}

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  if(window.FirebasePlugin){
  window.FirebasePlugin.getToken(function(token) {
    // save this server-side and use it to push notifications to this device
    store.deviceFCMToken = token;
}, function(error) {
    console.error(error);
});

// Get notified when a token is refreshed
window.FirebasePlugin.onTokenRefresh(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log("Refresh to get new token: " + token);
    store.deviceFCMToken = token;
}, function(error) {
    alert(error);
});

// Get notified when the user opens a notification
window.FirebasePlugin.onMessageReceived(function(message) {
    console.log("Message type: " + message.messageType);
    if(message.messageType === "notification"){
        alert("Notification message received");
        if(message.tap){
            alert("Tapped in " + message.tap);
        }
    }
}, function(error) {
    console.error(error);
}); 
  }
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== "undefined");
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}
