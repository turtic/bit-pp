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

    // azuriramo interfejs - prikayujemo novi film
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



})