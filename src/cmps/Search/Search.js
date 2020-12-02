import React, { useCallback, useEffect, useState } from "react";
import { ReactMemo, useFunction } from "../../hooks";
import { debounce } from "lodash";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import * as PropTypes from "prop-types";
import { saveToStorage } from "../../services/LocalStorageService";
import { currCityPropType, MISC, SEARCH_LABEL } from "../../constants";
import { isEqual } from "lodash";
import styled from "styled-components";
import * as styles from "./styles";

const Search = styled(({className, getCity, setCurrCity, getCurrentConditions, getForecasts, currCity, filterFavorites, loadFavorites, favorites, currScreen, theme}) => {
    const [stateLocations, setStateLocations] = useState([]);
    const [stateSearchLabel,setStateSearchLabel] = useState();

    const searchLocation = useCallback(
      debounce(async (city) => {
        if (isFavoriteScreen()){
          filterFavorites(city)
          return;
        }
        if (city === "") return;
        const newLocation = await getCity(city);
        if (!newLocation) return;
        setStateLocations(newLocation);
      }, 600),
      []
    );

    const handleChange = (e) => {
      searchLocation(e.target.value);
    };

    const handleKeyDown = (e) =>{
      if (isFavoriteScreen()){
        if (e.keyCode === 8 || e.keyCode === 46) {
          loadFavorites();
          return;
        }
      }
      return;
    }

    const updateData = useFunction(
      async (location, key) => {
        saveToStorage(MISC.CURRENT_KEY, key);
        await getForecasts(key);
        await getCurrentConditions(key);
        await setCurrCity(location);
      },
      [currCity]
    );

    const handleAutoComplete = async (ev, location) => {
      if (!location) return;
      updateData(location, location.Key);
    };

    const isFavoriteScreen = () =>{
      if (window.location.href.includes('/favorites')) return true;
      else return false;
    }

    useEffect(()=>{
      if (currScreen ==='favorites') {
        setStateSearchLabel(SEARCH_LABEL.FAV);
      }
      else setStateSearchLabel(SEARCH_LABEL.HOME)
    },[currScreen])

    return (
      <div {...{ className }}>
        <Autocomplete
          options={stateLocations}
          size="medium"
          onChange={handleAutoComplete}
          getOptionLabel={(stateLocations) => stateLocations.LocalizedName}
          style={{ width: 250 }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              label={stateSearchLabel}
              variant="outlined"
            />
          )}
        />
      </div>
    );
  }
)`
  ${styles.Search}
`;

Search.propTypes = {
  getCity: PropTypes.func.isRequired,
  setCurrCity: PropTypes.func.isRequired,
  getCurrentConditions: PropTypes.func.isRequired,
  getForecasts: PropTypes.func.isRequired,
  filterFavorites: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  theme: PropTypes.string,
  currScreen: PropTypes.string,
  currCity: currCityPropType,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.getCity !== nextProps.getCity ||
  prevProps.setCurrCity !== nextProps.setCurrCity ||
  prevProps.getCurrentConditions !== nextProps.getCurrentConditions ||
  prevProps.getForecasts !== nextProps.getForecasts ||
  prevProps.filterFavorites !== nextProps.filterFavorites ||
  prevProps.loadFavorites !== nextProps.loadFavorites ||
  prevProps.theme !== nextProps.theme ||
  prevProps.currScreen !== nextProps.currScreen ||
  !isEqual(prevProps.currCity, nextProps.currCity);

export default ReactMemo(Search, shouldComponentUpdate);

