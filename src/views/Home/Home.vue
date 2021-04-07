<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="in">淘宝宝</div>
    </nav-bar>

    <div id="input-color">搜索框</div>

    <srcoll
      class="content"
      ref="srcoll"
      @pullingUp="pullingUp"
      @pullingDown="pullingDown"
      @scroll="scroll"
    >
      <swiper>
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          <img class="swiper-img" :src="item.img" />
        </swiper-item>
      </swiper>
      <type-item :branch="branch"></type-item>
      <row :row="row"></row>
    </srcoll>
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import SwiperItem from "components/swiper/item";
import Swiper from "components/swiper/Swiper";
import TypeItem from "../Home/type/Type";
import Row from "../Home/dataRow/dataRow";
import Srcoll from "components/scroll/Scroll";

import { getHome, getType, getRow } from "network/home";
export default {
  name: "home",
  data() {
    return {
      swiperList: [],
      branch: [],
      row: [],
      cont: 0
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    TypeItem,
    Row,
    Srcoll
  },
  mounted() {
    // //监听滑动
    // window.onscroll = this.handleScroll;
    this.getHome();
    this.getType();
    this.getRow();
  },
  // activated() {
  //   console.log("b");
  //   window.onscroll = this.handleScroll;
  // },

  deactivated() {
    // window.onscroll = this.handleScroll;
  },
  methods: {
    scroll(position) {
      console.log(position);
    },
    // handleScroll() {
    //   if (
    //     document.documentElement.scrollTop >=
    //     this.$refs.mySwiper.$el.offsetHeight
    //   ) {
    //     this.isLocation = true;
    //   } else {
    //     this.isLocation = false;
    //   }
    // },
    //上拉刷新
    pullingUp() {
      if (this.cont == this.row.length) {
        this.$store.dispatch("successMesg", "没有数据!");
        setTimeout(() => {
          this.$store.state.messageName.isMessage = false;
        }, 1000);
      }
      this.cont += 4;
      this.getRow();
    },
    //下拉刷新
    pullingDown() {
      this.getRow();
    },
    //获取主页轮播图
    getHome() {
      getHome().then(result => {
        this.swiperList = result;
      });
    },
    //获取主页类型数据
    getType() {
      getType().then(result => {
        this.branch = result;
      });
    },
    //商品数据
    getRow() {
      getRow().then(result => {
        this.row = result.splice(0, 4 + this.cont);
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* 视口高度 */
  height: 100vh;
}
.content {
  /* height:300px; */
  height: calc(100% - 49px - 30px - 44px);
  overflow: hidden;
}
.nav-bar {
  color: aliceblue;
  background: rgb(209, 14, 121);
  font-size: 15px;
  width: 100%;
}
#input-color {
  display: flex;
  flex: 1;
  top: 43px;
  width: 320px;
  height: 30px;
  background: red;
}
.swiper {
  width: 100%;
  height: 150px;
}
.swiper-img {
  width: 100%;
  height: 150px;
}
</style>
