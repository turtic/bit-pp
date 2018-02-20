// Write a function that checks if a given string is written in all capitals.
// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// Write a function named validator that returns an object with properties stringValidator, 
// passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).


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

function trueColor(s) {

  if (s[0] == '#') {

    s = s.substring(1);

  }

  //todo
  var x = parseInt(s, 16);

  if (!isNaN(x) && s.length == 6) {

    return true

  } else {

    return false
  }

}

function yearInterval(n) {

  if (n > 1900 && n < 2018) {

    return true;

  } else {

    return false;

  }

}

// Write a function named validator that returns an object with properties stringValidator, 
// passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function validator1() {

  return {
    stringValidator: isItAllCap,
    passwordValidator: areThereNum,
    colorValidator: trueColor,
    yearValidator: yearInterval
  };

}

var someNewObj = validator1();

console.log(someNewObj)

function validator() {

  this.stringValidator = isItAllCap;
  this.passwordValidator = areThereNum;
  this.colorValidator = trueColor;
  this.yearValidator = yearInterval;

}

var checker = new validator();

console.log(checker);

// console.log(checker.stringValidator('AAAA'));
// console.log(checker.stringValidator('AaAA'));

// console.log(checker.passwordValidator('AAAA'));
// console.log(checker.passwordValidator('AAAA1'));

// console.log(checker.colorValidator('#ffffff'));
// console.log(checker.colorValidator('#000000'));
// console.log(checker.colorValidator('ffafffasda'));

// console.log(checker.yearValidator('1234'));
// console.log(checker.yearValidator('134342'));
// console.log(checker.yearValidator('2000'));

