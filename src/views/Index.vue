<template>
    <div class="home_page">
        <!-- 下拉刷新页面 -->
        <!-- 导航栏 -->
        <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" >
        <div class="home_content">
            <van-nav-bar id="nav" fixed>
                <template #left class="nav_content">
                    <router-link to="/search"><img src="../assets/search01.png" class="search"></router-link>
                </template>
                <template #title>
                    <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" class="title_pic">
                </template>
                <template #right>
                    <img src="../assets/customer01.png" class="search">
                </template>
            </van-nav-bar>
            <!-- 轮播图 -->
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in carousel_images" :key="index">
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
                <div v-for='(image,index) of procate_images_up' :key="index" class="procate_up"><router-link :to="`/list/${procate_images_up[index][0]}`"><img :src="procate_images_up[index][1]"><p>{{procate_images_up[index][2]}}</p></router-link></div>
                <div v-for='(image,index) of procate_images_down' :key="index+'a'" class="procate_down"><router-link :to="`/list/${procate_images_down[index][0]}`"><img :src="procate_images_down[index][1]"><p>{{procate_images_down[index][2]}}</p></router-link></div>
            </div>
            <!-- 节日 -->
            <div class="festival">
                <img src="https://img02.hua.com/zhuanti/valentine/2021/21_valentine_mbanner_m.png" class="festival_top">
                <div class="festival_item">
                    <div class="navigation" v-for="(value,i) of 4" :key="i">
                        <p>情人节畅销款</p>
                        <p>初心不负</p>
                        <p>￥375</p>
                    </div>
                </div>
                <!-- 分类 -->
                <div class="scene">
                    <div class="scene_item" v-for="(value,k) of 3" :key="k" :id="'scene_item'+k">
                        <p>送恋人</p>
                        <p>所有的怦然心动，都是你</p>
                        <img src="https://img02.hua.com/m/icon/go_red.png">
                    </div>
                </div>
                <div class="scene_bottom">
                        <div v-for="(value,p) of 4" :key="p">
                            <p>新品来袭</p>
                            <img :src="scene_bottom_img[p]">
                        </div>
                </div>   
            </div>                  
            <!-- 送恋人 -->
            <div>
                <p class="product_title">送恋人/爱情鲜花</p>
                <div class="product" v-for="(value,w) of 6" :key='w'>
                    <img :src="product[w].image">
                    <div class="product_p">
                        <p>{{product[w].p1}}</p>
                        <p>{{product[w].p2}}</p>
                        <p>{{product[w].p3}}</p>
                        <p>{{product[w].p4}}</p>
                        <p>￥{{product[w].p5}}</p>
                        <p>已销售{{product[w].p6}}万件</p>
                        <img src="https://img02.hua.com/m/home/img/home_buy_btn.png" class="shop_cart">
                    </div>
                </div>
                <!-- 查看更多 -->
                <div class="product_more">
                    <a href="/">查看更多</a>
                </div>
            </div>
            
        </div>
        </van-pull-refresh>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            isLoading: true,
            value: '',
            // 轮播图
            carousel_images: [
                'https://img02.hua.com/slider/21_valentine_banner_m.jpg?v2',
                'https://img02.hua.com/slider/20_ndzt_banner_m.jpg?v2',
                'https://img02.hua.com/slider/m_spring_banner.jpg',
                'https://img02.hua.com/slider/21_birthday_banner_m.jpg'
            ],
            // 产品分类
            procate_images_up:[
                ['1','https://img02.hua.com/wx_imgs/home_flowers.png','鲜花'],
                ['2','https://img02.hua.com/wx_imgs/home_forever.png','永生花'],
                ['3','https://img02.hua.com/wx_imgs/home_cakes.png','蛋糕'],
                ['4','https://img02.hua.com/wx_imgs/home_gifts.png','礼品'],
                ['5','https://img02.hua.com/wx_imgs/home_chocolate.png','巧克力']
            ],
            procate_images_down:[
                ['6','https://img02.hua.com/wx_imgs/home_birthday_1224.png','生日祝福'],
                ['7','https://img02.hua.com/wx_imgs/home_express_1224.png','表白求婚'],
                ['8','https://img02.hua.com/wx_imgs/home_business_1224.png','商务开业'],
                ['9','https://img02.hua.com/wx_imgs/home_anniversary_1224.png','周年纪念'],
                ['10','https://img02.hua.com/wx_imgs/home_group_1224.png','企业团购']
            ],
            scene_bottom_img:[
                'https://img02.hua.com/wx_imgs/home_category_new.png?v2',
                'https://img02.hua.com/wx_imgs/home_category_quality.png',
                'https://img02.hua.com/wx_imgs/home_ranklist.png?v2',
                'https://img02.hua.com/wx_imgs/home_category_quality.png'
                
            ],
            scene_item_img:[
                'https://img02.hua.com/wx_imgs/home_use_lover.png?v2',
                'https://img02.hua.com/wx_imgs/home_use_lover.png?v2',
                'https://img02.hua.com/wx_imgs/home_use_lover.png?v2'
            ],
            product:[
                {image:'https://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg',p1:'忘情巴黎',p2:'33枝卡罗拉红玫瑰',p3:'年销售冠军',p4:'经典报矿，销售冠军',p5:375,p6:13.1},
                {image:'https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg',p1:'一往情深',p2:'精品玫瑰礼盒:19枝卡罗拉红玫瑰，勿忘我1枝',p3:'年销售冠军',p4:'经典报矿，销售冠军',p5:375,p6:13.1},
                {image:'https://img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg',p1:'一往情深',p2:'精品玫瑰礼盒:19枝卡罗拉红玫瑰，勿忘我1枝',p3:'年销售冠军',p4:'经典报矿，销售冠军',p5:375,p6:13.1},
                {image:'https://img01.hua.com/uploadpic/newpic/9012499.jpg_220x240.jpg',p1:'一往情深',p2:'精品玫瑰礼盒:19枝卡罗拉红玫瑰，勿忘我1枝',p3:'年销售冠军',p4:'经典报矿，销售冠军',p5:375,p6:13.1},
                {image:'https://img01.hua.com/uploadpic/newpic/9012471.jpg_220x240.jpg',p1:'一往情深',p2:'精品玫瑰礼盒:19枝卡罗拉红玫瑰，勿忘我1枝',p3:'年销售冠军',p4:'经典报矿，销售冠军',p5:375,p6:13.1},
                {image:'https://img01.hua.com/uploadpic/newpic/9012498.jpg_220x240.jpg',p1:'一往情深',p2:'精品玫瑰礼盒:19枝卡罗拉红玫瑰，勿忘我1枝',p3:'年销售冠军',p4:'经典报矿，销售冠军',p5:375,p6:13.1}
            ]
        }
    },
    methods:{
        // 刷新页面
        onRefresh() {
            // 刷新页面
            location.reload()
            this.$toast('刷新成功');
            this.isLoading = false;    
        },
        onSearch(val) {
            Toast(val);
        },
        onCancel() {
        Toast('取消');
        },
    }
}
</script>
<style scoped>
.home_page{
    background: #F3F5F7;
}
.home_content{
    width: 94%;
    margin: auto;
}
/* 导航栏 */
/deep/.van-nav-bar__content{
    height: 0.88rem;
    background: #F3F5F7;
}
/deep/.van-nav-bar__left, /deep/.van-nav-bar__right{
    padding: 0;
}
.search{
    width: 0.6rem;
}
.title_pic{
    width: 3rem;
}
/* 轮播图    */
.van-swipe{
    margin-top: 1rem;
}
.van-swipe-item img{
    width: 100%;
    border: radius 0.12rem;;
}
.conpany-info{
    color: #71797f;
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    margin-bottom: 0.2rem;
    line-height: 0.3rem;
}
.conpany-info img{
    vertical-align: bottom;
    width: 0.3rem;
}
/* 产品分类 */
.procate{
    background: #fff;
    height: 2.86rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    text-align: center;
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.procate div{
    flex: 0 0 20%;
}
.procate_up img{
    width: 0.8rem;
}
.procate_up p{
    font-weight: 600;
}
.procate_down img{
    width: 0.48rem;
}

.procate p{
    margin: 0;
}
/* 节日 */
.festival_top{
    width: 100%;
    margin: 0%;
}
.festival_item{
    font-size: 0.26rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}
.festival_item p{
    margin: 0;
}
.navigation{
    border-radius: 0.12rem;
    flex: 0 0 49%;
    background: url('https://gd2.alicdn.com/imgextra/i2/3103370467/O1CN01PAYZmL1FJvbD9GMhO_!!3103370467.jpg') no-repeat 90% center;
    background-size: 30%;
    margin-top: 0.1rem;
    background-color:#fff;
    height: 1.42rem;
}
.navigation p {
    margin-left: 0.3rem;
    margin-top: 0.1rem;
}
.navigation p:nth-of-type(2){
    color: #71797f;
}
.scene{
    margin-top: 0.2rem;
    background-color: #fff;
    font-size: 0.24rem;
    height: 3rem;
}
.scene p{
    margin: 0;
}
.scene_item{
    height: 2.94rem;
    flex: 0 0 49%;
}
#scene_item0{
    background:url('https://img02.hua.com/wx_imgs/home_use_lover.png?v2') no-repeat;
    background-size: cover;
}
#scene_item1{
    background:url('https://img02.hua.com/wx_imgs/home_use_older.png') no-repeat;
    background-size: cover;
}
#scene_item2{
    background:url('https://img02.hua.com/wx_imgs/home_use_friends.png') no-repeat;
    background-size: cover;
}
.scene_item p:nth-of-type(1){
    font-size: 0.3rem;
    font-weight: 600;
    margin-left: 0.2rem;
}
.scene_item p:nth-of-type(2){
    color: #F76383;
    margin:0.05rem 0 0.05rem 0.2rem;
}
.scene_item img{
    width: 0.68rem;
    margin-left: 0.2rem;
}
.scene>div{
    float: left;
}
.scene>div:nth-of-type(1){
    width: 48%;
}

.scene>div:nth-of-type(2){
    height: 1.4rem;
    margin-left: 0.25rem;
    width: 48%;
}
.scene>div:nth-of-type(3){
    height: 1.4rem;
    margin-left: 0.25rem;
    margin-top: 0.15rem;
    width: 48%;
}
.scene_bottom{
    background-color: #fff;
    font-size: 0.3rem;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
}
.scene_bottom>div{
    flex: 0 0 25%;
    text-align: center;
}
.scene_bottom img{
    width: 1.12rem;
    height: 1.2rem;
}
/* 产品 */
.product_title{
    font-size: 0.38rem;
    text-align: center;
    font-weight: 600;
    line-height: 0.52rem;
}
.product{
    height: 3.75rem;
    background-color: #fff;
    margin-bottom: 0.3rem;
}
.product img{
    width:50%;
    height: 3.75rem;
    float: left;
}
.product_p{
    float: left;
    width: 50%;
}
.product_p p{
    margin: 0;
    margin: 0.2rem 0 0 0.1rem;
}
.product_p P:nth-of-type(1){
    font-size: 0.3rem;
    font-weight: 600;
    line-height: 0.4rem;
    
}
.product_p P:nth-of-type(2){
    font-size: 0.26rem;
    line-height: 0.36rem;
}
.product_p P:nth-of-type(3){
    font-size: 0.24rem;
    border: 0.02rem solid #FF734C;
    border-radius: 0.16rem;
    color: #FF3D12;
    background-color: #fff;
    width: 1.56rem;
    text-align: center;
}
.product_p P:nth-of-type(4){
    font-size: 0.24rem;
    color: #71797f;
    border-top: 0.02rem solid #F3F5F7;
    border-bottom: 0.02rem solid #F3F5F7;
}
.product_p P:nth-of-type(5){
    font-size: 0.3rem;
    font-weight: 600;
    width: 2.5rem;
}
.product_p P:nth-of-type(6){
    font-size: 0.22rem;
    line-height: 0.32rem;
    color: #71797f;
    width: 2.5rem;
    float: left;
}
.product_p img{
    width: 0.48rem;
    height: 0.48rem;
    margin-left: 0.3rem;
    margin-top: -0.2rem;
}
/* 查看更多 */
.product_more a{
    display: block;
    margin: 0 auto 50px;
    background: #FFFFFF;
    border-radius: 0.4rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.26rem;
    color: rgba(35, 38, 40, 0.7);
}
</style>