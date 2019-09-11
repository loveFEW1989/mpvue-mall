<template>
  <div class="panl">
   <ul v-show="category&&category.length">
     <li v-for="(val,index) of category" :key="index" >
       <img :src="val.image" alt="">
       <p>{{val.name}}</p>
     </li>
   </ul>

  </div>
</template>

<script>
  export default {
    props: {
      category: {
        type:Array,
        default() {
          return []
        }
      }
    },
      methods: {
        
    },
  }
</script>

<style lang="stylus" scoped>
.panl
  background #eeeeee
  padding 5rpx 0 25rpx 0
  ul 
    width 95%
    margin 0 auto
    border-radius .2rem
    padding .3rem 0 .1rem 0
    box-sizing border-box
    display flex
    background #fff
    box-shadow 3px 4px 20px rgba(45,45,45,.15)
    margin-top 10px
    height 200rpx
    li
      flex 1
      text-align center
      img  
        width 70%
        height 60%
        margin-bottom .2rem
      p
       font-size 14px
 
      
      
</style>