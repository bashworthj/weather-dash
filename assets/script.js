
var cityList = $('#searchedCities');

$('#city-posit').children('button').addClass('city-but');

$("#s-but").on("click", function() {
   
    var desiredCity = $("#userSearch").val().trim();
    var newCity =  $(`<button "type="button" class="btn btn-warning mb-2 myClass">${desiredCity}</button>`);
    
    document.getElementById("day5").style.visibility = "visible";
    document.getElementById("day4").style.visibility = "visible";
    document.getElementById("day3").style.visibility = "visible";
    document.getElementById("day2").style.visibility = "visible";
    document.getElementById("day1").style.visibility = "visible";
    cityList.append(newCity);
    currentWeather();

    
    
});
var apiKey = "d1e2d0763204896fd894698f5c6e27ee";


function currentWeather() {
  var city = $("#userSearch").val().trim();
  var currentApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(fiveDayApi)
    .then(function (response) {
      response.json().then(function (data) {
        var kelvin1 = data.list[1].main.temp
        var kelvin2 = data.list[2].main.temp
        var kelvin3 = data.list[3].main.temp
        var kelvin4 = data.list[4].main.temp
        var kelvin5 = data.list[5].main.temp
        document.getElementById('temp1day').textContent = parseInt((kelvin1 * 1.8) - 459.67);
        document.getElementById('temp2day').textContent = parseInt((kelvin2 * 1.8) - 459.67);
        document.getElementById('temp3day').textContent = parseInt((kelvin3 * 1.8) - 459.67);
        document.getElementById('temp4day').textContent = parseInt((kelvin4 * 1.8) - 459.67);
        document.getElementById('temp5day').textContent = parseInt((kelvin5 * 1.8) - 459.67);

        document.getElementById('wind1day').textContent = data.list[1].wind.speed
        document.getElementById('wind2day').textContent = data.list[2].wind.speed
        document.getElementById('wind3day').textContent = data.list[3].wind.speed
        document.getElementById('wind4day').textContent = data.list[4].wind.speed
        document.getElementById('wind5day').textContent = data.list[5].wind.speed

        document.getElementById('humidity1day').textContent = data.list[1].main.humidity
        document.getElementById('humidity2day').textContent = data.list[2].main.humidity
        document.getElementById('humidity3day').textContent = data.list[3].wind.humidity
        document.getElementById('humidity4day').textContent = data.list[4].main.humidity
        document.getElementById('humidity5day').textContent = data.list[5].main.humidity
      
  })})

  fetch(currentApi)
    .then(function (response) {
      response.json().then(function (data) {
        document.getElementById('temp').textContent = data.main.temp
        document.getElementById('wind').textContent = data.wind.speed
        document.getElementById('humidity').textContent = data.main.humidity
  })});
  document.getElementById('currentCity').textContent = city;
}  
$(document).on("click", ".myClass", function() {
    var city = $(this).text();
    var currentApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(fiveDayApi)
    .then(function (response) {
      response.json().then(function (data) {
        var kelvin1 = data.list[1].main.temp
        var kelvin2 = data.list[2].main.temp
        var kelvin3 = data.list[3].main.temp
        var kelvin4 = data.list[4].main.temp
        var kelvin5 = data.list[5].main.temp
        document.getElementById('temp1day').textContent = parseInt((kelvin1 * 1.8) - 459.67);
        document.getElementById('temp2day').textContent = parseInt((kelvin2 * 1.8) - 459.67);
        document.getElementById('temp3day').textContent = parseInt((kelvin3 * 1.8) - 459.67);
        document.getElementById('temp4day').textContent = parseInt((kelvin4 * 1.8) - 459.67);
        document.getElementById('temp5day').textContent = parseInt((kelvin5 * 1.8) - 459.67);

    
        document.getElementById('wind1day').textContent = data.list[1].wind.speed
        document.getElementById('wind2day').textContent = data.list[2].wind.speed
        document.getElementById('wind3day').textContent = data.list[3].wind.speed
        document.getElementById('wind4day').textContent = data.list[4].wind.speed
        document.getElementById('wind5day').textContent = data.list[5].wind.speed

        document.getElementById('humidity1day').textContent = data.list[1].main.humidity
        document.getElementById('humidity2day').textContent = data.list[2].main.humidity
        document.getElementById('humidity3day').textContent = data.list[3].main.humidity
        document.getElementById('humidity4day').textContent = data.list[4].main.humidity
        document.getElementById('humidity5day').textContent = data.list[5].main.humidity
      
  })})

 
    fetch(currentApi)
    .then(function (response) {
      response.json().then(function (data) {
      document.getElementById('temp').textContent = data.main.temp
      document.getElementById('wind').textContent = data.wind.speed
      document.getElementById('humidity').textContent = data.main.humidity
      
  })})
    document.getElementById('currentCity').textContent = city;
});




  










