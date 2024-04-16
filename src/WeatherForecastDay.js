import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(forecast) {
return (
  <div>
         <div className="weather-forecast-day">
          {forecast[0].dt}
          </div>
          <WeatherIcon code={forecast[0].weather[0].icon} size={36}/>
          <div className="weatherfocust-temperatures">
            <span className="weatherfocust-temperatures-max">{forecast[0].temp.max}&deg;</span>
            <span className="weatherfocust-temperatures-min">{forecast[0].temp.min}&deg;</span>
        </div>
  </div>
)
}