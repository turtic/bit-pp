// // poredjenje

// var a=[4, 6, 11, 18, 32];

// var b=[-1, 7, 13, 15];


function merge(a, b) {

    var i;
    var j;
    var k;
    var c = [];

    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {

        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        } else {
            c[k] = b[j];
            j++;
        }

    }

    if (i == a.length) {
        for (; j < b.length; j++) {  // izbegava se inicalizacija j
            c[k] = b[j];
            k++;
        }
    }

    else {
        for (; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
    }

    return c;

}

console.log(merge([4, 6, 11, 18, 32], [-1, 7, 13, 15]));