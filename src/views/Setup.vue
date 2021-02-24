<template>
    <div id="app">
         <van-nav-bar
        title="设置">
        <template #left>
            <router-link to="/personal"><van-icon name="arrow-left"/></router-link>
        </template>
        </van-nav-bar>
        <van-cell title="个人设置" is-link />
        <van-cell title="账号和绑定" is-link />
        <van-cell title="修改密码" is-link />
        <van-cell title="反馈建议" is-link />
        <van-button class="button" round type="info" @click="signout">退出当前账号</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        signout(){
            window.sessionStorage.removeItem('user'); 
            this.$router.push('/');
            this.$router.go();
            
        }
    }
}
</script>
<style scoped>
#app{
    height: 14rem;
    background-color: #f0f0f0;
}
.van-nav-bar .van-icon {
    color: #232628;
    font-size: 0.28rem;  
}
.van-cell{
    width: 90%;
    margin: 0.5rem auto;
    border-radius: 0.2rem;
}
.button{
    width: 90%;
    margin-left: 0.3rem;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    color: #ff734c;
    font-weight: 900;

}
</style>