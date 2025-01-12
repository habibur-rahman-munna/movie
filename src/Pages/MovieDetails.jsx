import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom"

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <p className="text-center text-gray-500">No movie details found.</p>;
  }

  const { title, release_date, url } = movie;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <img src={url} alt={title} className="w-96 h-auto rounded-md shadow-lg" />
        <h1 className="text-2xl font-bold text-white mt-3">{title}</h1>
        <h1 className="text-gray-400 text-lg mt-1">{release_date}</h1>
        <Link to="/" className="bg-red-600 text-white hover:bg-red-700 text-sm font-bold py-2 px-4 rounded-md mt-5 capitalize ">back now</Link>
      </div>

  );
};

export default MovieDetails;


