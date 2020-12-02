import React from "react";
import { ReactMemo, useFunction } from "../../../hooks";
import { getDateFormat, getfToC } from "../../../helpers";
import { isEqual } from "lodash";
import * as PropTypes from "prop-types";
import { forecastPropType, MISC } from "../../../constants";
import Temperature from "../../Temperature";
import WeatherStatus from "../../WeatherStatus";
import styled from "styled-components";
import * as styles from "./styles";

const Forecast = styled(({ className, forecast, unit, theme }) => {
  const _getDateFormat = useFunction(
    (date) => {
      return getDateFormat(date);
    },
    [forecast?.Date]
  );

  return (
    <div {...{ className }}>
      <div className="date">{_getDateFormat(forecast.Date)}</div>
      <Temperature
        {...{ unit }}
        weather={forecast.Day.IconPhrase}
        tempInFahrenheit={forecast.Temperature.Maximum.Value}
        tempInCelsius={getfToC(forecast.Temperature.Maximum.Value)}
      />
      <Temperature
        {...{ unit }}
        weather={`${forecast.Night.IconPhrase} ${MISC.NIGHT}`}
        tempInFahrenheit={forecast.Temperature.Minimum.Value}
        tempInCelsius={getfToC(forecast.Temperature.Minimum.Value)}
      />
      <WeatherStatus weatherStatus={forecast.Day.IconPhrase} />
    </div>
  );
})`
  ${styles.Forecast}
`;

Forecast.propTypes = {
  forecasts: forecastPropType,
  unit: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.unit !== nextProps.unit ||
  prevProps.theme !== nextProps.theme ||
  prevProps.className !== nextProps.className ||
  !isEqual(prevProps.forecasts, nextProps.forecasts);

export default ReactMemo(Forecast, shouldComponentUpdate);
