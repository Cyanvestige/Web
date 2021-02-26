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
let players1 = game.players[0];
let players2 = game.players[1];

//2
let [gk, ...fieldPlayers] = [...players1];
console.log(gk, fieldPlayers);

//3
let allplayers = [...players1, ...players2];
console.log(allplayers);

//4
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
let team1 = game.odds.team1;
let x = game.odds.x;
let team2 = game.odds.team2;
console.log(team1, x, team2);

//6
function printGoals(...arg) {
  for (let i in arg) {
    console.log(arg[i]);
  }
  console.log(arg.length);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');
