/**
 * Created by cstoker on 4/12/17.
 */
(functions() {

"use strict";



/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

'use strict';

var myNameIs = 'Cara'; // TODO: Fill in your name here.


function sayHello() {

    console.log("Hello from " + name);

}
sayHello();


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random()*100)+1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 */

var random = Math.floor(Math.random() * 100) + 1;

function isOdd(number) {
    var message = (number % 2) ?  "number is odd." : "number is even.";
    console.log();
}


/**
 * TODO:
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

console.log(random);

isOdd(2);

})()