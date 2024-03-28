import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo({ weatherData }) {
  return (
    <div className="WeatherInfo">
    <div className="Weather">
          <div className="weather-data">
          <h1>{weatherData.city}</h1>
          <p>
            <span className="fs-1">
              <span className="temperature">
                <strong>{Math.round(weatherData.temperature)}</strong>
              </span>
              <span className="unit">
                &deg;C
              </span>{" "}
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </span>
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
  }