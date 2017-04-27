/**
 * Created by cstoker on 4/27/17.
 */

(function() {

    "use strict";

    function getAjax(lat, lng) {
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "31ae192f96e6436d8cd2a8ef234d6a59",
            cnt: "3",
            units: "imperial",
            lat: lat,
            lon: lng
        }).done(function (data) {
            findWeather(data);
        });
    }

    getAjax(29.426791, -98.489602);

    function findWeather(weather) {
        var content ="<h2>" + weather.city.name + "</h2>";
        console.log(weather);

        for (var i = 0; i < weather.list.length; i++) {
            content += "<div  class='col-sm-4 box text-center'>";
            content += "<h2>" + weather.list[i].temp.min + "/" + weather.list[i].temp.max + "</h2>";
            content += "<img src='http://openweathermap.org/img/w/" + weather.list[i].weather[0].icon + ".png'>";
            content += "<p>" + "<strong>Clouds:</strong> " + weather.list[i].clouds + "</p>";
            content += "<p>" + "<strong>Humidity:</strong> " + weather.list[i].humidity + "</p>";
            content += "<p>" + "<strong>Wind:</strong> " + weather.list[i].speed + "</p>";
            content += "<p>" + "<strong>Pressure:</strong> " + weather.list[i].pressure + "</p>";
            content += "</div>";

        }

        $("#container-1").html(content);

        console.log(content);
        // $('.container').html(content);
    }

    var geoCoder;
    var mapCode;

    function startMap() {
        geoCoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(29.426791, -98.489602);
        var mapOptions = {
            zoom: 18,
            center: latlng,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            scrollwheel: false
        }

        mapCode = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    }
    startMap();

    function codeAddress() {
        var address = $('#address').val();
//          var address = "619 W. Randolph, Chicago, IL 60661";
        geoCoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == 'OK') {
                mapCode.setCenter(results[0].geometry.location);
                var lat = results[0].geometry.location.lat();
                var lon = results[0].geometry.location.lng();
                getAjax(lat, lon);
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: mapCode

                });

            } else {
                alert('geoCode failed for following reason: ' + status);
            }

        });
    }

    $('#address-btn').click(codeAddress);


})();
