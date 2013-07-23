$(document).ready(function () {

  var toggle_task_form = function () {
    $('.taskform').toggleClass('invisible');
    $('#new_task').toggle();
    return false;
  };

  var new_task = function () {
    $('#update_task').hide();
    $('#create_task').show();
    toggle_task_form();
  };

  var display_task = function (task) {
    var $li = $('<li/>');
    var $ul = $('<ul/>');

    var $li0 = $('<li/>').text(task.title);
    var $li1 = $('<li/>').text(task.description);
    var $li2 = $('<li/>').text(task.duedate);
    var $li3 = $('<li/>').text(task.priority);
    var $li4 = $('<li/>').text(task.address);

    $ul.append([$li0, $li1, $li2, $li3, $li4]);
    $li.append($ul);
    $('#tasks').append($li);

    add_marker(task.latitude, task.longitude, task.title);

  };

  var add_task_everywhere = function (task) {
    // Remove any old copy of this task from the array.
    tasks = _.reject(tasks, function (t) {
      return t.id === task.id;
    });

    tasks.push(task);

    // Fuck sorting.

    $('#tasks').empty();
    _.each(tasks, display_task);
  };

  var create_task = function () {
    var title = $('#title').val();
    var description = $('#description').val();
    var duedate = $('#duedate').val();
    var is_complete = $('#is_complete').val();
    var address = $('#address').val();
    var priority_id = $('#priority_id').val();
    var token = $('input[name="authenticity_token"]').val();

    $.ajax({
      dataType: 'json',
      type: 'POST',
      url: '/tasks',
      data: {
        authenticity_token: token,
        task: {
          title: title,
          description: description,
          duedate: duedate,
          is_complete: is_complete,
          address: address,
          priority_id: priority_id
        }
      }
    }).done(add_task_everywhere);

    return false;
  };

  $('#new_task').click(new_task);
  $('#cancel_task').click(toggle_task_form);
  $('#create_task').click(create_task);

});

// Map stuff

var map;
var canvas;

var add_marker = function (lat, long, title) {
  var latlng = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({position: latlng, map: map, title: title});
};

$(document).ready(function () {
  var display_map = function (lat, long, zoom) {
    canvas = $('#map_canvas')[0];

    if (! canvas) {
      return; // I QUIT
    }

    var mapOptions = {
      center: new google.maps.LatLng(lat, long),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(canvas, mapOptions);
  };

  display_map(-33.89336, 151.217167, 13);
});
