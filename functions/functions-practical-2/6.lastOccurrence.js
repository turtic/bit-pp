// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function lastOccurrence(s,l) {

    var position = -1;
    s = s.toUpperCase();
    l = l.toUpperCase();
    
    for (i = 0; i < s.length; i++) {

        if(s[i] === l) {

            position = i + 1;

        }
    }

    return position;

}

console.log(lastOccurrence("My random string", "n"));

console.log(lastOccurrence("My random string", "h"));