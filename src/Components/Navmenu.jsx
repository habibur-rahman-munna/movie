import { Link } from 'react-router-dom';

const Navmenu = () => {
  return (
    <nav>
        <ul className="flex justify-center items-center gap-4">
            <li><Link to="/" className="text-gray-400 hover:text-red-500 font-bold capitalize">home</Link></li>
            <li><Link to="/favorites" className="text-gray-400 hover:text-red-500 font-bold capitalize">Favorite</Link></li>
        </ul>
    </nav>
  )
}

export default Navmenu;