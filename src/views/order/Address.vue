<template>
  <div class="address">
    <div class="top">
      <van-nav-bar title="新增收货地址" fixed>
        <template #left>
          <router-link to="/order"
            ><van-icon name="arrow-left" size="0.5rem" color="#232628"
          /></router-link>
        </template>
      </van-nav-bar>
    </div>
    <div class="area">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import {areaList} from "../../assets/js/area.js";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    // onSave() {
    //   Toast("save");
    // },
    onSave:function(){
      this.$router.push('/order');
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "昌地火炬大厦",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
/* 地址 */
.area{
  margin-top: 0.8rem;
}
/* .van-button__danger {
  color: #fff;
  background-color: #FF734C;;
  border: 1px solid #FF734C;;
} */
</style>