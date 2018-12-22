<template>
  <div class="my_center_pages">
    <div class="card_user_info">
      <!-- 头部卡片 -->
      <div class="field_box_100">
        <!-- 100的填充 -->
      </div>
      <div class="head_background_blue">
        <!-- 向下圆弧 -->
      </div>
      <div class="card_fixed_above">
        <!-- 卡片信息 -->
        <div class="header_pic">
          <!-- 头像 -->
          <img src="../../../static/image/cartest.jpg" alt="">
        </div>
        <div class="nick_name">
          嗨皮哥
        </div>
        <div class="car_model_info">
          大众 捷达2017款 200 舒适型
        </div>
        <div class="phone_and_jifen">
          <div class="_phone_number">
            <img class="_phone_icon" src="../../../static/image/phone-icon.png" alt="">
            13843838438
          </div>
          <div class="_jifen">
            <img class="jifen_icon" src="../../../static/image/jifen.png" alt="">
            180000
          </div>
        </div>
        <div class="card_back_pic">
          <img src="../../../static/image/card-back.png" alt="">
        </div>
      </div>
      <div class="list_order_box">
        <div class="_item_content" @click="checkbaoYangOrder()">
          <div class="_icon_item">
            <img src="../../../static/image/baoyang-order.png" alt="">
          </div>
          <div class="_title">
            保养订单
          </div>
        </div>
        <div class="_item_content">
          <div class="yongpin_">
            <img src="../../../static/image/yongpin.png" alt="">
          </div>
          <div class="_title">
            用品订单
          </div>
        </div>
      </div>
    </div>
    <!-- 下方菜单列表 -->
    <div class="menu_list_bottom">
      <div class="_menu_item" v-for="item in menuList" :key="item.name">
        <div class="_left_icon">
          <img src="../../../static/image/letter.png" alt="">
        </div>
        <div class="_center_title">
          {{item.name}}
        </div>
        <div class="_next_step">
          <img src="../../../static/image/right-icon.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      menuList: [
        {
          name: '邀请有礼'
        },
        {
          name: '优惠券'
        },
        {
          name: '专属4S店'
        },
        {
          name: '常用收货地址管理'
        },
        {
          name: '联系客服'
        },
        {
          name: '意见反馈'
        }
      ]
    }
  },
  methods: {
    checkbaoYangOrder () {
      wx.navigateTo({
        url: '../main/order-manager/order-list/main'
      })
    }
  },
  created () {
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  },
  add: function () {

  }
}
</script>

<style>
.menu_list_bottom{

}
.menu_list_bottom ._menu_item{
  display: flex;
  align-items: center;
  margin-left: 36rpx;
  height: 88rpx;
  line-height: 88rpx;
}
.menu_list_bottom ._left_icon{
  width: 10%;
}
.menu_list_bottom ._left_icon img{
  width:30rpx;
  height:28rpx;
}
.menu_list_bottom ._center_title{
  width: 85%;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  border-bottom: 2rpx solid #f4f4f4;
}
.menu_list_bottom ._next_step{
  width: 10%;
  border-bottom: 2rpx solid #f4f4f4;
}
.menu_list_bottom ._next_step img{
  width:15rpx;
  height:27rpx;
}



.list_order_box{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top:260rpx;
  padding-bottom: 60rpx;

}
.list_order_box ._icon_item{
  text-align: center;
}
.list_order_box .yongpin_{
  text-align: center;
}
.list_order_box .yongpin_ img{
  width:60rpx;
  height:68rpx;
}
.list_order_box ._icon_item img{
  width:48rpx;
  height:68rpx;
  vertical-align: middle;
}
.list_order_box ._title{
  margin-top: 24rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}




.my_center_pages{

}
.card_user_info{
  position: relative;
  border-bottom: 6rpx solid #f4f4f4;
}
.field_box_100{
  height: 68rpx;
  background: #568FF4;
}
.head_background_blue{
    background: #568FF4;
    width: 100%;
    height: 155rpx;
    border-radius: 0 0 80% 80%
}
.card_fixed_above{
  text-align: center;
  height:388rpx;
  background:rgba(255,255,255,1);
  box-shadow:0rpx 6rpx 28rpx 2rpx rgba(86,143,244,0.6);
  border-radius:20rpx;
  position: absolute;
  left: 6%;
  top: 0;
  z-index: 99;
  width: 88%;
  margin: 26rpx auto;
}
.card_fixed_above .header_pic{
  margin: 19rpx 0 14rpx 0;
}
.card_fixed_above .header_pic img{
  width:120rpx;
  height:120rpx;
  border-radius:50%;
  vertical-align: middle;
}
.card_fixed_above .nick_name{
  font-size:32rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.card_fixed_above .car_model_info{
  font-size:32rpx;
  font-weight:400;
  color:rgba(153,153,153,1);
  margin: 23rpx 0 61rpx 0;
}
.card_fixed_above .phone_and_jifen{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:28rpx;
  font-weight:bold;
  color:rgba(153,153,153,1);
  padding: 0 23% 0 8%;
}
.card_fixed_above .phone_and_jifen ._phone_number {
  display: flex;
  align-items: center;
}
.card_fixed_above .phone_and_jifen ._phone_number img{
  width:17rpx;
  height:26rpx;
  margin-right: 30rpx;
  vertical-align: middle;
}
.card_fixed_above .phone_and_jifen ._jifen img{
  width:28rpx;
  height:28rpx;
  vertical-align: middle;
  margin-right: 30rpx;
}
.card_fixed_above .card_back_pic{
  position:absolute;
  bottom:-26rpx;
  left:0rpx;

}
.card_fixed_above .card_back_pic img{
  height: 111rpx;
  width: 660rpx;
}
</style>
