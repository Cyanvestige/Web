//Coding Challenge #3 from lecture 154
'use strict';
let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];

//1
const calcAverageHumanAge = ages =>
  ages
    .map(age => {
      if (age <= 2) return 2 * age;
      else return 16 + age * 4;
    })
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log('1st Data set');
console.log(calcAverageHumanAge(data1));

console.log('2nd Data set');
console.log(calcAverageHumanAge(data2));
