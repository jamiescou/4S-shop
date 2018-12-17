<template>
  <div class="date_appointment_pages">
    <div class="list_item_box box_common">
      <div class="_left_title">
        预约选择
      </div>
      <div class="_right_title">
      </div>
    </div>
    <div class="box_common list_item_child">
      <div class="_left_title">
        预约日期
      </div>
      <div class="_right_title">
        <div class="section_title">
          <picker
            mode="date"
            :value="chooseDate"
            :start="chooseDate"
            end="2100-09-01"
            @change="bindDateChange">
            <view class="picker">{{chooseDate}} </view>
          </picker>
          <div class="_next_step"><img src="../../../../../static/image/right-icon.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="box_common list_item_child">
      <div class="_left_title">
        预约时间
      </div>
      <div class="_right_title">
        <div class="_right_content" @click="chooseTime()">
          <div>{{curTimeObj.hour}}时{{curTimeObj.mimute}}分 剩余工位{{curTimeObj.workPlace}}</div>
          <div class="_next_step"><img src="../../../../../static/image/right-icon.png" alt=""></div>
        </div>
        <view v-if="isShowTimePicker">
          <!-- <div @click="chooseTime()">{{timeValue[0]}}时{{timeValue[1]}}分 剩余工位{{timeValue[2]}}</div> -->
          <div class="_mask_modal_full"></div>
          <picker-view
            indicator-style="height: 50px; font-size: 36rpx;"
            style="background:#fff;position: fixed; z-index: 11; bottom: 0; left: 0; width: 100%; height: 300px;text-align:center;"
            :value="timeValue"
            @change="bindTimeChange">
            <div class="_head_menu_picker_time">
              <div class="_cancel_left" @click="cancelPickerTime()">取消</div>
              <div class="_confirm_right" @click="confirmPickerTime()">确定</div>
            </div>
            <picker-view-column>
              <view v-for="hour in hours" :key="hour + Math.random() * 10" style="line-height: 50px;font-size: 36rpx;">{{hour}}时</view>
            </picker-view-column>
            <picker-view-column>
              <view v-for="mimute in mimutes" :key="mimute +  Math.random() * 100" style="line-height: 50px;font-size: 36rpx;">{{mimute}}分</view>
            </picker-view-column>
            <picker-view-column>
              <view style="line-height: 50px;font-size: 36rpx;">剩余工位:{{workPlace}}</view>
            </picker-view-column>
          </picker-view>
          </view>
        </div>
      </div>
    <div class="box_common list_item_child">
      <div class="_left_title">
        预约SA
      </div>
      <div class="_right_title" @click="chooseSA()">
        <div class="list_icon_data">
          <div class="_once_time_data" v-if="saData.isOnce">
            您上次的SA
          </div>
          <div class="_choose_name">
            {{saData.saName}}
          </div>
          <div class="_right_icon">
            <img src="../../../../../static/image/right-icon.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="goods_info_box">
      <!-- 用户选择的商品列表 -->
      <div class="_header_title">
        <div class="_left_title">
          3个商品1项服务
        </div>
        <div class="_right_price">
          ￥ 1999.00
        </div>
      </div>
      <div class="goods_list_display">
        <div class="_list_item" v-for="(item, index) in shopGoodsList" :key="index">
          <img :src="item.imgSrc" alt="">
        </div>
      </div>
    </div>
    <div class="list_item_box box_common">
      <div class="_left_title">
        支付方式
      </div>
      <div class="_right_title">
        到店支付
      </div>
    </div>
    <div class="list_item_box box_common">
      <div class="_left_title">
        优惠券
      </div>
      <div class="_right_title">
        暂无优惠
      </div>
    </div>
    <div class="date_appointment_fixed">
      <div class="left_count_title">
        {{chooseAllSelect}}项合计：¥ {{priceCount}}（含工时费）
      </div>
      <div class="set_data_btn" @click="makeAnAppointment()">
        预约时间
      </div>
    </div>
    <saListTemplate v-if="isShowSaModal" @callbackSaDataFunc="callbackSaDataFunc"></saListTemplate>
  </div>
</template>

<script>
import saListTemplate from '../sa-list/index'
import {formatTime} from '../../../../utils/index'
import { setTimeout } from 'timers'
export default {
  components: {
    saListTemplate
  },
  data () {
    return {
      value: '',
      chooseDate: '',
      isShowTimePicker: false,
      isShowSaModal: false,
      timeValue: [],
      hours: [],
      mimutes: [],
      shopGoodsList: [
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        },
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        },
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        },
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        },
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        },
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        },
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        },
        {
          imgSrc: '../../../.././../static/image/cartest.jpg',
          title: '好基友，好机油哦'
        }
      ],
      curTimeObj: {
        hour: '9',
        mimute: '30',
        workPlace: '10'
      },
      workPlace: '10',
      saData: {
        saName: '老张傻屌',
        isOnce: true
      }
    }
  },
  methods: {
    chooseTime () {
      this.isShowTimePicker = true
    },
    chooseSA () {
      this.isShowSaModal = true
    },
    callbackSaDataFunc (data) {
      this.saData.saName = data.saName
      this.saData.isOnce = false
      this.isShowSaModal = false
    },
    cancelPickerTime () {
      // 取消预约时间
      this.isShowTimePicker = false
    },
    confirmPickerTime () {
      // 确认预约时间
      this.curTimeObj = {
        hour: this.timeValue[0] < 10 ? '0' + this.timeValue[0] : this.timeValue[0],
        mimute: this.timeValue[1] === 1 ? '30' : '00',
        workPlace: this.workPlace + ''
      }
      this.isShowTimePicker = false
    },
    bindDateChange (e) {
      this.chooseDate = e.target.value
    },
    bindTimeChange (e) {
      console.log('eee==>>', e.target.value)
      this.getPlacesNum() // 获取工位数
      this.timeValue = [
        e.target.value[0],
        e.target.value[1],
        this.workPlace
      ]
    },
    getPlacesNum () {
      let that = this
      setTimeout(() => {
        that.workPlace = Math.round(Math.random() * 10)
      }, 1000)
      console.log('==>>', this.workPlace)
    },
    initDateTime () {
      this.hours = [] // 时
      this.mimutes = ['00', 30] // 分
      this.workPlace = 10 // 工位
      for (var i = 0; i < 24; i++) {
        this.hours.push(i)
      }
      this.curTimeObj = {
        hour: 9,
        mimute: 30,
        workPlace: 10
      }
      this.timeValue = [
        formatTime(new Date()).split(' ')[1].split(':')[0],
        this.mimutes[0],
        this.workPlace
      ]
    }
  },
  onShow () {
    this.initDateTime()
    this.chooseDate = formatTime(new Date()).split(' ')[0]
    console.log('date==>', this.chooseDate)
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.date_appointment_pages .goods_info_box{
  border-top: 6rpx solid #f4f4f4;
  border-bottom: 6rpx solid #f4f4f4;
}
.date_appointment_pages ._header_title{
  display: flex;
  align-items: center;
  padding: 0 22rpx 0 36rpx;
  height: 88rpx;
  line-height: 88rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.date_appointment_pages .goods_list_display{
  padding: 20rpx 22rpx 0rpx 36rpx;
  display: flex;
  width:95%;
  display:flex;
  flex-flow:row wrap;
  align-content:center;
}
.date_appointment_pages .goods_list_display ._list_item{
  width: 25%;
  padding-bottom: 20rpx
}
.date_appointment_pages .goods_list_display ._list_item img {
  width:154rpx;
  height:197rpx;
  vertical-align: middle;
}
.date_appointment_pages ._left_title{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.date_appointment_pages ._right_price{
  font-size:28rpx;
  font-weight:400;
  color:rgba(231,46,45,1);
}
.date_appointment_pages .goods_info_box ._header_title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.date_appointment_pages{

}
.list_item_child .list_icon_data {
  display: flex;
  align-items: center;
}
.list_item_child .list_icon_data ._once_time_data{
  font-size:22rpx;
  font-weight:400;
  color:rgba(153,153,153,1);
  margin-right: 13rpx;
}
.list_item_child .list_icon_data ._choose_name{
  font-size:28rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.list_item_child .list_icon_data ._right_icon img{
  margin-left: 10rpx;
  width:16rpx;
  height:28rpx;
  vertical-align:middle;
}
.date_appointment_pages .box_common{
  padding: 0 22rpx 0 36rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88rpx;
  line-height: 88rpx;
  font-size:28rpx;
  font-weight:400;
  border-bottom: 2rpx solid #f4f4f4;
}
.date_appointment_pages .list_item_box{
  color:rgba(0,0,0,1);
}
.date_appointment_pages .list_item_child{
  color:rgba(51,51,51,1);
}
.list_item_child ._next_step img{
  margin-left: 10rpx;
  width:16rpx;
  height:28rpx;
  vertical-align:middle;
}
.list_item_child ._right_title ._right_content{
  display: flex;
  align-items: center;
}
.list_item_child ._right_title .section_title{
  display: flex;
}
.date_appointment_pages ._mask_modal_full{
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  opacity: 0.5;
  left:0;
  bottom:0;
  z-index: 10;
}
.date_appointment_pages .picker_time_mask{
  position: fixed;
  width: 100%;
  left:0;
  bottom:0;
  z-index: 11;
}
.date_appointment_pages ._head_menu_picker_time{
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:fixed;
  bottom:500rpx;
  left:0;
  height: 100rpx;
  line-height: 100rpx;
  width:100%;
  z-index:12;
  font-size:32rpx;
  background: #fff;
  border-bottom: 2rpx solid #f4f4f4;
}
.date_appointment_pages ._head_menu_picker_time ._cancel_left{
  width: 50%;
  text-align: left;
  padding-left: 36rpx;
  color:rgba(0,0,0,1);
}
.date_appointment_pages ._head_menu_picker_time ._confirm_right{
  width: 50%;
  text-align: right;
  padding-right: 36rpx;
  color:rgba(55,148,228,1);
}
.date_appointment_fixed{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 98rpx;
  line-height: 98rpx;
  background:rgba(255,255,255,1);
  position:fixed;
  width:100%;
  bottom:0;
}
.date_appointment_fixed .left_count_title{
  padding-left: 36rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.date_appointment_fixed .set_data_btn{
  text-align: center;
  line-height: 98rpx;
  width:280rpx;
  font-size:36rpx;
  font-weight:400;
  color:rgba(254,254,254,1);
  background:rgba(86,143,244,1);
}
</style>
