import { useFavorites } from "../Pages/FavoritesContext/context";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const MovieDetails = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <p className="text-center text-gray-500">No movie details found.</p>;
  }

  const { id, title, release_date, url } = movie;

  return (

        <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="movie-card bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="movie-poster relative w-96 h-auto">
                <img src={url} alt={title}className="w-full h-96 object-cover cursor-pointer"/>
                <button className={`favourite-btn absolute top-5 right-5 p-3 rounded-full hover:shadow-lg transition-all ${favorites.some((fav) => fav.id === id) ? "bg-red-600" : "bg-white"}`} onClick={() => favorites.some((fav) => fav.id === id) ? removeFavorite(id) : addFavorite(movie)}><FaHeart className={`${favorites.some((fav) => fav.id === id) ? "text-white" : "text-black"}`} size={20}/>
                </button>
              </div>
              <div className="movie-info p-3 text-center pb-8">
                <div className="flex justify-between items-center pb-5">
                <h3 className="text-red-600 text-lg font-bold" >{title}</h3>
                <p className="text-gray-400 text-lg" >{release_date || "Unknown Release Date"}</p>
                </div>
                <div className="flex justify-end items-center">
                  <Link to="/"className="bg-red-600 text-white hover:bg-red-700 text-sm font-bold py-2 px-4 rounded-md mt-5 capitalize">Back now</Link>
                </div>
              </div>
            </div>
        </div>
  );
};

export default MovieDetails;


