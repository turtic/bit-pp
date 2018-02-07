// input: two numbers 
// output: sum 
// name: addition

//Deklaracija funkcije

function addition(a, b) { 

    var sum;

    sum = a + b;

    return sum;

    // return mozemo i ne moramo da navedemo. ako nasa funckija treba nesto da odstampa i mi ne navedemo return funkcija ce odstampati vrednost koja se vraca je undifined 
}
///////////////////////////////////
var s = addition(3, 4);

console.log(s);

console.log(addition(3, 4));


// sabrati 11 ,5 ,6 ,9

var firstTwo = addition(11, 5);

var secondTwo = addition(6,9);

var total = firstTwo + secondTwo;

console.log(total);