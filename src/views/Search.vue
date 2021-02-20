<template>
    <div class="search">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
            <div @click="onSearch">搜索</div>
        </template>
        <template #label>
            <div @click="onCancel">取消</div>
        </template>
    </van-search>
        <div class="search_content">
            <p class="hot_search">热门搜索</p>
            <div class="hot_content">
                <p v-for="(value,index08) of hot_content" :key="index08">{{hot_content[index08]}}</p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
           value:'', 
           hot_content:['爱情鲜花','向日葵','生日蛋糕','康乃馨','百合','满天星'],
        }
    },
    methods:{
        // 回车搜索
        onSearch() {
            if(this.value!=''){
                this.$router.push(`/list/${this.value}`)
            }
        },
        // 取消回首页
        onCancel() {
            this.$router.push("/")
        },
    },
    mounted() {
        
    },
}
</script>
<style scoped>
.search{
    background: #F3F5F7;
}
.search_content{
    background: #fff;
    margin:0.1rem auto;
    padding:0.36rem 0.2rem;
}
.hot_search{
    font-size: 0.28rem;
    margin: 0;
}
.hot_content{
    display: flex;
    flex-wrap: wrap;
}
.hot_content p{
    text-align: center;
    font-size: 0.24rem;
    height: 0.32rem;
    background: #E9ECF0;
    padding:8px 13px ;
    margin: 15px 10px 10px 0;
}
</style>