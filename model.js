var Player = Backbone.Model.extend({
  defaults: {
    name: "Lindsay",
    age: "26",
    hobbies: ["javascript", "CSS", "HTML", "Live Music"],
    hometown: "Plainview, NY"
  },
  initialize: function(){
    console.log('Player Details');
  }
});


var player1 = new Player();
console.log("The Players name is " + player1.attributes.name + ". She is " + player1.attributes.age + " years old and is originally from " + player1.attributes.hometown);


var Music = Backbone.Model.extend({
  band: "Lucero",
  hometown: "Memphis",
  isTouring: true,
  initialize: function(){
    console.log("band initialized");
  }
});

var band = new Music();
