<template>
  <div class="car_reports_page">
    <div class="title">{{reportItemList[hasClick].name}}</div>
    <div class="car_full_pic"><img src="../../../../static/image/car-full.jpg" alt=""></div>
      <div class="order_by_item">
        <div class="_outer">
          <div :class="item !== 5 ? '_number_by_step' : '_number_by_step _number_by_step_fixed'" v-for="item in [0,1,2,3,4,5]" :key="item">
            <!-- <div class="_inner"> -->
              <div :class="item === hasClick ? 'nomal_number _active' : 'nomal_number'" @click="chooseStep(item)">{{item + 1}}</div>
              <div v-if="item !== 5" class="horizontal_line"></div>
            <!-- </div> -->
          </div>
        </div>
    </div>
    <div class="car_reports_item_list" v-for="(info, index) in errorDataList" :key="index">
      <div class="error_title" @click="showAllToggle(info)">
        <div class="_left">
          {{info.title}}
        </div>
        <div class="_right">
          <div class="error_info"><img :src="info.isError ? '../../../../static/image/nomal.png' : '../../../../static/image/error.png'" alt=""></div>
          <div v-if="info.isShow" class="error_icon"><img src="../../../../static/image/up-icon.png" alt=""></div>
          <div v-else class="error_icon"><img src="../../../../static/image/down-icon.png" alt=""></div>
        </div>
      </div>
      <div v-if="info.isShow" class="error_content">
        <div class="_left">
          <img :src="info.errPic" alt="">
        </div>
        <div class="_before_error">
          {{info.correctTitile}}
        </div>
        <div class="_fixed_error">
          {{info.fixedTitle}}
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
      reportItemList: [
        {
          name: '电器设备',
          error: '2',
          nomal: '40'
        },
        {
          name: '汽车外部',
          error: '2',
          nomal: '37'
        },
        {
          name: '轮胎检测',
          error: '2',
          nomal: '44'
        },
        {
          name: '汽车底部',
          error: '2',
          nomal: '50'
        },
        {
          name: '发动机舱',
          error: '2',
          nomal: '55'
        },
        {
          name: '最后验车',
          error: '2',
          nomal: '64'
        }
      ],
      hasClick: '',
      isShow: false,
      errorDataList: [
        {
          title: '粉尘过滤器',
          isError: false,
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        },
        {
          title: '粉尘过滤器',
          isError: false,
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        },
        {
          title: '粉尘过滤器',
          isError: true,
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        },
        {
          title: '粉尘过滤器',
          isError: true,
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        }
      ]
    }
  },
  methods: {
    chooseStep (item) {
      this.hasClick = item
    },
    showAllToggle (info) {
      info.isShow = !info.isShow
    }
  },
  created () {
  },
  onShow () {
    this.hasClick = Number(this.$root.$mp.query.id)
    console.log('====>>', this.$root.$mp.query, this.hasClick)
  }
}
</script>

<style>
  .car_reports_page{
    
  }
  .car_reports_page ._active{
    background: #568FF4 !important;
    color:rgba(255,255,255,1)!important;
  }
  .car_reports_page .title{
    font-size:32rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .car_reports_page .car_full_pic img{
    width: 100%;
    height: 300rpx;
  }
  .car_reports_page .order_by_item{
    /* position: relative; */
    padding-bottom:100rpx;
    border-bottom:2rpx solid #f4f4f4;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .car_reports_page .order_by_item ._outer{
    display: flex;
    justify-content: center;
    margin: 0 40rpx;
    align-items: center;
    width: 100%;
  }
  .car_reports_page .order_by_item ._number_by_step{
    display: flex; 
    align-items: center;
    width: 16.7%;
  }
  ._number_by_step_fixed{
    width: 54rpx !important;
  }
  /* ._number_by_step ._inner{
    display: flex; 
    align-items: center;
    flex: 1;
  } */
  .car_reports_page .order_by_item ._number_by_step .horizontal_line{
    width: 46%;
    height: 2rpx;
    background: rgba(86,143,244,1);
    /* line-height: 48rpx; */
    padding-left: 10rpx;
  }
  .car_reports_page .order_by_item ._number_by_step .nomal_number {
    width:48rpx;
    height:48rpx;
    line-height: 48rpx;
    text-align: center;
    background:rgba(255,255,255,1);
    border:2rpx solid rgba(86,143,244,1);
    border-radius:50%;
    font-size:32rpx;
    font-weight:400;
    color:rgba(86,143,244,1);
  }
  .car_reports_item_list{
  border-bottom: 1rpx solid #f4f4f4;
}
.car_reports_item_list .error_title{
  padding: 0 22rpx 0 36rpx;
  border-bottom: 1rpx solid #f4f4f4;
  height: 88rpx;
  line-height: 88rpx;
  display: flex;
  justify-content: space-between;
}
.car_reports_item_list .error_title ._left{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.car_reports_item_list .error_title ._right{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.car_reports_item_list .error_title ._right .error_info img{
  padding-right: 15rpx;
  width:16rpx;
  height:17rpx;
  vertical-align:middle;
}
.car_reports_item_list .error_title ._right .error_icon img{
  width:21rpx;
  height:12rpx;
  vertical-align:middle;
}
.car_reports_item_list .error_content{
  display: flex;
  align-items: center;
}
.car_reports_item_list .error_content ._left{
  padding:20rpx 36rpx 10rpx 36rpx;
}
.car_reports_item_list .error_content ._left img{
  width:210rpx;
  height:150rpx;
}
.car_reports_item_list .error_content ._before_error{
  width: 30%;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  margin-right: 20rpx;
  border-right: 2rpx solid #f4f4f4;
}
.car_reports_item_list .error_content ._fixed_error{
  width: 30%;
  font-size:28rpx;
  font-weight:400;
  color:rgba(86,143,244,1);
}
</style>
