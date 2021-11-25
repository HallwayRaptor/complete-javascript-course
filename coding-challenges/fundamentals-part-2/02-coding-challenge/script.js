"use strict";
//tip 15% for bills 50-300
//tip 20% for other bills

//calculate tip for the bill
const calcTip = function (bill) {
	if (bill >= 50 && bill <= 300) {
		return (bill * 15) / 100;
	} else {
		return (bill * 20) / 100;
	}
};

const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	let avg = sum / arr.length;
	console.log((Math.round(avg) * 10) / 10);
};

// bill amount
//let bill = 100;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
// tip 15% or 20%
tips[0] = calcTip(bills[0]);
tips[1] = calcTip(bills[1]);
tips[2] = calcTip(bills[2]);
// console.log(`The tips are: ${tips}`);
total[0] = tips[0] + bills[0];
total[1] = tips[1] + bills[1];
total[2] = tips[2] + bills[2];
// console.log(`The totals are: ${total}`);

for (let i = 0; i < bills.length; i++) {
	//tips.push(calcTip(bills[i]));
	total.push(calcTip(bills[i]) + bills[i]);
}
console.log(`TOTALS: ${total}`);

calcAverage(total);
