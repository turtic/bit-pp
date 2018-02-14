// nizbrojeva callback funk koja kvadrira vrednosti niza

var a = [1, 2, 3, 4, 5];

var mihajlo = function (m) {

    return m * m;
}

var branko = function (m) {

    return m * m * m;
}

var ana = function (m) {

    return m + m;
}

function test(x, stefan) {

    for (var i = 0; i < x.length; i++) {
        x[i] = stefan(x[i]);
    }
    return x;
}


console.log(test(a, ana));