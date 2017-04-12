/**
 * Created by cstoker on 4/10/17.
 */
"use strict";

var gradeAverage = (70 + 80 + 60) / 3;

console.log(grade);

if(gradeAverage >=80) {
    console.log("you're awesome");
} else if(gradeAverage <80) {
    console.log('you need practice"');
}

// // define var for all customer purchase amounts
// var ryan = 250;
// var cam = 180;
// var george = 320;
//
// var spent = 0;
//
// // if purchase amount is greater than 200 apply 35% discount
// spent = ryan;
// if(spent >=200) {
//     spent = spent - (spent * .35);
// }
// spent = cam;
// if(spent >=200) {
//     spent = spent - (spent * .35);
// }
// spent = george;
// if(spent >=200) {
//     spent = spent - (spent * .35);
// }
// //console.log out customer name, amount spent and amount paid
//
// else if(spent <=200) {
//
// }

console.log(flipCoin);

 var flipACoin = Math.floor(Math.random() * 2);

if(flipACoin) {
    console.log("Buy a house");
}

else {
    console.log("Buy a car");
}

// var choice = (flipACoin) ? "Buy a house" : "Buy a car";
//
// console.log(choice);


var customer = "'";

var costDollars = null;

var discountRate = .35;

var totalSpentDollars = null;

var discountBreakpointDollars = 200;

var camSpentDolars = 180;

var ryanSpentDollars = 250;

var georgeSpentDollars = 350;

var cam = "Cam";
var ryan = "Ryan";
var george = "George";

customer = cam;
totalSpentDollars = cameronSpentDollars;

if (totalSpentDollars > discountBreakpointDollars) {
    costDollars = totalSpentDollars - (totalSpentDollars * discountRate);
}

else {
    costDollars = totalSpentDollars;
}

console.log(customer + "bought" + "$" + totalSpentDollars + "worth of products" + "Final payment:" + "$" + costDollars + ".");

