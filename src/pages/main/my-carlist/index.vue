<template>
  <div class="change_car_box">
    <div class="car_info_list" v-for="(item, index) in carList" :key="index">
      <div class="car_brand_num">
        {{item.plateNumber}}
      </div>
      <div class="car_info_box" @click="changeMyCar()">
        <div class="car_info_left">
          <div>{{item.brandName + item.setName + item.modelName}}</div>
          <div class="info_center">上次保养里程：{{item.mileage}}</div>
          <div>上次保养时间：{{item.carTime}}</div>
        </div>
        <div class="car_info_right">
          <img src="../../../../static/image/cartest.jpg" alt="">
        </div>
      </div>
      <div class="car_info_record" @click="checkRecord()">
        保养记录
      </div>
    </div>
    <div class="car_info_bottom">
      <div class="car_add_btn" @click="addMyCar()">
        添加车辆
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
      carList: [
        {
          carNum: '湘A·5XM05',
          carName: '东风日产 阳光1.5 2012款  舒适型',
          carRange: '80000KM',
          carTime: '2018-11-24',
          picCar: '../../../../static/image/cartest.jpg'
        },
        {
          carNum: '湘A·5XM05',
          carName: '东风日产 阳光1.5 2012款  舒适型',
          carRange: '80000KM',
          carTime: '2018-11-24',
          picCar: '../../../../static/image/cartest.jpg'
        },
        {
          carNum: '湘A·5XM05',
          carName: '东风日产 阳光1.5 2012款  舒适型',
          carRange: '80000KM',
          carTime: '2018-11-24',
          picCar: '../../../../static/image/cartest.jpg'
        }
      ]
    }
  },
  methods: {
    addMyCar () {
      wx.navigateTo({
        url: '../add-car/main'
      })
    },
    changeMyCar () {
      wx.switchTab({
        url: '../../index/main'
      })
    },
    checkRecord () {
      wx.navigateTo({
        url: '../my-record/main'
      })
    }
  },
  created () {
  },
  onShow () {
    this.request.get('/api/car/usercCar/queryList').then(res => {
      this.carList = res.data
      // this.isShowEmptyCar = carList && carList.length > 0
      // console.log('isShowEmptyCar=>', this.isShowEmptyCar)
      // this.curCarInfo = carList.filter(item => item.isDefaulft === 1)[0]
    }).catch(err => {
      console.log(err)
    })
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.change_car_box{
}
.car_info_list{
  border-bottom: 10rpx solid #f4f4f4;
}
.car_brand_num{
  padding: 30rpx 22rpx 0rpx 37rpx;
  font-size:32rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  padding-bottom: 30rpx;
}
.car_info_box{
  padding: 30rpx 22rpx 0rpx 37rpx;
  padding-bottom: 44rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2rpx solid #f4f4f4;
}
.car_info_box .car_info_left div{
  font-size:28rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.car_info_box .car_info_right img{
  width:210rpx;
  height:145rpx;
  vertical-align: middle;
}
.car_info_box .info_center{
  padding: 33rpx 0;
}
.car_info_record{
text-align: center;
height: 88rpx;
line-height: 88rpx;
font-size:28rpx;
color:rgba(86,143,244,1);
}
.car_add_btn{
  text-align: center;
  line-height: 88rpx;
  width: 80%;
  margin: 0 auto;
  height:88rpx;
  background:rgba(86,143,244,1);
  border-radius:4rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.car_info_bottom{
  display: flex;
  align-items: center;
  height: 218rpx;
  background: #f4f4f4;
}
</style>
