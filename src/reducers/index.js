import { combineReducers } from "redux";
import SystemReducer from "./SystemReducer";
import LocationReducer from "./LocationReducer";
import UnitReducer from "./UnitReducer";
import ThemeReducer from "./ThemeReducer";
import FavoriteReducer from "./FavoriteReducer";
import CurrCityReducer from "./CurrCityReducer";
import CurrScreenReducer from "./CurrScreenReducer";
import PopUpReducer from "./PopUpReducer";

const rootReducer = combineReducers({
  system: SystemReducer,
  location: LocationReducer,
  unit: UnitReducer,
  theme: ThemeReducer,
  favorites: FavoriteReducer,
  currCity: CurrCityReducer,
  currScreen: CurrScreenReducer,
  isPopped: PopUpReducer,
});

export default rootReducer;
