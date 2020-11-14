function showTemperature(response) {
  document.querySelector("#search-input").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "30e779d5dfda5389f3e7fff3e46e0d16";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let displayCity = document.querySelector("#currentCity");
  displayCity.innerHTML = `${city}`;
  axios.get(apiUrl).then(showTemperature);
}

function getLocationWeather(response) {
  let currentLocation = response.data.name;
  let displayCity = document.querySelector("#currentCity");
  displayCity.innerHTML = `${currentLocation}`;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function myLocation(position) {
  let latitude = position.coords.latitude;
  let longitud = position.coords.longitude;
  let apiKey = "30e779d5dfda5389f3e7fff3e46e0d16";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitud}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getLocationWeather);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myLocation);
}

let locat = document.querySelector("#my-location");
locat.addEventListener("click", getPosition);

navigator.geolocation.getCurrentPosition(myLocation);
let form = document.querySelector("#searchBar");
form.addEventListener("submit", search);

let now = new Date();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = weekDays[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentWeather = document.querySelector("#currentTime");
currentWeather.innerHTML = `${day} ${hours}:${minutes}`;
