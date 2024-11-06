import React from 'react';
import './Banner.css';
import '../styles.css';
import banner from '../images/top-image.jpg';


const Banner = () => {
    return (
        <img src={banner} className="full-width-banner" alt="SkiMastery Banner" />
    );
};

export default Banner;