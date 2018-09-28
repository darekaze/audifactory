import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./routes/router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
