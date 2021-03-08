//String Methods practice from lecture 124
'use strict';
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
let firstStep = flights.split('+');
for (let a of firstStep) {
  let [type, from, to, time] = a.split(';');
  type.startsWith('_Delayed')
    ? (type = '🏮' + type.replace(/_/g, ' '))
    : (type = '' + type.replace(/_/g, ' '));
  from = 'from ' + from.substring(0, 3).toUpperCase();
  to = 'to ' + to.substring(0, 3).toUpperCase();
  time = '(' + time + ')';
  let res = `${type} ${from}${to} ${time}`;
  console.log(res);
}
