import React from 'react';
import './Banner.css';
import '../styles.css';
import topImage from '../images/top-image.jpg';

const Banner = () => {
    return (
        <img src={topImage} className="full-width-banner" />
    );
};

export default Banner;