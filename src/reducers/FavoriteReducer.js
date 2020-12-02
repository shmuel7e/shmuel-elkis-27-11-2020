import { loadFromStorage } from "../services/LocalStorageService";

const initialState = {
  favorites: loadFromStorage("favorites") ? loadFromStorage("favorites") : [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: action.newFavorite };
    case "FILTER_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => {
          return (
            favorite?.name
              .toLowerCase()
              .includes(action.searchTxt.toLowerCase()) ||
            favorite?.country
              .toLowerCase()
              .includes(action.searchTxt.toLowerCase())
          );
        }),
      };
    default:
      return state;
  }
}
