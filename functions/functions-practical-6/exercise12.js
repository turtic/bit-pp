// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

// Input: [1,2,3,4,5,6]  Output: 11.5

'use strict'



var average = function (a) {
    var sum = 0;
    var i;
    
    for (i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum / a.length;
}

console.log(average([1, 1, 1]));

console.log(average([1, 2, 3, 4, 5, 6, 7]));

console.log(average([1, 2, 3, 4, 5, 6, 8, 9]));





