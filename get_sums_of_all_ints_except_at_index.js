var fs = require("fs");

// var params = process.argv.sloce(2);

function sum(){
	fs.readFile("getSums.txt", "utf8", function(err, data){
		console.log(data);
	});
};