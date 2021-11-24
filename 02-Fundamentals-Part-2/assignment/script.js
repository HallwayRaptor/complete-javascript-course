"use strict";
// Fundamentals Part 2

// 01-Functions
// // takes country population and capital city and outputs a description
// function describeCountry(country, population, capitalCity) {
//   let description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//   return description;
// }
// // call describeCountry for Canada
// console.log(describeCountry("Canada", 37, "Ottawa"));
// // call describeCountry for USA
// console.log(describeCountry("United States", 350, "Washington"));
// // call describeCountry for Mexico
// console.log(describeCountry("Mexico", 128, "Mexico City"));

//02-Function Declaration vs Expression
// function declaration
// set population of countries and world
const worldPop = 7900;
const usaPop = 350;
const canPop = 37;
const mexPop = 128;
const finPop = 5;
// convert population to percentage of world population
//
// // function declaration version
// console.log(`Function Declaration Version`);
// function percentageOfWorld1(population) {
// 	return Math.round((population / worldPop) * 100 * 10) / 10;
// }
// // check population percentage for USA
// let usaPercent = percentageOfWorld1(usaPop);
// console.log(`USA population is ${usaPercent} % of the world population`);
// // check population percentage for Canada
// let canPercent = percentageOfWorld1(canPop);
// console.log(`Canada population is ${canPercent} % of the world population`);
// // check population percentage for Mexico
// let mexPercent = percentageOfWorld1(mexPop);
// console.log(`Mexico population is ${mexPercent} % of the world population`);
// //
// //function expression version
// console.log(`Function Expression Version`);
// const percentageOfWorld2 = function (population) {
// 	return Math.round((population / worldPop) * 100 * 10) / 10;
// };
// // check population percentage for USA
// usaPercent = percentageOfWorld2(usaPop);
// console.log(`USA population is ${usaPercent} % of the world population`);
// // check population percentage for Canada
// canPercent = percentageOfWorld2(canPop);
// console.log(`Canada population is ${canPercent} % of the world population`);
// // check population percentage for Mexico
// mexPercent = percentageOfWorld2(mexPop);
// console.log(`Mexico population is ${mexPercent} % of the world population`);
//
//arrow function version
//console.log(`Arrow Function Version`);
const percentageOfWorld3 = (population) => Math.round((population / worldPop) * 100 * 10) / 10;
// // check population percentage for USA
// usaPercent = percentageOfWorld3(usaPop);
// console.log(`USA population is ${usaPercent} % of the world population`);
// // check population percentage for Canada
// canPercent = percentageOfWorld3(canPop);
// console.log(`Canada population is ${canPercent} % of the world population`);
// // check population percentage for Mexico
// mexPercent = percentageOfWorld3(mexPop);
// console.log(`Mexico population is ${mexPercent} % of the world population`);

// 04 - Functions Calling Other Functions
// create describe population function
// const describePopulation = function (country, population) {
// 	const percentageOfCountry = percentageOfWorld3(population);
// 	return `${country} has ${population} million people, which is about ${percentageOfCountry} % of the world population.`;
// };

// console.log(describePopulation("Canada", 37));
// console.log(describePopulation("The United States", 370));
// console.log(describePopulation("Mexico", 128));

const populations = [350, 36, 128, 11];

//console.log(populations.length == 4);

const percentages = [
	percentageOfWorld3(usaPop),
	percentageOfWorld3(canPop),
	percentageOfWorld3(mexPop),
	percentageOfWorld3(finPop),
];
//console.log(percentages);

//create an array with neighboring countries of USA
const neighbors = ["Canada", "Mexico"];
//log array to console
console.log(neighbors);
//add new country to array
neighbors.push("Utopia");
//log array with new country on it
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes("Germany")) {
	console.log("Probably not a central European country");
}
console.log(neighbors.indexOf("Canada"));
neighbors[0] = "Not Canada";
console.log(neighbors);
