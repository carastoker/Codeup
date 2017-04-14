(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // hint: area = pi * radius^2
            // To call a method is: variable.method();
            var area = Math.PI * (Math.pow(this.radius, 2))
            return area;
            console.log(area);
        },

        logInfo: function (doRounding) {
            var area = this.getArea();
            if(doRounding) {
                area = Math.round(area);
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


})();

<!--notes-->

<!--var interval = 200;-->
<!--var i = 1;-->
<!--var intervalId = setInterval;();-->

<!--intervalId = setInterval(function() {-->
<!--if (i === 10)-->

<!--}-->
<!--console.log('Howdy!');-->

<!--++i;-->

<!--}, interval);-->

<!--console.log(intervalId);-->