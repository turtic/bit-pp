var stefan = [1, 2, 3, 4, 5, 6, 7]
var ana = [8, 9, 0, 1, 2, 3, 4]

var sum = function (x, y) {

    return x + y;

}

var multy = function (x, y) {

    return x * y;

}


function sumArrays(a, b, f) {

    var c = [];

    for (var i = 0; i < a.length; i++) {

        c[i] = f(a[i], b[i]);

    }

    return c;

}

console.log(sumArrays(stefan, ana, multy));