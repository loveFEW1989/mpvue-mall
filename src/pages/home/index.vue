<template>
  <div>
   <home-swiper></home-swiper>
<home-panl  :category="recommend.category"></home-panl>
<home-recommend :recommend="recommend.recommend"></home-recommend>
<home-foor :floorName="floorNames[0]" :foor="recommend.floor1" :num="num" ></home-foor>  
<home-foor :floorName="floorNames[1]" :foor="recommend.floor2" :num="num+1" ></home-foor>  
<home-foor :floorName="floorNames[2]" :foor="recommend.floor3" :num="num+2" ></home-foor>  
<home-hot :hot="recommend.hotGoods"></home-hot>    

  </div>
</template>

<script>
import { get } from "@/utils/request"
import homeSwiper from '../../components/home/homeSwiper'
import homePanl from '../../components/home/homePanl'
import homeRecommend from '../../components/home/homeRecommend'
import homeFoor from '../../components/home/homeFoor'
import homeHot from '../../components/home/homeHot'
export default {
  data() {
    return {
      recommend: {},
      num: 1,
      floorNames: ["休闲食品", "新鲜水果", "营养奶品"]
    };
  },
  created() {
  
    get("http://localhost:8080/api/home").then(res => {
      console.log(res.data.data.data);
      if (res.status === 200){
this.recommend = res.data.data.data
console.log(this.recommend)
console.log(this.recommend.floor1)

      }
      
    });
  },
  components: {
    homeSwiper,
    homePanl,
    homeRecommend,
    homeFoor,
    homeHot
  }
};
</script>

<style  scoped>
</style>