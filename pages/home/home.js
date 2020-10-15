//Page Object

var app = getApp();
Page({
    data: {
    getInuput:null,
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

    inputBind:function(event){
        this.setData({
            getInuput:event.detail.value,
        },
        // app.data.all=event.detail.value,

        );
        // console.log(this.data.getInuput)
        // console.log(app.data.all)

    },
    query:function(){
        var that=this;
        wx.request({
            data: {
                key:'5859bda21f1991ffe8b90769677cc889',
                word:that.data.getInuput,
                // word:'好'
            },
          url: 'https://v.juhe.cn/xhzd/query',  
            header: {'content-type':'application/json'},
            type: 'POST',
            dataType: 'json',
            success: (result)=>{    //回调函数，识别汉字
                app.data.all=result,
                console.log(result)
                wx.navigateTo({
                    // url: './more/more?receive='+JSON.stringify(result),
                    url:'/pages/home/more/more',
                    // url: './more/more?receive='+JSON.stringify(result),

                    success: (result)=>{
                        
                    },
                    fail: ()=>{},
                    complete: ()=>{}
                });
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    recognize:function(event){   //调用摄像头或从相册中选取照片
        console.log(event)
        var that=this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original','compressed'],
            sourceType: ['album','camera'],
            success: (result)=>{
                //将得到的照片暂时保存
                var tempFilePaths = result.tempFilePaths;
                console.log('本地图片的路径:', tempFilePaths )
              that.upload(tempFilePaths)
            },
            fail: ()=>{
            },
            complete: ()=>{}
        });
       
    },
    
    upload:function(tempFilePaths){
        var that=this;
        app.data.source=tempFilePaths;
            wx.showToast({
            icon: "loading",
            title: "正在上传"
            });
            wx.uploadFile({
                  url: 'https://chinesechars.natapp1.cc/upload',
                filePath: tempFilePaths[0],
                name: 'file',
                //和服务器约定的token, 一般也可以放在header中
                // formData: {
                //   'user': 'test'
                // },
                success (result){
                    that.setData({
                        getInuput:JSON.stringify(result.data)['18'],
                    })
                 var charName=JSON.stringify(result.data)['18']+JSON.stringify(result.data)['19']+JSON.stringify(result.data)['20']+JSON.stringify(result.data)['21']+JSON.stringify(result.data)['22']+JSON.stringify(result.data)['23']
                 console.log(app.data.charName)
                    wx.request({
                        data: {
                            key:'5859bda21f1991ffe8b90769677cc889',
                            word:that.data.getInuput,
                        },
                      url: 'https://v.juhe.cn/xhzd/query',  
                        header: {'content-type':'application/json'},
                        type: 'POST',
                        dataType: 'json',
                        success: (result)=>{    //回调函数，识别汉字
                            
                            app.data.all=result,
                            wx.navigateTo({
                                url:'/pages/home/introduction/introduction?name='+charName,
            
                                success: (result)=>{
                                    
                                },
                                fail: ()=>{},
                                complete: ()=>{}
                            });
                            
                        },
                        fail: ()=>{},
                        complete: ()=>{}
                    });
                 
                }
                });
            },
        })