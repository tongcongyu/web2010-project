<template>
    <div>
        <!-- 导航栏 -->
        <van-nav-bar :title="bar_title">
            <template #right>
                <van-icon name="chat-o" size="0.5rem" />
            </template>
            <template #left>
                <router-link to="/"><van-icon name="arrow-left" size="0.5rem" /></router-link>
            </template>
        </van-nav-bar>
        <van-tabs @click="onClick" line-height='0' title-active-color='#ff734c' title-inactive-color='#232628' v-model="active">
            <van-tab title="综合"></van-tab>
            <van-tab title="销量"></van-tab>
            <van-tab title="价格"></van-tab>
            <van-tab title="新品"></van-tab>
        </van-tabs>
        <van-tabs @click="onClickcopy" line-height='0' title-active-color='#ff734c' title-inactive-color='#232628' v-model="active02">
            <van-tab title="全部"></van-tab>
            <van-tab title="送女友"></van-tab>
            <van-tab title="送男友"></van-tab>
            <van-tab title="送朋友"></van-tab>
            <van-tab title="送长辈"></van-tab>
        </van-tabs>
        <!-- 商品列表 -->
        <div class="product_list">
            <div class="product_item" v-for="(value,index06) of product_item" :key="index06">
                <img :src="product_item[index06].image01">
                <p>{{product_item[index06].title02}}</p>
                <p>{{product_item[index06].title01}}</p>
                <p>￥{{product_item[index06].price}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            van_title:['鲜花','永生花','蛋糕','礼品','巧克力','生日祝福','表白求婚','商务开业','周年纪念','企业团购'],
            bar_title:'',
            product_item:[],
            id:'',
            rid:'',
            active:0,
            active02:'',
            sort:0
        }
    },
    methods:{
        // 封装axios请求
        loadData(id,rid,sort){
            this.axios.get('/list',{
                params:{
                    // id用于查找大类
                    id:this.id,
                    // rid用于查找小类
                    rid:this.rid,
                    // sort用于排序
                    sort:this.sort
                }
            }).then(res=>{
                let result=res.data;
                this.product_item=result;
            })
        },
        // 点击排序选项卡发送请求
        onClick(name,title) {
            this.sort=name
            // 调用axios
            this.loadData(this.id,this.rid,this.sort)
        },
        // 点击小类选项卡
        onClickcopy(name,title){
            this.rid=name
            this.loadData(this.id,this.rid,this.sort)
        }
    },
    mounted(){
        let id=this.$route.params.id;
        this.id=id
        this.bar_title=this.van_title[id-1],
        // 调用axios
        this.loadData(this.id,this.rid,this.sort)
    },
    watch:{

    }
}
</script>
<style scoped>
.product_list{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    background: #e9ecf0;
    margin-bottom: 1.2rem;
}
.product_item{
    height: 5.4rem;
    flex: 0 0 47%;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    background-color: #fff;
}
.product_item img{
    width:100%;
    height: 3.84rem;
}
.product_item p{
    margin: 0;
    margin-left: 0.1rem;
}
.product_item p:nth-of-type(1){
    font-size: 0.24rem;
    border-radius: 10rem;
    border: 1px solid #FF734C;
    color: #FF734C;
    width: 60%;
    text-align: center;
    /* 超出隐藏 */
    height: 0.35rem;
    overflow: hidden;
    /* 隐藏部分以省略号显示 */
    text-overflow: ellipsis;
}
.product_item p:nth-of-type(2){
    font-size: 0.24rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    /* 超出隐藏 */
    height: 0.35rem;
    overflow: hidden;
    /* 隐藏部分以省略号显示 */
    text-overflow: ellipsis;
}
.product_item p:nth-of-type(3){
    font-size: 0.28rem;
    color: #FF734C;
    font-weight: 500;
}
</style>