import Vue from "vue";
import App from "./App.vue";
import router from "./routes/router";
import store from "./stores/store";
import "@babel/polyfill";
import "./plugins/vuetify";
import "./plugins/axios";
import "./plugins/registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
