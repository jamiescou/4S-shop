<template>
  <div class="car_life_pages">
    <div class="tab_change_list">
      <div
        @click="changeClick(item)"
        v-for="item in tabList"
        :key="item.tabName"
        class="item_tab"
        :class="item.isActive ? 'isTabClick' : 'not_click'">
        {{item.tabName}}
      </div>
    </div>
    <div class="news_list_card">
      <div class="car_life_frist" @click="lookNewsDetail(1)">
        <!-- 第一张大图资讯 -->
        <div class="info_pic">
          <img src="../../../static/image/check-car.png" alt="">
        </div>
        <div class="frist_title">
          看尽40多年的运动史 宝马3系历代简述
        </div>
        <div class="frist_see_times">
          <div class="eye_icon">
            <img src="../../../static/image/eye.png" alt="">
            288
          </div>
          <div class="update_time">
            更新时间：2018年6月24日
          </div>
        </div>
      </div>
      <div class="news_item_card" v-for="(item, index) in newsList" :key="index" @click="lookNewsDetail(index)">
        <!-- 第二个开始 -->
        <div class="left_pic">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="right_content">
          <div class="big_title">
            {{item.title}}
          </div>
          <div class="update_seetimes">
            <div class="update_time_">
              更新时间：{{item.updateTime}}
            </div>
            <div class="see_times_">
              <img src="../../../static/image/eye.png" alt="">
              {{item.seeTimes}}
            </div>
          </div>
          <div class="news_detail_line">
            {{item.desc}}
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
      tabList: [
        {
          tabName: '新闻热点',
          id: 1,
          isActive: true
        },
        {
          tabName: '行业资讯',
          id: 2,
          isActive: false
        },
        {
          tabName: '汽车养护',
          id: 3,
          isActive: false
        }
      ],
      newsList: [
        {
          picUrl: '../../../static/image/cartest.jpg',
          title: '新款奔驰E级二手车“超大事故”解析',
          updateTime: '2018年6月24日',
          seeTimes: '199',
          desc: '二手车市场鱼龙混杂，如何才能在众多车辆中 选出自己满意的那辆呢，车况鉴定必不可少...'
        },
        {
          picUrl: '../../../static/image/cartest.jpg',
          title: '新款奔驰E级二手车“超大事故”解析',
          updateTime: '2018年6月24日',
          seeTimes: '199',
          desc: '二手车市场鱼龙混杂，如何才能在众多车辆中 选出自己满意的那辆呢，车况鉴定必不可少...'
        },
        {
          picUrl: '../../../static/image/cartest.jpg',
          title: '新款奔驰E级二手车“超大事故”解析',
          updateTime: '2018年6月24日',
          seeTimes: '199',
          desc: '二手车市场鱼龙混杂，如何才能在众多车辆中 选出自己满意的那辆呢，车况鉴定必不可少...'
        },
        {
          picUrl: '../../../static/image/cartest.jpg',
          title: '新款奔驰E级二手车“超大事故”解析',
          updateTime: '2018年6月24日',
          seeTimes: '199',
          desc: '二手车市场鱼龙混杂，如何才能在众多车辆中 选出自己满意的那辆呢，车况鉴定必不可少...'
        }
      ]
    }
  },
  methods: {
    changeClick (info) {
      // this.tabList.map(ele => ele.isActive = false)
      let tabLists = this.tabList
      let tempArr = []
      tabLists.forEach(item => {
        if (item.id === info.id) {
          item.isActive = true
        } else {
          item.isActive = false
        }
        tempArr.push(item)
      })
      this.tabList = tempArr
    },
    lookNewsDetail () {
      wx.navigateTo({
        url: '../carlife-detail/main'
      })
    }
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
  .news_item_card{
    display: flex;
    align-items: center;
    margin: 0 20rpx;
    padding: 40rpx 0;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .news_item_card .left_pic {
    width: 30%;
  }
  .news_item_card .left_pic img{
    width:180rpx;
    height:120rpx;
    vertical-align: middle;
  }
  .news_item_card .right_content{
    width: 70%;
  }
  .news_item_card .right_content .big_title{
    font-size:28rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .news_item_card .right_content .news_detail_line{
    font-size:24rpx;
    font-weight:400;
    color:rgba(102,102,102,1);
  }  
  .news_item_card .update_seetimes{
    display: flex;
    justify-content: space-between;
    font-size:20rpx;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .news_item_card .see_times_ img{
    width:20rpx;
    height:13rpx;
    vertical-align: middle;
  }






.car_life_pages{

}
.tab_change_list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 105rpx;
  height: 88rpx;
  line-height: 70rpx;
}
.tab_change_list .isTabClick{
  border-bottom: 2rpx solid rgba(86,143,244,1);
}
.tab_change_list .item_tab{
  margin-bottom: 10rpx;
  font-size:28rpx;
  font-weight:400;
  color:rgba(86,143,244,1);
}
.tab_change_list .not_click{
  color:rgba(51,51,51,1) !important;
}
.news_list_card{

}
.news_list_card .car_life_frist{
  border-bottom: 2rpx solid #f4f4f4;
}
.news_list_card .car_life_frist img{
  width:24rpx;
  height:15rpx;
  vertical-align: middle;
}
.news_list_card .car_life_frist .info_pic{
  margin: 0 auto;
  text-align: center;
}
.car_life_frist .frist_title{
  padding: 33rpx 22rpx 18rpx 20rpx;
  font-size:36rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.car_life_frist .frist_see_times{
  display: flex;
  padding: 0 22rpx 33rpx 20rpx;
}
.frist_see_times .update_time, .eye_icon{
  margin-right: 38rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.news_list_card .car_life_frist .info_pic img{
  width:710rpx;
  height:360rpx;
}
</style>
