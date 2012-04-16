months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

var today = function() { 
  var d = new Date();
  month = months[d.getMonth()];
  day   = d.getDate();
  year  = d.getFullYear();
  return month + " " + day + ", " + year ;
}
