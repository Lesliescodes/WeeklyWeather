var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=d196b19dfff57ff2ede0751c52d064e0';
var units = '&units=imperial';
var input = document.querySelector("#city");
var searchField = document.querySelector("#searchField");

function setup() {

    var button = select('#submit');
    button.mousePressed(findWeather);
    searchField.addEventListener("submit", function (event) {
        event.preventDefault();
    })
}
function findWeather(event) {
    event.preventDefault();
    input = input.value;
    url = url + input + apiKey + units;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.main.temp)
            var temp = (data.main.temp)
            var tempWeather = document.querySelector('#weatherTemp');
            tempWeather.innerText = temp;
        })
}
document.getElementById('submitButton').addEventListener('click', findWeather)
