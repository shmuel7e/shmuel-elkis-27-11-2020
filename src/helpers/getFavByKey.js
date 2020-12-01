import { loadFromStorage } from "../services/LocalStorageService";

/**
 * @param {number} key
 * @return {object}
 */

export const getIsFavByKey = (key) => {
  const favorites = loadFromStorage("favorites");
  const answer = favorites?.find((favorite) => {
    return String(favorite.key) === String(key);
  });
  return answer;
};

export default getIsFavByKey;
