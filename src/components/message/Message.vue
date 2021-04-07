<template>
  <div id="message">
    <div class="mess" v-show="isShow">
      {{isMesg}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {};
  },
  components: {},
  computed: {
    isMesg() {
      return this.$store.state.messageName.message;
    },
    isShow() {
      return this.$store.state.messageName.isMessage;
    }
  }
};
</script>

<style lang="less" scoped>
.mess {
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 45%;
  left: 35%;
  z-index: 9999;
  background: white;
  opacity: 0.5;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
}
</style>