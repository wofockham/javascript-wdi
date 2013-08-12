$(document).ready(function () {

  var posts = [
    {
      title: 'Post title 1',
      price: 7,
      date: '2 weeks ago',
      body: 'Lorem impsum blah BLAH blah',
      author: {
        firstName: 'Barry',
        lastName: 'Burns'
      },
      comments: ['Great post', 'You are a <b>legend</b> mate', 'You bloody <strong>yobbo</strong>']
    },
    {
      title: 'Post title 2',
      price: 18,
      date: 'Yesterday',
      body: 'Lorem impsum blah blah blah',
      comments: ['<a href="http://hotlocalsingles.com/">Meet local singles in your area</a>']
    },
    {
      title: 'Post title',
      price: 27,
      date: 'Today',
      body: 'Lorem impsum blah blah blah',
      author: {
        firstName: 'Craigy',
        lastName: 'Burns'
      }
    }
  ];

  Handlebars.registerHelper('fullname', function (first, last) {
    return '<span class="first">' + first + '</span> <span class="last">' + last + '</span>';
  });

  Handlebars.registerHelper('priceWithGST', function (price) {
    var gstprice = price * 1.1;
    return gstprice.toFixed(2);
  });

  var template_f = Handlebars.compile($('#post_template').html()); // Turn it into a template function.

  var $posts = $('#posts');

  $.each(posts, function (i, post) {
    $posts.prepend(template_f(post));
  });
});