import Vue from "vue";
import App from "./App.vue";
import router from "./routes/router";
import store from "./stores/store";
import "./plugins/axios";
import "./plugins/registerServiceWorker";
import "./plugins/vmd";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
