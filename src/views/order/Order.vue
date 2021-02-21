<template>
  <div class="order">
    <van-nav-bar title="填写订单" fixed>
      <template #left>
        <router-link to="/cart"><van-icon name="arrow-left" size="0.5rem" color="#232628"/></router-link>
      </template>
    </van-nav-bar>
    <!-- 提示信息 -->
    <div class="tips">
      <van-notice-bar color="#FF734C" background="rgba(255, 240, 236, 1)" left-icon="volume-o" mode="closeable">
        未注册可在此页面直接下单，已有花韵网账户<router-link to="/login"> 请登录></router-link>
      </van-notice-bar>
    </div>
    <!-- 收货人信息和地址 -->
    <div class="form-info-top">
      <van-cell value="请完善收货人信息" is-link title="收货人" icon="location-o">
      </van-cell>
      <van-cell value="2月12日 上午" is-link>
        <template #title>
            <span class="custom-title">送达日期</span>
          </template>
      </van-cell>
      <img src="./line.png" alt="">
    </div>
    <!-- 订购人信息 -->
    <div class="buyer">
      <van-cell value="小爱同学" is-link>
        <template #title>
            <span class="custom-title">订购人信息</span>
          </template>
      </van-cell>
    </div>
    
    <van-submit-bar :price="3050" label="应付" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
   
  },
};
</script>

<style scoped>
.order{
  background: #e9ecf0;
}
/* 提示信息 */
.tips {
  margin-top: 12%;
}
.van-notice-bar a{
  color:#FF734C;
}
.form-info-top img {
  position: absolute;
  top: 3.38rem;
}
.buyer{
  margin-top: 0.3rem;
}
</style>