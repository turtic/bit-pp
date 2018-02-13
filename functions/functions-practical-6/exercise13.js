// Write a function to find all the numbers greater than the average.

lrgrThenAvrg = function (a) {
    var larger = [];
    var k = 0;
    var i;
    var sum = 0;

    for (i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    
    average = sum / a.length;

    for (i = 0; i < a.length; i++) {
        if (a[i] > average) {
            larger[k] = a[i];
            k++;
        }
    }

    return larger;
}


console.log(lrgrThenAvrg([1, 1, 1]));

console.log(lrgrThenAvrg([1, 2, 3, 4, 5, 6, 7]));

console.log(lrgrThenAvrg([1, 2, 3, 4, 5, 6, 8, 9]));





