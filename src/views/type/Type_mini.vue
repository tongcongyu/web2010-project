<template>
    <div>
        <p>{{id.name}}</p>
        <div class="type_mini">
            <div v-for="(value,i) in type" :key="i" class="text_image">
                <van-image :src="type[i].image"  width="1.12rem"></van-image>
                <p>{{type[i].text}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // 接受父组件传过来的参数，用法同data的数据
    props:['id','type'],
    data() {
        return {
           
        }
    },
    
}
</script>
<style scoped>
.type_mini{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.type_mini p{
    margin: 0;
}
.text_image{
    width: 1.6rem;
    text-align: center;
    margin-bottom: 0.2rem;
}
.text_image>p{
    font-size: 0.24rem;
    margin-top: 0.16rem;
}
</style>