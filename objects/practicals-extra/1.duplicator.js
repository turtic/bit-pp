// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

'use strict';

function duplicator(a) {

  var z=[];

  for (var i=0; i<a.length; i++) {
    z.push(a[i]);
    z.push(a[i]);
  }

  return z;
}


console.log(duplicator([2, 4, 7, 11, -2, 1]));