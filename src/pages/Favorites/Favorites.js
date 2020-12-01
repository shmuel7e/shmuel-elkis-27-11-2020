import React, { useEffect } from "react";
import { ReactMemo } from "../../hooks";
import * as PropTypes from "prop-types";
import FavoriteList from "../../cmps/FavoriteList";
import { favLocationPropType, MISC } from "../../constants";
import { isEqual } from "lodash";
import styled from "styled-components";
import * as styles from "./styles";

const Favorits = styled(({ className, favorites, unit, theme, setCurrScreen }) => {

  useEffect(()=>{
    setCurrScreen(MISC.FAV);
  },[])

  return (
    <div {...{ className }}>
      <h1>Favorite Places</h1>
      <FavoriteList favoriteLocations={favorites} {...{ unit, theme }} />
    </div>
  );
})`
  ${styles.Favorits}
`;

Favorits.propTypes = {
  theme: PropTypes.string,
  unit: PropTypes.string,
  favorites: PropTypes.arrayOf(favLocationPropType),
  setCurrScreen:PropTypes.func,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.theme !== nextProps.theme ||
  prevProps.unit !== nextProps.unit ||
  prevProps.setCurrScreen !== nextProps.setCurrScreen ||
  !isEqual(prevProps.favorites, nextProps.favorites);
  

export default ReactMemo(Favorits, shouldComponentUpdate);
