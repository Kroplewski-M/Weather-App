const APIKey = "d691f3d54b136b743c6eedc7c43f34b7";
const urlBase = "http://api.openweathermap.org/data/2.5/";

let inputLocation = document.querySelector("#inputLocation");
let loc = document.querySelector("#loc");
let btn = document.querySelector("#btn");
let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let weather = document.querySelector("#weather");

btn.addEventListener("click", function () {
  if (inputLocation.value != "") {
    fetchWeather();
  }
});

function fetchWeather() {
  fetch(
    `${urlBase}weather?q=${inputLocation.value}&units=metric&appid=${APIKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      loc.innerHTML = data.name;
      temp.innerHTML = setDegrees(data.main.temp) + "&#8451";
      weather.innerHTML = data.weather[0].main;
    })
    .catch((err) => {
      console.log(err);
    });
}

function setDegrees(number) {
  return String(number).slice(0, 2);
}
