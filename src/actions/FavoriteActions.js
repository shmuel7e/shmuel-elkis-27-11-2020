import { saveToStorage, loadFromStorage} from "../services/LocalStorageService";

export const updateFavorites = (newFavorite) => {
  saveToStorage("favorites", newFavorite);
  return { type: "ADD_FAVORITE", newFavorite };
};

export const filterFavorites = (searchTxt) => {
  return { type: "FILTER_FAVORITE", searchTxt };
};

export const loadFavorites = () => {
  const newFavorite = loadFromStorage("favorites") || [];
  return { type: "ADD_FAVORITE", newFavorite };
};
