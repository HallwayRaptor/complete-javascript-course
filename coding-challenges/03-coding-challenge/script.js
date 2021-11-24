// script.js
// 1. Calculate the average score for each team
// 2. Compare the team's average score to determine the winner of the completition.
// 3. bonus: include a requirement for a minimum score of 100.
// 4. bonus2: minimum score also applies to a draw!

// data //
// Dolphins score 96, 108, 89
// Koalas score 88, 91, 110

// data bonus //
// Dolphins 97, 112, 101
// Koalas 109, 95, 123

// data bonus2 //
// Dolphins 97, 112, 101
// Koalas 109, 95, 106

//Dolphins scores
let dGame1 = 97;
let dGame2 = 112;
let dGame3 = 101;
//Koalas scores
let kGame1 = 109;
let kGame2 = 95;
let kGame3 = 123;
//number of games
let numGames = 3;
//avg of Dolphins games
let dolphinAvg = (dGame1 + dGame2 + dGame3) / numGames;
dolphinAvg = Math.round(dolphinAvg);
//avg of Koala's games
let koalaAvg = (kGame1 + kGame2 + kGame3) / numGames;
koalaAvg = Math.round(koalaAvg);

console.log(`Dolphins average score is ${dolphinAvg}`);
console.log(`Koalas average score is ${koalaAvg}`);

if (dolphinAvg > koalaAvg) {
  if (dolphinAvg > 100) {
    console.log(`Dolphins win with an average score of ${dolphinAvg}`);
  } else {
    console.log(
      `Dolphins had a higher score but didn't meet the minimum of 100 points!`
    );
  }
} else if (koalaAvg > 100) {
  console.log(`Koalas win with an average score of ${koalaAvg}`);
}

// console.log(`Dolphins win with an average score of ${dolphinAvg}`);
// console.log(`Koalas win with an average score of ${koalaAvg}`);
