// Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function optimusPrime(x) {
    var i;
    var temp;

    if (x == 1) {
        return "Prime";
    } else if (x == 0) {
        return " Not a prime";
    }

    for (i = 2; i < x; i++) {

        if (x > 1 && x % i == 0) {

            temp = "Not a prime";
            break;

        } else {

            temp = "Prime";
        }
    }

    return temp;
}

console.log(optimusPrime(1));
console.log(optimusPrime(0));
console.log(optimusPrime(6));
console.log(optimusPrime(13));