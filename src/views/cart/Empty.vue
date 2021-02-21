<template>
  <div class="empty">
    <!-- 1.没有登录时的购物车 -->
    <div class="noLogin-cart">
      <!-- 1.1导航栏 -->
      <van-nav-bar title="购物车">
        <template #left>
          <router-link to="/">
            <van-icon name="arrow-left" size="0.5rem" />
          </router-link>
        </template>
      </van-nav-bar>
      <!-- 1.2登录提示 -->
      <div class="login_tip">
        <span>登录后将同步您的购物车商品</span>
        <router-link to="/login" class="login_a">登录</router-link>
      </div>
      <!-- 1.3空购物车 -->
      <div class="emptycart">
        <img
          class="img"
          src="../../assets/imgsLyn/shopping_empty_cart.png"                        
          alt=""
        />
        <p class="text">购物车内暂时没有商品</p>
        <router-link to="/" class="go-index">去逛逛</router-link>
        <!-- <van-button round to="/login" type="info" color="#ff734c"
          >去逛逛</van-button
        > -->
      </div>
    </div>
    
    <!-- 猜你喜欢 -->
    <cart-guess></cart-guess>
    <!-- 底部导航栏 -->
    <total-tabbar></total-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
      // this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
a {
  color: #232628;
}

.cart {
  background: #e9ecf0;
  box-sizing: border-box;
}
/* 1.1导航栏 */
.van-nav-bar .van-icon {
  color: #232628;
  font-size: 0.42rem;
}
/* 1.2登录提示 */
.login_tip {
  font-size: 0.26rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: #fff0ec;
}
.login_a {
  width: 1.32rem;
  height: 0.52rem;
  line-height: 0.52rem;
  margin-left: 0.4rem;
  border: 1px solid #ff734c;
  border-radius: 0.3rem;
  display: inline-block;
  color: #ff734c;
}

/* 1.3空购物车 */
.emptycart {
  text-align: center;
  background: #fff;
}
.emptycart > .img {
  width: 2.54rem;
  height: 1.96rem;
  margin-top: 0.8rem;
}
.emptycart > p {
  font-size: 0.25rem;
}
.go-index {
  display: inline-block;
  width: 2.32rem;
  height: 0.56rem;
  line-height: 0.56rem;
  font-size: 0.3rem;
  border: 1px solid #ff734c;
  border-radius: 0.3rem;
  background: #ff734c;
  color: #fff;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 1rem;
}
.emptycart .van-button {
  width: 2.32rem;
  height: 0.6rem;
  font-size: 0.32rem;
}
</style>