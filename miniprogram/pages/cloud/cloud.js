// pages/cloud/cloud.js
const db=wx.cloud.database();
Page({
  onShareAppMessage(options) {
    console.log(options.webViewUrl)
  },
  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    
    imgages:[]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  
  sum:function(){//求和
    wx.cloud.callFunction({
      name:'sum',
      data:{
        a:50,
        b:100,
      },
    }).then(res=>{
    console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  getopenid:function(){//获取openid
    wx.cloud.callFunction({
      name:'login',
      
    }).then(res=>{
      console.log(res.result.openid)
    }).catch({

    })
  },
  removlistedate:function(){//批量删除数据
    wx.cloud.callFunction({
      name: 'bathDedet'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  inser: function () {//加入
   db.collection('user').add({
     data:{
      name:'zhiliye', 
      age:18
     }
   }).then(res=>{
      console.log(res)
   }).catch(err=>{
      console.log(err)
   })

  },
  update:function(){//更新
    db.collection('user').doc('94b1e1fc5d08965e03958de400ec69bf').update({
      data:{
        name:'哈哈'
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  search:function(){//查询
    db.collection("user").where({
      name: '哈哈'
    }).get().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  removedata:function(){//删除数据
    db.collection('user').doc('281fb4bf5d0896be03930e7b37b6f8ff').remove().then({}).catch({})
  },

  addimg:function(){//上传图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime()+'.png',
          filePath: tempFilePaths[0], // 文件路径
        }).then(res => {
          // get resource ID
          console.log(res.fileID)
          db.collection('img').add({
            data:{
              fileID: res.fileID
            }
          }).then(res=>{
            console.log(res)
            }).catch(error=>{
            console.log(error)
          })
        }).catch(error => {
          // handle error
          console.log(error)
        })

      }
    })


  },
  getfile:function(){//获取图片
     wx.cloud.callFunction({
       name:'login'
     }).then(res=>{
       db.collection('img').where({
         _openid: res.result.openid,
       }).get().
       then(res2 => {
        console.log(res2)
        this.setData({
          imgages: res2.data
        });
        
       }).catch(err => {
        
       });
     }).catch({

     });
  },
  downloadfile:function(event){//下载图片
    wx.cloud.downloadFile({
      fileID: event.target.dataset.fileid,
      success: res => {
        // get temp file path
        console.log(res.tempFilePath)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '保存成功',
            })
          }
        })
      },
      fail: err => {
        // handle error
        console.log(err)
      }
    })
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