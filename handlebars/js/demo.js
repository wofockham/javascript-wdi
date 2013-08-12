$(document).ready(function () {

  var post = {
    title: 'Post title',
    date: 'Yesterday',
    body: 'Lorem impsum blah blah blah'
  };

  var template_str = $('#post_template').html(); // Fetch the HTML
  var template_f = Handlebars.compile(template_str); // Turn it into a template function.

  var new_post = template_f(post);

  $('#posts').append(new_post);
});