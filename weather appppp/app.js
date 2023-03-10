const mainDivEl = document.querySelector(".mainDiv");
const homeBtn = document.querySelector(".homeBTn");
const hourlyBTn = document.querySelector(".hourlyBTn");
const mainPage = document.querySelector(".mainPage");
const header = document.querySelector(".header");
const cardHolder = document.querySelector(".cardHolder");
const cards = document.querySelectorAll(".cards");
const cardH = document.querySelectorAll(".cardH");
const cardHHolder = document.querySelector(".cardHHolder");
const searchBtn = document.querySelector(".searchBtn");

mainDivEl.style.display = "none";
cardHHolder.style.display = "none";
mainPage.style.display = "none";

async function weatherData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"
  );
  const json = await response.json();

  const date = Date(1674751570 * 1000);
  const temperature = json.current.temp;
  const feelsLike = json.current.feels_like;
  const windSpeed = json.current.wind_speed;
  const weatherIcon = json.current.weather[0].icon;
  const description = json.current.weather[0].description;
  const humidity = json.current.humidity;

  mainDivEl.innerHTML = `
      <span>City: <b>Skopje</b></span>
      <span>Current day:     <b>${date}</b></span>
      <span>Temperature:     <b>${temperature}</b></span>
      <span>Feels like:     <b>${feelsLike}</b></span>
      <span>Wind speed:     <b>${windSpeed}</b></span>
      <span></span>      <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png"><br>
      <span>Weater description:     <b>${description}</b></span>
      <span>Humidity:     <b>${humidity}</b></span>
`;
}

homeBtn.addEventListener("click", async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"
  );
  const json = await response.json();
  console.log(json);
  let daysOfweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const cards = document.querySelectorAll(".cards");
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let day = json.daily[i];
    let dayOfWeek = daysOfweek[i];

    const maxTemp = day.temp.max;
    const minTemp = day.temp.min;
    const humidity = day.humidity;
    const icon = day.weather[0].icon;
    const description = day.weather[0].description;

    card.innerHTML = `
      
        <span>Day:     <b>${dayOfWeek}<b></span>
        <span>Max Temp:     <b>${maxTemp}</b></span><br/>
        <span>Min Temp:     <b>${minTemp}</b></span>
        <span></span>      <img src="http://openweathermap.org/img/wn/${icon}@2x.png"><br>
        <span>Weater:     <b>${description}</b></span>
        <span>Humidity:     <b>${humidity}</b></span>
        `;
  }
  mainDivEl.style.display = "grid";
  cardHolder.style.display = "flex";
  mainPage.style.display = "grid";
  cardHHolder.style.display = "none";
});

hourlyBTn.addEventListener("click", async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b"
  );
  const json = await response.json();
  console.log(json);
  mainDivEl.style.display = "none";
  cardHolder.style.display = "none";

  const cardH = document.querySelectorAll(".cardH");
  cardHHolder.style.display = "flex";

  const hoursOfDay = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48,
  ];
  for (let i = 0; i < cardH.length; i++) {
    let card = cardH[i];
    let hour = json.hourly[i];
    let hoursOFday = hoursOfDay[i];

    const temperature = hour.temp;
    const feelsLike = hour.feels_like;
    const humidity = hour.humidity;
    const icon = hour.weather[0].icon;
    const description = hour.weather[0].description;

    card.innerHTML = `
        <span>Hour:     <b>${hoursOFday}<b></span><br/>
        <span>Feels like:     <b>${feelsLike}</b></span><br/>
        <span>Temp:     <b>${temperature}</b></span><br/>
        <span></span>      <img src="http://openweathermap.org/img/wn/${icon}@2x.png"><br>
        <span>Weater:     <b>${description}</b></span><br/>
        <span>Humidity:     <b>${humidity}</b></span>`;
  }
});

weatherData();
