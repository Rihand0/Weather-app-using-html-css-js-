// const for API key
const apikey = 'YOUR_API_KEY_HERE'; 

// async/await with fetch
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById('weatherDisplay').innerHTML = `<p>Error: ${data.message}</p>`;
            return;
        }

        const {
            name,
            main: { temp },
            weather: [{ main: weatherMain, description, icon }],
            wind: { speed },
            sys: { country }
        } = data;

        const weatherHTML = `
            <h2>Weather in ${name}, ${country}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Weather: ${weatherMain} (${description})</p>
            <p>Wind: ${speed} m/s</p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
        `;

        document.getElementById('weatherDisplay').innerHTML = weatherHTML;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        alert('Failed to fetch weather data');
    }
}
