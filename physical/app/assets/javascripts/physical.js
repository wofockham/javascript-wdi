$(document).ready(function () {
  var show_chart = function () {
    var activity = $('#activities').val();

    $.ajax({
      dataType: 'json',
      type: 'get',
      url: '/exercises/chart/' + activity
    }).done(process_activity);
  };

  var process_activity = function (activities) {
    new Morris.Line({
      element: 'chart',
      data: [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 }
      ],
      xkey: 'year',
      ykeys: ['value'],
      labels: ['Value']
    });
  };

  $('#show_chart').click(show_chart);
});