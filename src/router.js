import Vue from "vue";
import VueRouter from "vue-router";
import Trending from "./components/trending/Trending.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/trending",
      component: Trending
    },
  ],
  mode: "history"
});
