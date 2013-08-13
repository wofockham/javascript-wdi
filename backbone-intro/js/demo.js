var Animal = Backbone.Model.extend({
  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: false
  },

  initialize: function () {
    alert('I am an animal');
    this.on('change:type', function (model) {
      var type = model.get('type');
      alert(" I am now a " + type);
    });
  }

});

var animal = new Animal({
  type: 'giraffe',
  ecosystem: 'savanna'
});

var Zoo = Backbone.Collection.extend({
  model: Animal
});

var animal1 = new Animal({type: 'giraffe', ecosystem: 'savanna'});
var animal2 = new Animal({type: 'zebra', ecosystem: 'savanna', stripes: 52});
var animal3 = new Animal({type: 'giraffe', ecosystem: 'savanna'});

var gaZoo = new Zoo([animal1, animal2, animal3]);
