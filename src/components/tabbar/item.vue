<template>
  <div class="item">
    <div v-if="!isDisplay" @click="ansiClick">
       <slot name="slot-img"></slot>
    </div>
    <div v-else>
      <slot name="slot-img2"></slot>
    </div>
    <div :style="itemColors" @click="ansiClick">
      <slot name="slot-item"></slot>
    </div>
    </div>
</template>

<script>
 export default {
   name :'item',
   //父传子
   props:{
     //路径
     path:String,
     //文字颜色
     itemColor:{
       type:String,
       //设置默认值
       default:"red"
     }
   },
   data () {
     return {
      //  isDisplay:false
     }
   },
   computed :{
     //判断当前页面是否处于活跃
     isDisplay(){
       return this.$route.path.indexOf(this.path)!==-1
     },
     //动态绑定样式
     itemColors(){
       return this.isDisplay?{color:this.itemColor}:{}
     }
   },
   methods: {
     //监听点击跳转
     ansiClick(){
       this.$router.replace(this.path).catch(err=>err)
     }
   }
 }
</script>

<style scoped>
  .item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px
}
  /* .word{
    color: blueviolet;
  } */
</style>
