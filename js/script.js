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
  } catch (error) {
    console.log(error)
  }
}
