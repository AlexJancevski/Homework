// Task 1

function fetchPlanets(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error));
};

const loadPlanetsButton = document.querySelector(".load");
const nextPlanetsButton = document.querySelector(".next");
const prevPlanetsButton = document.querySelector(".previous");


async function loadPlanets() {
    const planets = await fetchPlanets("https://swapi.dev/api/planets/?page=1");
    const tableBody = document.querySelector(".data");

    for (let i = 0; i < 10; i++) {
        const planet = planets[i];
        const row = document.createElement("tr");

        const name = document.createElement("td");
        name.innerText = planet.name;
        row.appendChild(name);

        const population = document.createElement("td");
        population.innerText = planet.population;
        row.appendChild(population);

        const climate = document.createElement("td");
        climate.innerText = planet.climate;
        row.appendChild(climate);

        const gravity = document.createElement("td");
        gravity.innerText = planet.gravity;
        row.appendChild(gravity);

        tableBody.appendChild(row);

        nextPlanetsButton.style.display = "block";
        loadPlanetsButton.style.display = "none";

    }
};

// Task 2

function fetchNextPlanets(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error));
};

async function loadNextPlanets() {
    const planets = await fetchPlanets("https://swapi.dev/api/planets/?page=2");
    const tableBody = document.querySelector(".data");

    for (let i = 0; i < 10; i++) {
        const planet = planets[i];
        const row = document.createElement("tr");

        const name = document.createElement("td");
        name.innerText = planet.name;
        row.appendChild(name);

        const population = document.createElement("td");
        population.innerText = planet.population;
        row.appendChild(population);

        const climate = document.createElement("td");
        climate.innerText = planet.climate;
        row.appendChild(climate);

        const gravity = document.createElement("td");
        gravity.innerText = planet.gravity;
        row.appendChild(gravity);

        tableBody.appendChild(row);

        nextPlanetsButton.style.display = "none";
        prevPlanetsButton.style.display = "block";
    }
};

async function loadPreviousPlanets() {
    const planets = await fetchPlanets("https://swapi.dev/api/planets/?page=1");
    const tableBody = document.querySelector(".data");

    for (let i = 0; i < 10; i++) {
        const planet = planets[i];
        const row = document.createElement("tr");

        const name = document.createElement("td");
        name.innerText = planet.name;
        row.appendChild(name);

        const population = document.createElement("td");
        population.innerText = planet.population;
        row.appendChild(population);

        const climate = document.createElement("td");
        climate.innerText = planet.climate;
        row.appendChild(climate);

        const gravity = document.createElement("td");
        gravity.innerText = planet.gravity;
        row.appendChild(gravity);

        tableBody.appendChild(row);

        nextPlanetsButton.style.display = "none";
    }
};