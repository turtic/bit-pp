function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.age = (function () {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
 
        var birthDate = new Date(dateOfBirth);
        var yearOfBirth = birthDate.getFullYear();
 
        return currentYear - yearOfBirth;;
    })();
 
    this.getData = function () {
        return this.name + " is " + this.age + " years old";
    }
 }


 p = new Person ('pera', 'peric', '5 4 1983');

console.log(p.getData()) 
 
console.log(typeof Person.age);


// console.log(user);
// console.log(user['age']);
// console.log(user.email);
// console.log(user.mode.type);
// console.log(user.language[0]);



