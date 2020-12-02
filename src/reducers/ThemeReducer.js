import { loadFromStorage } from "../services/LocalStorageService";

const initialState = {
  theme: loadFromStorage("theme") ? loadFromStorage("theme") : "default",
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.theme };
    default:
      return state;
  }
}
