// Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

// 	Input: [3, -12, 4, 11]
// 	Output: no


'use strict'

function isPositive(a) {

    let largerThenZero = function (n) {
        return n > 0;
    }

    if (a.every(largerThenZero)) {
        return 'yes'
    } else {
        return 'no'
    }

}

console.log(isPositive([3, 11, 9, 5, 6]));

console.log(isPositive([3, -12, 4, 11]));