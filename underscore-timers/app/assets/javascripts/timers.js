$(document).ready(function () {

  var numbers = [];

  var add_number = function () {
    // Extract number and add it to our array.
    var number = parseInt($('#number').val());
    numbers.push(number);

    // Create a new box for our new number.
    create_number_box(number);
    $('#number').val('').focus();
  };

  $('#add_number').click(add_number);

  var square = function () {
    empty_boxes();
    numbers = _.map(numbers, function (n) {
      return n * n;
    });
    show_boxes();
  };

  var empty_boxes = function () {
    $('#boxes').empty();
  };

  var show_boxes = function () {
    _.each(numbers, create_number_box);
  };

  var create_number_box = function (n) {
    var $box = $('<div/>').addClass('box');
    $box.text(n);
    $('#boxes').prepend($box);
  };

  $('#square').click(square);

});



/*
  var arr = 'groucho harpo chico zeppo gummo'.split(' ');

  // Underscore version.
  _.each(arr, function (el, i) {
    //alert( 'element number ' + i + ': ' + el );
  });

  // Native JS version.
  for (var i = 0; i < arr.length; i++) {
    //alert( 'element number ' + i + ': ' + arr[i]);
  }

  var uppers = _.map(arr, function (brother) {
    return brother.toUpperCase();
  });

  console.log(arr, uppers);

  var features = {
    groucho: 'moustache',
    harpo: 'mute',
    chico: 'not really italian',
    zeppo: 'who cares'
  };

  console.log(_.keys(features));
  console.log(_.values(features));
*/
