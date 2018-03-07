// Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24


'use strict'
const tax = 0.2;

function saleTax(price) {

    return price * tax;
}
console.log(saleTax(120));