<template>
 <div id="tab-ber">
     <slot></slot>
   </div>
</template>

<script>
 export default {
   name :'tabbar',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
#tab-ber{
  display: flex;
  background: #f6f6f6;
  position: fixed; 
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(1000, 100, 100, -0.1)
}
 
</style>
