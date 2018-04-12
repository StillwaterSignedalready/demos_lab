requirejs.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
  }
});

require([
  'ramda',
  'jquery'
],
function(_, $) {

  var trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
  });
  
  var Impure = {
    // 请求
    getJSON: _.curry(function(callback, url){
      $.getJSON(url, callback);
    }),
    // 改变UI
    setHTML: _.curry(function(sel, html){
      $(sel).html(html)
    })
  }

  var url = function (term) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
  };



  var img = function(url){
    return $('<img />', {src: url});
  }

  // prop函数
  var prop = _.curry(function(property, object){
    return object[property];
  });

  var mediaUrl = _.compose(_.prop('m'), _.prop('media'));

  var srcs = _.compose(_.map(mediaUrl), _.prop('items'));
  var images = _.compose(_.map(img), srcs)

  var renderImages = _.compose(Impure.setHTML("body"), images);
  // var app = _.compose(Impure.getJSON(trace("response")), url);
  var app = _.compose(Impure.getJSON(renderImages), url);
  

  app('cats');
});