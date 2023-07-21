import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: () => import("../views/PageHome.vue"),
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/PageArticles.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/PageContacts.vue"),
    },
    {
      path: "/works",
      name: "works",
      component: () => import("../views/PageWorks.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/PageAbout.vue"),
    },
    {
      path: "/pets",
      name: "pets",
      component: () => import("../views/PagePets.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
});

export default router;
