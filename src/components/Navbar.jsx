import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/pastry" className={({ isActive }) => isActive ? "active" : ""}>Pastries</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>Cart</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
