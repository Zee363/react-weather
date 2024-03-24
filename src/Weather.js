import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt *1000),
      description: response.data.weather[0].description,
      iconUrl:
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  function handleSubmit (event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange (event) {
  setCity(event.target.value);
  }

  function Search() {
  const apiKey = "72268dd382d27883153725908f2fbf78";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse).catch(error => {
    console.error("Error fetching weather data:", error);
  });
}

if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a city.."
            id="search-form-input"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            className="btn btn-primary"
            id="search-form-button"
          />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    return "Searching..";
  }}
