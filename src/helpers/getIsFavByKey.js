import { loadFromStorage } from "../services/LocalStorageService";

/**
 * @param {number} key
 * @return {bool}
 */

export const getIsFavByKey = (key) => {
  const favorites = loadFromStorage("favorites");
  const answer = favorites?.find((favorite) => {
    return String(favorite?.key) === String(key);
  });
  if (answer) return true;
  else return false;
};

export default getIsFavByKey;
