
// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

'use strict';

function swapsTheCase(str) {

  var a = str.split('');

  for (var i = 0; i < a.length; i++) {

    if (a[i] === a[i].toUpperCase()) {
      a[i] = a[i].toLowerCase()
    } else {
      a[i] = a[i].toUpperCase()
    }

  }

  return a.join("");

}

console.log(swapsTheCase('The Quick Brown Fox!'));
