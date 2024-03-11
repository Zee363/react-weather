import React from "react";
import "./Weather";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Search for a city.." id="search-form-input" autoFocus="on"/>
        <input type="submit" className="btn btn-primary" id="search-form-button"/>
      </form>
      <div className="Weather">
        <h1>Cape Town</h1>
        <p>
          <light className="fs-1">
            <span className="temperature"><strong>29</strong></span>
              <span className="unit"><span/>&deg;C</span> &#9728;
          </light>
          <br />
          <hr />
          <ul>
          <li>
          Wed 17:22, Sunny
          </li>
          <li>
          Humidity: 12%
          </li>
          <li>
          Wind: 17km/h
          </li>
          </ul>
        </p>
        </div>
    </div>
  );
}
