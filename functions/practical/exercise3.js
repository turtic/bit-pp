
function concat(x,a) {

    var sum = x;
    

    for (i = 1; i < a; i++) {

        sum = sum + x;
    }

    return sum;

}

console.log(concat("Ha"));