<template>
  <div class="purchaser">
    <!-- 顶部导航 -->
    <div class="top">
      <van-nav-bar title="订购人信息" fixed>
        <template #left>
          <router-link to="/order"
            ><van-icon name="arrow-left" size="0.5rem" color="#232628"
          /></router-link>
        </template>
      </van-nav-bar>
    </div>
    <div class="purchaser-details">
      <van-contact-edit
        is-edit
        show-set-default
        :contact-info="editingContact"
        set-default-label="设为默认联系人"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSave:function(){
      this.$router.push('/order');
    }
  }
};
</script>

<style scoped>
.purchaser-details {
  margin-top: 1rem;
}
</style>