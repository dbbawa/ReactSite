import React from 'react';
import './Footer.css'; 
import logo from '../images/logo.jpg'; 
import '../styles.css';


const Footer = () => {
    return (
        <>
            <hr className="footer-divider" />
            <footer>
                <div className="logo-bottom">
                    <img src={logo} className="logo-image" alt="SkiMastery Logo" />
                </div>
            </footer>
        </>
    );
};

export default Footer;