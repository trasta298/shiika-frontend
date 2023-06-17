import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Login = () => import('../pages/Login.vue')
const Register = () => import('../pages/Register.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
