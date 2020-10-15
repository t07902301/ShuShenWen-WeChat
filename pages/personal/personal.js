//Page Object
//获取应用实例
// var appInst =  getApp();
Page({
    data: {
    name:null,

    },
    //options(Object)
    onLoad: function(options){
      // appInst.data.name=null;
      // appInst.data.pwd=null;
      // appInst.data.mail=null;
      // console.log(this.data.name)
      this.setData({
        name:null
      })

    },
    onReady: function(){
        
    },
    onShow: function(){
      var that=this;
      let pages =  getCurrentPages();
      var current=pages[pages.length-1];
      if(current.data.name){
        that.setData({
          name:current.data.name
        })
      }
        console.log('f返回后的'+that.data.name)
        
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
    //清除缓存
    cleanBuffer:function(){
       
    },
    onTap:function(){
        wx.navigateTo({
            url: '../personal/authorize/authorize',
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    //退出 将userInfo清零
    exit:function(){
      appInst.data.userInfo='';
    },
 
});