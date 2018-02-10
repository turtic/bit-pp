// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function inserter(e, p, a) {

    var i;
    var j;
    var k = 0;
    var c = [];
    if (p < a.length) {

        for (i = 0; i < a.length; i++) {

            if (k == p) {

                c[k] = e;
                k = k + 1;
                i = i - 1;

            } else {

                c[k] = a[i];
                k = k + 1;

            }
        }

        return c;

    } else {

        return 'error message ¯\\_(ツ)_/¯'

    }

}

console.log(inserter(78, 3, [2, -2, 33, 12, 5, 8]));

console.log(inserter(78, 16, [2, -2, 33, 12, 5, 8]));