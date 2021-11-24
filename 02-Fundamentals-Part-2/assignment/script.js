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

// 02-Function Declaration vs Expression
// // function declaration
// // set population of countries and world
// const worldPop = 7900;
// const usaPop = 350;
// const canPop = 37;
// const mexPop = 128;
// // convert population to percentage of world population
// function percentageOfWorld1(population) {
// 	const popPercent = (population / worldPop) * 100;
// 	return Math.round(popPercent * 10) / 10;
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

// const percentageOfWorld2 = function (population) {
// 	const popPercent = (population / worldPop) * 100;
// 	return Math.round(popPercent * 10) / 10;
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
