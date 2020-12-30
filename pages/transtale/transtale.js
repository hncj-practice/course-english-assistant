// pages/transtale/transtale.js
import {
  trans
} from '../../utils/trans.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      '翻译成中文',
      '翻译成英文'
    ],
    index: 0,
    input: '', // 待翻译的文本
    translation: '译文'
  },

  // 文本输入
  onInput(e) {
    this.setData({
      input: e.detail.value
    });
  },

  // 翻译
  async translate() {
    // 获取翻译文本
    let q = this.data.input;
    if (q.trim() === '') {
      this.setData({
        translation: '请输入'
      });
      return;
    }

    // 获取翻译
    let type = parseInt(this.data.index);
    let data = await trans(q, type);

    // 显示在页面上
    this.setData({
      translation: data
    });

  },

  // 选择语言
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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