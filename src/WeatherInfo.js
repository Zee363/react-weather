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
            <div className="weather-app-temperature-container">
            <span className="fs-1">
              <div className="temperature">
                <strong>{Math.round(weatherData.temperature)}</strong>
              </div>
              <div className="unit">
                &deg;C
              </div>{" "}
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </span>
            </div>
            <br />
            <hr />
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}
                </li>
            <li>Humidity:<strong> {weatherData.humidity}%</strong></li>
              <li>Wind:<strong> {weatherData.wind}km/h</strong></li>
            </ul>
          </p>
          </div>
        </div>
      </div>
    );
  }