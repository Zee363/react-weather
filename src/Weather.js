import React, { useState } from "react";
import "./Weather";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [temperature, setTemperature] = useState("");
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData ({
    ready: true,  
    temperature: response.data.main.temp,
    date: "Wed 12:03",
    description: response.data.weather[0].description,
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Weather-storm.svg",
    humidity: response.data.main.humidity,
    wind: response.data.main.wind,
    city: response.data.name  
    });

    setTemperature(Math.round(response.data.main.temp));
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
          <h1>{weatherData.city}</h1>
          <p>
            <light className="fs-1">
              <span className="temperature">
                <strong>{weatherData.temperature}</strong>
              </span>
              <span className="unit">
                <span />
                &deg;C
              </span>{" "}
              <img src={weatherData.iconUrl} alt={weatherData.description}/>
            </light>
            <br />
            <hr />
            <ul>
              <li className="text-capitilize">{weatherData.date}, {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </p>
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
