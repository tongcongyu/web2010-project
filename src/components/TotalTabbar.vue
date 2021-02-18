<template>
    <div class="totalTabbar">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="points">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="smile-o">我的</van-tabbar-item>
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