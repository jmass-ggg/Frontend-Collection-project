import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
     <nav className="navbar">
        <div>
            <Link to="/">Movie App</Link>
        </div>
         <div>
            <Link to="/">Home</Link>
            <Link to="/favorites">favorite</Link>
        </div>

    </nav>
  )
}

export default Navbar