// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100. 
// Write a function which expects a number and a callback generator function and returns an array of numbers produced by the factory function.    

'use strict'
function randNum(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);

  return parseInt(((max - min) * Math.random()) + min);


}


console.log(randNum(20, 5));