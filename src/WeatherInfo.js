import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <div className="Weather">
          <h1>{data.city}</h1>
          <p className="weather-data-list">
            <div className="weather-app-temperature-container">
              <div className="temperature">
                <strong>{Math.round(data.temperature)}</strong>
              </div>
              <div className="unit">
                &deg;C
              </div>{" "}
              <img src={data.iconUrl} alt={data.description} />
              </div>
            <ul>
              <li>
                <FormattedDate date={data.date} />
              </li>
              <li className="text-capitalize">{data.description}
                </li>
            <li>Humidity:<strong> {data.humidity}%</strong></li>
            <li>Wind:<strong>{data.wind}km/h</strong></li>
            </ul>
          </p>
          </div>
        <hr />
      </div>
    );
  }