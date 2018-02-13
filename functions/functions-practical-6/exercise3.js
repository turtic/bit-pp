// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

'use strict'

function rotatoPotato(a, b) {
    var z = [];
    var k = 0;
    var i;
    var j;

    for (i = 0; i < b; i++) {
        z[i + a.length - b] = a[i];

    }

    for (j = b; j < a.length; j++) {
        z[k] = a[j];
        k++;
        
    }

    return z;
}

console.log(rotatoPotato([1, 2, 3, 4, 5, 6], 2))