import Header from "./Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setTheme } from "../../actions/ThemeActions";
import { getCity,getCurrentConditions,getForecasts } from "../../actions/LocationActions";
import { setCurrCity } from "../../actions/CurrCityActions";
import {filterFavorites, loadFavorites} from '../../actions/FavoriteActions';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCity,
      setTheme,
      setCurrCity,
      getCurrentConditions,
      getForecasts,
      filterFavorites,
      loadFavorites
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  theme: state?.theme.theme,
  currCity: state?.currCity.currCity,
  favorites: state?.favorites.favorites,
  currScreen: state?.currScreen.currScreen
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
