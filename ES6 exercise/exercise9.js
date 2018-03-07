// Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.   

'use strict'


let persons = [
    { name: 'michael', age: 33 },
    { name: 'johnny', age: 24 },
    { name: 'jimmy', age: 21 },
    { name: 'jex', age: 44 },
]

// older than 25

function whoIsOlderThen25(arr) {

    let olderThen25 = [];

    arr.forEach(function (element) {

        if (element.age > 25) {
            olderThen25.push(element.name)
        }

    });

    return olderThen25;
}
// older than 40

function anyoneOlderThan20(arr) {

    let olderThan40 = function (x) {

        return x.age > 40;

    };

    return arr.some(olderThan40)
}

// older than 20

function allOlderThen20(arr) {

    let olderThan20 = function (x) {

        return x.age > 20;

    };

    return arr.every(olderThan20)
}

console.log( `whoIsOlderThen25? ${whoIsOlderThen25(persons)}`);
console.log( `anyoneOlderThan20? ${anyoneOlderThan20(persons)}`);
console.log(`allOlderThen20? ${allOlderThen20(persons)}`);