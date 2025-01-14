import { useFavorites } from './FavoritesContext/context';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-5">Your Favorites</h1>
      {favorites.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <li key={movie.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={movie.url} alt={movie.title} className="w-full h-96 object-cover cursor-pointer" 
              onClick={() => navigate(`/movie/${movie.id}`, { state: { movie } })}/>
              <div className="flex justify-between items-center pt-6 px-6">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-gray-400">{movie.release_date}</p>
              </div>
              <div className="flex justify-end items-center px-6 py-6">
              <button className="bg-red-600 text-white hover:bg-red-700 text-sm font-bold py-2 px-4 rounded-md mt-5 capitalize" onClick={() => removeFavorite(movie.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
