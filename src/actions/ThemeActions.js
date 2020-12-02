import { saveToStorage } from "../services/LocalStorageService";

export const setTheme = (theme) => {
  saveToStorage("theme", theme);
  return { type: "SET_THEME", theme };
};
