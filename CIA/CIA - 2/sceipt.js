const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

// Replace with your own OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY_HERE";

form.addEventListener("submit", function (e) {
  e.preventDefault();
    const city = cityInput.value.trim();

      if (city === "") {
          weatherResult.innerHTML = "<p>Please enter a city name.</p>";
              return;
                }

                  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

                    fetch(url)
                        .then(response => {
                              if (!response.ok) {
                                      throw new Error("City not found");
                                            }
                                                  return response.json();
                                                      })
                                                          .then(data => {
                                                                const html = `
                                                                        <h2>${data.name}, ${data.sys.country}</h2>
                                                                                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                                                                                        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                                                                                                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                                                                                                      `;
                                                                                                            weatherResult.innerHTML = html;
                                                                                                                })
                                                                                                                    .catch(error => {
                                                                                                                          weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
                                                                                                                              });
                                                                                                                              });
                                                                                                                              