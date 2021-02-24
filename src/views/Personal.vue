<template>
    <div id="app">
        <van-nav-bar
        title="个人中心">
        </van-nav-bar>
        <div class="user" v-if="this.$store.state.islogin==0">
            <img src="../assets/login.png" alt="">
            <router-link class="gologin" to="/login" >登录/注册</router-link>
            <router-link to="/login"><van-icon class="user-icon" name="arrow" /></router-link>
        </div>
        <div class="user" v-else>
            <img src="../assets/login.png" alt="">
            <router-link class="gologin" to="/profile" >{{this.$store.state.user.username}}</router-link>
            <van-icon class="user-icon" name="arrow" />
        </div>
        <div class="panel"> 
            <div class="panel-head">
                <div>我的订单</div>
                <div class="panel-head-right">
                    <router-link to="/">全部订单</router-link><van-icon name="arrow" />
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
                <van-grid-item icon="setting-o" text="设置" to="/login" v-if="this.$store.state.islogin==0" />
                <van-grid-item icon="setting-o" text="设置" to="/setup" v-else />
            </van-grid>
        </div>
        <total-tabbar></total-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
           username:'',
        }
    },
    methods:{
        
    },
    mounted() {
        
    },
}
</script>
<style scoped>
#app{
    height: 14rem;
    background-color: #f0f0f0;
}
.user{
    height: 1.5rem;
    margin: 0.4rem; 
}
.van-nav-bar .van-icon {
    color: #232628;
    font-size: 0.28rem;    
}
.user>img{
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
}
.van-image{
   vertical-align: middle;
   margin-left: 5%;
}
.gologin{
    font-size:0.6rem;
    color: #232628;
    margin-left: 5%;
}
.user-icon{
    font-size: 0.4rem;
    position: absolute;
    top: 1.84rem;
    left: 6.56rem;
     color: #232628;
}
.panel{
    width: 90%;
    line-height: 0.8rem;
    font-size: 0.3rem;
    color: #232628;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0.15rem;
}
.panel-head{
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.18rem;
}
.panel-head-right>a{
    color:#232628;
}
.van-grid{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}
.van-divider{
    margin: 0;
}
.panel-body{
    width: 90%;
    margin: 0.2rem auto;
    border-radius: 0.15rem;
}
.panel-body .van-grid{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}
.panel-body1{
    width: 90%;
    border-radius: 0.15rem;
    margin: 0.2rem auto;
}
.van-grid>icon{
    font-size: 22rem;
}
</style>
