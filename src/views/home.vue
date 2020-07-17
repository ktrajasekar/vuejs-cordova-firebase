<template>
  <div class="main_div">
    <div class="brand-logo text-center">
      <h3>Cordova with Vuejs, Firebase</h3>
    </div>
    <div class="" style="margin-top:90px;">
      <div class="darkbutton__controls button">
        <b-button type="login" variant="" v-on:click="onCallDevice">Get Device Token</b-button>
      </div>
      <textarea v-model="store.deviceFCMToken"> </textarea>
    </div>
  </div>
</template>

<script>
import { store } from "@/store.js";

export default {
  name: "Home",

  components: {},
  data() {
    return {
      token: "",
      store: store,
    };
  },
  mounted() {
    setTimeout(this.onCallDevice, 1000);
  },
  methods: {
    onCallDevice: function() {
      if (window.FirebasePlugin) {
        window.FirebasePlugin.grantPermission(
          function(success) {
            console.log("granted" + success);
          },
          function(error1) {
            console.log("Failed to get FCM token", error1);
          }
        );
        window.FirebasePlugin.getToken(
          function(token) {
            console.log("Got FCM token: " + token);
            if (token) {
              store.deviceFCMToken = "";
              store.deviceFCMToken = token;
            }
          },
          function(error) {
            console.log("Failed to get FCM token", error);
          }
        );
        window.FirebasePlugin.onTokenRefresh(
          function(token) {
            console.log("Token refreshed: " + token);
          },
          function(error) {
            console.log("Failed to refresh token", error);
          }
        );

        window.FirebasePlugin.getId(
          function(id) {
            console.log("Got FCM ID: " + id);
          },
          function(error) {
            console.log("Failed to get FCM ID", error);
          }
        );
      }
    },
  },
};
</script>
