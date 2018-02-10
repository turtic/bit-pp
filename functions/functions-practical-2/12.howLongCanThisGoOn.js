// Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.


function howLongCanThisGoOn(p, y) {

    var age = 2018 - y;
    var time

    if (p === 'man') {

        time = 65 - age;

    } else {

        time = 60 - age;
    }

    if (time < 0) {

        return "already retired";

    } else if (time == 0) {

        return "the time has come";

    } else {

        return time;

    }


}

console.log(howLongCanThisGoOn('man', 1928));
console.log(howLongCanThisGoOn('women', 1958));