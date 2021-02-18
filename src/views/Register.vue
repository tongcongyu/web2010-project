<template>
    <div>
        <div>
            <van-nav-bar 
            title="注册"
            >
            <template #left>
                    <van-icon name="arrow-left" />
                </template>
                <template #right>
                    <van-icon name="wap-nav" />
                </template>
            </van-nav-bar>
        </div>
        <div class="hualogo">
            <img src="../assets/wx_login_logo.png" alt="">
        </div>
        <van-form class="login">
		  <van-field
		    
		    name="账号/邮箱"
		    label="手机号"
		    placeholder="请输入手机号或邮箱"
		    
		  />
		  <van-field
		   
		    name="密码"
		    label="密码"
		    placeholder="请输入密码"
		    
			>
		  </van-field>
           <van-field
		   
		    name="再次确认密码"
		    label="再次确认密码"
		    placeholder="请再次确认密码"
		    
			>
		  </van-field>
			
		  <van-button round type="info">注册</van-button>
		  
		</van-form>
    </div>
</template>
<style scoped>
.van-nav-bar .van-icon {
    color: #232628;
    font-size: 20px;    
}
.hualogo{
    text-align: center;
    margin-top: 1rem;
}
.hualogo>img{
    width: 5rem;
    height: 0.7rem; 
}

.login{
    padding: 0.4rem;
     margin-top:0.5rem;
}
.van-field + .van-field{
    margin-top: 0.5rem;
}

.login .van-button{
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
    background: #ff734c;
    border: 0.07142857rem solid #ff734c;
    font-size: 0.4rem;
    width: 100%;
}
</style>