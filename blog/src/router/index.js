import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/moment',
      name: 'moment',
      component: () => import('../views/Moment.vue')
    },
    {
      path: '/dance',
      name: 'dance',
      component: () => import('../views/Dance.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/Music.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
