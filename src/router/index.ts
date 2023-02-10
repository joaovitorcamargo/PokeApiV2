import { createRouter, createWebHistory } from "vue-router";

function setCurrentComponent(page: string) {
  return () => import(`@/views/${page}/index.vue`);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: setCurrentComponent("Home"),
    },
  ],
});

export default router;
