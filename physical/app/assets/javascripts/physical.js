$(document).ready(function () {
  var show_chart = function () {
    var activity = $('#activities').val();

    $.ajax({
      dataType: 'json',
      type: 'get',
      url: '/exercises/chart/' + activity
    }).done(process_activity);
  };

  var process_activity = function () {

  };

  $('#show_chart').click(show_chart);
});