// Write a JavaScript function that reverses a number.

'use strict';

function reverseNumber(x) {
 
  var str = x + ""; ;

  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;

}


console.log(reverseNumber(123456));