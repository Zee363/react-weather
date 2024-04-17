import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherFocust(props) {
let [loaded,setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

function load() {
  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   
  axios.get(apiUrl).then(handleResponse);
}

if (loaded) {
  return (
    <div className="weatherFocust">
    <div className="row">
      <div className="col">
   <WeatherForecastDay data={forecast} />
      </div>
    </div>
    </div>
  );

} else {
  load();

  return null;
}
}