import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useFavorites } from "../Pages/FavoritesContext/context";

const MovieCard = ({ movie }) => {
  const { title, release_date, url, id } = movie;
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const onImageClick = () => {
    navigate(`/movie/${id}`, { state: { movie } });
  };

  return (
    <div className="movie-card bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="movie-poster relative">
        <img src={url} alt={title}className="w-full h-96 object-cover cursor-pointer" onClick={onImageClick}/>
        <button className={`favourite-btn absolute top-5 right-5 p-3 rounded-full hover:shadow-lg transition-all ${favorites.some((fav) => fav.id === id) ? "bg-red-600" : "bg-white"}`} onClick={() => favorites.some((fav) => fav.id === id) ? removeFavorite(id) : addFavorite(movie)}><FaHeart className={`${favorites.some((fav) => fav.id === id) ? "text-white" : "text-black"}`} size={20}/>
        </button>
      </div>

      <div className="movie-info p-6 flex justify-between items-center">
        <h3 className="text-red-600 font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-400 text-lg">{release_date || "Unknown Release Date"}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
