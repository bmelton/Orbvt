Orbvt
====
See it at [orbvt.meteor.com](http://orbvt.meteor.com)

Orbvt is a [Svbtle](http://svbtle.com/) clone written in written on the [Meteor Application Framework](http://meteor.com).  

It's a little bit on the ridiculous side at the moment, as there aren't any permissions anywhere (so no need to both writing an admin utility), but you can create posts by adding them directly in your JS console.  

An example: 
> post = {title: "Example Post", author: "bmelton", date: "April 11", content: "This is example content."}

> Posts.insert(post);

As the auth module for minimongo evolves in Meteor, this should prove to be much more useful. 

Thanks to [dcurtis](http://dcurt.is/) for Svbtle, and [Nate Weinert](http://natewienert.com/) for Obtvse, from which I completely ripped the style and layout.


