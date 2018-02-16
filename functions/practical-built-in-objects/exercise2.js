// Write a JavaScript function that reverses a number.

function reverse(x) {
 
  var str = x + ""; ;

  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;

}


console.log(reverse(123456));