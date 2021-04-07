<template>
  <TabBar>
    <item path="/home" itemColor="red">
      <span slot="slot-img" class="el-icon-eleme"></span>
      <span slot="slot-img2" class="el-icon-search"></span>
      <div slot="slot-item">首页</div>
    </item>
    <item path="/branch" itemColor="red">
      <span slot="slot-img" class="el-icon-eleme"></span>
      <span slot="slot-img2" class="el-icon-search"></span>
      <div slot="slot-item">分类</div>
    </item>
    <item path="/shopping" itemColor="red">
      <span slot="slot-img" class="el-icon-goods"></span>
      <span slot="slot-img2" class="el-icon-s-goods"></span>
      <div slot="slot-item">购物</div>
    </item>
    <item path="/iuser" itemColor="red">
      <span slot="slot-img" class="el-icon-user"></span>
      <span slot="slot-img2" class="el-icon-user-solid"></span>
      <div slot="slot-item">我的</div>
    </item>
  </TabBar>
</template>

<script>
//导入导航组件
import TabBar from "./tabbar";
//导入图片文件组件
import Item from "./item";
export default {
  name: "NoTabbar",
  data() {
    return {};
  },
  components: {
    TabBar,
    Item
  }
};
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
