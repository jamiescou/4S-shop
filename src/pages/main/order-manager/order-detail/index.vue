<template>
  <div class="order_detail_box_pages">
    <div class="list_item_box box_common">
      <div class="_left_title">
        预约选择
      </div>
      <div class="_right_title">
      </div>
    </div>
    <div class="box_common list_item_child">
      <div class="_left_title">
        门店
      </div>
      <div class="_right_title">
        长沙一汽大众4S店销售服务有限公司
      </div>
    </div>
    <div class="box_common list_item_child">
      <div class="_left_title">
        时间
      </div>
      <div class="_right_title">
        2018-11-28 09:30
      </div>
    </div>
    <div class="box_common list_item_child">
      <div class="_left_title">
        服务顾问
      </div>
      <div class="_right_title">
        Mrs 高
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
    <!-- <div class="order_status_btn">
      <div
        class="new_creat_btn btn_common"
        v-if="info.status === 1 || info.status === 2 || info.status === 3 || info.status === 4">
        取消订单
      </div>
      <div
        v-if="info.status === 1"
        class="cancle_btn btn_common canClick">
        更改时间
      </div>
      <div
        v-if="info.status === 4"
        class="cancle_btn btn_common canClick">
        确认作业
      </div>
      <div
        v-if="info.status === 3 || info.status === 4 || info.status === 5 || info.status === 6 || info.status === 7 || info.status === 11 || info.status === 12 || info.status === 13"
        class="change_date_btn btn_common canClick" @click="checkCarOrder()">
        车检报告
      </div>
      <div
        v-if="info.status === 1 || info.status === 2"
        class="navigetor_go btn_common canClick">
        导航前往
      </div>
      <div
        v-if="info.status === 5 || info.status === 6 || info.status === 11 || info.status === 12 || info.status === 13"
        class="navigetor_go btn_common canClick">
        作业进度
      </div>
      <div
        v-if="info.status === 7 || info.status === 8 || info.status === 9"
        class="navigetor_go btn_common canClick">
        保养报告
      </div>
      <div
        v-if="info.status === 8"
        class="navigetor_go btn_common canClick">
        待评价
      </div>
      <div
        v-if="info.status === 7"
        class="navigetor_go btn_common canClick">
        确认结算
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  components: {
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
  },
  onShow () {
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.order_detail_box_pages .order_status_btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 98rpx;
    line-height: 98rpx;
    padding: 0 36rpx 0 36rpx;
  }
  .order_detail_box_pages .order_status_btn .canClick{
    background: #568FF4 !important
  }
  .order_detail_box_pages .order_status_btn .btn_common{
    line-height: 54rpx;
    text-align: center;
    font-size:28rpx;
    font-weight:400;
    color:rgba(255,255,255,1);
    width:140rpx;
    height:54rpx;
    background:rgba(207,207,207,1);
    border:1rpx solid rgba(207,207,207,1);
    border-radius:4rpx;
  }
  .order_detail_box_pages .order_status_btn .fixed_btn{
    width: 140rpx;
  }
  .order_detail_box_pages .order_status_btn .change_date_btn{
    
  }
  .order_detail_box_pages .order_status_btn .navigetor_go{
    
  }
.order_detail_box_pages .goods_info_box{
  border-top: 6rpx solid #f4f4f4;
  border-bottom: 6rpx solid #f4f4f4;
}
.order_detail_box_pages ._header_title{
  display: flex;
  align-items: center;
  padding: 0 22rpx 0 36rpx;
  height: 88rpx;
  line-height: 88rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.order_detail_box_pages .goods_list_display{
  padding: 20rpx 22rpx 0rpx 36rpx;
  display: flex;
  width:95%;
  display:flex;
  flex-flow:row wrap;
  align-content:center;
}
.order_detail_box_pages .goods_list_display ._list_item{
  width: 25%;
  padding-bottom: 20rpx
}
.order_detail_box_pages .goods_list_display ._list_item img {
  width:154rpx;
  height:197rpx;
  vertical-align: middle;
}
.order_detail_box_pages ._left_title{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.order_detail_box_pages ._right_price{
  font-size:28rpx;
  font-weight:400;
  color:rgba(231,46,45,1);
}
.order_detail_box_pages .goods_info_box ._header_title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order_detail_box_pages{

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
.order_detail_box_pages .box_common{
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
.order_detail_box_pages .list_item_box{
  color:rgba(0,0,0,1);
}
.order_detail_box_pages .list_item_child{
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
.order_detail_box_pages ._mask_modal_full{
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  opacity: 0.5;
  left:0;
  bottom:0;
  z-index: 10;
}
.order_detail_box_pages .picker_time_mask{
  position: fixed;
  width: 100%;
  left:0;
  bottom:0;
  z-index: 11;
}
.order_detail_box_pages ._head_menu_picker_time{
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
.order_detail_box_pages ._head_menu_picker_time ._cancel_left{
  width: 50%;
  text-align: left;
  padding-left: 36rpx;
  color:rgba(0,0,0,1);
}
.order_detail_box_pages ._head_menu_picker_time ._confirm_right{
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
