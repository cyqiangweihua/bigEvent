var article = {
  getCate: function(options) {
    $.ajax({
      url: ARTICLE_GET,
      success: options.callback
    });
  },
}