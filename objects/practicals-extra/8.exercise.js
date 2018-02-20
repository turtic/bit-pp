// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

'use strict'

function birthdayCalc(date) {

  var birthdayMili = new Date(date).getTime();
  var date9 = new Date();
  var day = date9.getDate();
  var month = date9.getMonth()+1
  var dateMili = new Date(month + ' ' + day).getTime();
  var coming = birthdayMili - dateMili;

  var comingSec = coming / 1000;
  var comingMin = comingSec / 60;
  var comingHour = comingMin / 60;
  var comingDay = comingHour / 24;


  return comingDay;

}

console.log(birthdayCalc('25 February'))

console.log(birthdayCalc('8 September'))

console.log(birthdayCalc('28 September'))
