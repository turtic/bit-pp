// Write a function to count the number of letter occurrences in a string.

function numberOfLetters(s, l) {

    var counter = 0;

    s = s.toUpperCase();
    l = l.toUpperCase();

    for (i = 0; i < s.length; i++) {

        if (s[i] === l) {

            counter = counter + 1;
        }
    }

    return counter;

}

console.log(numberOfLetters("My random string", "m"));