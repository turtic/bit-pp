'use strict';

(function() {
    // console.log('Hi')

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function() {
            return this.name + ' ' + this.surname;
        }
    }

    var john = new Person("John", "Snow")
    var cersei = new Person("Cersei", "Lannister")
    var daenerys = new Person("Daenerys", "Targaryan")
    var tyrion = new Person("Tyrion", "Lannister")


    // console.log(john)
    // console.log(john.getData())


    function Seat(number, category) {
        this.number = (function(number, category) {
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
        this.category = (function(number, category) {
            if (arguments[0] == 'e' || arguments[0] == 'b') {
                return arguments[0]
            }
            if (category) {
                return category;
            } else {
                return 'e';
            }
        })(number, category)

        this.getData = function() {
            return this.number + ', ' + this.category.toUpperCase();
        }
    }

    var a1 = new Seat(1, "b");
    var a2 = new Seat(2, "b");
    var a3 = new Seat(14);
    var a4 = new Seat();
    // console.log(a1)
    // console.log(a2)
    // console.log(a3)
    // console.log(a4)
    // console.log(a1.getData())

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function() {
            return this.seat.getData() + ', ' + this.person.getData()
        }
    }

    function createPassenger(person, seat) {

        return new Passenger(person, seat)

    }
    var johnSnow = createPassenger(john, a1)
    var cerseiLannister = createPassenger(cersei, a2)
    var daenerysTargaryan = createPassenger(daenerys, a3)
    var tyrionLannister = createPassenger(tyrion, a4)



    // var johnSnow = new Passenger(john, a4);
    // var cerseiLannister = new Passenger(cersei, a1);

    // console.log(johnPassenger);
    // console.log(johnSnow.getData());


    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listPassengers = [];
        this.addPassenger = function(passenger) {

            if (this.listPassengers.length > 100) {

                return console.log('Error. Flight is full.')
            }

            for (var i = 0; i < this.listPassengers.length; i++) {
                // console.log(this.listPassengers[i].seat.number)
                // console.log(passenger.seat.number)
                if (this.listPassengers[i].seat.number == passenger.seat.number) {
                    return console.log('Error. This seat is taken. Please change seat number. ' + this.listPassengers[i].person.getData() + ' can not be added.')
                }
            }

            this.listPassengers.push(passenger)
        };
        this.getData = function() {
            var sumPassengers = '';
            var customDate = this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear()

            for (var i = 0; i < this.listPassengers.length; i++) {
                sumPassengers = sumPassengers + this.listPassengers[i].getData() + '\n'
            }

            var extraRelation = this.relation;
            var result = '';
            var result1 = '';
            var result2 = '';
            extraRelation = extraRelation.split(' - ');

            for (var i = extraRelation[0].length - 1; i > 0; i--) {

                if (extraRelation[0][i] !== 'a' && extraRelation[0][i] !== 'e' && extraRelation[0][i] !== 'i' && extraRelation[0][i] !== 'o' && extraRelation[0][i] !== 'u') {

                    result1 = extraRelation[0][0] + extraRelation[0][i].toUpperCase();
                    break;
                }
            }

            for (var i = extraRelation[1].length - 1; i > 0; i--) {



                if (extraRelation[1][i] !== 'a' && extraRelation[1][i] !== 'e' && extraRelation[1][i] !== 'i' && extraRelation[1][i] !== 'o' && extraRelation[1][i] !== 'u') {

                    result2 = extraRelation[1][0] + extraRelation[1][i].toUpperCase();
                    break;
                }
            }


            return customDate + ' ' + result1 + ' - ' + result2
        }
    }

    function createFlight(relation, date) {

        return new Flight(relation, date)

    }

    var ourFlight = createFlight("Belgrade - New York", new Date(2018, 9, 25));
    var ourFlight2 = createFlight("Barcelona - Belgrade", new Date(2018, 10, 11));

    ourFlight.addPassenger(johnSnow);
    ourFlight.addPassenger(cerseiLannister);
    ourFlight2.addPassenger(daenerysTargaryan);
    ourFlight2.addPassenger(tyrionLannister);
    // console.log(ourFlight);
    // console.log(ourFlight2);

    function Airport() {
        this.name = 'Nikola Tesla';
        this.listFlights = [];
        this.addFlight = function(flight) {
            this.listFlights.push(flight)
        }
        this.getData = function() {
            var sum = 0;
            var sum2 = '';

            for (var i = 0; i < this.listFlights.length; i++) {

                sum = sum + this.listFlights[i].listPassengers.length

            }

            for (var i = 0; i < this.listFlights.length; i++) {

                sum2 = sum2 + this.listFlights[i].getData() + '\n'

            }

            return 'Airport: ' + this.name + ', ' + 'total passengers: ' + sum + '\n' + sum2

        }
    }

    var ourAirport = new Airport();

    ourAirport.addFlight(ourFlight);
    ourAirport.addFlight(ourFlight2);

    // console.log(ourFlight.listPassengers);
    console.log(ourAirport.getData());

    // console.log(john.getData())


})()