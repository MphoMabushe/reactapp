import React, { useState } from "react";
import axios from "axios";

import './weather.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function Weather(){
  const [temperature,setTemperature]=useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp)
  }
  let apiKey = "7054937c48b3e61756fdcf53090c10fa";
  let city="Lisbon";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unis=metric`;
  axios.get(apiUrl).then(handleResponse);
 return(
    <div className="container">
    <div className="weather"> 
      <form>
        <div className="row">
          <div className="col-9">
        <input type="text" placeholder="Enter a city"className="form-control" autofocus="on">
        </input>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"></input>
        </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>
          Friday 13:15
        </li>
        <li>
          Mostly cloudy
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img src=" https://openweathermap.org/img/wn/02d@2x.png" alt="Mostly cloudly" className="float-left"/>
          <span className="temperature float-left">{temperature}</span>
          <span className="unit float-left">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Preipitaion:15%
            </li>
            <li>
              Humidity:72%
            </li>
            <li>
              Wind:13km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
}
