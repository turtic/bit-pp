var a = 1;
var b = 2;
var c = -3;

var min;
var mid;
var max;

if (a > b && a > c) {
    max = a;
} else if (b > a && b > c) {
    max = b;
} else {
    max = c;
}

if (a < b && a < c) {
    min = a;
} else if (b < a && b < c) {
    min = b;
} else {
    min = c;
}

// if (a == min || a == max && b == min || b == max) {
//     mid = c;
// } else if (a == min || a == max && c == min || c == max) {
//     mid = b;
// }
// else {
//     mid = a;
// }

if (min < a && a < max) {
    mid = a;
} else if (min < b && b < max) {
    mid = b;
} else {
    mid = c;
}

console.log(min, mid, max)