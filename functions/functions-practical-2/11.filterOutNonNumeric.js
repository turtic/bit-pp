// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

function filterOutNonNumeric(a) {

    var array13 = [];
    var j = 0;

    for (i = 0; i < a.length; i++) {

        if (parseFloat(a[i]) + "" === "NaN" || parseFloat(a[i]) === Infinity) {
            continue;
        } else {

            array13[j] = parseFloat(a[i]);
            j = j + 1;

        }

    }

    return array13;

}


console.log(filterOutNonNumeric(["1", "21", undefined, "42", "1e+3", Infinity]));