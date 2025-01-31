const apiKey = '81c283c167b161f8b614b0a5350725cc'; // Replace with your Open Weather API key
const searchButton = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const weatherBox = document.querySelector('.weather-box');

searchButton.addEventListener('click', () => {
    const city = searchBar.value;
    if (city) {
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    if (data.main) {
        updateWeatherUI(data);
    } else {
        alert('City not found');
    }
}

function updateWeatherUI(data) {
    const temp = document.querySelector('.temp');
    const weather = document.querySelector('.weather');
    const location = document.querySelector('.location');
    const humidity = document.querySelector('.Humidity');
    const wind = document.querySelector('.Wind');

    temp.textContent = `${data.main.temp}°C`;
    weather.textContent = data.weather[0].main;
    location.textContent = `${data.name}, ${data.sys.country}`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;
}
