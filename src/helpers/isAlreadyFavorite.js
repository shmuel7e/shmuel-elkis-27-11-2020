import { loadFromStorage } from "../services/LocalStorageService";

/**
 * @param {number} key
 * @return {bool}
 */

export const isAlreadyFavorite = (key) => {
  const favorites = loadFromStorage("favorites");
  if (
    favorites?.find((favorite) => {
      
      return favorite && favorite.key === key;
    })
  )
    return true;
  else {
    return false;
  }
};

export default isAlreadyFavorite;
