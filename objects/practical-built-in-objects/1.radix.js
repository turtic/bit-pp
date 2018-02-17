// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

'use strict';

function radix(number, radix) {

  return number.toString(radix);

}


console.log(radix(11111, 16));