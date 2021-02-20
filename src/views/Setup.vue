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
    </div>
</template>
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
}
</style>