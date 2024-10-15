import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../../../siths-redesign-2/pages/HomePage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../../../siths-redesign-2/pages/404.vue')
    },
    {
      path: '/clubs',
      name: 'clubs',
      component: () => import('../../../siths-redesign-2/pages/ClubsPage.vue')
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
      component: () => import('../../../siths-redesign-2/pages/StaffPage.vue')
    },
    {
      path: '/erlenwein',
      name: 'erlenwein',
      component: () => import('../../../siths-redesign-2/pages/ErlenweinPage.vue')
    },
    {
      path: '/terrusa',
      name: 'terrusa',
      component: () => import('../views/StudentLife/TerrusaPage.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/SchoolInfo/SchoolCalendar.vue')
    },
  ]
})

export default router
