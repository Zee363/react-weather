import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
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

  if (weatherData.ready) {
    return (
      <div className="container">
        <form>
          <input
            type="text"
            placeholder="Search for a city.."
            id="search-form-input"
            autoFocus="on"
          />
          <input
            type="submit"
            className="btn btn-primary"
            id="search-form-button"
          />
        </form>
        <div className="Weather">
          <div className="weather-data">
          <h1>{weatherData.city}</h1>
          <p>
            <light className="fs-1">
              <span className="temperature">
                <strong>{Math.round(weatherData.temperature)}</strong>
              </span>
              <span className="unit">
                <span />
                &deg;C
              </span>{" "}
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </light>
            <br />
            <hr />
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}
                </li>
            <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "72268dd382d27883153725908f2fbf78";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Searching..";
  }
}
