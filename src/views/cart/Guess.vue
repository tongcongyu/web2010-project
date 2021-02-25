<template>
    <div class="guess">
      <div class="guess-title">猜你喜欢</div>
      <div class="guess-list">
        <div class="guess-item" v-for="(value, i) of result" :key="i">
          <router-link :to="`/details/${result[i].id}`">
            <img :src="result[i].image01"/>
            <p class="title">{{result[i].title01}}</p>
            <p>￥{{result[i].price}}</p>
          </router-link>
        </div>
        <div class="guess-bottom">已经到底喽...</div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
          result:[]
        }
    },
    mounted() {
      let page=parseInt(Math.random()*10+1) 
      this.axios.get('/guess',{
        params:{
          page:page
        }
      }).then(res=>{
        this.result=res.data;
        console.log(this.result);
      })
    },
}
</script>

<style scoped>
a {
  color: #232628;
}
.guess {
  margin-top: 0.2rem;
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
  background-color: #fff;
}
.guess-title {
  margin: 0;
  font-size: 0.34rem;
  margin-left: 0.3rem;
}
.guess-list {
  margin-top: 0.3rem;
  font-size: 0.26rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}
.guess-item {
  border-radius: 0.15rem;
  flex: 0 0 48%;
  box-shadow: 0.02rem 0.04rem 0.2rem 0.08rem #dee2e5;
  margin-top: 0.15rem;
}
.title{
  height: 34px;
  overflow: hidden;
}
.guess-item > a > p:nth-of-type(2) {
  color: #ff734c;
  margin-top: 0;
}
.guess-item > a > img {
  width: 3.59rem;
  border-top-left-radius: 0.15rem;
  border-top-right-radius: 0.15rem;
}
.guess-bottom {
  font-size: 0.2rem;
  margin: 0.3rem auto 0.8rem;
  color: #71797f;
}
</style>