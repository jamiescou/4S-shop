<template>
  <div class="car_life_detail_pages">
    <div class="detail_info_head">
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
      <div class="detail_message">
             无可否认，宝马3系是对宝马运动精神最好的诠释，同时也是其品牌历史上成功的车型之一。今天我们来认识一下各代宝马3系都长什么样。 6月21日2018款广州本田锋范上市，作为2017款小改款的车型外观有了一定的变化，配置上从7款配置降低到了5款，指导价从7.98万-10.68万元，高配、顶配车型办齐在12万至13万元左右的价格，咱们在准备掏钱买车时都会遇到“我是买新车，还是买同价位档次更高二手车的问题”，而这个价位是不是也可以选择年限比较短的级别更高的二手车呢，我们就本着解开这个难题的态度，对比一下新风范和它的师哥思域。
      6月21日2018款广州本田锋范上市，作为2017款小改款的车型外观有了一定的变化，配置上从7款配置降低到了5款，指导价从7.98万-10.68万元，高配、顶配车型办齐在12万至13万元左右的价格，咱们在准备掏钱买车时都会遇到“我是买新车，还是买同价位档次更高二手车的问题”，而这个价位是不是也可以选择年限比较短的级别更高的二手车呢，我们就本着解开这个难题的态度，对比一下新风范和它的师哥思域。
      </div>
      <div class="bottom_picture">
        <img src="../../../static/image/cartest.jpg" alt="">
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
    }
  },
  methods: {
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
.detail_info_head{
  padding-top: 22rpx;
}
.detail_info_head .car_life_frist{
  /* border-bottom: 2rpx solid #f4f4f4; */
}
.detail_info_head .car_life_frist img{
  width:24rpx;
  height:15rpx;
  vertical-align: middle;
}
.detail_info_head .car_life_frist .info_pic{
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
.detail_info_head .car_life_frist .info_pic img{
  width:710rpx;
  height:360rpx;
}
.detail_info_head .detail_message{
  padding: 0 22rpx 0 36rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.detail_info_head .bottom_picture{

}
.detail_info_head .bottom_picture img{
  width:710rpx;
  height:357rpx;
}
.detail_info_head .bottom_picture {
  margin: 36rpx auto;
  text-align: center;
}
</style>
