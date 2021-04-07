<template>
  <div id="shlist">
    <div class="shopp-item" v-for="(item,index) in shList" :key="index">
      <div class="choice-item">
        <div class="yes-item" @click="yesUp(index)">
          <img :class="{'isAvt':item.checkbox}" src="~/assets/img/yes.png" alt />
        </div>
      </div>
      <div class="img-item">
        <img :src="item.shoppImg" @click="details(item)" alt />
      </div>
      <div class="name-item">
        <div class="text-item">{{item.shoppName}}</div>
        <div class="up-item">
          <div class="price">￥{{item.shoppPrice}}</div>
          <div class="up-cont">
            <button @click="reduce(index)">-</button>
            <div class="count">{{item.count}}</div>
            <button @click="add(index)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shlist",
  props: {
    shList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {},

  methods: {
    //跳转到详情页
    details(item) {
      this.$router.push({
        path: "/details",
        query: {
          iid: item.homeID
        }
      });
    },
    //选中
    yesUp(index) {
      this.$store.dispatch("isUp", index);
    },
    //数量减
    reduce(index) {
      this.shList[index].count--;
      if (this.shList[index].count == 0) {
        this.shList[index].count = 1;
        this.date("已到最低！");
      }
    },
    //数量加
    add(index) {
      this.shList[index].count++;
      if (this.shList[index].count > 5) {
        this.shList[index].count = 5;
        this.date("已到最高！");
      }
    },
    //消息
    date(mes) {
      this.$store.dispatch("successMesg", mes);
      setTimeout(() => {
        this.$store.state.messageName.isMessage = false;
      }, 1000);
    }
  }
};
</script>

<style lang="less"  scoped>
.shopp-item {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 10px 0;
  padding: 0 5px 5px;
  height: 100px;
  border-bottom: 1px solid red;
  .choice-item {
    flex: 1;
    .yes-item {
      width: 20px;
      height: 20px;
      border-radius: 50px;
      margin: auto;
      margin-top: 35px;
      border: 1px solid rgb(161, 156, 156);
      .isAvt {
        display: none;
      }
      img {
        border-radius: 50px;
        width: 100%;
        height: 100%;
      }
    }
  }
  .img-item {
    flex: 4;
    padding: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name-item {
    flex: 8;
    display: flex;
    flex-wrap: wrap;
    .text-item {
      width: 100%;
      height: 50%;
      margin-top: 10px;
    }
    .up-item {
      height: 20%;
      width: 100%;
      margin-top: 10px;
      display: flex;
      .price {
        flex: 2;
        color: rgb(255, 85, 0);
      }
      .up-cont {
        flex: 1;
        display: flex;
        button {
          flex: 1;
        }
        .count {
          flex: 2;
          text-align: center;
        }
      }
    }
  }
}
</style>
