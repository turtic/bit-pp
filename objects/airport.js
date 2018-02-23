'use strict';

(function () {
    console.log('Hi')

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }

    var john = new Person("John", "Doe")

    console.log(john)
    console.log(john.getData())


    function Seat(number, category) {
        this.number = (function (number, category) {
            if (Number.isInteger(arguments[0]) && arguments[0] != 'e') {
                return arguments[0];
            } else {
                return (function randNum() {
                    var a = 10;
                    var b = 100;
                    var min = Math.min(a, b);
                    var max = Math.max(a, b);
                    return parseInt(((max - min) * Math.random()) + min);
                })()
            }
        })(number, category)
        this.category = (function (number, category) {
            if (arguments[0] == 'e' || arguments[0] == 'b') {
                return arguments[0]
            }
            if (category) {
                  return category;
            } else {
                return 'e';
            }
        })(number, category)

        this.getData = function () {
            return this.number + ', ' + this.category.toUpperCase();
        }
    }

    var a1 = new Seat();
    var a2 = new Seat(12);
    var a3 = new Seat('b');
    var a4 = new Seat(15, 'b');
    console.log(a1)
    console.log(a2)
    console.log(a3)
    console.log(a4)
    console.log(a1.getData())

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData()
        }
    }

    var johnPassenger = new Passenger(john, a4);

    console.log(johnPassenger);
    console.log(johnPassenger.getData());


    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listPassengers = [];
        this.getData = function () {
            return this.date + ' ' + this.relation
        }
        this.addPassenger = function (passanger) {

            listPassengers.push(passanger)
        }
    }

    function Airport() {
        this.name = 'Nikola Tesla';
        this.listFlights = [];
    }


})()