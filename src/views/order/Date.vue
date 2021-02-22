<template>
  <div class="date">
    <!-- 顶部导航 -->
    <div class="top">
      <van-nav-bar title="配送日期" fixed>
        <template #left>
          <router-link to="/order"
            ><van-icon name="arrow-left" size="0.5rem" color="#232628"
          /></router-link>
        </template>
      </van-nav-bar>
    </div>
    <!-- 具体送达日期 -->
    <div class="send-date">
      <van-datetime-picker
        v-model="currentDate"
        type="datehour"
        title="选择年月日小时"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onSubmit"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
    onSubmit: function () {
      this.$router.push("/order");
    },
  },
};
</script>

<style scoped>
.send-date {
  margin-top: 1rem;
}
</style>