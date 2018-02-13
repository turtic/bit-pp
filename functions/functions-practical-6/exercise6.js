// Write a function to input temperature in Centigrade and convert to Fahrenheit. T(°F) = T(°C) × 1.8 + 32


// function CelsiusToFahrenheit(celsius) {

//     var celsius;

//     fahrenheit = celsius * 1.8 + 32;

//     return fahrenheit;
// }

// console.log(CelsiusToFahrenheit(0));

'use strict'


var fahrenheit = function (celsius) {
    var celsius;

    var f = celsius * 1.8 + 32;

    return f;
}


console.log(fahrenheit(10));