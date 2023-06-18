import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Login = () => import('../pages/Login.vue')
const Register = () => import('../pages/Register.vue')
const User = () => import('../pages/User.vue')
const Kaminoku = () => import('../pages/Kaminoku.vue')
const KaminokuDetail = () => import('../pages/KaminokuDetail.vue')
const Post = () => import('../pages/Post.vue')

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
  {
    path: '/user',
    component: User,
  },
  {
    path: '/kaminoku',
    component: Kaminoku,
  },
  {
    path: '/post',
    component: Post,
  },
  {
    path: '/kaminoku/:id',
    component: KaminokuDetail,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
