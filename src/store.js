import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * 字符串中横线转换为驼峰格式
 * @param name
 * @return {*|never|boolean|void|string|string}
 */
function toHump(name) {
  return name.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

function randamMduName() {
  return "storeMdu" + Math.floor(Math.random() * 1000);
}

function loadStoreMdus() {
  let storeMdus = {};   // 状态模块
  let storeTypes = {};  // 兼容旧配置处理

  const context = require.context('./stores', false, /[A-Za-z0-9-_,\s]+\.js$/i);
  for (let key of context.keys()) {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (!(matched && matched.length > 1)) {
      continue;
    }

    const fileName = matched[1]; // 获取文件名
    if (fileName === "index") {
      continue;
    }

    // 如果是store开头的则是旧的状态配置
    if (fileName.indexOf('store-') > -1) {
      storeMdus[randamMduName()] = context(key).STATE;
      Object.assign(storeTypes, context(key).TYPES);
    } else {
      storeMdus[fileName] = context(key).default;
    }
  }

  return {
    storeMdus: storeMdus,
    storeTypes: storeTypes
  };
}

const storeConf = loadStoreMdus();
const storeMdus = storeConf.storeMdus;
const storeTypes = storeConf.storeTypes;
export {
  storeMdus,
  storeTypes
};
