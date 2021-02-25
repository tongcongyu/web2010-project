<template>
  <div class="cart">
    <cart-empty v-if="isEmpty"></cart-empty>
    <cart-pay v-else></cart-pay>
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