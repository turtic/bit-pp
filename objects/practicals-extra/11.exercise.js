// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100. 
// Write a function which expects a number and a callback generator function and returns an array of numbers produced by the factory function.    

'use strict'

function randNum(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);

  return parseInt(((max - min) * Math.random()) + min);

}
// var fromFiveToTwenty = randNum(5, 20);

// var test2 = (function randNum(a, b) {
//   var min = Math.min(a, b);
//   var max = Math.max(a, b);

//   return parseInt(((max - min) * Math.random()) + min);

// })(5, 20)

// console.log(fromFiveToTwenty);
// console.log(test2);

function randNum520() {
  
  return parseInt(15 * Math.random() + 5);

}

function randNum50100() {
  
  return parseInt(50 * Math.random() + 50);

}




function randomNumArray(n, f) {
  var z = [];

  for (var i = 0; i < n; i++) {

    z.push(f());

  }
  return z;

}

console.log(randomNumArray(10, randNum520));

console.log(randomNumArray(10, randNum50100));