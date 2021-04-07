<template>
  <div id="werpp" ref="werpp">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bs from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      bscroll: null
    };
  },

  created() {
    //获取网页视口高度
    // console.log(document.documentElement.clientHeight);
    //0和1是不侦测的
    //2手指滑动时侦测 离开不侦测
    //3只要在滑动都在侦测
    this.$nextTick(function() {
      this.bs();
    });
  },
  methods: {
    bs() {
      setTimeout(() => {
        this.bscroll = new Bs(this.$refs.werpp, {
          scrollY: true,
          probeType: 2,
          click: true, //需要监听点击事件
          // //上拉加载
          pullUpLoad: {
            threshold: 30
          },
          // //下拉刷新
          pullDownRefresh: {
            threshold: 25 //触发pullingDown事件的位置
            // stop: 20 //下拉回弹后停留的位置
          }
          // //显示滚动条
          // scrollbar: {
          //   fade: true,
          //   interactive: false
          // }
        });
        // //下拉中能拉一次
        // bs.on("pullingDown", () => {
        //   console.log("shang");
        //   //一直拉
        //   bs.finishPullDown();
        // });
        //获取滑动到哪个位置
        // bs.on("scroll", position => {
        //   console.log(position.y);
        //   // console.log(position.x)
        // });
        // //上拉加载只能拉一次
        // bs.on("pullingUp", () => {
        //   console.log("上拉了");
        //   //可以一直上拉
        //   bs.finishPullUp();
        // });
        this.bscroll.on("scroll", position => {
          this.$emit("scroll", position);
          // console.log(position);
        });
        //上拉加载只能拉一次
        this.bscroll.on("pullingUp", () => {
          this.$emit("pullingUp");
          //可以一直上拉
          this.bscroll.finishPullUp();

          //上拉刷新之后得重新计算高度
          this.bscroll.refresh();
        });
        //下拉
        this.bscroll.on("pullingDown", () => {
          this.$emit("pullingDown");
          this.bscroll.finishPullDown();
          this.bscroll.refresh();
        });
      }, 0);
    }
  },

  components: {}
};
</script>

<style scoped>
</style>
