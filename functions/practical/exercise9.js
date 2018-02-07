
function separator(s,x) {

    var array13 = [];
    var sum="";

    for (i = 0; i < s.length; i++) {

        if (s[i] === " ") { array13[i] = x; sum=sum+array13[i];} else {

            array13[i] = s[i]; sum=sum+array13[i];
        }

    }

    return sum;

}


console.log(separator("My random string", "+"));