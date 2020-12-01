import React from "react";
import { ReactMemo } from "../../hooks";
import { isEqual } from "lodash";
import * as PropTypes from "prop-types";
import FavoriteLocation from "./FavoriteLocation";
import { favLocationPropType } from "../../constants";
import { getRandomId, getImageBg } from "../../helpers";
import styled from "styled-components";
import * as styles from "./styles";

const FavoriteList = styled(({ className, favoriteLocations, unit, theme }) => {
  return (
    <div {...{ className }}>
      {favoriteLocations &&
        favoriteLocations.map((favoriteLocation) => (
          favoriteLocation &&
          <FavoriteLocation
            key={getRandomId()}
            image={getImageBg(favoriteLocation.weatherText)}
            {...{ unit, favoriteLocation, theme }}
          />
        ))}
    </div>
  );
})`
  ${styles.FavoriteList}
`;

FavoriteList.propTypes = {
  favoriteLocations: PropTypes.arrayOf(favLocationPropType),
  theme: PropTypes.string,
  unit: PropTypes.string,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  !isEqual(prevProps.favoriteLocations, nextProps.favoriteLocations) ||
  prevProps.unit !== nextProps.unit ||
  prevProps.theme !== nextProps.theme;

export default ReactMemo(FavoriteList, shouldComponentUpdate);
