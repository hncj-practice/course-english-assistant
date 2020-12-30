// pages/CET4/CET4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  bindgpchtap: function() {
    wx.navigateTo({
      url: '../4words/4words'
    })
  },


  bindtltap: function() {
    wx.navigateTo({
      url: '../4listening/4listening'
    })
  },

  bindydljtap: function() {
    wx.navigateTo({
      url: '../4comprehension/4comprehension'
    })
  },

  bindxztap: function() {
    wx.navigateTo({
      url: '../4writing/4writing'
    })
  },


  bindfytap: function() {
    wx.navigateTo({
      url: '../4translation/4translation'
    })
  },


  binddfjqtap: function() {
    wx.navigateTo({
      url: '../4skill/4skill'
    })
  },



  bindlnzttap: function() {
    wx.navigateTo({
      url: '../4lnzt/4lnzt'
    })
  },

  bindgpcztap: function() {
    wx.navigateTo({
      url: '../4gpcz/4gpcz'
    })
  },

  bindgpdytap: function() {
    wx.navigateTo({
      url: '../4gpdy/4gpdy'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // wx.showShareMenu({
    //   withShareTicket: true
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    // return {
    //   title: '分享标题',
    //   path: '/pages/cet4',
    //   imageUrl: '/images/bj1.jpg',
    //   success: (res) => {
    //     // 分享成功
    //   },
    //   fail: (res) => {
    //     // 分享失败
    //   }


    // }
  }
})