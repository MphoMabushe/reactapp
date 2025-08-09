import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherinfo";
import WeatherForecast from "./weatherforecast";

import './weather.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function Weather(props){
  const [weatherdata,setWeatherdata]=useState({ready:false});
  const[city,setCity]=useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherdata({
      ready:true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date:new Date(response.data.dt*1000),
      humidity:response.data.main.humidity,
      city:response.data.name,
      icon:response.data.weather[0].icon,
      description:response.data.weather[0].description
    }
    )}
   function iconhandleResponse(response) {
    setWeatherdata({
      ready:true,
      city:response.data.city,
      icon:response.data.condition.icon_url
    }
    )}
     
    function search(){
      let apiKey = "7054937c48b3e61756fdcf53090c10fa";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
  }
  function iconsearch(){
let apiKey = "31o84e907eeba386aabt3500e710ff10"
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(iconhandleResponse);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityResponse(event) {
  setCity(event.target.value);
  }
  if (weatherdata.ready){
 return(
    <div className="container">
    <div className="weather"> 
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
        <input type="text" placeholder="Enter a city"className="form-control" autofocus="on" onChange={handleCityResponse}>
        </input>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"></input>
        </div>
        </div>
      </form>
      <WeatherInfo data={weatherdata}/>
      <WeatherForecast  coordinates={weatherdata.coordinates}/>
      </div>
    </div>
);
  }
  else{
    search();
    iconsearch();
    return "loading..."
  }

}