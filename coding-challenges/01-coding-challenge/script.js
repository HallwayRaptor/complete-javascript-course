// script.js //
// Mark and John are trying to compare their BMI, which is calculated using this formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kilograms and height in meter)

//Mark weighs 78kg and is 1.69m tall.
//John weighs 92 kg and is 1.9m tall.

//Mark weighs 95kg and is 1.88m tall.
//John weighs 85kg and is 1.76m tall.

// 1. Store Mark and John's mass and height in variables
// 2. Calculate both their BMIs using the forumula
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// 4. Print a nice output to the console, saying who has the higher BMI
// 5. Use a template literal to include the BMI values in the output

// //store mark's weight and height
// let markWeight = 95;
// let markHeight = 1.88;

// //store john's weight and height
// let johnWeight = 85;
// let johnHeight = 1.76;
// // true if mark has a higher BMI
let markHigherBMI = true;

// //BMI formula

// function bmiCalc(weight, height) {
// 	let bmi;
// 	bmi = weight / (height * height);
// 	return Math.round(bmi * 10) / 10;
// }

// let markBMI = bmiCalc(markWeight, markHeight);
// let johnBMI = bmiCalc(johnWeight, johnHeight);

// if (markBMI > johnBMI) {
// 	markHigherBMI = true;
// } else {
// 	markHigherBMI = false;
// }

// markHigherBMI
// 	? console.log(`Mark's BMI (${markBMI}) is higher than John's BMI ${johnBMI}`)
// 	: console.log(`Mark's BMI (${markBMI}) is lower than John's BMI (${johnBMI}).`);

// // console.log(`Mark's BMI is ${markBMI}. John's BMI is ${johnBMI}`)
// // console.log(markHigherBMI)

// Fundamentals 2 Coding Challenge #3

const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,

	calcBMI: function () {
		this.BMI = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
		return this.BMI;
	},
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.BMI = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
		return this.BMI;
	},
};

mark.calcBMI();
john.calcBMI();

mark.BMI > john.BMI ? (markHigherBMI = true) : (markHigherBMI = false);

markHigherBMI
	? console.log(`Mark's BMI ${mark.BMI} is higher than John's BMI ${john.BMI}`)
	: console.log(`Mark's BMI ${mark.BMI} is lower than John's BMI ${john.BMI}.`);
