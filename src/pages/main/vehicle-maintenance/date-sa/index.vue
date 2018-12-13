<template>
  <div class="date_sa_pages">
    <div class="_head_title">
      到店保养流程
    </div>
    <div class="_process">
      <!-- 到店保养流程 -->
      <div class="_process_list" v-for="(info, index) in processList" :key="index">
        <div class="_left_icon">
          <div class="_icon">
            <img :src="info.img" alt="">
          </div>
          <div class="_title">
            {{info.title}}
          </div>
        </div>
        <div v-if="index !== 3" class="_right_row">
          <img src="../../../../../static/image/long-arrow.png" alt="">
        </div>
      </div>
    </div>
    <div class="car_info_box">
      <!-- 中间车信息 -->
      <div class="_left_img">
        <img src="../../../../../static/image/cartest.jpg" alt="">
      </div>
      <div class="_center_title">
        <div>奔驰GLC2016款手自一一体</div>
        <div>行驶：835620公里</div>
      </div>
      <div class="_right_btn" @click="changeMyCar()">
        更换
      </div>
    </div>
    <div class="order_shop_box">
      <div class="_left_title">
        预约门店
      </div>
      <div class="_right_icon">
        长沙一汽大众大汉4S店
        <img src="../../../../../static/image/right-icon.png" alt="">
      </div>
    </div>
    <div class="servers_list_box">
      <div class="servers_item" v-for="(info, index) in seversList" :key="index + Math.random() * 10">
        <!-- 单独每一项服务 -->
        <div class="_header_title" @click="showToggleContent(info)">
          <!-- 头部 -->
          <div class="_left_title">
            {{info.serverName}}<span>【{{info.chooseNum}}</span>/<span>{{info.serverNum}}】</span>
          </div>
          <div class="_right_icon">
            <img :src="info.isToggle ? '../../../../../static/image/up-icon.png' : '../../../../../static/image/down-icon.png'" alt="">
          </div>
        </div>
        <div class="_center_server_item"
          v-if="info.isToggle"
          v-for="(itemInfo, itemIndex) in info.serverItemList"
          :key="itemIndex + Math.random() * 100">
          <!-- 每一个选项 -->
          <div class="_heads_title">
            <div class="suggest_server">
              <!-- 建议服务 -->
              <div class="_left_icon" @click="pickGoods(itemInfo, info)">
                <img :src="itemInfo.isSelect ? '../../../../../static/image/chose-icon-active.png' : '../../../../../static/image/chose-icon.png'" alt="">
              </div>
              <div class="_right_icon">
                <div class="_top_title">
                  {{itemInfo.itemName}}
                  <span class="suggest_title">建议</span>
                </div>
                <div class="_bottom_title">
                  {{itemInfo.itemLabel}}
                </div>
              </div>
            </div>
            <div class="_right_info">
              <div class="_top">
                ￥ {{itemInfo.nowPrice}}
              </div>
              <div class="_bottom">
                ￥ {{itemInfo.salesPrice}}
              </div>
            </div>
          </div>
          <div class="set_meal_box" v-for="(goodsItem, goodsIndex) in itemInfo.goodsList" :key="goodsIndex + Math.random() * 1000">
            <!-- 套餐内容 -->
            <div class="_left_pic">
              <!-- 左侧图片 -->
              <img :src="goodsItem.goodsPic" alt="">
            </div>
            <div class="_right_content">
              <!-- 中间部分（包含名称 数量 按钮） -->
              <div class="_title">
                {{goodsItem.goodsTitle}}
              </div>
              <div class="_price_changebtn">
                <div class="_prices">
                ￥ {{goodsItem.price}}
                </div>
                <div class="_change_btn" @click="changeGoods(goodsItem, itemInfo)">
                  <img src="../../../../../static/image/exchange-icon.png" alt="">
                  更换产品
                </div>
              </div>
              <div class="delete_add_reduce">
                <!-- 增加/减少/删除按钮 -->
                <div class="add_reduce_btn">
                  <span class="_reduce _common" @click="addReduceNumberFn(-1, goodsItem, itemInfo)">＜</span>
                  <span class="_number">{{goodsItem.addNumber}}</span>
                  <span class="_addbtn _common" @click="addReduceNumberFn(1, goodsItem, itemInfo)">＞</span>
                </div>
                <div class="_delete_btn" @click="deleteGoods(goodsIndex, itemInfo)">
                  <img src="../../../../../static/image/delete-icon.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="date_sa_fixed_box">
      <div class="left_count_title">
        1项合计：¥ {{priceCount}}（含工时费）
      </div>
      <div class="set_data_btn">
        预约时间
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
      addNumber: 1,
      priceCount: 0,
      processList: [
        {
          img: '../../../../../static/image/xuanzexiangmu.png',
          title: '选择项目'
        },
        {
          img: '../../../../../static/image/yuyueshijian.png',
          title: '预约时间'
        },
        {
          img: '../../../../../static/image/baoyangicon.png',
          title: '到店保养'
        },
        {
          img: '../../../../../static/image/payment-icon.png',
          title: '支付提车'
        }
      ],
      seversList: [
        // 大类里的小类
        {
          serverName: '保养服务',
          isToggle: false,
          serverNum: 3,
          chooseNum: 0,
          serverItemList: [
          // 小类里的小类
            {
              itemName: '小保养服务',
              itemLabel: '5000km或6个月/次',
              nowPrice: '466.00',
              salesPrice: '599.00',
              isSelect: false, // 选择小保养
              goodsList: [
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '正品美国合成超级无敌好的用的全合成 机油非常好用（4升装）',
                  price: '9.9',
                  addNumber: 1,
                  id: 1
                },
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '大哥大法官覆盖的复古风格 机油非常好用（4升装）',
                  price: '19.9',
                  addNumber: 1,
                  id: 2
                }
              ]
            },
            {
              itemName: '大保养服务',
              itemLabel: '50000km或3年/次',
              nowPrice: '1899.00',
              salesPrice: '2899.00',
              isSelect: false,
              goodsList: [
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '看见卡夫卡赶快赶快开发 机油非常好用（4升装）',
                  price: '9.9',
                  addNumber: 1,
                  id: 1
                },
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '水电费水电费付付付过过过',
                  price: '28.9',
                  addNumber: 1,
                  id: 2
                }
              ]
            },
            {
              itemName: '一条龙服务',
              itemLabel: '50000km或3年/次',
              nowPrice: '1899.00',
              salesPrice: '2899.00',
              isSelect: false,
              goodsList: [
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '看见卡夫卡赶快赶快开发 机油非常好用（4升装）',
                  price: '9.9',
                  addNumber: 1,
                  id: 1
                },
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '水电费水电费付付付过过过',
                  price: '28.9',
                  addNumber: 1,
                  id: 2
                }
              ]
            }
          ]
        },
        {
          serverName: '空调系统养护',
          isToggle: false,
          serverNum: 3,
          chooseNum: 0,
          serverItemList: [
          // 小类里的小类
            {
              itemName: '小保养服务',
              itemLabel: '5000km或6个月/次',
              nowPrice: '466.00',
              salesPrice: '599.00',
              isSelect: false, // 选择小保养
              goodsList: [
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '正品美国合成超级无敌好的用的全合成 机油非常好用（4升装）',
                  price: '9.9',
                  addNumber: 1,
                  id: 1
                },
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '大哥大法官覆盖的复古风格 机油非常好用（4升装）',
                  price: '19.9',
                  addNumber: 1,
                  id: 2
                }
              ]
            },
            {
              itemName: '大保养服务',
              itemLabel: '50000km或3年/次',
              nowPrice: '1899.00',
              salesPrice: '2899.00',
              isSelect: false,
              goodsList: [
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '看见卡夫卡赶快赶快开发 机油非常好用（4升装）',
                  price: '9.9',
                  addNumber: 1,
                  id: 1
                },
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '水电费水电费付付付过过过',
                  price: '28.9',
                  addNumber: 1,
                  id: 2
                }
              ]
            },
            {
              itemName: '一条龙服务',
              itemLabel: '50000km或3年/次',
              nowPrice: '1899.00',
              salesPrice: '2899.00',
              isSelect: false,
              goodsList: [
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '看见卡夫卡赶快赶快开发 机油非常好用（4升装）',
                  price: '9.9',
                  addNumber: 1,
                  id: 1
                },
                {
                  goodsPic: '../../../../../static/image/cartest.jpg',
                  goodsTitle: '水电费水电费付付付过过过',
                  price: '28.9',
                  addNumber: 1,
                  id: 2
                }
              ]
            }
          ]
        }
      ],
      choseGoodsData: { // 更换产品临时数据
        goodsPic: '../../../../../static/image/cartest.jpg',
        goodsTitle: '水电费水电费水电费水电费等各个地方规范化个结构化 机油非常好用（4升装）',
        price: Math.round(Math.random() * 100),
        addNumber: 10,
        id: 3
      }
    }
  },
  methods: {
    changeMyCar () {
      wx.navigateTo({
        url: '../../my-carlist/main'
      })
    },
    changeGoods (goodsItem, parentInfo) {
      // 更换产品
      goodsItem.goodsTitle = this.choseGoodsData.goodsTitle
      goodsItem.goodsPic = this.choseGoodsData.goodsPic
      goodsItem.price = this.choseGoodsData.price
      goodsItem.addNumber = this.choseGoodsData.addNumber
      goodsItem.id = this.choseGoodsData.id
      this.calcGoodsPrice(parentInfo)
      this.calcAllPrice()
    },
    deleteGoods (goodsIndexs, itemInfo) {
      // 删除某个产品
      itemInfo.goodsList = itemInfo.goodsList.filter((item, index) => goodsIndexs !== index)

      this.calcGoodsPrice(itemInfo)
      this.calcAllPrice()
    },
    pickGoods (item, parentData) {
      item.isSelect = !item.isSelect
      let parentInfoData = parentData.serverItemList
      parentData.chooseNum = parentInfoData.filter(item => item.isSelect).length
      this.calcAllPrice()
    },
    showToggleContent (info) {
      info.isToggle = !info.isToggle
    },
    calcGoodsPrice (goodsInfo) {
      // 计算单个套餐的价格
      let goodsList = goodsInfo.goodsList
      let goodsItemPrice = 0
      for (var i = 0; i < goodsList.length; i++) {
        goodsItemPrice += goodsList[i].price * goodsList[i].addNumber
      }
      goodsInfo.nowPrice = goodsItemPrice.toFixed(2)
    },
    calcAllPrice () {
      let severLists = this.seversList
      this.priceCount = 0
      for (var i = 0; i < severLists.length; i++) {
        for (var j = 0; j < severLists[i].serverItemList.length; j++) {
          if (severLists[i].serverItemList[j].isSelect) {
            this.priceCount += Number(severLists[i].serverItemList[j].nowPrice)
          }
        }
      }
      this.priceCount = Number(this.priceCount).toFixed(2)
    },
    addReduceNumberFn (num, info, parentInfo) {
      // 控制数量
      if (num < 0 && info.addNumber <= 1) {
        return
      }
      info.addNumber += num
      this.calcGoodsPrice(parentInfo)
      this.calcAllPrice()
    }
  },
  onShow () {
    this.calcAllPrice()
  }
}
</script>

<style>
.date_sa_fixed_box{
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
.date_sa_fixed_box .left_count_title{
  padding-left: 36rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.date_sa_fixed_box .set_data_btn{
  text-align: center;
  line-height: 98rpx;
  width:280rpx;
  font-size:36rpx;
  font-weight:400;
  color:rgba(254,254,254,1);
  background:rgba(86,143,244,1);
}
._center_server_item{
  border-bottom: 1rpx solid #f4f4f4;
}
._center_server_item .set_meal_box{
  display: flex;
  align-items: center;
  padding: 20rpx 22rpx 20rpx 36rpx;
  border-bottom: 1rpx solid #f4f4f4;
}
.set_meal_box ._left_pic img{
  width:154rpx;
  height:197rpx;
  vertical-align: middle;
}
.set_meal_box ._price_changebtn{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20rpx;
}
.set_meal_box .delete_add_reduce{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.set_meal_box .delete_add_reduce .add_reduce_btn{
}
.set_meal_box .delete_add_reduce .add_reduce_btn ._reduce{
  font-size: 16rpx;
  padding:6rpx 18rpx;
  border:1rpx solid rgba(153,153,153,1);
  border-radius:12rpx;
}
.set_meal_box .delete_add_reduce .add_reduce_btn ._number{
  font-size:24rpx;
  font-weight:400;
  width: 36rpx;
  text-align: center;
  display: inline-block;
  color:rgba(153,153,153,1);
}
.set_meal_box .delete_add_reduce .add_reduce_btn ._addbtn{
  padding:6rpx 18rpx;
  font-size: 16rpx;
  border:1rpx solid rgba(153,153,153,1);
  border-radius:12rpx;
}
.set_meal_box ._price_changebtn ._prices{
  font-size:28rpx;
  font-weight:400;
  color:rgba(231,46,45,1);
}
.set_meal_box ._change_btn{
  font-size:28rpx;
  font-weight:400;
  color:rgba(86,143,244,1);
}
.set_meal_box ._right_content{
  padding-left: 30rpx;
  width:80%;
}
.set_meal_box ._right_content ._title{
  line-height: 1.6;
  font-size:28rpx;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.set_meal_box ._change_btn img{
  width:24rpx;
  height:26rpx;
}
.set_meal_box .delete_add_reduce ._delete_btn img{
  width:28rpx;
  height:28rpx;
}

._center_server_item ._heads_title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120rpx;
  padding: 0 22rpx 0 36rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
._center_server_item ._left_icon{
  /* width: 10% */
  padding-right: 15rpx;
}
._center_server_item .suggest_server{
  width: 45%;
  display: flex;
  align-items: center;
}
._center_server_item .suggest_server .suggest_title{
  display: inline-block;
  text-align: center;
  line-height: 30rpx;
  width:68rpx;
  height:30rpx;
  background:rgba(255,0,0,1);
  border-radius:15rpx;
  font-size:24rpx;
  font-weight:400;
  color:rgba(255,255,255,1);
}
._center_server_item ._right_info{
  text-align: right;
}
._center_server_item ._right_info ._top{
  font-size:28rpx;
  font-weight:400;
  color:rgba(231,46,45,1);
}
._center_server_item ._right_info ._bottom{
  font-size:24rpx;
  font-weight:400;
  text-decoration:line-through;
  color:rgba(153,153,153,1);
}
._center_server_item ._top_title{
  font-size:28rpx;
  font-weight:400;
  color:rgba(51,51,51,1);
}
._center_server_item ._bottom_title{
  font-size:24rpx;
  font-weight:400;
  color:rgba(153,153,153,1);
}
._center_server_item ._left_icon img{
  width:36rpx;
  height:36rpx;
}

  .date_sa_pages{

  }
  ._head_title{
    text-align: center;
    height: 88rpx;
    line-height: 88rpx;
    font-size:32rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .date_sa_pages ._process{
    display: flex;
    justify-content: space-between;
    padding: 20rpx 36rpx;
    border-bottom: 6rpx solid #f4f4f4;
    align-items: center;
  }
  .date_sa_pages ._process_list{
    display: flex;
  }
  .date_sa_pages ._process_list ._left_icon{
    text-align: center;
  }
  .date_sa_pages ._process_list ._left_icon img{
    width:56rpx;
    height:56rpx;
  }
  ._process_list ._left_icon ._title{
    font-size:28rpx;
    font-weight:400;
    color:rgba(86,143,244,1);
  }
  .date_sa_pages ._process_list ._right_row img{
    width:68rpx;
    height:8rpx;
  }
  .car_info_box{
    display: flex;
    align-items: center;
    padding: 20rpx 22rpx 20rpx 36rpx;
    border-bottom: 6rpx solid #f4f4f4;
  }
  .car_info_box ._left_img img{
    width:210rpx;
    height:150rpx;
    vertical-align:middle;
  }
  .car_info_box ._center_title{
    margin: 0 65rpx 0 19rpx;
    width: 50%;
    font-size:28rpx;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .car_info_box ._right_btn{
    width: 10%;
    font-size:24rpx;
    font-weight:400;
    color:rgba(86,143,244,1);
  }
  .order_shop_box{
    display: flex;
    align-items: center;
    height: 88rpx;
    justify-content: space-between;
    line-height: 88rpx;
    padding: 0 22rpx 0 36rpx;
    border-bottom: 6rpx solid #f4f4f4;
  }
  .order_shop_box ._left_title{
    font-size:28rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .order_shop_box ._right_icon{
    display: flex;
    align-items: center;
    font-size:28rpx;
    font-weight:400;
    color:rgba(86,143,244,1);
  }
  .order_shop_box ._right_icon img{
    margin-left: 14rpx;
    vertical-align: middle;
    width:16rpx;
    height:28rpx;
  }
  .servers_list_box{
    /* 服务大类的头部 */
    padding-bottom: 100rpx;
  }
  .servers_list_box .servers_item{
    border-bottom: 6rpx solid #f4f4f4;
  }
  .servers_list_box ._header_title{
    padding: 0 22rpx 0 36rpx;
    height: 88rpx;
    line-height: 88rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2rpx solid #f4f4f4;
  }
  .servers_list_box ._header_title ._left_title{
    font-size:28rpx;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .servers_list_box ._header_title ._right_icon img{
    width:33rpx;
    height:20rpx;
  }
</style>
