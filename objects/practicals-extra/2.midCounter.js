// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

'use strict';

function oddNumOfElements(a) {

  if (a.length % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

function midCounter(b) {


  if (oddNumOfElements(b)) {

    var counter = 0;

    var index = parseInt(b.length / 2);

    for (var i = 0; i < b.length; i++) {

      if (b[i] < b[index]) {

        counter = counter + 1;
      }

    }

    return counter;

  } else {

    return 'Error'

  }


}




console.log(midCounter([-1, 8.1, 3, 6, 2.3, 44, 2.11, 1,  5]));