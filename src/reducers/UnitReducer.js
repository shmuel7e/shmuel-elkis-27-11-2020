import { loadFromStorage } from "../services/LocalStorageService";
const initialState = {
  unit: loadFromStorage("unit") ? loadFromStorage("unit") : "c",
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "SET_UNIT":
      return { ...state, unit: action.unit };
    default:
      return state;
  }
}
