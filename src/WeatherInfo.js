import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <div className="Weather">
        <h1>{data.city}</h1>
        <div className="weather-data-list">
          <div className="weather-app-temperature-container">
            <div className="temperature">
                  <strong>{Math.round(data.temperature)}</strong>
                  <div className="unit">&deg;C</div>{" "}
                  <div className="float-left">
                  <WeatherIcon code={data.icon} alt={data.description} />
                </div>
                </div>
                </div>
                </div>
            <p>
              <ul>
                  <li>
                    <FormattedDate date={data.date} />
                  </li>
                  <li className="text-capitalize">{data.description}</li>
                  <li>
                    Humidity:<strong> {data.humidity}%</strong>
                  </li>
                  <li>
                    Wind:<strong>{data.wind}km/h</strong>
                  </li>
              </ul>
            </p>
      </div>
      <hr />
    </div>
  );
  }