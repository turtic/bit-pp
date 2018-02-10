// Write a function to check whether the `input` is a string or not.


function stringOrNot(a) {

    if (typeof a === "string") {
        return true
    } else {
        return false
    }
}

console.log(stringOrNot("My random string"));

console.log(stringOrNot(12));