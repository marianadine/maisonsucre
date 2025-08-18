import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            {/* right side container */}
            <div className="nav-right">
                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pastry" className={({ isActive }) => isActive ? "active" : ""}>pastries</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>cart</NavLink>
                    </li>
                </ul>

                {/* Hamburger */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
