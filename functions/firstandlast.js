// zbir prve i poslednje cifre broja

function sumOfDigits(n) {
    var sum = 0;
    var reallyFirstDigit;
    var reallyLastDigit;
    var i;

    if (typeof n != "number") {
        return -1;
    }

    if (n < 0) {
        n = -n;
    }


    //last number
    reallyLastDigit = n % 10;

    // first number
    while (n > 10) {

        lastDigit = n % 10;

        n = (n - lastDigit) / 10;
    }

    reallyFirstDigit = n;

    sum = reallyFirstDigit + reallyLastDigit;


    return sum;

}

console.log(sumOfDigits(5553));

