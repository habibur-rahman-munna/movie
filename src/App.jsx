import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import FavoritesPage from "./Pages/FavoritesPage";
import FavoritesProvider from "./Pages/FavoritesContext/FavoritesProvider";
const App = () => {
  
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>
    </FavoritesProvider>
  );
};

export default App;

