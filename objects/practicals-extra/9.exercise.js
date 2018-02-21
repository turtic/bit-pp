// Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 8 seconds

'use strict'

// solution a

function departureOldSchool(departure, arrival) {

  arrival = arrival.split(':');
  departure = departure.split(':');
 
  var arrivalSec = arrival[0] * 3600 + arrival[1] * 60 + arrival[2]*1;
  var departureSec = departure[0] * 3600 + departure[1] * 60 + departure[2]*1;

  var time = arrivalSec - departureSec;
 
  var timeHours = Math.floor(time / 3600);
  time %= 3600;
  var timeMinutes = Math.floor(time / 60);
  var timeSeconds = time % 60;
 
  return timeHours + ' hours ' + timeMinutes + ' minutes ' + timeSeconds + ' seconds';
 
 }
 
//  console.log(departureOldSchool('11:22:13', '11:43:22'))

// =======================================================================================
 
//  solution b

function departureCalc(departure, arrival) {

  arrival = arrival.split(':');
  departure = departure.split(':');
  // console.log(arrival)
  // console.log(departure)
  
  var arrivalDate = new Date (2018, 1, 1, arrival[0], arrival[1], arrival[2]);

  // console.log(arrivalDate)
  // console.log(arrivalDate.getTime())
 
  var departureDate = new Date (2018, 1, 1, departure[0], departure[1], departure[2]);

  //  console.log(departureDate)
  // console.log(departureDate.getTime())
  
  var time = arrivalDate.getTime() - departureDate.getTime(); 
  var timeDate = new Date(time);

  // console.log(time)
  // console.log(timeDate)
  console.log(timeDate.getUTCHours())
  console.log(timeDate.getMinutes())
  console.log(timeDate.getSeconds())

  // timeDate.getHours()
  // var time = departureSec/100 - arrivalSec/100;

  // var timeHours = Math.floor(time / 3600);
  // time %= 3600;
  // var timeMinutes = Math.floor(time / 60);
  // var timeSeconds = time % 60;

  return '';

}

console.log(departureCalc('07:22:13', '11:43:22'))


