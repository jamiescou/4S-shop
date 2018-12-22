<template>
  <div class="look_team_pages">
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
    <div class="list_item_sa" v-for="(info, index) in saListData" :key="index" @click="chooseSaList(info)">
      <div class="left_pic">
        <img :src="info.pic" alt="">
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
        <img src="../../../../static/image/right-icon.png" alt="">
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
          tabName: 'SA人员（3）',
          id: 1,
          isActive: true
        },
        {
          tabName: '一般维修人员（4）',
          id: 2,
          isActive: false
        },
        {
          tabName: '钣喷人员（5）',
          id: 3,
          isActive: false
        }
      ],
      saListData: [
        {
          pic: '../../../../static/image/cartest.jpg',
          saName: '楼下老楚',
          saLevel: '一级服务顾问',
          id: 1,
          isRest: false,
          isSelect: true,
          saAge: '4年',
          serverNum: '80台（2018年）'
        },
        {
          pic: '../../../../static/image/cartest.jpg',
          saName: '楼底老张',
          saLevel: '二级服务顾问',
          saAge: '1年',
          isRest: true,
          isSelect: false,
          id: 2,
          serverNum: '50台（2018年）'
        },
        {
          pic: '../../../../static/image/cartest.jpg',
          saName: '老张沙雕',
          saLevel: '二级服务顾问',
          saAge: '2年',
          isRest: false,
          isSelect: false,
          id: 3,
          serverNum: '20台（2018年）'
        },
        {
          pic: '../../../../static/image/cartest.jpg',
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
    changeClick (info) {
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
    }
  }
}
</script>

<style>
.look_team_pages{
  width: 100%;
  height: 100%;
  background: #fff;
}
.look_team_pages .tab_change_list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60rpx;
  height: 88rpx;
  line-height: 70rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.look_team_pages .tab_change_list .isTabClick{
  border-bottom: 2rpx solid rgba(86,143,244,1);
}
.look_team_pages .tab_change_list .item_tab{
  margin-bottom: 10rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(86,143,244,1);
}
.look_team_pages .tab_change_list .not_click{
  color:rgba(153,153,153,1) !important;
}
  .look_team_pages .list_item_sa{
    position: relative;
    display: flex;
    align-items: center;
    padding:16rpx 22rpx 16rpx 36rpx;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .look_team_pages .list_item_sa .left_pic {
     position: relative;
   }
   .look_team_pages .list_item_sa .choose_atstore_icon{
      position: absolute;
      bottom:0;
      right:0;
   }
  .look_team_pages .list_item_sa .choose_atstore_icon img{
      width:64rpx;
      height:64rpx;
      vertical-align: middle;
   }
  .look_team_pages .list_item_sa .left_pic .sa_status_icon{
    position: absolute;
    top: 0;
    left: 0;
   }
  .look_team_pages .list_item_sa .left_pic .sa_status_icon img{
    width:30rpx;
    height:70rpx;
    vertical-align: middle;
  } 
  .look_team_pages .list_item_sa .center_content{
    width: 70%;
    margin-left: 35rpx;
   }
  .look_team_pages .list_item_sa .left_pic img{
    vertical-align: middle;
    width:164rpx;
    height:210rpx;
  }
  .look_team_pages .list_item_sa .right_next_step img {
    vertical-align: middle;
    width:15rpx;
    height:27rpx;
  }
  .look_team_pages .list_item_sa .center_content ._common{
    display: flex;
    line-height: 2.5;
  }
  .look_team_pages .list_item_sa .center_content ._common ._label{
    font-size:24rpx;
    font-weight:400;
    color:rgba(51,51,51,1);
    width: 50%;
  }
  .look_team_pages .list_item_sa .center_content ._common ._right_name{
    font-size:24rpx;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
</style>
