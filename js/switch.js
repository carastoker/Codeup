"use strict";

var receipt = 60;
var luckyNumber = Math.floor(Math.random() * 6);

switch (luckyNumber) {
    case 1:
        var discount = receipt - (receipt * .1);
        console.log("You got a 10% discount. Your total is $" + discount);
        break;
    case 2:
        var discount = receipt - (receipt * .25);
        console.log("You got a 25% discount. Your total is $" + discount);
        break;
    case 4:
        var discount = receipt - (receipt * .50);
        console.log("You got a 50% discount. Your total is $" + discount);
        break;
    case 5:
        console.log("You won. Your total is free!");
        break;
    case 0:
        console.log("no prize");
        break;
    default:
        console.log("nada");
}