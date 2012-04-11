Posts = new Meteor.Collection("Orbvt");
if (Meteor.is_client) {
  Template.orbvt.posts = function() { 
    return Posts.find();
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    if(Posts.find().count() === 0) { 
      var post = {title: 'Test post', author: 'bmelton', date: 'April 10'};
      Posts.insert(post);
     }
  });
}
