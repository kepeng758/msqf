因为小程序中多个页面都会使用分享，需要我们把分享功能，单独写在一个公用的文件中。util.js 文件中。
//分享功能

const shareEvent = (option, obj) => {
  let shareObj = {
    title: obj.title,
    path: obj.path,
    imgUrl: obj.imgUrl,
    success(res){
      // 转发成功之后的回调
　　　 if (res.errMsg == 'shareAppMessage:ok') {}
    }, 
    fail(res){
       // 转发失败之后的回调
　　　 if (res.errMsg == 'shareAppMessage:fail cancel') {
　　　 // 用户取消转发
　　　  } else if (res.errMsg == 'shareAppMessage:fail') {
　　　  // 转发失败，其中 detail message 为详细失败信息
　　　　}
    },
    complete(){
        // 转发结束之后的回调（转发成不成功都会执行）
    }
  };
  if (option.from === 'button') {
    // 来自页面内转发按钮
    console.log(option.target)
  }
  return shareObj;
}
在使用分享的页面中引入util.js

const util = require('./utils/util.js');
/**
用户点击右上角分享
*/
onShareAppMessage: function(option){
    console.log(option);
    let obj = {
      title: '我的老窝',
      path: 'pages/index/index',
      imageUrl: ''
    };
    return util.shareEvent(option, obj);
  }