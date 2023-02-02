let homeBtn = document.querySelector(".homeBtn");
let hourlyBtn = document.querySelector(".hourlyBtn");

let container = document.querySelector(".container");
let containerHolder = document.querySelector(".contHolder");
container.style.display = "none";
containerHolder.style.display = "none";

homeBtn.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.style.display = "flex";
  containerHolder.style.display = "flex";

  container.innerHTML = "";
  let url =
    "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let currentDate = new Date();
      let temp = data.current.temp;
      let feelsLike = data.current.feels_like;
      let windSpeed = data.current.wind_speed;
      let icon = data.current.weather[0].icon;
      let description = data.current.weather[0].description;
      let humidity = data.current.humidity;

      container.innerHTML = `
     
      
      <span>Current Date:     <b>${currentDate}</b></span>
      <span>Temperature:     <b>${temp}</b></span>
      <span>Feels like:     <b>${feelsLike}</b></span>
      <span>Wind speed:     <b>${windSpeed}</b></span>
      <span>Icon</span>      <img src="http://openweathermap.org/img/wn/${icon}@2x.png"><br>
      <span>Weater description:     <b>${description}</b></span>
      <span>Humidity:     <b>${humidity}</b></span>


      `;
    });
});
hourlyBtn.addEventListener("click", () => {});
