// Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 8 seconds

'use strict'
function departureCalc(arrival, departure) {

  arrival = arrival.split(':');
  departure = departure.split(':');

  var arrivalSec = arrival[0] * 3600 + arrival[1] * 60 + arrival[2];
  var arrivalDate = new Date (2018, 1, 1, arrival[0], arrival[1], arrival[2]);

  var departureSec = departure[0] * 3600 + departure[1] * 60 + departure[2];
  var departureDate = new Date (2018, 1, 1, arrival[0], arrival[1], arrival[2]);
  
  var time = departureDate.getTime() - arrivalDate.getTime(); 
  var timeDate = new Date(time);

  timeDate.getHours()
  var time = departureSec/100 - arrivalSec/100;

  var timeHours = Math.floor(time / 3600);
  time %= 3600;
  var timeMinutes = Math.floor(time / 60);
  var timeSeconds = time % 60;

  return timeHours + ' hours ' + timeMinutes + ' minutes ' + timeSeconds*100 + ' seconds';

}

console.log(departureCalc('11:22:13', '11:43:22'))


