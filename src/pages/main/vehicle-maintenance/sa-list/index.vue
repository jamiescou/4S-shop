<template>
  <div class="sa_list_pages">
    <div class="list_item_sa" v-for="(info, index) in saListData" :key="index" @click="chooseSaList(info)">
      <div class="choose_atstore_icon">
          <img :src="info.isSelect ? '../../../../../static/image/duigou-active.png' : '../../../../../static/image/duigou.png'" alt="">
        </div>
      <div class="left_pic">
        <img :src="info.pic" alt="">
        <div class="sa_status_icon">
          <img :src="info.isRest ? '../../../../../static/image/rest-icon.png' : '../../../../../static/image/atstore-icon.png'" alt="">
        </div>
      </div>
      <div class="center_content">
        <div class="_name_ _common">
          <div class="_label">
            姓名
          </div>
          <div class="_right_name">
            {{info.saName}}
          </div>
        </div>
        <div class="_level _common">
          <div class="_label">
            等级
          </div>
          <div class="_right_name">
            {{info.saLevel}}
          </div>
        </div>
        <div class="_experience _common">
          <div class="_label">
            经验
          </div>
          <div class="_right_name">
            {{info.saAge}}
          </div>
        </div>
        <div class="server_num _common">
          <div class="_label">
            服务台次
          </div>
          <div class="_right_name">
            {{info.serverNum}}
          </div>
        </div>
      </div>
      <div class="right_next_step">
        <img src="../../../../../static/image/right-icon.png" alt="">
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
      saListData: [
        {
          pic: '../../../../../static/image/cartest.jpg',
          saName: '楼下老楚',
          saLevel: '一级服务顾问',
          id: 1,
          isRest: false,
          isSelect: true,
          saAge: '4年',
          serverNum: '80台（2018年）'
        },
        {
          pic: '../../../../../static/image/cartest.jpg',
          saName: '楼底老张',
          saLevel: '二级服务顾问',
          saAge: '1年',
          isRest: true,
          isSelect: false,
          id: 2,
          serverNum: '50台（2018年）'
        },
        {
          pic: '../../../../../static/image/cartest.jpg',
          saName: '老张沙雕',
          saLevel: '二级服务顾问',
          saAge: '2年',
          isRest: false,
          isSelect: false,
          id: 3,
          serverNum: '20台（2018年）'
        },
        {
          pic: '../../../../../static/image/cartest.jpg',
          saName: '楼上老佳',
          id: 4,
          isRest: true,
          isSelect: false,
          saLevel: '三级服务顾问',
          saAge: '6年',
          serverNum: '100台（2018年）'
        }
      ]
    }
  },
  methods: {
    chooseSaList (info) {
      this.saListData.forEach(ele => {
        ele.isSelect = false
      })
      info.isSelect = true
      this.$emit('callbackSaDataFunc', info)
    }
  }
}
</script>

<style>
  .sa_list_pages{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    z-index: 1000;
    background: #fff;
  }
  .list_item_sa{
    position: relative;
    display: flex;
    align-items: center;
    padding:16rpx 22rpx 16rpx 36rpx;
    border-bottom: 2rpx solid #f4f4f4;
  }
   .list_item_sa .left_pic {
     position: relative;
   }
   .list_item_sa .choose_atstore_icon{
      position: absolute;
      bottom:0;
      right:0;
   }
   .list_item_sa .choose_atstore_icon img{
      width:64rpx;
      height:64rpx;
      vertical-align: middle;
   }
   .list_item_sa .left_pic .sa_status_icon{
    position: absolute;
    top: 0;
    left: 0;
   }
  .list_item_sa .left_pic .sa_status_icon img{
    width:30rpx;
    height:70rpx;
    vertical-align: middle;
  } 
   .list_item_sa .center_content{
    width: 70%;
    margin-left: 35rpx;
   }
  .list_item_sa .left_pic img{
    vertical-align: middle;
    width:164rpx;
    height:210rpx;
  }
  .list_item_sa .right_next_step img {
    vertical-align: middle;
    width:15rpx;
    height:27rpx;
  }
  .list_item_sa .center_content ._common{
    display: flex;
    line-height: 2.5;
  }
  .list_item_sa .center_content ._common ._label{
    font-size:24rpx;
    font-weight:400;
    color:rgba(51,51,51,1);
    width: 50%;
  }
  .list_item_sa .center_content ._common ._right_name{
    font-size:24rpx;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
</style>
