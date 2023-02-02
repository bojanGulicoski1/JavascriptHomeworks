const table = document.querySelector(".table");
const btn = document.querySelector(".button");
const nextBtn = document.querySelector(".buttonBot");
const tableTwo = document.querySelector(".tableTwo");
const prevBtn = document.querySelector("buttonsPrev");

nextBtn.style.display = "none";

btn.addEventListener("click", () => {
  fetch("https://swapi.dev/api/planets/?page=1")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 10; i++) {
        const planet = data.results[i];
        const row = table.insertRow();
        row.insertCell().innerHTML = `Planet Name - ${planet.name}`;
        row.insertCell().innerHTML = `Planet population - ${planet.population}`;
        row.insertCell().innerHTML = `Planet climate - ${planet.climate}`;
        row.insertCell().innerHTML = `Planet gravity - ${planet.gravity}`;
      }
    });
  nextBtn.style.display = "grid";
});

nextBtn.addEventListener("click", () => {
  fetch("https://swapi.dev/api/planets/?page=2")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 10; i++) {
        const planet = data.results[i];
        const row = tableTwo.insertRow();
        row.insertCell().innerHTML = `Planet Name - ${planet.name}`;
        row.insertCell().innerHTML = `Planet population - ${planet.population}`;
        row.insertCell().innerHTML = `Planet climate - ${planet.climate}`;
        row.insertCell().innerHTML = `Planet gravity - ${planet.gravity}`;
      }
    });
  nextBtn.style.display = "none";
  btn.style.display = "none";
  table.style.display = "none";
});
