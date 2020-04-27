// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mass:'Hello world',
    img:'/images/create-collection.png',
    alist:[{
     name:'lixiaolong',
     age:18
     },{
        name: 'ligang',
        age:20
     }

    ],
    arrr:['a','b','c','d'],
    islogo:true,
    cont:0
      
  },
  ontaphander:function () {//设置数量
   this.setData({
     cont:this.data.cont+1
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