//Page Object
let app =  getApp();

  
Page({
    data: {
        globalData:null,
         source:null,
        name:null
      },
    //options(Object)
    onLoad: function(options){
        this.setData({
            // globalData:JSON.parse(options.receive),
            // wx.setStorageSync('obj', obj);
           globalData:app.data.all,
           source:app.data.source,
           name:options.name
            // arrayLength:app.data.all.data.result.xiangjie.length,
    
          })
        //   console.log('build :'+options.name)

    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    onPullDownRefresh: function(){

    },
    onReachBottom: function(){

    },
    onShareAppMessage: function(){

    },
    onPageScroll: function(){

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){

    }
});