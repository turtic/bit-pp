// Write a function to find the median element of array.
// Input: [1,2,3,4,5,6]  Output: 3.5

medianElement = function (a) {
    var medianIndex;
    if (a.length % 2 == 1) {

        medianIndex = (a.length + 1) / 2 - 1;
        return a[medianIndex];

    } else {

        medianIndex = a.length / 2;
        return (a[medianIndex - 1] + a[medianIndex]) / 2

    }


}

console.log(medianElement([1, 2, 3, 4, 5, 6]));

console.log(medianElement([1, 2, 2, 4, 5, 7, 9]));

console.log(medianElement([1, 2, 3, 4, 5, 6, 8, 9]));





