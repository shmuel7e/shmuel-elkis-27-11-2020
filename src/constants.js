import * as PropTypes from "prop-types";

export const THEME = Object.freeze({
  DEFAULT: "default",
  DARK: "dark",
});

export const API = Object.freeze({
  KEY: "O9AFzM6d6HAnPRzuuq1XvGAsCdGNMMgh",
});

export const THEME_COLOR = Object.freeze({
  DEFAULT: "white",
  DARK: "black",
});

export const STORAGE_ITEM = Object.freeze({
  THEME: "theme",
});

export const PATH = Object.freeze({
  HOME: "/",
  FAVORITES: "/favorites",
});

export const UNIT_DISPLAY = Object.freeze({
  C: "c",
  F: "f",
});

export const SEARCH_LABEL = Object.freeze({
  HOME: "Search a new Location...",
  FAV: "Search a Favorite...",
});

export const MISC = Object.freeze({
  KEY: "key",
  CITY: "city",
  CURRENT_KEY: "currKey",
  FAVED: "faved",
  UN_FAVED: "notfaved",
  CHANGE: "change",
  NIGHT: "night",
  TEL_AVIV_KEY: "215854",
  GRANTED: "granted",
  HOME: "home",
  FAV: "favorites",
});

export const favLocationPropTypeShape = {
  isFav: PropTypes.bool,
  key: PropTypes.string,
  Id: PropTypes.string,
  country: PropTypes.string,
  name: PropTypes.string,
  weatherText: PropTypes.string,
  temperature: PropTypes.shape({
    metric: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
    imperial: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
  }),
};

export const favLocationPropType = PropTypes.shape(favLocationPropTypeShape);

export const currCityPropTypeShape = {
  AdministrativeArea: PropTypes.object,
  Country: PropTypes.object,
  Key: PropTypes.string,
  LocalizedName: PropTypes.string,
  Rank: PropTypes.number,
  Type: PropTypes.string,
  Version: PropTypes.number,
};

export const currCityPropType = PropTypes.shape(currCityPropTypeShape);

export const forecastPropTypeShape = {
  Date: PropTypes.string,
  Day: PropTypes.shape({ IconPhrase: PropTypes.string }),
  Night: PropTypes.shape({ IconPhrase: PropTypes.string }),
  temperature: PropTypes.shape({
    Maximum: PropTypes.shape({
      Value: PropTypes.number,
      Unit: PropTypes.string,
    }),
    Minimum: PropTypes.shape({
      Value: PropTypes.number,
      Unit: PropTypes.string,
    }),
  }),
};

export const forecastPropType = PropTypes.shape(forecastPropTypeShape);
// my original key oAtuZFIyzrtd9lgMm2fGQx25Jk7jzzQf //
