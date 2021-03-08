//Coding Challenge #2 from lecture 152
'use strict';
let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];

//1
const calcAverageHumanAge = function (ages) {
  const adultDogs = ages
    .map(function (age, i) {
      if (age <= 2) return 2 * age;
      else return 16 + age * 4;
    })
    .filter(function (age, i) {
      return age >= 18;
    });
  console.log(adultDogs);
  const Average =
    adultDogs.reduce(function (acc, age) {
      return acc + age;
    }, 0) / adultDogs.length;
  return Average;
};

console.log('1st Data set');
console.log(calcAverageHumanAge(data1));

console.log('2nd Data set');
console.log(calcAverageHumanAge(data2));
