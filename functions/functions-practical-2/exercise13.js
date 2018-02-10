
function stNdRdTh(x) {

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

console.log(stNdRdTh(2));
console.log(stNdRdTh(11));
console.log(stNdRdTh(5551));
console.log(stNdRdTh(53506));