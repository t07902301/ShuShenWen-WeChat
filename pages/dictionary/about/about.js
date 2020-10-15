//Page Object
let app =  getApp();

Page({
    data: {
        gifList:null,
        name:[],
    },
    //options(Object)
    onLoad: function(options){
        this.setData({
            gifList:app.data.gif,
            name:options.name
            
        })
        // console.log(this.data.name)
        // console.log(this.data.gifList)

        // console.log(this.data.gifList["0"])
        // console.log(this.data.gifList["0"].han)

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

    },
    goBack:function(){
        wx.navigateBack({
          delta: 1
        });
      
      },
});