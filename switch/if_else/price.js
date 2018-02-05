var p1 = 50;
var p2 = 100;
var p3 = 20;
var price;

if (p1 < p2 && p1 < p3) {
    p1 = 1;
    price = p1 + p2 + p3;
    
} else if (p2 < p1 && p2 < p3) {
    p2 = 1;
    price = p1 + p2 + p3;
} else {
    p3 = 1;
    price = p1 + p2 + p3;
}

console.log(price);