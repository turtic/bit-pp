
function lastOccurrence(s,l) {

   var position;
    
    for (i = 0; i < s.length; i++) {

        if(s[i] === l) {

            position = i + 1;

        }
    }

    return position;

}

console.log(lastOccurrence("My random string", "n"));