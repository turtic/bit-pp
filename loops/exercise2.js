var sum = 0;
var i;
for ( i=0; i<1001;i++) {
    if (i%3==0 && i%5==0){
        console.log(i);
        sum= sum+i;
    }
}

console.log(sum);