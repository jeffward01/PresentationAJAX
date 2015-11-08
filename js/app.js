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


                    //Grab information from returned JSON String
                    zipcode = data['current_observation']['display_location']['zip'];
                    longitude = data['current_observation']['display_location']['longitude'];
                    latitude = data['current_observation']['display_location']['latitude'];
                    elevation = data['current_observation']['display_location']['elevation'];
                    timeZone = data['current_observation']['local_tz_short'];
                    weather = data['current_observation']['weather'];
                    temperature_string = data['current_observation']['temperature_string'];
                    wind_string = data['current_observation']['wind_string'];
                    wind_dir = data['current_observation']['wind_dir'];
                    wind_mph = data['current_observation']['wind_mph'];
                    uv = data['current_observation']['UV'];
                    feelslike_string = data['current_observation']['feelslike_string'];
                    icon = data['current_observation']['icon'];
                    icon_url = data['current_observation']['icon_url'];
                    humidity = data['current_observation']['relative_humidity'];
                    displayLocationFull = data['current_observation']['display_location']['full'];
                    //error = data['response']['error']['description'];

                    //populate DOM with new values
                    $('#SearchLocation').text(displayLocationFull);
                    $('#subHeading').text("Zip: " + zipcode);
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

                
                

                //Set image
                var icon = new Image();
                var div = document.getElementById('iconImage');
                icon.src = icon_url;
                div.appendChild(icon);

                $('.tableRow').show();
                if ((zipcode == undefined)) {
                    $('#errorDescription').text("ERROR!");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown, error) {
                $('.tableRow').hide();
                console.log(xhr.statusText);
                console.log(textStatus);
                console.log(error);

                $('#errorDescription').text("msg");
            }
        });


}
});





//Google maps
