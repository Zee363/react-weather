import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherFocust( {data} ) {
  return (
    <div className="weatherFocust">
    <div className="row">
      <div className="col">
        <div className="weather-forecast-day">
          Fri
          <WeatherIcon />
          <div className="weatherfocust-temperatures">
            <span className="weatherfocust-temperatures-max">27&deg;</span>
            <span className="weatherfocust-temperatures-min">11&deg;</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}