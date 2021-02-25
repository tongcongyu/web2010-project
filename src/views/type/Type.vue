<template>
  <div>
    <!-- 顶部 -->
    <van-search shape="round" background="#4fc08d" placeholder="请输入搜索关键词" disabled/>
    <!-- 主体 -->
    <van-tree-select :items="items" :main-active-index.sync="active" height="100%" @click-nav='tree'>
      <template #content >
        <div class="content">
          <van-image :src='typeImage.image'></van-image>
          <type-mini :id='title' :type='type'></type-mini>
        </div>
      </template>
    </van-tree-select>

    <!-- 引入底部导航栏 -->
    <total-tabbar></total-tabbar>
  </div>
</template>
<script>
// 引入组件
import Vue from 'vue'
import TypeMini from './Type_mini'
Vue.component('type-mini',TypeMini)


export default {
  data() {
    return {
      title:{
        index:'0',
        name:'热门搜索'
      },
      active: 0,
      items: [{ text: '热门搜索' }, { text: '鲜花' }, { text: '永生花' }, { text: '蛋糕' }, { text: '特色礼品' }, { text: '礼篮' }, { text: '绿植花卉' }],
      // 分类标题图片
      typeImage:{},
      // 组件数据数组
      type:[],
      index:0
    }
  },
  methods:{
    // 封装axios
    loadData(index){
      // 获取页面标题大图片
      this.axios.get('/typeImage',{
        params:{
          id:index
        }
      }).then(res=>{
        console.log(res.data);
        this.typeImage=res.data.result[0]
        this.type=res.data.results;
        console.log(this.type);
      })
    },
    // 获取分类标号
    tree(index){
      this.index=index
      this.title.index=index
      this.title.name=this.items[index].text
      this.loadData(this.index)
    }

  },
  mounted() {
    this.loadData(this.index)
  },
  
}
</script>
<style scoped>
.content{
  padding: 12px 5px 44px;
}
</style>