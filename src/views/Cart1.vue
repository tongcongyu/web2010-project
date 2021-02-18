<template>
  <div class="cart1">
    <van-nav-bar title="购物车">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <div class="login-tip">
      <span>登录后将同步您的购物车商品</span>
      <van-button round to="/login">登录</van-button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .van-nav-bar .van-icon {
    color: #232628;
    font-size: 20px;    
  }
  .login-tip{
    height: 0.7rem;
    line-height: 0.7rem;
    background: #fff0ec;
    border: 0.01rem solid rgba(255, 115, 76, 0.2);
    text-align: center;
  }
  .login-tip>span{
    counter-reset: #232628;
    font-size: 14px;
  }
  .login-tip .van-button{
    width: 1.35rem;
    height: 0.52rem;
    border: 0.01rem solid #ff734c;
    color: #ff734c;
    text-align: center;
  }
</style>