var a = [1, 2, 3, 4, 5, 6];
var sum = 0;
var product = 1;
var i;

for (i = 0; i < 6; i++) {
    sum = sum + a[i];
    product = product * a[i];
}

console.log(product, sum)
