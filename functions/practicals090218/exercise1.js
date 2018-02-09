// // poredjenje

// var a=[4, 6, 11, 18, 32];

// var b=[-1, 7, 13, 15];


function merge(a, b) {

    var i;
    var j;
    var k=0;
    var c = [];

for (i=0; i<a.length; i++) {

    c[k]=a[i];
    k++;
}

for (j=0; j<b.length; j++) {

    c[k]=b[j];
    k++;
}


    return c;

}

console.log(merge([4, 6, 11, 18, 32], [-1, 7, 13, 15]));