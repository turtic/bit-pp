// Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its last position in the array.


'use strict';

function smallestObj(a) {

  // var min = Math.min(a);

  var min = a[0];
  var indexMin = 0;
  for (var i = 0; i < a.length; i++) {

    if (a[i] < min) {
      min = a[i];
      indexMin = i;
    }

  }

  function ourObject(min, indexMin) {

    this.value = min;
    this.index = indexMin;
  }

  var h = new ourObject(min, indexMin);

  return h;
}


console.log(smallestObj([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));