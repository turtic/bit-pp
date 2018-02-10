// Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function firstOccurrence(s, l) {

    var position = -1;
    s = s.toUpperCase();
    l = l.toUpperCase();

    for (i = 0; i < s.length; i++) {

        if (s[i] === l) {

            position = i + 1;

            break;
        }
    }

    return position;

}

console.log(firstOccurrence("My random string", "m"));