/**
 * Created by cstoker on 4/27/17.
 */

(function() {

    "use strict";

    var content ="";

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: "31ae192f96e6436d8cd2a8ef234d6a59",
        q:     "San Antonio, TX",
    }).done(function(data) {
        console.log(data);
    });

})();