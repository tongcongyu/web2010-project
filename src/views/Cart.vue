<template>
  <div class="cart">
    <!-- 1.没有登录时的购物车 -->
    <div class="noLogin">
      <van-nav-bar title="购物车">
        <template #left>
          <router-link to="/">
            <van-icon name="arrow-left" size="0.5rem" />
          </router-link>
        </template>
      </van-nav-bar>
      <!-- 1.1登录提示 -->
      <div class="login-tip">
        <span>登录后将同步您的购物车商品</span>
        <!-- <van-button round to="/login" type="info">登录</van-button> -->
        <van-button plain hairline round to="/login" type="info" color="#ff734c">登录</van-button>
      </div>
      <van-empty description="描述文字">
        <van-button round type="danger" class="bottom-button">去逛逛</van-button>
      </van-empty>
      <div class="emptycart">
        <img src="../assets/imgsLyn/shopping_empty_cart.png" alt="">
        <p class="text">购物车内暂时没有商品</p>
        <van-button plain hairline round to="/login" type="info" color="#ff734c">去逛逛</van-button>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- <van-cell v-for="item in list" :key="item" :title="item"> -->
        <van-cell v-for="item in list" :key="item" :title="item">
          <van-row type="flex" justify="space-between">
            <van-col span="9">
              <van-image width="100" height="100" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col span="9">
              <van-image width="100" height="100" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
          </van-row>
        </van-cell>
      </van-list>
    </div>
    <!-- 2.登录时的购物车 -->
    <div class="login"></div>
    <!-- 3.底部导航栏 -->
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
      finished: false
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
    }
  }
};
</script>

<style scoped>
.van-nav-bar .van-icon {
  color: #232628;
  font-size: 0.42rem;
}
.login-tip {
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: #fff0ec;
  border: 0.02rem solid rgba(255, 115, 76, 0.2);
}
.login-tip>span {
  font-size: 0.32rem;
}
.login-tip .van-button {
  height: 0.52rem;
  width: 1.32rem;
  color: #ff734c;
  background: #fff0ec;
}
.emptycart>p{
  font-size: 0.32rem
}

</style>