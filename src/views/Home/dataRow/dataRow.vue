<template>
  <div id="dataRow">
    <div class="dataRow">
      <div class="item-i" v-for="(item, index) in row" :key="index" v-on:click="jumpClick(item)">
        <div class="img">
          <img :src="item.shoppImg" />
        </div>
        <div class="text">
          <div class="text-name">{{ item.shoppName }}</div>
          <div>
            <span style="color: #ff5500; font-size: 15px;text-align: center;">￥{{ item.shoppPrice }}</span>
            <span style="font-size: 11px;color: #999999; margin-left: 5px;">{{ item.shoppBuy}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataRow",
  props: {
    row: {
      //传过来指定类型
      type: Array,
      //默认值
      default() {
        return [];
      }
    }
  },
  components: {},

  methods: {
    //点击跳转
    jumpClick(item) {
      this.$router.push({
        path: "/details",
        query: {
          iid: item.homeID
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.dataRow {
  display: flex;
  flex-wrap: wrap;
  .item-i {
    flex: 1;
    margin-left: 5px;
    margin-top: 5px;
    margin-right: 5px;
    background: #f2f2f2;
  }
  .text {
    width: 150px;
    font-size: 100%;
    .text-name {
      text-align: center;
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
