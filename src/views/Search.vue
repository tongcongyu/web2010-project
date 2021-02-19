<template>
    <div>
        <form action="/">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"/>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
           value:'', 
        }
    },
    methods:{
        // 回车搜索
        onSearch(val) {
            console.log(111)
        },
        // 取消回首页
        onCancel() {
            this.$router.push("/")
        },
    },
    mounted() {
        
    },
}
</script>