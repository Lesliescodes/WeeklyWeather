// var weather;

var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=d196b19dfff57ff2ede0751c52d064e0';
var units = '&units=imperial';
var input = document.querySelector("#city");
var searchField = document.querySelector("#searchField");
var currentlocation = document.getElementById("current-location")
var currenttemp = document.getElementById("current-temp")
var currentwind = document.getElementById("current-wind")
var currenthumidity = document.getElementById("current-humidity")
var currentuv = document.getElementById("current-uv")
var weatherIcon = document.getElementById("icon")
var buttonList = document.getElementById("button-list")
var dayOneTemp = document.getElementById("dayOneTemp")
var dayTwo = document.getElementById("dayTwo")
var dayThree = document.getElementById("dayThree")
var dayFour = document.getElementById("dayFour")
var dayFive = document.getElementById("dayFive")


    var button = select('#submit');
    button.mousePressed(findWeather);
    searchField.addEventListener("submit", function (event) {
        event.preventDefault();
    })
}
 <input=select:true ('#city')> <input>

document.getElementById('searchButton').addEventListener('click', findWeather)

function findWeather(event) {
    event.preventDefault();
    input = input.value;
    url = url + input + apiKey + units;
    console.log(url);
    fetch(url)
        api.openweathermap.org/data/2.5/weather?q={city}&appid={ }    
        .then(response => response.json())
        .then(data => {
            console.log(data.main.temp);
            var temp = (data.main.temp)
            var tempWeather = document.querySelector('#weatherTemp');
            tempWeather.innerText = temp;
        })
}