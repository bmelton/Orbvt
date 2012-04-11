Posts = new Meteor.Collection("Orbvt");
default_message = "This is the first post on the Orbvt (and cannot be destroyed), the somewhat ridiculous Svbtle clone built on the significantly less ridiculous Meteor application framework.  The admin console is your Javascript console.  To create a new message, try this: Posts.insert({title: 'Example Post', author: 'your name', date: 'Today', content: 'This is an example post!'});"

if (Meteor.is_client) {
  Template.orbvt.posts = function() { 
    return Posts.find({}, {}, 10, 0);
  };

  Template.orbvt.events = {
    'click h1': function(event) { 
      event.preventDefault();
    },
    'click .destroy': function (event) {
      console.log(event.currentTarget.id);
      Posts.remove(event.currentTarget.id);
      if(Posts.find().count() == 0) { 
        console.log("Empty!");
        var post = {title: 'Test post', author: 'bmelton', content: default_message, date: 'April 11'};
        Posts.insert(post);
      }
    }
  }
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    if(Posts.find().count() === 0) { 
      var post = {title: 'Test post', author: 'bmelton', content: default_message, date: 'April 11'};
      Posts.insert(post);
     }
  });
}
