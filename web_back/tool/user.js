// 这个user.js用来管理用户进行的所有接口请求操作
//    - 将页面中的功能提取到user.js后需要区别哪部分代码是与接口有关的，哪部分代码是与页面有关的
//      - 与接口有关的要留下，与页面有关的部分再放回到页面中，并通过传参方式传入
var user = {
  login: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback
    })
  },
  logout: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback
    })
  },
  getInfo: function(options) {
    $.ajax({
      url: USER_INFO,
      type: 'get',
      success: options.callback
    })
  },
  getAllInfo: function(options) {
    $.ajax({
      type: 'get',
      url: USER_INFO_GET,
      success: options.callback
    })
  },
  edit: function(options) {
    $.ajax({
      type: 'post',
      url: USER_INFO_EDIT,
      data: options.data,
      contentType: false,
      processData: false,
      success: options.callback
    })
  }
};