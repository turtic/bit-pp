'use strict';


document.querySelector('#create-movie').addEventListener('click', function (event) {

    // procitati unete podatke

    var movieInput = document.querySelector('#movie-title');
    var lengthInput = document.querySelector('#movie-length');
    var movieGenreSelect = document.querySelector('#genre-select');

    var movieError = document.querySelector('#movie-title-error');
    var lengthError = document.querySelector('#movie-length-error');
    var genreError = document.querySelector('#movie-genre-error');

    var movieTitle = movieInput.value;
    var movieLength = lengthInput.value;


    var movieGenreIndex = movieGenreSelect.selectedIndex;
    var movieGenre = movieGenreSelect.options[movieGenreIndex].value;



    // validacija

    var error = {
        OK: 'OK',
        INSERT_TITLE: 'Please insert the title',
        INSERT_LENGTH: 'Please check the movie length',
        SELECT_GENRE: 'Please select the movie genre'
    }


    if (movieTitle == '') {
        return movieError.innerHTML = error.INSERT_TITLE;
    }

    if (isNaN(movieLength) || movieLength == '') {
        return lengthError.innerHTML = error.INSERT_LENGTH,
            movieError.innerHTML = '';
    }

    if (movieGenre == '-') {
        return genreError.innerHTML = error.SELECT_GENRE,
            lengthError.innerHTML = '',
            movieError.innerHTML = '';
    }



    // napravimo objekat koji predstavlja film
    var movie = new Movie(movieTitle, movieLength, movieGenre)
    movieList.push(movie)
    // dodajemo film u listu filmova na nivou aplikacije


    var newEl = document.createElement('li');
    var nodeText = movie.getData()
    var newText = document.createTextNode(nodeText);
    newEl.appendChild(newText);
    var someList = document.querySelector('#movie-list');
    someList.appendChild(newEl);

    // azuriramo interfejs - prikazujemo novi film
    var sum = 0;
    for (var i = 0; i < movieList.length; i++) {


        sum = sum + parseInt(movieList[i].movieLength);
    }

    document.querySelector('#total-length').innerHTML = 'All movies length: ' + sum + ' min';


    // reset inputs
    movieInput.value = '';
    lengthInput.value = '';
    movieGenreSelect.value = '-';

    // reset errors
    document.querySelector('#movie-length-error').innerHTML = '';
    document.querySelector('#movie-title-error').innerHTML = '';
    document.querySelector('#movie-genre-error').innerHTML = ''


    var newEl1 = document.createElement('option');
    var nodeText1 = movieTitle
    var newText1 = document.createTextNode(nodeText1);
    newEl1.appendChild(newText1);
    var someList1 = document.querySelector('#movie-select');
    someList1.appendChild(newEl1);



})

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

    return this.date + ', ' + programLength + 'min' + '\n' + z;
}

document.querySelector('#create-program').addEventListener('click', function (event) {


    if (document.querySelector('#date2').value == "") {
        return document.querySelector('#date-error').innerHTML = "Please select a date"
    }

    var dateInput = document.querySelector('#date2').value;

    var program1 = new Program(dateInput);


    programList.push(program1);

    // add program list to screen
    var newEl = document.createElement('li');
    var newText = document.createTextNode(program1.getData());
    newEl.appendChild(newText);
    var someList = document.querySelector('#program-list');
    someList.appendChild(newEl);

    // add to select program drop down
    var newEl1 = document.createElement('option');
    var nodeText1 = program1.getData()
    var newText1 = document.createTextNode(nodeText1);
    newEl1.appendChild(newText1);
    var someList1 = document.querySelector('#program-select');
    someList1.appendChild(newEl1);

    // delete error message
    document.querySelector('#date-error').innerHTML = ""

})


document.querySelector('#add-movie').addEventListener('click', function (event) {

    if (document.querySelector('#movie-select').value == "-") {
        return document.querySelector('#add-movie-error').innerHTML = "Please select a movie"
    }

    if (document.querySelector('#program-select').value == "-") {
        return document.querySelector('#add-program-error').innerHTML = "Please select a program"
    }



    var movieName = document.querySelector('#movie-select').value;
    var programData = document.querySelector('#program-select').value;
    var selectedProgram;
    var selectedMovie;

    for (var i = 0; i < programList.length; i++) {
        console.log(programList[i].getData())
        if ('' + programData == programList[i].getData() + '') {
            console.log('STA je ovo ' + programList[i])
            selectedProgram = programList[i];
        }
    }

    for (var i = 0; i < movieList.length; i++) {

        if (movieName == movieList[i].movieTitle) {
            console.log("OVO " + movieList[i])
            selectedMovie = movieList[i];
        }
    }

    selectedProgram.addMovie(selectedMovie);



})