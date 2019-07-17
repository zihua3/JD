import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';


Vue.use(VueRouter);
Vue.use(Vuex);
NutUI.install(Vue);

import AppRouter from './router';
import AppConf from "./app-conf";
import { storeMdus, storeTypes } from "./store";

Vue.config.productionTip = false;

const store = new Vuex.Store({ modules: storeMdus });
const router = new AppRouter(store, storeTypes);

Vue.use(AppConf);

new Vue({
  router: router.getRouter(),
  store,
  template: '<App/>',
  components: { App },
  render: (h) => h(App)
}).$mount('#app');
