<template>
    <div class="home_page">
        <van-nav-bar id="nav">
            <template #left class="nav_content">
                <img src="../assets/search01.png" class="search" v-if="search">
                <img src="../assets/search02.png" class="search" v-else >
            </template>
            <template #title>
                <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" class="title_pic">
            </template>
            <template #right>
                <img src="../assets/customer01.png" class="search" v-if="search">
                <img src="../assets/customer02.png" class="search" v-else>
            </template>
        </van-nav-bar>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
        <div class="conpany-info">
            <div><img src="../assets/right.png" alt="">认证龙头企业</div>
            <div><img src="../assets/right.png" alt="">15年品牌</div>
            <div><img src="../assets/right.png" alt="">3小时送达</div>
            <div><img src="../assets/right.png" alt="">最近402717条好评</div>
        </div>
        <!-- 产品分类 -->
        <div class="procate">
           
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            search:true,
            images: [
                'https://img02.hua.com/slider/21_valentine_banner_m.jpg?v2',
                'https://img02.hua.com/slider/20_ndzt_banner_m.jpg?v2',
                'https://img02.hua.com/slider/m_spring_banner.jpg',
                'https://img02.hua.com/slider/21_birthday_banner_m.jpg'
            ],
        }
    },
}
</script>
<style scoped>
.home_page{
    background: #F3F5F7;
}
/* 导航栏 */
/deep/.van-nav-bar__content{
    height: 0.88rem;
}
.search{
    width: 0.6rem;
}
.title_pic{
    width: 60%;
}
/* 轮播图    */
.van-swipe{
    width: 94%;
    margin: auto;
}
.van-swipe-item img{
    width: 100%;
    border-radius: 6px;
}
.conpany-info{
    color: #71797f;
    line-height: 16px;
    margin:  10px auto;
    width: 94%;
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
}
.conpany-info img{
    vertical-align: bottom;
    width: 0.24rem;
}
/* 产品分类 */
.procate{
    
}
</style>