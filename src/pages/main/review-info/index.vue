<template>
  <div class="submit_car_box">
    <div class="_table_list">
      <div class="list_item">
        <div class="item_left">车架号（VIN码）</div>
        <div class="item_right">18889km</div>
      </div>
      <div class="list_item">
        <div class="item_left">车牌号码</div>
        <div class="item_right">18889km</div>
      </div>
      <div class="list_item">
        <div class="item_left">里程数</div>
        <div class="item_right">18889km</div>
      </div>
      <div class="list_item">
        <div class="item_left">车辆信息</div>
        <div class="item_right">东风日产 阳光1.5 2012款  舒适型</div>
      </div>
      <div class="list_item">
        <div class="item_left">是否为新能源车</div>
        <div class="item_right">否</div>
      </div>
    </div>
    <div class="car_picture_box">
      <div class="_title">
        车辆照片
      </div>
      <div class="small_picture">
        <img src="../../../../static/image/cartest.jpg" alt="">
      </div>
    </div>
    <div class="next_step_btn">
      <div class="_btn" @click="submitAdd()">确认添加</div>
    </div>
    <keyboard @keyboard="keyboardChange" :showKb="showKb" @callBackData="callBackData" extraKey="完成" active-border="#6f85ff" base-border="#6f85ff"></keyboard>
  </div>
</template>

<script>
import Keyboard from '../../../components/keyboard/index'
export default {
  components: {
    Keyboard
  },
  data () {
    return {
      plateNum: '',
      showKb: false,
      vinNumber: '',
      carNum: ''
    }
  },
  methods: {
    callBackData (data) {
      let filterNumber = data.join('')
      this.carNum = filterNumber
      // if (data.length === 6) {
      //   this.showKb = false
      // }
    },
    fieldBlur () {
      // this.showKb = true
    },
    fieldNumBlur () {
      this.showKb = true
    },
    // loseBlur () {
    //   this.showKb = false
    // },
    keyboardChange (plate) {
      this.showKb = false
      this.plateNum = plate
      // console.log('plate==>', plate)
    },
    async bandChange () {
      console.log(this.plateNum)
    },
    submitAdd () {
      // 下一步
      wx.switchTab({
        url: '../../index/main'
      })
    }
  },

  created () {
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.submit_car_box .next_step_btn{
  height: 454rpx;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit_car_box .next_step_btn ._btn{
  text-align: center;
  line-height: 88rpx;
  width: 80%;
  margin-top: 28rpx;
  height:88rpx;
  background:rgba(86,143,244,1);
  border-radius:4rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}

.submit_car_box{

}
.submit_car_box ._table_list{
  padding-top: 2rpx;

}
.submit_car_box .list_item{
  height: 88rpx;
  line-height: 88rpx;
  margin: 0 38rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2rpx solid #f4f4f4;
}
.submit_car_box .list_item .item_left{
  /* 添加爱车左侧 */
    font-size:28rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
}
.submit_car_box .list_item .item_right{
  /* 添加爱车右侧 */
    font-size:28rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
}
.submit_car_box .list_item .car_number .car_semi{
  padding-left: 19rpx;
  padding-right: 20rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.submit_car_box .list_item .car_number .car_brand{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.submit_car_box .car_picture_box{
  height: 260rpx;
  padding: 30rpx 0 14rpx 38rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.submit_car_box .car_picture_box ._title{
  margin-bottom: 40rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.submit_car_box .car_picture_box .small_picture{
  position: relative;
  display: flex;
  justify-content: center;
}
.submit_car_box .car_picture_box .small_picture img{
  width:210rpx;
  height:150rpx;
}
.submit_car_box .drive_demo{
  padding-top: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit_car_box .drive_demo img{
  width:578rpx;
  height:360rpx;
}
</style>
