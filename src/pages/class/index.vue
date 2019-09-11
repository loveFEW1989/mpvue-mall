<template>
  <div id="wrap">
    <scroll-view  class="menu-wrapper" :scroll-into-view="navId"
             scroll-with-animation="true" >
      <ul class="menu-ul">
 <li      class="menu-item"
          v-for="(item,index) in items"
          :key="index"
          :id="'nav_'+index"
          :class="[currentIndex ===index ? 'active':'', 'bar-item' ]"
          @click="selectLeft(index)"
         
          ref="item"
        >{{item.text}}
      </li>
      </ul>
     
    </scroll-view>
    <scroll-view  :scroll-y="true" class="good-wrapper"    @scroll="onScroll" :scroll-into-view="wrapIndex" :data-id="goodindex"   
    >
    <div :id="'wrap'+goodindex" v-for="(gooditem,goodindex) in items" :key="goodindex"
   
   >
    <goods-list  :list="gooditem.children" v-if="activeIndex === index"></goods-list>
    </div>
    </scroll-view>
  </div>
</template>

<script>
import goodsList from '../../components/public/goodsList'
import { get } from "@/utils/request"
export default {
  data() {
   return {
     items: [],
     currentIndex:0,
    
      wrapIndex: 'wrap0',
    
   }
  },
  created() {
  get("http://localhost:8080/api/category").then(res => {
      console.log(res.data.data);
      if (res.status === 200){
this.items = res.data.data.datalist


      }
      
    });
  },
  components: {goodsList},
  methods: {
    selectLeft(e) {
       this.currentIndex = e
       this.wrapIndex =  'wrap'+e
       console.log( this.wrapIndex)
    }
  
  
  }
};
</script>

<style  scoped>

.menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 160rpx;
  height: 1340rpx;
  overflow-y: auto;
 
   background-color : #fafafa;
  border-right: 1px solid #eaeaea
}
.bar-item {
  height: 180rpx;
  line-height: 180rpx;
  text-align: center;
  font-size: 26rpx;
  color: #333;
  font-family: HYQiHei-FZS;
  font-weight: 700;
  overflow: hidden;
}
.active{
    position: relative;
  color: #f44;
  font-size: 32rpx;
  border-left: 3px solid #f44
}
/* 右边的列表 */
.good-wrapper {
  padding:0;
  margin:0;
  width: 565rpx;
  float: right; 
  background-color:#fff;
  height:1340rpx;
  box-sizing: border-box;
  overflow: hidden;
}
.list-title{
  padding-top: 20rpx ;
  text-align: center;
  margin-right:20rpx;
}
.list-items {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
  margin-right:40rpx;
  
}
</style>