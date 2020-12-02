import Favorites from "./Favorites";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrScreen } from "../../actions/CurrScreenActions";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCurrScreen,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  favorites: state?.favorites.favorites,
  unit: state?.unit.unit,
  theme: state?.theme.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
