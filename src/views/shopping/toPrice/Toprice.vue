<template>
  <div id="to-price">
    <div class="to-price">
      <div class="whole">
        <div class="yes-item" @click="toConnt">
          <img :class="{'no-item':isYes}" src="~/assets/img/yes.png" alt />
          <div>全选</div>
        </div>
      </div>
      <div class="money">合计:￥{{toPrice}}</div>
      <div id="settlement" :class="{'yes':isAtv}">结算({{toCount}})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toPrice",
  data() {
    return {
      isAtv: true
    };
  },
  components: {},
  computed: {
    toPrice() {
      //数组过滤
      let b = 0;
      this.$store.state.shoppList
        .filter(obj => {
          return obj.checkbox == false;
        })
        .forEach(item => {
          b += item.shoppPrice * item.count;
        });
      return b.toFixed(2);
    },
    //结算几件商品
    toCount() {
      let count = this.$store.state.shoppList.filter(obj => {
        return obj.checkbox == false;
      }).length;
      return count;
    },
    //全选 默认消失
    isYes() {
      if (this.$store.state.shoppList.length == 0) {
        return true;
      } else {
        return this.$store.state.shoppList.find(obj => obj.checkbox);
      }
    }
  },
  methods: {
    //点击全选 默认消失
    toConnt() {
      if (this.$store.state.shoppList.length == 0) {
        alert("购物车空空");
        return;
      }
      if (this.isYes) {
        this.$store.state.shoppList.forEach(item => {
          item.checkbox = false;
        });
      } else {
        this.$store.state.shoppList.forEach(item => {
          item.checkbox = true;
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.to-price {
  display: flex;
  height: 40px;
  position: fixed;
  bottom: 50px;
  border-bottom: 1px solid black;
  background: rgb(230, 207, 207);
  width: 100%;
  .whole {
    flex: 2;
    .yes-item {
      width: 20px;
      height: 20px;
      border-radius: 50px;
      margin-top: 10px;
      margin-left: 10px;
      border: 1px solid rgb(161, 156, 156);
      img {
        border-radius: 50px;
        width: 100%;
        height: 100%;
      }
      .no-item {
        display: none;
      }
      div {
        position: fixed;
        width: 50px;
        height: 20px;
        left: 35px;
        bottom: 58px;
      }
    }
  }
  .money {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #settlement {
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: red;
    color: white;
    margin: 5px 5px 5px 0;
  }
  .yes {
    opacity: 0.5;
  }
}
</style>
