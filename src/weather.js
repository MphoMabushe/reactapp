import React, { useState } from "react";
import axios from "axios";

import './weather.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function Weather(props){
  const [weatherdata,setWeatherdata]=useState({ready:false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
      ready:true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date:"Friday 13:15",
      humidity:response.data.main.humidity,
      city: response.data.name,
      iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
      description:response.data.weather[0].description
    }
    )
  }
  if (weatherdata.ready){
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
      <h1>{weatherdata.city}</h1>
      <ul>
        <li>
          {weatherdata.date}
        </li>
        <li className="text-capitalize">
          {weatherdata.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
          <img src={weatherdata.iconUrl} alt={weatherdata.description} className="float-left"/>
          <span className="temperature float-left">{Math.round(weatherdata.temperature)}</span>
          <span className="unit float-left">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Preipitaion:15%
            </li>
            <li>
              Humidity:{weatherdata.humidity}%
            </li>
            <li>
              Wind:{weatherdata.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
  }
  else{
    let apiKey = "7054937c48b3e61756fdcf53090c10fa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..."
  }

}
