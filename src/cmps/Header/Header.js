import React from "react";
import { ReactMemo } from "../../hooks";
import * as PropTypes from "prop-types";
import Switch from "../Switch";
import Search from "../Search";
import { currCityPropType , favLocationPropType} from "../../constants";
import { isEqual } from "lodash";
import NavButtons from "../NavButtons/NavButtons";
import styled from "styled-components";
import * as styles from "./styles";

const Header = styled(
  ({ className, getCity, getCurrentConditions, getForecasts, theme, icons, setTheme, currCity, setCurrCity, filterFavorites, favorites, loadFavorites, currScreen}) => {
    return (
      <div {...{ className }}>
        <NavButtons {...{ theme, icons }} handleClick={loadFavorites} />
        <Search {...{ theme, getCity, setCurrCity, currCity, getForecasts, getCurrentConditions, filterFavorites , loadFavorites, favorites, currScreen}}/>
        <Switch {...{ theme }} onChange={setTheme} />
      </div>
    );
  }
)`
  ${styles.Header}
`;

Header.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.element),
  theme: PropTypes.string,
  setTheme: PropTypes.func,
  getCity: PropTypes.func.isRequired,
  getCurrentConditions: PropTypes.func.isRequired,
  getForecasts: PropTypes.func.isRequired,
  setCurrCity: PropTypes.func.isRequired,
  filterFavorites: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  favorites:PropTypes.arrayOf(favLocationPropType),
  currScreen:PropTypes.string,
  currCity: currCityPropType,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.theme !== nextProps.theme ||
  prevProps.icons !== nextProps.icons ||
  prevProps.setTheme !== nextProps.setTheme ||
  prevProps.getCity !== nextProps.getCity ||
  prevProps.getCurrentConditions !== nextProps.getCurrentConditions ||
  prevProps.getForecasts !== nextProps.getForecasts ||
  prevProps.setCurrCity !== nextProps.setCurrCity ||
  prevProps.filterFavorites !== nextProps.filterFavorites ||
  prevProps.loadFavorites !== nextProps.loadFavorites ||
  prevProps.currScreen !== nextProps.currScreen ||
  isEqual(prevProps.currCity, nextProps.currCity) ||
  isEqual(prevProps.favorites, nextProps.favorites);

export default ReactMemo(Header, shouldComponentUpdate);
