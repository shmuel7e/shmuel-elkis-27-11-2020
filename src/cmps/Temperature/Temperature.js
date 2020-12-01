import React from "react";
import { ReactMemo } from "../../hooks";
import * as PropTypes from "prop-types";
import { getIcon } from "../../helpers";
import { UNIT_DISPLAY } from "../../constants";
import styled from "styled-components";
import * as styles from "./styles";

const Temperature = styled(
  ({ className, unit, weather, tempInCelsius, tempInFahrenheit }) => {
    return (
      <div {...{ className }}>
        <span className="weather-icon">{getIcon(weather)}</span>
        <div className="unit">
          {unit !== UNIT_DISPLAY.C
            ? tempInFahrenheit + "°" + unit
            : tempInCelsius + "°" + unit}
        </div>
      </div>
    );
  }
)`
  ${styles.Temperature}
`;

Temperature.propTypes = {
  unit: PropTypes.string.isRequired,
  weather: PropTypes.string,
  tempInCelsius: PropTypes.number,
  tempInFahrenheit: PropTypes.number,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.unit !== nextProps.unit ||
  prevProps.weather !== nextProps.weather ||
  prevProps.tempInCelsius !== nextProps.tempInCelsius ||
  prevProps.tempInFahrenheit !== nextProps.tempInFahrenheit;

export default ReactMemo(Temperature, shouldComponentUpdate);
