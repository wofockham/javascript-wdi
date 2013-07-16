$(document).ready(function () {
  var validate_age = function () {
    var age = parseInt($('#age').val());
    if (age >= 18) {
      $('p.status').text('Welcome').addClass('green');
    } else {
      $('p.status').text('Sorry').addClass('red');
    }
  };

  $('#age').blur(validate_age);
  // US keyboard layout
  var codes = {
    65: 'A',
    97: 'a',
    13: 'Return'
  }

  $(document).keypress(function (event) {
    $('#which').text( codes[event.which] );
    if (codes[event.which] === 'a') {
      console.log('the letter a was pressed');
    }
    if (event.which === 65) {
      console.log('the letter A was pressed');
    }
    if (event.which === 13) { // Enter
      $('body').fadeOut(6000);
    }
    console.log(event);
  });


  $(document).mousemove(function (event) {
    $('#x').text(event.pageX);
    $('#y').text(event.pageY);

    if (event.pageX > 400) {
      $('#x').css('color', 'red');
    } else {
      $('#x').css('color', 'green');
    }

    if (event.pageY > 200) {
      $('#y').css('color', 'red');
    } else {
      $('#y').css('color', 'green');
    }

    var red = ((event.pageX * event.pageY) % 256);
    var green = ((event.pageX * event.pageY * 2) % 256);
    var blue = ((event.pageX * event.pageY * 3) % 256);
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    $('body').css('background-color', color);

  });

/*
  var blur_func = function () {
    console.log('blur');
  }

  var change_func = function () {
    console.log('change');
  }

  var focus_func = function () {
    console.log('focus');
  }

  $('#name').blur(blur_func);
  $('#name').change(change_func);
  $('#name').focus(focus_func);

  $("body").mousemove(function (event) {
    // What's all this event business?
    console.log ( 'Mouse x, y: ', event.pageX, event.pageY, event);
  });

  $('li').mouseover(function (event) {
    $('li').css('border', 'none');

    console.log(this, 'was the subject');

    $(this).css('border', '1px dashed #888');
  });

  $('a').click(function (event) {
    event.preventDefault(); // Do nothing!
    console.log( event );
  })
*/
});