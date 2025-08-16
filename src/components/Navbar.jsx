import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-links'>
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
        </nav>
    );
};

export default Navbar;
