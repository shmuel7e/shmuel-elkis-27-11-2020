import React, { useEffect, useState } from "react";
import { isEqual } from "lodash";
import { ReactMemo, useFunction, useCallbackOnce } from "../../hooks";
import * as PropTypes from "prop-types";
import LocationDetails from "../../cmps/LocationDetails";
import { getLocationByCords } from "../../services/AccuWeatherService";
import { isAlreadyFavorite, getIsFavByKey } from "../../helpers";
import { saveToStorage } from "../../services/LocalStorageService";
import { useLocation } from "react-router";
import { currCityPropType, MISC } from "../../constants";
import styled from "styled-components";
import * as styles from "./styles";

const Home = styled(
  ({
    className,
    unit,
    getCity,
    updateFavorites,
    getCurrentConditions,
    getForecasts,
    weather,
    forecasts,
    theme,
    setCurrCity,
    currCity,
    setUnit,
    setCurrScreen,
  }) => {
    const [stateCurrLocation, setStateCurrLocation] = useState();
    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    const key = query.get(MISC.KEY);
    const city = query.get(MISC.CITY);

    const updateData = useFunction(
      async (location, key) => {
        await setCurrCity(location);
        await getCurrentConditions(key);
        await getForecasts(key);
        saveToStorage(MISC.CURRENT_KEY, key ? key : MISC.TEL_AVIV_KEY);
      },
      [currCity]
    );

    const getGeoLocation = useCallbackOnce(async (pos) => {
      const location = await getLocationByCords(pos);
      updateData(location, location.Key);
    });

    const getLocation = useFunction(
      async (key, city) => {
        const defaultCity = await getCity(city);
        updateData(defaultCity && defaultCity[0], key);
      },
      [key, city]
    );

    const createCurrLocationObject = useFunction(() => {
      return {
        Id: currCity?.Country?.ID,
        isFav: false,
        key: currCity?.Key,
        country: currCity?.Country?.LocalizedName,
        name: currCity?.EnglishName || currCity?.LocalizedName,
        weatherText: weather?.WeatherText,
        temperature: weather?.Temperature,
        forecasts: forecasts?.DailyForecasts,
        date: new Date().toLocaleString("en-GB", { timeZone: "UTC" }),
      };
    }, [weather, currCity, forecasts]);

    const checkUserGeoPermission = async () => {
      const permissionStatus = await navigator?.permissions?.query({
        name: "geolocation",
      });
      const hasPermission = permissionStatus?.state;
      if (hasPermission === MISC.GRANTED)
        navigator.geolocation.getCurrentPosition(getGeoLocation);
      else getLocation();
    };

    useEffect(() => {
      setCurrScreen(MISC.HOME);
      if (key && city) {
        getLocation(key, city);
      } else {
        checkUserGeoPermission();
      }
    }, [key, city, getGeoLocation, getLocation]);

    useEffect(() => {
      if (!weather || !currCity || !forecasts) return;
      setStateCurrLocation(createCurrLocationObject());
    }, [weather, currCity, forecasts, createCurrLocationObject]);

    return (
      <div {...{ className }}>
        {
          <LocationDetails
            location={stateCurrLocation}
            {...{
              unit,
              setUnit,
              theme,
              updateFavorites,
              isAlreadyFavorite,
              getIsFavByKey,
              currCity,
            }}
          />
        }
      </div>
    );
  }
)`
  ${styles.Home}
`;

Home.propTypes = {
  theme: PropTypes.string,
  unit: PropTypes.string,
  getCity: PropTypes.func.isRequired,
  getCurrentConditions: PropTypes.func.isRequired,
  getForecasts: PropTypes.func.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  setCurrCity: PropTypes.func.isRequired,
  currCity: currCityPropType,
  weather: PropTypes.object,
  forecasts: PropTypes.object,
  setUnit: PropTypes.func.isRequired,
  setCurrScreen: PropTypes.func,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.theme !== nextProps.theme ||
  prevProps.unit !== nextProps.unit ||
  prevProps.getCity !== nextProps.getCity ||
  prevProps.getCurrentConditions !== nextProps.getCurrentConditions ||
  prevProps.getForecasts !== nextProps.getForecasts ||
  prevProps.setCurrCity !== nextProps.setCurrCity ||
  prevProps.setUnit !== nextProps.setUnit ||
  prevProps.updateFavorites !== nextProps.updateFavorites ||
  prevProps.setCurrScreen !== nextProps.setCurrScreen ||
  !isEqual(prevProps.currCity, nextProps.currCity) ||
  !isEqual(prevProps.weather, nextProps.weather) ||
  !isEqual(prevProps.forecasts, nextProps.forecasts);

export default ReactMemo(Home, shouldComponentUpdate);
