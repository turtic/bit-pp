// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

'use strict'

function alphabeticalOrder(str) {

  
  // var splitString = str.split("");

  // var sortedString = splitString.sort();

  // var joinArray = sortedString.join("");

  // return joinArray;

  return str.split("").sort().join("");
}



console.log(alphabeticalOrder('asfafagcasebgaeghtdjuyj'));