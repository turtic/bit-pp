// Write a function to find the element that occurs most frequently.

// Input: [1,2,3,4,5,6,6]  Output: 6

mostFrequent = function (a) {

    var counter = [];
    var i;
    var k;
    var j;
    var index = 0;


    for (i = 0; i < a.length; i++) {

        counter[i] = 0;

        for (j = 0; j < a.length; j++) {

            if (a[i] === a[j]) { counter[i] = counter[i] + 1 }
        }

    }

    var max = counter[0];

    for (k = 0; k < counter.length; k++) {

        if (counter[k] > max) { index = k }
    }


    return a[index];

}

console.log(mostFrequent([1, 2, 3, 4, 5, 6, 6, 6]));

console.log(mostFrequent([1, 2, 2, 4, 5, 7, 9]));

console.log(mostFrequent([1, 2, 3, 4, 5, 6, 8, 9]));

console.log(mostFrequent(['orange', 'kiwi', 'orange', 'apple', 'kiwi', 'banana', 'kiwi']));




