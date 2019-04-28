//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    left: false ,
    right: false,
    activeIndex: 0,
    photoPath: [
      {
        "photoname": "章泽天 17"
      },
      {
        "photoname": "桥本环奈 16"
      }
    ],
    tempFilePaths:'../../images/沈佳宜 18.png',
    imgwidth:0, 
    imgheight:0,   
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
    }, 1000);
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
      success: function(res) {
        //console.log(res.data)
      }
    }),
    
    


    wx.getImageInfo({
      src: _this.data.tempFilePaths,
      success: function (res) {
        _this.setData({
          imgwidth: res.path.split('/')[1].split(' ')[0],
          imgheight: res.path.split('/')[1].split(' ')[1].split('.')[0]          
        })
      }
    })
  }  


})
