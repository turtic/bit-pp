// Write a function that concatenates a given string n times (default is 1).


function concatAkaHaHaHa(string, n) {

    var sum = string;


    for (i = 1; i < n; i++) {

        sum = sum + string;
    }

    return sum;

}

console.log(concatAkaHaHaHa("Ha", 3));

console.log(concatAkaHaHaHa("Ha"));