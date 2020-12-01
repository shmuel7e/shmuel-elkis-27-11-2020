import AccWeatherService from "../services/AccuWeatherService";
import { loading, doneLoading } from "./SystemActions";
import { firePopUp } from "./PopUpActions";

export const getCity = (city) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      return await AccWeatherService.getCity(city);
    } catch (err) {
      dispatch(firePopUp());
      // alert('There was a problem reaching the server for AutoComplete Search.')
      console.log("WeatherActions: err in getCity", err);
    } finally {
      dispatch(doneLoading());
    }
  };
};

export const getCurrentConditions = (cityId) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const weather = await AccWeatherService.getCurrentConditions(cityId);
      dispatch(setWeather(weather[0]));
    } catch (err) {
      // alert("Failed to get current conditions data from the server");
      dispatch(firePopUp());
      console.log("WeatherActions: err in getCurrentConditions", err);
    } finally {
      dispatch(doneLoading());
    }
  };
};

export const getForecasts = (cityId) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const forecasts = await AccWeatherService.getForecasts(cityId);
      dispatch(setForecasts(forecasts));
    } catch (err) {
      // alert('Failed to get forecasts data from the Server...')
      console.log("WeatherActions: err in getForeCasts", err);
    } finally {
      dispatch(doneLoading());
    }
  };
};

const setWeather = (weather) => {
  return {
    type: "SET_WEATHER",
    weather,
  };
};

const setForecasts = (forecasts) => {
  return {
    type: "SET_FORECASTS",
    forecasts,
  };
};
