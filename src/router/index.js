import { createRouter, createWebHistory } from 'vue-router'

import * as Public from "@/views/public"  
import * as Admin from "@/views/admin"
import * as Auth from "@/views/auth"

import {authGuard} from "@/_helpers/auth-guard"

// localStorage.setItem("token","layane")


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public-layout',
      component: Public.PublicLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: Public.Home
        },
        {
          path: '/about',
          name: 'about',
          component: Public.About
        },
        {
          path: '/contact',
          name: 'contact',
          component: Public.Contact
        },
        {
          path: '/cocktails',
          name: 'cocktails',
          component: Public.Cocktail
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      // beforeEnter:suthGuard, on letulise pas dans le cas de children "simple route"
      component: Admin.AdminLayout,
      children:[
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Admin.Dashboard
        },
        {
          path: 'users/index',
          name: 'User index',
          component: Admin.UserIndex
        },
        {
          path: 'users/edit/:id(\\d+)',
          name: 'User Edit',
          component: Admin.UserEdit, props:true
        },
        {
          path: 'users/add',
          name: 'user add',
          component: Admin.UserAdd
        },
        {
          path: 'cocktails/index',
          name: 'cocktails index',
          component: Admin.CocktaiIIndex
        },
        {
          path: 'cocktails/edit/:id',
          name: 'cocktails edit',
          component: Admin.CocktailEdit
        },
        {
          path: '/:pathMatchall(.*)*',
          redirect:'/admin/dashboard'
        },
      ]
    },
    {
      path: '/login',
      component: Auth.Login},
    {
      path: '/:pathMatchall(.*)*',
      component: Public.NotFound
    },
  ]
})

router.beforeEach((to, from, next) => {
 if(to.matched[0].name ==="admin"){
  authGuard()
 }
 next()
})

export default router
