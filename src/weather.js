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
      coordinates:response.data.coordinates,
      temperature:response.data.temperature.current,
      wind: response.data.wind.speed,
      date:new Date(response.data.time*1000),
      humidity:response.data.temperature.humidity,
      city:response.data.city,
      description:response.data.condition.description,
      icon:response.data.condition.icon
    }
    )}
   
    function search(){
      let apiKey = "31o84e907eeba386aabt3500e710ff10";
      let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
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
    return "loading..."
  }

}