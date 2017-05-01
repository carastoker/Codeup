/**
 * Created by cstoker on 4/27/17.
 */

(function() {

    "use strict";
    // page load
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

    getAjax(37.09024, -95.712891);

    function findWeather(weather) {

        var content ="<h2>" + weather.city.name + "</h2>";
        // console.log(weather);

        for (var i = 0; i < weather.list.length; i++) {
            content += "<div  class='col-md-4 box text-center'>";
            content += "<h2>" + (Math.ceil(weather.list[i].temp.min)) + "&deg; / " + (Math.ceil(weather.list[i].temp.max)) + "&deg;" + "</h2>";
            content += "<img src='http://openweathermap.org/img/w/" + weather.list[i].weather[0].icon + ".png'>";
            content += "<p>" + "<strong>"+ weather.list[i].weather[0].main + ":</strong> " + weather.list[i].weather[0].description + "</p>";
            content += "<p>" + "<strong>Humidity:</strong> " + (Math.ceil(weather.list[i].humidity)) + "</p>";
            content += "<p>" + "<strong>Wind:</strong> " + (Math.ceil(weather.list[i].speed)) + "</p>";
            content += "<p>" + "<strong>Pressure:</strong> " + (Math.ceil(weather.list[i].pressure)) + "</p>";
            content += "</div>";

        }

        $("#container-1").html(content);

        // console.log(Math.ceil(weather.list[i].temp.max));
        // $('.container').html(content);
    }

    var geoCoder;
    var mapCode;

    function startMap() {
        geoCoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(37.09024, -95.712891);
        var mapOptions = {
            zoom: 4,
            center: latlng,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.TERRIAN,
            // additional map styling code
            styles: [
                {
                    "featureType":"administrative.land_parcel",
                    "elementType":"all",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"landscape.man_made",
                    "elementType":"all",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"poi",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"road",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"simplified"
                    },{
                        "lightness":-20
                    }]
                },{
                    "featureType":"road.highway",
                    "elementType":"geometry",
                    "stylers":[{
                        "hue":"#00ffe6"
                    }]
                },{
                    "featureType":"road.highway",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"simplified"
                    }]
                },{
                    "featureType":"road.arterial",
                    "elementType":"geometry",
                    "stylers":[{
                        "hue":"#00ffe6"
                    }]
                },{
                    "featureType":"road.arterial",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"road.local",
                    "elementType":"geometry",
                    "stylers":[{
                        "visibility":"simplified"
                    }]
                },{
                    "featureType":"road.local",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"simplified"
                    }]
                },{
                    "featureType":"transit",
                    "elementType":"all",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"water",
                    "elementType":"all",
                    "stylers":[{
                        "hue":"#00ffe6"
                    },{
                        "saturation": -20
                    },{
                        "lightness": 100
                    }]
                }]
            // scrollwheel: false
        }

        mapCode = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        createMarker(latlng.lat(), latlng.lng());
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
                createMarker(lat, lon);

            } else {
                alert('geoCode failed for following reason: ' + status);
            }

        });
    }

    function createMarker(lat, lon) {
        var marker = new google.maps.Marker({
            position: {
                lat : lat,
                lng : lon
            },
            map: mapCode,
            draggable: true,
            animation: google.maps.Animation.DROP
        });

        marker.addListener('dragend', function() {
            var lat = this.position.lat();
            var lng = this.position.lng();
            getAjax(lat,lng);
        });
    }

    $('#address-btn').click(codeAddress);


})();
