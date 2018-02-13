// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters).
//  Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

'use strict'

var bodyMass = function (weight, height) {

    var bmi = weight/Math.pow(height, 2);
    var text;

    switch (true) {
        case (bmi < 15):
            text = "Starvation";
            break;
        case (bmi < 17.5):
            text = "Anorexic";
            break;
        case (bmi < 18.5):
            text = "Underweight";
            break;
        case (18.5 <= bmi && bmi < 25):
            text = "Ideal";
            break;
        case (25 <= bmi && bmi < 30):
            text = "Overweight";
            break;
        case (30 <= bmi && bmi < 40):
            text = "Obese";
            break;
        case (bmi >= 40):
            text = "Morbidly obese";
            break;
        default:
            text = "Error";
    }
    
return text;
}


console.log(bodyMass(80, 2));





