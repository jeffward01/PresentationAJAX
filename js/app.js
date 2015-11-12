$('#GoBtn').on('click', function () {

    //API KEY
    var APIkey = "21e1dadd00a6746a";

    //Search Keyword or Zipcode
    var SearchCriteria = $('#SearchInput').val();

    //Validation
    if (SearchCriteria == "" || SearchCriteria == undefined || SearchCriteria == null) {
        alert("Please insert Search Criteria!")
        $('#ClearBtn').hide();
        return;
    } else {

        //Items to Grab from Weather API
        var displayLocationFull;
        var zipcode;
        var elevation;
        var timeZone;
        var temperature_string;
        var uv;
        var feelslike_string;
        var wind_string;
        var wind_dir;
        var wind_mph;
        var icon_url;
        var icon;
        var weather;
        var humidity;
        var longitude;
        var latitude;


        //AJAX CALL
        $.ajax({
            url: "http://api.wunderground.com/api/" + APIkey + "/conditions/q/" + SearchCriteria + ".json",
            dataType: "json",
            success: function (data) {

                // Try-Catch statement to ensure all errors are handled
                try {
                    //Grab information from returned JSON String
                    //[Insert Code here]

                    


                    //populate DOM with new values
                    $('#SearchLocation').text(displayLocationFull);
                    $('#subHeading').text("Zip: " +zipcode);
                    $('#CurrentWeather').text("Current Weather: " + weather);
                    $('#Temperature').text("Current Temperature: " + temperature_string);
                    $('#FeelsLike').text("Feels like: " + feelslike_string);
                    $('#longitude').text(longitude);
                    $('#latitude').text(latitude)
                    $('#elevation').text(elevation)
                    $('#timezone').text(timeZone);
                    $('#uv').text(uv);
                    $('#humidity').text(humidity);
                    $('#windStatus').text(wind_string);
                    $('#windSpeed').text(wind_mph);
                    $('#windDirection').text(wind_dir);


                    //Show Table after all values have been 'grabbed'
                    $('.tableRow').show();

                    //Set image
                    var icon = new Image();
                    var div = document.getElementById('iconImage');
                    icon.src = //insert ['icon_url'];
                    div.appendChild(icon)


                    //Error Checking
                } catch (err) {
                    alert("Please insert a valid zip code");
                    $('#ClearBtn').hide();
                    $('#SearchInput').val("");
                    return;
                }
            }
        });
    }
});





//Google maps