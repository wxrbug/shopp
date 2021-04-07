<template>
  <div id>
    <navbar class="nav-bar">
      <div slot="left" @click="upper">
        <span class="el-icon-arrow-left"></span>
      </div>
      <div slot="in">商品</div>
      <div slot="right" @click="cart">
        <span class="el-icon-shopping-cart-2"></span>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/navbar/NavBar";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    navbar
  },
  methods: {
    upper() {
      //返回上一步 +1下一步
      this.$router.go(-1);
    },
    //跳转值购物车
    cart() {
      this.$router.push("/shopping").catch(err => err);
    }
  }
};
</script>

<style scoped>
.nav-bar {
  color: aliceblue;
  background: rgb(209, 14, 121);
  font-size: 15px;
}
</style>
