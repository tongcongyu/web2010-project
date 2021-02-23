<template>
  <div class="payment">
    <!-- 顶部导航 -->
    <div class="top">
      <van-nav-bar title="选择支付方式" fixed>
        <template #left>
          <router-link to="/order"
            ><van-icon name="arrow-left" size="0.5rem" color="#232628"
          /></router-link>
        </template>
      </van-nav-bar>
    </div>
    <!-- 支付方式 -->
    <div class="kind-payment">
      <div class="order">
        <span class="money1">支付金额：</span>
        <span class="money2">¥500</span>
      </div>
    </div>
    <!-- <van-cell value="" title="微信支付" icon="//img02.hua.com/m/images/m_payment_wxzf.png" is-link to="/">
    </van-cell> -->
    <!-- 微信支付 -->
    <div class="wechat">
      <a href="#">
        <img src="../../assets/imgsLyn/wechatPay.png" alt="">
       </a>
    </div>
    <div class="alipay">
      <a href="#">
        <img src="../../assets/imgsLyn/alipay.png" alt="">
       </a>
    </div>
    <!-- <div class="wechat">
      <img src="//img02.hua.com/m/images/m_payment_wxzf.png" alt="" />
      <span>微信支付</span>
      <router-link to="/cart"></router-link><van-icon name="arrow" />
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 支付方式 */
.kind-payment {
  background-image: url(//img02.hua.com/m/images/m_payment_bg.png);
  width: 375px;
  height: 130px;
  margin-top: 1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
}
.money1 {
  font-size: 14px;
  color: #fff;
}
.money2 {
  font-size: 26px;
  color: #fff;
}
/* 微信支付 */
.wechat {
  text-align: center;
  background: #fff;
}

.wechat>a>img{
  display: inline-block;
  width: 360px;
  height: 72px;
  margin-top: -30px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px #dee2e5;
}
/* 支付宝支付 */
.alipay {
  margin-top: 30px;
  text-align: center;
  background: #fff;
}
.alipay>a>img{
  display: inline-block;
  width: 360px;
  height: 72px;
  margin-top: -30px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px #dee2e5;
}
</style>