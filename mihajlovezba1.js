var j = 10;
var k = 67;
var l = 100;
var max;

if (j > k && j > l) {
  max = j;
} else if (k > l && k > j) {
  max = k;
} else {
  max = l;
}

console.log(max);
