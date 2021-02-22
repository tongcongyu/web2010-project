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
            <van-swipe-item v-for="(value,indexaa) of 4" :key="indexaa"><van-image :src="image[indexaa]" width="7.5rem" height="8.18rem"></van-image></van-swipe-item>
            <template #indicator>
                <div class="change_num">{{ current+1}}/4</div>
            </template>
        </van-swipe>
        <!-- 标题 -->
        <div class="title">
            <div class="title01">{{details[0].title}}/{{details[0].title01}}<span class="title02">{{details[0].title02}}</span></div>
            <div class="star">
                <van-icon name="star-o" size="0.4rem" />
            </div>
            <div class="onprice"><span>￥{{details[0].price}}</span>以售{{details[0].sales_volume}}件</div>
        </div>
        <!-- 选项 -->
        <div class="option">
            <div class="option_item" v-for="(value,index09) of 4" :key="index09">
                <p>{{option_title[index09]}}</p><p>{{option[index09]}}</p>
            </div>
            <!-- 类型 -->
        
        </div>
        <!-- 订单评论 -->
        <div class="comment">
            <div class="comment_top">订单评价<span>更多</span></div>
            <div>
                <div class="comment_item" v-for="(value,indexqq) of 3" :key="indexqq">
                    <van-image :src="details[indexqq].user_pic" width="20" class="user_pic"></van-image>
                    <span>{{details[indexqq].nickname}}</span><van-rate v-model="star" disabled size="10" disabled-color='#ffd21e' />
                    <p>{{details[indexqq].content}}</p>
                    <div class="comment_img">
                        <van-image :src="details[indexqq].com_image01" width="80"></van-image>
                        <van-image :src="details[indexqq].com_image02" width="80"></van-image>
                        <van-image :src="details[indexqq].com_image03" width="80"></van-image>
                        <van-image :src="details[indexqq].com_image04" width="80"></van-image>
                    </div>
                </div>
                <van-button type="primary" size="large" color="" to="">更多评论</van-button>
            </div>
            <!-- 图文详情 -->
            <div class="text_pic">
                <p>图文详情</p>
                <van-image :src="details[0].image_text01"></van-image>
                <van-image :src="details[0].image_text02"></van-image>
                <van-image :src="details[0].image_text03"></van-image>
                <van-image :src="details[0].image_text04"></van-image>
                <van-image :src="details[0].image_text05"></van-image>
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
            star:3,
            details:[],
            current: 0,
            image:[],
            option_title:['花语','材料','包装','配送'],
            option:[],
            comment_img:[]
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
            this.details=res.data
            console.log(this.details);
            // 将商品图片添加到image
            this.image.push(this.details[0].image01) 
            this.image.push(this.details[0].image02) 
            this.image.push(this.details[0].image03) 
            this.image.push(this.details[0].image04)
            // 获取option
            this.option.push(this.details[0].flower_means)
            this.option.push(this.details[0].material)
            this.option.push(this.details[0].package)
            this.option.push(this.details[0].range)
            // 获取评论图片
            if(this.details)
            this.comment_img.push(this.details[0].com_image01)
            this.comment_img.push(this.details[0].com_image02)
            this.comment_img.push(this.details[0].com_image03)
            this.comment_img.push(this.details[0].com_image04)
            for(var i=0;i<this.comment_img.length;i++){
                if(this.comment_img[i]==''){
                    this.comment_img.splice(i,1);
                    i--
                }
            }
            console.log(this.comment_img);
        })
        // 获取评论数
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
    height: 0.6rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    border-bottom: 5px #F3F5F7 solid;
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
    margin-bottom: 0.4rem;
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