import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/public/Home.vue"
import About from "@/views/public/About.vue"
import Contact from "@/views/public/Contact.vue"
import Cocktail from "@/views/public/Cocktail.vue"
import PublicLayout from "@/views/public/PublicLayout.vue"
import NotFound from "@/views/public/NotFound.vue"

import AdminLayout from "@/views/admin/AdminLayout.vue"
import Dashboard from "@/views/admin/Dashboard.vue"
import UserEdit from "@/views/admin/user/UserEdit.vue"
import UserAdd from "@/views/admin/user/UserAdd.vue"
import UserIndex from "@/views/admin/user/UserIndex.vue"

import CocktaiIIndex from "@/views/admin/cocktails/CocktaiIIndex.vue"
import CocktailEdit from "@/views/admin/cocktails/CocktailEdit.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public-layout',
      component: PublicLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact
        },
        {
          path: '/cocktails',
          name: 'cocktails',
          component: Cocktail
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin-layout',
      component: AdminLayout,
      children:[
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'users/index',
          name: 'User index',
          component: UserIndex
        },
        {
          path: 'users/edit/:id',
          name: 'User Edit',
          component: UserEdit
        },
        {
          path: 'users/add',
          name: 'user add',
          component: UserEdit
        },
        {
          path: 'cocktails/index',
          name: 'cocktails index',
          component: CocktaiIIndex
        },
        {
          path: 'cocktails/edit/:id',
          name: 'cocktails edit',
          component: CocktailEdit
        },
      ]
    },
    {
      path: '/:pathMatchall(.*)*',
      component: NotFound
    },
  ]
})

export default router
