Posts = new Meteor.Collection("Orbvt");
if (Meteor.is_client) {
  Template.orbvt.posts = function() { 
    return Posts.find();
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // if(Posts.find().count() === 0) { 
      // var post = {title: 'Test post', author: 'bmelton', content: 'This is the first test on our somewhat ridiculous Svbtle clone that we built with the significantly less ridiculous <a href="http://meteor.com/" target="_blank">Meteor application framework</a>.',date: 'April 11'};
      // Posts.insert(post);
     // }
  });
}
