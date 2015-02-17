var Players = Backbone.Collection.extend({
  model: Player
  //if it was connected to a server also enter the url
});

var collection = new Players();
console.log("players collection initialized");

var Bands = Backbone.Collection.extend({
  model: Music
});


collectionBands = new Bands();
console.log('band collection initialized');
