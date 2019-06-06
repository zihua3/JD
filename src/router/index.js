import Vue from 'vue';
import Router from 'vue-router';
import Route from "./base/route";

Vue.use(Router);

export default new Router({
  routes: [
    Route.create("helloworld", "/", "/helloworld.vue"),
    Route.create("helloworld1", "/helloworld", "/helloworld1.vue"),
  ]
})
