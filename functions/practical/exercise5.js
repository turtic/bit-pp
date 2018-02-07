
function firstOccurrence(s,l) {

   var position;
    
    for (i = 0; i < s.length; i++) {

        if(s[i] === l) {

            position = i + 1;

            break;
        }
    }

    return position;

}

console.log(firstOccurrence("My random string", "n"));