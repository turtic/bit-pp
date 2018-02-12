// var n=10
// var m;
// m=n;

function print(message) {
    console.log(message);
}

var write;

write = function (message) {
    console.log(message);
}

write = print;

// write = print(); nije isto jer onda se poziva funckija

console.log(typeof write);

write('Hello world');