import img1 from "../assets/movie1.png"
import img2 from "../assets/movie2.png"
import img3 from "../assets/movie3.png"
import img4 from "../assets/movie4.png"
import img5 from "../assets/movie5.png"
import img6 from "../assets/movie6.png"
import img7 from "../assets/movie7.png"
import img8 from "../assets/movie8.png"
import img9 from "../assets/movie9.png"
import img10 from "../assets/movie10.png"
import img11 from "../assets/movie11.png"
import img12 from "../assets/movie12.png"
import img13 from "../assets/movie13.png"
import img14 from "../assets/movie14.png"
import img15 from "../assets/movie15.png"

import MovieCard from "./../Components/MovieCard";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const movies = [
    {
      id: 1,
      title: "Tim's Film",
      release_date: "2024",
      url: img1,
    },
    {
      id: 2,
      title: "Terminator",
      release_date: "2022",
      url:img2, 
    },
    {
      id: 3,
      title: "The Matrix",
      release_date: "2021",
      url: img3,
    },
    {
      id: 4,
      title: "John Wick",
      release_date: "2020",
      url: img4,
    },
    {
      id: 5,
      title: "Barsaat",
      release_date: "2019",
      url: img5,
    },
    {
      id: 6,
      title: "Andaz",
      release_date: "2018",
      url: img6,
    },
    {
      id: 7,
      title: "Mahal",
      release_date: "2017",
      url: img7,
    },
    {
      id: 8,
      title: "Dillagi",
      release_date: "2016",
      url: img8,
    },
    {
      id: 9,
      title: "Shabnam",
      release_date: "2015",
      url: img9,
    },
    {
      id: 10,
      title: "Bari Behen",
      release_date: "2014",
      url: img10,
    },
    {
      id: 11,
      title: "Patanga",
      release_date: "2013",
      url: img11,
    },
    {
      id: 12,
      title: "Dulari",
      release_date: "2012",
      url: img12,
    },
    {
      id: 13,
      title: "	Singaar",
      release_date: "2011",
      url: img13,
    },
    {
      id: 14,
      title: "Nanubhai Vakil",
      release_date: "2010",
      url: img14,
    },
    {
      id: 15,
      title: "	Amar Mullick",
      release_date: "2009",
      url:img15, 
    },
  ];
  
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home bg-gray-900 text-white min-h-screen px-10 pb-20">
      <div className="flex justify-between items-center py-10 px-10">
      <h1 className="text-3xl font-bold mb-10 text-center capitalize">all Movies</h1>
      <form onSubmit={handleSearch} className="search-form flex items-center justify-center">
        <input type="text" placeholder="Search movie" value={search} onChange={(e) => setSearch(e.target.value)} className="search-input p-2 rounded-l-md text-black w-64 focus:outline-none"/>
        <button type="submit" className="search-button bg-red-600 text-white p-2 rounded-r-md text-base font-medium">Search</button>
      </form>

      </div>
      <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
