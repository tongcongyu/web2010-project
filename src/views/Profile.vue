<template>
    <div id="app">
        <van-nav-bar
        title="个人资料">
        <template #left>
            <router-link to="/personal"><van-icon name="arrow-left"/></router-link>
        </template>
         <template #right>
             <span @click="save">保存</span>
         </template>
        </van-nav-bar>
    <div class="avatar">
      <van-uploader
        :after-read="afterRead"
        :before-read="beforeRead"
        :max-count="1"
        preview-size="120px"
      >
        <van-image width="100" height="100" round :src="user_pic" />
      </van-uploader>
    </div>
        <div class="middle-two">
            <van-divider />
            <van-field v-model="nickname" label="昵称" placeholder="昵称"/><van-divider />
            <van-field v-model="phone" label="手机" placeholder="手机" :state="phoneState" /><van-divider />
            <van-field v-model="email" label="邮箱" placeholder="邮箱" :state="emailState"/><van-divider />
            <van-field name="radio" label="性别"><van-divider />
                <template #input>
                    <van-radio-group v-model="sex" direction="horizontal">
                    <van-radio name="1">男</van-radio>
                    <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field><van-divider />
            <van-field
                :value="birthday"
                label="生日"
                placeholder="请选择"
                readonly
                @click="showBir"
            />
            <van-popup v-model="bir_show" position="bottom">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @confirm="onBirConfirm"
                    @cancel="closeBir"
                    />
                </van-popup>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user_pic: '', //头像
            nickname:'',// 昵称
            username:'',
            phone:'',
            email:'',
            sex:'1',
            birthday:'',
            id:'',
            bir_show: false, 
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(2021, 3, 1),
            currentDate: new Date(),
            phoneState:"",
            emailState:"",
        }
    },
    methods: {
        //文件上传前
        beforeRead(file) {
            if (file.type !== "image/jpeg" && file.type !== "image/png") {
            this.$toast("只允许上传jpg/png格式的图片！");
            return false;
            }
            return true;
        },
        //文件上传成功后
        async afterRead(file) {
        //文件读取完成后的回调函数
        console.log(file);
        this.user_pic = file.content;
        let uploadImg = await upLoaderImg(file.file); //使用上传的方法。file.file
        },
        //生日
        showBir() {
            this.bir_show = true;
        },
        closeBir() {
            this.bir_show = false;
        },
        onBirConfirm() {
            this.birthday = this.timeFormat(this.currentDate);
            this.bir_show = false;
        },
        timeFormat(time) {
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            return year + "-" + month + "-" + day;
        },
        checkPhone(){
            let phoneRegExp=/^1[3-9]\d{9}$/;
            if(phoneRegExp.test(this.phone)){
                this.phoneState = "success";
                return true;
            } else {
                this.$toast({
                    message: "手机格式错误",
                    position: "middle",
                });
                this.passwordState = "error";
                return false;
            }
        },
        checkEmail(){
            let emailRegExp=/^[a-zA-Z0-9]{6,11}@[a-zA-Z0-9]{2,5}.[a-zA-Z0-9_-]{3}$/;
            if(emailRegExp.test(this.email)){
                this.emailState = "success";
                return true;
            } else {
                this.$toast({
                    message: "邮箱格式错误",
                    position: "middle",
                });
                this.passwordState = "error";
                return false;
            }
        },
        save(){
            if(this.checkPhone() && this.checkEmail() ){
            var date={
                id:JSON.parse(sessionStorage.getItem("user")).id,
                nickname:this.nickname,
                phone:this.phone,
                email:this.email,
                sex:this.sex,
                birthday:this.birthday,
                
            };  
            this.axios.post('/profile',this.qs.stringify(date)).then((res)=>{
            })
            this.$router.go(-1);
            this.$toast("保存成功")
        }
        }
    },
    mounted() {
        let obj=JSON.parse(sessionStorage.getItem('user'))
        this.axios.get('/profiles?'+this.qs.stringify(obj)).then((res)=>{
        this.nickname = res.data.nickname;
        this.phone = res.data.phone;
        this.email = res.data.email;
        this.sex = res.data.sex;
        this.birthday = res.data.birthday;
        })
    },
    
}
</script>
<style scoped>
#app{
    height: 14rem;
    background-color: #f0f0f0;
}
.van-nav-bar-text{
    background-color: #232628;
}
.avatar{
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.middle-one{
    width: 100%;
    height: 3.4rem;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
}
.van-image{
    margin: 0 auto;
    margin-top: 1.2rem;
}
.middle-one>span{
    font-size: 0.12rem;
    margin: 0 auto;
    margin-top: 0.2rem;
}
.van-divider{
    margin: 0;
}
</style>