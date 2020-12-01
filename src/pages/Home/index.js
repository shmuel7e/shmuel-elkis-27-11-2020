import Home from "./Home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateFavorites } from "../../actions/FavoriteActions";
import { getCity, getCurrentConditions, getForecasts } from "../../actions/LocationActions";
import { setCurrCity } from "../../actions/CurrCityActions";
import { setUnit } from "../../actions/UnitActions";
import {setCurrScreen} from '../../actions/CurrScreenActions';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setUnit,
      getCity,
      getCurrentConditions,
      getForecasts,
      updateFavorites,
      setCurrCity,
      setCurrScreen,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  weather: state?.location?.weather,
  forecasts: state?.location?.forecasts,
  unit: state?.unit.unit,
  theme: state?.theme.theme,
  currCity: state?.currCity.currCity,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
