"use strict";
// data for test
// dolphins scores
const dGame1 = 85;
const dGame2 = 54;
const dGame3 = 41;
// koalas scores
const kGame1 = 23;
const kGame2 = 34;
const kGame3 = 27;

// calculate the average of 3 scores
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// calculate average for Dolphins
const dolphinAvg = Math.round(calcAvg(dGame1, dGame2, dGame3));
// calculate average for Koalas
const koalasAvg = Math.round(calcAvg(kGame1, kGame2, kGame3));

// check for the winner
const checkWinner = function (avgDolphins, avgKoalas) {
	let winner = "";
	if (avgDolphins > avgKoalas * 2) {
		winner = `Dolphins win! (${dolphinAvg} to ${koalasAvg})`;
	} else if (avgKoalas > avgDolphins * 2) {
		winner = `Koalas win! (${koalasAvg} to ${dolphinAvg})`;
	} else {
		winner = `It's a draw!`;
	}
	return winner;
};

let declareWinner = checkWinner(dolphinAvg, koalasAvg);
console.log(declareWinner);
