import React, { useState } from 'react';
import './Location.css'
import EditDialog from './edit-dialog';
import DeleteDialog from './delete-dialog';

const Location = (props) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [location, setLocation] = useState(props);
    const [showLocation, setShowLocation] = useState(true);

const openEditDialog = (e) => {
    e.preventDefault();
    setShowEditDialog(true);
   };

   const closeEditDialog = () => {
    setShowEditDialog(false);
   };

   const openDeleteDialog = () => {
    setShowDeleteDialog(true);
   };

   const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
   };

   const editLocation = (location) => {
    setLocation(location);
};

const hideLocation = (location) => {
    setShowLocation(false);
};

return (
<>
{showLocation ? (
<div>
    {showDeleteDialog ? (
        <DeleteDialog 
        closeDialog={closeDeleteDialog} 
        name={location.name} 
        _id={location._id}
        hideLocation = {hideLocation}
        /> 
    ) : ( 
        ""
    )}

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
                            <a
        href="#"
        onClick={(e) => {
            e.preventDefault(); 
            openDeleteDialog();
        }}
    >
        &#x2715;
    </a>
                        </section>
                       </header>
                   </div>
) : ("") }
                   </>
);
};

export default Location;