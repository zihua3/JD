/**
 * 路由Route信息对象
 *
 * @author  zihua3
 * @created 2019-06-06
 */

export default {
  /**
   * 路由信息构建对象
   * @param name       路由名称
   * @param path        路由URL
   * @param component  路由组件，默认基于views下的页面组件
   * @param configs    其它配置，具体请参考vue-router文档：https://router.vuejs.org/zh/
   * @constructor
   */
  create(name = "", path = "", component = "", configs = "") {
    let route = {
      name: name,
      path: path,
      component: () => import("@/views" + component),
      meta: {
        keepAlive: false,
        requireAuth: true
      }
    };
    return Object.assign(route, configs);
  }
}
