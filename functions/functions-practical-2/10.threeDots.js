// Write a function to get the first n characters and add “...” at the end of newly created string.

function threeDots(s, n) {

    var array13 = [];
    var sum = "";


    for (i = 0; i <= n - 1; i++) {

        array13[i] = s[i];

        sum = sum + array13[i];
    }

    return sum + "...";

}


console.log(threeDots("My random string", "2"));

console.log(threeDots("My random string", "9"));