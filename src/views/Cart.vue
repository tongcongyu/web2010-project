<template>
  <div class="cart">
    <van-nav-bar title="购物车" left-text left-arrow @click-left="onClickLeft" />
    <van-empty description="描述文字" />

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
</style>