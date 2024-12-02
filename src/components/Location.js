import React, { useState } from 'react';
import './Location.css'
import EditDialog from './edit-dialog';

const Location = (props) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [location, setLocation] = useState(props);

const openEditDialog = (e) => {
    e.preventDefault();
    setShowEditDialog(true);
   };

   const closeEditDialog = () => {
    setShowEditDialog(false);
   };

   const editLocation = (location) => {
    setLocation(location);
};

return (
<div>
                        {showEditDialog ? (
                        <EditDialog 
                        closeDialog={closeEditDialog} 
                        editLocation={editLocation}
                        _id={location._id}
                        name={location.name}
                        image={location.image}
                        /> 
                        ) : ( 
                            ""
                        )}

                       <header className="list">
                       <h3>{location.name}</h3>
                       <img src={"https://serverside-4czo.onrender.com/images/" + location.image} alt={location.name} />
                        <section id ="change-buttons">
                            <a href="#" onClick={openEditDialog}>
                                &#9998;
                            </a>
                            <a href="#">
                                &#x2715;
                            </a>
                        </section>
                       </header>
                   </div>
);
};

export default Location;