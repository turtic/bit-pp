// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]


function intertwiner(a, b) {

    var i;
    var j;
    var c = [];
    var k;
    var p;

    for (i = 0, k = 0; i < a.length; i++ , k = k + 2) {
        c[k] = a[i];
    }

    for (j = 0, p = 1; j < b.length; j++ , p = p + 2) {
        c[p] = b[j];
    }
    return c;
}

console.log(intertwiner([4, 5, 6, 2], [3, 8, 11, 9]));