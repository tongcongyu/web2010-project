<template>
    <div>
        <!-- 导航栏 -->
        <van-nav-bar title="鲜花">
            <template #right>
                <van-icon name="chat-o" size="0.5rem" />
            </template>
            <template #left>
                <router-link to="/"><van-icon name="arrow-left" size="0.5rem" /></router-link>
            </template>
        </van-nav-bar>
        <div class="orderby">
            <p>综合</p>
            <p>销量</p>
            <p class="price">价格</p>
            <p>新品</p>
        </div>
        <div class="product">
            <p>送女友</p>
            <p>送男性</p>
            <p>送朋友</p>
            <p>送长辈</p>
            <p>筛选</p>
        </div>
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
            product_item:[],

        }
    },
    mounted(){
        let id=this.$route.params.id;
        this.axios.get('/list',{
            params:{
                id:id
            }
        }).then(res=>{
            let result=res.data;
            console.log(result);
            this.product_item=result;
        })
    }
}
</script>
<style scoped>
.orderby{
    display: flex;
}
.orderby p{
    flex: 0 0 25%;
    font-size: 0.28rem;
    text-align: center;
    color:#232628;
    margin: 0;
    height: 0.88rem;
    line-height: 0.88rem;
}
.price::after{
    content: '';
    display: inline-block;
    width: 0.03rem;
    height:0.03rem;
    border:0.10rem solid #b4babf;
    border-top: 0.10rem solid #b4babf;
    border-left: 0.10rem solid #fff;
    border-right: 0.10rem solid #fff;
}
.product{
    display: flex;
}
.product p{
    flex: 0 0 20%;
    font-size: 0.24rem;
    text-align: center;
}
.product_list{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    background: #e9ecf0;
    margin-bottom: 1.2rem;
}
.product_item{
    flex: 0 0 47%;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    background-color: #fff;
}
.product_item img{
    width:100%;
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