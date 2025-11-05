const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResults = document.getElementById("weatherResults");
const statusEl = document.querySelector(".status");

const API_KEY = "070af9b545c0ee612c6bc58c83b94096";

document.addEventListener("DOMContentLoaded", () => {
    statusEl.textContent = "Checking for location permission...";
    findLocation();
});

// Detects Users Location
function findLocation() {
    if (!navigator.geolocation) {
        statusEl.textContent = "Geolocation is not supported by your browser.";
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

// Finds Users Coordinates
async function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    statusEl.textContent = "Location found! Detecting city...";

    try {
        const geoResponse = await fetch(
            `https://api-bdc.io/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const geoData = await geoResponse.json();

        const city =
            geoData.city || geoData.locality || geoData.principalSubdivision;

        if (city) {
            statusEl.textContent = `Detected location: ${city}`;
            await getWeather(city);
        } else {
            statusEl.textContent = "Couldn't determine city. Please enter manually.";
        }
    } catch (error) {
        console.error("Geo lookup failed:", error);
        statusEl.textContent = "Error fetching location info.";
    }
}

function error() {
    statusEl.textContent = "Location access denied. Please enter a city manually.";
}

// Fetches Weather Data
async function getWeather(city) {
    statusEl.textContent = `Getting weather for ${city}...`;

    const Weather_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

    try {
        const response = await fetch(Weather_API);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        weatherResults.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °F</p>
            <p><strong>Feels like:</strong> ${data.main.feels_like} °F</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        `;

        statusEl.textContent = `Weather loaded for ${data.name}`;
    } catch (error) {
        weatherResults.innerHTML = `<p>${error.message}</p>`;
        statusEl.textContent = "Try searching manually.";
        console.error("Weather fetch failed:", err);
    }
}

// Allows Manual Search
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();
    if (!city) {
        weatherResults.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    await getWeather(city);
    cityInput.value = "";
});

let info = false;

const expandBtn = document.querySelector('.expand-btn');
const details = document.querySelector('.card-content');

expandBtn.addEventListener('click', showInfo)

function showInfo() {
    if (info == false) {
        details.style.display = 'flex';
        expandBtn.textContent = 'hide';
        info = true;
    }
    else {
        details.style.display = 'none';
        expandBtn.textContent = 'Learn more about how your data is being collected';
        info = false;
    }
}