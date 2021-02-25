<template>
    <div class="totalTabbar">
       <van-tabbar route>
              <van-tabbar-item replace to="/" icon="shop-collect-o">首页</van-tabbar-item>
              <van-tabbar-item replace to="/cake" icon="apps-o">分类</van-tabbar-item>
              <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
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
    }
}
</script>

<style scoped>

</style>