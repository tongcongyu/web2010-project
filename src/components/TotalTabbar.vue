<template>
    <div class="totalTabbar">
       <van-tabbar route>
              <van-tabbar-item replace to="/" icon="shop-collect-o">首页</van-tabbar-item>
              <van-tabbar-item replace to="/list" icon="apps-o">分类</van-tabbar-item>
              <van-tabbar-item replace icon="cart-o" @click="cart">购物车</van-tabbar-item>
              <van-tabbar-item replace to="/personal" icon="friends-o">我的</van-tabbar-item>
          </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "totalTabbar",
    data(){
        return {
           active: 2
        }
    },
    methods: {
        cart(){
            if(this.$store.state.islogin==0){
                this.$router.push('/cart/empty')
            }else{
                this.$router.push(`/cart/${this.$store.state.user.id}`)
            }
        }
    },
}
</script>

<style scoped>

</style>