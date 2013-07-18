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

  var toggle_form = function () {
    $('#new_priority').toggle();
    $('.form').toggleClass('invisible');
    return false;
  }

  $('#new_priority, #cancel_priority').click(toggle_form);
  $('#create_priority').click(create_priority);
});

