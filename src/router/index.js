import Vue from 'vue'
import VueRouter from 'vue-router'

const login=()=>import("@/components/mainScreen/login")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:"/login",
    name:"Login",
    component:login
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/table.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
