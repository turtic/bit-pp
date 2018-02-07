
function numberOfLetters(s,l) {

   var counter=0;
    
    for (i = 0; i < s.length; i++) {

        if(s[i] === l) {

            counter= counter + 1;
        }
    }

    return counter;

}

console.log(numberOfLetters("My random string", "n"));