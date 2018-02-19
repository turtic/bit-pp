// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

'use strict';

function antiDuplicator(a) {

  var z = [];
  a = a.sort(
    function sortNumber(a, b) {
      return a - b;
    });

  for (var i = 0; i < a.length; i++) {

    for (var j = 0; j < a.length; j++) {

      if (a[i] == a[j] && i != j) {
        delete a[j];
      }
    }
  }

  for (var i = 0; i < a.length; i++) {
    if (a[i] != undefined) {
      z.push(a[i]);
    }

   }


  return z;
}


console.log(antiDuplicator([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));