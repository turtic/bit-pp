function departureCalc(departure, arrival) {

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
   
   console.log(departureCalc('11:22:13', '11:43:22'))


   