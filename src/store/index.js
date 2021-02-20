import Vue from 'vue'
import Vuex from 'vuex'
import { log } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //维护一个变量，表示当前登入状态
    islogin:sessionStorage.getItem('user')?1:0, //0-未登录
    user:sessionStorage.getItem('user')?
      JSON.parse(sessionStorage.getItem('user')):{},  //存储用户登录信息
  },
  mutations: {
    //修改登录状态
    loginOk(state, payload) {
      state.islogin = 1;
      state.user = payload;
    },
    // updataMarriedState(state, payload) {
    //   state.married = !payload;
    // },
    // minx(state, payload) {
    //   if (state.cartitems[payload].count > 1) {
    //     state.cartitems[payload].count--;
    //   }
    // },
    // add(state, payload) {
    //   state.cartitems[payload].count++;
    // },
    // del(state, payload) {
    //   state.cartitems.splice(payload, 1);
    // }
  },
  actions: {
  },
  modules: {
  }
})
