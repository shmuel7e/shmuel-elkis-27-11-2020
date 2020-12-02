const initialState = {
  weather: null,
  forecasts: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "SET_WEATHER":
      return { ...state, weather: action.weather };
    case "SET_FORECASTS":
      return { ...state, forecasts: action.forecasts };
    default:
      return state;
  }
}
