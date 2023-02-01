import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '@/main'
import { useUserStore } from '@/stores/UserStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/App.vue'),
    },
  ],
})


export default router
