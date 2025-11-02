import React from "react";
import Weather from "./weather.js";
import "./app.css";

export default function App () {
  return (
    <div className="App container">
   <Weather defaultCity="Pretoria"/>
  <footer>
  This project was coded by <a href ="https://mpho-portfolio-d9f5d1.netlify.app/?Message=+++++++++++++++++m+++++++++++++++++++#mpho-projects" target="_blank" rel="noopener noreferrer" >Mpho Mabushe </a>,is <a href="https://github.com/MphoMabushe/reactapp" target="_blank" rel="noopener noreferrer">open-souced on
  Github</a> and <a href="https://reatrapp.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
      </footer>
    </div>
  );
}

