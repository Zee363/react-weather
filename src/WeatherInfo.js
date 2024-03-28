import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
    <div className="Weather">
          <div className="weather-data">
          <h1>{data.city}</h1>
          <p>
            <div className="weather-app-temperature-container">
            <span className="fs-1">
              <div className="temperature">
                <strong>{Math.round(data.temperature)}</strong>
              </div>
              <div className="unit">
                &deg;C
              </div>{" "}
              <img src={data.iconUrl} alt={data.description} />
            </span>
            </div>
            <br />
            <hr />
            <ul>
              <li>
                <FormattedDate date={data.date} />
              </li>
              <li className="text-capitalize">{data.description}
                </li>
            <li>Humidity:<strong> {data.humidity}%</strong></li>
              <li>Wind:<strong> {data.wind}km/h</strong></li>
            </ul>
          </p>
          </div>
        </div>
      </div>
    );
  }