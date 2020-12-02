import React from "react";
import { ReactMemo } from "../../hooks";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import * as styles from "./styles";

const WeatherDate = styled(({ className, date }) => {
  return (
    <div {...{ className }}>
      {date}
    </div>
  );
})`
  ${styles.WeatherDate}
`;

WeatherDate.propTypes = {
    date: PropTypes.string,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.date !== nextProps.date 

export default ReactMemo(WeatherDate, shouldComponentUpdate);
