// zbir cifara broja

function sumOfDigits(n) {
    var sum = 0;
    var lastDigit;

    if (typeof n != "number") {
        return -1;
    }

    if (n < 0) {
        n = -n;
    }

    while (n > 0) {

        lastDigit = n % 10;

        n = (n - lastDigit) / 10;

        sum = sum + lastDigit;


    }
    return sum;

}

console.log(sumOfDigits(101));

