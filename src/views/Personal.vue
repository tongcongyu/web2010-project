<template>
    <div class="personal">
        <van-nav-bar
        title="个人中心">
            <template #left>
                <van-icon name="arrow-left" />
            </template>
        </van-nav-bar>
        <div class="bg">
            <img src="https://img02.hua.com/m/member/center/backgroundv3.png" alt="">
            <div class="gologin">
                <p>Hi,欢迎来到花礼网</p>
                <van-button round to="/login">登录/注册</van-button>
            </div>
        </div>
        <div class="panel">
            <div class="panel-head">
                <div>我的订单</div>
                <div class="panel-head-right">
                    <a href="">全部订单<van-icon name="arrow" /></a>
                </div>
            </div>
            <van-divider />
            <van-grid>
                <van-grid-item icon="https://img02.hua.com/m/member/center/myinfo_pendingpay.png" text="待付款"  />
                <van-grid-item icon="https://img02.hua.com/m/member/center/myinfo_distribution.png" text="今日配送" />
                <van-grid-item icon="https://img02.hua.com/m/member/center/myinfo_evaluation.png" text="待评价" />
            </van-grid>
        </div>
        <div class="panel-body">
            <van-grid>
                <van-grid-item icon="coupon-o" text="优惠券" />
                <van-grid-item icon="cash-on-deliver" text="权益卡" />
                <van-grid-item icon="gold-coin-o" text="余额" />
                <van-grid-item icon="gem-o" text="会员积分" />
            </van-grid>
            <van-divider />
            <van-grid>
                <van-grid-item icon="location-o" size="11rem" text="收货地址" />
                <van-grid-item icon="birthday-cake-o" text="生日提醒" />
                <van-grid-item icon="star-o" text="我的收藏" />
                <van-grid-item icon="clock-o" text="浏览记录" />
            </van-grid>
        </div>
        <div class="panel-body1">
            <van-grid>
                <van-grid-item icon="service-o" text="联系客服" />
                <van-grid-item icon="question-o" text="帮助中心" />
                <van-grid-item icon="info-o" text="关于花礼" />
                <van-grid-item icon="setting-o" text="设置" />
            </van-grid>
        </div>

    </div>
</template>
<script>

</script>
<style scoped>
.personal{
    margin: 0;
    padding: 0;
}
.van-nav-bar .van-icon {
    color: #232628;
    font-size: 18px;    
}
.bg{
    height: 11rem;
    background-color:#f0f0f0;
}
.bg>img{
    width: 100%;  
}
.gologin{
    position: absolute;
    top: 1.3rem;
    left: 36%;
    display: flex;
    flex-direction: column;
}
.gologin>p{
    font-size: 13px;
    color:#fff;
}
.gologin .van-button{
   height: 0.7rem; 
}
.panel{
    width: 90%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    color: #232628;
    position: absolute;
    top:3.2rem;
    left: 5%;
    background-color: #fff;
    border-radius: 0.15rem;
}
.panel-head{
    display: flex;
    justify-content: space-between;
    padding: 0 0.18rem;
}
.panel-head-right>a{
    color:#232628;
}
.panel .van-grid{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}
.van-divider{
    margin: 0;
}
.panel-body{
    width: 90%;
    position: absolute;
    top:5.9rem;
    left: 5%;
    border-radius: 0.15rem;
}
.panel-body .van-grid{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}
.panel-body1{
     width: 90%;
    position: absolute;
    top:9.5rem;
    left: 5%;
    border-radius: 0.15rem;
}
.van-grid>icon{
    font-size: 2222rem;
}
</style>