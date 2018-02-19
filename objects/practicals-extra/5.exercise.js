// Write a function that finds all the elements in a given array less than a given element. 
// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 


'use strict';

function lessThanGiven(a, n) {
  var z = [];
  for (var i = 0; i < a.length; i++) {

    if (a[i] < n) {
      z.push(a[i]);
    }

  }
  return z;
}

function professional(a) {
  var z = [];
  for (var i = 0; i < a.length; i++) {

    if (a[i].search('pro') == 0) {
      z.push(a[i]);
    }

  }
  return z;
}

console.log(lessThanGiven([8, 13, 8, 9, 12, 8, 1, 1, 4, 13], 6));

console.log(professional(['asda', 'sdas', 'thrt', 'profa', 'profi', 'propan', 'butan', 'notpro']));

function cFilter(a, f) {
  
  return f(a);

}

console.log(cFilter(['asda', 'sdas', 'thrt', 'profa', 'profi', 'propan', 'butan', 'notpro'], professional));