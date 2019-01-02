<template>
  <div class="report_error_page">
    <div class="_header">
      异常项
    </div>
    <div class="error_item_list" v-for="(info, index) in errorDataList" :key="index">
      <div class="error_title" @click="showAllerror(info)">
        <div class="_left">
          {{info.title}}
        </div>
        <div class="_right">
          <div class="error_info"><img src="../../../../static/image/error-icon.png" alt=""></div>
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
      errorDataList: [
        {
          title: '粉尘过滤器',
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        },
        {
          title: '粉尘过滤器',
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        },
        {
          title: '粉尘过滤器',
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        },
        {
          title: '粉尘过滤器',
          errPic: '../../../../static/image/cartest.jpg',
          correctTitile: '粉尘器是否堵塞',
          fixedTitle: '粉尘器已更换',
          isShow: false
        }
      ]
    }
  },
  methods: {
    showAllerror (info) {
      info.isShow = !info.isShow
    },
    async getErrorReportList () {
      let orderId = this.$root.$mp.query.orderId
      let postData = {
        orderId
        // categoryId
      }
      let errorDataLists = await this.request.post('/api/report/getReportDetailInfo', postData)
      this.errorDataList = errorDataLists.data.map(item => {
        item = {...item, isShow: false}
        return item
      })
      console.log('errorDataList==>', this.errorDataList)
    }
  },
  created () {
  },
  onShow () {
    this.getErrorReportList()
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.report_error_page{

}
.report_error_page ._header{
  border-bottom: 2rpx solid #f4f4f4;
  height: 88rpx;
  line-height: 88rpx;
  padding-left: 36rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.error_item_list{
  border-bottom: 10rpx solid #f4f4f4;
}
.error_item_list .error_title{
  padding: 0 22rpx 0 36rpx;
  border-bottom: 2rpx solid #f4f4f4;
  height: 88rpx;
  line-height: 88rpx;
  display: flex;
  justify-content: space-between;
}
.error_item_list .error_title ._left{
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.error_item_list .error_title ._right{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.error_item_list .error_title ._right .error_info img{
  padding-right: 15rpx;
  width:28rpx;
  height:24rpx;
  vertical-align:middle;
}
.error_item_list .error_title ._right .error_icon img{
  width:21rpx;
  height:12rpx;
  vertical-align:middle;
}
.error_item_list .error_content{
  display: flex;
  align-items: center;
}
.error_item_list .error_content ._left{
  padding:20rpx 36rpx 10rpx 36rpx;
}
.error_item_list .error_content ._left img{
  width:210rpx;
  height:150rpx;
}
.error_item_list .error_content ._before_error{
  width: 30%;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
  margin-right: 20rpx;
  border-right: 2rpx solid #f4f4f4;
}
.error_item_list .error_content ._fixed_error{
  width: 30%;
  font-size:28rpx;
  font-weight:400;
  color:rgba(86,143,244,1);
}

</style>
