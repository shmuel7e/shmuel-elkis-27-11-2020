import React from "react";
import { ReactMemo, useFunction } from "../../../hooks";
import * as PropTypes from "prop-types";
import { isEqual } from "lodash";
import { favLocationPropType, MISC } from "../../../constants";
import Spinner from "../../Spinner";
import { useHistory } from "react-router";
import { saveToStorage } from "../../../services/LocalStorageService";
import Temperature from "../../Temperature";
import WeatherStatus from "../../WeatherStatus";
import WeatherLocation from "../../WeatherLocation";
import styled from "styled-components";
import * as styles from "./styles";

const FavoriteLocation = styled(({ favoriteLocation, unit, className, image , theme }) => {
  const history = useHistory();

  const showDetails = useFunction(() => {
    saveToStorage(MISC.CURRENT_KEY, favoriteLocation.key);
    history.push(`/?key=${favoriteLocation.key}&city=${favoriteLocation.name}`);
  }, [favoriteLocation.key]);

  return (
    <div {...{ className }} onClick={showDetails}>
      {favoriteLocation ? (
        <React.Fragment>
          <WeatherLocation
            country={favoriteLocation.country}
            city={favoriteLocation.name}
          />
          <Temperature
            tempInCelsius={favoriteLocation.temperature.Metric.Value}
            tempInFahrenheit={favoriteLocation.temperature.Imperial.Value}
            weather={favoriteLocation.weatherText}
            {...{ unit }}
          />
          <WeatherStatus weatherStatus={favoriteLocation.weatherText} />
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
})`
  ${styles.FavoriteLocation}
`;

FavoriteLocation.propTypes = {
  favoriteLocation: favLocationPropType,
  unit: PropTypes.string,
  theme: PropTypes.string,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  !isEqual(prevProps.favoriteLocation, nextProps.favoriteLocation) ||
  prevProps.unit !== nextProps.unit ||
  prevProps.theme !== nextProps.theme;

export default ReactMemo(FavoriteLocation, shouldComponentUpdate);
