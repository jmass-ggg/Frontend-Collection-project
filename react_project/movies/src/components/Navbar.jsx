import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
const Navbar = () => {
  return (
   <nav className='navbar'>
        <div>
            <Link to="/">Movie App</Link>
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
   </nav>
  )
}

export default Navbar