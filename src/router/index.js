import Vue from 'vue'
import VueRouter from 'vue-router'
//引入购物车
import Cart from '../views/cart/Cart.vue'
import Order from '../views/order/Order.vue'

//引入登录
import Login from '../views/Login.vue'
//引入注册
import Register from '../views/Register.vue'
//引入个人中心
import Personal from '../views/Personal.vue'
// 引入首页
import Index from '../views/Index.vue'
// 引入列表
import List from '../views/List.vue'
// 引入搜索页面
import Search from '../views/Search.vue'
//引入设置页面
import Setup from '../views/Setup.vue'

// 引入详情页
import Details from '../views/Details.vue'
Vue.use(VueRouter)



const routes = [
  {
    path:'/setup',
    component:Setup,
  },
  {
    path:'/details/:id',
    component:Details,
    props:true
  },
	{
	  path:'/search',
	  component:Search
	},
	{
	  // 路由传参
	  path:'/list/:id',
	  component:List,
	  props:true
	},
	{
	  path: '/',
	  component: Index
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/order',
    component:Order
  },
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
]
const router = new VueRouter({
  routes
})

export default router
