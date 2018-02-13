// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
// If number of elements is even, return just the first and the last. In other cases, input array should be returned.

// Input: [1,2,3,4,5,6]  Output: [1,6]
// Input: [1,2,3,4,5,6,7]  Output: [1,4,7]

firstMiddleLast = function (a) {
    var medianIndex;
    if (a.length % 2 == 1) {

        medianIndex = (a.length + 1) / 2 - 1;
        return [a[0], a[medianIndex], a[a.length - 1]];

    } else {

        medianIndex = a.length / 2;
        return [a[0], a[a.length - 1]];

    }


}

console.log(firstMiddleLast([1, 2, 3, 4, 5, 6]));

console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7]));

console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 8, 9]));





