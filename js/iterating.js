(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ['josh', 'victoria', 'aarron', 'diletta', 'sammy'];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log(name.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    // for (var i= 0; i < names.length; i++) {
    //         console.log('The name at index ' + i + ' is: ' + names[i]);
    //     }


    names.forEach(function (element, index) {
        console.log(element + " and the index is: " + index);

})

    // console.log('The first name is: ' + names[0]);
    //
    // console.log('The first name is: ' + names[1]);
    //
    // console.log('The first name is: ' + names[2]);
    //
    // console.log('The first name is: ' + names[3]);

    // console.log(names [0]);

})();


