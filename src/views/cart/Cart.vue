<template>
  <div class="cart">
    <!-- 导航栏 -->
      <van-nav-bar title="购物车">
        <template #left>
            <van-icon name="arrow-left" size="0.5rem"  @click="goback"/>
        </template>
      </van-nav-bar>
      <!-- 组件 -->
    <cart-empty v-if="isEmpty"></cart-empty>
    <cart-pay v-else></cart-pay>
    <!-- 猜你喜欢 -->
    <cart-guess></cart-guess>
  </div>
</template>

<script>
import Vue from 'vue'
import Empty from './Empty.vue'
import Pay from './Pay.vue' 
import Guess from './Guess.vue'

Vue.component('cart-empty', Empty)
Vue.component('cart-pay', Pay)
Vue.component('cart-guess', Guess)

export default {
  data() {
    return {
      isEmpty:true
    }
  },
  methods:{
    goback(){
      window.history.back()
    }
  },
  mounted() {
    let id=this.$route.params.id;
    if(id=='empty'){
      this.isEmpty=true
    }else{
      this.isEmpty=false
    }
  },
}
</script>

<style scoped>

</style>