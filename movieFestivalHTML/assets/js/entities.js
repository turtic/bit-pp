'use strict';

var movieList = [];

function Movie(title, length, genre) {
    this.movieTitle = title;
    this.movieLength = length;
    this.movieGenre = genre;
}

Movie.prototype.getData = function () {
    return this.movieTitle + ', ' + this.movieLength + 'min' + ', ' + this.getGen();
}

Movie.prototype.getGen = function () {
    var a = this.movieGenre[0] + this.movieGenre[this.movieGenre.length - 1];
    return a.toUpperCase(this.movieGenre);
}