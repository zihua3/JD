import Route from "./base/route";

export default [
  Route.create("default", "/", "", { redirect: '/home' }),
  Route.create("helloworld", "/home", "/helloworld.vue"),
  Route.create("helloworld1", "/helloworld", "/helloworld1.vue"),
];
