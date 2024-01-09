import UIStand from '@/views/UIStand.vue'
import LoginView from '@/views/Login/LoginView.vue'
import ChartsView from '@/views/ChartsView.vue'

export const routes = [
  { path: '/', component: UIStand },
  { path: '/ui', component: UIStand },
  { path: '/auth', component: LoginView },
  { path: '/charts', component: ChartsView }
]
