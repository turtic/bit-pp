//Write a function that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 



function abcabcabc(s, l) {

    var sum = "";

    for (i = 0; i < l; i++) {

        sum = sum + s
    }

    return sum;

}

console.log(abcabcabc("Op", 10));