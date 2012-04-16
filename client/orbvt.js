Posts = new Meteor.Collection("Posts");
Properties = new Meteor.Collection("Properties");
nPosts = new Meteor.Collection("nPosts");

if (Meteor.is_client) {
  Template.stamp.stamp = function() { 
    return today();
  };

  Template.stamp.events = {
    'click #new_post': function(event) { 
      Meteor.call("test");
    }
  }

  Template.orbvt.posts = function() { 
    posts = Posts.find({}, {sort: {timestamp: 1}}).fetch();
    return posts.slice(0,10); 
    // return Posts.find({}, {sort: {timestamp: -1}});
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
        var post = {title: 'Test post', author: 'bmelton', content: "Hello", date: 'April 11', timestamp: new Date()};
        Posts.insert(post);
      }
    }
  }
}

Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});

var self = this;
var Router = Backbone.Router.extend({
  routes: {
    "": "main",
    "new": "new"
  },
  main: function() { 
    console.log("Yo yo");
  },
  new: function() { 
    console.log("New");
  }
});

Router = new Router;

Eve.scope("#test", function() { 
  this.listen("li.nav", "click", function() {
    console.log("HOLLA");
  });
});
