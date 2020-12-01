import { saveToStorage } from "../services/LocalStorageService";

export const setUnit = (unit) => {
  saveToStorage("unit", unit);
  return { type: "SET_UNIT", unit };
};
