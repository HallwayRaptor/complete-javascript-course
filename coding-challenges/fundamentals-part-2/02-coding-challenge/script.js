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

// bill amount
//let bill = 100;

const bills = [125, 555, 44];
const tips = ["", "", ""];
const total = ["", "", ""];

// tip 15% or 20%

tips[0] = calcTip(bills[0]);
tips[1] = calcTip(bills[1]);
tips[2] = calcTip(bills[2]);
console.log(`The tips are: ${tips}`);

total[0] = tips[0] + bills[0];
total[1] = tips[1] + bills[1];
total[2] = tips[2] + bills[2];
console.log(`The totals are: ${total}`);
