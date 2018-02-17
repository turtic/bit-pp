// Write a function to capitalize the first letter of a string.

'use strict';

function capitalizeFirstLetter (str) {

  // var firstLetter = str.charAt(0);
  // var firstLetterUpper = firstLetter.toUpperCase();
  // var restOfTheStr = str.slice(1);
  // var sumOfUpperAndRest = firstLetterUpper + restOfTheStr;
 
  // return sumOfUpperAndRest;

  return str.charAt(0).toUpperCase() + str.slice(1);

}

console.log(capitalizeFirstLetter('iiiii'));
