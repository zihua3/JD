// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

import $stringUtils from "@/assets/script-utils/string-utils.js";

import VApp from "@/components/v-app"

NutUI.install(Vue);
Vue.config.productionTip = false;

Vue.prototype.$stringUtils = $stringUtils;

Vue.component("v-app", VApp);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
