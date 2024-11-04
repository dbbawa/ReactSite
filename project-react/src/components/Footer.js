import React from 'react';
import './Footer.css'; 
import '../styles.css';

const Footer = () => {
    return (
        <footer>
            <hr className="footer-divider" />
            <div className="logo-bottom">
                <img src="images/logo.jpg" className="logo-image" alt="SkiMastery Logo" />
            </div>
        </footer>
    );
};

export default Footer;