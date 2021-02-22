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
    <van-cell value="" title="微信支付" icon="//img02.hua.com/m/images/m_payment_wxzf.png" is-link to="/">
    </van-cell>
    <!-- 微信支付 -->
    <!-- <div class="wechat">
      <img src="//img02.hua.com/m/images/m_payment_wxzf.png" alt="" />
      <span>微信支付</span>
      <router-link to="/"></router-link><van-icon name="arrow" />
    </div> -->
    <!-- 支付宝支付 -->
    <!-- <div class="alipay"></div> -->
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
.wechat {
  width: 380px;
  height: 90px;
  background: #fff;
  padding: 5px;
  border: 1px solid red;
}
.van-cell {
  width: 380px;
  height: 90px;
  background: #fff;
}
</style>