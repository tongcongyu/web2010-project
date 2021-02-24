import Vue from 'vue'
import VueRouter from 'vue-router'
//引入购物车
import Cart from '../views/cart/Cart.vue'
import Order from '../views/order/Order.vue'
import Address from '../views/order/Address.vue'
import Date from '../views/order/Date.vue'
import Purchaser from '../views/order/Purchaser.vue'
import Payment from '../views/order/Payment.vue'

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
//引用修改页面
import Profile from '../views/Profile.vue'

// 引入详情页
import Details from '../views/Details.vue'
// 引入评论页
import Comment from '../views/Comment.vue'
Vue.use(VueRouter)



const routes = [
  {
    path:'/comment/:id',
    component:Comment,
    props:true
  },
  {
    path:'/profile',
    component:Profile
  },
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
    path:'/cart/:id',
    component:Cart,
    props:true
  },
  {
    path:'/order',
    component:Order
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/date',
    component: Date
  },
  {
    path: '/purchaser',
    component: Purchaser
  },
  {
    path: '/payment',
    component:Payment
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
