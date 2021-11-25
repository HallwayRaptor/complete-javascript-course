//"use strict";
// // Fundamentals Part 2

// // 01-Functions
// // // takes country population and capital city and outputs a description
// // function describeCountry(country, population, capitalCity) {
// //   let description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// //   return description;
// // }
// // // call describeCountry for Canada
// // console.log(describeCountry("Canada", 37, "Ottawa"));
// // // call describeCountry for USA
// // console.log(describeCountry("United States", 350, "Washington"));
// // // call describeCountry for Mexico
// // console.log(describeCountry("Mexico", 128, "Mexico City"));

// //02-Function Declaration vs Expression
// // function declaration
// // set population of countries and world
// const worldPop = 7900;
// const usaPop = 350;
// const canPop = 37;
// const mexPop = 128;
// const finPop = 5;
// // convert population to percentage of world population
// //
// // // function declaration version
// // console.log(`Function Declaration Version`);
// // function percentageOfWorld1(population) {
// // 	return Math.round((population / worldPop) * 100 * 10) / 10;
// // }
// // // check population percentage for USA
// // let usaPercent = percentageOfWorld1(usaPop);
// // console.log(`USA population is ${usaPercent} % of the world population`);
// // // check population percentage for Canada
// // let canPercent = percentageOfWorld1(canPop);
// // console.log(`Canada population is ${canPercent} % of the world population`);
// // // check population percentage for Mexico
// // let mexPercent = percentageOfWorld1(mexPop);
// // console.log(`Mexico population is ${mexPercent} % of the world population`);
// // //
// // //function expression version
// // console.log(`Function Expression Version`);
// // const percentageOfWorld2 = function (population) {
// // 	return Math.round((population / worldPop) * 100 * 10) / 10;
// // };
// // // check population percentage for USA
// // usaPercent = percentageOfWorld2(usaPop);
// // console.log(`USA population is ${usaPercent} % of the world population`);
// // // check population percentage for Canada
// // canPercent = percentageOfWorld2(canPop);
// // console.log(`Canada population is ${canPercent} % of the world population`);
// // // check population percentage for Mexico
// // mexPercent = percentageOfWorld2(mexPop);
// // console.log(`Mexico population is ${mexPercent} % of the world population`);
// //
// //arrow function version
// //console.log(`Arrow Function Version`);
// const percentageOfWorld3 = (population) => Math.round((population / worldPop) * 100 * 10) / 10;
// // // check population percentage for USA
// // usaPercent = percentageOfWorld3(usaPop);
// // console.log(`USA population is ${usaPercent} % of the world population`);
// // // check population percentage for Canada
// // canPercent = percentageOfWorld3(canPop);
// // console.log(`Canada population is ${canPercent} % of the world population`);
// // // check population percentage for Mexico
// // mexPercent = percentageOfWorld3(mexPop);
// // console.log(`Mexico population is ${mexPercent} % of the world population`);

// // 04 - Functions Calling Other Functions
// // create describe population function
// // const describePopulation = function (country, population) {
// // 	const percentageOfCountry = percentageOfWorld3(population);
// // 	return `${country} has ${population} million people, which is about ${percentageOfCountry} % of the world population.`;
// // };

// // console.log(describePopulation("Canada", 37));
// // console.log(describePopulation("The United States", 370));
// // console.log(describePopulation("Mexico", 128));

// const populations = [350, 36, 128, 11];

// //console.log(populations.length == 4);

// const percentages = [
// 	percentageOfWorld3(usaPop),
// 	percentageOfWorld3(canPop),
// 	percentageOfWorld3(mexPop),
// 	percentageOfWorld3(finPop),
// ];
// //console.log(percentages);

// //create an array with neighboring countries of USA
// const neighbors = ["Canada", "Mexico"];
// //log array to console
// console.log(neighbors);
// //add new country to array
// neighbors.push("Utopia");
// //log array with new country on it
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);
// if (!neighbors.includes("Germany")) {
// 	console.log("Probably not a central European country");
// }
// console.log(neighbors.indexOf("Canada"));
// neighbors[0] = "Not Canada";
// console.log(neighbors);

// const myCountry = {
// 	country: "Canada",
// 	capital: "Ottawa",
// 	language: "English",
// 	population: 36,
// 	neighbors: ["United States"],

// 	checkIsland: function () {
// 		// if there are no neighboring countries checkIsland is true. If there are neighboring countries checkIsland is false
// 		return !neighbors.length > 0 ? (this.isIsland = true) : (this.isIsland = false);
// 	},

// 	describe: function () {
// 		console.log(
// 			`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring country and a capital called ${this.capital}`
// 		);
// 	},
// };

// myCountry.describe();
// console.log(myCountry.checkIsland());
// console.log(myCountry);

// console.log(
// 	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring country and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);
//console.log(myCountry);

// const Jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtmann",
// 	age: 2037 - 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// };

// console.log(
// 	`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`
// );

// for (let vote = 1; vote <= 50; vote++) {
// 	console.log(`voter number ${vote} is currently voting.`);
// }

// const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven"]];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
// 	console.log(jonas[i], typeof jonas[i]);

// 	// types[i] = typeof jonas[i];
// 	types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1990, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2075 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log(`--- ONLY STRINGS ---`);
// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] !== "string") continue;

// 	console.log(jonas[i]);
// }

// console.log(`--- BREAK WITH NUMBER ---`);
// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] === "number") break;

// 	console.log(jonas[i]);
// }

// const worldPop = 7900;
// const percentageOfWorld3 = (population) => Math.round((population / worldPop) * 100 * 10) / 10;
// const populations = [350, 36, 128, 11];
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
// 	percentages2.push(percentageOfWorld3(populations[i]));
// }

// const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven"]];

// for (let i = jonas.length - 1; i >= 0; i--) {
// 	//console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 10; exercise++) {
// 	//console.log(`----- STARTING EXERCISE ----- ${exercise}`);

// 	for (let rep = 1; rep < 6; rep++) {
// 		//console.log(`Lifting weights repetition ${rep}`);
// 	}
// }

// const listOfPlaces = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweeden", "Russia"]];
// for (let i = 0; i < listOfPlaces.length; i++) {
// 	for (let j = 0; j < listOfPlaces[i].length; j++) {
// 		//console.log(`Place: ${listOfPlaces[i][j]}`);
// 	}
// }

// for (let rep = 1; rep < 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`WHILE: Lifting weights repetition ${rep}`);
// 	rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log(`Loop is about to end...`);
}

const worldPop = 7900;
const percentageOfWorld3 = (population) => Math.round((population / worldPop) * 100 * 10) / 10;
const populations = [350, 36, 128, 11];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
	percentages2.push(percentageOfWorld3(populations[i]));
}

let counter = 0;
while (counter < populations.length) {
	percentages2.push(percentageOfWorld3(populations[counter]));
	console.log(percentages2);
	counter++;
}
