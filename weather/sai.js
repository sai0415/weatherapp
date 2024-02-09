function getWeather() {
    const apiKey = 'bfe24c494d90af08b3712f881c9c5fab'; // Replace with your actual API key
    const city = document.getElementById('cityInput').value.trim();

    if (city === '') {
        alert('Please enter a city.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found. Please enter a valid city name.');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const weatherData = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;

            document.getElementById('weatherData').innerHTML = weatherData;
        })
        .catch(error => {
            alert(error.message);
            console.error('Error fetching weather data:', error);
        });
}


