import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavoritesContext from './context';

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };
  
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoritesProvider; 



