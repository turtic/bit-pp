// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]


function elementDestroyer(a, e) {

    var i;
    var j;
    var k = 0;
    var c = [];

    for (i = 0; i < a.length; i++) {

        if (a[i] !== e) {
            c[k] = a[i];
            k = k + 1;
        }

    }

    return c;

}

console.log(elementDestroyer([4, 6, 2, 8, 2, 2], 2));