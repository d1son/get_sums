// create an app that check's the user's zipcode input and check the weather for that zipcode
// if its 45 or below console.log a sad movie 
// if temp is between 45 and 60 (inclusive) console.log the json data for "Norwegian Ninja"
// if it is above 60 then console.log an action movie (make sure it has Michael Biehn in it)
// Kelvin to Fahrenheit This will help ºF =(K - 273.15)* 1.8000 + 32.00

var zipcode = process.argv.slice(2)
var request = require("request");

request('http://api.openweathermap.org/data/2.5/weather?zip='+ zipcode + ',us&appid=469f9b8828c74cb1f6b76164b7e9e1fc', function (error, response, body){
	// var weather = JSON.parse(body);
	if (!error && response.statusCode == 200) {
  	body = JSON.parse(body);
  	var temp = (parseFloat(body.main.temp) - 273.15) * 1.8000 + 32.00;
  	console.log(temp);
  	if(temp < 45){
  		request("http://www.omdbapi.com/?t=sad+movie&y=&plot=short&r=json", function (error, response, body){
  			console.log(body);
  		});
  	} else if (temp >= 45 && temp <= 60) {
  		request("http://www.omdbapi.com/?t=norwegian+ninja&y=&plot=short&r=json", function (error, response, body){
  			console.log(body);
  		});
  	} else {
  		request("http://www.omdbapi.com/?t=the+terminator&y=&plot=short&r=json", function (error, response, body){
  			console.log(body);
  		});
  	}
  }
	console.log(body);
});

