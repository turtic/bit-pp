
var a = [1, 2, 3, 4, 16, 5, -1];

var max = a[0];

var min = a[0];

var counter;

var position;

var temp=[];

for (i = 1; i < a.length; i++) {

    if (max <= a[i]) {

        max = a[i]; 
        counter = i + 1;
    };
}

console.log('Max is ' + max + " is on the position " + counter);

for (i = 1; i < a.length; i++) {

    if (min >= a[i]) {

        min = a[i];
        position = i + 1;
    };
}

console.log("Min is " + min + " is on the position " + position);

a[counter-1]=min;
a[position-1]=max;

console.log("When min and max switch places we get:\n" + a);