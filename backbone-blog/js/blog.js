$(document).ready(function () {

  var templates = {
    appView: '<h1>Recent Posts</h1><ul id="posts"></ul>',
    blogList: '{{ title }}',
    blogView: '<div class="post"><h1 class="title">{{ title }}</h1><h3 class="slug">{{ slug }}</h3><div class="content">{{{ content }}}</div></div>'
  };

  var Post = Backbone.Model.extend({
    idAttribute: 'slug',

    defaults: {
      title: 'New post',
      slug: 'new-post',
      content: 'content'
    }
  });

  var Posts = Backbone.Collection.extend({
    model: Post
  });

  var PostListView = Backbone.View.extend({
    tagName: 'li',

    events: {
      'click': 'view'
    },

    initialize: function () {
    },

    render: function () {
      var template = Handlebars.compile( templates.blogList );
      this.$el.html( template(this.model.toJSON()) );

      return this;
    },

    view: function () {
      // TARUN HOMEWORK: Try it without the true.
      app.navigate('posts/' + this.model.get('slug'), true);
    }
  });

  var PostView = Backbone.View.extend({
    el: '#main',
    initialize: function () {
      var template = Handlebars.compile(templates.blogView);
      this.$el.html( template(this.model.toJSON()) );
    }
  });

  var AppView = Backbone.View.extend({
    el: '#main',
    initialize: function () {
      this.$el.html( templates.appView );
      this.list = $('#posts');
    },

    render: function () {
      this.collection.each(function (post) {
        var view = new PostListView({ model: post} );
        this.list.append( view.render().el );
      }, this);
      return this;
    }
  });

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'posts/:slug': 'getPost'
    },
    initialize: function (options) {
      this.options = options;
      this.posts = new Posts([
        new Post({title: 't1', slug: 't1', content: 'Test one'}),
        new Post({title: 't2', slug: 't2', content: 'Test two'}),
        new Post({title: 't3', slug: 't3', content: 'Test three'}),
        new Post({title: 't4', slug: 't4', content: 'Test four'})
      ]);
    },

    index: function () {
      var appView = new AppView({collection: this.posts});
      appView.render();
    },

    getPost: function (slug) {
      var post = this.posts.get(slug);
      new PostView({model: post});
    }
  });

  var app = new AppRouter();
  Backbone.history.start({pushState: true});

  Backbone.history.on('route', function () {
    var fragment = Backbone.history.getFragment();
    console.log('The user navigated to', fragment);
  });

});








