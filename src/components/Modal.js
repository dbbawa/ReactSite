import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, location }) => {
    if (!isOpen || !location) return null;

    return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>X</button>
            <h3>{location.title}</h3>
            <img src={"https://serverside-4czo.onrender.com/images/" + location.detail_image} alt={location.detail_image} className="modal-image"/>
            {isOpen && (
                <div>
                    <h4>Resorts</h4>
                    <ul>
                            {(location.resorts || []).length > 0 ? (
                                location.resorts.map((resort, index) => (
                                    <li key={index}>{resort}</li>
                                ))
                            ) : (
                                <li>No resorts available.</li>
                            )}
                        </ul>

                    <h4>Slopes Details</h4>
                    <p>{location.slopes.description}</p>

                    <h4>Ski Season</h4>
                    <p>{location.ski_season.description}</p>

                    <h4>Shopping & Restaurants</h4>
                    <p>{location.shopping_restaurants.description}</p>

                    <h4>Special Facts</h4>
                    <ul>
                        {location.special_facts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>

                    <h4>Activities</h4>
                    <ul>
                        {location.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
);
};

export default Modal;