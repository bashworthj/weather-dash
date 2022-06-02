var cityList = $('#searchedCities');

$('#city-posit').children('button').addClass('city-but');

$("#s-but").on("click", function() {
   
    var desiredCity = $("#userSearch").val().trim();
    var newCity =  $(`<li class="list-group-item mt-3 ml-2 ">${desiredCity}</li>`);
    document.getElementById("day5").style.visibility = "visible";
    document.getElementById("day4").style.visibility = "visible";
    document.getElementById("day3").style.visibility = "visible";
    document.getElementById("day2").style.visibility = "visible";
    document.getElementById("day1").style.visibility = "visible";
    cityList.append(newCity);


    
});



// $("#searchBtn").on("click", function(event) {
    

//     var city = $("#enterCity").val().trim();
//     currentCondition(city);
//     if (!searchHistoryList.includes(city)) {
//         searchHistoryList.push(city);
//         var searchedCity = $();
//         $("#searchHistory").append(searchedCity);
//     };

