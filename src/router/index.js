import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    alias: '/home',
    component: Home
  },
  {
    name: 'Favorite',
    path: '/favorite',
    component: () => import(/* webpackChunkName: "favorite" */ '../views/Favorite.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    name: 'Journey',
    path: '/journey',
    component: () => import(/* webpackChunkName: "journey" */ '../views/Journey.vue')
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
