var appInst =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    pwd:null,
    mail:null
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
    
  },
name:function(event){
    this.setData({
        name:event.detail.value
    })
},
mail:function(event){
    this.setData({
        mail:event.detail.value
    })
},
pwd:function(event){
    this.setData({
        pwd:event.detail.value
    })
},

register:function(){
    wx.request({
        url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://114.116.0.163/user/register',
        method:'post',
        data:{
            name:this.data.name,
            mail:this.data.mail,
            pwd:this.data.pwd
        },
        success:function(result){
            console.log(result)
            if(result.data.ConsultType==200){
                appInst.data.name=result.data.name
                wx.showToast({
                    title: '注册成功',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result) => {
                        
                    },
                    fail: () => {},
                    complete: () => {}
                });
                let pages = getCurrentPages();
                let prevPage = pages[pages.length - 2];
                prevPage.setData({
                    name:result.data.name
                })
                  wx.navigateBack({
                      delta: 1
                  });
                  console.log('现在的'+prevPage.data.name)
                //   console.log(appInst.data.name)
            }
            else{
                wx.showToast({
                    title: '注册失败，请重试',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result) => {
                        
                    },
                    fail: () => {},
                    complete: () => {}
                });
                  
            }
        }
    })
},
login:function(){
    wx.request({
        url:'http://114.116.0.163/user/login',
        method:'post',
        data:{
            mail:this.data.mail,
            pwd:this.data.pwd
        },
        success:function(result){
            if(result.data.ConsultType==200){
                appInst.data.name=result.data.name
                wx.showToast({
                    title: '登录成功',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result) => {
                        
                    },
                    fail: () => {},
                    complete: () => {}
                });
                wx.navigateBack({
                    delta: 1
                });
            }
            else{
                wx.showToast({
                    title: '登录失败，请重新登录',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result) => {
                        
                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
        }
    })
}
})