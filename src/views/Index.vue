<template>
    <div class="home_page">
        <!-- 导航栏 -->
        <div class="home_content">
            <van-nav-bar id="nav" fixed>
                <template #left class="nav_content">
                    <router-link to="/search"><van-icon name="search" size="0.48rem" color="#000" /></router-link>
                </template>
                <template #title>
                    <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" class="title_pic">
                </template>
                <template #right>
                    <van-icon name="audio" size="0.48rem" color="#000" />
                </template>
            </van-nav-bar>
            <!-- 下拉刷新页面 -->
            <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" >
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
                    <div class="navigation" v-for="(value,i) of festival" :key="i">
                        <router-link :to="`/details/${festival[i].id}`">
                            <div class="navigation_div">
                                <div class="navigation_p">
                                    <p>{{festival[i].title}}</p>
                                    <p>{{festival[i].title02}}</p>
                                    <p>￥{{festival[i].price}}</p>
                                </div>
                                <img :src="festival[i].image01">
                            </div>
                        </router-link>
                    </div>
                    
                </div>
                <!-- 分类 -->
                <div class="scene">
                    <div class="scene_item" v-for="(value,k) of 3" :key="k" :id="'scene_item'+k">
                        <p>{{scene_item[k][0]}}</p>
                        <p>{{scene_item[k][1]}}</p>
                        <img src="https://img02.hua.com/m/icon/go_red.png">
                    </div>
                </div>
                <div class="scene_bottom">
                        <div v-for="(value,p) of scene_bottom_img" :key="p">
                            <p>{{scene_bottom_img[p][0]}}</p>
                            <img :src="scene_bottom_img[p][1]">
                        </div>
                </div>   
            </div>                  
            <!-- 送恋人 -->
            <div>
                <p class="product_title">送恋人/爱情鲜花</p>
                <div class="product" v-for="(value,w) of product" :key='w'>
                    <router-link :to="`/details/${product[w].id}`">
                        <img :src="product[w].image01">
                        <div class="product_p">
                            <p>{{product[w].title}}</p>
                            <p>{{product[w].title01}}</p>
                            <p>{{product[w].title02}}</p>
                            <p>{{product[w].flower_means}}</p>
                            <p>￥{{product[w].price}}</p>
                            <p>已销售{{product[w].sales_volume}}件</p>
                            <img src="https://img02.hua.com/m/home/img/home_buy_btn.png" class="shop_cart">
                        </div>
                    </router-link>
                </div>
                <!-- 查看更多 -->
                <div class="product_more">
                    <router-link to="/list/1">查看更多</router-link>
                </div>
            </div>
            </van-pull-refresh>
        </div>
        <!-- 底部导航栏 -->
        <total-tabbar></total-tabbar>
    </div>
    
</template>
<script>
import { Toast } from 'vant';
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
            // 情人节商品
            festival:[],
            // 送长辈
            scene_item:[
                ['送恋人','所有的怦然心动都是你'],
                ['送长辈','谢谢你，我爱你'],
                ['送长辈','久违亦如初见']
            ],
            // 新品来袭
            scene_bottom_img:[
                ['新品来袭','https://img02.hua.com/wx_imgs/home_category_new.png?v2'],
                ['韩式鲜花','https://img02.hua.com/wx_imgs/home_category_quality.png'],
                ['设计师臻选','https://img02.hua.com/wx_imgs/home_ranklist.png?v2'],
                ['高端鲜花','https://img02.hua.com/wx_imgs/home_category_quality.png']
            ],
            // 商品列表
            product:[]
        }
    },
    methods:{
       // 刷新页面
        onRefresh() {
            // 刷新页面
            location.reload()
            this.$toast('刷新成功');
            // 取消刷新
            this.isLoading = false;    
        },
        // 封装axios
        // 情人节商品请求
        loadData(){
            // 加载提示框
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
            });
            this.axios.get('/index').then(res=>{
                let result=res.data;
                this.festival=result;
                Toast.clear()
            })
        },
        // 商品列表请求
        loadList(id,num){
            // 加载提示框
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
            });
            this.axios.get('/index_list',{
                params:{
                    id:id,
                    num:num
                }
            }).then(res=>{
                let result=res.data;
                this.product=result;
                // 关闭加载提示框
                Toast.clear()
            })
        }
    },
    mounted() {
        // 请求节日商品
        this.loadData()
        // 请求鲜花列表
        this.loadList(1,6)
    },
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
.van-nav-bar{
    line-height: 0;
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
    overflow: hidden;
    height: 0.38rem;
}
.navigation{
    border-radius: 0.12rem;
    flex: 0 0 49%; 
    margin-top: 0.1rem;
    background-color:#fff;
    height: 1.42rem;
}
.navigation_div{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.navigation_p{
    flex: 0 0 60%;
}
.navigation p {
    margin-left: 0.3rem;
    margin-top: 0.1rem;
}
.navigation p:nth-of-type(2){
    color: #71797f;
}
.navigation img{
    flex: 0 0 30%;
    width: 1.1rem;
    height: 1.1rem;
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
    overflow: hidden;
    line-height: 0.36rem;
    text-overflow: ellipsis;
    height: 0.38rem;
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
    margin: 0 auto 1.2rem;
    background: #FFFFFF;
    border-radius: 0.4rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.26rem;
    color: rgba(35, 38, 40, 0.7);
}
a{
    color: #232628;
}
</style>