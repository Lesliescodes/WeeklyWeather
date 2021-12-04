var apiKey = "d196b19dfff57ff2ede0751c52d064e0";

var searchHistory = [];

var searchForm = document.getElementById('searchForm');

var userInput = document.getElementById('userInput');
var currentWeatherContainer= document.getElementById('current');

var forecastContainer = document.getElementById('forecast');

var historyContainer = document.getElementById('history');

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function handleFormSubmit(e){
e.preventDefault();

var search = userInput.value;

getLatLon(search);

}

function getLatLon(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(function(res){
    return res.json()
  }).then(function (data){
    oneCallApi(data)
    
  })
}

function oneCallApi(data){
  var lat = data.coord.lat;
  var lon = data.coord.lon;
  var cityName = data.name;

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`).then(function(res){
    return res.json()
  }).then(function(data){
    getCurrentWeather(cityName, data.current, data.timezone)
    getForecast(data.daily, data.timezone)
  })
}

function getCurrentWeather(city, daily, tz){
  var date = dayjs().tz(tz).format('M/D/YYYY');

  var temp = daily.temp;
  var wind = daily.wind_speed;
  var humidity = daily.humidity;
  var uvi = daily.uvi;
  var weatherIconsrc = `https://openweathermap.org/img/w/${daily.weather[0].icon}.png`

  //create elements for html
  var card = document.createElement('div');
  var cbody = document.createElement('div');
  var cardHeading = document.createElement('h2');
  var weatherIcon = document.createElement('img');
  var tempEl = document.createElement('p');
  var windEl = document.createElement('p');
  var humidEl = document.createElement('p');
  var uviEl = document.createElement('p');

  card.setAttribute('class', 'card');
  cbody.setAttribute('class', 'card-body');
  card.append(cbody);

  cardHeading.textContent = `${city} ${date}`
  cardHeading.setAttribute('class', 'card-title');
  weatherIcon.setAttribute('src', weatherIconsrc)
  cardHeading.append(weatherIcon)

  tempEl.textContent = `Temp: ${temp}`
  windEl.textContent = `Wind: ${wind}`;
  humidEl.textContent = `Humidity: ${humidity}%`;
  cbody.append(cardHeading, tempEl, windEl, humidEl)
currentWeatherContainer.innerHTML = ''
  currentWeatherContainer.append(card)

}

function getForecast(forecast, tz){
  var start = dayjs().tz(tz).add(1, 'day').startOf('day').unix()
  var end = dayjs().tz(tz).add(6, 'day').startOf('day').unix()

  var cardHeading = document.createElement('div');
  var heading = document.createElement('h3');

  // var forecasttempEl = document.createElement('p');
  // var forecastwindEl = document.createElement('p');
  // var forecasthumidEl = document.createElement('p');
  cardHeading.setAttribute('class', 'col-md-12');
  heading.textContent = "5 Day Forecast"
  cardHeading.append(heading);

  forecastContainer.innerHTML = '';

  forecastContainer.append(cardHeading);


  for (let i = 0; i < forecast.length; i++) {
    if(forecast[i].dt >= start && forecast[i].dt < end){
      renderForecast(forecast[i], tz)
    }
    
  }
}

function renderForecast(forecast, tz){
  
  var date = dayjs().unix(forecast.dt).tz(tz).format('M/D/YYYY');
  
}

searchForm.addEventListener('submit', handleFormSubmit);

