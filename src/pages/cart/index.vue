<template>
  <div class="card page-tab">
    <van-nav-bar title="购物车"></van-nav-bar>
  
      <ul class="ul">
        <li class="li border-bottom" v-for="val in GoodsList" :key="val.id">
          <div class="left" >
            <img src="images/true.png" alt v-if="val.checked " />
            <img src="images/false.png" v-else alt />
          </div>
          <div class="middle border">
            <img :src="val.image_path" />
          </div>
          <div class="right">
            <p class="name">{{val.name}}</p>
            <div class="del">
              <van-button size="small" type="danger" >删除</van-button>
            </div>

            <div>
              <p class="one">
                <span>￥</span>
                {{val.present_price }}
              </p>
              <p class="two">
                <i class="iconfont icon-jianhao" >-</i>
                <span>{{val.count}}</span>
                <i  class="iconfont icon-jiahao">+</i>
              </p>
            </div>
          </div>
        </li>
      </ul>
 

    <div class="fixedbot">
      <div class="pics border-bottom">
        <div class="quanxuan" @click="changeAllChooise">
          <img src="images/true.png" alt v-if=" !notCheckedList.length && GoodsList.length" />
          <img src="images/false.png" alt v-else />
          <!-- {{allCheck?'全不选':'全选'}} -->
          全选
        </div>
        <div class="totalPrice">合计: ￥{{totalPrice}}</div>

        <div class="confirm">
          <van-button size="small" type="primary">去结算</van-button>
        </div>
      </div>
    </div>
    <div class="shop-warpper" v-show="!GoodsList.length ">
      <div class="shop">
        <img :src="noShop" alt />
      </div>
      <p class="desc">您的购物车还是空的额</p>
    
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      allCheck: false,
      checkList: [],
      checked: false,
      noShop: require("images/shop.png")
    };
  },
 
  computed: {
  
  },

  methods: {
   
   
  }
};
</script>

<style lang="stylus" scoped>
@import '~css/mixin.styl';

.fixedbot {
  background: #fff;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 50px;
  border-top: 1px solid #e0322b;
}

.pics {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 10px 10px;
  justify-content: space-around;

  .checkedAll {
    font-size: 15px;
  }

  .totalPrice {
    flex: 1;
    text-align: center;
  }

  .confirm {
    width: 77px;
    margin-right: 10px;
  }

  .quanxuan {
    position: relative;
    width: 70px;
    height: 50px;
    display: flex;
    align-items: center;

    .span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      width: 60px;
      left: 25px;
    }
  }

  .total {
    align-content: flex-start;
    font-size: 14px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 145px;

    span {
      color: #e0322b;
      font-weight: bold;
    }
  }
}

.quanxuan img, .left img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.iconfont {
  font-size: 21px;
}

.totalPrice {
  font-size: 18px;
}

.li {
  positon: relative;
}

.del {
  position: absolute;
  right: 10px;
  top: 10px;
}

.card >>> .checkbox-component>input+label>.input-box {
  height: 17px;
  width: 17px;
  border: 1px solid red;
}

.card >>> .checkbox-component>input+label>.input-box>.input-box-tick>path {
  stroke: red;
}

.card {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0px;

  .scroll {
    position: fixed;
    top: 38px;
    bottom: 110px;
    left: 0;
    right: 0;
    overflow: hidden;
    padding-top: 10px;

    .ul {
      margin: 0 10px;

      li {
        display: flex;
        align-items: center;
        height: 90px;
        padding-bottom: 10px;
        margin-top: 10px;

        .left {
          width: 40px;
          flex: 0 0 40px;
        }

        .middle {
          width: 80px;
          flex: 0 0 80px;
          padding: 1px;
          box-sizing: border-box;

          img {
            width: 100%;
          }
        }

        .right {
          flex: 1;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 0 5px 0 15px;
          box-sizing: border-box;

          .name {
            font-size: 14px;
            color: #e0322b;
            ellipsis();
            width: 125px;
          }

          div {
            display: flex;
            justify-content: space-between;
            padding: 0 20px 0 0;

            .one {
              font-size: 16px;
              color: #e0322b;

              span {
                font-size: 14px;
              }
            }

            .two {
              width: 80px;
              font-size: 19px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              i {
                color: #747474;
              }

              span {
                padding: 0 10px;
                font-size: 16px;
              }
            }
          }
        }
      }

      .confirm {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 5px;
        margin-bottom: 10px;
        margin-right: 30px;

        .notijiao {
          height: 35px;
          padding: 0 15px;
          font-size: 14px;
          margin-right: 5px;
          line-height: 35px;
          border-radius: 2px;
          background: #E5E5E5;
          color: #D3D3D4;
        }

        .delete {
          background: #E6057F;
          color: #fff;
        }
      }
    }
  }

  .shop-warpper {
    width: 100%;
    padding-top: 20px;

    .shop {
      display: flex;
      background: #F2F2F2;
      flex-direction: column;
      justify-content: center;
      margin-top: 40px;
      background: #F6F6F6;
      width: 125px;
      height: 125px;
      border-radius: 50%;
      text-align: center;
      margin: auto;
      position: relative;

      img {
        width: 70%;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .desc2 {
      height: 40px;
      width: 150px;
      line-height: 40px;
      border: 1px solid #000;
      text-align: center;
      margin: 0 auto;
      border-radius: 25px;
      font-size: 17px;
      margin-top: 35px;
    }

    .desc {
      text-align: center;
      margin-top: 25px;
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
