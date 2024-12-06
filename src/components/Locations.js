import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from './Modal';
import AddDialog from "./add-dialog";
import Location from "./Location";
import './Locations.css';

const Locations = () => {
   const [locations, setLocations] = useState([]);
   const [showAddDialog, setShowAddDialog] = useState(false);
   const [isModalOpen, setModalOpen] = useState(false);
   const [selectedLocation, setSelectedLocation] = useState(null);


   useEffect(() => {
       const fetchLocations = async () => {
           try {
               const response = await axios.get("https://serverside-4czo.onrender.com/api/locations/");
               setLocations(response.data);
           } catch (error) {
               console.error('Error fetching locations:', error);
           }
       };
       fetchLocations();
   }, []); 

   const addLocation = (newLocation) => {
    setLocations((locations) => [...locations, newLocation]);
   }

   const openAddDialog = () => {
       setShowAddDialog(true);
   };


   const closeAddDialog = () => {
       setShowAddDialog(false);
   };


   const openModal = (location) => {
       setSelectedLocation(location);
       setModalOpen(true);
   };


   const closeModal = () => {
       setModalOpen(false);
   };

   return (
       <div>
           <button id="add-location" onClick={openAddDialog}>
               +
           </button>


           {showAddDialog ? <AddDialog closeDialog={closeAddDialog} addLocation={addLocation} /> : ""}
           <div className="locations-list">
               {locations.map((location) => (
                    <div className="locations-item">
                   <Location
                       _id={location._id}
                      name={location.name}
                      image={location.image}
                   />
                   </div>
               ))}
           </div>

           <Modal isOpen={isModalOpen} onClose={closeModal} location={selectedLocation} />
       </div>
   );
};

export default Locations;
