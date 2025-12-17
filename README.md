This project was completed on 08/08/2025 and was uploaded at a later date on 17/12/2025.


# Weather-app-using-html-css-js-
Weather App is a responsive web application that allows users to check real-time weather information for any city using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript, it displays temperature, weather conditions, wind speed, and icons with a clean, modern UI.

# 🌦️ Weather App

A simple and responsive Weather Application that fetches real-time weather data using the OpenWeatherMap API. Users can search for any city worldwide and instantly view current weather conditions.


# Features

-  Search weather by city name
-  Displays temperature in Celsius
-  Shows weather condition & description
-  Wind speed information
-  Country name display
-  Dynamic weather icons
-  Fully responsive design
-  Modern and clean UI


# Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Styling and responsive layout  
- **JavaScript (ES6)** – Logic, API calls, DOM manipulation  
- **OpenWeatherMap API** – Real-time weather data  



##  Project Structure

Weather-App/
│
├── index.html # Main HTML file
├── style.css # CSS styling
├── script.js # JavaScript logic
└── README # Project documentation


# How It Works

1. User enters a city name in the input field.
2. On clicking **Get Weather**, a request is sent to the OpenWeatherMap API.
3. The app fetches and displays:
   - City & country name
   - Temperature (°C)
   - Weather condition and description
   - Wind speed
   - Weather icon
4. Errors are handled gracefully if the city is not found or the API fails.



## 🔑 API Key Setup

1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate your free API key.
3. Replace the API key in `script.js`:

```js
const apikey = "YOUR_API_KEY_HERE";





