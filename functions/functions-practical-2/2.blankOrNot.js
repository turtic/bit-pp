// Write a function to check whether a string is blank or not.

function blankOrNot(a) {

    if (a === " ") { 
        return true 
    } else { 
        return false 
    }
}

console.log(blankOrNot("My random string"));
console.log(blankOrNot(12));
console.log(blankOrNot(" "));
console.log(blankOrNot(false));