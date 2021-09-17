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

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
  
    //use the name search api to search for the cities coordinates
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName.value + 'units=imperial&appid=d196b19dfff57ff2ede0751c52d064e0').then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {

             currentlocation.innerText = data.name;
        inputname.value = "";
        let b = document.createElement("city");
        b.setAttribute("type", "submit");
        b.setAttribute("value", data.name);
        b.setAttribute("id", data.name);
        b.setAttribute("class", "btnClass");
        buttonList.prepend(b);
        buttonList.length
        
        $(".btnClass").click(function (event) {  

          event.preventDefault();
        }

// function setup() {

//     var button = select('#submit');
//     button.mousePressed(searchField);
//     searchField.addEventListener("submit", function (event) {
//     event.preventDefault();
//     })
// }
// document.getElementById('searchButton').addEventListener('click', searchField) 
 
// // <input=select:true ('#city')> 

// function searchField(event) {
//     event.preventDefault();
//     input = input.value;
//     url = url + input + apiKey + units;
//     console.log(url);
//     fetch(url)
//         // api.openweathermap.org/data/2.5/weather?q={city}&appid={ }    
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.main.temp);
//             var temp = (data.main.temp)
//             var tempWeather = document.querySelector('#weatherTemp');
//             tempWeather.innerText = temp;
//         })
// }