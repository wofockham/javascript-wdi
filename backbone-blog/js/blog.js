$(document).ready(function () {
  // Dictionary of templates (these could otherwise be hidden in <script> tags)
  var templates = {
    appView: '<h1>Recent Posts</h1><ul id="posts"></ul>',
    blogList: '<a href="#/posts/{{ slug }}">{{ title }}</a>',
    blogView: '<div class="post"><h1 class="title">{{ title }}</h1><h3 class="slug">{{ slug }}</h3><div class="content">{{{ content }}}</div></div>'
  };


  // View for a single post.
  var PostView = Backbone.View.extend({
    el: '#main', // Where this is going to end up on the page.
    initialize: function () {
      // Weird. We're rendering from the initialize(). Probably don't do this.
      var template = Handlebars.compile(templates.blogView);
      this.$el.html( template(this.model.toJSON()) );
    }
  });

  // View for the entire app.
  var AppView = Backbone.View.extend({
    el: '#main', // Where this is going to end up on the page.
    initialize: function () {
      this.$el.html( templates.appView ); // Not using Handlebars so no need to compile.
      this.list = $('#posts'); // Caching the #posts for later use.
    },

    render: function () {
      this.collection.each(function (post) {
        var view = new PostListView({ model: post} ); // New view for each post.
        this.list.append( view.render().el ); // Bung it on the end of the list.
      }, this); // Pass in `this` as the scope of our each().
      return this; // Allow chaining again.
    }
  });

});








