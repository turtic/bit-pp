// Write a function that checks if a given number is a three digit long number.



function isIt3DigitsLong(a) {

    if (a>99 && a<1000) {
        return true
    } else {
        return false
    }

}

console.log(isIt3DigitsLong(223));