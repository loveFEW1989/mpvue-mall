<template>
  <div class="container">
   <Title :num="num" v-if="floorName" :floorName="floorName"></Title>
   <div class="foot-wrapper" v-if="foor&& foor.length">
    <div class="foot-top">
     <div class="foot-top-left border-right">
       <img  :src="foor[0].image"  alt="">
     </div>
     <div class="foot-top-right">
       <div class="border-bottom" >
         <img style="height:100px" mode="aspectFit" :src="foor[1].image" alt="">
       </div>
       <div class="border-bottom">
         <img mode="aspectFit" :src="foor[2].image" alt="">
       </div>
     </div>

    </div>
    <div class="foot-bot border-bottom">
      <div class="bot-item border-right">
        <img mode="aspectFit" style="height:100px" :src="foor[3].image" />
      </div>
      <div class="bot-item border-left">
        <img mode="aspectFit" style="height:100px" :src="foor[4].image" alt="">
      </div>
    </div>
    <div v-if="foor.length>5" class="foot-bot border-bottom">
      <div>
        <img mode="aspectFit" style="height:100px" :src="foor[5].image" />
      </div>
      <div class="border-left">
        <img mode="aspectFit" style="height:100px" :src="foor[6].image" alt="">
      </div>
    </div>



   </div>
  </div>
</template>

<script>
import Title from 'components/home/Title'
  export default {
    props: ['floorName', 'foor', 'num'],
    components: {Title}

  }
</script>

<style lang="stylus" scoped>
.border-bottom{
  border-bottom: 1px solid #eaeaea
}
.border-right{
   border-right: 1px solid #eaeaea
}
.foot-wrapper
   display  flex
   flex-direction column
   .foot-top
      display flex
    
      .foot-top-left, .foot-top-right
        flex 1
      .foot-top-left
         width 414rpx
         height 428rpx
         border-right 1px solid #eaeaea
         border-bottom 1px solid #eaeaea
         img
          width 100%
          height 100%
      .foot-top-right
         display flex
         flex-direction column
         width 414rpx
         height 214rpx
        .border-bottom
         width 414rpx
         height 214rpx
         border-bottom 1px solid #eaeaea
         img 
          width 100%
          height 100px
   .foot-bot
      display flex
      height 200rpx
      overflow hidden
      .bot-item
        flex 1
        width 48% 
       
        height 200rpx
        img
         width 100%
                    
</style>