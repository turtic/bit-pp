// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.
// Write a function that calculates the total price of your shopping list. 
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write it in uppercase. 


'use strict';

function priceAndName(a) {

  var max = a[0].price;
  var sum = 0;
  var index = 0;

  for (var i = 0; i < a.length; i++) {
    sum = sum + a[i].price;

    if (a[i] > max) {
      max = a[i];
      index = i;
    }
  }

  var nameMax = a[index].name;

  var avg = (sum / a.length).toFixed(3);

  return 'Total price: ' + sum + '\n' + 'Average price: ' + avg + '\n' + 'Most expensive: ' + nameMax;

}

console.log(priceAndName([{ name: 'banana', price: 150 }, { name: 'sweeet', price: 35 }, { name: 'milk', price: 90 }, { name: 'bread', price: 40 }]));
