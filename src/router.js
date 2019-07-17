import Router from 'vue-router';

export default function (store, storeTypes) {
  this.name = 'appRouter';
  this.store = store;
  this.storeTypes = storeTypes;

  let router = new Router({
    mode: 'history',
    routes: _getRoutes()
  });

  this.getRouter = function () {
    return router;
  };

  function _getRoutes() {
    let routes = [];  
    const context = require.context('./routers', false, /route-[A-Za-z0-9-_,\s]+\.js$/i);
    for (let key of context.keys()) {
      routes = routes.concat(context(key).default);
    }
    return routes;
  }
}
