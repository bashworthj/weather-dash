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
      console.log(data)
  })})

  fetch(currentApi)
    .then(function (response) {
      response.json().then(function (data) {
      console.log(data)
  })});
}  
$(document).on("click", ".myClass", function() {
    var city = $(this).text();
    var currentApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(fiveDayApi)
    .then(function (response) {
      response.json().then(function (data) {
      console.log(data)
  })})

 
    fetch(currentApi)
    .then(function (response) {
      response.json().then(function (data) {
      console.log(data)
  })})
    
});



// var getUserRepos = function (user) {
//     var apiUrl = 'https://api.github.com/users/' + user + '/repos';
  
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//             displayRepos(data, user);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to GitHub');
//       });
//   };
  










