<template>
  <div class="shop_servers_pages">
    <div class="servers_map_box">
      <div class="head_position">
        <img src="../../../static/image/position-icon.png" alt="">
        <div>
          您当前位置：{{address}}
        </div>
      </div>
      <div class="map_container">
        <map
          class="map"
          id="map"
          :longitude="longitude"
          :latitude="latitude"
          scale="16"
          show-location="true"
          :markers="markers"
          @markertap="makertap">
        </map>
      </div>
    </div>
    <div class="shop_info_container">
      <div class="_shop_info_">
        <!-- 店铺信息 距离 电话 -->
        <div class="top_shop_info">
          <div class="shop_pic">
            <img src="../../../static/image/cartest.jpg" alt="">
          </div>
          <div class="shop_name_position">
            <div class="_name">
              长沙大汉一汽4S店中南汽车城店
            </div>
            <div class="_position">
              湖南省长沙市星沙中南汽车城188号
            </div>
          </div>
          <div class="shop_phone">
            <div>
              <img src="../../../static/image/iphone-icon.png" alt="">
            </div>
            <div class="contact_me">
              联系Ta
            </div>
          </div>
        </div>
        <div class="shop_distance">
          距离：{{distanceShop}} KM
        </div>
      </div>
      <div class="shop_level">
        <!-- 店铺评级 -->
        <div class="_level">店铺评级</div>
        <div class="star_list">
          <img class="active_star common_class" src="../../../static/image/start-active.png" alt="">
          <img class="active_star common_class" src="../../../static/image/start-active.png" alt="">
          <img class="active_star common_class" src="../../../static/image/start-active.png" alt="">
          <img class="active_star common_class" src="../../../static/image/start-active.png" alt="">
          <img class="noactive_star common_class" src="../../../static/image/star-icon.png" alt="">
        </div>
      </div>
      <div class="servers_level">
        <!-- 保养 维修 钣金 是否忙碌 -->
        <div class="servers_list_icon">
          <div class="_item_name">
            保养
          </div>
          <div class="_item_status deepRed_status">
            爆满
          </div>
        </div>
        <div class="servers_list_icon">
          <div class="_item_name">
            维修
          </div>
          <div class="_item_status red_status">
            忙碌
          </div>
        </div>
        <div class="servers_list_icon">
          <div class="_item_name">
            钣金
          </div>
          <div class="_item_status green_status">
            空闲
          </div>
        </div>
      </div>
      <div class="can_offer_severs">
        <!-- 可提供的服务 -->
        <div class="_title_head">
          可提供服务
        </div>
        <div class="_server_project">
          <div class="_item_list">
            <div class="_icon">
              <img src="../../../static/image/jiuyuan-icon.png" alt="">
            </div>
            <div class="_title_item">
              紧急救援
            </div>
          </div>
          <div class="_item_list">
            <div class="_icon">
              <img src="../../../static/image/jiuyuan-icon.png" alt="">
            </div>
            <div class="_title_item">
              上门取车
            </div>
          </div>
        </div>
      </div>
      <div class="shop_team_center" @click="lookTeam()">
        <!-- 精英服务团队 -->
        <div class="_left_title">
          精英服务团队
        </div>
        <div class="_right_icon">
          <img src="../../../static/image/right-icon.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {BMapWX} from '../../libs/bmap-wx.min'
import { getDistance } from '../../utils/index'
export default {
  components: {
  },

  data () {
    return {
      // Bmap: bmap,
      id: '15217513',
      apiKey: 'dCyusmDTHj9cGWqCpsVGe9HA4vIjkwCV',
      secretKey: '5XPaGmzms1igryZ0g0UcWHxYw6mwpimR',
      markers: [],
      address: '',
      wxMarkerData: [],
      latitude: '',
      longitude: '',
      rgcData: {},
      distanceShop: 0,
      shopLati: 28.2386415333,
      shopLongi: 113.0677455134
    }
  },
  methods: {
    makertap (e) {
      console.log('eee++>', e)
      let id = e.markerId
      this.showSearchInfo(this.wxMarkerData, id)
    },
    showSearchInfo (data, i) {
      this.rgcData = {
        address: '地址：' + data[i].address + '\n',
        desc: '描述：' + data[i].desc + '\n',
        business: '商圈：' + data[i].business
      }
      console.log('===>>>', this.rgcData)
    },
    getDistanceShop () {
      this.distanceShop = (getDistance(this.latitude, this.longitude, this.shopLati, this.shopLongi) * 0.001).toFixed(1)
      console.log('distanceShop', this.distanceShop)
    },
    lookTeam () {
      wx.navigateTo({
        url: '../main/look-team/main'
      })
    }
  },
  created () {
  },
  onLoad () {
    this.wxMarkerData = []
    this.address = ''
    // this.distanceShop = 0
    // this.shopLati = 26.7329039313
    // this.shopLongi = 110.6377793532
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
    let that = this
    let BMap = new BMapWX({
      ak: 'dCyusmDTHj9cGWqCpsVGe9HA4vIjkwCV'
    })
    let fail = function (data) {
      console.log(data)
    }
    let success = function (data) {
      that.wxMarkerData = data.wxMarkerData
      that.markers = that.wxMarkerData
      that.latitude = that.wxMarkerData[0].latitude
      that.longitude = that.wxMarkerData[0].longitude
      that.address = data.wxMarkerData[0].address + data.wxMarkerData[0].desc
      that.getDistanceShop()
      // that.distanceShop = (getDistance(that.latitude, that.longitude, that.shopLati, that.shopLongi) * 0.001).toFixed(2)
      // console.log('distanceShop', that.distanceShop)
      // console.log('success=>>', getDistance(that.latitude, that.longitude, that.shopLati, that.shopLongi) * 0.001)
    }
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: '../../../static/image/marker_red.png',
      iconTapPath: '../../../static/image/marker_red.png'
    })
  }
}
</script>

<style>
.shop_team_center{
  border-bottom: 2rpx solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 22rpx 0 36rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  height: 88rpx;
  line-height: 88rpx;
}
.shop_team_center ._right_icon img{
  width:15rpx;
  height:27rpx;
}



.can_offer_severs{
  border-bottom: 2rpx solid #f4f4f4;
}
.can_offer_severs ._title_head{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height: 88rpx;
  height: 88rpx;
  margin: 0 22rpx 0 36rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.can_offer_severs ._server_project{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 130rpx;
  font-size:28rpx;
  font-weight:400;
  text-align: center;
  color:rgba(0,0,0,1);
  padding: 23rpx 0;
}
._server_project ._icon{
  padding-bottom: 15rpx;
}

._server_project ._icon img{
  width:62rpx;
  height:42rpx;
}



.servers_level{
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 6rpx solid #f4f4f4;
  height: 88rpx;
  line-height: 88rpx;
}
.servers_level .servers_list_icon{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.servers_list_icon ._item_name{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  margin-right: 20rpx;
}
.green_status{
  background:rgba(2,149,2,1);
}
.red_status{
  background:#CC3F07;
}
.deepRed_status{
  background:#BA0E06;
}
.servers_list_icon ._item_status{
  width:100rpx;
  height:28rpx;
  text-align: center;
  line-height: 28rpx;
  border-radius:14rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}



.shop_level{
  height: 88rpx;
  line-height: 88rpx;
  display: flex;
  align-items: center;
  padding: 0 22rpx 0 36rpx;
  border-bottom: 2rpx solid #f4f4f4;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.shop_level ._level{
  padding-right: 22rpx;
  line-height: 88rpx;
}
.shop_level .star_list .noactive_star{
  width:28rpx;
  height:28rpx;
}
.shop_level .star_list .active_star{
  width:28rpx;
  height:26rpx;
}
.shop_level .star_list .common_class{
  margin-right: 6rpx;
  vertical-align: middle;
}





.shop_info_container ._shop_info_ .top_shop_info .shop_pic img{
  width:88rpx;
  height:88rpx;
  border-radius:50%;
  vertical-align: middle
}
.shop_info_container ._shop_info_{
  padding: 34rpx 22rpx 12rpx 36rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.top_shop_info{
  display: flex;
  align-items: center;
}
.shop_name_position{
  padding: 0 13rpx;
  width: 65%;
  border-right: 2rpx solid #f4f4f4;
}
.shop_name_position ._name{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.shop_name_position ._position{
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.top_shop_info .shop_phone{
  width: 20%;
  text-align: center;
}
.top_shop_info .shop_phone img{
  width:32rpx;
  height:32rpx;
  vertical-align: middle
}
.top_shop_info .shop_phone .contact_me{
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.shop_distance{
  margin-top: 23rpx; 
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}



.map_container .map{
  width: 100%;
  height: 448rpx;
}
.shop_servers_pages{

}
.servers_map_box{
  height: 496rpx;
}
.servers_map_box .head_position{
  height: 48rpx;
  padding-left: 36rpx;
  padding-right: 22rpx;
  display: flex;
  align-items: center;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.servers_map_box .head_position div{
  width: 95%;
  overflow: scroll;
  margin-left: 10rpx;
  line-height: 48rpx;
  white-space: nowrap;
}
.servers_map_box .head_position img{
  width:22rpx;
  height:28rpx;
  vertical-align: middle;
}
</style>
