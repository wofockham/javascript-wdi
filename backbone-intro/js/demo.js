var Animal = Backbone.Model.extend({
  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: false
  },

  initialize: function () {
    alert('I am an animal');
    this.on('change type', function (model) {
      var type = model.get('type');
      alert(" I am now a " + type);
    });
  }

});