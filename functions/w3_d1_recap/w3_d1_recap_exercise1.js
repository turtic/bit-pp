var global = 1;

function myFunc() {
   var local = 2;
   global++;
   return global;
}


console.log(global);

console.log(myFunc());


