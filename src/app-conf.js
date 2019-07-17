import VApp from "@/components/v-app";
import filters from "./filters";
import $stringUtils from "@/assets/script-utils/string-utils.js";

export default {
  install: function (Vue) {
    Object.assign(Vue.prototype, {
      $stringUtils: $stringUtils,
    });
  
    Vue.component("v-app", VApp);

    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key]);
    });
  }
};
