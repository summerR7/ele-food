<template>
  <div id="ele-seller">
    <!-- 头部 -->
    <header class="seller-header">
      <ul>
        <li class="active">综合排序<span class="icon">&#xe600;</span></li>
        <li>距离最近</li>
        <li>品质联盟</li>
        <li>筛选<span class="icon">&#xe600;</span></li>
      </ul>
    </header>

    <!-- 商家列表 -->
    <div class="seller-shoplist">
      <div class="shop-item" v-for="shop in shoplist" :key="shop.id">
        <div class="shop-info">
          <div class="logo">
            <img :src="shop.image" alt="">
          </div>
          <div class="box">
            <h3>{{shop.name}}</h3>
            <div class="score">
              <div class="star">
                <div class="gray"><img src="../../static/images/star.svg" alt=""></div>
                <div class="active"><img src="../../static/images/star-full.svg" alt=""></div>
              </div>
              <span class="num">{{shop.rating}}</span>
              <span class="count">月售{{shop.recent_order_num}}单</span>
            </div>
            <div class="price">
              <span>￥{{shop.float_minimum_order_amount}}起送 | 配送费￥{{shop.float_delivery_fee}}</span>
              <span>{{shop.distance | formatDistance}} | {{shop.order_lead_time}}分钟</span>
            </div>
          </div>
        </div>

        <div class="activity">
          <span class="minus">减</span>
          <span class="text">{{shop.activities.description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Seller',
  data () {
    return {
      shoplist: []
    }
  },
  created () {
    this.initShopList()
  },
  filters: {
    formatDistance (num) {
      return num > 999 ? (num / 1000.0).toFixed(2) + 'km' : num + 'm'
    }
  },
  methods: {
    // 获取商家列表数据
    initShopList () {
      this.$http.getShopList()
        .then(res => {
          this.shoplist = res.data.list
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  #ele-seller {
    width: 100%;
    height: 100%;
    padding-top: 10.7vw;
    box-sizing: border-box;
    overflow: hidden;

    .seller-header {
      height: 10.7vw;
      border-bottom: 1px solid #eee;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      ul {
        width: 100%;
        height: 100%;
        display: flex;

        li {
          width: 25%;
          text-align: center;
          line-height: 10.7vw;
          font-size: 3.7vw;
          color: #666;
          font-weight: 300;

          &.active {
            color: #333;
            font-weight: 700;
          }

          .icon {
            font-family: 'iconfont';
          }
        }
      }
    }

    .seller-shoplist {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;

      .shop-item {
        height: 34vw;
        box-sizing: border-box;
        padding: 4vw 2.7vw;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        font-size: 12px;
        font-weight: 100;

        .shop-info {
          height: 21.3vw;
          display: flex;

          .logo {
            width: 17.3vw;
            height: 17.3vw;
            border: 1px solid #eee;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .box {
            flex: 1;
            padding-left: 2.3vw;

            h3 {
              width: 80%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 4vw;
              font-weight: 700;
              margin-bottom: 2.7vw;
            }

            .score {
              width: 80%;
              height: 4vw;
              display: flex;
              align-items: center;
              margin-bottom: 2.7vw;

              .star {
                width: 16vw;
                height: 2.7vw;
                position: relative;

                &>div {
                  position: absolute;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;

                  img {
                    display: block;
                    width: 100%;
                    height: 100%;
                  }
                }
              }

              span {
                color: #666;

                &.num {
                  margin: 0 1.5vw;
                }
              }
            }
            .price {
              margin-bottom: 2.7vw;
              display: flex;
              justify-content: space-between;
              padding-bottom: 2.7vw;
            }
          }
        }

        .activity {
          height: 4.8vw;
          padding-left: 20vw;
          display: flex;
          align-items: center;

          .minus {
            display: inline-block;
            width: 4.8vw;
            height: 4.8vw;
            text-align: center;
            line-height: 4.8vw;
            background-color: rgb(240, 115, 115);
            color: #fff;
            border-radius: 0.5vw;
            margin-right: 1.5vw;
          }
          .text {
            max-width: 80%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>
