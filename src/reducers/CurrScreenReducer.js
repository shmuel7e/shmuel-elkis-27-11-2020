const initialState = {
  currScreen: "home",
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "SET_CURR_SCREEN":
      return { ...state, currScreen: action.currScreen };
    default:
      return state;
  }
}
