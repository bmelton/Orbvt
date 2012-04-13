Posts = new Meteor.Collection("Orbvt");
default_message = "This is the first post on the Orbvt (and cannot be destroyed), the somewhat ridiculous Svbtle clone built on the significantly less ridiculous Meteor application framework.  The admin console is *no longer* the Javascript console.  Now I have to build one."; 

Properties = new Meteor.Collection("Properties");

months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

if (Meteor.is_client) {
  Template.stamp.stamp = function() { 
    var d = new Date();
    month = months[d.getMonth()];
    day   = d.getDay();
    year  = d.getFullYear();
    return month + "&nbsp;&nbsp;&nbsp;" + day + ",&nbsp;&nbsp;&nbsp;" + year ;
  };
  Template.stamp.events = {
    'click #new_post': function(event) { 
      post = {title: 'New post', author: 'bmelton', content: new Date() + ' is when you created this new post.', date: 'April 11', timestamp: new Date()};
      Posts.insert(post);
    }
  }

  Template.orbvt.posts = function() { 
    // collection.find({}, {'skip':1, 'limit':1, 'sort':'a'},
    return Posts.find({}, {sort: {timestamp: -1}});
  };

  Template.properties.properties = function() {
    return Properties.find();
  };

  Template.orbvt.events = {
    'click h1': function(event) { 
      event.preventDefault();
    },
    'click .destroy': function (event) {
      Posts.remove(event.currentTarget.id);
      if(Posts.find().count() == 0) { 
        var post = {title: 'Test post', author: 'bmelton', content: default_message, date: 'April 11', timestamp: new Date()};
        Posts.insert(post);
      }
    }
  }
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    if(Posts.find().count() === 0) { 
      var post = {title: 'Test post', author: 'bmelton', content: default_message, date: 'April 11', timestamp: new Date()};
      Posts.insert(post);
     }

    if(Properties.find().count() == 0) {
      Properties.insert({name: "@bmelton",  		type: "link", href : "http://twitter.com/bmelton/"});
      Properties.insert({name: "github.com/bmelton",   	type: "link", href : "http://github.com/bmelton/"});
      Properties.insert({name: "sympodial.com", 	type: "link", href : "http://sympodial.com/"});
    }
  });

  // Meteor.default_server.method_handlers['/Posts/insert'] = function () {};
  // Meteor.default_server.method_handlers['/Posts/remove'] = function () {};
  // Meteor.default_server.method_handlers['/Posts/update'] = function () {};
}
