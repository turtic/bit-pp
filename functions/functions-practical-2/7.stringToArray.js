// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.


function stringToArray(s) {

    var array13 = [];

    for (i = 0; i < s.length; i++) {

        if (s[i] === " ") {

            array13[i] = null;

        } else {

            array13[i] = s[i];
        }

    }

    return array13;

}

console.log(stringToArray("My random string"));