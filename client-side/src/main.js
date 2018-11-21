import '@babel/polyfill';
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App.vue';
import router from './routes/_router';
import store from './store/index';
import './registerServiceWorker';
import './plugins/vuetify';
import './plugins/vueMediaEmbed';

Vue.config.productionTip = false;
sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
