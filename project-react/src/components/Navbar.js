import React, { useState } from 'react';
import './Navbar.css'; 
import '../styles.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track hamburger menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <header>
            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <nav className={`tabs ${isOpen ? 'active' : ''}`} id="nav-links">
                <a href="/" className="tab">Home</a>
                <a href="/destinations" className="tab">Destinations</a>
                <a href="/basics" className="tab">Basics</a>
                <a href="/costgear" className="tab">Cost & Gear</a>
                <a href="/contact" className="tab">Contact Us</a>
            </nav>
        </header>
    );
};

export default Navbar;