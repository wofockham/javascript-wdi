// control the include order of our backbone app

//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var app = app || {};

app.templates = {
  appView: '<h1>Recent Posts</h1><ul id="posts"></ul>',
  blogList: '<a href="#/posts/{{ slug }}">{{ title }}</a>',
  blogView: '<div class="post"><h1 class="title">{{ title }}</h1><h3 class="slug">{{ slug }}</h3><div class="content">{{{ content }}}</div><ul class="comments"></ul></div>',
  commentList: '<p>{{dateFormat created_at}} - {{twaddle}}</p>'

};

$(document).ready(function () {

  Handlebars.registerHelper('dateFormat', function(date) {
    var date = new Date(date);
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
  });

  app.router = new app.AppRouter();
  Backbone.history.start();
});