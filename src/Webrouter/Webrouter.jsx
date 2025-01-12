import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import MovieCard from "../Components/MovieCard"

const Webrouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<MovieCard/>} />
        </Routes>
    </div>
  )
}

export default Webrouter