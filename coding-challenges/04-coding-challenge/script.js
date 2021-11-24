///////////////////////////////////////
//////////// Tip Calculator //////////
/////////////////////////////////////
////////////////////////////////////
// tip 15% if bill is 50 - 300 ////
//      tip 20% otherwise      ///
///////////// Data //////////////
///////// 275, 40, 430 /////////
//////////// rules ////////////
//// no if/else statements ///
/////////////////////////////

// get bill data
bill = 430;
//set value for tip15 and tip 20
let tip15 = (bill * 15) / 100;
let tip20 = (bill * 20) / 100;
//determine if bill is between 50 and 300
bill >= 50 && bill <= 300
	? console.log(`Bill is ${bill}, tip is 15% (${tip15}). Total = ${bill + tip15}`)
	: console.log(`Bill is ${bill}, tip is 20% (${tip20}). Total = ${bill + tip20}`);
