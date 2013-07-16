$(document).ready(function () {

  var create_paint_boxes = function (boxes) {
    for (var i = 0; i < boxes; i++) {
      var $paint = $('<div/>').addClass('paint');
      $('#canvas').append($paint);
    }
  };
  create_paint_boxes(5000);

  var paint_box = function () {
    var $box = $(this);
    var color = $('#current').css('background-color');
    $box.css('background-color', color);
  };
  $('.paint').click(paint_box);
  $('.paint').mouseover(paint_box);

  var clear_colors = function () {
    $('#colors').empty();
    $('#current').css('background-color', 'white');
  }
  $('#clear').click(clear_colors);


  var add_color = function () {
    var color = $('#color').val();

    var $box = $('<div/>');
    $box.addClass('box');
    $box.css('background-color', color);
    $box.text(color);

    $('#colors').prepend($box);
    $('#color').val('').focus();

    //$box.click(set_color);
  };
  $('#add_color').click(add_color);


  var set_color = function () {
    var $box = $(this);
    var color = $box.css('background-color');

    $('#current').css('background-color', color);
  };
  $('#colors').on('click', '.box', set_color);
});