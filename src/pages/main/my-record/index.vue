<template>
  <div class="record_car_box">
    <div class="record_list" v-for="(info, index) in recordList" :key="index">
      <div class="item_record">
        <div class="record_head">
          <div>
            保养时间：{{info.bookingTime}}
          </div>
          <div>
            SA：{{info.saName}}
          </div>
        </div>
        <div class="record_content" v-for="(listInfo, listIndex) in info.packageList" :key="listIndex + listInfo.packageName">
          <div class="bao_yang_item">
            <div class="_head">
              <div class="_left">{{listInfo.packageName}}</div>
              <div class="_right">¥ {{listInfo.packagePrice}}</div>
            </div>
            <div class="bao_yang_info" v-for="(itemInfo, itemIndex) in listInfo.packageItems" :key="itemIndex + itemInfo.itemName">
              <div class="_content_pic_list" :style="_position_auto">
                <div class="_pic_item"><img :src="itemInfo.itemPic" alt=""></div>
              </div>
              <div v-if="itemInfo.num && itemInfo.num > 3" class="_more_info">
                》
              </div>
              <div class="info_count">
                共{{itemInfo.num}}件
              </div>
            </div>
          </div>
        </div>
        <div class="record_footer">
          <div class="_left">
            共{{info.totalCount}}件商品
          </div>
          <div class="_right" @click="checkReport(info.orderId)">
            车辆保养报告
          </div>
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
      _position_auto: 'left: 1000',
      recordList: []
    }
  },
  methods: {
    moveRight () {
      console.log('ssss')
      this._position_auto = 'left: 400rpx'
    },
    checkReport (id) {
      wx.navigateTo({
        url: '../my-report/main?orderId=' + id
      })
    },
    getRecordList () {
      // let vinCode = this.$root.$mp.query.vinCode
      this.request.post('/api/orders/getBaoyangOrderList?vinCode=' + 'sdafdasfdafdsafd').then(res => {
        this.recordList = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
  },
  onShow () {
    this.getRecordList()
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.record_footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88rpx;
  line-height: 88rpx;
  padding: 0 22rpx 0 36rpx;
}
.record_footer ._left {
  font-size:24rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.record_footer ._right {
  text-align: center;
  width: 200rpx;
  height:60rpx;
  line-height: 60rpx;
  background:rgba(86,143,244,1);
  border-radius:4rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.record_car_box{

}
.record_list{
  border-bottom: 10rpx solid #f4f4f4;
}
.record_list .item_record{

}
.record_list .record_head{
  padding: 0 22rpx 0 36rpx;
  height: 88rpx;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 2rpx solid #f4f4f4;
}
.record_list .record_head div{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.record_list .record_content{
  padding: 0 22rpx 38rpx 36rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.record_list .record_content .bao_yang_info{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 110rpx;
  position: relative;
  z-index: 99;
}
.record_list .record_content .bao_yang_info ._more_info{
  width:20rpx;
  height:110rpx;
  background:rgba(255,255,255,1);
  border:1rpx solid rgba(244,244,244,1);
  border-radius:4rpx;
  font-size: 40rpx;
  line-height: 110rpx;
  color: #f4f4f4;
  margin-left:-8%;
  position:absolute;
  left: 590rpx;
}
.record_list .record_content .bao_yang_info .info_count{
  font-size:24rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  position:absolute;
  right:0;
}
.record_list .record_content ._content_pic_list{
  width: 510rpx;
  overflow: scroll;
  display: flex;
  align-items: center;
  position:absolute;
  z-index: 10;
}
.record_list .record_content ._content_pic_list ._pic_item{
  margin-right: 20rpx;
  width: 100%;
}
.record_list .record_content ._content_pic_list img{
  width:160rpx;
  height:110rpx;
  background:rgba(255,255,255,1);
  vertical-align: middle;
}
.record_list .record_content ._head{
  display: flex;
  justify-content: space-between;
  padding: 34rpx 0 25rpx 0;
  font-size:24rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.record_list .record_footer{
  
}
</style>
