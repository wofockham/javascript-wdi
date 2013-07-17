$(document).ready(function () {

  var search_flickr = function () {
    var search = $('#search').val();
    var page = 1;

    // "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
    // http://farm4.static.flickr.com/3729/9303278039_e0a7479796_m.jpg

    var results = function (data) {
      console.log('inside results');
      _.each(data.photos.photo, display_photo);
    };

    var display_photo = function (photo) {
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
    };

    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8f867234b61d2cbe2839b187ff4a203c&text=' + search + '&per_page=500&page=' + page + '&format=json&jsoncallback=?', results);
    console.log('after getJSON');
  };

  $('#flickr').click(search_flickr);

  var clear_photos = function () {
    $('#images').empty();
  };
  $('#clear').click(clear_photos);
});