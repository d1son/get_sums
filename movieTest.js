var request = require('request');

request("http://www.omdbapi.com/?t=forgetting+sarah+marshall&y=&plot=short&r=json", function(error, response, body) {
  var movieObject = JSON.parse(body);
  console.log("the title is", body.Title);
});