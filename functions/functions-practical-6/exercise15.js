// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

'use strict'

var starsHelloWorld = function (a) {

    var max = a[0].length;
    var i;


    for (i = 0; i < a.length; i++) {
        if (a[i].length > max) {
            max = a[i].length;
        }
    }


    var sum = '';
    var firstAndLast = '';


    for (i = 0; i < a.length; i++) {
        while (a[i].length < max) {
            a[i] = a[i] + ' ';

        }

    }

    for (i = 0; i < a.length; i++) {

        sum = sum + '* ' + a[i] + ' *' + '\n';

    }

    for (i = 0; i < max + 4; i++) {

        firstAndLast = firstAndLast + '*';

    }

    sum = firstAndLast + '\n' + sum + firstAndLast;

    return sum;
}


console.log(starsHelloWorld(["Hello", "World", "in", "a", "frame"]));





