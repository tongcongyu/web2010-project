<template>
  <div class="cart">
    <!-- 1.没有登录时的购物车 -->
    <div class="noLogin">
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
          src="../assets/imgsLyn/shopping_empty_cart.png"
          alt=""
        />
        <p class="text">购物车内暂时没有商品</p>
        <router-link to="/" class="go-index">去逛逛</router-link>
        <!-- <van-button round to="/login" type="info" color="#ff734c"
          >去逛逛</van-button
        > -->
      </div>
    </div>

    <!-- 2.登录后的购物车 -->
    <div class="login"></div>

    <!-- 3.猜你喜欢 -->
    <div class="guess">
      <div class="guess-title">猜你喜欢</div>
      <div class="guess-list">
        <div class="guess-item" v-for="(value, i) of 6" :key="i">
          <router-link to="/">
            <img src="//img01.hua.com/uploadpic/newpic/9012473.jpg" alt="" />
            <p>韩式系列/你笑起来真好看</p>
            <p>￥298</p>
          </router-link>
        </div>
        <div class="guess-bottom">已经到底喽...</div>
      </div>
    </div>
    
    <!-- 4.底部导航栏 -->
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
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
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
/* 3.猜你喜欢 */
.guess {
  margin-top: 0.2rem;
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
  background-color: #fff;
}
.guess-title {
  margin: 0;
  font-size: 0.34rem;
  margin-left: 0.3rem;
}
.guess-list {
  margin-top: 0.3rem;
  font-size: 0.26rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}
.guess-item {
  border-radius: 0.15rem;
  flex: 0 0 48%;
  box-shadow: 0.02rem 0.04rem 0.2rem 0.08rem #dee2e5;
  margin-top: 0.15rem;
}
.guess-item > a > p:nth-of-type(2) {
  color: #ff734c;
  margin-top: 0;
}
.guess-item > a > img {
  width: 3.59rem;
  border-top-left-radius: 0.15rem;
  border-top-right-radius: 0.15rem;
}
.guess-bottom {
  font-size: 0.2rem;
  margin: 0.3rem auto 0.8rem;
  color: #71797f;
}
</style>