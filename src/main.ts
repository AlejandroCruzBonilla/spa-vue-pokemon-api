import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 2 //2 Minutes
      }
    }
  }
})

app.mount('#app')
