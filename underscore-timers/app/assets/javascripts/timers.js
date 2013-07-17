$(document).ready(function () {

  var numbers = [];

  var add_number = function () {
    // Extract number and add it to our array.
    var number = parseInt($('#number').val());
    numbers.push(number);

    // Create a new box for our new number.
    var $box = $('<div/>');
    $box.addClass('box');
    $box.text(number);

    // Add box to page and reset the form.
    $('#boxes').prepend(box);
    $('#number').val('').focus();
  };

  $('#add_number').click(add_number);

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
