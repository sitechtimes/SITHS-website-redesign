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
      path: '/clubs',
      name: 'clubs',
      component: () => import('../views/ClubsPage.vue')
    },
    {
      path: '/bellschedule',
      name: 'bellschedule',
      component: () => import('../views/BellSchedule.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/StaffPage.vue')
    },
  ]
})

export default router
