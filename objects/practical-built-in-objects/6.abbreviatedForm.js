// Write a function to convert a string to its abbreviated form.

'use strict';

function abbreviatedForm(x) {

  var splitString = x.split(" ");
  var sum = '';
  
  for ( var i = 0; i < splitString.length; i++) {
    sum = sum + splitString[i][0]
  }

  return sum;

}



console.log(abbreviatedForm('best friends forever'));