var url = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=d196b19dfff57ff2ede0751c52d064e0";
var units = "&units=imperial";
var inputValue = document.querySelector("#inputValue, #input, .is-medium");
var searchField = document.querySelector("searchField");
// + inputValue.value +
var temp = document.querySelector("#currentTemp");
// var wind = document.querySelector('#currentWind')
var desc = document.querySelector("#desc");

var tempMax = document.querySelector("#max-temp");
var tempMin = document.querySelector("#min-temp");
var fiveDayCity = document.querySelector("#fiveDayForcast");
var dateTime = document.querySelector("#date-time");
var uv = document.querySelector("#currentUv");
var humidity = document.querySelector("#currentHumidity");
const clearButton = document.querySelector(".Clear Searches");

// var submitButton = document.querySelector("submitButton")
// var Temp = document.querySelector("currentTemp")
// var Wind = document.querySelector("currentWind")
// var Humidity = document.querySelector("currentHumidity")
// var Uv = document.querySelector("currentUv");

// api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335&units=imperial

// wind

function setup() {
  var button = select("#submit");
  button.mousePressed(findWeather);
  searchField.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

document.getElementById("searchButton").addEventListener("click", findWeather);

function findWeather(event) {
  event.preventDefault();
  if (inputValue.value.length < 1) return;
  input = input.value;
  // url = url + input + apiKey + units;
  console.log(url);
  event.preventDefault();
}
  if (inputValue.val().trim() !== ""){
  input = inputValue.val().trim();
  currentTemp = (inputValue);
  fetch(url)

    // api.openweathermap.org/data/2.5/weather?q={city}&appid={ }
    .then((response) => response.json())
    .then((data) => {
      console.log(data.main.temp);
    
      var currentTempValue = Math.round(data["main"]["temp"]);
      var descValue = data["weather"]["0"]["description"];
      var tempMaxValue = Math.round(data["main"]["temp_max"]);
      var tempMinValue = Math.round(data["main"]["temp_min"]);
      var currentWindValue = Math.round(data["wind"]["speed"]);
      var humidityValue = data["main"]["humidity"];
      // var tempWeather = document.querySelector('#weatherTemp');
      tempWeather.innerText = currentTemp;
      cityName.innerHTML = nameValue;
      desc.innerHTML =
        "Current conditions:  <strong>" + descValue + "</strong>.";
      currentTemp.innerHTML =
        "Current Temperature: <strong>" +
        currentTempValue +
        "</strong><sup>°F</sup>";
      tempMax.innerHTML =
        "Max Temp: <strong>" + tempMaxValue + "</strong><sup>°F</sup>";
      tempMin.innerHTML =
        "Min Temp: <strong>" + tempMinValue + "</strong><sup>°F</sup>";
      currentWind.innerHTML =
        "Wind Speed: <strong>" + currentWindValue + "mph</strong>";
      currentHumidity.innerHTML =
        "Humidity: <strong>" + humidityValue + "%</strong>";

      previousSearch.innerHTML += `<button class="button is-medium is-info" id="saved-button" onclick='saves(this.value);' value="${searchValue}"> ${searchValue}</button>`;
      removeDuplicate();
      localStorage.setItem("savedButtons", previousSearch.innerHTML);
    });


// function findWeather(event){https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily
//     input = input.value;
//     url = url + input + apiKey + units;
//     event.preventDefault();
//     console.log(url);

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             var innerText = input.value
//             var temp = (data.MainTemp)
//             var tempWeather = document.querySelector('#beyonce');
//             tempWeather.innerText = temp;
//             console.log(data)
//         })
// }
// document.getElementById('city').addEventListener('click', findWeather