<template>
  <div id="app">
    <tabbar v-show="isTabbar"></tabbar>
    <keep-alive exclude="Details,shopping">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Tabbar from "components/tabbar/NoTabbar";
export default {
  data() {
    return {};
  },
  components: {
    Tabbar
  },
  computed: {
    //详情页要消失
    isTabbar() {
      return this.$store.state.isTabbar;
    }
  }
};
</script>
<style lang="less"></style>
