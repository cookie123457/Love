//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    left: false ,
    right: false,
    activeIndex: 0,
    photoPath: [{ username: "沈佳宜", photoname: "../../images/wx1 沈佳宜.png" },
      { username: "章泽天", photoname: "../../images/wx2 章泽天.png" }
      ],
    name:''  
  },
  changeswiper: function(e) {
    var index = e.detail.current;
    if(index > this.data.activeIndex) {
      this.setData({
        left: true
      })
    } else if(index < this.data.activeIndex) {
      this.setData({
        right: true
      })
    }
    setTimeout(() => {
      this.setData({
        activeIndex: index,
        left:false,
        right:false
      })
    }, 500);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onLoad: function () {
    var _this = this;

    wx.request({
      url: 'http://localhost:8080/rPhoto/count',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        _this.setData({
          photoPath: res.data
        })
      }
    })
  }   


})
