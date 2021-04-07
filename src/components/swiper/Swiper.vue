<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>-->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper",
  // props: {
  //   listSwiper: {
  //     type: Array,
  //     default: null
  //   }
  // },
  mounted() {
    setTimeout(() => {
      new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选  horizontal横纵
        loop: true, // 循环模式选项
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          //变成圆点
          type: "bullets",
          //点击圆点控制
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }, 1000);
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 150px;
  margin: 20px auto;
  margin-top: 0;
}
</style>
