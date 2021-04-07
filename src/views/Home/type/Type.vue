<template>
  <div id="type">
    <div v-for="(item, index) in branch" :key="index" class="type-item">
      <img :src="item.typeImg" alt />
      <div>{{ item.typeName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "type",
  //子接收
  props: {
    branch: {
      //传过来指定类型
      type: Array,
      //默认值
      default() {
        return [];
      }
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
#type {
  display: flex;
  margin-top: -10px;
  flex-wrap: wrap;
  text-align: center;
  .type-item {
    flex: 1;
    img {
      width: 60px;
      height: 50px;
    }
  }
}
</style>
