var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeId: 0,
    valueId: 0,
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      typeId: parseInt(options.typeId),
      valueId: parseInt(options.valueId)
    });
  },

  onClose() {
    wx.navigateBack({
      delta: 1
    });
  },

  onPost() {
    let that = this;

    if (!this.data.content) {
      util.showErrorToast('请填写评论')
      return false;
    }


    util.request(api.CommentPost, {
      typeId: that.data.typeId,
      valueId: that.data.valueId,
      content: that.data.content
    }, 'POST').then(function (res) {
      if (res.errno === 0) {
        wx.showToast({
          title: '评论成功',
          complete: function () {
            wx.navigateBack({
              delta: 1
            });
          }
        })
      }
      console.log(res)
    });
  },
  bindInpuntValue(event) {

    let value = event.detail.value;

    //判断是否超过140个字符
    if (value && value.length > 140) {
      return false;
    }

    this.setData({
      content: event.detail.value,
    })
    console.log(event.detail)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})