<template>
  <div id="shopping">
    <nav-bar class="nav-bar">
      <div slot="in">购物车({{connt}})件</div>
      <div slot="right" @click="deleteUp">删除</div>
    </nav-bar>
    <srcoll class="content">
      <sh-list :shList="shList" />
    </srcoll>
    <to-price />
    <message></message>
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import ShList from "./shoppList/ShList";
import Srcoll from "components/scroll/Scroll";
import ToPrice from "./toPrice/Toprice";
import Message from "components/message/Message";
export default {
  name: "shopping",
  data() {
    return {};
  },
  components: {
    NavBar,
    ShList,
    Srcoll,
    ToPrice,
    Message
  },
  methods: {
    //删除商品
    deleteUp() {
      if (this.deleteConnt > 0) {
        this.date("删除" + this.deleteConnt + "件！");
        this.$store.dispatch("deleteShopp");
      } else {
        this.date("没有商品！");
      }
    },
    //消息
    date(mes) {
      this.$store.dispatch("successMesg", mes);
      setTimeout(() => {
        this.$store.state.messageName.isMessage = false;
      }, 1000);
    }
  },
  computed: {
    //件数
    connt() {
      return this.$store.state.shoppList.length;
    },
    //数据
    shList() {
      return this.$store.state.shoppList;
    },
    //删除的件数
    deleteConnt() {
      let isDelete = this.$store.state.shoppList.filter(obj => {
        return obj.checkbox == false;
      }).length;
      return isDelete;
    }
  }
};
</script>

<style scoped>
#shopping {
  height: 100vh;
}
.nav-bar {
  color: aliceblue;
  background: rgb(209, 14, 121);
  z-index: 9999;
  font-size: 15px;
}
.content {
  height: calc(100% - 49px - 41px - 44px);
  background: rgb(230, 225, 227);
  overflow: hidden;
}
.no-shopp {
  height: 200px;
}
</style>
