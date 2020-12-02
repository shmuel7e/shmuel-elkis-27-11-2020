import React from "react";
import { ReactMemo } from "../../../hooks";
import * as PropTypes from "prop-types";
import Temperature from "../../Temperature";
import ButtonWithIcon from "../../ButtonWithIcon";
import WeatherDate from "../../../cmps/WeatherDate";
import WeatherStatus from "../../../cmps/WeatherStatus";
import WeatherLocation from "../../../cmps/WeatherLocation";
import styled from "styled-components";
import * as styles from "./styles";

const TempDetails = styled(
  ({className, handleClick, tempInCelsius, tempInFahrenheit, weather, weatherStatus, icon, unit, theme, date, country, city}) => {
    return (
      <div {...{ className }}>
        <WeatherLocation {...{ country, city }} />
        <Temperature {...{ unit, weather, tempInCelsius, tempInFahrenheit }} />
        <WeatherStatus {...{ weatherStatus }} />
        <ButtonWithIcon {...{ theme, icon, handleClick }} />
        <WeatherDate {...{ date }} />
      </div>
    );
  }
)`
  ${styles.TempDetails}
`;

TempDetails.propTypes = {
  unit: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  weather: PropTypes.string,
  tempInCelsius: PropTypes.number,
  tempInFahrenheit: PropTypes.number,
  WeatherStatus: PropTypes.string,
  date: PropTypes.string,
  theme: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  icon: PropTypes.element,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.unit !== nextProps.unit ||
  prevProps.weather !== nextProps.weather ||
  prevProps.tempInCelsius !== nextProps.tempInCelsius ||
  prevProps.tempInFahrenheit !== nextProps.tempInFahrenheit ||
  prevProps.handleClick !== nextProps.handleClick ||
  prevProps.WeatherStatus !== nextProps.WeatherStatus ||
  prevProps.date !== nextProps.date ||
  prevProps.theme !== nextProps.theme ||
  prevProps.country !== nextProps.country ||
  prevProps.city !== nextProps.city ||
  prevProps.icon !== nextProps.icon;

export default ReactMemo(TempDetails, shouldComponentUpdate);
