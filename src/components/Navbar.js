import React, { useState } from 'react';
import './Navbar.css'; 
import '../styles.css';
import {Outlet, Link} from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track hamburger menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <header>
            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
                &#9776; 
            </div>
            <nav className={`tabs ${isOpen ? 'active' : ''}`} id="nav-links">
                <li><Link to="/" className="tab">Home</Link></li>
                <li><Link to="/destinations" className="tab">Destinations</Link></li>
                <li><Link to="/basics" className="tab">Basics</Link></li>
                <li><Link to="/costgear" className="tab">Cost & Gear</Link></li>
                <li><Link to="/contact" className="tab">Contact Us</Link></li>
            </nav>
        </header>
    );
};

export default Navbar;