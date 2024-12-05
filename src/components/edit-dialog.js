import React, { useState } from "react";
import './edit-dialog.css';

const EditDialog = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        name: props.name,
        prev_img: props.image,
    });
    const [result, setResult] = useState("");

    const handleChange = (event)  => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value}));
    };
 
    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
      };

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        const response = await fetch(`https://serverside-4czo.onrender.com/api/locations/${props._id}`,
        {
          method:"PUT",
          body:formData
        });

        if(response.status === 200){
            setResult("Location successfully updated");
            event.target.reset();
            props.editLocation(await response.json());
            props.closeDialog();
          } else {
            setResult("Error editing location");
          }
        };

      return (
        <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
                <label htmlFor="name">Location Name:</label>
                <input type="text" id="name" name="name" value={inputs.name || ""} onChange={handleChange} required />
            </p>
            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? `http://localhost:3001/images/${inputs.prev_img}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept=""
                />
              </p>
            </section>
            <p>
                <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
 };

export default EditDialog;