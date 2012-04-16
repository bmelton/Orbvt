Posts = new Meteor.Collection("Posts");
Properties = new Meteor.Collection("Properties");

Meteor.methods({ 
  test: function() { 
    Posts.insert({title: "INSERTED", author: "bmelton", date: "April 12", content: "Inserted from method."});
  }
});

var jankystring = "abcdabcdblmblm";

Meteor.startup(function () {
  if(Posts.find().count() === 0) {
    var default_message = "Hello world.";
    var post = {
	title: 'Test post', 
	author: 'bmelton', 
	content: default_message, 
	date: 'April 11', 
	timestamp: new Date()
    };
  }

  if(Properties.find().count() == 0) {
    Properties.insert({name: "@bmelton",              type: "link", href : "http://twitter.com/bmelton/"});
    Properties.insert({name: "github.com/bmelton",    type: "link", href : "http://github.com/bmelton/"});
    Properties.insert({name: "sympodial.com",         type: "link", href : "http://sympodial.com/"});
  }
  // Meteor.default_server.method_handlers['/Posts/insert'] = function () {};
  // Meteor.default_server.method_handlers['/Posts/remove'] = function () {};
  // Meteor.default_server.method_handlers['/Posts/update'] = function () {};
});
