var app = app || {};

// View for a single post.
app.PostView = Backbone.View.extend({
  el: '#main', // Where this is going to end up on the page.
  initialize: function () {

    this.model.on('change', this.render, this);

  },

  render: function () {
    var template = Handlebars.compile(app.templates.blogView);
    this.$el.html( template(this.model.toJSON()) );
    return this;
  }
});