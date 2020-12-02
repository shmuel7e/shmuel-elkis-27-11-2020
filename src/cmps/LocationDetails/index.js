import LocationDetails from "./LocationDetails";
import { connect } from "react-redux";
import { fireAddedPop, fireRemovedPop } from "../../actions/PopUpActions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fireAddedPop,
      fireRemovedPop,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  favorites: state?.favorites.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
