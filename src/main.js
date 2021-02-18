import './assets/rem'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from 'axios';
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://127.0.0.1:3000'
//引入qs
import qs from 'qs';
Vue.prototype.qs = qs;
// 引入vant
import Vant from 'vant'
// 引入vant的样式表
import 'vant/lib/index.css'
import totalTabbar from './components/TotalTabbar.vue'
Vue.config.productionTip = false

Vue.use(Vant)

Vue.component('total-tabbar', totalTabbar);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
