<template>
    <div>
        <!-- 导航栏 -->
        <van-nav-bar title="客户评价">
            <template #left >
                <van-icon name="arrow-left" size="0.48rem" @click="back" color="#232628"/>
            </template>
            <template #right>
                <van-icon name="ellipsis" size="0.48rem" color="#232628"/>
            </template>
        </van-nav-bar>
        <!-- 评论 -->
        <div class="pl">
            <div class="count">最近已有<span class="count_span">{{comments.length}}</span>评价</div>
            <div class="comment" v-for="(value,index) of comments" :key="index">
                <van-image :src="comments[index].user_pic" width="25" height="25"></van-image><span class="nickname">{{comments[index].nickname}}</span><van-rate v-model="comments[index].star" disabled size="10" disabled-color='#ffd21e' />
                <p class="content">{{comments[index].content}}</p>
                <div class="com_image">
                    <van-image :src="comments[index].com_image01" width="80" height="80"></van-image>
                    <van-image :src="comments[index].com_image02" width="80" height="80"></van-image>
                </div>
            </div>
        </div>
        <!-- 底部导航栏 -->
        <van-goods-action>
            <van-goods-action-icon icon="cart-o" text="购物车" @click="cart" />
            <van-goods-action-button type="warning" text="加入购物车"/>
        </van-goods-action>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            comments:[],
            star:5,
        }
    },
    methods:{
        // 返回上一级
        back(){
            console.log(11);
            window.history.back();
        },
        // 跳转到购物车
        cart(){
            if(this.$store.state.islogin==0){
                this.$router.push('/cart/empty')
            }else{
                this.$router.push(`/cart/${this.$store.state.user.id}`)
            }
        }
    },
    mounted() {
        Toast.loading({
            duration:5000,
            message:'加载中',
            forbidClick: true
        })
        let id=this.$route.params.id;
        this.axios.get('/comment',{
            params:{
                id:id
            }
        }).then(res=>{
            this.comments=res.data
            Toast.clear()
        })
    },
}
</script>
<style scoped>
.pl{
    margin-bottom: 1rem;
}
.count{
    font-size: 0.28rem;
    height: 0.88rem;
    line-height: 0.88rem;
    padding-left: 0.2rem;
    border-top: 3px solid #F3F5F7;
    border-bottom: 3px solid #F3F5F7;
}
.comment{
    border-bottom: 3px solid #F3F5F7;
    padding: 0 10px;
}
.count_span{
    color: #ff6600;
    margin: 0 0.2rem;
}
.nickname{
    font-size: 0.28rem;
    margin-left: 10px;
    width: 5rem;
    display: inline-block;
}
.content{
    font-size: 0.24rem;
}
.com_image{
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-bottom: 10px;
}
</style>