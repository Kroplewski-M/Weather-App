let APIKey = "138d1db89bed56362a2151facfba0416";
let urlBase = "https://api.openweathermap.org/data/2.5/";

let inputLocation = document.querySelector("#inputLocation");
let loc = document.querySelector("#location");
let btn = document.querySelector("#btn");
let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let weather = document.querySelector("#weather");

inputLocation.value = "London";
function fetchWeather() {
  fetch(
    `${urlBase}weather?q=${inputLocation}&units=metric&APIID=${APIKey}`
  ).then((res) => {
    console.log(res.json());
  });
}

fetchWeather();
