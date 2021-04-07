<template>
  <div id="Details" style="background:#f5f5f5">
    <debar class="debar"></debar>
    <div class="details" v-for="(item,index) in list" :key="index">
      <div class="de-img">
        <img :src="item.shoppImg" alt />
      </div>
      <div class="de-name">
        <span class="icont">
          ￥
          <span class="price">{{item.shoppPrice}}</span>
        </span>
        <div class="name">{{item.shoppName}}</div>
      </div>
    </div>
    <clickshop @goClick="goClick"></clickshop>
    <message></message>
  </div>
</template>
<script>
import Debar from "./deBar/deBar";
import Clickshop from "./clickShop/ClickShop";
import { getDetails } from "network/details";
import Message from "components/message/Message";
export default {
  name: "Details",
  data() {
    return {
      //商品信息
      list: [],
      iid: ""
    };
  },
  components: {
    Debar,
    Clickshop,
    Message
  },
  //进入触发
  created() {
    this.$store.commit("isShow", false);
  },
  mounted() {
    this.getDetails();
  },
  //离开触发
  beforeDestroy() {
    this.$store.commit("isShow", true);
  },

  methods: {
    //添加购物车
    goClick() {
      // this.$store.commit("addShopp", this.list[0]);
      //注意注意注意如果是对象 需要转换一下
      this.$store.dispatch(
        "addShopp",
        JSON.parse(JSON.stringify(this.list[0]))
      );
      if (this.$store.state.shoppList.length > 0) {
        this.date("添加成功！");
      } else {
        this.date("添加失败！");
      }
    },
    //消息
    date(mes) {
      this.$store.dispatch("successMesg", mes);
      setTimeout(() => {
        this.$store.state.messageName.isMessage = false;
      }, 1000);
    },
    //获取详情数据
    getDetails() {
      //保存传过来的ID
      this.iid = this.$route.query.iid;
      getDetails(this.iid).then(result => {
        this.list = result;
      });
    }
  }
};
</script>

<style scoped>
.details {
  display: flex;
  flex-wrap: wrap;
}
.de-img {
  height: 320px;
}
img {
  width: 100%;
  height: 100%;
}
.icont {
  margin-left: 5px;
  color: #ff5500;
}
.price {
  font-size: 20px;
}
.name {
  padding: 5px;
}
</style>
