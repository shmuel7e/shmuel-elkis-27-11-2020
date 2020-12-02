import HttpService from "../services/HttpService";
import { API } from "../constants";

const getCity = (city = "TEL AVIV") => {
  return HttpService.get(
    "locations/v1/cities/autocomplete?apikey=" + API.KEY + "&q=" + city
  );
};

const getCurrentConditions = (cityId = "215854") => {
  return HttpService.get(
    "currentconditions/v1/" + cityId + "?apikey=" + API.KEY
  );
};

const getForecasts = (cityId = "215854") => {
  return HttpService.get(
    "forecasts/v1/daily/5day/" + cityId + "?apikey=" + API.KEY
  );
};

export const getLocationByCords = (pos) => {
  return HttpService.get(
    `locations/v1/cities/geoposition/search?apikey=${API.KEY}&q=${pos.coords.latitude}%2C${pos.coords.longitude}`
  );
};

export default {
  getCity,
  getCurrentConditions,
  getForecasts,
  getLocationByCords,
};
