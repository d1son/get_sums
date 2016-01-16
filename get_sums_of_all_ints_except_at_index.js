// var fs = require("fs");

// // var params = process.argv.sloce(2);

// function sum(){
// 	fs.readFile("getSums.txt", "utf8", function(err, data){

// 	});
// };

// create an array using the numbers 1,3,7,4
// create a function that returns the added numbers 
// inside the function, add econd, and third, fourth numbers
// don't add 1 in the first element

// add the first, third, and fourth numbers
// return sum

// add the first, second and fourth number
// return the sum

//add the first, second and third
// return the sum





console.log(process.argv)

var myArray = process.argv.slice(2); 
// .slice has to be () not [], .slice is  function so you need () to pass a value
var sum = 0;
var sumArray = [];


for (var i=0; i < myArray.length; i++) {
	sum = 0;
	for (var j=0; j < myArray.length; j++) {
		if(i!==j) {
			sum+=parseFloat(myArray[j]);
		}
		sumArray[i]=sum
	}
}
console.log(sumArray);


