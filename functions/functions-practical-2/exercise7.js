
function stringIntoArray(s) {

    var array13 = [];

    for (i = 0; i < s.length; i++) {

        if (s[i] === " ") { array13[i] = null; } else {

            array13[i] = s[i];
        }

    }

    return array13;

}

console.log(stringIntoArray("My random string"));