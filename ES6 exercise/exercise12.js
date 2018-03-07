// Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8


'use strict'

function maxValue(a) {

  let max = a[0]

  a.forEach(function (element) {

    if (element > max) {
      max = element;
    }

  });

  return max;

}

console.log(maxValue([8, 7, 3, 8, 5.4]));