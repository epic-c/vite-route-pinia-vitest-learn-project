import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/VueTemplateView.vue"),
    },
    {
      path: "/optionApi",
      name: "optionApi",
      component: () => import("../views/OptionApiView.vue"),
    },
    {
      path: "/compositionApi",
      name: "compositionApi",
      component: () => import("../views/CompositionApi.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/CalendarView.vue"),
    },
    {
      path: "/note",
      name: "note",
      component: () => import("../views/NoteView.vue"),
    },
    {
      // TODO 動態路由 (params)
      path: "/router/:p",
      name: "router",
      // TODO 將動態路由的值用 props 接獲
      props: true,
      component: () => import("../views/RouterTestView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  // TODO 路由守衛 hook
  console.log("In router beforeEach hook");
  console.log(`'to' fullPath: '${to.fullPath}'`);
  console.log(`'form' fullPath: '${from.fullPath}'`);
});
export default router;
