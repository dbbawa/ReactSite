import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from '../images/logo.jpg';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="hamburger" id="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`tabs ${isOpen ? 'open' : ''}`} id="nav-links">
        <Link to="/" className="tab">Home</Link>
        <Link to="/destinations" className="tab">Destinations</Link>
        <Link to="/basics" className="tab">Basics</Link>
        <Link to="/costgear" className="tab">Cost & Gear</Link>
        <Link to="/contact" className="tab">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;