//Coding Challenge #1 from lecture 146
'use strict';
let dogsJulia1 = [3, 5, 2, 12, 7];
let dogsKate1 = [4, 1, 15, 8, 3];
let dogsJulia2 = [9, 16, 6, 8, 3];
let dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = (arr1, arr2) => {
  //1
  let arr1Corrected = arr1.slice();
  arr1Corrected.splice(0, 1);
  arr1Corrected.splice(-2);
  //2
  let both = arr1Corrected.concat(arr2);
  //3
  both.forEach(function (age, num) {
    age < 3
      ? console.log(`Dog number ${num} is still a puppy`)
      : console.log(`Dog number ${num} is an adult, and is ${age} years old.`);
  });
};

console.log('1st Data set');
checkDogs(dogsJulia1, dogsKate1);
console.log('2nd Data set');
checkDogs(dogsJulia2, dogsKate2);
