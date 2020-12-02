import PopUp from "./PopUp";
import { connect } from "react-redux";
import { killPopUp, killAddedPop, killremovedPop } from "../../actions/PopUpActions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      killPopUp,
      killAddedPop,
      killremovedPop
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  isPopped: state?.isPopped.isPopped,
  isAdded: state?.isPopped.isAdded,
  isRemoved: state?.isPopped.isRemoved,
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
