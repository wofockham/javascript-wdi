$(document).ready(function () {

  var create_boxes = function () {
    $('.color_box').each(function () {
      var color = $(this).text();
      $(this).css('background-color', color);
      $(this).text('').removeClass('invisible');
    });
  };

  create_boxes();

  var create_priority = function () {
    return false;
  };

  var show_form = function () {
    $('#new_priority').hide();
    $('.form').removeClass('invisible');
  };

  var hide_form = function () {
    $('#new_priority').show();
    $('.form').addClass('invisible');
  }

  $('#new_priority').click(show_form);
  $('#create_priority').click(create_priority);
  $('#cancel_priority').click(hide_form);
});

