var day = 29;
var month = 2;
var year = 1983;

var leap = false;

if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) { leap = true; };

if (day > 0 && day < 32 && month > 0 && month < 13) {

    switch (month) {

        case 2:

            if (day === 31 || day === 30) {
                console.log("Date is not valid");
            } else if (day === 29 && !leap) {
                console.log("Only leap years can have 29 days");
            } else {
                console.log("Date is valid");
            }
            break;

        case 4:
            if (day === 31) {
                console.log("Date is not valid");
            } else {
                console.log("Date is valid");
            }
            break;

        case 6:
            if (day === 31) {
                console.log("Date is not valid");
            } else {
                console.log("Date is valid");
            }
            break;

        case 9:
            if (day === 31) {
                console.log("Date is not valid");
            } else {
                console.log("Date is valid");
            }
            break;

        case 11:
            if (day === 31) {
                console.log("Date is not valid");
            } else {
                console.log("Date is valid");
            }
            break;

        default:
            console.log("Date is valid")
    }



} else { console.log("Date is not valid") }