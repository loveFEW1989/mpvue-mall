<template>
  <div class="">
 <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in bannerArray" :key="index">
            <swiper-item>
                <image :src="item.imageUrl" class="slide-image"/>
            </swiper-item>
        </block>
    </swiper> 


  </div>
</template>

<script>
  export default {
    name:'vSwiper',
    data() {
      return {
        bannerArray:[
                {imageUrl:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg'},
                {imageUrl:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg'},
                {imageUrl:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg'},
            ],
              indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
      }
    }
  }
</script>

<style lang="stylus" scoped>
.swiper{
  width:100%;
  height:350rpx;
}
image{
  width:100%;
  height:100%
}
</style>