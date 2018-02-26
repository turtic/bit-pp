'use strict';

(function () {
    console.log('Hi')

    //------------------------------------------ Genre --------------------------------
    function Genre(name) {

        this.name = name;
    }

    Genre.prototype.getData = function () {
        var a = this.name[0] + this.name[this.name.length - 1];
        return a.toUpperCase(this.name);
    }

    //------------------------------------------ Movie --------------------------------
    function Movie(title, length, genre) {
        this.title = title;
        this.movieLength = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function () {
        return this.title + ', ' + this.movieLength + 'min' + ', ' + this.genre.getData();
    }

    //------------------------------------------ Program --------------------------------    
    function Program(date) {
        this.date = date;
        this.list = [];
        this.number = 0;
    }

    Program.prototype.addMovie = function (movie) {
        this.list.push(movie);
        this.number++;
    };

    Program.prototype.getData = function () {
        var programLength = 0;
        var z = '';

        for (var i = 0; i < this.list.length; i++) {

            programLength = programLength + this.list[i].movieLength;
        }

        for (var i = 0; i < this.list.length; i++) {

            z = z + this.list[i].getData() + '\n';
        }
        console.log(z)
        return this.date + ', ' + programLength + 'min' + '\n' + z;
    }

    //------------------------------------------ Festival --------------------------------
    function Festival(name) {
        this.name = name;
        this.list = [];
        this.number = 0;
    }

    Festival.prototype.addProgram = function (program) {
        this.list.push(program);
        this.number++;
    };

    Festival.prototype.getData = function () {
        var sumMov = 0;
        var sumProgData = '';
        for (var i = 0; i < this.list.length; i++) {
            sumMov = sumMov + this.list[i].number;
            sumProgData = sumProgData + this.list[i].getData() + '\n';
        }

        return this.name + ' has ' + sumMov + ' movie titles' + '\n' + sumProgData

    }

//------------------------------------------ CreateObject functions --------------------------------

    function creatMovie(title, length, genre) {

        return new Movie(title, length, genre);

    }

    function creatProgram(date) {

        return new Program(date)

    }

    function creatFestival(name) {

        return new Festival(name)

    }

//------------------------------------------ Testing --------------------------------

    var action = new Genre('Action');
    var drama = new Genre('Drama');
    var comedy = new Genre('Comedy');

    var redemption = new Movie('The Shawshank Redemption', 130, drama);
    var matrix = new Movie('Matrix', 150, action);
    var simpsons = new Movie('Simpsons', 120, comedy);
    var madmax = creatMovie('Mad Max', 125, action);

    var ourProgram = new Program(new Date(2018, 3, 4));
    var secondProgram = creatProgram(new Date(2018, 3, 5));

    var fest = creatFestival('Fest18');



    ourProgram.addMovie(redemption);
    ourProgram.addMovie(matrix);

    secondProgram.addMovie(simpsons);
    secondProgram.addMovie(madmax);

    fest.addProgram(ourProgram);
    fest.addProgram(secondProgram);

    // console.log(Action)
    // console.log(Action.name)
    // console.log(Action.getData())
    console.log(redemption.getData());
    console.log(ourProgram);
    console.log(secondProgram);
    console.log(fest);
    console.log(ourProgram.getData());
    console.log(fest.getData());

})()