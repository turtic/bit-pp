
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