import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router/router.js'
import App from './App.vue'
import '@/styles/index.css'

const app = createApp(App).use(router).use(createPinia())

app.mount('#app')
