// addCate  editCate  delCate

var article = {
  getCate: function(options) {
    $.ajax({
      url: ARTICLE_GET,
      success: options.callback
    });
  },
  addCate: function(options) {
    $.ajax({
      url: ARTICLE_ADD,
      type: 'post',
      data: options.data,
      success: options.callback
    });
  },
  editCate: function(options) {
    $.ajax({
      url: ARTICLE_EDIT,
      type: 'post',
      data: options.data,
      success: options.callback
    });
  },
  delCate: function(options) {
    $.ajax({
      url: ARTICLE_DEL,
      type: 'post',
      data: options.data,
      success: options.callback
    });
  }

}