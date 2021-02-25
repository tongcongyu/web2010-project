<template>
  <div class="pay">
    <!-- 购物商品信息列表 -->
    <div class="cart-list">
      <van-swipe-cell v-for="value in 3" :key="value">
        <van-card price="2.00" title="[鲜花]圆满" thumb="https://s3.ax1x.com/2021/02/21/yT0CFK.jpg" >
          <template #footer>
              <van-stepper />
          </template>
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
    <!-- 去结算 -->
    <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit" />
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      radio: true,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onSubmit:function(){
      this.$router.push('/order');
    },
    // 返回上一级
    goback(){
      window.history.back()
    }
  }
};
</script>

<style scoped>
a {
  color: #232628;
}
.pay {
  box-sizing: border-box;
  background: #e9ecf0;
}

/* 导航栏 */
.van-nav-bar .van-icon {
  color: #232628;
  font-size: 0.42rem;
}

/* 购物商品信息列表 */
/* .cart-list {
  background: #fff;
  border: 2px solid#fff; 
  margin: 3px;
  border-radius: 10px;
}   */
.van-swipe-cell{
  border-bottom: 1px solid #E9ECF0;
}
.van-image{
  display: inline-block;
  border-radius: 0.3rem;
}
.van-card__price{
  color: #FF734C;
  font-weight: 500;
  font-size: 20px;
}
.van-card__price-integer{
  color: #FF734C;
  font-weight: 500;
  font-size: 20px;
}
.delete-button {
    height: 100%;
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
  font-size: 0.4rem;
  margin-left:0.1rem;
}
.van-submit-bar__button{
  background: #FF734C;
  font-size: 0.32rem;
}
</style>