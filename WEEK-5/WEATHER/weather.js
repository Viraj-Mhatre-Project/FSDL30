const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function getWeather() {
  const city = document.getElementById('city').value;
  const weatherResult = document.getElementById('weather-result');
  
  if (!city) {
    alert('Please enter a city name.');
    return;
  }
  
  // Fetch weather data from the OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // If the city is not found
    if (data.cod === '404') {
      alert('City not found. Please check the name and try again.');
      return;
    }

    // Update the UI with weather data
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    
    weatherResult.style.display = 'block'; // Show result div

  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
}
