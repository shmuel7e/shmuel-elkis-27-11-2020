import React from "react";
/**
 * @param {string} txt
 * @return {Element}
 */

const getIcon = (txt) => {
  switch (txt) {
    case "home":
      return <i className="fas fa-home fa-lg"></i>;
    case "favorites":
      return <i className="fas fa-bookmark fa-lg"></i>;
    case "Mostly clear":
      return <i className="far fa-sun"></i>;
    case "Mostly clear night":
      return <i className="fas fa-moon"></i>;
    case "Mostly sunny":
      return <i className="far fa-sun"></i>;
    case "Mostly sunny night":
      return <i className="fas fa-moon"></i>;
    case "Partly sunny":
      return <i className="fas fa-cloud-meatball"></i>;
    case "Partly sunny night":
      return <i className="fas fa-cloud-moon"></i>;
    case "Clouds and sun":
      return <i className="fas fa-cloud-sun"></i>;
    case "Clouds and sun night":
      return <i className="fas fa-cloud-moon"></i>;
    case "Partly cloudy":
      return <i className="fas fa-cloud-sun"></i>;
    case "Partly cloudy night":
      return <i className="fas fa-cloud-moon"></i>;
    case "Clear":
      return <i className="fas fa-sun "></i>;
    case "Clear night":
      return <i className="fas fa-moon"></i>;
    case "Sunny":
      return <i className="fas fa-sun "></i>;
    case "Sunny night":
      return <i className="fas fa-moon"></i>;
    case "A shower":
      return <i className="fas fa-cloud-showers-heavy"></i>;
    case "Showers":
      return <i className="fas fa-cloud-showers-heavy"></i>;
    case "Shower night":
      return <i className="fas fa-cloud-showers-heavy"></i>;
    case "A shower night":
      return <i className="fas fa-cloud-moon-rain"></i>;
    case "Some clouds":
      return <i className="fas fa-cloud"></i>;
    case "Some clouds night":
      return <i className="fas fa-cloud-moon"></i>;
    case "Intermittent clouds":
      return <i className="fas fa-cloud"></i>;
    case "Intermittent clouds night":
      return <i className="fas fa-cloud-moon"></i>;
    case "Cloudy":
      return <i className="fas fa-cloud"></i>;
    case "Cloudy night":
      return <i className="fas fa-cloud-moon"></i>;
    case "Mostly cloudy":
      return <i className="fas fa-cloud"></i>;
    case "Mostly cloudy night":
      return <i className="fas fa-cloud-moon"></i>;
    case "Thunderstorm":
      return <i className="fas fa-bolt"></i>;
    case "Thunderstorm night":
      return <i className="fas fa-poo-storm"></i>;
    case "Thunderstorms":
      return <i className="fas fa-bolt"></i>;
    case "Thunderstorms night":
      return <i className="fas fa-poo-storm"></i>;
    case "Fog":
      return <i className="fas fa-smog"></i>;
    case "Fog night":
      return <i className="fas fa-smog"></i>;
    case "Rain":
      return <i className="fas fa-cloud-rain"></i>;
    case "Light rain":
      return <i className="fas fa-cloud-rain"></i>;
    case "Light rain night":
      return <i className="fas fa-cloud-rain"></i>;
    case "Rain night":
      return <i className="fas fa-cloud-moon-rain"></i>;
    case "Snow":
      return <i className="fas fa-snowflake"></i>;
    case "Snow night":
      return <i className="fas fa-snowflake"></i>;
    case "Overcast":
      return <i className="fas fa-cloud-sun-rain"></i>;
    case "Overcast night":
      return <i className="fas fa-cloud-moon-rain"></i>;
    case "Hazy sunshine":
      return <i className="fas fa-cloud-meatball"></i>;
    case "Hazy sunshine night":
      return <i className="fas fa-moon"></i>;
    case "Hazy moonlight":
      return <i className="fas fa-cloud-meatball"></i>;
    case "Hazy moonlight night":
      return <i className="fas fa-moon"></i>;
    case "Dreary":
      return <i className="fas fa-wind"></i>;
    case "Dreary night":
      return <i className="fas fa-wind"></i>;
    case "faved":
      return <i className="fas fa-star fa-lg"></i>;
    case "notfaved":
      return <i className="far fa-star fa-lg"></i>;
    case "change":
      return <i className="fas fa-exchange-alt"></i>;
    default:
      break;
  }
};

export default getIcon;
