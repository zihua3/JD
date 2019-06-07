import Vue from 'vue';
import Router from 'vue-router';
import Route from "./base/route";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    Route.create("helloworld", "/", "", {redirect: '/home'}),
    Route.create("helloworld", "/home", "/helloworld.vue"),
    Route.create("helloworld1", "/helloworld", "/helloworld1.vue"),
  ]
})
