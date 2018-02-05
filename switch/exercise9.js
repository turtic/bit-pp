var a = 2;
var b = 0;
var operation = "/"

switch (operation) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        if (b === 0) {
            console.log(" Ups! Watch out for division by zero!");
        } else {
            console.log(a / b);
        }
        break;

    default:
        console.log(operation + " not a valid input");
}