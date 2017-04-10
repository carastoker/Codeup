"use strict";
//
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

var luckyNumber = Math.floor(Math.random()* 12);

switch (luckyNumber) {
    case 1:
        console.log ("Jan");
        break;
    case 2:
        console.log ("Feb");
        break;
    case 3:
        console.log ("Mar");
        break;
    case 4:
        console.log ("Apr");
        break;
    case 5:
        console.log ("May");
        break;
    case 6:
        console.log ("Jun");
        break;
    case 7:
        console.log ("Jul");
        break;
    case 8:
        console.log ("Aug");
        break;
    case 9:
        console.log ("Sep");
        break;
    case 10:
        console.log ("Oct");
        break;
    case 11:
        console.log ("Nov");
        break;
    case 12:
        console.log ("Dec"  );
        break;

    default:
        console.log("Not working");
}

