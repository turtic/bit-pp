// Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.

function streetNumber(x) {

    if (x % 100 >= 11 && x % 100 <= 13) {

        return x + 'th';

    } 
    
    if (x % 10 == 1) {

        return x + 'st';

    } else if (x % 10 == 2) {

        return x + 'nd';

    } else if (x % 10 == 3) {

        return x + 'rd';

    } else {
        return x + 'th';
    }



}

console.log(streetNumber(2));
console.log(streetNumber(11));
console.log(streetNumber(5551));
console.log(streetNumber(53506));