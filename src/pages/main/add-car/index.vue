<template>
  <div class="add_love_car_box">
    <div class="_table_list">
      <div class="list_item">
        <div class="item_left">请输入车架号（VIN码）</div>
        <input
          class="vin_input"
          :value="vinNumber"
          @change="vinNumberChange"
          type="text"
          maxlength="17"
          placeholder="请输入17位VIN码"
          placeholder-style="font-size:28rpx;color:rgba(207,207,207,1);"/>
      </div>
      <div class="list_item">
        <div class="item_left">请输入车牌号码</div>
        <div class="car_number">
          <div class="car_brand">湘</div>
          <div class="_san_jiao"></div>
          <input
            type="text"
            @click="fieldNumBlur"
            :value="plateNumber"
            readonly="readonly"
            disabled
            placeholder="输入车牌号码"
            placeholder-style="font-size:28rpx;color:rgba(207,207,207,1);"/>
        </div>
      </div>
      <div class="list_item">
        <div class="item_left">请输入里程数</div>
        <input
          class="vin_input"
          type="text"
          :value="mileage"
          @change="fieldMileAge"
          maxlength="7"
          placeholder="输入里程数km"
          placeholder-style="font-size:28rpx;color:rgba(207,207,207,1);"/>
      </div>
      <div class="list_item">
        <div class="item_left">购车时间</div>
        <div class="_item_right">
          <picker
            mode="date"
            :value="chooseDate"
            start="1970-01"
            end="2100-09"
            fields="month"
            @change="bindDateChange">
            <view class="picker">{{chooseDate}} </view>
          </picker>
        </div>
      </div>
      <div class="list_item">
        <div class="item_left">是否为新能源车</div>
        <div class="is_new_enconomy"><switch width="86" class="_switch" color="#568FF4" @change="switchChange"/></div>
      </div>
    </div>
    <div class="car_picture_box">
      <div class="_title">
        车辆照片
      </div>
      <div class="small_picture" v-if="!carImg">
        <img src="../../../../static/image/add-car.png" @click="UpLoadImg()" alt="">
      </div>
      <div class="small_picture" v-else>
        <div class="pic_mask" @click="UpLoadImg()">更换照片</div>
        <img :src="carImg" alt="">
      </div>
    </div>
    <div class="drive_demo">
      <img src="../../../../static/image/drive-test.png" alt="">
    </div>
    <div class="next_step_btn">
      <div class="_btn" @click="addCarNext()">下一步</div>
    </div>
    <keyboard
      v-if="showKb"
      :showKb="showKb"
      @keyboard="keyboardChange"
      @callBackData="callBackData"
      extraKey="完成"
      active-border="#6f85ff"
      base-border="#6f85ff">
    </keyboard>
  </div>
</template>

<script>
import Keyboard from '../../../components/keyboard/index'
import {formatMonth} from '../../../utils/index'
export default {
  components: {
    Keyboard
  },
  data () {
    return {
      plateNum: '',
      showKb: false,
      isNewEnergyCar: false,
      vinNumber: 'LSVFA49J232037048',
      chooseDate: '',
      plateNumber: '',
      mileage: '',
      carImg: ''
    }
  },
  methods: {
    vinNumberChange (e) {
      this.vinNumber = e.target.value
    },
    callBackData (data) {
      // console.log('date==>>', data)
      let filterNumber = data.join('')
      this.plateNumber = filterNumber
      // if (data.length === 6) {
      //   this.showKb = false
      // }
    },
    UpLoadImg () {
      let that = this
      wx.chooseImage({
        success (res) {
          const tempFilePaths = res.tempFilePaths
          console.log('res==>>', res)
          wx.uploadFile({
            url: 'http://192.168.1.137:8097/api/upload/imgUpLoad',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {},
            success (resp) {
              const data = JSON.parse(resp.data)
              that.carImg = data.data.url
            }
          })
        }
      })
    },
    fieldMileAge (e) {
      this.mileage = e.target.value
    },
    bindDateChange (e) {
      this.chooseDate = e.target.value
    },
    switchChange (e) {
      this.isNewEnergyCar = e.target.value ? 1 : 0
    },
    fieldBlur () {
      // this.showKb = true
    },
    fieldNumBlur (e) {
      // console.log('okay 我焦点了')
      // e.preventDefault()
      // wx.hideKeyboard()
      this.showKb = true
      // return false
    },
    loseBlur () {
      // console.log('okay 我失焦点了')
      // this.showKb = false
    },
    keyboardChange (plate) {
      this.showKb = false
      this.plateNum = plate
      // console.log('plate==>', plate)
    },
    async bandChange () {
      console.log(this.plateNum)
    },
    addCarNext () {
      // 下一步
      let {vinNumber, plateNumber, isNewEnergyCar, mileage, chooseDate, carImg} = this
      let params = {
        vinNumber,
        plateNumber: '湘' + plateNumber,
        isNewEnergyCar,
        mileage,
        signPlateDate: chooseDate,
        carImg
      }
      wx.navigateTo({
        url: '../review-info/main?params=' + JSON.stringify(params)
      })
    }
  },
  created () {
  },
  onShow () {
    this.chooseDate = formatMonth(new Date()).split(' ')[0]
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.next_step_btn{
  height: 182rpx;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.next_step_btn ._btn{
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

.add_love_car_box{

}
.add_love_car_box ._table_list{
  padding-top: 2rpx;

}
.add_love_car_box .list_item{
  height: 88rpx;
  line-height: 88rpx;
  display: flex;
  align-items: center;
  border-bottom: 2rpx solid #f4f4f4;
}
.add_love_car_box .list_item .item_left{
  /* 添加爱车左侧 */
    width: 40%;
    padding-left: 38rpx;
    font-size:28rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
}
._item_right{
  width: 50%;
  font-size:28rpx;
  color:#333;
}
.add_love_car_box .list_item .vin_input{
  width: 55%;
  font-size:28rpx;
  color:#333;
}
.list_item .car_number{
  width: 55%;
  display: flex;
  align-items: center;
}
.list_item .car_number .car_semi{
  padding-left: 19rpx;
  padding-right: 20rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.list_item .car_number .car_brand{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.list_item .car_number ._san_jiao{
  margin: 20rpx 9rpx 0 9rpx;
  width: 0;
  height: 0;
  border-width: 12rpx;
  border-style: solid;
  border-color: black transparent transparent transparent
}
.car_number input{
  font-size:28rpx;
  color:#333;
}
.is_new_enconomy .wx-switch-input{width:82rpx !important;height:42rpx !important;}
.is_new_enconomy .wx-switch-input::before{width:82rpx !important;height: 42rpx !important;}
.is_new_enconomy .wx-switch-input::after{width: 38rpx !important;height: 38rpx !important;}
.car_picture_box{
  height: 260rpx;
  padding: 30rpx 0 14rpx 38rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.car_picture_box ._title{
  margin-bottom: 40rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.car_picture_box .small_picture{
  position: relative;
  display: flex;
  justify-content: center;
}
.car_picture_box .small_picture img{
  width:210rpx;
  height:150rpx;
}
.car_picture_box .pic_mask{
  position: absolute;
  background:rgba(0,0,0,1);
  border:1rpx solid rgba(207,207,207,1);
  opacity:0.8;
  top: 0;
  left: 50% - 105rpx;
  width:210rpx;
  height:150rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height: 178rpx;
  text-align: center;
}
.drive_demo{
  padding-top: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.drive_demo img{
  width:578rpx;
  height:360rpx;
}
</style>
