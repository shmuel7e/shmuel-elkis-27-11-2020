import React from "react";
import { ReactMemo } from "../../hooks";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import * as styles from "./styles";

const WeatherLocation = styled(({ className, country, city }) => {
  return (
    <div {...{ className }}>
      {`${country} , ${city}`}
    </div>
  );
})`
  ${styles.WeatherLocation}
`;

WeatherLocation.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.country !== nextProps.country || prevProps.city !== nextProps.city;

export default ReactMemo(WeatherLocation, shouldComponentUpdate);
