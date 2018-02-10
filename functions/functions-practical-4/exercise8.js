// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenater(a, b) {

    var i;
    var j;
    var c = [];
    var k;
    var p;

    for (i = 0, k = 0; i < a.length; i++ , k++) {
        c[k] = a[i];
    }

    // for (j = 0, p = a.length; j < b.length; j++, p++) {
    //     c[p] = b[j];
    // }

    for (j = 0; j < b.length; j++ , k++) {
        c[k] = b[j];
    }


    return c;
}

console.log(concatenater([4, 5, 6, 2], [3, 8, 11, 9]));