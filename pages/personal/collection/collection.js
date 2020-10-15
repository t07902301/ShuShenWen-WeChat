//Page Object
Page({
    data: {
        lastX: 0,     //滑动开始x轴位置
        lastY: 0,     //滑动开始y轴位置
        text: "没有滑动",
        currentGesture: 0, //标识手势
       },
    //options(Object)
    onLoad: function(options){
        
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
        
        //滑动移动事件
        handletouchmove: function (event) {
         var currentX = event.touches[0].pageX
         var currentY = event.touches[0].pageY
         var tx = currentX - this.data.lastX
         var ty = currentY - this.data.lastY
         var text = ""
         //左右方向滑动
         if (Math.abs(tx) > Math.abs(ty)) {
          if (tx < 0)
           text = "向左滑动"
          else if (tx > 0)
           text = "向右滑动"
         }
         //上下方向滑动
         else {
          if (ty < 0)
           text = "向上滑动"
          else if (ty > 0)
           text = "向下滑动"
         }
       
         //将当前坐标进行保存以进行下一次计算
         this.data.lastX = currentX
         this.data.lastY = currentY
         this.setData({
          text: text,
         });
        },
       
        //滑动开始事件
        handletouchtart: function (event) {
         this.data.lastX = event.touches[0].pageX
         this.data.lastY = event.touches[0].pageY
        },
        //滑动结束事件
        handletouchend: function (event) {
         this.data.currentGesture = 0;
         this.setData({
          text: "没有滑动",
         });
        },
});