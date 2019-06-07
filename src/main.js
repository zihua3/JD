// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

import $stringUtils from "@/assets/script-utils/string-utils.js";

import VApp from "@/components/v-app";
import * as filters from './filters/index';

NutUI.install(Vue);
Vue.config.productionTip = false;

Object.keys(filters.default).forEach((key) => {
  Vue.filter(key, filters.default[key])
})


// 全局工具类
Vue.prototype.$stringUtils = $stringUtils;
// 全局组件
Vue.component("v-app", VApp);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
