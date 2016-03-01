define(["backbone"], function(Backbone) {
  var User = Backbone.Model.extend({
    defaults: {
      name: "user-model-definition"
    },

    initialize: function(name) {
    	this.set({name: name});
    },

    validate: function() {

    }
  });

  var assetEuqal = function(var1, var2){
  	if (val1 === var2) {
  		return true;
  	} else {
  		return false;
  	}
  }
  
  var user = new User('user-name-redefine');
  //assetEuqal(user.get('name'), 'user-name-redefine');
  return new User('user-name-redefine');
});
