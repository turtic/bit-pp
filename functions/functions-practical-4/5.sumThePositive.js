// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumThePositive(a) {

    var i;
    var sum = 0;

    for (i = 0; i < a.length; i++) {

        if (a[i] > 0) {
            sum = sum + a[i];

        }

    }

    return sum;
}

console.log(sumThePositive([3, 11, -5, -3, 2]));