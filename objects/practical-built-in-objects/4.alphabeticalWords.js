// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

'use strict';

function alphabeticalOrder(str) {

  return str.split("").sort().join("");

}


function alphabeticalWords(x) {

  var splitString = x.split(" ");

  for (var i = 0; i < splitString.length; i++) {

    splitString[i] = alphabeticalOrder(splitString[i]);

  }

  var joinArray = splitString.join(" ");

  return joinArray;

}



console.log(alphabeticalWords('this cat is blue'));