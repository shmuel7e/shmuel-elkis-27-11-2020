import { loadFromStorage } from "../services/LocalStorageService";

const initialState = {
  currCity: loadFromStorage("currCity") ? loadFromStorage("currCity") : {},
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "SET_CURR_CITY":
      return { ...state, currCity: action.currCity };
    default:
      return state;
  }
}
