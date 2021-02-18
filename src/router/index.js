import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'


//引入登录
import Login from '../views/Login.vue'
//引入注册
import Register from '../views/Register.vue'
//引入个人中心
import Personal from '../views/Personal.vue'
// 引入首页
Vue.use(VueRouter)

const routes = [
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/',
    component: Index
  },
]
const router = new VueRouter({
  routes
})

export default router
