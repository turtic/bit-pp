// Write a function to find the maximum and minimum elements. Function returns an array.
// Input: [1,2,3,4,5]  Output: array: [1, 5]

minAndMax = function (a) {
    var r = [];
    var i;
    var j;
    var max = a[0];
    var min = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }

    }
    for (i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }

    }

    return [min, max];

}



console.log(minAndMax([1, 2, 13, 4, 5]))
