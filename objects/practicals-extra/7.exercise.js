// Write a function that checks if a given string is written in all capitals.
// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).


'use strict';

function isItAllCap(a) {

  var allCap = a.toUpperCase();

  if (a === allCap) {
    return true;
  } else {
    return false
  }

}

function areThereNum(a) {

  for (var i = 0; i < a.length; i++) {

    if (typeof parseInt(a[i]) === 'number' && parseInt(a[i]) + '' != NaN + '') {
      return true
    }
  }

  return false;

}

// function interval(a) {

//   if ()

//   return typeof parseInt('L');

// }

console.log(areThereNum('LS1DA sSD'));
