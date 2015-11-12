//Shrinks Search Bar to small size on load
$(document).ready(function () {

    //Hide Table 
    $('.tableRow').hide();
    $('#ClearBtn').hide();

    var searchField = $('#SearchInput');
    var icon = $('.SearchBtn');

    $(searchField).animate({
        width: '45%'
    }, 400, function () {}); //End searchField Animate

    $(icon).animate({
        right: '270px'
    }, 400, function () {}); //End icon animate 
});

//Changes size of Search Bar on focus
$(function () {
    var searchField = $('#SearchInput');
    var icon = $('.SearchBtn');


    //focus event handler
    $(searchField).on('focus', function () {
        $(this).animate({
            width: '100%'
        }, 400); //End Search Field Animate

        $(icon).animate({
            right: '10px'
        }, 400); //end icon animate
    }); //End Focus Handler


    //Blur event handler
    $(searchField).on('blur', function () {
        shrinkInput();
    }); //End Focus Handler



}); //End Document Ready


function shrinkInput() {
    var searchField = $('#SearchInput');
    var icon = $('.SearchBtn');

    if (searchField.val() == '') {
        $(searchField).animate({
            width: '45%'
        }, 400, function () {}); //End searchField Animate

        $(icon).animate({
            right: '270px'
        }, 400, function () {}); //End icon animate
    } //End If statement
}





//Show Table on click
$('#GoBtn').on('click', function () {




    $('#ClearBtn').show();
})

//ClearButton
$('#ClearBtn').on('click', function () {

    //Clear Divs
    $('.tableRow').hide();
    $('#SearchLocation').text("");
    $('#subHeading').text("");
    $('#CurrentWeather').text("");
    $('#Temperature').text("");
    $('#FeelsLike').text("");
    $('#longitude').text("");
    $('#latitude').text("")
    $('#elevation').text("")
    $('#timezone').text("");
    $('#uv').text("");
    $('#humidity').text("");
    $('#windStatus').text("");
    $('#windSpeed').text("");
    $('#windDirection').text("");
    $('#iconImage').empty();
    $('#ClearBtn').hide();
    $('#SearchInput').val("");
    shrinkInput();

})