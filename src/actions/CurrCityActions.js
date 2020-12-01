import { saveToStorage } from "../services/LocalStorageService";

export const setCurrCity = (currCity) => {
  saveToStorage("currCity", currCity);
  return { type: "SET_CURR_CITY", currCity };
};
