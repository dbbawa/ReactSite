import React from 'react';
import './Banner.css'; 
import topImage from '../images/topImage'; 

const Banner = () => {
    return (
        <div className="banner">
            <img src={topImage} className="full-width-banner" alt="SkiMastery Banner" />
        </div>
    );
};

export default Banner;