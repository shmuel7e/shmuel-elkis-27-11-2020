import React  from "react";
import { ReactMemo } from "../../hooks";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import * as styles from "./styles";

const WeatherStatus = styled(({className,weatherStatus}) => {
  return (
  <div {...{ className }}>
   {weatherStatus}
  </div>
  );
})`
${styles.WeatherStatus}
`;

WeatherStatus.propTypes = {
  weatherStatus: PropTypes.string,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.weatherStatus !== nextProps.weatherStatus;


export default ReactMemo(WeatherStatus, shouldComponentUpdate);
