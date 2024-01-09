import UIStand from '@/views/UIStand.vue'
import LoginView from '@/views/LoginView.vue'

export const routes = [
  { path: '/', component: UIStand },
  { path: '/ui', component: UIStand },
  { path: '/auth', component: LoginView }
]
