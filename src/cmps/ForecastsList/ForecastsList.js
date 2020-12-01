import React from "react";
import { ReactMemo } from "../../hooks";
import Forecast from "./Forecast";
import { getRandomId } from "../../helpers";
import { isEqual } from "lodash";
import * as PropTypes from "prop-types";
import { forecastPropType } from "../../constants";
import styled from "styled-components";
import * as styles from "./styles";

const ForecastsList = styled(({ className, forecasts, unit, theme }) => {
  return (
    <div {...{ className }}>
      {forecasts &&
        forecasts.map((forecast) => (
          <Forecast key={getRandomId()} {...{ unit, theme, forecast }} />
        ))}
    </div>
  );
})`
  ${styles.ForecastsList}
`;

ForecastsList.propTypes = {
  forecasts: PropTypes.arrayOf(forecastPropType),
  theme: PropTypes.string,
  unit: PropTypes.string,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.unit !== nextProps.unit ||
  prevProps.theme !== nextProps.theme ||
  !isEqual(prevProps.forecasts, nextProps.forecasts);

export default ReactMemo(ForecastsList, shouldComponentUpdate);
