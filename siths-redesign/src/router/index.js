import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },
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
      component: () => import('../views/SchoolInfo/BellSchedule.vue')
    },
    {
      path: '/yearlyinfo',
      name: 'yearlyinfo',
      component: () => import('../views/SchoolInfo/YearlyInfo.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/StaffPage.vue')
    }
  ]
})

export default router
