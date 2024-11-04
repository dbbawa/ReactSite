import React from 'react';
import './Footer.css'; 
import '../styles.css';
import logo from '../images/logo.jpg'; 


const Footer = () => {
    return (
        <footer>
            <hr className="footer-divider" />
            <div className="logo-bottom">
                <img src={logo} className="logo-image" alt="SkiMastery Logo" />
            </div>
        </footer>
    );
};

export default Footer;