<template>
  <div class="report_car_box">
    <div class="car_info_list">
      <div class="car_brand_num">
        SA：庹鹏程
      </div>
      <div class="car_info_box" @click="changeMyCar()">
        <div class="car_info_left">
          <div>东风日产 阳光1.5 2012款  舒适型</div>
          <div class="info_center">保养里程：835620公里</div>
          <div>保养时间：2018-07-25</div>
        </div>
        <div class="car_info_right">
          <img src="../../../../static/image/cartest.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="error_list" @click="checkRecordError()">
      <div class="_left">
        <img src="../../../../static/image/error-icon.png" alt="">
        异常项
      </div>
      <div class="_right">
        {{totalErrorCount}}项
      </div>
    </div>
    <div class="baoyang_content_box">
      <div class="baoyang_content">
        保养内容
      </div>
      <div class="baoyang_list" v-for="(item, index) in listReport" :key="index" @click="checkReportItem(index, listReport)">
        <div class="baoyang_item">
          {{item.categoryName}}
        </div>
        <div class="_right">
          <div>{{item.errorCount}}项 <img class="error_icon" src="../../../../static/image/error.png" /></div>
          <div>{{item.itemCount - item.errorCount}}项 <img class="nomal_icon" src="../../../../static/image/nomal.png" /></div>
          <div><img class="xia_yi_ge" src="../../../../static/image/right-icon.png" alt=""></div>
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
      listReport: [],
      finishErrorCount: [],
      totalErrorCount: ''
    }
  },
  methods: {
    checkReportItem (index, info) {
      let len = this.listReport.length
      let infos = this.listReport
      let id = this.$root.$mp.query.orderId
      wx.navigateTo({
        url: '../report-item/main?id=' + index + '&info=' + JSON.stringify(infos) + '&count=' + len + '&orderId=' + id
      })
    },
    checkRecordError () {
      let id = this.$root.$mp.query.orderId
      wx.navigateTo({
        url: '../report-error/main?orderId=' + id
      })
    },
    async getReportList () {
      let id = this.$root.$mp.query.orderId
      this.listReport = []
      // 获取保养维修模板
      let listReports = await this.request.post('/api/report/getOrderTemplate?orderId=' + id)
      // 查找错误项
      let ErrorCountList = await this.request.post('/api/report/getReportInfo?orderId=' + id)
      this.totalErrorCount = ErrorCountList.data.totalErrorCount
      let finishErrorCountList = ErrorCountList.data.finishErrorCount
      if (finishErrorCountList.length > 0 && listReports.data.length > 0) {
        this.listReport = listReports.data.map(item => {
          finishErrorCountList.map(info => {
            if (info.categoryId === item.categoryId) {
              item['errorCount'] = info.errorCount
            }
          })
          return item
        })
      }
    }
  },
  created () {
  },
  onShow () {
    this.getReportList()
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.baoyang_content_box{
}
.baoyang_content_box .xia_yi_ge{
  padding-left: 4rpx;
  width:12rpx;
  height:21rpx;
  vertical-align:middle;
}
.baoyang_content{
  padding:0 22rpx 0rpx 37rpx;
  height: 88rpx;
  padding-left: 36rpx;
  line-height: 88rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  border-bottom: 2rpx solid #f4f4f4;
}
.baoyang_list{
  padding:0 22rpx 0rpx 37rpx;
  height: 88rpx;
  line-height: 88rpx;
  display: flex;
  justify-content: space-between;
  border-bottom: 2rpx solid #f4f4f4;
}
.baoyang_list .baoyang_item{
  font-size:24rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.baoyang_list ._right{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:24rpx;
  font-weight:400;
  color:rgba(153,153,153,1);
}
.baoyang_list ._right .error_icon{
  width: 16rpx;
  height: 16rpx;
  padding-right: 12rpx;
}
.baoyang_list ._right .nomal_icon{
  width: 16rpx;
  height: 16rpx;
}

.report_car_box{
  border-bottom: 10rpx solid #f4f4f4;
}
.report_car_box .car_info_list{
  padding:30rpx 22rpx 0rpx 37rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.report_car_box .car_brand_num{
  font-size:32rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  padding-bottom: 30rpx;
}
.report_car_box .car_info_box{
  padding-bottom: 44rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 2rpx solid #f4f4f4; */
}
.report_car_box .car_info_box .car_info_left div{
  font-size:28rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.report_car_box .car_info_box .car_info_right img{
  width:210rpx;
  height:145rpx;
}
.report_car_box .car_info_box .info_center{
  padding: 33rpx 0;
}
.report_car_box .car_info_record{
text-align: center;
height: 88rpx;
line-height: 88rpx;
font-size:28rpx;
color:rgba(86,143,244,1);
}
.report_car_box .car_add_btn{
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
.report_car_box .error_list{
  display: flex;
  justify-content: space-between;
  height: 88rpx;
  line-height: 88rpx;
  padding:0 22rpx 0rpx 37rpx;
  border-bottom: 10rpx solid #f4f4f4;
}
.report_car_box .error_list div{
  font-size:24rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.report_car_box .error_list ._left img{
  width:24rpx;
  height:20rpx;
}
.report_car_box .error_list ._right{

}

</style>
