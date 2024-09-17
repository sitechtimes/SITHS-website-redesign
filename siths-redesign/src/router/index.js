import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/bellschedule',
      name: 'bellschedule',
      component: () => import('../views/SchoolInfo/BellSchedule.vue')
    },
    {
      path: '/yearlyinfo',
      name: 'yearlyinfo',
      component: () => import('../views/SchoolInfo/YearlyInfo.vue')
    },
  ]
})

export default router
