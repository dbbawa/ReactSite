import React, { useState } from "react";
import './delete-dialog.css';


const DeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteLocation = async() => {
        const response = await fetch(`http://localhost:3001/api/locations/${props._id}`,{
            method:"DELETE"
           }
        );
           if(response.status === 200){
            setResult("Location successfully delete");
            props.hideLocation();
            props.closeDialog();
           } else {
            console.log("Error deleting location", response);
            setResult("Sorry, we couldn't delete your location at this time.");
           }
    };

    return (
        <div id="delete-dialog" className="w3-modal">
          <div className="w3-modal-content">
            <div className="w3-container">
              <span
                id="dialog-close"
                className="w3-button w3-display-topright"
                onClick={props.closeDialog}
              >
                &times;
              </span>
              <div id="delete-content">
                <h3>Are you sure you want to delete the {props.name} location</h3>
                <section>
                  <button onClick={props.closeDialog}>No</button>            
                  <button onClick={deleteLocation}>Yes</button>
                </section>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default DeleteDialog;