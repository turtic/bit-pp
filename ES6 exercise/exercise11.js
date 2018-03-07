// Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48


'use strict'

function productOfAll(a) {

   let product = a.reduce(function (accumulator, currentValue) {
        return accumulator * currentValue;
      }, 1);

      return product

}

console.log(productOfAll([2, 8, 3]));

