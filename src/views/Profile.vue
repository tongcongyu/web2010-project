<template>
    <div id="app">
        <van-nav-bar
        title="个人资料"
        right-text="保存">
        <template #left>
            <router-link to="/personal"><van-icon name="arrow-left"/></router-link>
        </template>
        </van-nav-bar>
        <div class="middle-one">
            <van-image
                round
                width="1.2rem"
                height="1.2rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <span>点击修改图片</span>
        </div>
        <div class="middle-two">
            <van-divider />
            <van-field v-model="username" label="姓名" /><van-divider />
            <van-field v-model="phone" label="手机" /><van-divider />
            <van-field v-model="email" label="邮箱" /><van-divider />
            <van-field name="radio" label="性别"><van-divider />
                <template #input>
                    <van-radio-group v-model="radio" direction="horizontal">
                    <van-radio name="1">男</van-radio>
                    <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field><van-divider />
            <van-field
                :value="timeValue"
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
            username:'',
            phone:'',
            email:'',
            radio:'1',
            timeValue:'',
            bir_show: false, 
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(2021, 3, 1),
            currentDate: new Date(),
        }
    },
    methods: {
        //生日
        showBir() {
            this.bir_show = true;
        },
        closeBir() {
            this.bir_show = false;
        },
        onBirConfirm() {
            this.timeValue = this.timeFormat(this.currentDate);
            this.bir_show = false;
        },
        timeFormat(time) {
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            return year + "-" + month + "-" + day;
        },
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
.van-nav-bar .van-icon {
    color: #232628;
    font-size: 0.36rem;    
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