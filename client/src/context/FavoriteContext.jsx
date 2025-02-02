import { createContext, useContext, useState } from "react";

const favoriteContext = createContext();
function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  function addToFavorites(product) {
    setFavorites((favoriets) =>
      favoriets.find((f) => f._id == product._id)
        ? favoriets.filter((fa) => fa._id !== product._id)
        : [...favoriets, product]
    );
  }
  return (
    <favoriteContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </favoriteContext.Provider>
  );
}
function useFavorite() {
  return useContext(favoriteContext);
}
export { FavoriteContextProvider, useFavorite };
