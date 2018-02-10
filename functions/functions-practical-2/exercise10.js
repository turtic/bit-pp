
function threeDots(s, n) {

    var array13 = [];
    var sum = "";
    var dots;

    for (i = 0; i <= n-1; i++) {

        array13[i] = s[i]; 
        
        sum = sum + array13[i];
    }

    dots = sum + "...";

    return dots;

}


console.log(threeDots("My random string", "5"));