import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather">
        <h1>{props.data.city}</h1>
        <div className="weather-data-list">
          <div className="weather-app-temperature-container">
            <div className="temperature d-flex align-items-center">
               <WeatherIcon code={props.data.iconUrl} alt={props.description} size={50} />
  
                <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity:<strong> {props.data.humidity}%</strong>
            </li>
            <li>
              Wind:<strong> {props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
  }