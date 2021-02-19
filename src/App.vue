<template>
  <div id="app">
    <router-view/>
    <!-- 底部导航栏 -->
          <van-tabbar route>
              <van-tabbar-item replace to="/" icon="shop-collect-o">首页</van-tabbar-item>
              <van-tabbar-item replace to="/list" icon="apps-o">分类</van-tabbar-item>
              <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
              <van-tabbar-item replace to="/personal" icon="friends-o">我的</van-tabbar-item>
          </van-tabbar>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>