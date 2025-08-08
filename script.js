
const apiKey = API_CONFIG.WEATHER_API_KEY;
  document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("getWeatherBtn");
  btn.addEventListener("click", function () {
    let city = document.getElementById("cityInput").value;
    city = city.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(url)
.then(response => response.json())
.then(data => {
    document.getElementById('weatherResult').classList.remove('d-none');
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = Math.round(data.main.temp) + '°C';
    document.getElementById('humidity').textContent = data.main.humidity + '%';
    document.getElementById('windSpeed').textContent = Math.round(data.wind.speed) + ' km/h';
})
.catch(error => {
    console.error('Error fetching weather data:', error);
});
  });


});
