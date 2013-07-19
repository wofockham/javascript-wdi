$(document).ready(function () {

  var create_boxes = function () {
    $('.color_box').each(function () {
      var color = $(this).text();
      $(this).css('background-color', color);
      $(this).text('').removeClass('invisible');
    });
  };

  create_boxes();

  var display_priority = function (priority) {
    var $li = $('<li/>');
    var $span1 = $('<span/>').addClass('color_box');
    var $span2 = $('<span/>');

    $span1.css('background-color', priority.color);
    $span2.text(priority.name);

    $li.append([$span1, $span2]);
    $('#priorities').append($li);

    toggle_form();

  };

  var create_priority = function () {
    var color = $('input.minicolors').minicolors('value');
    var name = $('#name').val();
    var value = $('#value').val();
    var token = $('input[name="authenticity_token"]').val();

    $.ajax({
      dataType: 'json',
      type: 'POST',
      url: '/priorities',
      data: {'authenticity_token': token, 'color': color, 'name': name, 'value': value}
    }).done(display_priority).error(function (message) {
    });

    return false;
  };

  var edit_priority = function () {
    debugger;
  };

  $('#priorities').on('click', '.color_box', edit_priority);

  var toggle_form = function () {
    $('#new_priority').toggle();
    $('.form').toggleClass('invisible');
    return false;
  }

  $('#new_priority, #cancel_priority').click(toggle_form);
  $('#create_priority').click(create_priority);


  $('input.minicolors').minicolors({
    animationSpeed: 100,
    animationEasing: 'swing',
    change: null,
    changeDelay: 0,
    control: 'hue',
    defaultValue: '#ffffff',
    hide: null,
    hideSpeed: 100,
    inline: false,
    letterCase: 'lowercase',
    opacity: false,
    position: 'default',
    show: null,
    showSpeed: 100,
    swatchPosition: 'left',
    textfield: false,
    theme: 'default'
  });
});

