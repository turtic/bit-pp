// Write a function that can pad (left, right) a string to get to a determined length.

'use strict';

function padding(a, n, side) {

  var howMany = (n - a.length);

  var sum = '';

  for (var i = 0; i < howMany; i++) {
    if (side == 'left') {
      a = '=' + a;
    } else if (side == 'right') {
      a = a + '=';
    } else {
      return 'Error'
    }
   
  }

  return a;

}



console.log(padding('iii', 6, 'left'));
console.log(padding('iii', 10, 'right'));