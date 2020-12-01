import React, { useCallback, useEffect, useState } from "react";
import { ReactMemo, useFunction } from "../../hooks";
import * as PropTypes from "prop-types";
import Spinner from "../Spinner";
import { isEqual } from "lodash";
import ButtonWithIcon from "../ButtonWithIcon";
import { loadFromStorage } from "../../services/LocalStorageService";
import { getIcon } from "../../helpers";
import ForecastsList from "../ForecastsList";
import {
  favLocationPropType,
  currCityPropType,
  MISC,
  UNIT_DISPLAY,
} from "../../constants";
import styled from "styled-components";
import * as styles from "./styles";
import TempDetails from "./TempDetails";
const LocationDetails = styled(
  ({
    className,
    location,
    unit,
    theme,
    updateFavorites,
    favorites,
    isAlreadyFavorite,
    getIsFavByKey,
    currCity,
    setUnit,
    fireAddedPop,
    fireRemovedPop,
  }) => {
    const [stateIsFav, setStateIsFav] = useState();

    useEffect(() => {
      const currKey = loadFromStorage(MISC.CURRENT_KEY);
      const answer = getIsFavByKey(currKey);
      setStateIsFav(answer);
    }, [favorites, getIsFavByKey, currCity]);

    const toggleFavorite = useFunction(
      (location, favorites) => {
        setStateIsFav((prev) => !prev);
        location.isFav = !stateIsFav;
        if (!isAlreadyFavorite(location.key, favorites)) {
          addFavorite(favorites, location);
          fireAddedPop();
        } else if (isAlreadyFavorite(location.key, favorites)) {
          removeFavorite(favorites, location);
          fireRemovedPop();
        }
      },
      [setStateIsFav, updateFavorites]
    );

    const addFavorite = (favorites, location) => {
      const updatedFavorites = [...favorites, location];
      updateFavorites(updatedFavorites);
    };

    const removeFavorite = (favorites, location) => {
      if (!favorites) return;
      const updatedFavorites = favorites.filter(
        (favorite) => favorite?.key !== location.key
      );
      updateFavorites(updatedFavorites);
    };

    const changeUnitType = useCallback(() => {
      let type;
      if (loadFromStorage("unit") === UNIT_DISPLAY.C || null)
        type = UNIT_DISPLAY.F;
      else type = UNIT_DISPLAY.C;
      setUnit(type);
    }, [setUnit]);

    return (
      <div {...{ className }}>
        {location ? (
          <React.Fragment>
            <ButtonWithIcon
              handleClick={() => toggleFavorite(location, favorites)}
              {...{ theme }}
              icon={stateIsFav ? getIcon(MISC.FAVED) : getIcon(MISC.UN_FAVED)}
            />
            <TempDetails
              country={location.country}
              city={location.name}
              tempInCelsius={location.temperature.Metric.Value}
              tempInFahrenheit={location.temperature.Imperial.Value}
              weather={location.weatherText}
              icon={getIcon(MISC.CHANGE)}
              handleClick={changeUnitType}
              date={location.date.slice(0, location.date.length - 3)}
              weatherStatus={location.weatherText}
              {...{ unit, theme }}
            />
            <ForecastsList
              forecasts={location?.forecasts}
              {...{ unit, theme }}
            />
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
)`
  ${styles.LocationDetails}
`;

LocationDetails.propTypes = {
  unit: PropTypes.string.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  isAlreadyFavorite: PropTypes.func.isRequired,
  getIsFavByKey: PropTypes.func.isRequired,
  isFav: PropTypes.bool,
  theme: PropTypes.string,
  favorites: PropTypes.arrayOf(favLocationPropType),
  currCity: currCityPropType,
  setUnit: PropTypes.func.isRequired,
  location: favLocationPropType,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.unit !== nextProps.unit ||
  prevProps.isFav !== nextProps.isFav ||
  prevProps.setLocation !== nextProps.setLocation ||
  prevProps.isAlreadyFavorite !== nextProps.isAlreadyFavorite ||
  prevProps.updateFavorites !== nextProps.updateFavorites ||
  prevProps.setUnit !== nextProps.setUnit ||
  prevProps.theme !== nextProps.theme ||
  !isEqual(prevProps.location, nextProps.location) ||
  !isEqual(prevProps.favorites, nextProps.favorites) ||
  !isEqual(prevProps.currCity, nextProps.currCity);

export default ReactMemo(LocationDetails, shouldComponentUpdate);
