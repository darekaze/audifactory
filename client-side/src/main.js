import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './routes/_router';
import store from './stores/_store';
import './registerServiceWorker';
import './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
