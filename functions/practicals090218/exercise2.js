// // poredjenje

// var a=[4, 6, 11, 18, 32];

// var b=[-1, 7, 13, 15];


function merge(a, b) {

    var i;
    var j;
    var k = 0;
    var p = 1;
    var c = [];

    if (a.length == b.length) {

        for (i = 0; i < a.length; i++) {

            c[k] = a[i];
            k = k + 2;
        }

        for (j = 0; j < b.length; j++) {

            c[p] = b[j];
            p = p + 2;
        }

        return c;

    } else { 
        return 'not same length' 
    }

}
console.log(merge([4, 6, 11, 18], [-1, 7, 13, 15]));