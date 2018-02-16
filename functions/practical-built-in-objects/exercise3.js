// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.


function alphabeticalOrder(x) {

  
  var splitString = x.split("");

  var sortedString = splitString.sort();

  var joinArray = sortedString.join("");

  return joinArray;

}



console.log(alphabeticalOrder('asfafagasegaeghtjuyj'));