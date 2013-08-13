var Animal = Backbone.Model.extend({
  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: false
  },

  initialize: function () {
    //alert('I am an animal');
    this.on('change:type', function (model) {
      var type = model.get('type');
      alert(" I am now a " + type);
    });
  }

});

var Zoo = Backbone.Collection.extend({
  model: Animal
});

var ZooView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    this.list = $('#animals');
  },

  render: function () {
    this.$el.html( $('#zoo-template').html() );
    var template = Handlebars.compile($('#animal-template').html());
    this.collection.each(function (model) {
      this.list.append(template(model.toJSON()));
    }, this);
    return this;
  }

});

var animal = new Animal({
  type: 'giraffe',
  ecosystem: 'savanna'
});

var animal1 = new Animal({type: 'giraffe', ecosystem: 'savanna'});
var animal2 = new Animal({type: 'zebra', ecosystem: 'savanna', stripes: 52});
var animal3 = new Animal({type: 'giraffe', ecosystem: 'savanna'});

var gaZoo = new Zoo([animal1, animal2, animal3]);

$(document).ready(function () {
  var zooView = new ZooView({collection: gaZoo});
  zooView.render();
});









