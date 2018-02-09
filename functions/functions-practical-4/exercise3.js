// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3



function minAndIndex(a) {

var min=a[0];
var index;

    for (i = 0; i < a.length; i++) {

        if (a[i] < min) {
            
            min = a[i];
            index = i;
        }

    }
    return min + ' ' + index;
}

console.log(minAndIndex([4, 2, 2, -1, 6]));
