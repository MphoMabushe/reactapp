import React from "react";
import axios from "axios";

export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}℃ `)
    }
    let apiKey="7054937c48b3e61756fdcf53090c10fa";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
return(
    <div id="root">
      <div className="weather-contents">
      <header>
       <form class="search-form" id="search-form">
              <input type="search" placeholder="Enter a city" required id="search-box" class="search-box"/>
              <input type="submit" value="search" class="search-button"/>
          </form> 
          </header>
      <main>
          <div className="weather-details">
      <h1 class="city-input" id="city">
        PARIS
      </h1>
      <p class="weather-features"><span id="time"></span>,<span id="weather-type">clear sky</span>
       <br/>
       Humidity:<strong id="humidity"></strong>,Wind:<strong id="speed"></strong>
      </p>
      </div>
      <div>
      <div className="temperature-details">
      <div id="emoji"></div>
      <div className="temperature-number" id="temperature"></div>
      <div className="temperature-degrees">°C</div>
      </div>
      </div>
      </main>
      <div className="weather-forecast" id="forecast">
      <footer>This project was coded by <a href ="https://mpho-portfolio-d9f5d1.netlify.app/?Message=+++++++++++++++++m+++++++++++++++++++#mpho-projects" target="_blank" rel="noreferrer" >Mpho Mabushe </a>,is <a href="https://github.com/MphoMabushe/reactapp" target="_blank" rel="noreferrer">open-souced on
  Github</a> and <a href="https://mphoweatherapp.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
  </div> 
  </div>
  </div>
);
}
