<template>
    <div class="details">
        <!-- 导航栏 -->
        <van-nav-bar>
            <template #title>
                <van-image src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" width="3rem"></van-image>
            </template>
            <template #left >
                <van-icon name="arrow-left" size="0.48rem" @click="back" color="#232628"/>
            </template>
            <template #right>
                <van-icon name="chat-o" size="0.48rem" color="#232628"/>
            </template>
        </van-nav-bar>
        <!-- 图片预览 -->
        <van-swipe @change="changeNum">
            <van-swipe-item v-for="(value,index01) of image" :key="index01"><van-image :src="image[index01]" width="7.5rem" height="8.18rem"></van-image></van-swipe-item>
            <template #indicator>
                <div class="change_num">{{ current+1}}/4</div>
            </template>
        </van-swipe>
        <!-- 标题 -->
        <div class="title">
            <div class="title01">{{result[2]}}<span class="title02">{{result[3]}}</span></div>
            <div class="star">
                <van-icon name="star-o" size="0.4rem" />
            </div>
            <div class="onprice"><span>￥{{result[4]}}</span>以售{{result[5]}}件</div>
        </div>
        <!-- 选项 -->
        <div class="option">
            <div class="option_item" v-for="(value,index02) of 4" :key="index02">
                <p>{{option[index02]}}</p><p>{{result[index02+6]}}</p>
            </div>
            <!-- 商品规格 -->
            <div class="option_item">
                <p @click="sku_show">已选··</p><p @click="sku_show">11111</p>
            </div>
            <van-sku v-model="show" :sku="sku" :goods="goods" goods-id="1" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked"/>
        </div>
        <!-- 订单评论 -->
        <div class="comment">
            <div class="comment_top">订单评价<span>更多</span></div>
            <div>
                <div class="comment_item" v-for="(value,index03) of 3" :key="index03">
                    <van-image src="" width="20" class="user_pic"></van-image>
                    <span></span><van-rate v-model="star" disabled size="10" disabled-color='#ffd21e' />
                    <p></p>
                    <div class="comment_img">
                        <van-image src="" width="80"></van-image>
                        <van-image src="" width="80"></van-image>
                    </div>
                </div>
                <van-button type="primary" size="large" color="" to="">更多评论</van-button>
            </div>
            <!-- 图文详情 -->
            <div class="text_pic">
                <p>图文详情</p>
                <van-image :src="result[index04+10]" v-for="(value,index04) of 5" :key="index04"></van-image>
            </div>
        </div>
        <!-- 底部商品导航栏 -->
        <van-goods-action>
            <van-goods-action-icon icon="service" text="客服" color="#ee0a24" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    data() {
        return {
            image:[],
            result:[],
            results:[],
            resulted:[],
            option:['花语','材料','包装','配送'],
            current:0,
            star:5,
            // 商品规格
            show:false,
            sku: {
                    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                    tree: [
                    {
                        k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                        {
                            id: "1", // skuValueId：规格值 id
                            name: "红色", // skuValueName：规格值名称
                            imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-3.png", // 规格类目图片，只有第一个规格类目可以定义图片
                        },
                        {
                            id: "2", // skuValueId：规格值 id
                            name: "蓝色色", // skuValueName：规格值名称
                            imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-3.png", // 规格类目图片，只有第一个规格类目可以定义图片
                        },
                        ],
                    },
                    ],
                    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                    list: [
                    {
                        id: 1, // skuId
                        s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
                        price: 200, // 价格（单位分）
                        stock_num: 10000, // 当前 sku 组合对应的库存
                    },
                    {
                        id: 2, // skuId
                        s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
                        price: 5990, // 价格（单位分）
                        stock_num: 10000, // 当前 sku 组合对应的库存
                    },
                    ],
                    price: "1.00", // 默认价格（单位元）
                    stock_num: 99999, // 商品总库存
                    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                    none_sku: false, // 是否无规格商品
                    hide_stock: false, // 是否隐藏剩余库存
            },
            goods: {
                
            },
        }
    },
    methods:{
        // 返回上一级
        back(){
            window.history.back();
        },
        // 切换图片页码
        changeNum(index) {
            this.current = index;
        },
        // 启动商品规格
        sku_show(){
            this.show=true;
        },
        onBuyClicked(){
            console.log(1)
        },
        onAddCartClicked(){
            console.log(2);
        }
    },
    mounted() {
        // 获取路由id参数
        let id=this.$route.params.id;
        // 获取商品详情
        this.axios.get('/details',{
            params:{
                id:id
            }
        }).then(res=>{
            console.log(res.data)
            // 把对象转为数组
            this.image=Object.values(res.data.image)
            this.result=Object.values(res.data.result);
            this.results=Object.values(res.data.results);
            this.resulted=res.data.resulted;
        
        })
    },
}
</script>
<style scoped>
.details{
    background: #F3F5F7;
}
.change_num{
    background: rgba(255, 255, 255, 0.7);
    width: 0.72rem;
    height: 0.36rem;
    text-align: center;
    line-height: 0.36rem;
    font-size: 0.24rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    z-index: 99;
}

.title{
    background: #fff;
    width: 94%;
    margin: 0 auto;
}
.title01{
    font-size: 0.28rem;
    display: inline-block;
    width: 85%;
}
.title02{
    margin: 0;
    font-size: 0.28rem;
    color: #FF734C;
    margin-left: 0.4rem;
}
.star{
    display: inline-block;
    margin-left: 0.4rem;
}
.onprice{
    margin-top: 0.2rem;
    font-size: 0.24rem;
    line-height: 0.52rem;
}
.onprice>span{
    font-size: 0.4rem;
    display: inline-block;
    width: 80%;
    color: #FF734C;
    font-weight: 600;
}
.option{
    background: #fff;
    width: 94%;
    margin: 0.2rem auto;
}
.option_item {
    font-size: 0.24rem;
    display: flex;
    margin-bottom: 2px;
    background: #fff;
}
.option_item p:nth-of-type(1){
    width: 15%;
    text-align: center;
}
.option_item p:nth-of-type(2){
    width: 85%;
}

/* 订单评论 */
.comment{
    background: #fff;
    margin: 0.2rem auto;
    width: 94%;
}
.comment_top{
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    border-bottom: 3px #F3F5F7 solid;
}
.comment_top span{
    font-size: 0.24rem;
    margin-left: 4.85rem;
}
.comment_item{
    border-bottom: 10px #F3F5F7 solid;
}
.comment_item span{
    font-size: 0.24rem;
    display: inline-block;
    width: 4.5rem;
    margin-left: 10px;
}
.comment_item p{
    font-size: 0.26rem;
}
.comment_img{
    display: flex;
    width: 50%;
    margin-bottom: 0.4rem;
    justify-content: space-between;
}
/* 图文详情 */
.text_pic{
    border-top: 10px #F3F5F7 solid;
    background: #fff;
}
.text_pic p{
    font-size: 0.32rem;
}
</style>