//Coding Challenge #1 from lecture 109
'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

//1
for (const [num, name] of game.scored.entries()) {
  console.log(`Goal ${num + 1}: ${name}`);
}

//2
let calcAvg = odds => {
  let sum = 0;
  for (const odd of Object.values(odds)) {
    sum += odd;
  }
  return sum / Object.values(odds).length;
};
console.log(calcAvg(game.odds));

//3
for (const [key, odd] of Object.entries(game.odds)) {
  key !== 'x'
    ? console.log(`Odd of victory ${game[key]}: ${odd}`)
    : console.log(`Odd of draw: ${odd}`);
}

//BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
