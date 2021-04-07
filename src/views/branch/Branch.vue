<template>
  <div id="branch">
    <nav-bar class="nav-bar">
      <div slot="in">分类</div>
    </nav-bar>
    <div class="container">
      <Srcoll class="content">
        <div class="flex" v-for="(item,index) in branch" :key="index">
          <div
            id="items"
            @click="upClass(index)"
            :class="{'items':index==indexs}"
          >{{item.ificationName}}</div>
        </div>
      </Srcoll>
      <Srcoll class="div">
        <BranshList></BranshList>
      </Srcoll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import Srcoll from "components/scroll/Scroll";
import BranshList from "./branshList/BranshList";
import { getBranchs } from "network/branch";
export default {
  name: "branch",
  data() {
    return {
      branch: {},
      //当前的下标
      indexs: 0,
    };
  },
  components: {
    NavBar,
    Srcoll,
    BranshList
  },
  mounted() {
    this.getBranch();
  },
  methods: {
    //获取分类数据
    getBranch() {
      getBranchs().then(result => {
        console.log(result);
        this.branch = result;
      });
    },
    //点击换色
    upClass(index) {
      this.indexs = index;
    }
  }
};
</script>

<style lang="less" scoped>
#branch {
  height: 100vh;
  .nav-bar {
    color: aliceblue;
    background: rgb(209, 14, 121);
    z-index: 9999;
    font-size: 15px;
  }
  .container {
    display: flex;
    height: calc(100% - 44px);
    .content {
      flex: 1.5;
      height: calc(100% - 44px);
      overflow: hidden;
      .flex {
        display: flex;
        flex-wrap: wrap;
        #items {
          flex: 1;
          font-size: 15px;
          margin: 5px;
          text-align: center;
        }
        .items {
          background: rgb(209, 194, 202);
          opacity: 0.5;
        }
      }
    }
    .div {
      flex: 5;
      height: calc(100% - 44px);
      overflow: hidden;
    }
  }
}
</style>