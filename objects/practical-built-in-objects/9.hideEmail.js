// Write a function to hide email addresses to protect them from unauthorized users.

'use strict';

function hideEmail (str) {

  var userName = str.split('@');
  var n = userName[0].length / 2;
  var halfUserName = userName[0].slice(0,n);

  return halfUserName += '...' + '@' + userName[1];

}

console.log(hideEmail('pera.pera@google.com'));
