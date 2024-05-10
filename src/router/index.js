import { createRouter, createWebHistory } from "vue-router";

import * as Public from "@/views/public";
import * as Admin from "@/views/admin";
import * as Auth from "@/views/auth";

import { authGuard, authGuardLog } from "@/_helpers/auth-guard";

// localStorage.setItem("token","layane")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "public-layout",
      component: Public.PublicLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Public.Home,
        },
        {
          path: "/about",
          name: "about",
          component: Public.About,
        },
        {
          path: "/contact",
          name: "contact",
          component: Public.Contact,
        },
        {
          path: "/cocktails",
          name: "cocktails",
          component: Public.Cocktail,
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      // beforeEnter:authGuard,
      // beforeEnter:suthGuard, on letulise pas dans le cas de children "simple route"
      component: Admin.AdminLayout,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Admin.Dashboard,
          meta: { requiresAuth: true },
        },
        {
          path: "users/index",
          name: "uIndex",
          component: Admin.UserIndex,
          meta: { requiresAuth: true },
        },
        {
          path: "users/edit/:id(\\d+)",
          name: "uEdit",
          component: Admin.UserEdit,
          props: true,
          meta: { requiresAuth: true },
        },
        {
          path: "users/add",
          name: "user add",
          component: Admin.UserAdd,
          meta: { requiresAuth: true },
        },
        {
          path: "cocktails/index",
          name: "cocktails index",
          component: Admin.CocktaiIIndex,
          meta: { requiresAuth: true },
        },
        {
          path: "cocktails/edit/:id",
          name: "cocktails edit",
          component: Admin.CocktailEdit,
          meta: { requiresAuth: true },
        },
        {
          path: "/:pathMatchall(.*)*",
          redirect: "/admin/dashboard",
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/login",
      component: Auth.Login,
      beforeEnter: authGuardLog,
    },
    {
      path: "/:pathMatchall(.*)*",
      component: Public.NotFound,
    },
  ],
});
// verouikkage les page admin

router.beforeEach((to, from, next) => {
  /* methode avec meta
if(to.meta.requiresAuth){
  authGuard();

}
*/
  // methode avec matched

  if (to.matched[0].name == "admin") {
    authGuard();
  }
  next();
});

export default router;
