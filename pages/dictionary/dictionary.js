//Page Object
var appInst =  getApp();

Page({
    data: {
        target:{'fileName':'','titleName':''}
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
    sendRequest:function(){
        wx.request({
            url: 'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://114.116.0.163/getdic/'+this.data.target.fileName,
            data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                console.log(result)
                appInst.data.gif=result.data
               
            },
            fail: () => {},
            complete: () => {}
        });
        wx.navigateTo({
            url: '/pages/dictionary/about/about?name='+this.data.target.titleName,
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    onTap:function(event){
        // console.log(event)
        if(event.currentTarget.id=='商'){
            this.setData({
                target:{'fileName':'jia','titleName':'甲骨文'}
            })
            this.sendRequest()
        }
        else if(event.currentTarget.id=='夏'){
            this.setData({
                target:{'fileName':null,'titleName':'这时候啥都没有'}
            })
            this.sendRequest()

        }
         else if(event.currentTarget.id=='周'||event.currentTarget.id=='春'){
            this.setData({
                target:{'fileName':'jin','titleName':'金文'}
            })
            this.sendRequest()
        }
        else if(event.currentTarget.id=='汉'||event.currentTarget.id=='三'){
            this.setData({
                target:{'fileName':'li','titleName':'隶书'}
            })
            this.sendRequest()
        }
        else if(event.currentTarget.id=='宋'||event.currentTarget.id=='元'){
            this.setData({
                target:{'fileName':'cao','titleName':'草书'}
            })
            this.sendRequest()
        }
        else if(event.currentTarget.id=='晋'||event.currentTarget.id=='南'||event.currentTarget.id=='隋'||event.currentTarget.id=='中'||event.currentTarget.id=='唐'||event.currentTarget.id=='五'||event.currentTarget.id=='明'||event.currentTarget.id=='清'||event.currentTarget.id=='民'){
            this.setData({
                target:{'fileName':'kai','titleName':'楷书'}
            })
            this.sendRequest()
        }

    }
});