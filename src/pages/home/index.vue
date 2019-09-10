<template>
  <div>
   <home-swiper></home-swiper>
<home-panl  :category="recommend.category"></home-panl>

  </div>
</template>

<script>
import { get } from "@/utils/request"
import homeSwiper from '../../components/home/homeSwiper'
import homePanl from '../../components/home/homePanl'

export default {
  data() {
    return {
      recommend: {},
      num: 1,
      floorNames: ["休闲食品", "新鲜水果", "营养奶品"]
    };
  },
  created() {
  
    get("http://localhost:8081/api/home").then(res => {
      console.log(res.data.data.data);
      if (res.status === 200){
this.recommend = res.data.data.data
console.log(this.recommend)

      }
      
    });
  },
  components: {
    homeSwiper,
    homePanl
  }
};
</script>

<style  scoped>
</style>