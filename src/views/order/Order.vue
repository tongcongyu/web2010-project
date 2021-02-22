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
      <van-cell value="请完善收货人信息" is-link title="收货人" icon="location-o" to="/address">
      </van-cell>
      <van-cell value="2021年3月8日" is-link to="/date">
        <template #title>
            <span class="custom-title">送达日期</span>
          </template>
      </van-cell>
      <img src="./line.png" alt="">
    </div>
    <!-- 订购人信息 -->
    <div class="buyer">
      <van-cell value="小爱同学" is-link to="/purchaser">
        <template #title>
            <span class="custom-title">订购人信息</span>
          </template>
      </van-cell>
    </div>
    <!-- 支付订单列表 -->
    <div class="pay-list">
      <van-swipe-cell v-for="value in 3" :key="value">
        <van-card
          num="2"
          price="100" parseint
          title="[鲜花]圆满"
          thumb="https://s3.ax1x.com/2021/02/21/yT0CFK.jpg"
        >
        </van-card>
      </van-swipe-cell>
    </div>
    <!-- 提交订单 -->
    <van-submit-bar :price="1155" label="应付:" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    // 此处只能是用来定义各个函数的，以下两种方式都可以
    yanan() {
      // 路由跳转要被包在函数体中
      // this.$router.push('/address');
    },
    kinsey: function() {

    },
    onSubmit: function(){
      this.$router.push('/payment');
    }
  }
};
</script>

<style lang="less" scoped>
@import '~vant/lib/index.less';

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
/* 收货人信息和地址 */
.form-info-top {
  background: #fff;
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
  img {
    position: absolute;
    top: 3.65rem;
    display: inline-block;
    width: 355px;
  }
}
/* 订购人信息 */
.buyer{
  background: #fff;
  border-radius: 12px;
  padding: 5px;
  margin: 5px;
}
.van-cell__value {
  color: #232828;
  font-size: 0.3rem;
  font-weight: 600;
}
/* 支付订单列表 */
.pay-list{
  background: #fff;
  border-radius: 12px;
  padding: 5px;
  margin: 5px 5px 0;
}
// @card-price-color:red;
// @card-desc-color:red;
// @card-thumb-size:64px;
// @card-price-font-size:40px;
// @card-price-font-family:SourceHanSansCN, Helvetica, sans-serif;
.van-card__title {
  color: #232828;
  font: 15px SourceHanSansCN;
 
}
.van-image__img {
  width: 30px;
  height: 30px;
}
.van-card__price {
  color: #232828;
  font: 20px SourceHanSansCN;
  font-weight: bold;
  // font-family: SourceHanSansCN, Helvetica, sans-serif;
}
.van-card__num {
  color: #232828;
  font-size: 14px;
}

/* 提交订单 */
.van-submit-bar {
  margin: 0;
}
.van-submit-bar__text {
  text-align: left;
}
.van-submit-bar__price{
  color: #FE6600;
  font-size: 20px;
  margin-left:5px;
}
.van-submit-bar__button{
  background: #FF734C;
  font-size: 16px;
}

</style>