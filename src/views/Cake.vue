<template>
    <div class="hot">
        <van-sidebar class="left" v-model="activeKey" >
            <van-sidebar-item title="热门推荐" />
            <van-sidebar-item title="鲜花" />
            <van-sidebar-item title="永生花" />
            <van-sidebar-item title="蛋糕" />
            <van-sidebar-item title="特色礼品" />
            <van-sidebar-item title="礼篮" />
            <van-sidebar-item title="绿植花卉" />
        </van-sidebar>
        <div class="goods">
          <div class="box">
          <router-link to="/">
            <img src="https://img02.hua.com/m/category/Classification/cake.png" alt="">
          </router-link>
          <div class="detail-body">
            <div class="detail-title">
              <h4 class="title-left">品牌</h4>
              <div class="title-right">
                
              </div>
          </div>
          <div class="list-body">
            <nav class="kind-goods">
              <div class="navigation-3" v-for="(value,i) of 15" :key="i">
                <router-link to="/">
                  <van-image
                    width="1.4rem"
                    height="1.4rem"
                    fit="contain"
                    src="https://img02.hua.com/m/category/Classification/m_category_cake_xfxb.png"
                  />
                  
                </router-link>
              </div>
            </nav>
          </div>
      </div>
    </div>
    <total-tabbar></total-tabbar>
</div>
          
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>
<style scope>
  .hot{
    position: relative;
    width: 100%;
    height: -webkit-calc(100vh - 1rem);
    height: calc(100vh - 1rem);
  }
  
  .box{
    padding: 0.23rem 0.23rem 0.23rem;
    box-sizing: border-box;
  }
  .goods img{
    width: 100%;
    vertical-align: middle;
  }
  .goods{
    position: absolute;
    top: 0;
    left: 21.06666667%;
    width: 78.93333333%;
    bottom: 0;
    z-index: 2;
    transform: translate3d(0, 0, 0);
    overflow-x: hidden;
    overflow-y: auto;
  }
 .left{
    border-right: 1px solid #E9ECF0;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 21.06666667%;
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .van-sidebar-item.van-sidebar-item--select{
    color: #FF734C;
  }
  .van-sidebar-item.van-sidebar-item--select::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 36px;
    background-color: #FF734C;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: '';
  }
  .detail-body{
    padding: 0.1rem 0.1rem;
    border-radius: 0.14285714rem;
    margin-bottom: 0.1rem;
    
    box-shadow: 0px 2px 6px 0px #e9ecf0;
    border: 0;
    
    margin: 0;
    box-sizing: border-box;
  }
  .detail-title{
    
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    padding: 0 0.35rem;
    justify-content: space-between;
    height: 0.4rem;
  }
  .title-left{
    -webkit-box-flex: 1;
    flex: 1;
    height: 0.38rem;
    line-height: 0.4rem;
    overflow: hidden;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.28rem;
    margin: 0;
    padding: 0;
  }
  .title-right {
    -webkit-box-flex: 1;
    flex: 1;
    height: 0.4rem;
    line-height: 0.000000001rem;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    
  }
  .navigation-1{
    display: inline-block;
    padding: 0 0.1rem;
    height: 0.6rem;
    font-size: 0.2rem;
    color: #71797F;
  }
  .icon{
    font-size: inherit;
  }
  .detail-item{
    float: left;
    width: 33.33333333%;
  }
  .navigation-2{
    float: left;
    width: 33.33333333%;
  }
  .detail-list-1{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .list-body{
    
    padding: 0.2rem 0.28571429rem;
    border-radius: 0.14285714rem;
    margin-bottom: 0.36rem;
    
    box-shadow: 0px 2px 6px 0px #e9ecf0;
  }
  .kind-goods{
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .kind-goods:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  .navigation-3{
  font-size: 0.1rem;
  float: left;
    width: 33.33333333%;
    height: 0.8rem;
    line-height: 0.5rem;
    padding: 0.15rem 0;
    text-align: center;
  }
  .kind-goods > .navigation > .router-link-active > p {
    font-size: 0.1rem;
    font-weight: 300;
    line-height: 1.33333333;
    max-width: 12em;
    margin: 0.2rem auto 0;
    color: #232323;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
  .van-image{
      transform: translateY(-20%);
  }
</style>