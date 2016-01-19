// var prompt = require("prompt");

// var uHealth = 100;
// var uFoodRations = 50;
// var uAxeDmg = 4;
// var uFifthSense = 0;
// var zHealth = 4;
// var zDmg = 5;
// var days = 0;
// var hitZombie = Math.random()>.5;
// var encounterZombie = Math.random()>.93;

// request( ,function(error, data){
// 	if(encounterZombie === true) {
// 		uFoodRations --;
// 	}

// });

var prompt = require("prompt");


// prompt.start();

// prompt.get(["pick a number 1-10", "email"], function(err, result){
// 	console.log("command-line input received:");
// 	console.log(" pick a number 1-10: " + result.pickanumber1-10);
// 	console.log(" email: " + result.email)
// });

  prompt.message = "Question!".rainbow;
  
 
  prompt.start();
 
  prompt.get({
    properties: {
      name: {
        description: "Pick a number between 1-10".blue
      }
    }
  }, function (err, result) {
    console.log("You said your name is: ".cyan + result.name.cyan);
  });

// var userHealth = 100;

// var zombieHP = 20;
// var attackValue = function damage(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
//   }

// var daysPassed =;

// var hitZombieChance = Math.random() > 0.5;
// var encounterZombieChance = Math.random() > 0.93;
// var findFoodChance;
// var findGunChance;


// if (encounterZombieChance === true) {
//   foodRations --;
// }

// if (foodRations === 0 && userHealth === 0) {
//   console.log("Wrecked");
//   return;
// }

// if (fifthSense < 5) {
//   var findFoodChance = Math.random() > 0.99;
//   var findGunChance = Math.random() > 0.99;
// }

// if (fifthSense < 7) {
//   var findFoodChance = Math.random() > 0.95;
//   var findGunChance = Math.random() > 0.95;
// }

// if (fifthSense < 10) {
//   var findFoodChance = Math.random() > 0.93;
//   var findGunChance = Math.random() > 0.93;
// }

// if (fifthSense === 10) {
//   var findFoodChance = Math.random() > 0.90;
//   var findGunChance = Math.random() > 0.90;
// }


