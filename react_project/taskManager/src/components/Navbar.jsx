import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="brand">
            <span className="logo">✓</span>
             <h2>FocusBoard</h2>
        </div>
        <div className="nav-links">
            <a className='active' href='#'>Dashboard</a>
            <a  href='#'>Calendar</a>
        </div>
        <div className='dark-mode'>
            <span>Dark mode</span>
        </div>
        
    </div>
  )
}

export default Navbar