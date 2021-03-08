//Coding Challenge #4 from lecture 165
'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});

//2

const SarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(SarahsDog);
if (SarahsDog.curFood > SarahsDog.recFood)
  console.log("Sarah's dog is Eating too much");
if (SarahsDog.curFood < SarahsDog.recFood)
  console.log("Sarah's dog is Eating too little");
//3
let ownersEatTooMuch = Array.from(
  dogs.filter(dog => dog.curFood > dog.recFood),
  dog => dog.owners
);
ownersEatTooMuch = ownersEatTooMuch.flat();
console.log(ownersEatTooMuch);

let ownersEatTooLittle = Array.from(
  dogs.filter(dog => dog.curFood < dog.recFood),
  dog => dog.owners
);
ownersEatTooLittle = ownersEatTooLittle.flat();
console.log(ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

//5
let exactlyRecom = dogs.some(dog => dog.curFood === dog.recFood);
console.log(exactlyRecom);

//6
let okayRecom = dogs.some(
  dog => dog.curFood <= 1.1 * dog.recFood || dog.curFood >= 0.9 * dog.recFood
);
console.log(okayRecom);

//7
let okayDog = Array.from(
  dogs.filter(
    dog => dog.curFood <= 1.1 * dog.recFood && dog.curFood >= 0.9 * dog.recFood
  )
);
console.log(okayDog);

//8
const shallowDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogs);
console.log(shallowDogs);
