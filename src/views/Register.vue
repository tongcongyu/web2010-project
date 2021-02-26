<template>
    <div>
        <div>
            <van-nav-bar 
            title="注册"
            >
            <template #left>
                    <router-link to="/login"><van-icon name="arrow-left" /></router-link>
                </template>
                <template #right>
                    <van-icon name="wap-nav" />
                </template>
            </van-nav-bar>
        </div>
        <div class="hualogo">
            <img src="../assets/wx_login_logo.png" alt="">
        </div>
        <van-form class="register">
		  <van-field
		    type="text"
		    label="手机号"
		    placeholder="请输入手机号"
		    :attr="{maxlenth:'20'}"
            v-model="username"
            :state="usernameState"
            @blur.native.capture="checkUsername"
		  />
		  <van-field
		    type="password"
		    label="密码"
		    placeholder="请输入密码"
		    :attr="{maxlenth:'20', autocomlete:'off'}"
            v-model="password"
            :state="passwordState"
            @blur.native.capture="checkPassword"
			>
		  </van-field>
           <van-field
		    type="password"
		    label="再次确认密码"
		    placeholder="请再次确认密码"
		    :attr="{ maxlength: '20', autocomplete: 'off' }"
            v-model="conpassword"
            :state="conpasswordState"
            @blur.native.capture="checkConPassword"
			>
		  </van-field>
			
		  <van-button round type="info" @click="handle">注册</van-button>
		  
		</van-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:"",
            conpassword:"",
            usernameState:"",
            passwordState:"",
            conpasswordState:""
        } 
    },
    methods:{
        checkUsername(){
            let usernameRegExp=/^[0-9]{11}$/;
            if(usernameRegExp.test(this.username)){
                this.usernameState="success";
                return true;
            }else{
                this.$toast({
                    message:"用户格式错误",
                    position:"middle",
                    duration:"5000",
                });
                this.usernameState="error";
                return false;
            }
        },
        checkPassword(){
            let passwordRegExp=/^\w{8,20}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState="success";
                return true;
            }else{
                this.$toast({
                    message:"密码格式错误",
                    position:"middle"
                });
                this.passwordState="error";
                return false;
            }
        },
        checkConPassword(){
            if(this.password== this.conpassword){
                this.conpasswordState="success";
                return true;
            }else{
                this.$toast({
                    message:"两次密码不一致",
                    position:"middle"
                });
                this.conpasswordState="error";
                return false;
            }
        },
        //用户注册函数
        handle(){
            if(
                this.checkUsername() && this.checkPassword() && this.checkConPassword()
            ){
                let object={
                    username:this.username,
                    password:this.password,
                };
                this.axios.post("/register",this.qs.stringify(object)).then((res)=>{
                    if(res.data.code==201){
                        this.$toast("对不起，用户已存在","提示信息");
                    }
                    if(res.data.code==200){
                        this.$dialog.confirm({title:"注册成功",message:"确定返回登录,取消返回首页"}).then((value)=>{
                            this.$router.push('/login')
                        }).catch(e=>{
                            this.$router.push('/')
                        
                        });
                    }
                });
            }
        },
    }
}
</script>
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

.register{
    padding: 0.4rem;
     margin-top:0.5rem;
}
.van-field + .van-field{
    margin-top: 0.5rem;
}

.register .van-button{
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
    background: #ff734c;
    border: 0.07142857rem solid #ff734c;
    font-size: 0.4rem;
    width: 100%;
}
</style>