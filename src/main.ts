import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { Auth } from '@/types/Auth'

import App from './App.vue'
import router from './router'
import OidcAuthService from '@/services/OidcAuth'
import http, { AxiosKey } from '@/services/AxiosInstance'


import './assets/main.css'

export const authService: Auth = new OidcAuthService()
const pinia = createPinia()
export const app = createApp(App)
  .use(pinia)
  .use(router)
  .provide(AxiosKey, http)
  .provide('authService', authService)
  .mount('#app')
