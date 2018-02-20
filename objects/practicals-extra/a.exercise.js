function departureCalc(arrival, departure) {

    arrival = arrival.split(':');
    departure = departure.split(':');
   
    var arrivalSec = arrival[0] * 3600 + arrival[1] * 60 + arrival[2]*1;
    var departureSec = departure[0] * 3600 + departure[1] * 60 + departure[2]*1;

    console.log(arrival[0] * 3600);
    console.log(arrival[1] * 60);
    console.log(arrival[2]);
    console.log(arrivalSec);

   
    var time = departureSec/100 - arrivalSec/100;
   
    var timeHours = Math.floor(time / 3600);
    time %= 3600;
    var timeMinutes = Math.floor(time / 60);
    var timeSeconds = time % 60;
   
    return timeHours + ' hours ' + timeMinutes + ' minutes ' + timeSeconds*100 + ' seconds';
   
   }
   
   console.log(departureCalc('11:22:13', '11:43:22'))


   