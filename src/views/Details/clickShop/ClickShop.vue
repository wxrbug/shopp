<template>
  <div id="clickShop">
    <div class="click-bar">
      <div class="information"></div>
      <div class="join">
        <div class="click-join" @click="goClick">加入购物车</div>
        <div class="click-payment">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clickShop",
  data() {
    return {};
  },
  components: {},
  methods: {
    //发射
    goClick() {
      this.$emit("goClick");
    }
  }
};
</script>

<style scoped>
.click-bar {
  position: fixed;
  height: 45px;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
}
.information {
  flex: 2.5;

}
.join {
  display: flex;
  flex: 3;
}
.click-join {
  flex: 1;
  text-align: center;
  line-height: 270%;
  background: #ff9000;
  color: wheat;
  font-size: 15px;
  font-weight: 600;
}
.click-payment {
  flex: 1;
  text-align: center;
  line-height: 270%;
  background: red;
  color: wheat;
  font-size: 15px;
  font-weight: 600;
}
</style>
