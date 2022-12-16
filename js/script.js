// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit6-03-API/sw.js", {
    scope: "/ICS2O-unit6-03-API/",
  })
}

const checkWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById('api-weather-icon').innerHTML = '<img src="' + 
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" + 
      '" alt="API image" class="center" ' +
      '>' 
    document.getElementById('api-weather').innerHTML = '<h3>' + data.weather[0].description +'</h3>'
  } catch (error) {
    console.log(error)
  }
}

checkWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")

