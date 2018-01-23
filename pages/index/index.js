//index.js
//获取应用实例
//Created by jinsheng.huang on 2018.01.23
const app = getApp()

Page({
  data: {
    userName: "",
    date: "",
    isEmailCorrect: true,
    emailErrorMessage: "",
    isMobileNumberCorrect: true,
    mobileNumberErrorMessage: "",
    isDataCorrect: false
  },
  //事件处理函数
  onLoad: function () {
    
  }, 
  bindUserNameChange: function (e) {
    this.setData({
      userName: e.detail.value
    })
    this.checkData();
  },
  bindEmailChange: function (e) {
    var email = e.detail.value;
    if (email.length == 5) {
      this.setData({
        isEmailCorrect: true,
      })
    } else {
      this.setData({
        isEmailCorrect: false,
        emailErrorMessage: "Please enter 11 numbers.",
      })
    }
    this.checkData();      
  }, 
  bindMobileNumberChange: function (e) {
    var mobileNumber = e.detail.value;
    if (mobileNumber.length == 11) {
      this.setData({
        isMobileNumberCorrect: true,
      })
    } else {
      this.setData({
        isMobileNumberCorrect: false,
        mobileNumberErrorMessage: "Please enter 11 numbers.",
      })
    }
    this.checkData();
  }, 
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.checkData();
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  checkData: function() {
    let isDataCorrect = (
      this.data.isMobileNumberCorrect &&
      this.data.isEmailCorrect &&
      this.data.userName.length != 0 &&
      this.data.date.length != 0
    );
    this.setData({
      isDataCorrect: isDataCorrect
    })
  }
})
