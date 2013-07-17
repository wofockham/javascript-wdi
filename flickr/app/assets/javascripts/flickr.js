$(document).ready(function () {
  var index;
  var photos;
  var timer;

  var search_flickr = function () {
    var search = $('#search').val();
    var page = 1;

    var results = function (data) {
      var delay = parseInt($('#delay').val());
      delay = delay * 1000; // Convert seconds to milliseconds for setInterval()
      index = 0;
      photos = data.photos.photo;

      timer = setInterval(display_photo, delay);
    };

    var display_photo = function () {
      var photo = photos[index++];
      var width = $('#width').val();
      var height = $('#height').val();

      var url = "url(http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg)";
      var $image = $('<div>').addClass('image');
      $image.css({
        'background-image': url,
        'width': width,
        'height': height
      });

      $('#images').prepend($image);
      $image.hide().fadeIn();
    };

    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8f867234b61d2cbe2839b187ff4a203c&text=' + search + '&per_page=500&page=' + page + '&format=json&jsoncallback=?', results);
  };

  $('#flickr').click(search_flickr);

  var clear_photos = function () {
    $('#images').empty();
  };
  $('#clear').click(clear_photos);
});