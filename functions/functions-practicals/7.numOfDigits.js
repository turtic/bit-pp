// Write a function that calculates a number of digits of a given number.



function numOfDigits(n) {

    var n = n + "";
    
    return n.length;

}

console.log(numOfDigits(123456789));