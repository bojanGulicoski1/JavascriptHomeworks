const mainDivEl = document.querySelector(".mainDiv");
const homeBtn = document.querySelector(".homeBTn");

async function weatherData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"
  );
  const json = await response.json();
  console.log(json);

  const today = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const temperature = json.current.temp;
  const feelsLike = json.current.feels_like;
  const windSpeed = json.current.wind_speed;
  const weatherIcon = json.current.weather[0].icon;
  const description = json.current.weather[0].description;
  const humidity = json.current.humidity;

  mainDivEl.innerHTML = `
      <span>City: <b>Skopje</b></span>
      <span>Current day:     <b>${today}</b></span>
      <span>Temperature:     <b>${temperature}</b></span>
      <span>Feels like:     <b>${feelsLike}</b></span>
      <span>Wind speed:     <b>${windSpeed}</b></span>
      <span></span>      <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png"><br>
      <span>Weater description:     <b>${description}</b></span>
      <span>Humidity:     <b>${humidity}</b></span>
`;

  homeBtn.addEventListener("click", () => {
    const weeklycards = document.querySelector(".cards");

    const maxTemp = json.daily[0].temp.max;
    const minTemp = json.daily[0].temp.min;
    const humidity = json.daily[0].humidity;
    const icon = json.daily[0].weather[0].icon;
    const description = json.daily[0].weather[0].description;

    weeklycards.innerHTML = `
    
      <span>Day:     <b>Monday</b></span>
      <span>Max Temp:     <b>${maxTemp}</b></span>
      <span>Min Temp:     <b>${minTemp}</b></span>
      <span></span>      <img src="http://openweathermap.org/img/wn/${icon}@2x.png"><br>
      <span>Weater:     <b>${description}</b></span>
      <span>Humidity:     <b>${humidity}</b></span>
      `;
  });
}
weatherData();
