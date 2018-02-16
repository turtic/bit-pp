// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

function alphabeticalOrder(x) {

  
  var splitString = x.split("");

  var sortedString = splitString.sort();

  var joinArray = sortedString.join("");

  return joinArray;

}


function alphabeticalWord(x) {

  
  var splitString = x.split(" ");

  
  
  for(var i=0; i<splitString.length; i++) {
  
   
    splitString[i]= alphabeticalOrder(splitString[i]);
    
  }

  var joinArray = splitString.join(" ");

  return joinArray;

}



console.log(alphabeticalWord('Blogs cat is blue'));

console.log(alphabeticalOrder("This"));