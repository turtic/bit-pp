// Write a function that calculates a number of appearances of a given number in a given array.

function howManyTimes(a, n) {

    var counter = 0;
    var a;
    var n;

    for (i = 0; i < a.length; i++) {

        if (a[i] === n) {

            counter = counter + 1;
        }
    }

    return counter;

}

console.log(howManyTimes([1, 2, 3, 4, 5, 6, 1], 1));
