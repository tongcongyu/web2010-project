<template>
    <div id="app">
        <van-nav-bar
        title="个人中心">
        </van-nav-bar>
        <div class="user"  v-if="this.$store.state.islogin==0">
            <van-image
                round
                width="1rem"
                height="1rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <router-link class="gologin" to="/login" >登录/注册</router-link>
            <van-icon name="arrow" />
        </div>
        <div class="user" v-else>
            <van-image
                round
                width="1rem"
                height="1rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <router-link class="gologin" to="/login" >{{this.$store.state.user.username}}</router-link>
            <van-icon name="arrow" />
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
                <van-grid-item icon="setting-o" text="设置" to="/setup"/>
            </van-grid>
        </div>

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
.van-nav-bar .van-icon {
    color: #232628;
    font-size: 18px;    
}
.user{
    width: 100%;
    height: 12rem;
    background-color: #f0f0f0;
}
.van-image{
    position: absolute;
    top: 1.4rem;
    left: 10%;
}
.gologin{
    font-size:0.5rem;
    position: absolute;
    top: 1.6rem;
    left: 28%;
    color: #232628
}
.van-icon{
    font-size: 0.4rem;
    position: absolute;
    top: 1.7rem;
    left: 86%;
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
    font-size: 22rem;
}
</style>