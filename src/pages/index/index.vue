<template>
  <div class="container_box">
    <div class="top_content_box">
      <!-- 头部定位+搜索+客服 -->
      <div class="search_input_box">
        <div class="arc_border"></div>
        <div class="choose_position_city">
          <div class="position_icon">
            <img src="../../../static/image/position.png" alt="">
          </div>
          <div class="position_city">
            长沙
          </div>
          <div class="next_step">
            <img src="../../../static/image/xiala.png" alt="">
          </div>
        </div>
        <div class="search_">
          <icon class="_icon" color="" type="search" size="18"/>
          <input type="text" placeholder="美容洗车" placeholder-style="font-size:28rpx;color:rgba(153,153,153,1)"/>
        </div>
        <div class="custom_server" @click="customServerS()">
          <img src="../../../static/image/custom.png" alt="">
        </div>
      </div>
      <!-- 椭圆弧 -->
      <div class="ellipse_line"></div>
      <!-- 车信息卡片 -->
      <div v-if="false" class="add_card_box">
        <div class="add_card_model">
          <div class="_icon" @click="addMyCar()"><img src="../../../static/image/add-car.png" alt=""></div>
          <div class="content_title">
            <div class="add_your_car">
              点击添加您的爱车
            </div>
            <div class="added_tips">
              享受更优质的4S店车主服务
            </div>
          </div>
        </div>
      </div>
      <div class="car_card_box">
        <div class="card_head">
          <div class="icon_"><img src="../../../static/image/server-active.png" alt=""></div>
          <div class="change_icon" @click="changeMyCar()">切换</div>
        </div>
        <div class="card_info_two">
          <div class="card_info_left">
            <div class="card_brand card_info_common">
              品牌：奔驰GLC2016
            </div>
            <div class="card_price card_info_common">
              爱车估值：28.00万
            </div>
          </div>
          <div class="card_info_right">
            <img src="../../../static/image/cartest.jpg" alt="">
          </div>
        </div>
        <div class="card_info_new">
          <div class="_left">
            <div class="card_info_common _new_price">当前新车价：52.00万</div>
            <div class="_btn_load"><img src="../../../static/image/index.png" alt="">一键贷款</div>
          </div>
          <div class="_right" >
            <div class="car_pai">湘A52U08</div>
            <div class="records_" @click="checkRecord()">
              查看保养记录
            </div>
          </div>
        </div>
        <div class="card_info_range">
          <div class="_left">
            <div class="card_info_common _range">行驶里程：835620公里</div>
            <div class="_exchange_new"><img src="../../../static/image/index.png" alt="">置换新车</div>
          </div>
          <div class="_right">
            车龄：2.5年            
          </div>
        </div>
      </div>
      <!-- 车信息卡片end -->
      <div class="caritory_list">
        <div 
          :class="index > 3 ? 'caritory_item' : 'caritory_item caritory_item_fixed'"
          v-for="(item, index) in modelList"
          @click="modelClick(index)"
          :key="index">
          <div class="_icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="_title">
            {{item.title}}
          </div>
          <div :class="index === 0 ? '_label_tips': '_label_tips_fixed'" v-if='item.price'>
            {{item.price}}
          </div>
        </div>
      </div>
      <!-- 大类模块end -->
      <div class="big_brand_box">
        <!-- 大广告位 -->
        <div class="_image"><img src="../../../static/image/cartest.jpg" alt=""></div>
      </div>
      <div class="weather_box">
        <!-- 天气 -->
        <div class="_left">
          <div class="_icon">
            <img src="../../../static/image/tianqi.png" alt="">
          </div>
          <div class="_wendu">
            多云  12℃ 7/11
          </div>
        </div>
        <div class="_right">
          <div class="_icon">
            <img src="../../../static/image/jiayou.png" alt="">
          </div>
          <div class="_oil_price">
            今日油价：92#93# ¥7.63  95#9
          </div>
        </div>
      </div>
      <!-- 天气end -->
      <div class="day_day_kill">
        <!-- 天天秒杀 -->
        <div class="_head">
          <div class="_left">
            天天秒杀
          </div>
          <div class="_right">
            更多
          </div>
        </div>
        <div class="day_content_list">
          <div class="list_item" v-for="(item, index) in dayListData" :key="index">
            <div class="_pic">
              <img :src="item.img" alt="">
            </div>
            <div class="_title">
              {{item.title}}
            </div>
            <div class="_now_price">
              {{item.curPrice}}
            </div>
            <div class="_ex_price">
              {{item.exPrice}}
            </div>
          </div>
        </div>
      </div>
      <!-- 天天秒杀end -->
      <div class="selected_goods">
        <!-- 精选 -->
        <div class="_head">
          <img src="../../../static/image/jingxuan.png" alt="">精选生活
        </div>
        <div class="_content_table">
          <img src="../../../static/image/table-content.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modelList: [
        {
          icon: '../../../static/image/baoyang.png',
          title: '到店保养',
          price: '￥149.00'
        },
        {
          icon: '../../../static/image/banjin.png',
          title: '钣金油漆',
          price: '邀请免费洗'
        },
        {
          icon: '../../../static/image/woyaozuche.png',
          title: '置换新车',
          price: '正品保障'
        },
        {
          icon: '../../../static/image/mall.png',
          title: '用品商城',
          price: '新车抢鲜订'
        },
        {
          icon: '../../../static/image/jiayou-active.png',
          title: '加油优惠'
        },
        {
          icon: '../../../static/image/luntai.png',
          title: '轮胎促销'
        },
        {
          icon: '../../../static/image/weizhang.png',
          title: '违章查询'
        },
        {
          icon: '../../../static/image/zengzhi.png',
          title: '增值服务'
        }
      ],
      dayListData: [
        {
          img: '../../../static/image/cartest.jpg',
          title: '米其林轮胎...',
          curPrice: '￥388.00',
          exPrice: '￥488.00'
        },
        {
          img: '../../../static/image/cartest.jpg',
          title: '米其林轮胎...',
          curPrice: '￥388.00',
          exPrice: '￥488.00'
        },
        {
          img: '../../../static/image/cartest.jpg',
          title: '米其林轮胎...',
          curPrice: '￥388.00',
          exPrice: '￥488.00'
        },
        {
          img: '../../../static/image/cartest.jpg',
          title: '米其林轮胎...',
          curPrice: '￥388.00',
          exPrice: '￥488.00'
        },
        {
          img: '../../../static/image/cartest.jpg',
          title: '米其林轮胎...',
          curPrice: '￥388.00',
          exPrice: '￥488.00'
        }
      ]
    }
  },
  components: {
  },
  methods: {
    modelClick (index) {
      if (index === 0) {
        wx.navigateTo({
          url: '../main/vehicle-maintenance/date-sa/main'
        })
      }
    },
    customServerS () {
      wx.showModal({
        content: '客服电话:0731-08547695',
        confirmText: '拨打',
        cancelColor: '',
        confirmColor: '#3794E4',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    addMyCar () {
      wx.navigateTo({
        url: '../main/add-car/main'
      })
    },
    changeMyCar () {
      wx.navigateTo({
        url: '../main/my-carlist/main'
      })
    },
    checkRecord () {
      wx.navigateTo({
        url: '../main/my-record/main'
      })
    }
  },
  created () {
  }
}
</script>
<style scoped>

  *{
    margin: 0;
    padding: 0;
  }
  .container_box{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch
  }
  .top_content_box{
    padding-top:20rpx;
    position: relative;
    height:288rpx;
    background:rgba(86,143,244,1);
  }
  .search_input_box{
    padding-left: 36rpx;
    display: flex;
    align-items: center;
  }
  .search_input_box .arc_border{
    border-radius: 100rpx 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
  }
  .choose_position_city{
    width:24%;
    display: flex;
    height:58rpx;
    background:rgba(69,114,195,1);
    border-radius:29rpx;
    justify-content: center;
    align-items: center;
  }
  .choose_position_city .position_icon{
    margin-left: 20rpx;
    margin-right: 16rpx;
    width:22rpx;
    line-height:58rpx;
  }
  .choose_position_city .position_icon img{
    width:22rpx;
    height:28rpx;  
  }
  .choose_position_city .position_city{
    font-size:28rpx;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .choose_position_city .next_step{
    margin: 0 27rpx 0 8rpx;
    width:12rpx;
    line-height:58rpx;
    color:rgba(255,255,255,1);
  }
  .choose_position_city .next_step img{
    width:12rpx;
    height:21rpx;
  }
  .search_input_box .search_{
    display: flex;
    align-items:center;
    margin-left:20rpx;
    height:58rpx;
    background:rgba(255,255,255,1);
    border:1rpx solid rgba(69,114,195,1);
    border-radius:29rpx;
  }
  .search_input_box .search_ ._icon{
    margin-left: 22rpx;
    margin-right: 8rpx;
  }
  .search_input_box .search_ input{
    width: 80%;
  }
  .search_input_box .search_ input .place_holders{
    font-size:28rpx;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .custom_server{
    width:10%;
    display: flex;
    align-items:center
  }
  .custom_server img{
    margin:auto auto;
    width:40rpx;
    height:42rpx;
  }
  .ellipse_line{
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: 100rpx;
    overflow: hidden;
    border-radius: 25% 25% 0 0
  }
  .add_card_box{
    height: 180rpx;
    position: relative;
    z-index: 99;
    width: 94.7%;
    margin: 34rpx auto;
    background:rgba(255,255,255,1);
    box-shadow:0rpx 4rpx 4rpx 0rpx rgba(185,185,185,0.75);
    border-radius:20rpx;
  }
  .add_card_box .add_card_model{
    padding-left: 58rpx;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .add_card_box ._icon{
    padding-right: 26rpx;
  }
  .add_card_box ._icon img{
    width:88rpx;
    height:88rpx;
  }
  .add_card_box .content_title{

  }
  .add_card_box .add_your_car{
    font-size:32rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .add_card_box .added_tips{
    font-size:24rpx;
    font-weight:400;
    color:rgba(153,153,153,1);
  }

  .car_card_box{
    position: relative;
    z-index: 99;
    width: 94.7%;
    margin: 34rpx auto;
    background:rgba(255,255,255,1);
    box-shadow:0rpx 4rpx 4rpx 0rpx rgba(185,185,185,0.75);
    border-radius:20rpx;
  }
  .car_card_box .card_head{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .car_card_box .card_head .icon_ img{
    width:24rpx;
    height:22rpx;
  }
  .car_card_box .card_head .change_icon{
    margin: 0 15rpx 0 9rpx;
    font-size:24rpx;
    font-weight:400;
    color:rgba(54,122,243,1);
  }
  .card_info_two{
    display: flex;
  }
  .card_info_left{
    width: 65%;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .card_info_common {
    padding-left: 16rpx;
    line-height: 88rpx;
    height: 88rpx;
    font-size:24rpx;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .card_info_left .card_brand{
    border-bottom: 2rpx solid #f4f4f4;
    font-size:24rpx;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .card_info_right{
    border-left: 2rpx solid #f4f4f4;
    padding: 7rpx 18rpx 23rpx 18rpx;
    width: 35%;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .card_info_right img{
    width: 100%;
    height:150rpx;
  }
  .card_info_new{
    display: flex;

  }
  .card_info_new ._left{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 66.2%;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .card_info_new ._left ._new_price{
    width: 65%;
  }
  .card_info_new ._left ._btn_load{
    margin-right: 11rpx;
    padding-left:10rpx;
    width: 32%;
    height: 48rpx;
    line-height: 48rpx;
    background:rgba(255,174,0,1);
    border-radius:8rpx;
    font-size:24rpx;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .card_info_new ._left ._btn_load img{
    padding-right: 5rpx;
    vertical-align:sub;
    width:28rpx;
    height:26rpx;
  }
  .card_info_new ._right{
    text-align: center;
    width: 41.2%;
    border-left: 2rpx solid #f4f4f4;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .card_info_new ._right .car_pai{
    font-size:32rpx;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }
  .card_info_new ._right .records_{
    font-size:24rpx;
    font-weight:400;
    text-decoration:underline;
    color:rgba(54,122,243,1);
  }
  .card_info_range{
    display: flex;
    
  }
  .card_info_range ._left{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 66.2%;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .card_info_range ._left ._range{
    width: 65%;
  }
  
  .card_info_range ._left ._exchange_new{
    margin-right: 11rpx;
    padding-left:10rpx;
    background:rgba(255,174,0,1);
    border-radius:8rpx;
    font-size:24rpx;
    font-weight:400;
    color:rgba(255,255,255,1);
    width: 32%;
    height: 48rpx;
    line-height: 48rpx;
  }
  .card_info_range ._left ._exchange_new img{
    padding-right: 5rpx;
    vertical-align:sub;
    width:28rpx;
    height:26rpx;
  }
  .card_info_range ._right{
    text-align: center;
    width: 41.2%;
    border-left: 2rpx solid #f4f4f4;
    border-bottom: 2rpx solid #f4f4f4;
    line-height: 88rpx;
    height: 88rpx;
    font-size:24rpx;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .caritory_list{
    padding: 34rpx 0 37rpx 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    border-bottom: 10rpx solid #f4f4f4;
  }
  .caritory_list .caritory_item{
    width: 25%;
  }
  .caritory_item_fixed {
    padding-bottom: 50rpx;
  }
  .caritory_list .caritory_item ._icon{
    display: flex;
    justify-content:center;
    padding-bottom: 30rpx;
  }
  .caritory_list .caritory_item ._icon img{
    width:38rpx;
    height:48rpx;
  }
  .caritory_list .caritory_item ._title{
    text-align: center;
    font-size:28rpx;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  ._label_tips_fixed{
    text-align: center;
    font-size:24rpx;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .caritory_list .caritory_item ._label_tips{
    text-align: center;
    font-size:24rpx;
    font-weight:400;
    color:rgba(231,46,45,1);
  }
.big_brand_box{
  height:300rpx;
  background:rgba(255,255,255,1);
}
.big_brand_box ._image{
  display: flex;
  justify-content: center;
  padding: 20rpx 0rpx;
  width: 100%;
  border-bottom: 10rpx solid #f4f4f4;
}
.big_brand_box ._image img{
  width: 90%;
  height:260rpx;
  background:rgba(9,15,27,1);
  border-radius:20rpx;
}
.weather_box{
    display: flex;
    align-items: center;
    height: 68rpx;
    border-bottom: 10rpx solid #f4f4f4;
  }
  .weather_box ._left{
    padding:0 33rpx 0 36rpx;
    line-height: 68rpx;
    display: flex;
    align-items: center;
  }
  .weather_box ._left ._wendu{
    padding-left: 10rpx;
    font-size:28rpx;
    font-weight:400;
    color:rgba(86,143,244,1);
  }
  .weather_box ._left ._icon img{
    width:36rpx;
    height:28rpx;
  }
  .weather_box ._right{
    line-height: 68rpx;
    display: flex;
    align-items: center;
  }
  .weather_box ._right ._oil_price{
    padding-left: 1rpx;
    font-size:28rpx;
    font-weight:400;
    color:rgba(86,143,244,1);
  }
  .weather_box ._right ._icon img{
    width:24rpx;
    height:25rpx;
  }
  .day_day_kill{
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
  }
  .day_day_kill ._head{
    height: 88rpx;
    padding: 0 38rpx;
    display: flex;
    justify-content:space-between;
    align-items: center;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .day_day_kill ._head ._left {
    font-size:32rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .day_day_kill ._head ._right {
    font-size:28rpx;
    font-weight:400;
    color:rgba(86,143,244,1);
  }
  .day_content_list{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    border-bottom: 10rpx solid #f4f4f4;
  }
  .day_content_list .list_item{
    padding: 10rpx 0 18rpx 0;
    width: 25%;
  }
  .day_content_list .list_item ._pic{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .day_content_list .list_item ._pic img{
    width:160rpx;
    height:110rpx;
  }
  .day_content_list .list_item ._title{
    text-align: center;
    font-size:28rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
   .day_content_list .list_item ._now_price{
      text-align: center;
      font-size:24rpx;
      font-weight:400;
      color:rgba(231,46,45,1);
   }
   .day_content_list .list_item ._ex_price{
      text-align: center;
      font-size:22rpx;
      font-weight:400;
      text-decoration:line-through;
      color:rgba(153,153,153,1);
   }
   .selected_goods{
    border-bottom: 100rpx solid #f4f4f4;
  }
  .selected_goods ._head{
    text-align: center;
    line-height: 88rpx;
    height: 88rpx;
    font-size:32rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
    border-bottom: 2rpx solid #f4f4f4;
  }
  .selected_goods ._head img{
    padding-right: 9rpx;
    width:31rpx;
    height:32rpx;
  }
  .selected_goods ._content_table img{
    width: 100%;
    height: 664rpx;
  }
</style>
